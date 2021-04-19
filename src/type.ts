export class Token {
    constructor(private _name: string = ""){
    }

    toString() {
        return this._name
    }
}