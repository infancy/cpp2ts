//@ts-nocheck
/** readme
 * https://github.com/tunnelvisionlabs/antlr4ts
 * https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md
 */

import {config} from "../../cpp2ts.config"
//import * as antlr4ts from "../node_modules/antlr4ts/index"
import antlr4 from "./antlr4"
import {InputStream, CommonTokenStream} from "./antlr4"
//import {tree} from "./antlr4"
import {TerminalNode} from "antlr4ts/tree"
//import {TokenStream} from "antlr4ts/TokenStream"

import CPP14Lexer from './CPP14Lexer'

import * as ctx from '../antlr4ts/CPP14Parser'
import CPP14Parser from './CPP14Parser'
import CPP14ParserListener from './CPP14ParserListener'
//import {CPP14ParserVisitor} from './CPP14ParserVisitor'

export class CPP2TSModifier extends CPP14ParserListener {
}

export class CPP2TSConverter extends CPP14ParserListener {
    private _ts:string = "";

    getResult(){
        return this._ts
    }

    /*
    constructor(private _parser: CPP14Parser){
        
    }

    enterClassDeclaration(ctx:CPP14Parser.ClassDeclarationContext){
        console.log("interface I"+ctx.Identifier()+" {");
    }

    exitClassDeclaration(ctx:CPP14Parser.ClassDeclarationContext){
        console.log("}");
    }



    enterMethodDeclaration(ctx:CPP14Parser.MethodDeclarationContext){
        const tokens = this._parser.inputStream;

        let type = "void";
        if ( ctx.type()!=null ) {
            type = tokens.getText(ctx.type());
        }
        const args = tokens.getText(ctx.formalParameters());
        console.log(`\t${type} ${ctx.Identifier()}${args};`);
    }
    */

    enterClassSpecifier(ctx:any){
        this._ts += "Class\n"
    }

    //enterClassName(ctx:CPP14Parser.ClassNameContext){}

    convertType(type: string){
        if(type === "float"){
            return "number"
        }else if(type === "int" || type === "uint"){
            return "bigint"
        }

        return type
    }

    getDeclSpecifierSeq(ctx: ctx.DeclSpecifierSeqContext | undefined){
        if(ctx){
            let declSpecifiers = ctx.declSpecifier()
            let _type = declSpecifiers[declSpecifiers.length - 1].getText()
            _type = this.convertType(_type)
    
            return _type
        }

        return "any"
    }

    getParamterDeclaration(ctx: ctx.ParameterDeclarationContext){
        let _type = this.getDeclSpecifierSeq(ctx.declSpecifierSeq())
        
        //let _pointerOp = ctx.declarator()?.pointerDeclarator()?.pointerOperator().getText()
        let _name = ctx.declarator()?.pointerDeclarator()?.noPointerDeclarator().getText()

        return `${_name}: ${_type}`
    }

    getParameterDeclarationClause(ctx: ctx.ParameterDeclarationClauseContext | undefined){
        let list = ctx?.parameterDeclarationList().parameterDeclaration()

        let ret = ""
        for(let decl of list ?? []){
            ret += this.getParamterDeclaration(decl)
            ret += ", "
        }
        return ret.substr(0, ret.length - 2)
    }

    enterFunctionDefinition(ctx:ctx.FunctionDefinitionContext){
        //let ts = this._ts

        let _export = config.exportAll ? "export" : ""

        let _funcDecl = ctx.declarator().pointerDeclarator()?.noPointerDeclarator()
        let _funcName = _funcDecl?.noPointerDeclarator()?.getText()
        let _parasList = this.getParameterDeclarationClause(_funcDecl?.parametersAndQualifiers()?.parameterDeclarationClause())
        
        let _retType = ctx.declSpecifierSeq()?.getText()    
        _retType = this.convertType(_retType)

        this._ts += `${_export} function ${_funcName}(${_parasList}): ${_retType} {\n`
    }
    exitFunctionDefinition(ctx: ctx.FunctionDefinitionContext){
        this._ts += "}\n\n"
    }




    /*
    enterJumpStatement(ctx: ctx.JumpStatementContext){

        let _jump = ""
        if(ctx.Break()) _jump = "break"
        else if(ctx.Continue()) _jump = "continue"
        else if(ctx.Return()) _jump = "return"

        this._ts += `${_jump} ${ctx.expression()?.getText()}`


        this._ts += ctx.getText()
    }
    */
    getDeclarationStatement(ctx: ctx.DeclarationStatementContext){
        let simpleDecl = ctx.blockDeclaration().simpleDeclaration()
        if(simpleDecl){
            let _type = this.getDeclSpecifierSeq(simpleDecl.declSpecifierSeq())

            let initDecl = simpleDecl.initDeclaratorList()?.initDeclarator()[0]
            
            let _name = initDecl?.declarator().getText()
            if(_name === "Vec3f" || _name === "Vec3f" || _name === "Vec3f" || _name === "Vec3f")
                _name = "new " + _name

            let _init = initDecl?.initializer()?.getText() ?? "= 0"

            return `let ${_name}:${_type} ${_init}\n`
        }
    }
    enterStatement(ctx: ctx.StatementContext){
        if(ctx.parentCtx?.parentCtx?.parentCtx?.ruleIndex !== CPP14Parser.RULE_functionBody)
            return

        {
            let decl = ctx.declarationStatement()
            if(decl){
                this._ts += this.getDeclarationStatement(decl)
                return
            }
        }

        /*
        {
            let retDecl = ctx.jumpStatement()
            if(retDecl){
                this._ts += retDecl.getText()
                //this._ts += `return ${retDecl.expression()?.getText()}`
                return
            }
        }

        {
            let selecDecl = ctx.selectionStatement()
            if(selecDecl){
                this._ts += selecDecl.getText()
                return
            }
        }
        */

        this._ts += ctx.getText()
    }
    exitStatement(ctx: ctx.StatementContext){
        this._ts += "\n"
    }

    /*
    enterFunctionBody(ctx:any){

    }


    enterExpression(ctx:any) {
        //this._ts += "Hello\n"
    }
    */
}

export class CPP2TS {
    static convert(input:string):string {
        const inputStream = new InputStream(input)
        const lexer = new CPP14Lexer(inputStream)

        const tokenStream = new CommonTokenStream(lexer)
        const parser = new CPP14Parser(tokenStream)
        //parser.buildParseTree = true
        const tree = parser.translationUnit()

        // travel multi times
        //const modifier = new CPP2TSModifier()
        //antlr4.tree.ParseTreeWalker.DEFAULT.walk(modifier as CPP14ParserListener, tree)

        const converter = new CPP2TSConverter()
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(converter as CPP14ParserListener, tree)

        let raw = converter.getResult()
        raw = raw.replaceAll("std :: ", "Math.")
        raw = raw.replaceAll(" . ", ".")
        return raw
    }
}