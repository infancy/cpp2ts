/** readme
 * https://github.com/tunnelvisionlabs/antlr4ts
 * https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md
 */

import {config} from "../../cpp2ts.config"
//import * as antlr4ts from "../node_modules/antlr4ts/index"
import * as antlr4ts from "antlr4ts"
import {CommonTokenStream} from "antlr4ts"
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker"
//import {tree} from "antlr4"
//import {TerminalNode, ParseTreeWalker} from "./antlr4ts/tree"
//import {TokenStream} from "antlr4ts/TokenStream"

import {CPP14Lexer} from './CPP14Lexer'

import * as ctx from './CPP14Parser'
import {CPP14Parser} from './CPP14Parser'
import {CPP14ParserListener} from './CPP14ParserListener'
//import {CPP14ParserVisitor} from './CPP14ParserVisitor'

export class CPP2TSConverter implements CPP14ParserListener {
    private _ts:string = "";

    getResult(){
        return this._ts
    }

    /*
    constructor(private _parser: CPP14Parser){
        
    }

    enterClassDeclaration(ctx:ctx.ClassDeclarationContext){
        console.log("interface I"+ctx.Identifier()+" {");
    }

    exitClassDeclaration(ctx:ctx.ClassDeclarationContext){
        console.log("}");
    }



    enterMethodDeclaration(ctx:ctx.MethodDeclarationContext){
        const tokens = this._parser.inputStream;

        let type = "void";
        if ( ctx.type()!=null ) {
            type = tokens.getText(ctx.type());
        }
        const args = tokens.getText(ctx.formalParameters());
        console.log(`\t${type} ${ctx.Identifier()}${args};`);
    }
    */

    enterClassSpecifier(ctx:ctx.ClassSpecifierContext){
        this._ts += "Class\n"
    }

    //enterClassName(ctx:ctx.ClassNameContext){}



    //enterParameterDeclarationClause(ctx:ctx.ParameterDeclarationClauseContext){}
    //enterParameterDeclarationList(ctx:ctx.ParameterDeclarationListContext){}
    //enterParameterDeclaration(ctx:ctx.ParameterDeclarationContext){}



    getSimpleTypeSpecifier(){

    }

    /*functionDefinition:
	attributeSpecifierSeq? declSpecifierSeq? declarator virtualSpecifierSeq? functionBody;
    */
    enterFunctionDefinition(ctx:ctx.FunctionDefinitionContext){
        //let ts = this._ts

        let _export = config.exportAll ? "export" : ""

        let _funcName = ""

        let _retType = ""
        const decls = ctx.declSpecifierSeq()?.declSpecifier()
        if(decls && decls[0]){
            _retType = decls[0].text ?? "any"
        }

        this._ts += `${_export} function ${_funcName}(): ${_retType} {`

        //this._ts += ctx.declSpecifierSeq()?.declSpecifier()[0].typeSpecifier()?.
        //   trailingTypeSpecifier()?.simpleTypeSpecifier()?.text ?? "any"
    }
    exitFunctionDefinition(ctx: ctx.FunctionDefinitionContext){
        this._ts += "\n}\n"
    }

    enterFunctionBody(ctx:ctx.FunctionBodyContext){

    }


    enterExpression(ctx:ctx.ExpressionContext) {
        this._ts += "Hello\n"
    }
}

export class CPP2TS {
    static convert(input:string):string {
        const inputStream = new antlr4ts.ANTLRInputStream(input)
        const lexer = new CPP14Lexer(inputStream)

        const tokenStream = new CommonTokenStream(lexer)
        const parser = new CPP14Parser(tokenStream)
        parser.buildParseTree = true
        const tree = parser.translationUnit()

        //const converter = new CPP2TSConverter(parser)
        const converter = new CPP2TSConverter()
        ParseTreeWalker.DEFAULT.walk(converter as CPP14ParserListener, tree)

        return converter.getResult()
    }
}