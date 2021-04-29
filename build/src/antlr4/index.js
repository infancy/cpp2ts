import {config} from "../../cpp2ts.config.js";
import antlr4 from "./antlr4.js";
import {InputStream, CommonTokenStream} from "./antlr4.js";
import CPP14Lexer from "./CPP14Lexer.js";
import CPP14Parser from "./CPP14Parser.js";
import CPP14ParserListener from "./CPP14ParserListener.js";
export class CPP2TSModifier extends CPP14ParserListener {
}
export class CPP2TSConverter extends CPP14ParserListener {
  constructor() {
    super(...arguments);
    this._ts = "";
  }
  getResult() {
    return this._ts;
  }
  enterClassSpecifier(ctx2) {
    this._ts += "Class\n";
  }
  convertType(type) {
    if (type === "float") {
      return "number";
    } else if (type === "int" || type === "uint") {
      return "bigint";
    }
    return type;
  }
  getDeclSpecifierSeq(ctx2) {
    if (ctx2) {
      let declSpecifiers = ctx2.declSpecifier();
      let _type = declSpecifiers[declSpecifiers.length - 1].getText();
      _type = this.convertType(_type);
      return _type;
    }
    return "any";
  }
  getParamterDeclaration(ctx2) {
    let _type = this.getDeclSpecifierSeq(ctx2.declSpecifierSeq());
    let _name = ctx2.declarator()?.pointerDeclarator()?.noPointerDeclarator().getText();
    return `${_name}: ${_type}`;
  }
  getParameterDeclarationClause(ctx2) {
    let list = ctx2?.parameterDeclarationList().parameterDeclaration();
    let ret = "";
    for (let decl of list ?? []) {
      ret += this.getParamterDeclaration(decl);
      ret += ", ";
    }
    return ret.substr(0, ret.length - 2);
  }
  enterFunctionDefinition(ctx2) {
    let _export = config.exportAll ? "export" : "";
    let _funcDecl = ctx2.declarator().pointerDeclarator()?.noPointerDeclarator();
    let _funcName = _funcDecl?.noPointerDeclarator()?.getText();
    let _parasList = this.getParameterDeclarationClause(_funcDecl?.parametersAndQualifiers()?.parameterDeclarationClause());
    let _retType = ctx2.declSpecifierSeq()?.getText();
    _retType = this.convertType(_retType);
    this._ts += `${_export} function ${_funcName}(${_parasList}): ${_retType} {
`;
  }
  exitFunctionDefinition(ctx2) {
    this._ts += "}\n\n";
  }
  getDeclarationStatement(ctx2) {
    let simpleDecl = ctx2.blockDeclaration().simpleDeclaration();
    if (simpleDecl) {
      let _type = this.getDeclSpecifierSeq(simpleDecl.declSpecifierSeq());
      let initDecl = simpleDecl.initDeclaratorList()?.initDeclarator()[0];
      let _name = initDecl?.declarator().getText();
      if (_name === "Vec3f" || _name === "Vec3f" || _name === "Vec3f" || _name === "Vec3f")
        _name = "new " + _name;
      let _init = initDecl?.initializer()?.getText() ?? "= 0";
      return `let ${_name}:${_type} ${_init}
`;
    }
  }
  enterStatement(ctx2) {
    if (ctx2.parentCtx?.parentCtx?.parentCtx?.ruleIndex !== CPP14Parser.RULE_functionBody)
      return;
    {
      let decl = ctx2.declarationStatement();
      if (decl) {
        this._ts += this.getDeclarationStatement(decl);
        return;
      }
    }
    this._ts += ctx2.getText();
  }
  exitStatement(ctx2) {
    this._ts += "\n";
  }
}
export class CPP2TS {
  static convert(input) {
    const inputStream = new InputStream(input);
    const lexer = new CPP14Lexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new CPP14Parser(tokenStream);
    const tree = parser.translationUnit();
    const converter = new CPP2TSConverter();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(converter, tree);
    let raw = converter.getResult();
    raw = raw.replaceAll("std :: ", "Math.");
    raw = raw.replaceAll(" . ", ".");
    return raw;
  }
}
