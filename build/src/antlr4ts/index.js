import {config} from "../../cpp2ts.config.js";
import * as antlr4ts from "../../_snowpack/pkg/antlr4ts.js";
import {CommonTokenStream} from "../../_snowpack/pkg/antlr4ts.js";
import {ParseTreeWalker} from "../../_snowpack/pkg/antlr4ts/tree/ParseTreeWalker.js";
import {CPP14Lexer} from "./CPP14Lexer.js";
import {CPP14Parser} from "./CPP14Parser.js";
export class CPP2TSConverter {
  constructor() {
    this._ts = "";
  }
  getResult() {
    return this._ts;
  }
  enterClassSpecifier(ctx2) {
    this._ts += "Class\n";
  }
  getSimpleTypeSpecifier() {
  }
  enterFunctionDefinition(ctx2) {
    let _export = config.exportAll ? "export" : "";
    let _funcName = "";
    let _retType = "";
    const decls = ctx2.declSpecifierSeq()?.declSpecifier();
    if (decls && decls[0]) {
      _retType = decls[0].text ?? "any";
    }
    this._ts += `${_export} function ${_funcName}(): ${_retType} {`;
  }
  exitFunctionDefinition(ctx2) {
    this._ts += "\n}\n";
  }
  enterFunctionBody(ctx2) {
  }
  enterExpression(ctx2) {
    this._ts += "Hello\n";
  }
}
export class CPP2TS {
  static convert(input) {
    const inputStream = new antlr4ts.ANTLRInputStream(input);
    const lexer = new CPP14Lexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new CPP14Parser(tokenStream);
    parser.buildParseTree = true;
    const tree = parser.translationUnit();
    const converter = new CPP2TSConverter();
    ParseTreeWalker.DEFAULT.walk(converter, tree);
    return converter.getResult();
  }
}
