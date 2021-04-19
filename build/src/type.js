export class Token {
  constructor(_name = "") {
    this._name = _name;
  }
  toString() {
    return this._name;
  }
}
