import antlr4 from "./antlr4.js";
import {InputStream, CommonTokenStream} from "./antlr4.js";
import CPP14Lexer from "./CPP14Lexer.js";
import CPP14Parser from "./CPP14Parser.js";
import CPP14ParserListener from "./CPP14ParserListener.js";
export class CPP2TSConverter extends CPP14ParserListener {
  constructor() {
    super(...arguments);
    this._ts = "";
  }
  getResult() {
    return this._ts;
  }
  enterClassSpecifier(ctx) {
    this._ts += "Class\n";
  }
  enterFunctionDefinition(ctx) {
    this._ts += "Function\n";
  }
  enterFunctionBody(ctx) {
  }
  enterExpression(ctx) {
    this._ts += "Hello\n";
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
    return converter.getResult();
  }
}
