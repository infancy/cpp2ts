import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-8c19dec8.js';
import { D as Decorators } from './Decorators-d5ac3968.js';
import { I as Interval_1 } from './Interval-c51e6610.js';
import { T as Token_1 } from './Token-75e833f9.js';

var TerminalNode_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalNode = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:48.1433686-07:00



class TerminalNode {
    constructor(symbol) {
        this._symbol = symbol;
    }
    getChild(i) {
        throw new RangeError("Terminal Node has no children.");
    }
    get symbol() {
        return this._symbol;
    }
    get parent() {
        return this._parent;
    }
    setParent(parent) {
        this._parent = parent;
    }
    get payload() {
        return this._symbol;
    }
    get sourceInterval() {
        let tokenIndex = this._symbol.tokenIndex;
        return new Interval_1.Interval(tokenIndex, tokenIndex);
    }
    get childCount() {
        return 0;
    }
    accept(visitor) {
        return visitor.visitTerminal(this);
    }
    get text() {
        return this._symbol.text || "";
    }
    toStringTree(parser) {
        return this.toString();
    }
    toString() {
        if (this._symbol.type === Token_1.Token.EOF) {
            return "<EOF>";
        }
        return this._symbol.text || "";
    }
}
__decorate([
    Decorators.Override
], TerminalNode.prototype, "getChild", null);
__decorate([
    Decorators.Override
], TerminalNode.prototype, "parent", null);
__decorate([
    Decorators.Override
], TerminalNode.prototype, "setParent", null);
__decorate([
    Decorators.Override
], TerminalNode.prototype, "payload", null);
__decorate([
    Decorators.Override
], TerminalNode.prototype, "sourceInterval", null);
__decorate([
    Decorators.Override
], TerminalNode.prototype, "childCount", null);
__decorate([
    Decorators.Override
], TerminalNode.prototype, "accept", null);
__decorate([
    Decorators.Override
], TerminalNode.prototype, "text", null);
__decorate([
    Decorators.Override
], TerminalNode.prototype, "toStringTree", null);
__decorate([
    Decorators.Override
], TerminalNode.prototype, "toString", null);
exports.TerminalNode = TerminalNode;

});

var ErrorNode_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorNode = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:47.4646355-07:00


/** Represents a token that was consumed during resynchronization
 *  rather than during a valid match operation. For example,
 *  we will create this kind of a node during single token insertion
 *  and deletion as well as during "consume until error recovery set"
 *  upon no viable alternative exceptions.
 */
class ErrorNode extends TerminalNode_1.TerminalNode {
    constructor(token) {
        super(token);
    }
    accept(visitor) {
        return visitor.visitErrorNode(this);
    }
}
__decorate([
    Decorators.Override
], ErrorNode.prototype, "accept", null);
exports.ErrorNode = ErrorNode;

});

var RuleNode_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleNode = void 0;
class RuleNode {
}
exports.RuleNode = RuleNode;

});

export { ErrorNode_1 as E, RuleNode_1 as R, TerminalNode_1 as T };
