import { Token } from "./type";



export class lexer {
    private _src: string

    constructor(cpp_src: string){
        this._src = cpp_src.slice()
    }

    next(): Token {
        return new Token(this._src)
    }
}