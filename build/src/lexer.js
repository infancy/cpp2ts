import {Token} from "./type.js";
export class lexer {
  constructor(cpp_src) {
    this._src = cpp_src.slice();
  }
  next() {
    return new Token(this._src);
  }
}
