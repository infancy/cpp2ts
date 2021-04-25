import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-8c19dec8.js';
import { R as RecognitionException_1 } from './RecognitionException-83ca2269.js';
import { D as Decorators } from './Decorators-d5ac3968.js';
import { a as AbstractPredicateTransition_1, S as SemanticContext_1 } from './SemanticContext-0e784ba9.js';

var PredicateTransition_1 = createCommonjsModule(function (module, exports) {
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
var __param = (commonjsGlobal && commonjsGlobal.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredicateTransition = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:35.2826960-07:00



/** TODO: this is old comment:
 *  A tree of semantic predicates from the grammar AST if label==SEMPRED.
 *  In the ATN, labels will always be exactly one predicate, but the DFA
 *  may have to combine a bunch of them as it collects predicates from
 *  multiple ATN configurations into a single DFA state.
 */
let PredicateTransition = class PredicateTransition extends AbstractPredicateTransition_1.AbstractPredicateTransition {
    constructor(target, ruleIndex, predIndex, isCtxDependent) {
        super(target);
        this.ruleIndex = ruleIndex;
        this.predIndex = predIndex;
        this.isCtxDependent = isCtxDependent;
    }
    get serializationType() {
        return 4 /* PREDICATE */;
    }
    get isEpsilon() { return true; }
    matches(symbol, minVocabSymbol, maxVocabSymbol) {
        return false;
    }
    get predicate() {
        return new SemanticContext_1.SemanticContext.Predicate(this.ruleIndex, this.predIndex, this.isCtxDependent);
    }
    toString() {
        return "pred_" + this.ruleIndex + ":" + this.predIndex;
    }
};
__decorate([
    Decorators.Override
], PredicateTransition.prototype, "serializationType", null);
__decorate([
    Decorators.Override
], PredicateTransition.prototype, "isEpsilon", null);
__decorate([
    Decorators.Override
], PredicateTransition.prototype, "matches", null);
__decorate([
    Decorators.Override,
    Decorators.NotNull
], PredicateTransition.prototype, "toString", null);
PredicateTransition = __decorate([
    __param(0, Decorators.NotNull)
], PredicateTransition);
exports.PredicateTransition = PredicateTransition;

});

var FailedPredicateException_1 = createCommonjsModule(function (module, exports) {
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
var __param = (commonjsGlobal && commonjsGlobal.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailedPredicateException = void 0;



/** A semantic predicate failed during validation.  Validation of predicates
 *  occurs when normally parsing the alternative just like matching a token.
 *  Disambiguating predicate evaluation occurs when we test a predicate during
 *  prediction.
 */
let FailedPredicateException = class FailedPredicateException extends RecognitionException_1.RecognitionException {
    constructor(recognizer, predicate, message) {
        super(recognizer, recognizer.inputStream, recognizer.context, FailedPredicateException.formatMessage(predicate, message));
        let s = recognizer.interpreter.atn.states[recognizer.state];
        let trans = s.transition(0);
        if (trans instanceof PredicateTransition_1.PredicateTransition) {
            this._ruleIndex = trans.ruleIndex;
            this._predicateIndex = trans.predIndex;
        }
        else {
            this._ruleIndex = 0;
            this._predicateIndex = 0;
        }
        this._predicate = predicate;
        super.setOffendingToken(recognizer, recognizer.currentToken);
    }
    get ruleIndex() {
        return this._ruleIndex;
    }
    get predicateIndex() {
        return this._predicateIndex;
    }
    get predicate() {
        return this._predicate;
    }
    static formatMessage(predicate, message) {
        if (message) {
            return message;
        }
        return `failed predicate: {${predicate}}?`;
    }
};
__decorate([
    Decorators.NotNull
], FailedPredicateException, "formatMessage", null);
FailedPredicateException = __decorate([
    __param(0, Decorators.NotNull)
], FailedPredicateException);
exports.FailedPredicateException = FailedPredicateException;

});

export { FailedPredicateException_1 as F, PredicateTransition_1 as P };
