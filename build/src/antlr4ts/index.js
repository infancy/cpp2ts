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
  enterFunctionDefinition(ctx2) {
    this._ts += "Function\n";
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
