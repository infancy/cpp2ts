import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-8c19dec8.js';
import { I as IntervalSet_1, D as DecisionState_1, e as ATNStateType_1, f as ATNState_1, A as ATN_1, C as CommonToken_1, R as Recognizer_1, g as Array2DHashMap_1, h as RuleStopState_1, i as ATNSimulator_1, j as PredictionContextCache_1, B as BitSet_1, k as ATNConfigSet_1, l as IntegerList_1, m as PredictionContext_1, n as ATNConfig_1, o as Arrays_1, p as DFAState_1, q as RuleTransition_1, S as SetTransition_1, N as NotSetTransition_1, r as AcceptStateInfo_1, s as InvalidState_1, t as DFA_1, u as StarLoopEntryState_1, v as BasicState_1, W as WildcardTransition_1, P as ProxyErrorListener_1, L as Lexer_1, b as CommonTokenFactory_1, a as LexerATNSimulator_1, d as LexerNoViableAltException_1, w as IntegerStack_1 } from './IntervalSet-c162c300.js';
import { P as PredicateTransition_1, F as FailedPredicateException_1 } from './FailedPredicateException-7c0d9412.js';
import { R as RecognitionException_1 } from './RecognitionException-83ca2269.js';
import { D as Decorators } from './Decorators-d5ac3968.js';
import process from 'process';
import { U as Utils } from './Utils-bdfdedae.js';
import { T as Transition_1, M as MurmurHash_1, S as SemanticContext_1, A as Array2DHashSet_1, O as ObjectEqualityComparator_1, a as AbstractPredicateTransition_1 } from './SemanticContext-0e784ba9.js';
import { I as Interval_1 } from './Interval-c51e6610.js';
import { T as Token_1, I as IntStream_1 } from './Token-75e833f9.js';
import { R as RuleNode_1, E as ErrorNode_1, T as TerminalNode_1 } from './RuleNode-b68abfc6.js';
import { V as VocabularyImpl_1 } from './VocabularyImpl-84e96b9c.js';
import assert from 'assert';

var InputMismatchException_1 = createCommonjsModule(function (module, exports) {
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
exports.InputMismatchException = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:51.5187682-07:00


/** This signifies any kind of mismatched input exceptions such as
 *  when the current input does not match the expected token.
 */
let InputMismatchException = class InputMismatchException extends RecognitionException_1.RecognitionException {
    constructor(recognizer, state, context) {
        if (context === undefined) {
            context = recognizer.context;
        }
        super(recognizer, recognizer.inputStream, context);
        if (state !== undefined) {
            this.setOffendingState(state);
        }
        this.setOffendingToken(recognizer, recognizer.currentToken);
    }
};
InputMismatchException = __decorate([
    __param(0, Decorators.NotNull)
], InputMismatchException);
exports.InputMismatchException = InputMismatchException;

});

var ATNDeserializationOptions_1 = createCommonjsModule(function (module, exports) {
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
exports.ATNDeserializationOptions = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:25.8187912-07:00

/**
 *
 * @author Sam Harwell
 */
class ATNDeserializationOptions {
    constructor(options) {
        this.readOnly = false;
        if (options) {
            this.verifyATN = options.verifyATN;
            this.generateRuleBypassTransitions = options.generateRuleBypassTransitions;
            this.optimize = options.optimize;
        }
        else {
            this.verifyATN = true;
            this.generateRuleBypassTransitions = false;
            this.optimize = true;
        }
    }
    static get defaultOptions() {
        if (ATNDeserializationOptions._defaultOptions == null) {
            ATNDeserializationOptions._defaultOptions = new ATNDeserializationOptions();
            ATNDeserializationOptions._defaultOptions.makeReadOnly();
        }
        return ATNDeserializationOptions._defaultOptions;
    }
    get isReadOnly() {
        return this.readOnly;
    }
    makeReadOnly() {
        this.readOnly = true;
    }
    get isVerifyATN() {
        return this.verifyATN;
    }
    set isVerifyATN(verifyATN) {
        this.throwIfReadOnly();
        this.verifyATN = verifyATN;
    }
    get isGenerateRuleBypassTransitions() {
        return this.generateRuleBypassTransitions;
    }
    set isGenerateRuleBypassTransitions(generateRuleBypassTransitions) {
        this.throwIfReadOnly();
        this.generateRuleBypassTransitions = generateRuleBypassTransitions;
    }
    get isOptimize() {
        return this.optimize;
    }
    set isOptimize(optimize) {
        this.throwIfReadOnly();
        this.optimize = optimize;
    }
    throwIfReadOnly() {
        if (this.isReadOnly) {
            throw new Error("The object is read only.");
        }
    }
}
__decorate([
    Decorators.NotNull
], ATNDeserializationOptions, "defaultOptions", null);
exports.ATNDeserializationOptions = ATNDeserializationOptions;

});

var ActionTransition_1 = createCommonjsModule(function (module, exports) {
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
exports.ActionTransition = void 0;


let ActionTransition = class ActionTransition extends Transition_1.Transition {
    constructor(target, ruleIndex, actionIndex = -1, isCtxDependent = false) {
        super(target);
        this.ruleIndex = ruleIndex;
        this.actionIndex = actionIndex;
        this.isCtxDependent = isCtxDependent;
    }
    get serializationType() {
        return 6 /* ACTION */;
    }
    get isEpsilon() {
        return true; // we are to be ignored by analysis 'cept for predicates
    }
    matches(symbol, minVocabSymbol, maxVocabSymbol) {
        return false;
    }
    toString() {
        return "action_" + this.ruleIndex + ":" + this.actionIndex;
    }
};
__decorate([
    Decorators.Override
], ActionTransition.prototype, "serializationType", null);
__decorate([
    Decorators.Override
], ActionTransition.prototype, "isEpsilon", null);
__decorate([
    Decorators.Override
], ActionTransition.prototype, "matches", null);
__decorate([
    Decorators.Override
], ActionTransition.prototype, "toString", null);
ActionTransition = __decorate([
    __param(0, Decorators.NotNull)
], ActionTransition);
exports.ActionTransition = ActionTransition;

});

var AtomTransition_1 = createCommonjsModule(function (module, exports) {
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
exports.AtomTransition = void 0;



/** TODO: make all transitions sets? no, should remove set edges */
let AtomTransition = class AtomTransition extends Transition_1.Transition {
    constructor(target, label) {
        super(target);
        this._label = label;
    }
    get serializationType() {
        return 5 /* ATOM */;
    }
    get label() {
        return IntervalSet_1.IntervalSet.of(this._label);
    }
    matches(symbol, minVocabSymbol, maxVocabSymbol) {
        return this._label === symbol;
    }
    toString() {
        return String(this.label);
    }
};
__decorate([
    Decorators.Override
], AtomTransition.prototype, "serializationType", null);
__decorate([
    Decorators.Override,
    Decorators.NotNull
], AtomTransition.prototype, "label", null);
__decorate([
    Decorators.Override
], AtomTransition.prototype, "matches", null);
__decorate([
    Decorators.Override,
    Decorators.NotNull
], AtomTransition.prototype, "toString", null);
AtomTransition = __decorate([
    __param(0, Decorators.NotNull)
], AtomTransition);
exports.AtomTransition = AtomTransition;

});

var BlockStartState_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockStartState = void 0;

/**  The start of a regular `(...)` block. */
class BlockStartState extends DecisionState_1.DecisionState {
}
exports.BlockStartState = BlockStartState;

});

var BasicBlockStartState_1 = createCommonjsModule(function (module, exports) {
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
exports.BasicBlockStartState = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:27.7669801-07:00



/**
 *
 * @author Sam Harwell
 */
class BasicBlockStartState extends BlockStartState_1.BlockStartState {
    get stateType() {
        return ATNStateType_1.ATNStateType.BLOCK_START;
    }
}
__decorate([
    Decorators.Override
], BasicBlockStartState.prototype, "stateType", null);
exports.BasicBlockStartState = BasicBlockStartState;

});

var BlockEndState_1 = createCommonjsModule(function (module, exports) {
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
exports.BlockEndState = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:27.9125304-07:00



/** Terminal node of a simple `(a|b|c)` block. */
class BlockEndState extends ATNState_1.ATNState {
    get stateType() {
        return ATNStateType_1.ATNStateType.BLOCK_END;
    }
}
__decorate([
    Decorators.Override
], BlockEndState.prototype, "stateType", null);
exports.BlockEndState = BlockEndState;

});

var EpsilonTransition_1 = createCommonjsModule(function (module, exports) {
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
exports.EpsilonTransition = void 0;


let EpsilonTransition = class EpsilonTransition extends Transition_1.Transition {
    constructor(target, outermostPrecedenceReturn = -1) {
        super(target);
        this._outermostPrecedenceReturn = outermostPrecedenceReturn;
    }
    /**
     * @returns the rule index of a precedence rule for which this transition is
     * returning from, where the precedence value is 0; otherwise, -1.
     *
     * @see ATNConfig.isPrecedenceFilterSuppressed
     * @see ParserATNSimulator#applyPrecedenceFilter(ATNConfigSet, ParserRuleContext, PredictionContextCache)
     * @since 4.4.1
     */
    get outermostPrecedenceReturn() {
        return this._outermostPrecedenceReturn;
    }
    get serializationType() {
        return 1 /* EPSILON */;
    }
    get isEpsilon() {
        return true;
    }
    matches(symbol, minVocabSymbol, maxVocabSymbol) {
        return false;
    }
    toString() {
        return "epsilon";
    }
};
__decorate([
    Decorators.Override
], EpsilonTransition.prototype, "serializationType", null);
__decorate([
    Decorators.Override
], EpsilonTransition.prototype, "isEpsilon", null);
__decorate([
    Decorators.Override
], EpsilonTransition.prototype, "matches", null);
__decorate([
    Decorators.Override,
    Decorators.NotNull
], EpsilonTransition.prototype, "toString", null);
EpsilonTransition = __decorate([
    __param(0, Decorators.NotNull)
], EpsilonTransition);
exports.EpsilonTransition = EpsilonTransition;

});

var LexerChannelAction_1 = createCommonjsModule(function (module, exports) {
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
exports.LexerChannelAction = void 0;


/**
 * Implements the `channel` lexer action by calling
 * {@link Lexer#setChannel} with the assigned channel.
 *
 * @author Sam Harwell
 * @since 4.2
 */
class LexerChannelAction {
    /**
     * Constructs a new `channel` action with the specified channel value.
     * @param channel The channel value to pass to {@link Lexer#setChannel}.
     */
    constructor(channel) {
        this._channel = channel;
    }
    /**
     * Gets the channel to use for the {@link Token} created by the lexer.
     *
     * @returns The channel to use for the {@link Token} created by the lexer.
     */
    get channel() {
        return this._channel;
    }
    /**
     * {@inheritDoc}
     * @returns This method returns {@link LexerActionType#CHANNEL}.
     */
    get actionType() {
        return 0 /* CHANNEL */;
    }
    /**
     * {@inheritDoc}
     * @returns This method returns `false`.
     */
    get isPositionDependent() {
        return false;
    }
    /**
     * {@inheritDoc}
     *
     * This action is implemented by calling {@link Lexer#setChannel} with the
     * value provided by {@link #getChannel}.
     */
    execute(lexer) {
        lexer.channel = this._channel;
    }
    hashCode() {
        let hash = MurmurHash_1.MurmurHash.initialize();
        hash = MurmurHash_1.MurmurHash.update(hash, this.actionType);
        hash = MurmurHash_1.MurmurHash.update(hash, this._channel);
        return MurmurHash_1.MurmurHash.finish(hash, 2);
    }
    equals(obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof LexerChannelAction)) {
            return false;
        }
        return this._channel === obj._channel;
    }
    toString() {
        return `channel(${this._channel})`;
    }
}
__decorate([
    Decorators.Override
], LexerChannelAction.prototype, "actionType", null);
__decorate([
    Decorators.Override
], LexerChannelAction.prototype, "isPositionDependent", null);
__decorate([
    Decorators.Override,
    __param(0, Decorators.NotNull)
], LexerChannelAction.prototype, "execute", null);
__decorate([
    Decorators.Override
], LexerChannelAction.prototype, "hashCode", null);
__decorate([
    Decorators.Override
], LexerChannelAction.prototype, "equals", null);
__decorate([
    Decorators.Override
], LexerChannelAction.prototype, "toString", null);
exports.LexerChannelAction = LexerChannelAction;

});

var LexerCustomAction_1 = createCommonjsModule(function (module, exports) {
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
exports.LexerCustomAction = void 0;


/**
 * Executes a custom lexer action by calling {@link Recognizer#action} with the
 * rule and action indexes assigned to the custom action. The implementation of
 * a custom action is added to the generated code for the lexer in an override
 * of {@link Recognizer#action} when the grammar is compiled.
 *
 * This class may represent embedded actions created with the `{...}`
 * syntax in ANTLR 4, as well as actions created for lexer commands where the
 * command argument could not be evaluated when the grammar was compiled.
 *
 * @author Sam Harwell
 * @since 4.2
 */
class LexerCustomAction {
    /**
     * Constructs a custom lexer action with the specified rule and action
     * indexes.
     *
     * @param ruleIndex The rule index to use for calls to
     * {@link Recognizer#action}.
     * @param actionIndex The action index to use for calls to
     * {@link Recognizer#action}.
     */
    constructor(ruleIndex, actionIndex) {
        this._ruleIndex = ruleIndex;
        this._actionIndex = actionIndex;
    }
    /**
     * Gets the rule index to use for calls to {@link Recognizer#action}.
     *
     * @returns The rule index for the custom action.
     */
    get ruleIndex() {
        return this._ruleIndex;
    }
    /**
     * Gets the action index to use for calls to {@link Recognizer#action}.
     *
     * @returns The action index for the custom action.
     */
    get actionIndex() {
        return this._actionIndex;
    }
    /**
     * {@inheritDoc}
     *
     * @returns This method returns {@link LexerActionType#CUSTOM}.
     */
    get actionType() {
        return 1 /* CUSTOM */;
    }
    /**
     * Gets whether the lexer action is position-dependent. Position-dependent
     * actions may have different semantics depending on the {@link CharStream}
     * index at the time the action is executed.
     *
     * Custom actions are position-dependent since they may represent a
     * user-defined embedded action which makes calls to methods like
     * {@link Lexer#getText}.
     *
     * @returns This method returns `true`.
     */
    get isPositionDependent() {
        return true;
    }
    /**
     * {@inheritDoc}
     *
     * Custom actions are implemented by calling {@link Lexer#action} with the
     * appropriate rule and action indexes.
     */
    execute(lexer) {
        lexer.action(undefined, this._ruleIndex, this._actionIndex);
    }
    hashCode() {
        let hash = MurmurHash_1.MurmurHash.initialize();
        hash = MurmurHash_1.MurmurHash.update(hash, this.actionType);
        hash = MurmurHash_1.MurmurHash.update(hash, this._ruleIndex);
        hash = MurmurHash_1.MurmurHash.update(hash, this._actionIndex);
        return MurmurHash_1.MurmurHash.finish(hash, 3);
    }
    equals(obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof LexerCustomAction)) {
            return false;
        }
        return this._ruleIndex === obj._ruleIndex
            && this._actionIndex === obj._actionIndex;
    }
}
__decorate([
    Decorators.Override
], LexerCustomAction.prototype, "actionType", null);
__decorate([
    Decorators.Override
], LexerCustomAction.prototype, "isPositionDependent", null);
__decorate([
    Decorators.Override,
    __param(0, Decorators.NotNull)
], LexerCustomAction.prototype, "execute", null);
__decorate([
    Decorators.Override
], LexerCustomAction.prototype, "hashCode", null);
__decorate([
    Decorators.Override
], LexerCustomAction.prototype, "equals", null);
exports.LexerCustomAction = LexerCustomAction;

});

var LexerModeAction_1 = createCommonjsModule(function (module, exports) {
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
exports.LexerModeAction = void 0;


/**
 * Implements the `mode` lexer action by calling {@link Lexer#mode} with
 * the assigned mode.
 *
 * @author Sam Harwell
 * @since 4.2
 */
class LexerModeAction {
    /**
     * Constructs a new `mode` action with the specified mode value.
     * @param mode The mode value to pass to {@link Lexer#mode}.
     */
    constructor(mode) {
        this._mode = mode;
    }
    /**
     * Get the lexer mode this action should transition the lexer to.
     *
     * @returns The lexer mode for this `mode` command.
     */
    get mode() {
        return this._mode;
    }
    /**
     * {@inheritDoc}
     * @returns This method returns {@link LexerActionType#MODE}.
     */
    get actionType() {
        return 2 /* MODE */;
    }
    /**
     * {@inheritDoc}
     * @returns This method returns `false`.
     */
    get isPositionDependent() {
        return false;
    }
    /**
     * {@inheritDoc}
     *
     * This action is implemented by calling {@link Lexer#mode} with the
     * value provided by {@link #getMode}.
     */
    execute(lexer) {
        lexer.mode(this._mode);
    }
    hashCode() {
        let hash = MurmurHash_1.MurmurHash.initialize();
        hash = MurmurHash_1.MurmurHash.update(hash, this.actionType);
        hash = MurmurHash_1.MurmurHash.update(hash, this._mode);
        return MurmurHash_1.MurmurHash.finish(hash, 2);
    }
    equals(obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof LexerModeAction)) {
            return false;
        }
        return this._mode === obj._mode;
    }
    toString() {
        return `mode(${this._mode})`;
    }
}
__decorate([
    Decorators.Override
], LexerModeAction.prototype, "actionType", null);
__decorate([
    Decorators.Override
], LexerModeAction.prototype, "isPositionDependent", null);
__decorate([
    Decorators.Override,
    __param(0, Decorators.NotNull)
], LexerModeAction.prototype, "execute", null);
__decorate([
    Decorators.Override
], LexerModeAction.prototype, "hashCode", null);
__decorate([
    Decorators.Override
], LexerModeAction.prototype, "equals", null);
__decorate([
    Decorators.Override
], LexerModeAction.prototype, "toString", null);
exports.LexerModeAction = LexerModeAction;

});

var LexerMoreAction_1 = createCommonjsModule(function (module, exports) {
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
exports.LexerMoreAction = void 0;


/**
 * Implements the `more` lexer action by calling {@link Lexer#more}.
 *
 * The `more` command does not have any parameters, so this action is
 * implemented as a singleton instance exposed by {@link #INSTANCE}.
 *
 * @author Sam Harwell
 * @since 4.2
 */
class LexerMoreAction {
    /**
     * Constructs the singleton instance of the lexer `more` command.
     */
    constructor() {
        // intentionally empty
    }
    /**
     * {@inheritDoc}
     * @returns This method returns {@link LexerActionType#MORE}.
     */
    get actionType() {
        return 3 /* MORE */;
    }
    /**
     * {@inheritDoc}
     * @returns This method returns `false`.
     */
    get isPositionDependent() {
        return false;
    }
    /**
     * {@inheritDoc}
     *
     * This action is implemented by calling {@link Lexer#more}.
     */
    execute(lexer) {
        lexer.more();
    }
    hashCode() {
        let hash = MurmurHash_1.MurmurHash.initialize();
        hash = MurmurHash_1.MurmurHash.update(hash, this.actionType);
        return MurmurHash_1.MurmurHash.finish(hash, 1);
    }
    equals(obj) {
        return obj === this;
    }
    toString() {
        return "more";
    }
}
__decorate([
    Decorators.Override
], LexerMoreAction.prototype, "actionType", null);
__decorate([
    Decorators.Override
], LexerMoreAction.prototype, "isPositionDependent", null);
__decorate([
    Decorators.Override,
    __param(0, Decorators.NotNull)
], LexerMoreAction.prototype, "execute", null);
__decorate([
    Decorators.Override
], LexerMoreAction.prototype, "hashCode", null);
__decorate([
    Decorators.Override
], LexerMoreAction.prototype, "equals", null);
__decorate([
    Decorators.Override
], LexerMoreAction.prototype, "toString", null);
exports.LexerMoreAction = LexerMoreAction;
(function (LexerMoreAction) {
    /**
     * Provides a singleton instance of this parameterless lexer action.
     */
    LexerMoreAction.INSTANCE = new LexerMoreAction();
})(LexerMoreAction = exports.LexerMoreAction || (exports.LexerMoreAction = {}));

});

var LexerPopModeAction_1 = createCommonjsModule(function (module, exports) {
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
exports.LexerPopModeAction = void 0;


/**
 * Implements the `popMode` lexer action by calling {@link Lexer#popMode}.
 *
 * The `popMode` command does not have any parameters, so this action is
 * implemented as a singleton instance exposed by {@link #INSTANCE}.
 *
 * @author Sam Harwell
 * @since 4.2
 */
class LexerPopModeAction {
    /**
     * Constructs the singleton instance of the lexer `popMode` command.
     */
    constructor() {
        // intentionally empty
    }
    /**
     * {@inheritDoc}
     * @returns This method returns {@link LexerActionType#POP_MODE}.
     */
    get actionType() {
        return 4 /* POP_MODE */;
    }
    /**
     * {@inheritDoc}
     * @returns This method returns `false`.
     */
    get isPositionDependent() {
        return false;
    }
    /**
     * {@inheritDoc}
     *
     * This action is implemented by calling {@link Lexer#popMode}.
     */
    execute(lexer) {
        lexer.popMode();
    }
    hashCode() {
        let hash = MurmurHash_1.MurmurHash.initialize();
        hash = MurmurHash_1.MurmurHash.update(hash, this.actionType);
        return MurmurHash_1.MurmurHash.finish(hash, 1);
    }
    equals(obj) {
        return obj === this;
    }
    toString() {
        return "popMode";
    }
}
__decorate([
    Decorators.Override
], LexerPopModeAction.prototype, "actionType", null);
__decorate([
    Decorators.Override
], LexerPopModeAction.prototype, "isPositionDependent", null);
__decorate([
    Decorators.Override,
    __param(0, Decorators.NotNull)
], LexerPopModeAction.prototype, "execute", null);
__decorate([
    Decorators.Override
], LexerPopModeAction.prototype, "hashCode", null);
__decorate([
    Decorators.Override
], LexerPopModeAction.prototype, "equals", null);
__decorate([
    Decorators.Override
], LexerPopModeAction.prototype, "toString", null);
exports.LexerPopModeAction = LexerPopModeAction;
(function (LexerPopModeAction) {
    /**
     * Provides a singleton instance of this parameterless lexer action.
     */
    LexerPopModeAction.INSTANCE = new LexerPopModeAction();
})(LexerPopModeAction = exports.LexerPopModeAction || (exports.LexerPopModeAction = {}));

});

var LexerPushModeAction_1 = createCommonjsModule(function (module, exports) {
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
exports.LexerPushModeAction = void 0;


/**
 * Implements the `pushMode` lexer action by calling
 * {@link Lexer#pushMode} with the assigned mode.
 *
 * @author Sam Harwell
 * @since 4.2
 */
class LexerPushModeAction {
    /**
     * Constructs a new `pushMode` action with the specified mode value.
     * @param mode The mode value to pass to {@link Lexer#pushMode}.
     */
    constructor(mode) {
        this._mode = mode;
    }
    /**
     * Get the lexer mode this action should transition the lexer to.
     *
     * @returns The lexer mode for this `pushMode` command.
     */
    get mode() {
        return this._mode;
    }
    /**
     * {@inheritDoc}
     * @returns This method returns {@link LexerActionType#PUSH_MODE}.
     */
    get actionType() {
        return 5 /* PUSH_MODE */;
    }
    /**
     * {@inheritDoc}
     * @returns This method returns `false`.
     */
    get isPositionDependent() {
        return false;
    }
    /**
     * {@inheritDoc}
     *
     * This action is implemented by calling {@link Lexer#pushMode} with the
     * value provided by {@link #getMode}.
     */
    execute(lexer) {
        lexer.pushMode(this._mode);
    }
    hashCode() {
        let hash = MurmurHash_1.MurmurHash.initialize();
        hash = MurmurHash_1.MurmurHash.update(hash, this.actionType);
        hash = MurmurHash_1.MurmurHash.update(hash, this._mode);
        return MurmurHash_1.MurmurHash.finish(hash, 2);
    }
    equals(obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof LexerPushModeAction)) {
            return false;
        }
        return this._mode === obj._mode;
    }
    toString() {
        return `pushMode(${this._mode})`;
    }
}
__decorate([
    Decorators.Override
], LexerPushModeAction.prototype, "actionType", null);
__decorate([
    Decorators.Override
], LexerPushModeAction.prototype, "isPositionDependent", null);
__decorate([
    Decorators.Override,
    __param(0, Decorators.NotNull)
], LexerPushModeAction.prototype, "execute", null);
__decorate([
    Decorators.Override
], LexerPushModeAction.prototype, "hashCode", null);
__decorate([
    Decorators.Override
], LexerPushModeAction.prototype, "equals", null);
__decorate([
    Decorators.Override
], LexerPushModeAction.prototype, "toString", null);
exports.LexerPushModeAction = LexerPushModeAction;

});

var LexerSkipAction_1 = createCommonjsModule(function (module, exports) {
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
exports.LexerSkipAction = void 0;


/**
 * Implements the `skip` lexer action by calling {@link Lexer#skip}.
 *
 * The `skip` command does not have any parameters, so this action is
 * implemented as a singleton instance exposed by {@link #INSTANCE}.
 *
 * @author Sam Harwell
 * @since 4.2
 */
class LexerSkipAction {
    /**
     * Constructs the singleton instance of the lexer `skip` command.
     */
    constructor() {
        // intentionally empty
    }
    /**
     * {@inheritDoc}
     * @returns This method returns {@link LexerActionType#SKIP}.
     */
    get actionType() {
        return 6 /* SKIP */;
    }
    /**
     * {@inheritDoc}
     * @returns This method returns `false`.
     */
    get isPositionDependent() {
        return false;
    }
    /**
     * {@inheritDoc}
     *
     * This action is implemented by calling {@link Lexer#skip}.
     */
    execute(lexer) {
        lexer.skip();
    }
    hashCode() {
        let hash = MurmurHash_1.MurmurHash.initialize();
        hash = MurmurHash_1.MurmurHash.update(hash, this.actionType);
        return MurmurHash_1.MurmurHash.finish(hash, 1);
    }
    equals(obj) {
        return obj === this;
    }
    toString() {
        return "skip";
    }
}
__decorate([
    Decorators.Override
], LexerSkipAction.prototype, "actionType", null);
__decorate([
    Decorators.Override
], LexerSkipAction.prototype, "isPositionDependent", null);
__decorate([
    Decorators.Override,
    __param(0, Decorators.NotNull)
], LexerSkipAction.prototype, "execute", null);
__decorate([
    Decorators.Override
], LexerSkipAction.prototype, "hashCode", null);
__decorate([
    Decorators.Override
], LexerSkipAction.prototype, "equals", null);
__decorate([
    Decorators.Override
], LexerSkipAction.prototype, "toString", null);
exports.LexerSkipAction = LexerSkipAction;
(function (LexerSkipAction) {
    /**
     * Provides a singleton instance of this parameterless lexer action.
     */
    LexerSkipAction.INSTANCE = new LexerSkipAction();
})(LexerSkipAction = exports.LexerSkipAction || (exports.LexerSkipAction = {}));

});

var LexerTypeAction_1 = createCommonjsModule(function (module, exports) {
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
exports.LexerTypeAction = void 0;


/**
 * Implements the `type` lexer action by setting `Lexer.type`
 * with the assigned type.
 *
 * @author Sam Harwell
 * @since 4.2
 */
class LexerTypeAction {
    /**
     * Constructs a new `type` action with the specified token type value.
     * @param type The type to assign to the token using `Lexer.type`.
     */
    constructor(type) {
        this._type = type;
    }
    /**
     * Gets the type to assign to a token created by the lexer.
     * @returns The type to assign to a token created by the lexer.
     */
    get type() {
        return this._type;
    }
    /**
     * {@inheritDoc}
     * @returns This method returns {@link LexerActionType#TYPE}.
     */
    get actionType() {
        return 7 /* TYPE */;
    }
    /**
     * {@inheritDoc}
     * @returns This method returns `false`.
     */
    get isPositionDependent() {
        return false;
    }
    /**
     * {@inheritDoc}
     *
     * This action is implemented by setting `Lexer.type` with the
     * value provided by `type`.
     */
    execute(lexer) {
        lexer.type = this._type;
    }
    hashCode() {
        let hash = MurmurHash_1.MurmurHash.initialize();
        hash = MurmurHash_1.MurmurHash.update(hash, this.actionType);
        hash = MurmurHash_1.MurmurHash.update(hash, this._type);
        return MurmurHash_1.MurmurHash.finish(hash, 2);
    }
    equals(obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof LexerTypeAction)) {
            return false;
        }
        return this._type === obj._type;
    }
    toString() {
        return `type(${this._type})`;
    }
}
__decorate([
    Decorators.Override
], LexerTypeAction.prototype, "actionType", null);
__decorate([
    Decorators.Override
], LexerTypeAction.prototype, "isPositionDependent", null);
__decorate([
    Decorators.Override,
    __param(0, Decorators.NotNull)
], LexerTypeAction.prototype, "execute", null);
__decorate([
    Decorators.Override
], LexerTypeAction.prototype, "hashCode", null);
__decorate([
    Decorators.Override
], LexerTypeAction.prototype, "equals", null);
__decorate([
    Decorators.Override
], LexerTypeAction.prototype, "toString", null);
exports.LexerTypeAction = LexerTypeAction;

});

var LoopEndState_1 = createCommonjsModule(function (module, exports) {
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
exports.LoopEndState = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:30.7737978-07:00



/** Mark the end of a * or + loop. */
class LoopEndState extends ATNState_1.ATNState {
    get stateType() {
        return ATNStateType_1.ATNStateType.LOOP_END;
    }
}
__decorate([
    Decorators.Override
], LoopEndState.prototype, "stateType", null);
exports.LoopEndState = LoopEndState;

});

var ConflictInfo_1 = createCommonjsModule(function (module, exports) {
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
exports.ConflictInfo = void 0;


/**
 * This class stores information about a configuration conflict.
 *
 * @author Sam Harwell
 */
class ConflictInfo {
    constructor(conflictedAlts, exact) {
        this._conflictedAlts = conflictedAlts;
        this.exact = exact;
    }
    /**
     * Gets the set of conflicting alternatives for the configuration set.
     */
    get conflictedAlts() {
        return this._conflictedAlts;
    }
    /**
     * Gets whether or not the configuration conflict is an exact conflict.
     * An exact conflict occurs when the prediction algorithm determines that
     * the represented alternatives for a particular configuration set cannot be
     * further reduced by consuming additional input. After reaching an exact
     * conflict during an SLL prediction, only switch to full-context prediction
     * could reduce the set of viable alternatives. In LL prediction, an exact
     * conflict indicates a true ambiguity in the input.
     *
     * For the {@link PredictionMode#LL_EXACT_AMBIG_DETECTION} prediction mode,
     * accept states are conflicting but not exact are treated as non-accept
     * states.
     */
    get isExact() {
        return this.exact;
    }
    equals(obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof ConflictInfo)) {
            return false;
        }
        return this.isExact === obj.isExact
            && Utils.equals(this.conflictedAlts, obj.conflictedAlts);
    }
    hashCode() {
        return this.conflictedAlts.hashCode();
    }
}
__decorate([
    Decorators.Override
], ConflictInfo.prototype, "equals", null);
__decorate([
    Decorators.Override
], ConflictInfo.prototype, "hashCode", null);
exports.ConflictInfo = ConflictInfo;

});

var Trees_1 = createCommonjsModule(function (module, exports) {
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
exports.Trees = void 0;










/** A set of utility routines useful for all kinds of ANTLR trees. */
class Trees {
    static toStringTree(t, arg2) {
        let ruleNames;
        if (arg2 instanceof Parser_1.Parser) {
            ruleNames = arg2.ruleNames;
        }
        else {
            ruleNames = arg2;
        }
        let s = Utils.escapeWhitespace(this.getNodeText(t, ruleNames), false);
        if (t.childCount === 0) {
            return s;
        }
        let buf = "";
        buf += ("(");
        s = Utils.escapeWhitespace(this.getNodeText(t, ruleNames), false);
        buf += (s);
        buf += (" ");
        for (let i = 0; i < t.childCount; i++) {
            if (i > 0) {
                buf += (" ");
            }
            buf += (this.toStringTree(t.getChild(i), ruleNames));
        }
        buf += (")");
        return buf;
    }
    static getNodeText(t, arg2) {
        let ruleNames;
        if (arg2 instanceof Parser_1.Parser) {
            ruleNames = arg2.ruleNames;
        }
        else if (arg2) {
            ruleNames = arg2;
        }
        else {
            // no recog or rule names
            let payload = t.payload;
            if (typeof payload.text === "string") {
                return payload.text;
            }
            return t.payload.toString();
        }
        if (t instanceof RuleNode_1.RuleNode) {
            let ruleContext = t.ruleContext;
            let ruleIndex = ruleContext.ruleIndex;
            let ruleName = ruleNames[ruleIndex];
            let altNumber = ruleContext.altNumber;
            if (altNumber !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                return ruleName + ":" + altNumber;
            }
            return ruleName;
        }
        else if (t instanceof ErrorNode_1.ErrorNode) {
            return t.toString();
        }
        else if (t instanceof TerminalNode_1.TerminalNode) {
            let symbol = t.symbol;
            return symbol.text || "";
        }
        throw new TypeError("Unexpected node type");
    }
    static getChildren(t) {
        let kids = [];
        for (let i = 0; i < t.childCount; i++) {
            kids.push(t.getChild(i));
        }
        return kids;
    }
    static getAncestors(t) {
        let ancestors = [];
        let p = t.parent;
        while (p) {
            ancestors.unshift(p); // insert at start
            p = p.parent;
        }
        return ancestors;
    }
    /** Return true if t is u's parent or a node on path to root from u.
     *  Use === not equals().
     *
     *  @since 4.5.1
     */
    static isAncestorOf(t, u) {
        if (!t || !u || !t.parent) {
            return false;
        }
        let p = u.parent;
        while (p) {
            if (t === p) {
                return true;
            }
            p = p.parent;
        }
        return false;
    }
    static findAllTokenNodes(t, ttype) {
        return Trees.findAllNodes(t, ttype, true);
    }
    static findAllRuleNodes(t, ruleIndex) {
        return Trees.findAllNodes(t, ruleIndex, false);
    }
    static findAllNodes(t, index, findTokens) {
        let nodes = [];
        Trees._findAllNodes(t, index, findTokens, nodes);
        return nodes;
    }
    static _findAllNodes(t, index, findTokens, nodes) {
        // check this node (the root) first
        if (findTokens && t instanceof TerminalNode_1.TerminalNode) {
            if (t.symbol.type === index) {
                nodes.push(t);
            }
        }
        else if (!findTokens && t instanceof ParserRuleContext_1.ParserRuleContext) {
            if (t.ruleIndex === index) {
                nodes.push(t);
            }
        }
        // check children
        for (let i = 0; i < t.childCount; i++) {
            Trees._findAllNodes(t.getChild(i), index, findTokens, nodes);
        }
    }
    /** Get all descendents; includes t itself.
     *
     * @since 4.5.1
     */
    static getDescendants(t) {
        let nodes = [];
        function recurse(e) {
            nodes.push(e);
            const n = e.childCount;
            for (let i = 0; i < n; i++) {
                recurse(e.getChild(i));
            }
        }
        recurse(t);
        return nodes;
    }
    /** Find smallest subtree of t enclosing range startTokenIndex..stopTokenIndex
     *  inclusively using postorder traversal.  Recursive depth-first-search.
     *
     *  @since 4.5
     */
    static getRootOfSubtreeEnclosingRegion(t, startTokenIndex, // inclusive
    stopTokenIndex) {
        let n = t.childCount;
        for (let i = 0; i < n; i++) {
            let child = t.getChild(i);
            let r = Trees.getRootOfSubtreeEnclosingRegion(child, startTokenIndex, stopTokenIndex);
            if (r) {
                return r;
            }
        }
        if (t instanceof ParserRuleContext_1.ParserRuleContext) {
            let stopToken = t.stop;
            if (startTokenIndex >= t.start.tokenIndex && // is range fully contained in t?
                (stopToken == null || stopTokenIndex <= stopToken.tokenIndex)) {
                // note: r.stop==null likely implies that we bailed out of parser and there's nothing to the right
                return t;
            }
        }
        return undefined;
    }
    /** Replace any subtree siblings of root that are completely to left
     *  or right of lookahead range with a CommonToken(Token.INVALID_TYPE,"...")
     *  node. The source interval for t is not altered to suit smaller range!
     *
     *  WARNING: destructive to t.
     *
     *  @since 4.5.1
     */
    static stripChildrenOutOfRange(t, root, startIndex, stopIndex) {
        if (!t) {
            return;
        }
        let count = t.childCount;
        for (let i = 0; i < count; i++) {
            let child = t.getChild(i);
            let range = child.sourceInterval;
            if (child instanceof ParserRuleContext_1.ParserRuleContext && (range.b < startIndex || range.a > stopIndex)) {
                if (Trees.isAncestorOf(child, root)) { // replace only if subtree doesn't have displayed root
                    let abbrev = new CommonToken_1.CommonToken(Token_1.Token.INVALID_TYPE, "...");
                    t.children[i] = new TerminalNode_1.TerminalNode(abbrev); // HACK access to private
                }
            }
        }
    }
    static findNodeSuchThat(t, pred) {
        // No type check needed as long as users only use one of the available overloads
        if (pred(t)) {
            return t;
        }
        let n = t.childCount;
        for (let i = 0; i < n; i++) {
            let u = Trees.findNodeSuchThat(t.getChild(i), pred);
            if (u !== undefined) {
                return u;
            }
        }
        return undefined;
    }
}
__decorate([
    __param(0, Decorators.NotNull)
], Trees, "toStringTree", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
], Trees, "getAncestors", null);
__decorate([
    __param(0, Decorators.NotNull)
], Trees, "getRootOfSubtreeEnclosingRegion", null);
exports.Trees = Trees;

});

var RuleContext_1 = createCommonjsModule(function (module, exports) {
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
exports.RuleContext = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:57.3490837-07:00







/** A rule context is a record of a single rule invocation.
 *
 *  We form a stack of these context objects using the parent
 *  pointer. A parent pointer of `undefined` indicates that the current
 *  context is the bottom of the stack. The ParserRuleContext subclass
 *  as a children list so that we can turn this data structure into a
 *  tree.
 *
 *  The root node always has a `undefined` pointer and invokingState of -1.
 *
 *  Upon entry to parsing, the first invoked rule function creates a
 *  context object (a subclass specialized for that rule such as
 *  SContext) and makes it the root of a parse tree, recorded by field
 *  Parser._ctx.
 *
 *  public final SContext s() throws RecognitionException {
 *      SContext _localctx = new SContext(_ctx, state); <-- create new node
 *      enterRule(_localctx, 0, RULE_s);                     <-- push it
 *      ...
 *      exitRule();                                          <-- pop back to _localctx
 *      return _localctx;
 *  }
 *
 *  A subsequent rule invocation of r from the start rule s pushes a
 *  new context object for r whose parent points at s and use invoking
 *  state is the state with r emanating as edge label.
 *
 *  The invokingState fields from a context object to the root
 *  together form a stack of rule indication states where the root
 *  (bottom of the stack) has a -1 sentinel value. If we invoke start
 *  symbol s then call r1, which calls r2, the  would look like
 *  this:
 *
 *     SContext[-1]   <- root node (bottom of the stack)
 *     R1Context[p]   <- p in rule s called r1
 *     R2Context[q]   <- q in rule r1 called r2
 *
 *  So the top of the stack, _ctx, represents a call to the current
 *  rule and it holds the return address from another rule that invoke
 *  to this rule. To invoke a rule, we must always have a current context.
 *
 *  The parent contexts are useful for computing lookahead sets and
 *  getting error information.
 *
 *  These objects are used during parsing and prediction.
 *  For the special case of parsers, we use the subclass
 *  ParserRuleContext.
 *
 *  @see ParserRuleContext
 */
class RuleContext extends RuleNode_1.RuleNode {
    constructor(parent, invokingState) {
        super();
        this._parent = parent;
        this.invokingState = invokingState != null ? invokingState : -1;
    }
    static getChildContext(parent, invokingState) {
        return new RuleContext(parent, invokingState);
    }
    depth() {
        let n = 0;
        let p = this;
        while (p) {
            p = p._parent;
            n++;
        }
        return n;
    }
    /** A context is empty if there is no invoking state; meaning nobody called
     *  current context.
     */
    get isEmpty() {
        return this.invokingState === -1;
    }
    // satisfy the ParseTree / SyntaxTree interface
    get sourceInterval() {
        return Interval_1.Interval.INVALID;
    }
    get ruleContext() { return this; }
    get parent() { return this._parent; }
    /** @since 4.7. {@see ParseTree#setParent} comment */
    setParent(parent) {
        this._parent = parent;
    }
    get payload() { return this; }
    /** Return the combined text of all child nodes. This method only considers
     *  tokens which have been added to the parse tree.
     *
     *  Since tokens on hidden channels (e.g. whitespace or comments) are not
     *  added to the parse trees, they will not appear in the output of this
     *  method.
     */
    get text() {
        if (this.childCount === 0) {
            return "";
        }
        let builder = "";
        for (let i = 0; i < this.childCount; i++) {
            builder += this.getChild(i).text;
        }
        return builder.toString();
    }
    get ruleIndex() { return -1; }
    /** For rule associated with this parse tree internal node, return
     *  the outer alternative number used to match the input. Default
     *  implementation does not compute nor store this alt num. Create
     *  a subclass of ParserRuleContext with backing field and set
     *  option contextSuperClass.
     *  to set it.
     *
     *  @since 4.5.3
     */
    get altNumber() { return ATN_1.ATN.INVALID_ALT_NUMBER; }
    /** Set the outer alternative number for this context node. Default
     *  implementation does nothing to avoid backing field overhead for
     *  trees that don't need it.  Create
     *  a subclass of ParserRuleContext with backing field and set
     *  option contextSuperClass.
     *
     *  @since 4.5.3
     */
    set altNumber(altNumber) {
        // intentionally ignored by the base implementation
    }
    getChild(i) {
        throw new RangeError("i must be greater than or equal to 0 and less than childCount");
    }
    get childCount() {
        return 0;
    }
    accept(visitor) {
        return visitor.visitChildren(this);
    }
    toStringTree(recog) {
        return Trees_1.Trees.toStringTree(this, recog);
    }
    toString(arg1, stop) {
        const ruleNames = (arg1 instanceof Recognizer_1.Recognizer) ? arg1.ruleNames : arg1;
        stop = stop || ParserRuleContext_1.ParserRuleContext.emptyContext();
        let buf = "";
        let p = this;
        buf += ("[");
        while (p && p !== stop) {
            if (!ruleNames) {
                if (!p.isEmpty) {
                    buf += (p.invokingState);
                }
            }
            else {
                let ruleIndex = p.ruleIndex;
                let ruleName = (ruleIndex >= 0 && ruleIndex < ruleNames.length)
                    ? ruleNames[ruleIndex] : ruleIndex.toString();
                buf += (ruleName);
            }
            if (p._parent && (ruleNames || !p._parent.isEmpty)) {
                buf += (" ");
            }
            p = p._parent;
        }
        buf += ("]");
        return buf.toString();
    }
}
__decorate([
    Decorators.Override
], RuleContext.prototype, "sourceInterval", null);
__decorate([
    Decorators.Override
], RuleContext.prototype, "ruleContext", null);
__decorate([
    Decorators.Override
], RuleContext.prototype, "parent", null);
__decorate([
    Decorators.Override
], RuleContext.prototype, "setParent", null);
__decorate([
    Decorators.Override
], RuleContext.prototype, "payload", null);
__decorate([
    Decorators.Override
], RuleContext.prototype, "text", null);
__decorate([
    Decorators.Override
], RuleContext.prototype, "getChild", null);
__decorate([
    Decorators.Override
], RuleContext.prototype, "childCount", null);
__decorate([
    Decorators.Override
], RuleContext.prototype, "accept", null);
__decorate([
    Decorators.Override
], RuleContext.prototype, "toStringTree", null);
exports.RuleContext = RuleContext;

});

var ParserRuleContext_1 = createCommonjsModule(function (module, exports) {
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
exports.ParserRuleContext = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:56.6285494-07:00





/** A rule invocation record for parsing.
 *
 *  Contains all of the information about the current rule not stored in the
 *  RuleContext. It handles parse tree children list, Any ATN state
 *  tracing, and the default values available for rule invocations:
 *  start, stop, rule index, current alt number.
 *
 *  Subclasses made for each rule and grammar track the parameters,
 *  return values, locals, and labels specific to that rule. These
 *  are the objects that are returned from rules.
 *
 *  Note text is not an actual field of a rule return value; it is computed
 *  from start and stop using the input stream's toString() method.  I
 *  could add a ctor to this so that we can pass in and store the input
 *  stream, but I'm not sure we want to do that.  It would seem to be undefined
 *  to get the .text property anyway if the rule matches tokens from multiple
 *  input streams.
 *
 *  I do not use getters for fields of objects that are used simply to
 *  group values such as this aggregate.  The getters/setters are there to
 *  satisfy the superclass interface.
 */
class ParserRuleContext extends RuleContext_1.RuleContext {
    constructor(parent, invokingStateNumber) {
        if (invokingStateNumber == null) {
            super();
        }
        else {
            super(parent, invokingStateNumber);
        }
    }
    static emptyContext() {
        return ParserRuleContext.EMPTY;
    }
    /**
     * COPY a ctx (I'm deliberately not using copy constructor) to avoid
     * confusion with creating node with parent. Does not copy children
     * (except error leaves).
     *
     * This is used in the generated parser code to flip a generic XContext
     * node for rule X to a YContext for alt label Y. In that sense, it is not
     * really a generic copy function.
     *
     * If we do an error sync() at start of a rule, we might add error nodes
     * to the generic XContext so this function must copy those nodes to the
     * YContext as well else they are lost!
     */
    copyFrom(ctx) {
        this._parent = ctx._parent;
        this.invokingState = ctx.invokingState;
        this._start = ctx._start;
        this._stop = ctx._stop;
        // copy any error nodes to alt label node
        if (ctx.children) {
            this.children = [];
            // reset parent pointer for any error nodes
            for (let child of ctx.children) {
                if (child instanceof ErrorNode_1.ErrorNode) {
                    this.addChild(child);
                }
            }
        }
    }
    // Double dispatch methods for listeners
    enterRule(listener) {
        // intentionally empty
    }
    exitRule(listener) {
        // intentionally empty
    }
    /** Add a parse tree node to this as a child.  Works for
     *  internal and leaf nodes. Does not set parent link;
     *  other add methods must do that. Other addChild methods
     *  call this.
     *
     *  We cannot set the parent pointer of the incoming node
     *  because the existing interfaces do not have a setParent()
     *  method and I don't want to break backward compatibility for this.
     *
     *  @since 4.7
     */
    addAnyChild(t) {
        if (!this.children) {
            this.children = [t];
        }
        else {
            this.children.push(t);
        }
        return t;
    }
    addChild(t) {
        if (t instanceof TerminalNode_1.TerminalNode) {
            t.setParent(this);
            this.addAnyChild(t);
            return;
        }
        else if (t instanceof RuleContext_1.RuleContext) {
            // Does not set parent link
            this.addAnyChild(t);
            return;
        }
        else {
            // Deprecated code path
            t = new TerminalNode_1.TerminalNode(t);
            this.addAnyChild(t);
            t.setParent(this);
            return t;
        }
    }
    addErrorNode(node) {
        if (node instanceof ErrorNode_1.ErrorNode) {
            const errorNode = node;
            errorNode.setParent(this);
            return this.addAnyChild(errorNode);
        }
        else {
            // deprecated path
            const badToken = node;
            let t = new ErrorNode_1.ErrorNode(badToken);
            this.addAnyChild(t);
            t.setParent(this);
            return t;
        }
    }
    //	public void trace(int s) {
    //		if ( states==null ) states = new ArrayList<Integer>();
    //		states.add(s);
    //	}
    /** Used by enterOuterAlt to toss out a RuleContext previously added as
     *  we entered a rule. If we have # label, we will need to remove
     *  generic ruleContext object.
     */
    removeLastChild() {
        if (this.children) {
            this.children.pop();
        }
    }
    get parent() {
        let parent = super.parent;
        if (parent === undefined || parent instanceof ParserRuleContext) {
            return parent;
        }
        throw new TypeError("Invalid parent type for ParserRuleContext");
    }
    // Note: in TypeScript, order or arguments reversed
    getChild(i, ctxType) {
        if (!this.children || i < 0 || i >= this.children.length) {
            throw new RangeError("index parameter must be between >= 0 and <= number of children.");
        }
        if (ctxType == null) {
            return this.children[i];
        }
        let result = this.tryGetChild(i, ctxType);
        if (result === undefined) {
            throw new Error("The specified node does not exist");
        }
        return result;
    }
    tryGetChild(i, ctxType) {
        if (!this.children || i < 0 || i >= this.children.length) {
            return undefined;
        }
        let j = -1; // what node with ctxType have we found?
        for (let o of this.children) {
            if (o instanceof ctxType) {
                j++;
                if (j === i) {
                    return o;
                }
            }
        }
        return undefined;
    }
    getToken(ttype, i) {
        let result = this.tryGetToken(ttype, i);
        if (result === undefined) {
            throw new Error("The specified token does not exist");
        }
        return result;
    }
    tryGetToken(ttype, i) {
        if (!this.children || i < 0 || i >= this.children.length) {
            return undefined;
        }
        let j = -1; // what token with ttype have we found?
        for (let o of this.children) {
            if (o instanceof TerminalNode_1.TerminalNode) {
                let symbol = o.symbol;
                if (symbol.type === ttype) {
                    j++;
                    if (j === i) {
                        return o;
                    }
                }
            }
        }
        return undefined;
    }
    getTokens(ttype) {
        let tokens = [];
        if (!this.children) {
            return tokens;
        }
        for (let o of this.children) {
            if (o instanceof TerminalNode_1.TerminalNode) {
                let symbol = o.symbol;
                if (symbol.type === ttype) {
                    tokens.push(o);
                }
            }
        }
        return tokens;
    }
    get ruleContext() {
        return this;
    }
    // NOTE: argument order change from Java version
    getRuleContext(i, ctxType) {
        return this.getChild(i, ctxType);
    }
    tryGetRuleContext(i, ctxType) {
        return this.tryGetChild(i, ctxType);
    }
    getRuleContexts(ctxType) {
        let contexts = [];
        if (!this.children) {
            return contexts;
        }
        for (let o of this.children) {
            if (o instanceof ctxType) {
                contexts.push(o);
            }
        }
        return contexts;
    }
    get childCount() {
        return this.children ? this.children.length : 0;
    }
    get sourceInterval() {
        if (!this._start) {
            return Interval_1.Interval.INVALID;
        }
        if (!this._stop || this._stop.tokenIndex < this._start.tokenIndex) {
            return Interval_1.Interval.of(this._start.tokenIndex, this._start.tokenIndex - 1); // empty
        }
        return Interval_1.Interval.of(this._start.tokenIndex, this._stop.tokenIndex);
    }
    /**
     * Get the initial token in this context.
     * Note that the range from start to stop is inclusive, so for rules that do not consume anything
     * (for example, zero length or error productions) this token may exceed stop.
     */
    get start() { return this._start; }
    /**
     * Get the final token in this context.
     * Note that the range from start to stop is inclusive, so for rules that do not consume anything
     * (for example, zero length or error productions) this token may precede start.
     */
    get stop() { return this._stop; }
    /** Used for rule context info debugging during parse-time, not so much for ATN debugging */
    toInfoString(recognizer) {
        let rules = recognizer.getRuleInvocationStack(this).reverse();
        return "ParserRuleContext" + rules + "{" +
            "start=" + this._start +
            ", stop=" + this._stop +
            "}";
    }
}
ParserRuleContext.EMPTY = new ParserRuleContext();
__decorate([
    Decorators.Override
], ParserRuleContext.prototype, "parent", null);
__decorate([
    Decorators.Override
], ParserRuleContext.prototype, "childCount", null);
__decorate([
    Decorators.Override
], ParserRuleContext.prototype, "sourceInterval", null);
exports.ParserRuleContext = ParserRuleContext;

});

var PredictionMode_1 = createCommonjsModule(function (module, exports) {
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
exports.PredictionMode = void 0;
(function (PredictionMode) {
    /**
     * The SLL(*) prediction mode. This prediction mode ignores the current
     * parser context when making predictions. This is the fastest prediction
     * mode, and provides correct results for many grammars. This prediction
     * mode is more powerful than the prediction mode provided by ANTLR 3, but
     * may result in syntax errors for grammar and input combinations which are
     * not SLL.
     *
     * When using this prediction mode, the parser will either return a correct
     * parse tree (i.e. the same parse tree that would be returned with the
     * {@link #LL} prediction mode), or it will report a syntax error. If a
     * syntax error is encountered when using the {@link #SLL} prediction mode,
     * it may be due to either an actual syntax error in the input or indicate
     * that the particular combination of grammar and input requires the more
     * powerful {@link #LL} prediction abilities to complete successfully.
     *
     * This prediction mode does not provide any guarantees for prediction
     * behavior for syntactically-incorrect inputs.
     */
    PredictionMode[PredictionMode["SLL"] = 0] = "SLL";
    /**
     * The LL(*) prediction mode. This prediction mode allows the current parser
     * context to be used for resolving SLL conflicts that occur during
     * prediction. This is the fastest prediction mode that guarantees correct
     * parse results for all combinations of grammars with syntactically correct
     * inputs.
     *
     * When using this prediction mode, the parser will make correct decisions
     * for all syntactically-correct grammar and input combinations. However, in
     * cases where the grammar is truly ambiguous this prediction mode might not
     * report a precise answer for *exactly which* alternatives are
     * ambiguous.
     *
     * This prediction mode does not provide any guarantees for prediction
     * behavior for syntactically-incorrect inputs.
     */
    PredictionMode[PredictionMode["LL"] = 1] = "LL";
    /**
     * The LL(*) prediction mode with exact ambiguity detection. In addition to
     * the correctness guarantees provided by the {@link #LL} prediction mode,
     * this prediction mode instructs the prediction algorithm to determine the
     * complete and exact set of ambiguous alternatives for every ambiguous
     * decision encountered while parsing.
     *
     * This prediction mode may be used for diagnosing ambiguities during
     * grammar development. Due to the performance overhead of calculating sets
     * of ambiguous alternatives, this prediction mode should be avoided when
     * the exact results are not necessary.
     *
     * This prediction mode does not provide any guarantees for prediction
     * behavior for syntactically-incorrect inputs.
     */
    PredictionMode[PredictionMode["LL_EXACT_AMBIG_DETECTION"] = 2] = "LL_EXACT_AMBIG_DETECTION";
})(exports.PredictionMode || (exports.PredictionMode = {}));
(function (PredictionMode) {
    /** A Map that uses just the state and the stack context as the key. */
    // NOTE: Base type used to be FlexibleHashMap<ATNConfig, BitSet>
    class AltAndContextMap extends Array2DHashMap_1.Array2DHashMap {
        constructor() {
            super(AltAndContextConfigEqualityComparator.INSTANCE);
        }
    }
    class AltAndContextConfigEqualityComparator {
        AltAndContextConfigEqualityComparator() {
            // intentionally empty
        }
        /**
         * The hash code is only a function of the {@link ATNState#stateNumber}
         * and {@link ATNConfig#context}.
         */
        hashCode(o) {
            let hashCode = MurmurHash_1.MurmurHash.initialize(7);
            hashCode = MurmurHash_1.MurmurHash.update(hashCode, o.state.stateNumber);
            hashCode = MurmurHash_1.MurmurHash.update(hashCode, o.context);
            hashCode = MurmurHash_1.MurmurHash.finish(hashCode, 2);
            return hashCode;
        }
        equals(a, b) {
            if (a === b) {
                return true;
            }
            if (a == null || b == null) {
                return false;
            }
            return a.state.stateNumber === b.state.stateNumber
                && a.context.equals(b.context);
        }
    }
    AltAndContextConfigEqualityComparator.INSTANCE = new AltAndContextConfigEqualityComparator();
    __decorate([
        Decorators.Override
    ], AltAndContextConfigEqualityComparator.prototype, "hashCode", null);
    __decorate([
        Decorators.Override
    ], AltAndContextConfigEqualityComparator.prototype, "equals", null);
    /**
     * Checks if any configuration in `configs` is in a
     * {@link RuleStopState}. Configurations meeting this condition have reached
     * the end of the decision rule (local context) or end of start rule (full
     * context).
     *
     * @param configs the configuration set to test
     * @returns `true` if any configuration in `configs` is in a
     * {@link RuleStopState}, otherwise `false`
     */
    function hasConfigInRuleStopState(configs) {
        for (let c of configs) {
            if (c.state instanceof RuleStopState_1.RuleStopState) {
                return true;
            }
        }
        return false;
    }
    PredictionMode.hasConfigInRuleStopState = hasConfigInRuleStopState;
    /**
     * Checks if all configurations in `configs` are in a
     * {@link RuleStopState}. Configurations meeting this condition have reached
     * the end of the decision rule (local context) or end of start rule (full
     * context).
     *
     * @param configs the configuration set to test
     * @returns `true` if all configurations in `configs` are in a
     * {@link RuleStopState}, otherwise `false`
     */
    function allConfigsInRuleStopStates(/*@NotNull*/ configs) {
        for (let config of configs) {
            if (!(config.state instanceof RuleStopState_1.RuleStopState)) {
                return false;
            }
        }
        return true;
    }
    PredictionMode.allConfigsInRuleStopStates = allConfigsInRuleStopStates;
})(exports.PredictionMode || (exports.PredictionMode = {}));

});

var SimulatorState_1 = createCommonjsModule(function (module, exports) {
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
exports.SimulatorState = void 0;


/**
 *
 * @author Sam Harwell
 */
let SimulatorState = class SimulatorState {
    constructor(outerContext, s0, useContext, remainingOuterContext) {
        this.outerContext = outerContext != null ? outerContext : ParserRuleContext_1.ParserRuleContext.emptyContext();
        this.s0 = s0;
        this.useContext = useContext;
        this.remainingOuterContext = remainingOuterContext;
    }
};
SimulatorState = __decorate([
    __param(1, Decorators.NotNull)
], SimulatorState);
exports.SimulatorState = SimulatorState;

});

var ParserATNSimulator_1 = createCommonjsModule(function (module, exports) {
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
exports.ParserATNSimulator = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:31.1989835-07:00

































const MAX_SHORT_VALUE = 0xFFFF;
const MIN_INTEGER_VALUE = -((1 << 31) >>> 0);
/**
 * The embodiment of the adaptive LL(*), ALL(*), parsing strategy.
 *
 * The basic complexity of the adaptive strategy makes it harder to understand.
 * We begin with ATN simulation to build paths in a DFA. Subsequent prediction
 * requests go through the DFA first. If they reach a state without an edge for
 * the current symbol, the algorithm fails over to the ATN simulation to
 * complete the DFA path for the current input (until it finds a conflict state
 * or uniquely predicting state).
 *
 * All of that is done without using the outer context because we want to create
 * a DFA that is not dependent upon the rule invocation stack when we do a
 * prediction. One DFA works in all contexts. We avoid using context not
 * necessarily because it's slower, although it can be, but because of the DFA
 * caching problem. The closure routine only considers the rule invocation stack
 * created during prediction beginning in the decision rule. For example, if
 * prediction occurs without invoking another rule's ATN, there are no context
 * stacks in the configurations. When lack of context leads to a conflict, we
 * don't know if it's an ambiguity or a weakness in the strong LL(*) parsing
 * strategy (versus full LL(*)).
 *
 * When SLL yields a configuration set with conflict, we rewind the input and
 * retry the ATN simulation, this time using full outer context without adding
 * to the DFA. Configuration context stacks will be the full invocation stacks
 * from the start rule. If we get a conflict using full context, then we can
 * definitively say we have a true ambiguity for that input sequence. If we
 * don't get a conflict, it implies that the decision is sensitive to the outer
 * context. (It is not context-sensitive in the sense of context-sensitive
 * grammars.)
 *
 * The next time we reach this DFA state with an SLL conflict, through DFA
 * simulation, we will again retry the ATN simulation using full context mode.
 * This is slow because we can't save the results and have to "interpret" the
 * ATN each time we get that input.
 *
 * **CACHING FULL CONTEXT PREDICTIONS**
 *
 * We could cache results from full context to predicted alternative easily and
 * that saves a lot of time but doesn't work in presence of predicates. The set
 * of visible predicates from the ATN start state changes depending on the
 * context, because closure can fall off the end of a rule. I tried to cache
 * tuples (stack context, semantic context, predicted alt) but it was slower
 * than interpreting and much more complicated. Also required a huge amount of
 * memory. The goal is not to create the world's fastest parser anyway. I'd like
 * to keep this algorithm simple. By launching multiple threads, we can improve
 * the speed of parsing across a large number of files.
 *
 * There is no strict ordering between the amount of input used by SLL vs LL,
 * which makes it really hard to build a cache for full context. Let's say that
 * we have input A B C that leads to an SLL conflict with full context X. That
 * implies that using X we might only use A B but we could also use A B C D to
 * resolve conflict. Input A B C D could predict alternative 1 in one position
 * in the input and A B C E could predict alternative 2 in another position in
 * input. The conflicting SLL configurations could still be non-unique in the
 * full context prediction, which would lead us to requiring more input than the
 * original A B C.	To make a	prediction cache work, we have to track	the exact
 * input	used during the previous prediction. That amounts to a cache that maps
 * X to a specific DFA for that context.
 *
 * Something should be done for left-recursive expression predictions. They are
 * likely LL(1) + pred eval. Easier to do the whole SLL unless error and retry
 * with full LL thing Sam does.
 *
 * **AVOIDING FULL CONTEXT PREDICTION**
 *
 * We avoid doing full context retry when the outer context is empty, we did not
 * dip into the outer context by falling off the end of the decision state rule,
 * or when we force SLL mode.
 *
 * As an example of the not dip into outer context case, consider as super
 * constructor calls versus function calls. One grammar might look like
 * this:
 *
 * ```antlr
 * ctorBody
 *   : '{' superCall? stat* '}'
 *   ;
 * ```
 *
 * Or, you might see something like
 *
 * ```antlr
 * stat
 *   : superCall ';'
 *   | expression ';'
 *   | ...
 *   ;
 * ```
 *
 * In both cases I believe that no closure operations will dip into the outer
 * context. In the first case ctorBody in the worst case will stop at the '}'.
 * In the 2nd case it should stop at the ';'. Both cases should stay within the
 * entry rule and not dip into the outer context.
 *
 * **PREDICATES**
 *
 * Predicates are always evaluated if present in either SLL or LL both. SLL and
 * LL simulation deals with predicates differently. SLL collects predicates as
 * it performs closure operations like ANTLR v3 did. It delays predicate
 * evaluation until it reaches and accept state. This allows us to cache the SLL
 * ATN simulation whereas, if we had evaluated predicates on-the-fly during
 * closure, the DFA state configuration sets would be different and we couldn't
 * build up a suitable DFA.
 *
 * When building a DFA accept state during ATN simulation, we evaluate any
 * predicates and return the sole semantically valid alternative. If there is
 * more than 1 alternative, we report an ambiguity. If there are 0 alternatives,
 * we throw an exception. Alternatives without predicates act like they have
 * true predicates. The simple way to think about it is to strip away all
 * alternatives with false predicates and choose the minimum alternative that
 * remains.
 *
 * When we start in the DFA and reach an accept state that's predicated, we test
 * those and return the minimum semantically viable alternative. If no
 * alternatives are viable, we throw an exception.
 *
 * During full LL ATN simulation, closure always evaluates predicates and
 * on-the-fly. This is crucial to reducing the configuration set size during
 * closure. It hits a landmine when parsing with the Java grammar, for example,
 * without this on-the-fly evaluation.
 *
 * **SHARING DFA**
 *
 * All instances of the same parser share the same decision DFAs through a
 * static field. Each instance gets its own ATN simulator but they share the
 * same {@link ATN#decisionToDFA} field. They also share a
 * {@link PredictionContextCache} object that makes sure that all
 * {@link PredictionContext} objects are shared among the DFA states. This makes
 * a big size difference.
 *
 * **THREAD SAFETY**
 *
 * The {@link ParserATNSimulator} locks on the {@link ATN#decisionToDFA} field when
 * it adds a new DFA object to that array. {@link #addDFAEdge}
 * locks on the DFA for the current decision when setting the
 * {@link DFAState#edges} field. {@link #addDFAState} locks on
 * the DFA for the current decision when looking up a DFA state to see if it
 * already exists. We must make sure that all requests to add DFA states that
 * are equivalent result in the same shared DFA object. This is because lots of
 * threads will be trying to update the DFA at once. The
 * {@link #addDFAState} method also locks inside the DFA lock
 * but this time on the shared context cache when it rebuilds the
 * configurations' {@link PredictionContext} objects using cached
 * subgraphs/nodes. No other locking occurs, even during DFA simulation. This is
 * safe as long as we can guarantee that all threads referencing
 * `s.edge[t]` get the same physical target {@link DFAState}, or
 * `undefined`. Once into the DFA, the DFA simulation does not reference the
 * {@link DFA#states} map. It follows the {@link DFAState#edges} field to new
 * targets. The DFA simulator will either find {@link DFAState#edges} to be
 * `undefined`, to be non-`undefined` and `dfa.edges[t]` undefined, or
 * `dfa.edges[t]` to be non-undefined. The
 * {@link #addDFAEdge} method could be racing to set the field
 * but in either case the DFA simulator works; if `undefined`, and requests ATN
 * simulation. It could also race trying to get `dfa.edges[t]`, but either
 * way it will work because it's not doing a test and set operation.
 *
 * **Starting with SLL then failing to combined SLL/LL (Two-Stage
 * Parsing)**
 *
 * Sam pointed out that if SLL does not give a syntax error, then there is no
 * point in doing full LL, which is slower. We only have to try LL if we get a
 * syntax error. For maximum speed, Sam starts the parser set to pure SLL
 * mode with the {@link BailErrorStrategy}:
 *
 * ```
 * parser.interpreter.{@link #setPredictionMode setPredictionMode}`(`{@link PredictionMode#SLL}`)`;
 * parser.{@link Parser#setErrorHandler setErrorHandler}(new {@link BailErrorStrategy}());
 * ```
 *
 * If it does not get a syntax error, then we're done. If it does get a syntax
 * error, we need to retry with the combined SLL/LL strategy.
 *
 * The reason this works is as follows. If there are no SLL conflicts, then the
 * grammar is SLL (at least for that input set). If there is an SLL conflict,
 * the full LL analysis must yield a set of viable alternatives which is a
 * subset of the alternatives reported by SLL. If the LL set is a singleton,
 * then the grammar is LL but not SLL. If the LL set is the same size as the SLL
 * set, the decision is SLL. If the LL set has size &gt; 1, then that decision
 * is truly ambiguous on the current input. If the LL set is smaller, then the
 * SLL conflict resolution might choose an alternative that the full LL would
 * rule out as a possibility based upon better context information. If that's
 * the case, then the SLL parse will definitely get an error because the full LL
 * analysis says it's not viable. If SLL conflict resolution chooses an
 * alternative within the LL set, them both SLL and LL would choose the same
 * alternative because they both choose the minimum of multiple conflicting
 * alternatives.
 *
 * Let's say we have a set of SLL conflicting alternatives `{1, 2, 3}` and
 * a smaller LL set called *s*. If *s* is `{2, 3}`, then SLL
 * parsing will get an error because SLL will pursue alternative 1. If
 * *s* is `{1, 2}` or `{1, 3}` then both SLL and LL will
 * choose the same alternative because alternative one is the minimum of either
 * set. If *s* is `{2}` or `{3}` then SLL will get a syntax
 * error. If *s* is `{1}` then SLL will succeed.
 *
 * Of course, if the input is invalid, then we will get an error for sure in
 * both SLL and LL parsing. Erroneous input will therefore require 2 passes over
 * the input.
 */
let ParserATNSimulator = class ParserATNSimulator extends ATNSimulator_1.ATNSimulator {
    constructor(atn, parser) {
        super(atn);
        this.predictionMode = PredictionMode_1.PredictionMode.LL;
        this.force_global_context = false;
        this.always_try_local_context = true;
        /**
         * Determines whether the DFA is used for full-context predictions. When
         * `true`, the DFA stores transition information for both full-context
         * and SLL parsing; otherwise, the DFA only stores SLL transition
         * information.
         *
         * For some grammars, enabling the full-context DFA can result in a
         * substantial performance improvement. However, this improvement typically
         * comes at the expense of memory used for storing the cached DFA states,
         * configuration sets, and prediction contexts.
         *
         * The default value is `false`.
         */
        this.enable_global_context_dfa = false;
        this.optimize_unique_closure = true;
        this.optimize_ll1 = true;
        this.optimize_tail_calls = true;
        this.tail_call_preserves_sll = true;
        this.treat_sllk1_conflict_as_ambiguity = false;
        /**
         * When `true`, ambiguous alternatives are reported when they are
         * encountered within {@link #execATN}. When `false`, these messages
         * are suppressed. The default is `false`.
         *
         * When messages about ambiguous alternatives are not required, setting this
         * to `false` enables additional internal optimizations which may lose
         * this information.
         */
        this.reportAmbiguities = false;
        /** By default we do full context-sensitive LL(*) parsing not
         *  Strong LL(*) parsing. If we fail with Strong LL(*) we
         *  try full LL(*). That means we rewind and use context information
         *  when closure operations fall off the end of the rule that
         *  holds the decision were evaluating.
         */
        this.userWantsCtxSensitive = true;
        this._parser = parser;
    }
    getPredictionMode() {
        return this.predictionMode;
    }
    setPredictionMode(predictionMode) {
        this.predictionMode = predictionMode;
    }
    reset() {
        // intentionally empty
    }
    adaptivePredict(input, decision, outerContext, useContext) {
        if (useContext === undefined) {
            useContext = false;
        }
        let dfa = this.atn.decisionToDFA[decision];
        assert(dfa != null);
        if (this.optimize_ll1 && !dfa.isPrecedenceDfa && !dfa.isEmpty) {
            let ll_1 = input.LA(1);
            if (ll_1 >= 0 && ll_1 <= 0xFFFF) {
                let key = ((decision << 16) >>> 0) + ll_1;
                let alt = this.atn.LL1Table.get(key);
                if (alt != null) {
                    return alt;
                }
            }
        }
        this.dfa = dfa;
        if (this.force_global_context) {
            useContext = true;
        }
        else if (!this.always_try_local_context) {
            useContext = useContext || dfa.isContextSensitive;
        }
        this.userWantsCtxSensitive = useContext || (this.predictionMode !== PredictionMode_1.PredictionMode.SLL && outerContext != null && !this.atn.decisionToState[decision].sll);
        if (outerContext == null) {
            outerContext = ParserRuleContext_1.ParserRuleContext.emptyContext();
        }
        let state;
        if (!dfa.isEmpty) {
            state = this.getStartState(dfa, input, outerContext, useContext);
        }
        if (state == null) {
            if (outerContext == null) {
                outerContext = ParserRuleContext_1.ParserRuleContext.emptyContext();
            }
            if (ParserATNSimulator.debug) {
                console.log("ATN decision " + dfa.decision +
                    " exec LA(1)==" + this.getLookaheadName(input) +
                    ", outerContext=" + outerContext.toString(this._parser));
            }
            state = this.computeStartState(dfa, outerContext, useContext);
        }
        let m = input.mark();
        let index = input.index;
        try {
            let alt = this.execDFA(dfa, input, index, state);
            if (ParserATNSimulator.debug) {
                console.log("DFA after predictATN: " + dfa.toString(this._parser.vocabulary, this._parser.ruleNames));
            }
            return alt;
        }
        finally {
            this.dfa = undefined;
            input.seek(index);
            input.release(m);
        }
    }
    getStartState(dfa, input, outerContext, useContext) {
        if (!useContext) {
            if (dfa.isPrecedenceDfa) {
                // the start state for a precedence DFA depends on the current
                // parser precedence, and is provided by a DFA method.
                let state = dfa.getPrecedenceStartState(this._parser.precedence, false);
                if (state == null) {
                    return undefined;
                }
                return new SimulatorState_1.SimulatorState(outerContext, state, false, outerContext);
            }
            else {
                if (dfa.s0 == null) {
                    return undefined;
                }
                return new SimulatorState_1.SimulatorState(outerContext, dfa.s0, false, outerContext);
            }
        }
        if (!this.enable_global_context_dfa) {
            return undefined;
        }
        let remainingContext = outerContext;
        assert(outerContext != null);
        let s0;
        if (dfa.isPrecedenceDfa) {
            s0 = dfa.getPrecedenceStartState(this._parser.precedence, true);
        }
        else {
            s0 = dfa.s0full;
        }
        while (remainingContext != null && s0 != null && s0.isContextSensitive) {
            remainingContext = this.skipTailCalls(remainingContext);
            s0 = s0.getContextTarget(this.getReturnState(remainingContext));
            if (remainingContext.isEmpty) {
                assert(s0 == null || !s0.isContextSensitive);
            }
            else {
                remainingContext = remainingContext.parent;
            }
        }
        if (s0 == null) {
            return undefined;
        }
        return new SimulatorState_1.SimulatorState(outerContext, s0, useContext, remainingContext);
    }
    execDFA(dfa, input, startIndex, state) {
        let outerContext = state.outerContext;
        if (ParserATNSimulator.dfa_debug) {
            console.log("DFA decision " + dfa.decision +
                " exec LA(1)==" + this.getLookaheadName(input) +
                ", outerContext=" + outerContext.toString(this._parser));
        }
        if (ParserATNSimulator.dfa_debug) {
            console.log(dfa.toString(this._parser.vocabulary, this._parser.ruleNames));
        }
        let s = state.s0;
        let t = input.LA(1);
        let remainingOuterContext = state.remainingOuterContext;
        while (true) {
            if (ParserATNSimulator.dfa_debug) {
                console.log("DFA state " + s.stateNumber + " LA(1)==" + this.getLookaheadName(input));
            }
            if (state.useContext) {
                while (s.isContextSymbol(t)) {
                    let next;
                    if (remainingOuterContext != null) {
                        remainingOuterContext = this.skipTailCalls(remainingOuterContext);
                        next = s.getContextTarget(this.getReturnState(remainingOuterContext));
                    }
                    if (next == null) {
                        // fail over to ATN
                        let initialState = new SimulatorState_1.SimulatorState(state.outerContext, s, state.useContext, remainingOuterContext);
                        return this.execATN(dfa, input, startIndex, initialState);
                    }
                    assert(remainingOuterContext != null);
                    remainingOuterContext = remainingOuterContext.parent;
                    s = next;
                }
            }
            if (this.isAcceptState(s, state.useContext)) {
                if (s.predicates != null) {
                    if (ParserATNSimulator.dfa_debug) {
                        console.log("accept " + s);
                    }
                }
                else {
                    if (ParserATNSimulator.dfa_debug) {
                        console.log("accept; predict " + s.prediction + " in state " + s.stateNumber);
                    }
                }
                // keep going unless we're at EOF or state only has one alt number
                // mentioned in configs; check if something else could match
                // TODO: don't we always stop? only lexer would keep going
                // TODO: v3 dfa don't do this.
                break;
            }
            // t is not updated if one of these states is reached
            assert(!this.isAcceptState(s, state.useContext));
            // if no edge, pop over to ATN interpreter, update DFA and return
            let target = this.getExistingTargetState(s, t);
            if (target == null) {
                if (ParserATNSimulator.dfa_debug && t >= 0) {
                    console.log("no edge for " + this._parser.vocabulary.getDisplayName(t));
                }
                let alt;
                if (ParserATNSimulator.dfa_debug) {
                    let interval = Interval_1.Interval.of(startIndex, this._parser.inputStream.index);
                    console.log("ATN exec upon " +
                        this._parser.inputStream.getText(interval) +
                        " at DFA state " + s.stateNumber);
                }
                let initialState = new SimulatorState_1.SimulatorState(outerContext, s, state.useContext, remainingOuterContext);
                alt = this.execATN(dfa, input, startIndex, initialState);
                if (ParserATNSimulator.dfa_debug) {
                    console.log("back from DFA update, alt=" + alt + ", dfa=\n" + dfa.toString(this._parser.vocabulary, this._parser.ruleNames));
                    //dump(dfa);
                }
                // action already executed
                if (ParserATNSimulator.dfa_debug) {
                    console.log("DFA decision " + dfa.decision +
                        " predicts " + alt);
                }
                return alt; // we've updated DFA, exec'd action, and have our deepest answer
            }
            else if (target === ATNSimulator_1.ATNSimulator.ERROR) {
                let errorState = new SimulatorState_1.SimulatorState(outerContext, s, state.useContext, remainingOuterContext);
                return this.handleNoViableAlt(input, startIndex, errorState);
            }
            s = target;
            if (!this.isAcceptState(s, state.useContext) && t !== IntStream_1.IntStream.EOF) {
                input.consume();
                t = input.LA(1);
            }
        }
        //		if ( acceptState==null ) {
        //			if ( debug ) System.out.println("!!! no viable alt in dfa");
        //			return -1;
        //		}
        if (!state.useContext && s.configs.conflictInfo != null) {
            if (dfa.atnStartState instanceof DecisionState_1.DecisionState) {
                if (!this.userWantsCtxSensitive ||
                    (!s.configs.dipsIntoOuterContext && s.configs.isExactConflict) ||
                    (this.treat_sllk1_conflict_as_ambiguity && input.index === startIndex)) ;
                else {
                    assert(!state.useContext);
                    // Before attempting full context prediction, check to see if there are
                    // disambiguating or validating predicates to evaluate which allow an
                    // immediate decision
                    let conflictingAlts;
                    let predicates = s.predicates;
                    if (predicates != null) {
                        let conflictIndex = input.index;
                        if (conflictIndex !== startIndex) {
                            input.seek(startIndex);
                        }
                        conflictingAlts = this.evalSemanticContext(predicates, outerContext, true);
                        if (conflictingAlts.cardinality() === 1) {
                            return conflictingAlts.nextSetBit(0);
                        }
                        if (conflictIndex !== startIndex) {
                            // restore the index so reporting the fallback to full
                            // context occurs with the index at the correct spot
                            input.seek(conflictIndex);
                        }
                    }
                    if (this.reportAmbiguities) {
                        let conflictState = new SimulatorState_1.SimulatorState(outerContext, s, state.useContext, remainingOuterContext);
                        this.reportAttemptingFullContext(dfa, conflictingAlts, conflictState, startIndex, input.index);
                    }
                    input.seek(startIndex);
                    return this.adaptivePredict(input, dfa.decision, outerContext, true);
                }
            }
        }
        // Before jumping to prediction, check to see if there are
        // disambiguating or validating predicates to evaluate
        let predicates = s.predicates;
        if (predicates != null) {
            let stopIndex = input.index;
            if (startIndex !== stopIndex) {
                input.seek(startIndex);
            }
            let alts = this.evalSemanticContext(predicates, outerContext, this.reportAmbiguities && this.predictionMode === PredictionMode_1.PredictionMode.LL_EXACT_AMBIG_DETECTION);
            switch (alts.cardinality()) {
                case 0:
                    throw this.noViableAlt(input, outerContext, s.configs, startIndex);
                case 1:
                    return alts.nextSetBit(0);
                default:
                    // report ambiguity after predicate evaluation to make sure the correct
                    // set of ambig alts is reported.
                    if (startIndex !== stopIndex) {
                        input.seek(stopIndex);
                    }
                    this.reportAmbiguity(dfa, s, startIndex, stopIndex, s.configs.isExactConflict, alts, s.configs);
                    return alts.nextSetBit(0);
            }
        }
        if (ParserATNSimulator.dfa_debug) {
            console.log("DFA decision " + dfa.decision +
                " predicts " + s.prediction);
        }
        return s.prediction;
    }
    /**
     * Determines if a particular DFA state should be treated as an accept state
     * for the current prediction mode. In addition to the `useContext`
     * parameter, the {@link #getPredictionMode()} method provides the
     * prediction mode controlling the prediction algorithm as a whole.
     *
     * The default implementation simply returns the value of
     * `DFAState.isAcceptState` except for conflict states when
     * `useContext` is `true` and {@link #getPredictionMode()} is
     * {@link PredictionMode#LL_EXACT_AMBIG_DETECTION}. In that case, only
     * conflict states where {@link ATNConfigSet#isExactConflict} is
     * `true` are considered accept states.
     *
     * @param state The DFA state to check.
     * @param useContext `true` if the prediction algorithm is currently
     * considering the full parser context; otherwise, `false` if the
     * algorithm is currently performing a local context prediction.
     *
     * @returns `true` if the specified `state` is an accept state;
     * otherwise, `false`.
     */
    isAcceptState(state, useContext) {
        if (!state.isAcceptState) {
            return false;
        }
        if (state.configs.conflictingAlts == null) {
            // unambiguous
            return true;
        }
        // More picky when we need exact conflicts
        if (useContext && this.predictionMode === PredictionMode_1.PredictionMode.LL_EXACT_AMBIG_DETECTION) {
            return state.configs.isExactConflict;
        }
        return true;
    }
    /** Performs ATN simulation to compute a predicted alternative based
     *  upon the remaining input, but also updates the DFA cache to avoid
     *  having to traverse the ATN again for the same input sequence.
     *
     * There are some key conditions we're looking for after computing a new
     * set of ATN configs (proposed DFA state):
     *
     * * if the set is empty, there is no viable alternative for current symbol
     * * does the state uniquely predict an alternative?
     * * does the state have a conflict that would prevent us from
     *   putting it on the work list?
     * * if in non-greedy decision is there a config at a rule stop state?
     *
     * We also have some key operations to do:
     *
     * * add an edge from previous DFA state to potentially new DFA state, D,
     *   upon current symbol but only if adding to work list, which means in all
     *   cases except no viable alternative (and possibly non-greedy decisions?)
     * * collecting predicates and adding semantic context to DFA accept states
     * * adding rule context to context-sensitive DFA accept states
     * * consuming an input symbol
     * * reporting a conflict
     * * reporting an ambiguity
     * * reporting a context sensitivity
     * * reporting insufficient predicates
     *
     * We should isolate those operations, which are side-effecting, to the
     * main work loop. We can isolate lots of code into other functions, but
     * they should be side effect free. They can return package that
     * indicates whether we should report something, whether we need to add a
     * DFA edge, whether we need to augment accept state with semantic
     * context or rule invocation context. Actually, it seems like we always
     * add predicates if they exist, so that can simply be done in the main
     * loop for any accept state creation or modification request.
     *
     * cover these cases:
     *   dead end
     *   single alt
     *   single alt + preds
     *   conflict
     *   conflict + preds
     *
     * TODO: greedy + those
     */
    execATN(dfa, input, startIndex, initialState) {
        if (ParserATNSimulator.debug) {
            console.log("execATN decision " + dfa.decision + " exec LA(1)==" + this.getLookaheadName(input));
        }
        let outerContext = initialState.outerContext;
        let useContext = initialState.useContext;
        let t = input.LA(1);
        let previous = initialState;
        let contextCache = new PredictionContextCache_1.PredictionContextCache();
        while (true) { // while more work
            let nextState = this.computeReachSet(dfa, previous, t, contextCache);
            if (nextState == null) {
                this.setDFAEdge(previous.s0, input.LA(1), ATNSimulator_1.ATNSimulator.ERROR);
                return this.handleNoViableAlt(input, startIndex, previous);
            }
            let D = nextState.s0;
            // predicted alt => accept state
            assert(D.isAcceptState || D.prediction === ATN_1.ATN.INVALID_ALT_NUMBER);
            // conflicted => accept state
            assert(D.isAcceptState || D.configs.conflictInfo == null);
            if (this.isAcceptState(D, useContext)) {
                let conflictingAlts = D.configs.conflictingAlts;
                let predictedAlt = conflictingAlts == null ? D.prediction : ATN_1.ATN.INVALID_ALT_NUMBER;
                if (predictedAlt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (this.optimize_ll1
                        && input.index === startIndex
                        && !dfa.isPrecedenceDfa
                        && nextState.outerContext === nextState.remainingOuterContext
                        && dfa.decision >= 0
                        && !D.configs.hasSemanticContext) {
                        if (t >= 0 && t <= MAX_SHORT_VALUE) {
                            let key = ((dfa.decision << 16) >>> 0) + t;
                            this.atn.LL1Table.set(key, predictedAlt);
                        }
                    }
                    if (useContext && this.always_try_local_context) {
                        this.reportContextSensitivity(dfa, predictedAlt, nextState, startIndex, input.index);
                    }
                }
                predictedAlt = D.prediction;
                //				int k = input.index - startIndex + 1; // how much input we used
                //				System.out.println("used k="+k);
                let attemptFullContext = conflictingAlts != null && this.userWantsCtxSensitive;
                if (attemptFullContext) {
                    // Only exact conflicts are known to be ambiguous when local
                    // prediction does not step out of the decision rule.
                    attemptFullContext = !useContext
                        && (D.configs.dipsIntoOuterContext || !D.configs.isExactConflict)
                        && (!this.treat_sllk1_conflict_as_ambiguity || input.index !== startIndex);
                }
                if (D.configs.hasSemanticContext) {
                    let predPredictions = D.predicates;
                    if (predPredictions != null) {
                        let conflictIndex = input.index;
                        if (conflictIndex !== startIndex) {
                            input.seek(startIndex);
                        }
                        // use complete evaluation here if we'll want to retry with full context if still ambiguous
                        conflictingAlts = this.evalSemanticContext(predPredictions, outerContext, attemptFullContext || this.reportAmbiguities);
                        switch (conflictingAlts.cardinality()) {
                            case 0:
                                throw this.noViableAlt(input, outerContext, D.configs, startIndex);
                            case 1:
                                return conflictingAlts.nextSetBit(0);
                        }
                        if (conflictIndex !== startIndex) {
                            // restore the index so reporting the fallback to full
                            // context occurs with the index at the correct spot
                            input.seek(conflictIndex);
                        }
                    }
                }
                if (!attemptFullContext) {
                    if (conflictingAlts != null) {
                        if (this.reportAmbiguities && conflictingAlts.cardinality() > 1) {
                            this.reportAmbiguity(dfa, D, startIndex, input.index, D.configs.isExactConflict, conflictingAlts, D.configs);
                        }
                        predictedAlt = conflictingAlts.nextSetBit(0);
                    }
                    return predictedAlt;
                }
                else {
                    assert(!useContext);
                    assert(this.isAcceptState(D, false));
                    if (ParserATNSimulator.debug) {
                        console.log("RETRY with outerContext=" + outerContext);
                    }
                    let fullContextState = this.computeStartState(dfa, outerContext, true);
                    if (this.reportAmbiguities) {
                        this.reportAttemptingFullContext(dfa, conflictingAlts, nextState, startIndex, input.index);
                    }
                    input.seek(startIndex);
                    return this.execATN(dfa, input, startIndex, fullContextState);
                }
            }
            previous = nextState;
            if (t !== IntStream_1.IntStream.EOF) {
                input.consume();
                t = input.LA(1);
            }
        }
    }
    /**
     * This method is used to improve the localization of error messages by
     * choosing an alternative rather than throwing a
     * {@link NoViableAltException} in particular prediction scenarios where the
     * {@link #ERROR} state was reached during ATN simulation.
     *
     * The default implementation of this method uses the following
     * algorithm to identify an ATN configuration which successfully parsed the
     * decision entry rule. Choosing such an alternative ensures that the
     * {@link ParserRuleContext} returned by the calling rule will be complete
     * and valid, and the syntax error will be reported later at a more
     * localized location.
     *
     * * If no configuration in `configs` reached the end of the
     *   decision rule, return {@link ATN#INVALID_ALT_NUMBER}.
     * * If all configurations in `configs` which reached the end of the
     *   decision rule predict the same alternative, return that alternative.
     * * If the configurations in `configs` which reached the end of the
     *   decision rule predict multiple alternatives (call this *S*),
     *   choose an alternative in the following order.
     *
     *     1. Filter the configurations in `configs` to only those
     *        configurations which remain viable after evaluating semantic predicates.
     *        If the set of these filtered configurations which also reached the end of
     *        the decision rule is not empty, return the minimum alternative
     *        represented in this set.
     *     1. Otherwise, choose the minimum alternative in *S*.
     *
     * In some scenarios, the algorithm described above could predict an
     * alternative which will result in a {@link FailedPredicateException} in
     * parser. Specifically, this could occur if the *only* configuration
     * capable of successfully parsing to the end of the decision rule is
     * blocked by a semantic predicate. By choosing this alternative within
     * {@link #adaptivePredict} instead of throwing a
     * {@link NoViableAltException}, the resulting
     * {@link FailedPredicateException} in the parser will identify the specific
     * predicate which is preventing the parser from successfully parsing the
     * decision rule, which helps developers identify and correct logic errors
     * in semantic predicates.
     *
     * @param input The input {@link TokenStream}
     * @param startIndex The start index for the current prediction, which is
     * the input index where any semantic context in `configs` should be
     * evaluated
     * @param previous The ATN simulation state immediately before the
     * {@link #ERROR} state was reached
     *
     * @returns The value to return from {@link #adaptivePredict}, or
     * {@link ATN#INVALID_ALT_NUMBER} if a suitable alternative was not
     * identified and {@link #adaptivePredict} should report an error instead.
     */
    handleNoViableAlt(input, startIndex, previous) {
        if (previous.s0 != null) {
            let alts = new BitSet_1.BitSet();
            let maxAlt = 0;
            for (let config of previous.s0.configs) {
                if (config.reachesIntoOuterContext || config.state instanceof RuleStopState_1.RuleStopState) {
                    alts.set(config.alt);
                    maxAlt = Math.max(maxAlt, config.alt);
                }
            }
            switch (alts.cardinality()) {
                case 0:
                    break;
                case 1:
                    return alts.nextSetBit(0);
                default:
                    if (!previous.s0.configs.hasSemanticContext) {
                        // configs doesn't contain any predicates, so the predicate
                        // filtering code below would be pointless
                        return alts.nextSetBit(0);
                    }
                    /*
                     * Try to find a configuration set that not only dipped into the outer
                     * context, but also isn't eliminated by a predicate.
                     */
                    let filteredConfigs = new ATNConfigSet_1.ATNConfigSet();
                    for (let config of previous.s0.configs) {
                        if (config.reachesIntoOuterContext || config.state instanceof RuleStopState_1.RuleStopState) {
                            filteredConfigs.add(config);
                        }
                    }
                    /* The following code blocks are adapted from predicateDFAState with
                     * the following key changes.
                     *
                     *  1. The code operates on an ATNConfigSet rather than a DFAState.
                     *  2. Predicates are collected for all alternatives represented in
                     *     filteredConfigs, rather than restricting the evaluation to
                     *     conflicting and/or unique configurations.
                     */
                    let altToPred = this.getPredsForAmbigAlts(alts, filteredConfigs, maxAlt);
                    if (altToPred != null) {
                        let predicates = this.getPredicatePredictions(alts, altToPred);
                        if (predicates != null) {
                            let stopIndex = input.index;
                            try {
                                input.seek(startIndex);
                                let filteredAlts = this.evalSemanticContext(predicates, previous.outerContext, false);
                                if (!filteredAlts.isEmpty) {
                                    return filteredAlts.nextSetBit(0);
                                }
                            }
                            finally {
                                input.seek(stopIndex);
                            }
                        }
                    }
                    return alts.nextSetBit(0);
            }
        }
        throw this.noViableAlt(input, previous.outerContext, previous.s0.configs, startIndex);
    }
    computeReachSet(dfa, previous, t, contextCache) {
        let useContext = previous.useContext;
        let remainingGlobalContext = previous.remainingOuterContext;
        let s = previous.s0;
        if (useContext) {
            while (s.isContextSymbol(t)) {
                let next;
                if (remainingGlobalContext != null) {
                    remainingGlobalContext = this.skipTailCalls(remainingGlobalContext);
                    next = s.getContextTarget(this.getReturnState(remainingGlobalContext));
                }
                if (next == null) {
                    break;
                }
                assert(remainingGlobalContext != null);
                remainingGlobalContext = remainingGlobalContext.parent;
                s = next;
            }
        }
        assert(!this.isAcceptState(s, useContext));
        if (this.isAcceptState(s, useContext)) {
            return new SimulatorState_1.SimulatorState(previous.outerContext, s, useContext, remainingGlobalContext);
        }
        let s0 = s;
        let target = this.getExistingTargetState(s0, t);
        if (target == null) {
            let result = this.computeTargetState(dfa, s0, remainingGlobalContext, t, useContext, contextCache);
            target = result[0];
            remainingGlobalContext = result[1];
        }
        if (target === ATNSimulator_1.ATNSimulator.ERROR) {
            return undefined;
        }
        assert(!useContext || !target.configs.dipsIntoOuterContext);
        return new SimulatorState_1.SimulatorState(previous.outerContext, target, useContext, remainingGlobalContext);
    }
    /**
     * Get an existing target state for an edge in the DFA. If the target state
     * for the edge has not yet been computed or is otherwise not available,
     * this method returns `undefined`.
     *
     * @param s The current DFA state
     * @param t The next input symbol
     * @returns The existing target DFA state for the given input symbol
     * `t`, or `undefined` if the target state for this edge is not
     * already cached
     */
    getExistingTargetState(s, t) {
        return s.getTarget(t);
    }
    /**
     * Compute a target state for an edge in the DFA, and attempt to add the
     * computed state and corresponding edge to the DFA.
     *
     * @param dfa
     * @param s The current DFA state
     * @param remainingGlobalContext
     * @param t The next input symbol
     * @param useContext
     * @param contextCache
     *
     * @returns The computed target DFA state for the given input symbol
     * `t`. If `t` does not lead to a valid DFA state, this method
     * returns {@link #ERROR}.
     */
    computeTargetState(dfa, s, remainingGlobalContext, t, useContext, contextCache) {
        let closureConfigs = s.configs.toArray();
        let contextElements;
        let reach = new ATNConfigSet_1.ATNConfigSet();
        let stepIntoGlobal;
        do {
            let hasMoreContext = !useContext || remainingGlobalContext != null;
            if (!hasMoreContext) {
                reach.isOutermostConfigSet = true;
            }
            let reachIntermediate = new ATNConfigSet_1.ATNConfigSet();
            /* Configurations already in a rule stop state indicate reaching the end
             * of the decision rule (local context) or end of the start rule (full
             * context). Once reached, these configurations are never updated by a
             * closure operation, so they are handled separately for the performance
             * advantage of having a smaller intermediate set when calling closure.
             *
             * For full-context reach operations, separate handling is required to
             * ensure that the alternative matching the longest overall sequence is
             * chosen when multiple such configurations can match the input.
             */
            let skippedStopStates;
            for (let c of closureConfigs) {
                if (ParserATNSimulator.debug) {
                    console.log("testing " + this.getTokenName(t) + " at " + c.toString());
                }
                if (c.state instanceof RuleStopState_1.RuleStopState) {
                    assert(c.context.isEmpty);
                    if (useContext && !c.reachesIntoOuterContext || t === IntStream_1.IntStream.EOF) {
                        if (skippedStopStates == null) {
                            skippedStopStates = [];
                        }
                        skippedStopStates.push(c);
                    }
                    continue;
                }
                let n = c.state.numberOfOptimizedTransitions;
                for (let ti = 0; ti < n; ti++) { // for each optimized transition
                    let trans = c.state.getOptimizedTransition(ti);
                    let target = this.getReachableTarget(c, trans, t);
                    if (target != null) {
                        reachIntermediate.add(c.transform(target, false), contextCache);
                    }
                }
            }
            /* This block optimizes the reach operation for intermediate sets which
             * trivially indicate a termination state for the overall
             * adaptivePredict operation.
             *
             * The conditions assume that intermediate
             * contains all configurations relevant to the reach set, but this
             * condition is not true when one or more configurations have been
             * withheld in skippedStopStates, or when the current symbol is EOF.
             */
            if (this.optimize_unique_closure && skippedStopStates == null && t !== Token_1.Token.EOF && reachIntermediate.uniqueAlt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                reachIntermediate.isOutermostConfigSet = reach.isOutermostConfigSet;
                reach = reachIntermediate;
                break;
            }
            /* If the reach set could not be trivially determined, perform a closure
             * operation on the intermediate set to compute its initial value.
             */
            let collectPredicates = false;
            let treatEofAsEpsilon = t === Token_1.Token.EOF;
            this.closure(reachIntermediate, reach, collectPredicates, hasMoreContext, contextCache, treatEofAsEpsilon);
            stepIntoGlobal = reach.dipsIntoOuterContext;
            if (t === IntStream_1.IntStream.EOF) {
                /* After consuming EOF no additional input is possible, so we are
                 * only interested in configurations which reached the end of the
                 * decision rule (local context) or end of the start rule (full
                 * context). Update reach to contain only these configurations. This
                 * handles both explicit EOF transitions in the grammar and implicit
                 * EOF transitions following the end of the decision or start rule.
                 *
                 * This is handled before the configurations in skippedStopStates,
                 * because any configurations potentially added from that list are
                 * already guaranteed to meet this condition whether or not it's
                 * required.
                 */
                reach = this.removeAllConfigsNotInRuleStopState(reach, contextCache);
            }
            /* If skippedStopStates is not undefined, then it contains at least one
             * configuration. For full-context reach operations, these
             * configurations reached the end of the start rule, in which case we
             * only add them back to reach if no configuration during the current
             * closure operation reached such a state. This ensures adaptivePredict
             * chooses an alternative matching the longest overall sequence when
             * multiple alternatives are viable.
             */
            if (skippedStopStates != null && (!useContext || !PredictionMode_1.PredictionMode.hasConfigInRuleStopState(reach))) {
                assert(skippedStopStates.length > 0);
                for (let c of skippedStopStates) {
                    reach.add(c, contextCache);
                }
            }
            if (useContext && stepIntoGlobal) {
                reach.clear();
                // We know remainingGlobalContext is not undefined at this point (why?)
                remainingGlobalContext = remainingGlobalContext;
                remainingGlobalContext = this.skipTailCalls(remainingGlobalContext);
                let nextContextElement = this.getReturnState(remainingGlobalContext);
                if (contextElements == null) {
                    contextElements = new IntegerList_1.IntegerList();
                }
                if (remainingGlobalContext.isEmpty) {
                    remainingGlobalContext = undefined;
                }
                else {
                    remainingGlobalContext = remainingGlobalContext.parent;
                }
                contextElements.add(nextContextElement);
                if (nextContextElement !== PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY) {
                    for (let i = 0; i < closureConfigs.length; i++) {
                        closureConfigs[i] = closureConfigs[i].appendContext(nextContextElement, contextCache);
                    }
                }
            }
        } while (useContext && stepIntoGlobal);
        if (reach.isEmpty) {
            this.setDFAEdge(s, t, ATNSimulator_1.ATNSimulator.ERROR);
            return [ATNSimulator_1.ATNSimulator.ERROR, remainingGlobalContext];
        }
        let result = this.addDFAEdge(dfa, s, t, contextElements, reach, contextCache);
        return [result, remainingGlobalContext];
    }
    /**
     * Return a configuration set containing only the configurations from
     * `configs` which are in a {@link RuleStopState}. If all
     * configurations in `configs` are already in a rule stop state, this
     * method simply returns `configs`.
     *
     * @param configs the configuration set to update
     * @param contextCache the {@link PredictionContext} cache
     *
     * @returns `configs` if all configurations in `configs` are in a
     * rule stop state, otherwise return a new configuration set containing only
     * the configurations from `configs` which are in a rule stop state
     */
    removeAllConfigsNotInRuleStopState(configs, contextCache) {
        if (PredictionMode_1.PredictionMode.allConfigsInRuleStopStates(configs)) {
            return configs;
        }
        let result = new ATNConfigSet_1.ATNConfigSet();
        for (let config of configs) {
            if (!(config.state instanceof RuleStopState_1.RuleStopState)) {
                continue;
            }
            result.add(config, contextCache);
        }
        return result;
    }
    computeStartState(dfa, globalContext, useContext) {
        let s0 = dfa.isPrecedenceDfa ? dfa.getPrecedenceStartState(this._parser.precedence, useContext) :
            useContext ? dfa.s0full :
                dfa.s0;
        if (s0 != null) {
            if (!useContext) {
                return new SimulatorState_1.SimulatorState(globalContext, s0, useContext, globalContext);
            }
            s0.setContextSensitive(this.atn);
        }
        let decision = dfa.decision;
        // @NotNull
        let p = dfa.atnStartState;
        let previousContext = 0;
        let remainingGlobalContext = globalContext;
        let initialContext = useContext ? PredictionContext_1.PredictionContext.EMPTY_FULL : PredictionContext_1.PredictionContext.EMPTY_LOCAL; // always at least the implicit call to start rule
        let contextCache = new PredictionContextCache_1.PredictionContextCache();
        if (useContext) {
            if (!this.enable_global_context_dfa) {
                while (remainingGlobalContext != null) {
                    if (remainingGlobalContext.isEmpty) {
                        previousContext = PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY;
                        remainingGlobalContext = undefined;
                    }
                    else {
                        previousContext = this.getReturnState(remainingGlobalContext);
                        initialContext = initialContext.appendSingleContext(previousContext, contextCache);
                        remainingGlobalContext = remainingGlobalContext.parent;
                    }
                }
            }
            while (s0 != null && s0.isContextSensitive && remainingGlobalContext != null) {
                let next;
                remainingGlobalContext = this.skipTailCalls(remainingGlobalContext);
                if (remainingGlobalContext.isEmpty) {
                    next = s0.getContextTarget(PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY);
                    previousContext = PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY;
                    remainingGlobalContext = undefined;
                }
                else {
                    previousContext = this.getReturnState(remainingGlobalContext);
                    next = s0.getContextTarget(previousContext);
                    initialContext = initialContext.appendSingleContext(previousContext, contextCache);
                    remainingGlobalContext = remainingGlobalContext.parent;
                }
                if (next == null) {
                    break;
                }
                s0 = next;
            }
        }
        if (s0 != null && !s0.isContextSensitive) {
            return new SimulatorState_1.SimulatorState(globalContext, s0, useContext, remainingGlobalContext);
        }
        let configs = new ATNConfigSet_1.ATNConfigSet();
        while (true) {
            let reachIntermediate = new ATNConfigSet_1.ATNConfigSet();
            let n = p.numberOfTransitions;
            for (let ti = 0; ti < n; ti++) {
                // for each transition
                let target = p.transition(ti).target;
                reachIntermediate.add(ATNConfig_1.ATNConfig.create(target, ti + 1, initialContext));
            }
            let hasMoreContext = remainingGlobalContext != null;
            if (!hasMoreContext) {
                configs.isOutermostConfigSet = true;
            }
            let collectPredicates = true;
            this.closure(reachIntermediate, configs, collectPredicates, hasMoreContext, contextCache, false);
            let stepIntoGlobal = configs.dipsIntoOuterContext;
            let next;
            if (useContext && !this.enable_global_context_dfa) {
                s0 = this.addDFAState(dfa, configs, contextCache);
                break;
            }
            else if (s0 == null) {
                if (!dfa.isPrecedenceDfa) {
                    next = this.addDFAState(dfa, configs, contextCache);
                    if (useContext) {
                        if (!dfa.s0full) {
                            dfa.s0full = next;
                        }
                        else {
                            next = dfa.s0full;
                        }
                    }
                    else {
                        if (!dfa.s0) {
                            dfa.s0 = next;
                        }
                        else {
                            next = dfa.s0;
                        }
                    }
                }
                else {
                    /* If this is a precedence DFA, we use applyPrecedenceFilter
                     * to convert the computed start state to a precedence start
                     * state. We then use DFA.setPrecedenceStartState to set the
                     * appropriate start state for the precedence level rather
                     * than simply setting DFA.s0.
                     */
                    configs = this.applyPrecedenceFilter(configs, globalContext, contextCache);
                    next = this.addDFAState(dfa, configs, contextCache);
                    dfa.setPrecedenceStartState(this._parser.precedence, useContext, next);
                }
            }
            else {
                if (dfa.isPrecedenceDfa) {
                    configs = this.applyPrecedenceFilter(configs, globalContext, contextCache);
                }
                next = this.addDFAState(dfa, configs, contextCache);
                s0.setContextTarget(previousContext, next);
            }
            s0 = next;
            if (!useContext || !stepIntoGlobal) {
                break;
            }
            // TODO: make sure it distinguishes empty stack states
            next.setContextSensitive(this.atn);
            // We know remainingGlobalContext is not undefined at this point (why?)
            remainingGlobalContext = remainingGlobalContext;
            configs.clear();
            remainingGlobalContext = this.skipTailCalls(remainingGlobalContext);
            let nextContextElement = this.getReturnState(remainingGlobalContext);
            if (remainingGlobalContext.isEmpty) {
                remainingGlobalContext = undefined;
            }
            else {
                remainingGlobalContext = remainingGlobalContext.parent;
            }
            if (nextContextElement !== PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY) {
                initialContext = initialContext.appendSingleContext(nextContextElement, contextCache);
            }
            previousContext = nextContextElement;
        }
        return new SimulatorState_1.SimulatorState(globalContext, s0, useContext, remainingGlobalContext);
    }
    /**
     * This method transforms the start state computed by
     * {@link #computeStartState} to the special start state used by a
     * precedence DFA for a particular precedence value. The transformation
     * process applies the following changes to the start state's configuration
     * set.
     *
     * 1. Evaluate the precedence predicates for each configuration using
     *    {@link SemanticContext#evalPrecedence}.
     * 1. When {@link ATNConfig#isPrecedenceFilterSuppressed} is `false`,
     *    remove all configurations which predict an alternative greater than 1,
     *    for which another configuration that predicts alternative 1 is in the
     *    same ATN state with the same prediction context. This transformation is
     *    valid for the following reasons:
     *
     *     * The closure block cannot contain any epsilon transitions which bypass
     *       the body of the closure, so all states reachable via alternative 1 are
     *       part of the precedence alternatives of the transformed left-recursive
     *       rule.
     *     * The "primary" portion of a left recursive rule cannot contain an
     *       epsilon transition, so the only way an alternative other than 1 can exist
     *       in a state that is also reachable via alternative 1 is by nesting calls
     *       to the left-recursive rule, with the outer calls not being at the
     *       preferred precedence level. The
     *       {@link ATNConfig#isPrecedenceFilterSuppressed} property marks ATN
     *       configurations which do not meet this condition, and therefore are not
     *       eligible for elimination during the filtering process.
     *
     * The prediction context must be considered by this filter to address
     * situations like the following.
     *
     * ```antlr
     * grammar TA;
     * prog: statement* EOF;
     * statement: letterA | statement letterA 'b' ;
     * letterA: 'a';
     * ```
     *
     * If the above grammar, the ATN state immediately before the token
     * reference `'a'` in `letterA` is reachable from the left edge
     * of both the primary and closure blocks of the left-recursive rule
     * `statement`. The prediction context associated with each of these
     * configurations distinguishes between them, and prevents the alternative
     * which stepped out to `prog` (and then back in to `statement`
     * from being eliminated by the filter.
     *
     * @param configs The configuration set computed by
     * {@link #computeStartState} as the start state for the DFA.
     * @returns The transformed configuration set representing the start state
     * for a precedence DFA at a particular precedence level (determined by
     * calling {@link Parser#getPrecedence}).
     */
    applyPrecedenceFilter(configs, globalContext, contextCache) {
        let statesFromAlt1 = new Map();
        let configSet = new ATNConfigSet_1.ATNConfigSet();
        for (let config of configs) {
            // handle alt 1 first
            if (config.alt !== 1) {
                continue;
            }
            let updatedContext = config.semanticContext.evalPrecedence(this._parser, globalContext);
            if (updatedContext == null) {
                // the configuration was eliminated
                continue;
            }
            statesFromAlt1.set(config.state.stateNumber, config.context);
            if (updatedContext !== config.semanticContext) {
                configSet.add(config.transform(config.state, false, updatedContext), contextCache);
            }
            else {
                configSet.add(config, contextCache);
            }
        }
        for (let config of configs) {
            if (config.alt === 1) {
                // already handled
                continue;
            }
            if (!config.isPrecedenceFilterSuppressed) {
                /* In the future, this elimination step could be updated to also
                 * filter the prediction context for alternatives predicting alt>1
                 * (basically a graph subtraction algorithm).
                 */
                let context = statesFromAlt1.get(config.state.stateNumber);
                if (context != null && context.equals(config.context)) {
                    // eliminated
                    continue;
                }
            }
            configSet.add(config, contextCache);
        }
        return configSet;
    }
    getReachableTarget(source, trans, ttype) {
        if (trans.matches(ttype, 0, this.atn.maxTokenType)) {
            return trans.target;
        }
        return undefined;
    }
    /** collect and set D's semantic context */
    predicateDFAState(D, configs, nalts) {
        let conflictingAlts = this.getConflictingAltsFromConfigSet(configs);
        if (!conflictingAlts) {
            throw new Error("This unhandled scenario is intended to be unreachable, but I'm currently not sure of why we know that's the case.");
        }
        if (ParserATNSimulator.debug) {
            console.log("predicateDFAState " + D);
        }
        let altToPred = this.getPredsForAmbigAlts(conflictingAlts, configs, nalts);
        // altToPred[uniqueAlt] is now our validating predicate (if any)
        let predPredictions;
        if (altToPred != null) {
            // we have a validating predicate; test it
            // Update DFA so reach becomes accept state with predicate
            predPredictions = this.getPredicatePredictions(conflictingAlts, altToPred);
            D.predicates = predPredictions;
        }
        return predPredictions;
    }
    getPredsForAmbigAlts(ambigAlts, configs, nalts) {
        // REACH=[1|1|[]|0:0, 1|2|[]|0:1]
        /* altToPred starts as an array of all undefined contexts. The entry at index i
         * corresponds to alternative i. altToPred[i] may have one of three values:
         *   1. undefined: no ATNConfig c is found such that c.alt===i
         *   2. SemanticContext.NONE: At least one ATNConfig c exists such that
         *      c.alt===i and c.semanticContext===SemanticContext.NONE. In other words,
         *      alt i has at least one unpredicated config.
         *   3. Non-NONE Semantic Context: There exists at least one, and for all
         *      ATNConfig c such that c.alt===i, c.semanticContext!==SemanticContext.NONE.
         *
         * From this, it is clear that NONE||anything==NONE.
         */
        let altToPred = new Array(nalts + 1);
        let n = altToPred.length;
        for (let c of configs) {
            if (ambigAlts.get(c.alt)) {
                altToPred[c.alt] = SemanticContext_1.SemanticContext.or(altToPred[c.alt], c.semanticContext);
            }
        }
        let nPredAlts = 0;
        for (let i = 0; i < n; i++) {
            if (altToPred[i] == null) {
                altToPred[i] = SemanticContext_1.SemanticContext.NONE;
            }
            else if (altToPred[i] !== SemanticContext_1.SemanticContext.NONE) {
                nPredAlts++;
            }
        }
        // At this point we know `altToPred` doesn't contain any undefined entries
        let result = altToPred;
        // nonambig alts are undefined in result
        if (nPredAlts === 0) {
            result = undefined;
        }
        if (ParserATNSimulator.debug) {
            console.log("getPredsForAmbigAlts result " + (result ? Arrays_1.Arrays.toString(result) : "undefined"));
        }
        return result;
    }
    getPredicatePredictions(ambigAlts, altToPred) {
        let pairs = [];
        let containsPredicate = false;
        for (let i = 1; i < altToPred.length; i++) {
            let pred = altToPred[i];
            // unpredicated is indicated by SemanticContext.NONE
            assert(pred != null);
            // find first unpredicated but ambig alternative, if any.
            // Only ambiguous alternatives will have SemanticContext.NONE.
            // Any unambig alts or ambig naked alts after first ambig naked are ignored
            // (undefined, i) means alt i is the default prediction
            // if no (undefined, i), then no default prediction.
            if (ambigAlts != null && ambigAlts.get(i) && pred === SemanticContext_1.SemanticContext.NONE) {
                pairs.push(new DFAState_1.DFAState.PredPrediction(pred, i));
            }
            else if (pred !== SemanticContext_1.SemanticContext.NONE) {
                containsPredicate = true;
                pairs.push(new DFAState_1.DFAState.PredPrediction(pred, i));
            }
        }
        if (!containsPredicate) {
            return undefined;
        }
        //		System.out.println(Arrays.toString(altToPred)+"->"+pairs);
        return pairs;
    }
    /** Look through a list of predicate/alt pairs, returning alts for the
     *  pairs that win. An `undefined` predicate indicates an alt containing an
     *  unpredicated config which behaves as "always true."
     */
    evalSemanticContext(predPredictions, outerContext, complete) {
        let predictions = new BitSet_1.BitSet();
        for (let pair of predPredictions) {
            if (pair.pred === SemanticContext_1.SemanticContext.NONE) {
                predictions.set(pair.alt);
                if (!complete) {
                    break;
                }
                continue;
            }
            let evaluatedResult = this.evalSemanticContextImpl(pair.pred, outerContext, pair.alt);
            if (ParserATNSimulator.debug || ParserATNSimulator.dfa_debug) {
                console.log("eval pred " + pair + "=" + evaluatedResult);
            }
            if (evaluatedResult) {
                if (ParserATNSimulator.debug || ParserATNSimulator.dfa_debug) {
                    console.log("PREDICT " + pair.alt);
                }
                predictions.set(pair.alt);
                if (!complete) {
                    break;
                }
            }
        }
        return predictions;
    }
    /**
     * Evaluate a semantic context within a specific parser context.
     *
     * This method might not be called for every semantic context evaluated
     * during the prediction process. In particular, we currently do not
     * evaluate the following but it may change in the future:
     *
     * * Precedence predicates (represented by
     *   {@link SemanticContext.PrecedencePredicate}) are not currently evaluated
     *   through this method.
     * * Operator predicates (represented by {@link SemanticContext.AND} and
     *   {@link SemanticContext.OR}) are evaluated as a single semantic
     *   context, rather than evaluating the operands individually.
     *   Implementations which require evaluation results from individual
     *   predicates should override this method to explicitly handle evaluation of
     *   the operands within operator predicates.
     *
     * @param pred The semantic context to evaluate
     * @param parserCallStack The parser context in which to evaluate the
     * semantic context
     * @param alt The alternative which is guarded by `pred`
     *
     * @since 4.3
     */
    evalSemanticContextImpl(pred, parserCallStack, alt) {
        return pred.eval(this._parser, parserCallStack);
    }
    /* TODO: If we are doing predicates, there is no point in pursuing
         closure operations if we reach a DFA state that uniquely predicts
         alternative. We will not be caching that DFA state and it is a
         waste to pursue the closure. Might have to advance when we do
         ambig detection thought :(
          */
    closure(sourceConfigs, configs, collectPredicates, hasMoreContext, contextCache, treatEofAsEpsilon) {
        if (contextCache == null) {
            contextCache = PredictionContextCache_1.PredictionContextCache.UNCACHED;
        }
        let currentConfigs = sourceConfigs;
        let closureBusy = new Array2DHashSet_1.Array2DHashSet(ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE);
        while (currentConfigs.size > 0) {
            let intermediate = new ATNConfigSet_1.ATNConfigSet();
            for (let config of currentConfigs) {
                this.closureImpl(config, configs, intermediate, closureBusy, collectPredicates, hasMoreContext, contextCache, 0, treatEofAsEpsilon);
            }
            currentConfigs = intermediate;
        }
    }
    closureImpl(config, configs, intermediate, closureBusy, collectPredicates, hasMoreContexts, contextCache, depth, treatEofAsEpsilon) {
        if (ParserATNSimulator.debug) {
            console.log("closure(" + config.toString(this._parser, true) + ")");
        }
        if (config.state instanceof RuleStopState_1.RuleStopState) {
            // We hit rule end. If we have context info, use it
            if (!config.context.isEmpty) {
                let hasEmpty = config.context.hasEmpty;
                let nonEmptySize = config.context.size - (hasEmpty ? 1 : 0);
                for (let i = 0; i < nonEmptySize; i++) {
                    let newContext = config.context.getParent(i); // "pop" return state
                    let returnState = this.atn.states[config.context.getReturnState(i)];
                    let c = ATNConfig_1.ATNConfig.create(returnState, config.alt, newContext, config.semanticContext);
                    // While we have context to pop back from, we may have
                    // gotten that context AFTER having fallen off a rule.
                    // Make sure we track that we are now out of context.
                    c.outerContextDepth = config.outerContextDepth;
                    c.isPrecedenceFilterSuppressed = config.isPrecedenceFilterSuppressed;
                    assert(depth > MIN_INTEGER_VALUE);
                    this.closureImpl(c, configs, intermediate, closureBusy, collectPredicates, hasMoreContexts, contextCache, depth - 1, treatEofAsEpsilon);
                }
                if (!hasEmpty || !hasMoreContexts) {
                    return;
                }
                config = config.transform(config.state, false, PredictionContext_1.PredictionContext.EMPTY_LOCAL);
            }
            else if (!hasMoreContexts) {
                configs.add(config, contextCache);
                return;
            }
            else {
                // else if we have no context info, just chase follow links (if greedy)
                if (ParserATNSimulator.debug) {
                    console.log("FALLING off rule " +
                        this.getRuleName(config.state.ruleIndex));
                }
                if (config.context === PredictionContext_1.PredictionContext.EMPTY_FULL) {
                    // no need to keep full context overhead when we step out
                    config = config.transform(config.state, false, PredictionContext_1.PredictionContext.EMPTY_LOCAL);
                }
                else if (!config.reachesIntoOuterContext && PredictionContext_1.PredictionContext.isEmptyLocal(config.context)) {
                    // add stop state when leaving decision rule for the first time
                    configs.add(config, contextCache);
                }
            }
        }
        let p = config.state;
        // optimization
        if (!p.onlyHasEpsilonTransitions) {
            configs.add(config, contextCache);
            // make sure to not return here, because EOF transitions can act as
            // both epsilon transitions and non-epsilon transitions.
            if (ParserATNSimulator.debug) {
                console.log("added config " + configs);
            }
        }
        for (let i = 0; i < p.numberOfOptimizedTransitions; i++) {
            // This block implements first-edge elimination of ambiguous LR
            // alternatives as part of dynamic disambiguation during prediction.
            // See antlr/antlr4#1398.
            if (i === 0
                && p.stateType === ATNStateType_1.ATNStateType.STAR_LOOP_ENTRY
                && p.precedenceRuleDecision
                && !config.context.hasEmpty) {
                let precedenceDecision = p;
                // When suppress is true, it means the outgoing edge i==0 is
                // ambiguous with the outgoing edge i==1, and thus the closure
                // operation can dynamically disambiguate by suppressing this
                // edge during the closure operation.
                let suppress = true;
                for (let j = 0; j < config.context.size; j++) {
                    if (!precedenceDecision.precedenceLoopbackStates.get(config.context.getReturnState(j))) {
                        suppress = false;
                        break;
                    }
                }
                if (suppress) {
                    continue;
                }
            }
            let t = p.getOptimizedTransition(i);
            let continueCollecting = !(t instanceof ActionTransition_1.ActionTransition) && collectPredicates;
            let c = this.getEpsilonTarget(config, t, continueCollecting, depth === 0, contextCache, treatEofAsEpsilon);
            if (c != null) {
                if (t instanceof RuleTransition_1.RuleTransition) {
                    if (intermediate != null && !collectPredicates) {
                        intermediate.add(c, contextCache);
                        continue;
                    }
                }
                let newDepth = depth;
                if (config.state instanceof RuleStopState_1.RuleStopState) {
                    // target fell off end of rule; mark resulting c as having dipped into outer context
                    // We can't get here if incoming config was rule stop and we had context
                    // track how far we dip into outer context.  Might
                    // come in handy and we avoid evaluating context dependent
                    // preds if this is > 0.
                    if (this.dfa != null && this.dfa.isPrecedenceDfa) {
                        let outermostPrecedenceReturn = t.outermostPrecedenceReturn;
                        if (outermostPrecedenceReturn === this.dfa.atnStartState.ruleIndex) {
                            c.isPrecedenceFilterSuppressed = true;
                        }
                    }
                    c.outerContextDepth = c.outerContextDepth + 1;
                    if (!closureBusy.add(c)) {
                        // avoid infinite recursion for right-recursive rules
                        continue;
                    }
                    assert(newDepth > MIN_INTEGER_VALUE);
                    newDepth--;
                    if (ParserATNSimulator.debug) {
                        console.log("dips into outer ctx: " + c);
                    }
                }
                else if (t instanceof RuleTransition_1.RuleTransition) {
                    if (this.optimize_tail_calls && t.optimizedTailCall && (!this.tail_call_preserves_sll || !PredictionContext_1.PredictionContext.isEmptyLocal(config.context))) {
                        assert(c.context === config.context);
                        if (newDepth === 0) {
                            // the pop/push of a tail call would keep the depth
                            // constant, except we latch if it goes negative
                            newDepth--;
                            if (!this.tail_call_preserves_sll && PredictionContext_1.PredictionContext.isEmptyLocal(config.context)) {
                                // make sure the SLL config "dips into the outer context" or prediction may not fall back to LL on conflict
                                c.outerContextDepth = c.outerContextDepth + 1;
                            }
                        }
                    }
                    else {
                        // latch when newDepth goes negative - once we step out of the entry context we can't return
                        if (newDepth >= 0) {
                            newDepth++;
                        }
                    }
                }
                else {
                    if (!t.isEpsilon && !closureBusy.add(c)) {
                        // avoid infinite recursion for EOF* and EOF+
                        continue;
                    }
                }
                this.closureImpl(c, configs, intermediate, closureBusy, continueCollecting, hasMoreContexts, contextCache, newDepth, treatEofAsEpsilon);
            }
        }
    }
    getRuleName(index) {
        if (this._parser != null && index >= 0) {
            return this._parser.ruleNames[index];
        }
        return "<rule " + index + ">";
    }
    getEpsilonTarget(config, t, collectPredicates, inContext, contextCache, treatEofAsEpsilon) {
        switch (t.serializationType) {
            case 3 /* RULE */:
                return this.ruleTransition(config, t, contextCache);
            case 10 /* PRECEDENCE */:
                return this.precedenceTransition(config, t, collectPredicates, inContext);
            case 4 /* PREDICATE */:
                return this.predTransition(config, t, collectPredicates, inContext);
            case 6 /* ACTION */:
                return this.actionTransition(config, t);
            case 1 /* EPSILON */:
                return config.transform(t.target, false);
            case 5 /* ATOM */:
            case 2 /* RANGE */:
            case 7 /* SET */:
                // EOF transitions act like epsilon transitions after the first EOF
                // transition is traversed
                if (treatEofAsEpsilon) {
                    if (t.matches(Token_1.Token.EOF, 0, 1)) {
                        return config.transform(t.target, false);
                    }
                }
                return undefined;
            default:
                return undefined;
        }
    }
    actionTransition(config, t) {
        if (ParserATNSimulator.debug) {
            console.log("ACTION edge " + t.ruleIndex + ":" + t.actionIndex);
        }
        return config.transform(t.target, false);
    }
    precedenceTransition(config, pt, collectPredicates, inContext) {
        if (ParserATNSimulator.debug) {
            console.log("PRED (collectPredicates=" + collectPredicates + ") " +
                pt.precedence + ">=_p" +
                ", ctx dependent=true");
            if (this._parser != null) {
                console.log("context surrounding pred is " +
                    this._parser.getRuleInvocationStack());
            }
        }
        let c;
        if (collectPredicates && inContext) {
            let newSemCtx = SemanticContext_1.SemanticContext.and(config.semanticContext, pt.predicate);
            c = config.transform(pt.target, false, newSemCtx);
        }
        else {
            c = config.transform(pt.target, false);
        }
        if (ParserATNSimulator.debug) {
            console.log("config from pred transition=" + c);
        }
        return c;
    }
    predTransition(config, pt, collectPredicates, inContext) {
        if (ParserATNSimulator.debug) {
            console.log("PRED (collectPredicates=" + collectPredicates + ") " +
                pt.ruleIndex + ":" + pt.predIndex +
                ", ctx dependent=" + pt.isCtxDependent);
            if (this._parser != null) {
                console.log("context surrounding pred is " +
                    this._parser.getRuleInvocationStack());
            }
        }
        let c;
        if (collectPredicates &&
            (!pt.isCtxDependent || (pt.isCtxDependent && inContext))) {
            let newSemCtx = SemanticContext_1.SemanticContext.and(config.semanticContext, pt.predicate);
            c = config.transform(pt.target, false, newSemCtx);
        }
        else {
            c = config.transform(pt.target, false);
        }
        if (ParserATNSimulator.debug) {
            console.log("config from pred transition=" + c);
        }
        return c;
    }
    ruleTransition(config, t, contextCache) {
        if (ParserATNSimulator.debug) {
            console.log("CALL rule " + this.getRuleName(t.target.ruleIndex) +
                ", ctx=" + config.context);
        }
        let returnState = t.followState;
        let newContext;
        if (this.optimize_tail_calls && t.optimizedTailCall && (!this.tail_call_preserves_sll || !PredictionContext_1.PredictionContext.isEmptyLocal(config.context))) {
            newContext = config.context;
        }
        else if (contextCache != null) {
            newContext = contextCache.getChild(config.context, returnState.stateNumber);
        }
        else {
            newContext = config.context.getChild(returnState.stateNumber);
        }
        return config.transform(t.target, false, newContext);
    }
    isConflicted(configset, contextCache) {
        if (configset.uniqueAlt !== ATN_1.ATN.INVALID_ALT_NUMBER || configset.size <= 1) {
            return undefined;
        }
        let configs = configset.toArray();
        configs.sort(ParserATNSimulator.STATE_ALT_SORT_COMPARATOR);
        let exact = !configset.dipsIntoOuterContext;
        let alts = new BitSet_1.BitSet();
        let minAlt = configs[0].alt;
        alts.set(minAlt);
        /* Quick checks come first (single pass, no context joining):
         *  1. Make sure first config in the sorted list predicts the minimum
         *     represented alternative.
         *  2. Make sure every represented state has at least one configuration
         *     which predicts the minimum represented alternative.
         *  3. (exact only) make sure every represented state has at least one
         *     configuration which predicts each represented alternative.
         */
        // quick check 1 & 2 => if we assume #1 holds and check #2 against the
        // minAlt from the first state, #2 will fail if the assumption was
        // incorrect
        let currentState = configs[0].state.nonStopStateNumber;
        for (let config of configs) {
            let stateNumber = config.state.nonStopStateNumber;
            if (stateNumber !== currentState) {
                if (config.alt !== minAlt) {
                    return undefined;
                }
                currentState = stateNumber;
            }
        }
        let representedAlts;
        if (exact) {
            currentState = configs[0].state.nonStopStateNumber;
            // get the represented alternatives of the first state
            representedAlts = new BitSet_1.BitSet();
            let maxAlt = minAlt;
            for (let config of configs) {
                if (config.state.nonStopStateNumber !== currentState) {
                    break;
                }
                let alt = config.alt;
                representedAlts.set(alt);
                maxAlt = alt;
            }
            // quick check #3:
            currentState = configs[0].state.nonStopStateNumber;
            let currentAlt = minAlt;
            for (let config of configs) {
                let stateNumber = config.state.nonStopStateNumber;
                let alt = config.alt;
                if (stateNumber !== currentState) {
                    if (currentAlt !== maxAlt) {
                        exact = false;
                        break;
                    }
                    currentState = stateNumber;
                    currentAlt = minAlt;
                }
                else if (alt !== currentAlt) {
                    if (alt !== representedAlts.nextSetBit(currentAlt + 1)) {
                        exact = false;
                        break;
                    }
                    currentAlt = alt;
                }
            }
        }
        currentState = configs[0].state.nonStopStateNumber;
        let firstIndexCurrentState = 0;
        let lastIndexCurrentStateMinAlt = 0;
        let joinedCheckContext = configs[0].context;
        for (let i = 1; i < configs.length; i++) {
            let config = configs[i];
            if (config.alt !== minAlt) {
                break;
            }
            if (config.state.nonStopStateNumber !== currentState) {
                break;
            }
            lastIndexCurrentStateMinAlt = i;
            joinedCheckContext = contextCache.join(joinedCheckContext, configs[i].context);
        }
        for (let i = lastIndexCurrentStateMinAlt + 1; i < configs.length; i++) {
            let config = configs[i];
            let state = config.state;
            alts.set(config.alt);
            if (state.nonStopStateNumber !== currentState) {
                currentState = state.nonStopStateNumber;
                firstIndexCurrentState = i;
                lastIndexCurrentStateMinAlt = i;
                joinedCheckContext = config.context;
                for (let j = firstIndexCurrentState + 1; j < configs.length; j++) {
                    let config2 = configs[j];
                    if (config2.alt !== minAlt) {
                        break;
                    }
                    if (config2.state.nonStopStateNumber !== currentState) {
                        break;
                    }
                    lastIndexCurrentStateMinAlt = j;
                    joinedCheckContext = contextCache.join(joinedCheckContext, config2.context);
                }
                i = lastIndexCurrentStateMinAlt;
                continue;
            }
            let joinedCheckContext2 = config.context;
            let currentAlt = config.alt;
            let lastIndexCurrentStateCurrentAlt = i;
            for (let j = lastIndexCurrentStateCurrentAlt + 1; j < configs.length; j++) {
                let config2 = configs[j];
                if (config2.alt !== currentAlt) {
                    break;
                }
                if (config2.state.nonStopStateNumber !== currentState) {
                    break;
                }
                lastIndexCurrentStateCurrentAlt = j;
                joinedCheckContext2 = contextCache.join(joinedCheckContext2, config2.context);
            }
            i = lastIndexCurrentStateCurrentAlt;
            let check = contextCache.join(joinedCheckContext, joinedCheckContext2);
            if (!joinedCheckContext.equals(check)) {
                return undefined;
            }
            // update exact if necessary
            exact = exact && joinedCheckContext.equals(joinedCheckContext2);
        }
        return new ConflictInfo_1.ConflictInfo(alts, exact);
    }
    getConflictingAltsFromConfigSet(configs) {
        let conflictingAlts = configs.conflictingAlts;
        if (conflictingAlts == null && configs.uniqueAlt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
            conflictingAlts = new BitSet_1.BitSet();
            conflictingAlts.set(configs.uniqueAlt);
        }
        return conflictingAlts;
    }
    getTokenName(t) {
        if (t === Token_1.Token.EOF) {
            return "EOF";
        }
        let vocabulary = this._parser != null ? this._parser.vocabulary : VocabularyImpl_1.VocabularyImpl.EMPTY_VOCABULARY;
        let displayName = vocabulary.getDisplayName(t);
        if (displayName === String(t)) {
            return displayName;
        }
        return displayName + "<" + t + ">";
    }
    getLookaheadName(input) {
        return this.getTokenName(input.LA(1));
    }
    dumpDeadEndConfigs(nvae) {
        console.log("dead end configs: ");
        let deadEndConfigs = nvae.deadEndConfigs;
        if (!deadEndConfigs) {
            return;
        }
        for (let c of deadEndConfigs) {
            let trans = "no edges";
            if (c.state.numberOfOptimizedTransitions > 0) {
                let t = c.state.getOptimizedTransition(0);
                if (t instanceof AtomTransition_1.AtomTransition) {
                    trans = "Atom " + this.getTokenName(t._label);
                }
                else if (t instanceof SetTransition_1.SetTransition) {
                    let not = t instanceof NotSetTransition_1.NotSetTransition;
                    trans = (not ? "~" : "") + "Set " + t.set.toString();
                }
            }
            console.log(c.toString(this._parser, true) + ":" + trans);
        }
    }
    noViableAlt(input, outerContext, configs, startIndex) {
        return new NoViableAltException_1.NoViableAltException(this._parser, input, input.get(startIndex), input.LT(1), configs, outerContext);
    }
    getUniqueAlt(configs) {
        let alt = ATN_1.ATN.INVALID_ALT_NUMBER;
        for (let c of configs) {
            if (alt === ATN_1.ATN.INVALID_ALT_NUMBER) {
                alt = c.alt; // found first alt
            }
            else if (c.alt !== alt) {
                return ATN_1.ATN.INVALID_ALT_NUMBER;
            }
        }
        return alt;
    }
    configWithAltAtStopState(configs, alt) {
        for (let c of configs) {
            if (c.alt === alt) {
                if (c.state instanceof RuleStopState_1.RuleStopState) {
                    return true;
                }
            }
        }
        return false;
    }
    addDFAEdge(dfa, fromState, t, contextTransitions, toConfigs, contextCache) {
        assert(contextTransitions == null || contextTransitions.isEmpty || dfa.isContextSensitive);
        let from = fromState;
        let to = this.addDFAState(dfa, toConfigs, contextCache);
        if (contextTransitions != null) {
            for (let context of contextTransitions.toArray()) {
                if (context === PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY) {
                    if (from.configs.isOutermostConfigSet) {
                        continue;
                    }
                }
                from.setContextSensitive(this.atn);
                from.setContextSymbol(t);
                let next = from.getContextTarget(context);
                if (next != null) {
                    from = next;
                    continue;
                }
                next = this.addDFAContextState(dfa, from.configs, context, contextCache);
                assert(context !== PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY || next.configs.isOutermostConfigSet);
                from.setContextTarget(context, next);
                from = next;
            }
        }
        if (ParserATNSimulator.debug) {
            console.log("EDGE " + from + " -> " + to + " upon " + this.getTokenName(t));
        }
        this.setDFAEdge(from, t, to);
        if (ParserATNSimulator.debug) {
            console.log("DFA=\n" + dfa.toString(this._parser != null ? this._parser.vocabulary : VocabularyImpl_1.VocabularyImpl.EMPTY_VOCABULARY, this._parser != null ? this._parser.ruleNames : undefined));
        }
        return to;
    }
    setDFAEdge(p, t, q) {
        if (p != null) {
            p.setTarget(t, q);
        }
    }
    /** See comment on LexerInterpreter.addDFAState. */
    addDFAContextState(dfa, configs, returnContext, contextCache) {
        if (returnContext !== PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY) {
            let contextConfigs = new ATNConfigSet_1.ATNConfigSet();
            for (let config of configs) {
                contextConfigs.add(config.appendContext(returnContext, contextCache));
            }
            return this.addDFAState(dfa, contextConfigs, contextCache);
        }
        else {
            assert(!configs.isOutermostConfigSet, "Shouldn't be adding a duplicate edge.");
            configs = configs.clone(true);
            configs.isOutermostConfigSet = true;
            return this.addDFAState(dfa, configs, contextCache);
        }
    }
    /** See comment on LexerInterpreter.addDFAState. */
    addDFAState(dfa, configs, contextCache) {
        let enableDfa = this.enable_global_context_dfa || !configs.isOutermostConfigSet;
        if (enableDfa) {
            if (!configs.isReadOnly) {
                configs.optimizeConfigs(this);
            }
            let proposed = this.createDFAState(dfa, configs);
            let existing = dfa.states.get(proposed);
            if (existing != null) {
                return existing;
            }
        }
        if (!configs.isReadOnly) {
            if (configs.conflictInfo == null) {
                configs.conflictInfo = this.isConflicted(configs, contextCache);
            }
        }
        let newState = this.createDFAState(dfa, configs.clone(true));
        // getDecisionState won't return undefined when we request a known valid decision
        let decisionState = this.atn.getDecisionState(dfa.decision);
        let predictedAlt = this.getUniqueAlt(configs);
        if (predictedAlt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
            newState.acceptStateInfo = new AcceptStateInfo_1.AcceptStateInfo(predictedAlt);
        }
        else if (configs.conflictingAlts != null) {
            let conflictingAlts = configs.conflictingAlts;
            if (conflictingAlts) {
                newState.acceptStateInfo = new AcceptStateInfo_1.AcceptStateInfo(conflictingAlts.nextSetBit(0));
            }
        }
        if (newState.isAcceptState && configs.hasSemanticContext) {
            this.predicateDFAState(newState, configs, decisionState.numberOfTransitions);
        }
        if (!enableDfa) {
            return newState;
        }
        let added = dfa.addState(newState);
        if (ParserATNSimulator.debug && added === newState) {
            console.log("adding new DFA state: " + newState);
        }
        return added;
    }
    createDFAState(dfa, configs) {
        return new DFAState_1.DFAState(configs);
    }
    reportAttemptingFullContext(dfa, conflictingAlts, conflictState, startIndex, stopIndex) {
        if (ParserATNSimulator.debug || ParserATNSimulator.retry_debug) {
            let interval = Interval_1.Interval.of(startIndex, stopIndex);
            console.log("reportAttemptingFullContext decision=" + dfa.decision + ":" + conflictState.s0.configs +
                ", input=" + this._parser.inputStream.getText(interval));
        }
        if (this._parser != null) {
            let listener = this._parser.getErrorListenerDispatch();
            if (listener.reportAttemptingFullContext) {
                listener.reportAttemptingFullContext(this._parser, dfa, startIndex, stopIndex, conflictingAlts, conflictState);
            }
        }
    }
    reportContextSensitivity(dfa, prediction, acceptState, startIndex, stopIndex) {
        if (ParserATNSimulator.debug || ParserATNSimulator.retry_debug) {
            let interval = Interval_1.Interval.of(startIndex, stopIndex);
            console.log("reportContextSensitivity decision=" + dfa.decision + ":" + acceptState.s0.configs +
                ", input=" + this._parser.inputStream.getText(interval));
        }
        if (this._parser != null) {
            let listener = this._parser.getErrorListenerDispatch();
            if (listener.reportContextSensitivity) {
                listener.reportContextSensitivity(this._parser, dfa, startIndex, stopIndex, prediction, acceptState);
            }
        }
    }
    /** If context sensitive parsing, we know it's ambiguity not conflict */
    reportAmbiguity(dfa, D, // the DFA state from execATN(): void that had SLL conflicts
    startIndex, stopIndex, exact, ambigAlts, configs) {
        if (ParserATNSimulator.debug || ParserATNSimulator.retry_debug) {
            let interval = Interval_1.Interval.of(startIndex, stopIndex);
            console.log("reportAmbiguity " +
                ambigAlts + ":" + configs +
                ", input=" + this._parser.inputStream.getText(interval));
        }
        if (this._parser != null) {
            let listener = this._parser.getErrorListenerDispatch();
            if (listener.reportAmbiguity) {
                listener.reportAmbiguity(this._parser, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
            }
        }
    }
    getReturnState(context) {
        if (context.isEmpty) {
            return PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY;
        }
        let state = this.atn.states[context.invokingState];
        let transition = state.transition(0);
        return transition.followState.stateNumber;
    }
    skipTailCalls(context) {
        if (!this.optimize_tail_calls) {
            return context;
        }
        while (!context.isEmpty) {
            let state = this.atn.states[context.invokingState];
            assert(state.numberOfTransitions === 1 && state.transition(0).serializationType === 3 /* RULE */);
            let transition = state.transition(0);
            if (!transition.tailCall) {
                break;
            }
            // This method requires that the root ancestor of the ParserRuleContext be empty. If we make it to this
            // line, we know the current node is not empty, which means it does have a parent.
            context = context.parent;
        }
        return context;
    }
    /**
     * @since 4.3
     */
    get parser() {
        return this._parser;
    }
};
ParserATNSimulator.debug = false;
ParserATNSimulator.dfa_debug = false;
ParserATNSimulator.retry_debug = false;
ParserATNSimulator.STATE_ALT_SORT_COMPARATOR = (o1, o2) => {
    let diff = o1.state.nonStopStateNumber - o2.state.nonStopStateNumber;
    if (diff !== 0) {
        return diff;
    }
    diff = o1.alt - o2.alt;
    if (diff !== 0) {
        return diff;
    }
    return 0;
};
__decorate([
    Decorators.NotNull
], ParserATNSimulator.prototype, "predictionMode", void 0);
__decorate([
    Decorators.NotNull
], ParserATNSimulator.prototype, "getPredictionMode", null);
__decorate([
    __param(0, Decorators.NotNull)
], ParserATNSimulator.prototype, "setPredictionMode", null);
__decorate([
    Decorators.Override
], ParserATNSimulator.prototype, "reset", null);
__decorate([
    __param(0, Decorators.NotNull)
], ParserATNSimulator.prototype, "adaptivePredict", null);
__decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(2, Decorators.NotNull)
], ParserATNSimulator.prototype, "getStartState", null);
__decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(3, Decorators.NotNull)
], ParserATNSimulator.prototype, "execDFA", null);
__decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(3, Decorators.NotNull)
], ParserATNSimulator.prototype, "execATN", null);
__decorate([
    __param(0, Decorators.NotNull), __param(2, Decorators.NotNull)
], ParserATNSimulator.prototype, "handleNoViableAlt", null);
__decorate([
    __param(0, Decorators.NotNull)
], ParserATNSimulator.prototype, "getExistingTargetState", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull), __param(1, Decorators.NotNull)
], ParserATNSimulator.prototype, "computeTargetState", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
], ParserATNSimulator.prototype, "removeAllConfigsNotInRuleStopState", null);
__decorate([
    Decorators.NotNull
], ParserATNSimulator.prototype, "computeStartState", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
], ParserATNSimulator.prototype, "applyPrecedenceFilter", null);
__decorate([
    __param(0, Decorators.NotNull), __param(1, Decorators.NotNull)
], ParserATNSimulator.prototype, "getReachableTarget", null);
__decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
], ParserATNSimulator.prototype, "getPredsForAmbigAlts", null);
__decorate([
    __param(0, Decorators.NotNull)
], ParserATNSimulator.prototype, "evalSemanticContext", null);
__decorate([
    __param(0, Decorators.NotNull)
], ParserATNSimulator.prototype, "evalSemanticContextImpl", null);
__decorate([
    __param(1, Decorators.NotNull),
    __param(4, Decorators.Nullable)
], ParserATNSimulator.prototype, "closure", null);
__decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(2, Decorators.Nullable),
    __param(3, Decorators.NotNull),
    __param(6, Decorators.NotNull)
], ParserATNSimulator.prototype, "closureImpl", null);
__decorate([
    Decorators.NotNull
], ParserATNSimulator.prototype, "getRuleName", null);
__decorate([
    __param(0, Decorators.NotNull), __param(1, Decorators.NotNull)
], ParserATNSimulator.prototype, "getEpsilonTarget", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull), __param(1, Decorators.NotNull)
], ParserATNSimulator.prototype, "actionTransition", null);
__decorate([
    Decorators.Nullable,
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
], ParserATNSimulator.prototype, "precedenceTransition", null);
__decorate([
    Decorators.Nullable,
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
], ParserATNSimulator.prototype, "predTransition", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull), __param(1, Decorators.NotNull), __param(2, Decorators.Nullable)
], ParserATNSimulator.prototype, "ruleTransition", null);
__decorate([
    __param(0, Decorators.NotNull)
], ParserATNSimulator.prototype, "isConflicted", null);
__decorate([
    Decorators.NotNull
], ParserATNSimulator.prototype, "getTokenName", null);
__decorate([
    __param(0, Decorators.NotNull)
], ParserATNSimulator.prototype, "dumpDeadEndConfigs", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(2, Decorators.NotNull)
], ParserATNSimulator.prototype, "noViableAlt", null);
__decorate([
    __param(0, Decorators.NotNull)
], ParserATNSimulator.prototype, "getUniqueAlt", null);
__decorate([
    __param(0, Decorators.NotNull)
], ParserATNSimulator.prototype, "configWithAltAtStopState", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(4, Decorators.NotNull)
], ParserATNSimulator.prototype, "addDFAEdge", null);
__decorate([
    __param(0, Decorators.Nullable), __param(2, Decorators.Nullable)
], ParserATNSimulator.prototype, "setDFAEdge", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull), __param(1, Decorators.NotNull)
], ParserATNSimulator.prototype, "addDFAContextState", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull), __param(1, Decorators.NotNull)
], ParserATNSimulator.prototype, "addDFAState", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull), __param(1, Decorators.NotNull)
], ParserATNSimulator.prototype, "createDFAState", null);
__decorate([
    __param(0, Decorators.NotNull), __param(2, Decorators.NotNull)
], ParserATNSimulator.prototype, "reportAttemptingFullContext", null);
__decorate([
    __param(0, Decorators.NotNull), __param(2, Decorators.NotNull)
], ParserATNSimulator.prototype, "reportContextSensitivity", null);
__decorate([
    __param(0, Decorators.NotNull),
    __param(5, Decorators.NotNull),
    __param(6, Decorators.NotNull)
], ParserATNSimulator.prototype, "reportAmbiguity", null);
ParserATNSimulator = __decorate([
    __param(0, Decorators.NotNull)
], ParserATNSimulator);
exports.ParserATNSimulator = ParserATNSimulator;

});

var PlusBlockStartState_1 = createCommonjsModule(function (module, exports) {
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
exports.PlusBlockStartState = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:34.9572142-07:00



/** Start of `(A|B|...)+` loop. Technically a decision state, but
 *  we don't use for code generation; somebody might need it, so I'm defining
 *  it for completeness. In reality, the {@link PlusLoopbackState} node is the
 *  real decision-making note for `A+`.
 */
class PlusBlockStartState extends BlockStartState_1.BlockStartState {
    get stateType() {
        return ATNStateType_1.ATNStateType.PLUS_BLOCK_START;
    }
}
__decorate([
    Decorators.Override
], PlusBlockStartState.prototype, "stateType", null);
exports.PlusBlockStartState = PlusBlockStartState;

});

var PlusLoopbackState_1 = createCommonjsModule(function (module, exports) {
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
exports.PlusLoopbackState = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:35.0257730-07:00



/** Decision state for `A+` and `(A|B)+`.  It has two transitions:
 *  one to the loop back to start of the block and one to exit.
 */
class PlusLoopbackState extends DecisionState_1.DecisionState {
    get stateType() {
        return ATNStateType_1.ATNStateType.PLUS_LOOP_BACK;
    }
}
__decorate([
    Decorators.Override
], PlusLoopbackState.prototype, "stateType", null);
exports.PlusLoopbackState = PlusLoopbackState;

});

var PrecedencePredicateTransition_1 = createCommonjsModule(function (module, exports) {
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
exports.PrecedencePredicateTransition = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:35.0994191-07:00



/**
 *
 * @author Sam Harwell
 */
let PrecedencePredicateTransition = class PrecedencePredicateTransition extends AbstractPredicateTransition_1.AbstractPredicateTransition {
    constructor(target, precedence) {
        super(target);
        this.precedence = precedence;
    }
    get serializationType() {
        return 10 /* PRECEDENCE */;
    }
    get isEpsilon() {
        return true;
    }
    matches(symbol, minVocabSymbol, maxVocabSymbol) {
        return false;
    }
    get predicate() {
        return new SemanticContext_1.SemanticContext.PrecedencePredicate(this.precedence);
    }
    toString() {
        return this.precedence + " >= _p";
    }
};
__decorate([
    Decorators.Override
], PrecedencePredicateTransition.prototype, "serializationType", null);
__decorate([
    Decorators.Override
], PrecedencePredicateTransition.prototype, "isEpsilon", null);
__decorate([
    Decorators.Override
], PrecedencePredicateTransition.prototype, "matches", null);
__decorate([
    Decorators.Override
], PrecedencePredicateTransition.prototype, "toString", null);
PrecedencePredicateTransition = __decorate([
    __param(0, Decorators.NotNull)
], PrecedencePredicateTransition);
exports.PrecedencePredicateTransition = PrecedencePredicateTransition;

});

var RangeTransition_1 = createCommonjsModule(function (module, exports) {
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
exports.RangeTransition = void 0;



let RangeTransition = class RangeTransition extends Transition_1.Transition {
    constructor(target, from, to) {
        super(target);
        this.from = from;
        this.to = to;
    }
    get serializationType() {
        return 2 /* RANGE */;
    }
    get label() {
        return IntervalSet_1.IntervalSet.of(this.from, this.to);
    }
    matches(symbol, minVocabSymbol, maxVocabSymbol) {
        return symbol >= this.from && symbol <= this.to;
    }
    toString() {
        return "'" + String.fromCodePoint(this.from) + "'..'" + String.fromCodePoint(this.to) + "'";
    }
};
__decorate([
    Decorators.Override
], RangeTransition.prototype, "serializationType", null);
__decorate([
    Decorators.Override,
    Decorators.NotNull
], RangeTransition.prototype, "label", null);
__decorate([
    Decorators.Override
], RangeTransition.prototype, "matches", null);
__decorate([
    Decorators.Override,
    Decorators.NotNull
], RangeTransition.prototype, "toString", null);
RangeTransition = __decorate([
    __param(0, Decorators.NotNull)
], RangeTransition);
exports.RangeTransition = RangeTransition;

});

var RuleStartState_1 = createCommonjsModule(function (module, exports) {
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
exports.RuleStartState = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:36.6806851-07:00



class RuleStartState extends ATNState_1.ATNState {
    constructor() {
        super(...arguments);
        this.isPrecedenceRule = false;
        this.leftFactored = false;
    }
    get stateType() {
        return ATNStateType_1.ATNStateType.RULE_START;
    }
}
__decorate([
    Decorators.Override
], RuleStartState.prototype, "stateType", null);
exports.RuleStartState = RuleStartState;

});

var StarBlockStartState_1 = createCommonjsModule(function (module, exports) {
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
exports.StarBlockStartState = void 0;



/** The block that begins a closure loop. */
class StarBlockStartState extends BlockStartState_1.BlockStartState {
    get stateType() {
        return ATNStateType_1.ATNStateType.STAR_BLOCK_START;
    }
}
__decorate([
    Decorators.Override
], StarBlockStartState.prototype, "stateType", null);
exports.StarBlockStartState = StarBlockStartState;

});

var StarLoopbackState_1 = createCommonjsModule(function (module, exports) {
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
exports.StarLoopbackState = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:37.6368726-07:00



class StarLoopbackState extends ATNState_1.ATNState {
    get loopEntryState() {
        return this.transition(0).target;
    }
    get stateType() {
        return ATNStateType_1.ATNStateType.STAR_LOOP_BACK;
    }
}
__decorate([
    Decorators.Override
], StarLoopbackState.prototype, "stateType", null);
exports.StarLoopbackState = StarLoopbackState;

});

var TokensStartState_1 = createCommonjsModule(function (module, exports) {
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
exports.TokensStartState = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:37.7814046-07:00



/** The Tokens rule start state linking to each lexer rule start state */
class TokensStartState extends DecisionState_1.DecisionState {
    get stateType() {
        return ATNStateType_1.ATNStateType.TOKEN_START;
    }
}
__decorate([
    Decorators.Override
], TokensStartState.prototype, "stateType", null);
exports.TokensStartState = TokensStartState;

});

var UUID_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUID = void 0;

class UUID {
    constructor(mostSigBits, moreSigBits, lessSigBits, leastSigBits) {
        this.data = new Uint32Array(4);
        this.data[0] = mostSigBits;
        this.data[1] = moreSigBits;
        this.data[2] = lessSigBits;
        this.data[3] = leastSigBits;
    }
    static fromString(data) {
        if (!/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/.test(data)) {
            throw new Error("Incorrectly formatted UUID");
        }
        let segments = data.split("-");
        let mostSigBits = parseInt(segments[0], 16);
        let moreSigBits = ((parseInt(segments[1], 16) << 16) >>> 0) + parseInt(segments[2], 16);
        let lessSigBits = ((parseInt(segments[3], 16) << 16) >>> 0) + parseInt(segments[4].substr(0, 4), 16);
        let leastSigBits = parseInt(segments[4].substr(-8), 16);
        return new UUID(mostSigBits, moreSigBits, lessSigBits, leastSigBits);
    }
    hashCode() {
        return MurmurHash_1.MurmurHash.hashCode([this.data[0], this.data[1], this.data[2], this.data[3]]);
    }
    equals(obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof UUID)) {
            return false;
        }
        return this.data[0] === obj.data[0]
            && this.data[1] === obj.data[1]
            && this.data[2] === obj.data[2]
            && this.data[3] === obj.data[3];
    }
    toString() {
        return ("00000000" + this.data[0].toString(16)).substr(-8)
            + "-" + ("0000" + (this.data[1] >>> 16).toString(16)).substr(-4)
            + "-" + ("0000" + this.data[1].toString(16)).substr(-4)
            + "-" + ("0000" + (this.data[2] >>> 16).toString(16)).substr(-4)
            + "-" + ("0000" + this.data[2].toString(16)).substr(-4)
            + ("00000000" + this.data[3].toString(16)).substr(-8);
    }
}
exports.UUID = UUID;

});

var ATNDeserializer_1 = createCommonjsModule(function (module, exports) {
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
exports.ATNDeserializer = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:25.9683447-07:00












































var UnicodeDeserializingMode;
(function (UnicodeDeserializingMode) {
    UnicodeDeserializingMode[UnicodeDeserializingMode["UNICODE_BMP"] = 0] = "UNICODE_BMP";
    UnicodeDeserializingMode[UnicodeDeserializingMode["UNICODE_SMP"] = 1] = "UNICODE_SMP";
})(UnicodeDeserializingMode || (UnicodeDeserializingMode = {}));
/**
 *
 * @author Sam Harwell
 */
class ATNDeserializer {
    constructor(deserializationOptions) {
        if (deserializationOptions === undefined) {
            deserializationOptions = ATNDeserializationOptions_1.ATNDeserializationOptions.defaultOptions;
        }
        this.deserializationOptions = deserializationOptions;
    }
    static get SERIALIZED_VERSION() {
        /* This value should never change. Updates following this version are
         * reflected as change in the unique ID SERIALIZED_UUID.
         */
        return 3;
    }
    /**
     * Determines if a particular serialized representation of an ATN supports
     * a particular feature, identified by the {@link UUID} used for serializing
     * the ATN at the time the feature was first introduced.
     *
     * @param feature The {@link UUID} marking the first time the feature was
     * supported in the serialized ATN.
     * @param actualUuid The {@link UUID} of the actual serialized ATN which is
     * currently being deserialized.
     * @returns `true` if the `actualUuid` value represents a
     * serialized ATN at or after the feature identified by `feature` was
     * introduced; otherwise, `false`.
     */
    static isFeatureSupported(feature, actualUuid) {
        let featureIndex = ATNDeserializer.SUPPORTED_UUIDS.findIndex((e) => e.equals(feature));
        if (featureIndex < 0) {
            return false;
        }
        return ATNDeserializer.SUPPORTED_UUIDS.findIndex((e) => e.equals(actualUuid)) >= featureIndex;
    }
    static getUnicodeDeserializer(mode) {
        if (mode === 0 /* UNICODE_BMP */) {
            return {
                readUnicode: (data, p) => {
                    return ATNDeserializer.toInt(data[p]);
                },
                size: 1,
            };
        }
        else {
            return {
                readUnicode: (data, p) => {
                    return ATNDeserializer.toInt32(data, p);
                },
                size: 2,
            };
        }
    }
    deserialize(data) {
        data = data.slice(0);
        // Each Uint16 value in data is shifted by +2 at the entry to this method. This is an encoding optimization
        // targeting the serialized values 0 and -1 (serialized to 0xFFFF), each of which are very common in the
        // serialized form of the ATN. In the modified UTF-8 that Java uses for compiled string literals, these two
        // character values have multi-byte forms. By shifting each value by +2, they become characters 2 and 1 prior to
        // writing the string, each of which have single-byte representations. Since the shift occurs in the tool during
        // ATN serialization, each target is responsible for adjusting the values during deserialization.
        //
        // As a special case, note that the first element of data is not adjusted because it contains the major version
        // number of the serialized ATN, which was fixed at 3 at the time the value shifting was implemented.
        for (let i = 1; i < data.length; i++) {
            data[i] = (data[i] - 2) & 0xFFFF;
        }
        let p = 0;
        let version = ATNDeserializer.toInt(data[p++]);
        if (version !== ATNDeserializer.SERIALIZED_VERSION) {
            let reason = `Could not deserialize ATN with version ${version} (expected ${ATNDeserializer.SERIALIZED_VERSION}).`;
            throw new Error(reason);
        }
        let uuid = ATNDeserializer.toUUID(data, p);
        p += 8;
        if (ATNDeserializer.SUPPORTED_UUIDS.findIndex((e) => e.equals(uuid)) < 0) {
            let reason = `Could not deserialize ATN with UUID ${uuid} (expected ${ATNDeserializer.SERIALIZED_UUID} or a legacy UUID).`;
            throw new Error(reason);
        }
        let supportsLexerActions = ATNDeserializer.isFeatureSupported(ATNDeserializer.ADDED_LEXER_ACTIONS, uuid);
        let grammarType = ATNDeserializer.toInt(data[p++]);
        let maxTokenType = ATNDeserializer.toInt(data[p++]);
        let atn = new ATN_1.ATN(grammarType, maxTokenType);
        //
        // STATES
        //
        let loopBackStateNumbers = [];
        let endStateNumbers = [];
        let nstates = ATNDeserializer.toInt(data[p++]);
        for (let i = 0; i < nstates; i++) {
            let stype = ATNDeserializer.toInt(data[p++]);
            // ignore bad type of states
            if (stype === ATNStateType_1.ATNStateType.INVALID_TYPE) {
                atn.addState(new InvalidState_1.InvalidState());
                continue;
            }
            let ruleIndex = ATNDeserializer.toInt(data[p++]);
            if (ruleIndex === 0xFFFF) {
                ruleIndex = -1;
            }
            let s = this.stateFactory(stype, ruleIndex);
            if (stype === ATNStateType_1.ATNStateType.LOOP_END) { // special case
                let loopBackStateNumber = ATNDeserializer.toInt(data[p++]);
                loopBackStateNumbers.push([s, loopBackStateNumber]);
            }
            else if (s instanceof BlockStartState_1.BlockStartState) {
                let endStateNumber = ATNDeserializer.toInt(data[p++]);
                endStateNumbers.push([s, endStateNumber]);
            }
            atn.addState(s);
        }
        // delay the assignment of loop back and end states until we know all the state instances have been initialized
        for (let pair of loopBackStateNumbers) {
            pair[0].loopBackState = atn.states[pair[1]];
        }
        for (let pair of endStateNumbers) {
            pair[0].endState = atn.states[pair[1]];
        }
        let numNonGreedyStates = ATNDeserializer.toInt(data[p++]);
        for (let i = 0; i < numNonGreedyStates; i++) {
            let stateNumber = ATNDeserializer.toInt(data[p++]);
            atn.states[stateNumber].nonGreedy = true;
        }
        let numSllDecisions = ATNDeserializer.toInt(data[p++]);
        for (let i = 0; i < numSllDecisions; i++) {
            let stateNumber = ATNDeserializer.toInt(data[p++]);
            atn.states[stateNumber].sll = true;
        }
        let numPrecedenceStates = ATNDeserializer.toInt(data[p++]);
        for (let i = 0; i < numPrecedenceStates; i++) {
            let stateNumber = ATNDeserializer.toInt(data[p++]);
            atn.states[stateNumber].isPrecedenceRule = true;
        }
        //
        // RULES
        //
        let nrules = ATNDeserializer.toInt(data[p++]);
        if (atn.grammarType === 0 /* LEXER */) {
            atn.ruleToTokenType = new Int32Array(nrules);
        }
        atn.ruleToStartState = new Array(nrules);
        for (let i = 0; i < nrules; i++) {
            let s = ATNDeserializer.toInt(data[p++]);
            let startState = atn.states[s];
            startState.leftFactored = ATNDeserializer.toInt(data[p++]) !== 0;
            atn.ruleToStartState[i] = startState;
            if (atn.grammarType === 0 /* LEXER */) {
                let tokenType = ATNDeserializer.toInt(data[p++]);
                if (tokenType === 0xFFFF) {
                    tokenType = Token_1.Token.EOF;
                }
                atn.ruleToTokenType[i] = tokenType;
                if (!ATNDeserializer.isFeatureSupported(ATNDeserializer.ADDED_LEXER_ACTIONS, uuid)) {
                    // this piece of unused metadata was serialized prior to the
                    // addition of LexerAction
                    let actionIndexIgnored = ATNDeserializer.toInt(data[p++]);
                    if (actionIndexIgnored === 0xFFFF) {
                        actionIndexIgnored = -1;
                    }
                }
            }
        }
        atn.ruleToStopState = new Array(nrules);
        for (let state of atn.states) {
            if (!(state instanceof RuleStopState_1.RuleStopState)) {
                continue;
            }
            atn.ruleToStopState[state.ruleIndex] = state;
            atn.ruleToStartState[state.ruleIndex].stopState = state;
        }
        //
        // MODES
        //
        let nmodes = ATNDeserializer.toInt(data[p++]);
        for (let i = 0; i < nmodes; i++) {
            let s = ATNDeserializer.toInt(data[p++]);
            atn.modeToStartState.push(atn.states[s]);
        }
        atn.modeToDFA = new Array(nmodes);
        for (let i = 0; i < nmodes; i++) {
            atn.modeToDFA[i] = new DFA_1.DFA(atn.modeToStartState[i]);
        }
        //
        // SETS
        //
        let sets = [];
        // First, read all sets with 16-bit Unicode code points <= U+FFFF.
        p = this.deserializeSets(data, p, sets, ATNDeserializer.getUnicodeDeserializer(0 /* UNICODE_BMP */));
        // Next, if the ATN was serialized with the Unicode SMP feature,
        // deserialize sets with 32-bit arguments <= U+10FFFF.
        if (ATNDeserializer.isFeatureSupported(ATNDeserializer.ADDED_UNICODE_SMP, uuid)) {
            p = this.deserializeSets(data, p, sets, ATNDeserializer.getUnicodeDeserializer(1 /* UNICODE_SMP */));
        }
        //
        // EDGES
        //
        let nedges = ATNDeserializer.toInt(data[p++]);
        for (let i = 0; i < nedges; i++) {
            let src = ATNDeserializer.toInt(data[p]);
            let trg = ATNDeserializer.toInt(data[p + 1]);
            let ttype = ATNDeserializer.toInt(data[p + 2]);
            let arg1 = ATNDeserializer.toInt(data[p + 3]);
            let arg2 = ATNDeserializer.toInt(data[p + 4]);
            let arg3 = ATNDeserializer.toInt(data[p + 5]);
            let trans = this.edgeFactory(atn, ttype, src, trg, arg1, arg2, arg3, sets);
            // console.log(`EDGE ${trans.constructor.name} ${src}->${trg} ${Transition.serializationNames[ttype]} ${arg1},${arg2},${arg3}`);
            let srcState = atn.states[src];
            srcState.addTransition(trans);
            p += 6;
        }
        let returnTransitionsSet = new Array2DHashSet_1.Array2DHashSet({
            hashCode: (o) => o.stopState ^ o.returnState ^ o.outermostPrecedenceReturn,
            equals: (a, b) => {
                return a.stopState === b.stopState
                    && a.returnState === b.returnState
                    && a.outermostPrecedenceReturn === b.outermostPrecedenceReturn;
            },
        });
        let returnTransitions = [];
        for (let state of atn.states) {
            let returningToLeftFactored = state.ruleIndex >= 0 && atn.ruleToStartState[state.ruleIndex].leftFactored;
            for (let i = 0; i < state.numberOfTransitions; i++) {
                let t = state.transition(i);
                if (!(t instanceof RuleTransition_1.RuleTransition)) {
                    continue;
                }
                let ruleTransition = t;
                let returningFromLeftFactored = atn.ruleToStartState[ruleTransition.target.ruleIndex].leftFactored;
                if (!returningFromLeftFactored && returningToLeftFactored) {
                    continue;
                }
                let outermostPrecedenceReturn = -1;
                if (atn.ruleToStartState[ruleTransition.target.ruleIndex].isPrecedenceRule) {
                    if (ruleTransition.precedence === 0) {
                        outermostPrecedenceReturn = ruleTransition.target.ruleIndex;
                    }
                }
                let current = { stopState: ruleTransition.target.ruleIndex, returnState: ruleTransition.followState.stateNumber, outermostPrecedenceReturn };
                if (returnTransitionsSet.add(current)) {
                    returnTransitions.push(current);
                }
            }
        }
        // Add all elements from returnTransitions to the ATN
        for (let returnTransition of returnTransitions) {
            let transition = new EpsilonTransition_1.EpsilonTransition(atn.states[returnTransition.returnState], returnTransition.outermostPrecedenceReturn);
            atn.ruleToStopState[returnTransition.stopState].addTransition(transition);
        }
        for (let state of atn.states) {
            if (state instanceof BlockStartState_1.BlockStartState) {
                // we need to know the end state to set its start state
                if (state.endState === undefined) {
                    throw new Error("IllegalStateException");
                }
                // block end states can only be associated to a single block start state
                if (state.endState.startState !== undefined) {
                    throw new Error("IllegalStateException");
                }
                state.endState.startState = state;
            }
            if (state instanceof PlusLoopbackState_1.PlusLoopbackState) {
                let loopbackState = state;
                for (let i = 0; i < loopbackState.numberOfTransitions; i++) {
                    let target = loopbackState.transition(i).target;
                    if (target instanceof PlusBlockStartState_1.PlusBlockStartState) {
                        target.loopBackState = loopbackState;
                    }
                }
            }
            else if (state instanceof StarLoopbackState_1.StarLoopbackState) {
                let loopbackState = state;
                for (let i = 0; i < loopbackState.numberOfTransitions; i++) {
                    let target = loopbackState.transition(i).target;
                    if (target instanceof StarLoopEntryState_1.StarLoopEntryState) {
                        target.loopBackState = loopbackState;
                    }
                }
            }
        }
        //
        // DECISIONS
        //
        let ndecisions = ATNDeserializer.toInt(data[p++]);
        for (let i = 1; i <= ndecisions; i++) {
            let s = ATNDeserializer.toInt(data[p++]);
            let decState = atn.states[s];
            atn.decisionToState.push(decState);
            decState.decision = i - 1;
        }
        //
        // LEXER ACTIONS
        //
        if (atn.grammarType === 0 /* LEXER */) {
            if (supportsLexerActions) {
                atn.lexerActions = new Array(ATNDeserializer.toInt(data[p++]));
                for (let i = 0; i < atn.lexerActions.length; i++) {
                    let actionType = ATNDeserializer.toInt(data[p++]);
                    let data1 = ATNDeserializer.toInt(data[p++]);
                    if (data1 === 0xFFFF) {
                        data1 = -1;
                    }
                    let data2 = ATNDeserializer.toInt(data[p++]);
                    if (data2 === 0xFFFF) {
                        data2 = -1;
                    }
                    let lexerAction = this.lexerActionFactory(actionType, data1, data2);
                    atn.lexerActions[i] = lexerAction;
                }
            }
            else {
                // for compatibility with older serialized ATNs, convert the old
                // serialized action index for action transitions to the new
                // form, which is the index of a LexerCustomAction
                let legacyLexerActions = [];
                for (let state of atn.states) {
                    for (let i = 0; i < state.numberOfTransitions; i++) {
                        let transition = state.transition(i);
                        if (!(transition instanceof ActionTransition_1.ActionTransition)) {
                            continue;
                        }
                        let ruleIndex = transition.ruleIndex;
                        let actionIndex = transition.actionIndex;
                        let lexerAction = new LexerCustomAction_1.LexerCustomAction(ruleIndex, actionIndex);
                        state.setTransition(i, new ActionTransition_1.ActionTransition(transition.target, ruleIndex, legacyLexerActions.length, false));
                        legacyLexerActions.push(lexerAction);
                    }
                }
                atn.lexerActions = legacyLexerActions;
            }
        }
        this.markPrecedenceDecisions(atn);
        atn.decisionToDFA = new Array(ndecisions);
        for (let i = 0; i < ndecisions; i++) {
            atn.decisionToDFA[i] = new DFA_1.DFA(atn.decisionToState[i], i);
        }
        if (this.deserializationOptions.isVerifyATN) {
            this.verifyATN(atn);
        }
        if (this.deserializationOptions.isGenerateRuleBypassTransitions && atn.grammarType === 1 /* PARSER */) {
            atn.ruleToTokenType = new Int32Array(atn.ruleToStartState.length);
            for (let i = 0; i < atn.ruleToStartState.length; i++) {
                atn.ruleToTokenType[i] = atn.maxTokenType + i + 1;
            }
            for (let i = 0; i < atn.ruleToStartState.length; i++) {
                let bypassStart = new BasicBlockStartState_1.BasicBlockStartState();
                bypassStart.ruleIndex = i;
                atn.addState(bypassStart);
                let bypassStop = new BlockEndState_1.BlockEndState();
                bypassStop.ruleIndex = i;
                atn.addState(bypassStop);
                bypassStart.endState = bypassStop;
                atn.defineDecisionState(bypassStart);
                bypassStop.startState = bypassStart;
                let endState;
                let excludeTransition;
                if (atn.ruleToStartState[i].isPrecedenceRule) {
                    // wrap from the beginning of the rule to the StarLoopEntryState
                    endState = undefined;
                    for (let state of atn.states) {
                        if (state.ruleIndex !== i) {
                            continue;
                        }
                        if (!(state instanceof StarLoopEntryState_1.StarLoopEntryState)) {
                            continue;
                        }
                        let maybeLoopEndState = state.transition(state.numberOfTransitions - 1).target;
                        if (!(maybeLoopEndState instanceof LoopEndState_1.LoopEndState)) {
                            continue;
                        }
                        if (maybeLoopEndState.epsilonOnlyTransitions && maybeLoopEndState.transition(0).target instanceof RuleStopState_1.RuleStopState) {
                            endState = state;
                            break;
                        }
                    }
                    if (!endState) {
                        throw new Error("Couldn't identify final state of the precedence rule prefix section.");
                    }
                    excludeTransition = endState.loopBackState.transition(0);
                }
                else {
                    endState = atn.ruleToStopState[i];
                }
                // all non-excluded transitions that currently target end state need to target blockEnd instead
                for (let state of atn.states) {
                    for (let i = 0; i < state.numberOfTransitions; i++) {
                        let transition = state.transition(i);
                        if (transition === excludeTransition) {
                            continue;
                        }
                        if (transition.target === endState) {
                            transition.target = bypassStop;
                        }
                    }
                }
                // all transitions leaving the rule start state need to leave blockStart instead
                while (atn.ruleToStartState[i].numberOfTransitions > 0) {
                    let transition = atn.ruleToStartState[i].removeTransition(atn.ruleToStartState[i].numberOfTransitions - 1);
                    bypassStart.addTransition(transition);
                }
                // link the new states
                atn.ruleToStartState[i].addTransition(new EpsilonTransition_1.EpsilonTransition(bypassStart));
                bypassStop.addTransition(new EpsilonTransition_1.EpsilonTransition(endState));
                let matchState = new BasicState_1.BasicState();
                atn.addState(matchState);
                matchState.addTransition(new AtomTransition_1.AtomTransition(bypassStop, atn.ruleToTokenType[i]));
                bypassStart.addTransition(new EpsilonTransition_1.EpsilonTransition(matchState));
            }
            if (this.deserializationOptions.isVerifyATN) {
                // reverify after modification
                this.verifyATN(atn);
            }
        }
        if (this.deserializationOptions.isOptimize) {
            while (true) {
                let optimizationCount = 0;
                optimizationCount += ATNDeserializer.inlineSetRules(atn);
                optimizationCount += ATNDeserializer.combineChainedEpsilons(atn);
                let preserveOrder = atn.grammarType === 0 /* LEXER */;
                optimizationCount += ATNDeserializer.optimizeSets(atn, preserveOrder);
                if (optimizationCount === 0) {
                    break;
                }
            }
            if (this.deserializationOptions.isVerifyATN) {
                // reverify after modification
                this.verifyATN(atn);
            }
        }
        ATNDeserializer.identifyTailCalls(atn);
        return atn;
    }
    deserializeSets(data, p, sets, unicodeDeserializer) {
        let nsets = ATNDeserializer.toInt(data[p++]);
        for (let i = 0; i < nsets; i++) {
            let nintervals = ATNDeserializer.toInt(data[p]);
            p++;
            let set = new IntervalSet_1.IntervalSet();
            sets.push(set);
            let containsEof = ATNDeserializer.toInt(data[p++]) !== 0;
            if (containsEof) {
                set.add(-1);
            }
            for (let j = 0; j < nintervals; j++) {
                let a = unicodeDeserializer.readUnicode(data, p);
                p += unicodeDeserializer.size;
                let b = unicodeDeserializer.readUnicode(data, p);
                p += unicodeDeserializer.size;
                set.add(a, b);
            }
        }
        return p;
    }
    /**
     * Analyze the {@link StarLoopEntryState} states in the specified ATN to set
     * the {@link StarLoopEntryState#precedenceRuleDecision} field to the
     * correct value.
     *
     * @param atn The ATN.
     */
    markPrecedenceDecisions(atn) {
        // Map rule index -> precedence decision for that rule
        let rulePrecedenceDecisions = new Map();
        for (let state of atn.states) {
            if (!(state instanceof StarLoopEntryState_1.StarLoopEntryState)) {
                continue;
            }
            /* We analyze the ATN to determine if this ATN decision state is the
             * decision for the closure block that determines whether a
             * precedence rule should continue or complete.
             */
            if (atn.ruleToStartState[state.ruleIndex].isPrecedenceRule) {
                let maybeLoopEndState = state.transition(state.numberOfTransitions - 1).target;
                if (maybeLoopEndState instanceof LoopEndState_1.LoopEndState) {
                    if (maybeLoopEndState.epsilonOnlyTransitions && maybeLoopEndState.transition(0).target instanceof RuleStopState_1.RuleStopState) {
                        rulePrecedenceDecisions.set(state.ruleIndex, state);
                        state.precedenceRuleDecision = true;
                        state.precedenceLoopbackStates = new BitSet_1.BitSet(atn.states.length);
                    }
                }
            }
        }
        // After marking precedence decisions, we go back through and fill in
        // StarLoopEntryState.precedenceLoopbackStates.
        for (let precedenceDecision of rulePrecedenceDecisions) {
            for (let transition of atn.ruleToStopState[precedenceDecision[0]].getTransitions()) {
                if (transition.serializationType !== 1 /* EPSILON */) {
                    continue;
                }
                let epsilonTransition = transition;
                if (epsilonTransition.outermostPrecedenceReturn !== -1) {
                    continue;
                }
                precedenceDecision[1].precedenceLoopbackStates.set(transition.target.stateNumber);
            }
        }
    }
    verifyATN(atn) {
        // verify assumptions
        for (let state of atn.states) {
            this.checkCondition(state !== undefined, "ATN states should not be undefined.");
            if (state.stateType === ATNStateType_1.ATNStateType.INVALID_TYPE) {
                continue;
            }
            this.checkCondition(state.onlyHasEpsilonTransitions || state.numberOfTransitions <= 1);
            if (state instanceof PlusBlockStartState_1.PlusBlockStartState) {
                this.checkCondition(state.loopBackState !== undefined);
            }
            if (state instanceof StarLoopEntryState_1.StarLoopEntryState) {
                let starLoopEntryState = state;
                this.checkCondition(starLoopEntryState.loopBackState !== undefined);
                this.checkCondition(starLoopEntryState.numberOfTransitions === 2);
                if (starLoopEntryState.transition(0).target instanceof StarBlockStartState_1.StarBlockStartState) {
                    this.checkCondition(starLoopEntryState.transition(1).target instanceof LoopEndState_1.LoopEndState);
                    this.checkCondition(!starLoopEntryState.nonGreedy);
                }
                else if (starLoopEntryState.transition(0).target instanceof LoopEndState_1.LoopEndState) {
                    this.checkCondition(starLoopEntryState.transition(1).target instanceof StarBlockStartState_1.StarBlockStartState);
                    this.checkCondition(starLoopEntryState.nonGreedy);
                }
                else {
                    throw new Error("IllegalStateException");
                }
            }
            if (state instanceof StarLoopbackState_1.StarLoopbackState) {
                this.checkCondition(state.numberOfTransitions === 1);
                this.checkCondition(state.transition(0).target instanceof StarLoopEntryState_1.StarLoopEntryState);
            }
            if (state instanceof LoopEndState_1.LoopEndState) {
                this.checkCondition(state.loopBackState !== undefined);
            }
            if (state instanceof RuleStartState_1.RuleStartState) {
                this.checkCondition(state.stopState !== undefined);
            }
            if (state instanceof BlockStartState_1.BlockStartState) {
                this.checkCondition(state.endState !== undefined);
            }
            if (state instanceof BlockEndState_1.BlockEndState) {
                this.checkCondition(state.startState !== undefined);
            }
            if (state instanceof DecisionState_1.DecisionState) {
                let decisionState = state;
                this.checkCondition(decisionState.numberOfTransitions <= 1 || decisionState.decision >= 0);
            }
            else {
                this.checkCondition(state.numberOfTransitions <= 1 || state instanceof RuleStopState_1.RuleStopState);
            }
        }
    }
    checkCondition(condition, message) {
        if (!condition) {
            throw new Error("IllegalStateException: " + message);
        }
    }
    static inlineSetRules(atn) {
        let inlinedCalls = 0;
        let ruleToInlineTransition = new Array(atn.ruleToStartState.length);
        for (let i = 0; i < atn.ruleToStartState.length; i++) {
            let startState = atn.ruleToStartState[i];
            let middleState = startState;
            while (middleState.onlyHasEpsilonTransitions
                && middleState.numberOfOptimizedTransitions === 1
                && middleState.getOptimizedTransition(0).serializationType === 1 /* EPSILON */) {
                middleState = middleState.getOptimizedTransition(0).target;
            }
            if (middleState.numberOfOptimizedTransitions !== 1) {
                continue;
            }
            let matchTransition = middleState.getOptimizedTransition(0);
            let matchTarget = matchTransition.target;
            if (matchTransition.isEpsilon
                || !matchTarget.onlyHasEpsilonTransitions
                || matchTarget.numberOfOptimizedTransitions !== 1
                || !(matchTarget.getOptimizedTransition(0).target instanceof RuleStopState_1.RuleStopState)) {
                continue;
            }
            switch (matchTransition.serializationType) {
                case 5 /* ATOM */:
                case 2 /* RANGE */:
                case 7 /* SET */:
                    ruleToInlineTransition[i] = matchTransition;
                    break;
                case 8 /* NOT_SET */:
                case 9 /* WILDCARD */:
                    // not implemented yet
                    continue;
                default:
                    continue;
            }
        }
        for (let state of atn.states) {
            if (state.ruleIndex < 0) {
                continue;
            }
            let optimizedTransitions;
            for (let i = 0; i < state.numberOfOptimizedTransitions; i++) {
                let transition = state.getOptimizedTransition(i);
                if (!(transition instanceof RuleTransition_1.RuleTransition)) {
                    if (optimizedTransitions !== undefined) {
                        optimizedTransitions.push(transition);
                    }
                    continue;
                }
                let ruleTransition = transition;
                let effective = ruleToInlineTransition[ruleTransition.target.ruleIndex];
                if (effective === undefined) {
                    if (optimizedTransitions !== undefined) {
                        optimizedTransitions.push(transition);
                    }
                    continue;
                }
                if (optimizedTransitions === undefined) {
                    optimizedTransitions = [];
                    for (let j = 0; j < i; j++) {
                        optimizedTransitions.push(state.getOptimizedTransition(i));
                    }
                }
                inlinedCalls++;
                let target = ruleTransition.followState;
                let intermediateState = new BasicState_1.BasicState();
                intermediateState.setRuleIndex(target.ruleIndex);
                atn.addState(intermediateState);
                optimizedTransitions.push(new EpsilonTransition_1.EpsilonTransition(intermediateState));
                switch (effective.serializationType) {
                    case 5 /* ATOM */:
                        intermediateState.addTransition(new AtomTransition_1.AtomTransition(target, effective._label));
                        break;
                    case 2 /* RANGE */:
                        intermediateState.addTransition(new RangeTransition_1.RangeTransition(target, effective.from, effective.to));
                        break;
                    case 7 /* SET */:
                        intermediateState.addTransition(new SetTransition_1.SetTransition(target, effective.label));
                        break;
                    default:
                        throw new Error("UnsupportedOperationException");
                }
            }
            if (optimizedTransitions !== undefined) {
                if (state.isOptimized) {
                    while (state.numberOfOptimizedTransitions > 0) {
                        state.removeOptimizedTransition(state.numberOfOptimizedTransitions - 1);
                    }
                }
                for (let transition of optimizedTransitions) {
                    state.addOptimizedTransition(transition);
                }
            }
        }
        if (ParserATNSimulator_1.ParserATNSimulator.debug) {
            console.log("ATN runtime optimizer removed " + inlinedCalls + " rule invocations by inlining sets.");
        }
        return inlinedCalls;
    }
    static combineChainedEpsilons(atn) {
        let removedEdges = 0;
        for (let state of atn.states) {
            if (!state.onlyHasEpsilonTransitions || state instanceof RuleStopState_1.RuleStopState) {
                continue;
            }
            let optimizedTransitions;
            nextTransition: for (let i = 0; i < state.numberOfOptimizedTransitions; i++) {
                let transition = state.getOptimizedTransition(i);
                let intermediate = transition.target;
                if (transition.serializationType !== 1 /* EPSILON */
                    || transition.outermostPrecedenceReturn !== -1
                    || intermediate.stateType !== ATNStateType_1.ATNStateType.BASIC
                    || !intermediate.onlyHasEpsilonTransitions) {
                    if (optimizedTransitions !== undefined) {
                        optimizedTransitions.push(transition);
                    }
                    continue nextTransition;
                }
                for (let j = 0; j < intermediate.numberOfOptimizedTransitions; j++) {
                    if (intermediate.getOptimizedTransition(j).serializationType !== 1 /* EPSILON */
                        || intermediate.getOptimizedTransition(j).outermostPrecedenceReturn !== -1) {
                        if (optimizedTransitions !== undefined) {
                            optimizedTransitions.push(transition);
                        }
                        continue nextTransition;
                    }
                }
                removedEdges++;
                if (optimizedTransitions === undefined) {
                    optimizedTransitions = [];
                    for (let j = 0; j < i; j++) {
                        optimizedTransitions.push(state.getOptimizedTransition(j));
                    }
                }
                for (let j = 0; j < intermediate.numberOfOptimizedTransitions; j++) {
                    let target = intermediate.getOptimizedTransition(j).target;
                    optimizedTransitions.push(new EpsilonTransition_1.EpsilonTransition(target));
                }
            }
            if (optimizedTransitions !== undefined) {
                if (state.isOptimized) {
                    while (state.numberOfOptimizedTransitions > 0) {
                        state.removeOptimizedTransition(state.numberOfOptimizedTransitions - 1);
                    }
                }
                for (let transition of optimizedTransitions) {
                    state.addOptimizedTransition(transition);
                }
            }
        }
        if (ParserATNSimulator_1.ParserATNSimulator.debug) {
            console.log("ATN runtime optimizer removed " + removedEdges + " transitions by combining chained epsilon transitions.");
        }
        return removedEdges;
    }
    static optimizeSets(atn, preserveOrder) {
        if (preserveOrder) {
            // this optimization currently doesn't preserve edge order.
            return 0;
        }
        let removedPaths = 0;
        let decisions = atn.decisionToState;
        for (let decision of decisions) {
            let setTransitions = new IntervalSet_1.IntervalSet();
            for (let i = 0; i < decision.numberOfOptimizedTransitions; i++) {
                let epsTransition = decision.getOptimizedTransition(i);
                if (!(epsTransition instanceof EpsilonTransition_1.EpsilonTransition)) {
                    continue;
                }
                if (epsTransition.target.numberOfOptimizedTransitions !== 1) {
                    continue;
                }
                let transition = epsTransition.target.getOptimizedTransition(0);
                if (!(transition.target instanceof BlockEndState_1.BlockEndState)) {
                    continue;
                }
                if (transition instanceof NotSetTransition_1.NotSetTransition) {
                    // TODO: not yet implemented
                    continue;
                }
                if (transition instanceof AtomTransition_1.AtomTransition
                    || transition instanceof RangeTransition_1.RangeTransition
                    || transition instanceof SetTransition_1.SetTransition) {
                    setTransitions.add(i);
                }
            }
            if (setTransitions.size <= 1) {
                continue;
            }
            let optimizedTransitions = [];
            for (let i = 0; i < decision.numberOfOptimizedTransitions; i++) {
                if (!setTransitions.contains(i)) {
                    optimizedTransitions.push(decision.getOptimizedTransition(i));
                }
            }
            let blockEndState = decision.getOptimizedTransition(setTransitions.minElement).target.getOptimizedTransition(0).target;
            let matchSet = new IntervalSet_1.IntervalSet();
            for (let interval of setTransitions.intervals) {
                for (let j = interval.a; j <= interval.b; j++) {
                    let matchTransition = decision.getOptimizedTransition(j).target.getOptimizedTransition(0);
                    if (matchTransition instanceof NotSetTransition_1.NotSetTransition) {
                        throw new Error("Not yet implemented.");
                    }
                    else {
                        matchSet.addAll(matchTransition.label);
                    }
                }
            }
            let newTransition;
            if (matchSet.intervals.length === 1) {
                if (matchSet.size === 1) {
                    newTransition = new AtomTransition_1.AtomTransition(blockEndState, matchSet.minElement);
                }
                else {
                    let matchInterval = matchSet.intervals[0];
                    newTransition = new RangeTransition_1.RangeTransition(blockEndState, matchInterval.a, matchInterval.b);
                }
            }
            else {
                newTransition = new SetTransition_1.SetTransition(blockEndState, matchSet);
            }
            let setOptimizedState = new BasicState_1.BasicState();
            setOptimizedState.setRuleIndex(decision.ruleIndex);
            atn.addState(setOptimizedState);
            setOptimizedState.addTransition(newTransition);
            optimizedTransitions.push(new EpsilonTransition_1.EpsilonTransition(setOptimizedState));
            removedPaths += decision.numberOfOptimizedTransitions - optimizedTransitions.length;
            if (decision.isOptimized) {
                while (decision.numberOfOptimizedTransitions > 0) {
                    decision.removeOptimizedTransition(decision.numberOfOptimizedTransitions - 1);
                }
            }
            for (let transition of optimizedTransitions) {
                decision.addOptimizedTransition(transition);
            }
        }
        if (ParserATNSimulator_1.ParserATNSimulator.debug) {
            console.log("ATN runtime optimizer removed " + removedPaths + " paths by collapsing sets.");
        }
        return removedPaths;
    }
    static identifyTailCalls(atn) {
        for (let state of atn.states) {
            for (let i = 0; i < state.numberOfTransitions; i++) {
                let transition = state.transition(i);
                if (!(transition instanceof RuleTransition_1.RuleTransition)) {
                    continue;
                }
                transition.tailCall = this.testTailCall(atn, transition, false);
                transition.optimizedTailCall = this.testTailCall(atn, transition, true);
            }
            if (!state.isOptimized) {
                continue;
            }
            for (let i = 0; i < state.numberOfOptimizedTransitions; i++) {
                let transition = state.getOptimizedTransition(i);
                if (!(transition instanceof RuleTransition_1.RuleTransition)) {
                    continue;
                }
                transition.tailCall = this.testTailCall(atn, transition, false);
                transition.optimizedTailCall = this.testTailCall(atn, transition, true);
            }
        }
    }
    static testTailCall(atn, transition, optimizedPath) {
        if (!optimizedPath && transition.tailCall) {
            return true;
        }
        if (optimizedPath && transition.optimizedTailCall) {
            return true;
        }
        let reachable = new BitSet_1.BitSet(atn.states.length);
        let worklist = [];
        worklist.push(transition.followState);
        while (true) {
            let state = worklist.pop();
            if (!state) {
                break;
            }
            if (reachable.get(state.stateNumber)) {
                continue;
            }
            if (state instanceof RuleStopState_1.RuleStopState) {
                continue;
            }
            if (!state.onlyHasEpsilonTransitions) {
                return false;
            }
            let transitionCount = optimizedPath ? state.numberOfOptimizedTransitions : state.numberOfTransitions;
            for (let i = 0; i < transitionCount; i++) {
                let t = optimizedPath ? state.getOptimizedTransition(i) : state.transition(i);
                if (t.serializationType !== 1 /* EPSILON */) {
                    return false;
                }
                worklist.push(t.target);
            }
        }
        return true;
    }
    static toInt(c) {
        return c;
    }
    static toInt32(data, offset) {
        return (data[offset] | (data[offset + 1] << 16)) >>> 0;
    }
    static toUUID(data, offset) {
        let leastSigBits = ATNDeserializer.toInt32(data, offset);
        let lessSigBits = ATNDeserializer.toInt32(data, offset + 2);
        let moreSigBits = ATNDeserializer.toInt32(data, offset + 4);
        let mostSigBits = ATNDeserializer.toInt32(data, offset + 6);
        return new UUID_1.UUID(mostSigBits, moreSigBits, lessSigBits, leastSigBits);
    }
    edgeFactory(atn, type, src, trg, arg1, arg2, arg3, sets) {
        let target = atn.states[trg];
        switch (type) {
            case 1 /* EPSILON */: return new EpsilonTransition_1.EpsilonTransition(target);
            case 2 /* RANGE */:
                if (arg3 !== 0) {
                    return new RangeTransition_1.RangeTransition(target, Token_1.Token.EOF, arg2);
                }
                else {
                    return new RangeTransition_1.RangeTransition(target, arg1, arg2);
                }
            case 3 /* RULE */:
                let rt = new RuleTransition_1.RuleTransition(atn.states[arg1], arg2, arg3, target);
                return rt;
            case 4 /* PREDICATE */:
                let pt = new PredicateTransition_1.PredicateTransition(target, arg1, arg2, arg3 !== 0);
                return pt;
            case 10 /* PRECEDENCE */:
                return new PrecedencePredicateTransition_1.PrecedencePredicateTransition(target, arg1);
            case 5 /* ATOM */:
                if (arg3 !== 0) {
                    return new AtomTransition_1.AtomTransition(target, Token_1.Token.EOF);
                }
                else {
                    return new AtomTransition_1.AtomTransition(target, arg1);
                }
            case 6 /* ACTION */:
                let a = new ActionTransition_1.ActionTransition(target, arg1, arg2, arg3 !== 0);
                return a;
            case 7 /* SET */: return new SetTransition_1.SetTransition(target, sets[arg1]);
            case 8 /* NOT_SET */: return new NotSetTransition_1.NotSetTransition(target, sets[arg1]);
            case 9 /* WILDCARD */: return new WildcardTransition_1.WildcardTransition(target);
        }
        throw new Error("The specified transition type is not valid.");
    }
    stateFactory(type, ruleIndex) {
        let s;
        switch (type) {
            case ATNStateType_1.ATNStateType.INVALID_TYPE: return new InvalidState_1.InvalidState();
            case ATNStateType_1.ATNStateType.BASIC:
                s = new BasicState_1.BasicState();
                break;
            case ATNStateType_1.ATNStateType.RULE_START:
                s = new RuleStartState_1.RuleStartState();
                break;
            case ATNStateType_1.ATNStateType.BLOCK_START:
                s = new BasicBlockStartState_1.BasicBlockStartState();
                break;
            case ATNStateType_1.ATNStateType.PLUS_BLOCK_START:
                s = new PlusBlockStartState_1.PlusBlockStartState();
                break;
            case ATNStateType_1.ATNStateType.STAR_BLOCK_START:
                s = new StarBlockStartState_1.StarBlockStartState();
                break;
            case ATNStateType_1.ATNStateType.TOKEN_START:
                s = new TokensStartState_1.TokensStartState();
                break;
            case ATNStateType_1.ATNStateType.RULE_STOP:
                s = new RuleStopState_1.RuleStopState();
                break;
            case ATNStateType_1.ATNStateType.BLOCK_END:
                s = new BlockEndState_1.BlockEndState();
                break;
            case ATNStateType_1.ATNStateType.STAR_LOOP_BACK:
                s = new StarLoopbackState_1.StarLoopbackState();
                break;
            case ATNStateType_1.ATNStateType.STAR_LOOP_ENTRY:
                s = new StarLoopEntryState_1.StarLoopEntryState();
                break;
            case ATNStateType_1.ATNStateType.PLUS_LOOP_BACK:
                s = new PlusLoopbackState_1.PlusLoopbackState();
                break;
            case ATNStateType_1.ATNStateType.LOOP_END:
                s = new LoopEndState_1.LoopEndState();
                break;
            default:
                let message = `The specified state type ${type} is not valid.`;
                throw new Error(message);
        }
        s.ruleIndex = ruleIndex;
        return s;
    }
    lexerActionFactory(type, data1, data2) {
        switch (type) {
            case 0 /* CHANNEL */:
                return new LexerChannelAction_1.LexerChannelAction(data1);
            case 1 /* CUSTOM */:
                return new LexerCustomAction_1.LexerCustomAction(data1, data2);
            case 2 /* MODE */:
                return new LexerModeAction_1.LexerModeAction(data1);
            case 3 /* MORE */:
                return LexerMoreAction_1.LexerMoreAction.INSTANCE;
            case 4 /* POP_MODE */:
                return LexerPopModeAction_1.LexerPopModeAction.INSTANCE;
            case 5 /* PUSH_MODE */:
                return new LexerPushModeAction_1.LexerPushModeAction(data1);
            case 6 /* SKIP */:
                return LexerSkipAction_1.LexerSkipAction.INSTANCE;
            case 7 /* TYPE */:
                return new LexerTypeAction_1.LexerTypeAction(data1);
            default:
                let message = `The specified lexer action type ${type} is not valid.`;
                throw new Error(message);
        }
    }
}
/* WARNING: DO NOT MERGE THESE LINES. If UUIDs differ during a merge,
 * resolve the conflict by generating a new ID!
 */
/**
 * This is the earliest supported serialized UUID.
 */
ATNDeserializer.BASE_SERIALIZED_UUID = UUID_1.UUID.fromString("E4178468-DF95-44D0-AD87-F22A5D5FB6D3");
/**
 * This UUID indicates an extension of {@link #ADDED_PRECEDENCE_TRANSITIONS}
 * for the addition of lexer actions encoded as a sequence of
 * {@link LexerAction} instances.
 */
ATNDeserializer.ADDED_LEXER_ACTIONS = UUID_1.UUID.fromString("AB35191A-1603-487E-B75A-479B831EAF6D");
/**
 * This UUID indicates the serialized ATN contains two sets of
 * IntervalSets, where the second set's values are encoded as
 * 32-bit integers to support the full Unicode SMP range up to U+10FFFF.
 */
ATNDeserializer.ADDED_UNICODE_SMP = UUID_1.UUID.fromString("C23FEA89-0605-4f51-AFB8-058BCAB8C91B");
/**
 * This list contains all of the currently supported UUIDs, ordered by when
 * the feature first appeared in this branch.
 */
ATNDeserializer.SUPPORTED_UUIDS = [
    ATNDeserializer.BASE_SERIALIZED_UUID,
    ATNDeserializer.ADDED_LEXER_ACTIONS,
    ATNDeserializer.ADDED_UNICODE_SMP,
];
/**
 * This is the current serialized UUID.
 */
ATNDeserializer.SERIALIZED_UUID = ATNDeserializer.ADDED_UNICODE_SMP;
__decorate([
    Decorators.NotNull
], ATNDeserializer.prototype, "deserializationOptions", void 0);
__decorate([
    __param(0, Decorators.NotNull)
], ATNDeserializer.prototype, "deserialize", null);
__decorate([
    __param(0, Decorators.NotNull)
], ATNDeserializer.prototype, "markPrecedenceDecisions", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
], ATNDeserializer.prototype, "edgeFactory", null);
exports.ATNDeserializer = ATNDeserializer;

});

var ParseInfo_1 = createCommonjsModule(function (module, exports) {
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
exports.ParseInfo = void 0;

/**
 * This class provides access to specific and aggregate statistics gathered
 * during profiling of a parser.
 *
 * @since 4.3
 */
let ParseInfo = class ParseInfo {
    constructor(atnSimulator) {
        this.atnSimulator = atnSimulator;
    }
    /**
     * Gets an array of {@link DecisionInfo} instances containing the profiling
     * information gathered for each decision in the ATN.
     *
     * @returns An array of {@link DecisionInfo} instances, indexed by decision
     * number.
     */
    getDecisionInfo() {
        return this.atnSimulator.getDecisionInfo();
    }
    /**
     * Gets the decision numbers for decisions that required one or more
     * full-context predictions during parsing. These are decisions for which
     * {@link DecisionInfo#LL_Fallback} is non-zero.
     *
     * @returns A list of decision numbers which required one or more
     * full-context predictions during parsing.
     */
    getLLDecisions() {
        let decisions = this.atnSimulator.getDecisionInfo();
        let LL = [];
        for (let i = 0; i < decisions.length; i++) {
            let fallBack = decisions[i].LL_Fallback;
            if (fallBack > 0) {
                LL.push(i);
            }
        }
        return LL;
    }
    /**
     * Gets the total time spent during prediction across all decisions made
     * during parsing. This value is the sum of
     * {@link DecisionInfo#timeInPrediction} for all decisions.
     */
    getTotalTimeInPrediction() {
        let decisions = this.atnSimulator.getDecisionInfo();
        let t = 0;
        for (let decision of decisions) {
            t += decision.timeInPrediction;
        }
        return t;
    }
    /**
     * Gets the total number of SLL lookahead operations across all decisions
     * made during parsing. This value is the sum of
     * {@link DecisionInfo#SLL_TotalLook} for all decisions.
     */
    getTotalSLLLookaheadOps() {
        let decisions = this.atnSimulator.getDecisionInfo();
        let k = 0;
        for (let decision of decisions) {
            k += decision.SLL_TotalLook;
        }
        return k;
    }
    /**
     * Gets the total number of LL lookahead operations across all decisions
     * made during parsing. This value is the sum of
     * {@link DecisionInfo#LL_TotalLook} for all decisions.
     */
    getTotalLLLookaheadOps() {
        let decisions = this.atnSimulator.getDecisionInfo();
        let k = 0;
        for (let decision of decisions) {
            k += decision.LL_TotalLook;
        }
        return k;
    }
    /**
     * Gets the total number of ATN lookahead operations for SLL prediction
     * across all decisions made during parsing.
     */
    getTotalSLLATNLookaheadOps() {
        let decisions = this.atnSimulator.getDecisionInfo();
        let k = 0;
        for (let decision of decisions) {
            k += decision.SLL_ATNTransitions;
        }
        return k;
    }
    /**
     * Gets the total number of ATN lookahead operations for LL prediction
     * across all decisions made during parsing.
     */
    getTotalLLATNLookaheadOps() {
        let decisions = this.atnSimulator.getDecisionInfo();
        let k = 0;
        for (let decision of decisions) {
            k += decision.LL_ATNTransitions;
        }
        return k;
    }
    /**
     * Gets the total number of ATN lookahead operations for SLL and LL
     * prediction across all decisions made during parsing.
     *
     * This value is the sum of {@link #getTotalSLLATNLookaheadOps} and
     * {@link #getTotalLLATNLookaheadOps}.
     */
    getTotalATNLookaheadOps() {
        let decisions = this.atnSimulator.getDecisionInfo();
        let k = 0;
        for (let decision of decisions) {
            k += decision.SLL_ATNTransitions;
            k += decision.LL_ATNTransitions;
        }
        return k;
    }
    getDFASize(decision) {
        if (decision) {
            let decisionToDFA = this.atnSimulator.atn.decisionToDFA[decision];
            return decisionToDFA.states.size;
        }
        else {
            let n = 0;
            let decisionToDFA = this.atnSimulator.atn.decisionToDFA;
            for (let i = 0; i < decisionToDFA.length; i++) {
                n += this.getDFASize(i);
            }
            return n;
        }
    }
};
__decorate([
    Decorators.NotNull
], ParseInfo.prototype, "getDecisionInfo", null);
__decorate([
    Decorators.NotNull
], ParseInfo.prototype, "getLLDecisions", null);
ParseInfo = __decorate([
    __param(0, Decorators.NotNull)
], ParseInfo);
exports.ParseInfo = ParseInfo;

});

var ProxyParserErrorListener_1 = createCommonjsModule(function (module, exports) {
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
exports.ProxyParserErrorListener = void 0;


/**
 * @author Sam Harwell
 */
class ProxyParserErrorListener extends ProxyErrorListener_1.ProxyErrorListener {
    constructor(delegates) {
        super(delegates);
    }
    reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
        this.getDelegates()
            .forEach((listener) => {
            if (listener.reportAmbiguity) {
                listener.reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
            }
        });
    }
    reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, conflictState) {
        this.getDelegates()
            .forEach((listener) => {
            if (listener.reportAttemptingFullContext) {
                listener.reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, conflictState);
            }
        });
    }
    reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, acceptState) {
        this.getDelegates()
            .forEach((listener) => {
            if (listener.reportContextSensitivity) {
                listener.reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, acceptState);
            }
        });
    }
}
__decorate([
    Decorators.Override
], ProxyParserErrorListener.prototype, "reportAmbiguity", null);
__decorate([
    Decorators.Override
], ProxyParserErrorListener.prototype, "reportAttemptingFullContext", null);
__decorate([
    Decorators.Override
], ProxyParserErrorListener.prototype, "reportContextSensitivity", null);
exports.ProxyParserErrorListener = ProxyParserErrorListener;

});

var Character = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSupplementaryCodePoint = exports.isLowSurrogate = exports.isHighSurrogate = void 0;
function isHighSurrogate(ch) {
    return ch >= 0xD800 && ch <= 0xDBFF;
}
exports.isHighSurrogate = isHighSurrogate;
function isLowSurrogate(ch) {
    return ch >= 0xDC00 && ch <= 0xDFFF;
}
exports.isLowSurrogate = isLowSurrogate;
function isSupplementaryCodePoint(ch) {
    return ch >= 0x10000;
}
exports.isSupplementaryCodePoint = isSupplementaryCodePoint;

});

var CodePointBuffer_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodePointBuffer = void 0;


/**
 * Wrapper for `Uint8Array` / `Uint16Array` / `Int32Array`.
 */
class CodePointBuffer {
    constructor(buffer, size) {
        this.buffer = buffer;
        this._position = 0;
        this._size = size;
    }
    static withArray(buffer) {
        return new CodePointBuffer(buffer, buffer.length);
    }
    get position() {
        return this._position;
    }
    set position(newPosition) {
        if (newPosition < 0 || newPosition > this._size) {
            throw new RangeError();
        }
        this._position = newPosition;
    }
    get remaining() {
        return this._size - this.position;
    }
    get(offset) {
        return this.buffer[offset];
    }
    array() {
        return this.buffer.slice(0, this._size);
    }
    static builder(initialBufferSize) {
        return new CodePointBuffer.Builder(initialBufferSize);
    }
}
exports.CodePointBuffer = CodePointBuffer;
(function (CodePointBuffer) {
    let Type;
    (function (Type) {
        Type[Type["BYTE"] = 0] = "BYTE";
        Type[Type["CHAR"] = 1] = "CHAR";
        Type[Type["INT"] = 2] = "INT";
    })(Type || (Type = {}));
    class Builder {
        constructor(initialBufferSize) {
            this.type = 0 /* BYTE */;
            this.buffer = new Uint8Array(initialBufferSize);
            this.prevHighSurrogate = -1;
            this.position = 0;
        }
        build() {
            return new CodePointBuffer(this.buffer, this.position);
        }
        static roundUpToNextPowerOfTwo(i) {
            let nextPowerOfTwo = 32 - Math.clz32(i - 1);
            return Math.pow(2, nextPowerOfTwo);
        }
        ensureRemaining(remainingNeeded) {
            switch (this.type) {
                case 0 /* BYTE */:
                    if (this.buffer.length - this.position < remainingNeeded) {
                        let newCapacity = Builder.roundUpToNextPowerOfTwo(this.buffer.length + remainingNeeded);
                        let newBuffer = new Uint8Array(newCapacity);
                        newBuffer.set(this.buffer.subarray(0, this.position), 0);
                        this.buffer = newBuffer;
                    }
                    break;
                case 1 /* CHAR */:
                    if (this.buffer.length - this.position < remainingNeeded) {
                        let newCapacity = Builder.roundUpToNextPowerOfTwo(this.buffer.length + remainingNeeded);
                        let newBuffer = new Uint16Array(newCapacity);
                        newBuffer.set(this.buffer.subarray(0, this.position), 0);
                        this.buffer = newBuffer;
                    }
                    break;
                case 2 /* INT */:
                    if (this.buffer.length - this.position < remainingNeeded) {
                        let newCapacity = Builder.roundUpToNextPowerOfTwo(this.buffer.length + remainingNeeded);
                        let newBuffer = new Int32Array(newCapacity);
                        newBuffer.set(this.buffer.subarray(0, this.position), 0);
                        this.buffer = newBuffer;
                    }
                    break;
            }
        }
        append(utf16In) {
            this.ensureRemaining(utf16In.length);
            this.appendArray(utf16In);
        }
        appendArray(utf16In) {
            switch (this.type) {
                case 0 /* BYTE */:
                    this.appendArrayByte(utf16In);
                    break;
                case 1 /* CHAR */:
                    this.appendArrayChar(utf16In);
                    break;
                case 2 /* INT */:
                    this.appendArrayInt(utf16In);
                    break;
            }
        }
        appendArrayByte(utf16In) {
            assert(this.prevHighSurrogate === -1);
            let input = utf16In;
            let inOffset = 0;
            let inLimit = utf16In.length;
            let outByte = this.buffer;
            let outOffset = this.position;
            while (inOffset < inLimit) {
                let c = input[inOffset];
                if (c <= 0xFF) {
                    outByte[outOffset] = c;
                }
                else {
                    utf16In = utf16In.subarray(inOffset, inLimit);
                    this.position = outOffset;
                    if (!Character.isHighSurrogate(c)) {
                        this.byteToCharBuffer(utf16In.length);
                        this.appendArrayChar(utf16In);
                        return;
                    }
                    else {
                        this.byteToIntBuffer(utf16In.length);
                        this.appendArrayInt(utf16In);
                        return;
                    }
                }
                inOffset++;
                outOffset++;
            }
            this.position = outOffset;
        }
        appendArrayChar(utf16In) {
            assert(this.prevHighSurrogate === -1);
            let input = utf16In;
            let inOffset = 0;
            let inLimit = utf16In.length;
            let outChar = this.buffer;
            let outOffset = this.position;
            while (inOffset < inLimit) {
                let c = input[inOffset];
                if (!Character.isHighSurrogate(c)) {
                    outChar[outOffset] = c;
                }
                else {
                    utf16In = utf16In.subarray(inOffset, inLimit);
                    this.position = outOffset;
                    this.charToIntBuffer(utf16In.length);
                    this.appendArrayInt(utf16In);
                    return;
                }
                inOffset++;
                outOffset++;
            }
            this.position = outOffset;
        }
        appendArrayInt(utf16In) {
            let input = utf16In;
            let inOffset = 0;
            let inLimit = utf16In.length;
            let outInt = this.buffer;
            let outOffset = this.position;
            while (inOffset < inLimit) {
                let c = input[inOffset];
                inOffset++;
                if (this.prevHighSurrogate !== -1) {
                    if (Character.isLowSurrogate(c)) {
                        outInt[outOffset] = String.fromCharCode(this.prevHighSurrogate, c).codePointAt(0);
                        outOffset++;
                        this.prevHighSurrogate = -1;
                    }
                    else {
                        // Dangling high surrogate
                        outInt[outOffset] = this.prevHighSurrogate;
                        outOffset++;
                        if (Character.isHighSurrogate(c)) {
                            this.prevHighSurrogate = c;
                        }
                        else {
                            outInt[outOffset] = c;
                            outOffset++;
                            this.prevHighSurrogate = -1;
                        }
                    }
                }
                else if (Character.isHighSurrogate(c)) {
                    this.prevHighSurrogate = c;
                }
                else {
                    outInt[outOffset] = c;
                    outOffset++;
                }
            }
            if (this.prevHighSurrogate !== -1) {
                // Dangling high surrogate
                outInt[outOffset] = this.prevHighSurrogate;
                outOffset++;
            }
            this.position = outOffset;
        }
        byteToCharBuffer(toAppend) {
            // CharBuffers hold twice as much per unit as ByteBuffers, so start with half the capacity.
            let newBuffer = new Uint16Array(Math.max(this.position + toAppend, this.buffer.length >> 1));
            newBuffer.set(this.buffer.subarray(0, this.position), 0);
            this.type = 1 /* CHAR */;
            this.buffer = newBuffer;
        }
        byteToIntBuffer(toAppend) {
            // IntBuffers hold four times as much per unit as ByteBuffers, so start with one quarter the capacity.
            let newBuffer = new Int32Array(Math.max(this.position + toAppend, this.buffer.length >> 2));
            newBuffer.set(this.buffer.subarray(0, this.position), 0);
            this.type = 2 /* INT */;
            this.buffer = newBuffer;
        }
        charToIntBuffer(toAppend) {
            // IntBuffers hold two times as much per unit as ByteBuffers, so start with one half the capacity.
            let newBuffer = new Int32Array(Math.max(this.position + toAppend, this.buffer.length >> 1));
            newBuffer.set(this.buffer.subarray(0, this.position), 0);
            this.type = 2 /* INT */;
            this.buffer = newBuffer;
        }
    }
    CodePointBuffer.Builder = Builder;
})(CodePointBuffer = exports.CodePointBuffer || (exports.CodePointBuffer = {}));

});

var CodePointCharStream_1 = createCommonjsModule(function (module, exports) {
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
exports.CodePointCharStream = void 0;




/**
 * Alternative to {@link ANTLRInputStream} which treats the input
 * as a series of Unicode code points, instead of a series of UTF-16
 * code units.
 *
 * Use this if you need to parse input which potentially contains
 * Unicode values > U+FFFF.
 */
class CodePointCharStream {
    // Use the factory method {@link #fromBuffer(CodePointBuffer)} to
    // construct instances of this type.
    constructor(array, position, remaining, name) {
        // TODO
        assert(position === 0);
        this._array = array;
        this._size = remaining;
        this._name = name;
        this._position = 0;
    }
    get internalStorage() {
        return this._array;
    }
    static fromBuffer(codePointBuffer, name) {
        if (name === undefined || name.length === 0) {
            name = IntStream_1.IntStream.UNKNOWN_SOURCE_NAME;
        }
        // Java lacks generics on primitive types.
        //
        // To avoid lots of calls to virtual methods in the
        // very hot codepath of LA() below, we construct one
        // of three concrete subclasses.
        //
        // The concrete subclasses directly access the code
        // points stored in the underlying array (byte[],
        // char[], or int[]), so we can avoid lots of virtual
        // method calls to ByteBuffer.get(offset).
        return new CodePointCharStream(codePointBuffer.array(), codePointBuffer.position, codePointBuffer.remaining, name);
    }
    consume() {
        if (this._size - this._position === 0) {
            assert(this.LA(1) === IntStream_1.IntStream.EOF);
            throw new RangeError("cannot consume EOF");
        }
        this._position++;
    }
    get index() {
        return this._position;
    }
    get size() {
        return this._size;
    }
    /** mark/release do nothing; we have entire buffer */
    mark() {
        return -1;
    }
    release(marker) {
        // No default implementation since this stream buffers the entire input
    }
    seek(index) {
        this._position = index;
    }
    get sourceName() {
        return this._name;
    }
    toString() {
        return this.getText(Interval_1.Interval.of(0, this.size - 1));
    }
    LA(i) {
        let offset;
        switch (Math.sign(i)) {
            case -1:
                offset = this.index + i;
                if (offset < 0) {
                    return IntStream_1.IntStream.EOF;
                }
                return this._array[offset];
            case 0:
                // Undefined
                return 0;
            case 1:
                offset = this.index + i - 1;
                if (offset >= this.size) {
                    return IntStream_1.IntStream.EOF;
                }
                return this._array[offset];
        }
        throw new RangeError("Not reached");
    }
    /** Return the UTF-16 encoded string for the given interval */
    getText(interval) {
        const startIdx = Math.min(interval.a, this.size);
        const len = Math.min(interval.b - interval.a + 1, this.size - startIdx);
        if (this._array instanceof Int32Array) {
            return String.fromCodePoint(...Array.from(this._array.subarray(startIdx, startIdx + len)));
        }
        else {
            return String.fromCharCode(...Array.from(this._array.subarray(startIdx, startIdx + len)));
        }
    }
}
__decorate([
    Decorators.Override
], CodePointCharStream.prototype, "consume", null);
__decorate([
    Decorators.Override
], CodePointCharStream.prototype, "index", null);
__decorate([
    Decorators.Override
], CodePointCharStream.prototype, "size", null);
__decorate([
    Decorators.Override
], CodePointCharStream.prototype, "mark", null);
__decorate([
    Decorators.Override
], CodePointCharStream.prototype, "release", null);
__decorate([
    Decorators.Override
], CodePointCharStream.prototype, "seek", null);
__decorate([
    Decorators.Override
], CodePointCharStream.prototype, "sourceName", null);
__decorate([
    Decorators.Override
], CodePointCharStream.prototype, "toString", null);
__decorate([
    Decorators.Override
], CodePointCharStream.prototype, "LA", null);
__decorate([
    Decorators.Override
], CodePointCharStream.prototype, "getText", null);
exports.CodePointCharStream = CodePointCharStream;

});

var CharStreams_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharStreams = void 0;
(function (CharStreams) {
    // /**
    //  * Creates a {@link CharStream} given a path to a UTF-8
    //  * encoded file on disk.
    //  *
    //  * Reads the entire contents of the file into the result before returning.
    //  */
    // export function fromFile(file: File): CharStream;
    // export function fromFile(file: File, charset: Charset): CharStream;
    // export function fromFile(file: File, charset?: Charset): CharStream {
    // 	if (charset === undefined) {
    // 		charset = Charset.forName("UTF-8");
    // 	}
    function fromString(s, sourceName) {
        if (sourceName === undefined || sourceName.length === 0) {
            sourceName = IntStream_1.IntStream.UNKNOWN_SOURCE_NAME;
        }
        // Initial guess assumes no code points > U+FFFF: one code
        // point for each code unit in the string
        let codePointBufferBuilder = CodePointBuffer_1.CodePointBuffer.builder(s.length);
        // TODO: CharBuffer.wrap(String) rightfully returns a read-only buffer
        // which doesn't expose its array, so we make a copy.
        let cb = new Uint16Array(s.length);
        for (let i = 0; i < s.length; i++) {
            cb[i] = s.charCodeAt(i);
        }
        codePointBufferBuilder.append(cb);
        return CodePointCharStream_1.CodePointCharStream.fromBuffer(codePointBufferBuilder.build(), sourceName);
    }
    CharStreams.fromString = fromString;
    // export function bufferFromChannel(
    // 	channel: ReadableByteChannel,
    // 	charset: Charset,
    // 	bufferSize: number,
    // 	decodingErrorAction: CodingErrorAction,
    // 	inputSize: number): CodePointBuffer {
    // 	try {
    // 		let utf8BytesIn: Uint8Array = new Uint8Array(bufferSize);
    // 		let utf16CodeUnitsOut: Uint16Array = new Uint16Array(bufferSize);
    // 		if (inputSize === -1) {
    // 			inputSize = bufferSize;
    // 		} else if (inputSize > Integer.MAX_VALUE) {
    // 			// ByteBuffer et al don't support long sizes
    // 			throw new RangeError(`inputSize ${inputSize} larger than max ${Integer.MAX_VALUE}`);
    // 		}
    // 		let codePointBufferBuilder: CodePointBuffer.Builder = CodePointBuffer.builder(inputSize);
    // 		let decoder: CharsetDecoder = charset
    // 				.newDecoder()
    // 				.onMalformedInput(decodingErrorAction)
    // 				.onUnmappableCharacter(decodingErrorAction);
    // 		let endOfInput: boolean = false;
    // 		while (!endOfInput) {
    // 			let bytesRead: number = channel.read(utf8BytesIn);
    // 			endOfInput = (bytesRead === -1);
    // 			utf8BytesIn.flip();
    // 			let result: CoderResult = decoder.decode(
    // 				utf8BytesIn,
    // 				utf16CodeUnitsOut,
    // 				endOfInput);
    // 			if (result.isError() && decodingErrorAction === CodingErrorAction.REPORT) {
    // 				result.throwException();
    // 			}
    // 			utf16CodeUnitsOut.flip();
    // 			codePointBufferBuilder.append(utf16CodeUnitsOut);
    // 			utf8BytesIn.compact();
    // 			utf16CodeUnitsOut.compact();
    // 		}
    // 		// Handle any bytes at the end of the file which need to
    // 		// be represented as errors or substitution characters.
    // 		let flushResult: CoderResult = decoder.flush(utf16CodeUnitsOut);
    // 		if (flushResult.isError() && decodingErrorAction === CodingErrorAction.REPORT) {
    // 			flushResult.throwException();
    // 		}
    // 		utf16CodeUnitsOut.flip();
    // 		codePointBufferBuilder.append(utf16CodeUnitsOut);
    // 		return codePointBufferBuilder.build();
    // 	}
    // 	finally {
    // 		channel.close();
    // 	}
    // }
})(exports.CharStreams || (exports.CharStreams = {}));

});

var BufferedTokenStream_1 = createCommonjsModule(function (module, exports) {
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
exports.BufferedTokenStream = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:49.6074365-07:00






/**
 * This implementation of {@link TokenStream} loads tokens from a
 * {@link TokenSource} on-demand, and places the tokens in a buffer to provide
 * access to any previous token by index.
 *
 * This token stream ignores the value of {@link Token#getChannel}. If your
 * parser requires the token stream filter tokens to only those on a particular
 * channel, such as {@link Token#DEFAULT_CHANNEL} or
 * {@link Token#HIDDEN_CHANNEL}, use a filtering token stream such a
 * {@link CommonTokenStream}.
 */
let BufferedTokenStream = class BufferedTokenStream {
    constructor(tokenSource) {
        /**
         * A collection of all tokens fetched from the token source. The list is
         * considered a complete view of the input once {@link #fetchedEOF} is set
         * to `true`.
         */
        this.tokens = [];
        /**
         * The index into {@link #tokens} of the current token (next token to
         * {@link #consume}). {@link #tokens}`[`{@link #p}`]` should be
         * {@link #LT LT(1)}.
         *
         * This field is set to -1 when the stream is first constructed or when
         * {@link #setTokenSource} is called, indicating that the first token has
         * not yet been fetched from the token source. For additional information,
         * see the documentation of {@link IntStream} for a description of
         * Initializing Methods.
         */
        this.p = -1;
        /**
         * Indicates whether the {@link Token#EOF} token has been fetched from
         * {@link #tokenSource} and added to {@link #tokens}. This field improves
         * performance for the following cases:
         *
         * * {@link #consume}: The lookahead check in {@link #consume} to prevent
         *   consuming the EOF symbol is optimized by checking the values of
         *   {@link #fetchedEOF} and {@link #p} instead of calling {@link #LA}.
         * * {@link #fetch}: The check to prevent adding multiple EOF symbols into
         *   {@link #tokens} is trivial with this field.
         */
        this.fetchedEOF = false;
        if (tokenSource == null) {
            throw new Error("tokenSource cannot be null");
        }
        this._tokenSource = tokenSource;
    }
    get tokenSource() {
        return this._tokenSource;
    }
    /** Reset this token stream by setting its token source. */
    set tokenSource(tokenSource) {
        this._tokenSource = tokenSource;
        this.tokens.length = 0;
        this.p = -1;
        this.fetchedEOF = false;
    }
    get index() {
        return this.p;
    }
    mark() {
        return 0;
    }
    release(marker) {
        // no resources to release
    }
    seek(index) {
        this.lazyInit();
        this.p = this.adjustSeekIndex(index);
    }
    get size() {
        return this.tokens.length;
    }
    consume() {
        let skipEofCheck;
        if (this.p >= 0) {
            if (this.fetchedEOF) {
                // the last token in tokens is EOF. skip check if p indexes any
                // fetched token except the last.
                skipEofCheck = this.p < this.tokens.length - 1;
            }
            else {
                // no EOF token in tokens. skip check if p indexes a fetched token.
                skipEofCheck = this.p < this.tokens.length;
            }
        }
        else {
            // not yet initialized
            skipEofCheck = false;
        }
        if (!skipEofCheck && this.LA(1) === Token_1.Token.EOF) {
            throw new Error("cannot consume EOF");
        }
        if (this.sync(this.p + 1)) {
            this.p = this.adjustSeekIndex(this.p + 1);
        }
    }
    /** Make sure index `i` in tokens has a token.
     *
     * @returns `true` if a token is located at index `i`, otherwise
     *    `false`.
     * @see #get(int i)
     */
    sync(i) {
        assert(i >= 0);
        let n = i - this.tokens.length + 1; // how many more elements we need?
        //System.out.println("sync("+i+") needs "+n);
        if (n > 0) {
            let fetched = this.fetch(n);
            return fetched >= n;
        }
        return true;
    }
    /** Add `n` elements to buffer.
     *
     * @returns The actual number of elements added to the buffer.
     */
    fetch(n) {
        if (this.fetchedEOF) {
            return 0;
        }
        for (let i = 0; i < n; i++) {
            let t = this.tokenSource.nextToken();
            if (this.isWritableToken(t)) {
                t.tokenIndex = this.tokens.length;
            }
            this.tokens.push(t);
            if (t.type === Token_1.Token.EOF) {
                this.fetchedEOF = true;
                return i + 1;
            }
        }
        return n;
    }
    get(i) {
        if (i < 0 || i >= this.tokens.length) {
            throw new RangeError("token index " + i + " out of range 0.." + (this.tokens.length - 1));
        }
        return this.tokens[i];
    }
    /** Get all tokens from start..stop inclusively. */
    getRange(start, stop) {
        if (start < 0 || stop < 0) {
            return [];
        }
        this.lazyInit();
        let subset = new Array();
        if (stop >= this.tokens.length) {
            stop = this.tokens.length - 1;
        }
        for (let i = start; i <= stop; i++) {
            let t = this.tokens[i];
            if (t.type === Token_1.Token.EOF) {
                break;
            }
            subset.push(t);
        }
        return subset;
    }
    LA(i) {
        let token = this.LT(i);
        if (!token) {
            return Token_1.Token.INVALID_TYPE;
        }
        return token.type;
    }
    tryLB(k) {
        if ((this.p - k) < 0) {
            return undefined;
        }
        return this.tokens[this.p - k];
    }
    LT(k) {
        let result = this.tryLT(k);
        if (result === undefined) {
            throw new RangeError("requested lookback index out of range");
        }
        return result;
    }
    tryLT(k) {
        this.lazyInit();
        if (k === 0) {
            throw new RangeError("0 is not a valid lookahead index");
        }
        if (k < 0) {
            return this.tryLB(-k);
        }
        let i = this.p + k - 1;
        this.sync(i);
        if (i >= this.tokens.length) {
            // return EOF token
            // EOF must be last token
            return this.tokens[this.tokens.length - 1];
        }
        //		if ( i>range ) range = i;
        return this.tokens[i];
    }
    /**
     * Allowed derived classes to modify the behavior of operations which change
     * the current stream position by adjusting the target token index of a seek
     * operation. The default implementation simply returns `i`. If an
     * exception is thrown in this method, the current stream index should not be
     * changed.
     *
     * For example, {@link CommonTokenStream} overrides this method to ensure that
     * the seek target is always an on-channel token.
     *
     * @param i The target token index.
     * @returns The adjusted target token index.
     */
    adjustSeekIndex(i) {
        return i;
    }
    lazyInit() {
        if (this.p === -1) {
            this.setup();
        }
    }
    setup() {
        this.sync(0);
        this.p = this.adjustSeekIndex(0);
    }
    /** Given a start and stop index, return a `List` of all tokens in
     *  the token type `BitSet`.  Return an empty array if no tokens were found.  This
     *  method looks at both on and off channel tokens.
     */
    getTokens(start, stop, types) {
        this.lazyInit();
        if (start === undefined) {
            assert(stop === undefined && types === undefined);
            return this.tokens;
        }
        else if (stop === undefined) {
            stop = this.tokens.length - 1;
        }
        if (start < 0 || stop >= this.tokens.length || stop < 0 || start >= this.tokens.length) {
            throw new RangeError("start " + start + " or stop " + stop + " not in 0.." + (this.tokens.length - 1));
        }
        if (start > stop) {
            return [];
        }
        if (types === undefined) {
            return this.tokens.slice(start, stop + 1);
        }
        else if (typeof types === "number") {
            types = new Set().add(types);
        }
        let typesSet = types;
        // list = tokens[start:stop]:{T t, t.type in types}
        let filteredTokens = this.tokens.slice(start, stop + 1);
        filteredTokens = filteredTokens.filter((value) => typesSet.has(value.type));
        return filteredTokens;
    }
    /**
     * Given a starting index, return the index of the next token on channel.
     * Return `i` if `tokens[i]` is on channel. Return the index of
     * the EOF token if there are no tokens on channel between `i` and
     * EOF.
     */
    nextTokenOnChannel(i, channel) {
        this.sync(i);
        if (i >= this.size) {
            return this.size - 1;
        }
        let token = this.tokens[i];
        while (token.channel !== channel) {
            if (token.type === Token_1.Token.EOF) {
                return i;
            }
            i++;
            this.sync(i);
            token = this.tokens[i];
        }
        return i;
    }
    /**
     * Given a starting index, return the index of the previous token on
     * channel. Return `i` if `tokens[i]` is on channel. Return -1
     * if there are no tokens on channel between `i` and 0.
     *
     * If `i` specifies an index at or after the EOF token, the EOF token
     * index is returned. This is due to the fact that the EOF token is treated
     * as though it were on every channel.
     */
    previousTokenOnChannel(i, channel) {
        this.sync(i);
        if (i >= this.size) {
            // the EOF token is on every channel
            return this.size - 1;
        }
        while (i >= 0) {
            let token = this.tokens[i];
            if (token.type === Token_1.Token.EOF || token.channel === channel) {
                return i;
            }
            i--;
        }
        return i;
    }
    /** Collect all tokens on specified channel to the right of
     *  the current token up until we see a token on {@link Lexer#DEFAULT_TOKEN_CHANNEL} or
     *  EOF. If `channel` is `-1`, find any non default channel token.
     */
    getHiddenTokensToRight(tokenIndex, channel = -1) {
        this.lazyInit();
        if (tokenIndex < 0 || tokenIndex >= this.tokens.length) {
            throw new RangeError(tokenIndex + " not in 0.." + (this.tokens.length - 1));
        }
        let nextOnChannel = this.nextTokenOnChannel(tokenIndex + 1, Lexer_1.Lexer.DEFAULT_TOKEN_CHANNEL);
        let to;
        let from = tokenIndex + 1;
        // if none onchannel to right, nextOnChannel=-1 so set to = last token
        if (nextOnChannel === -1) {
            to = this.size - 1;
        }
        else {
            to = nextOnChannel;
        }
        return this.filterForChannel(from, to, channel);
    }
    /** Collect all tokens on specified channel to the left of
     *  the current token up until we see a token on {@link Lexer#DEFAULT_TOKEN_CHANNEL}.
     *  If `channel` is `-1`, find any non default channel token.
     */
    getHiddenTokensToLeft(tokenIndex, channel = -1) {
        this.lazyInit();
        if (tokenIndex < 0 || tokenIndex >= this.tokens.length) {
            throw new RangeError(tokenIndex + " not in 0.." + (this.tokens.length - 1));
        }
        if (tokenIndex === 0) {
            // obviously no tokens can appear before the first token
            return [];
        }
        let prevOnChannel = this.previousTokenOnChannel(tokenIndex - 1, Lexer_1.Lexer.DEFAULT_TOKEN_CHANNEL);
        if (prevOnChannel === tokenIndex - 1) {
            return [];
        }
        // if none onchannel to left, prevOnChannel=-1 then from=0
        let from = prevOnChannel + 1;
        let to = tokenIndex - 1;
        return this.filterForChannel(from, to, channel);
    }
    filterForChannel(from, to, channel) {
        let hidden = new Array();
        for (let i = from; i <= to; i++) {
            let t = this.tokens[i];
            if (channel === -1) {
                if (t.channel !== Lexer_1.Lexer.DEFAULT_TOKEN_CHANNEL) {
                    hidden.push(t);
                }
            }
            else {
                if (t.channel === channel) {
                    hidden.push(t);
                }
            }
        }
        return hidden;
    }
    get sourceName() {
        return this.tokenSource.sourceName;
    }
    getText(interval) {
        if (interval === undefined) {
            interval = Interval_1.Interval.of(0, this.size - 1);
        }
        else if (!(interval instanceof Interval_1.Interval)) {
            // Note: the more obvious check for 'instanceof RuleContext' results in a circular dependency problem
            interval = interval.sourceInterval;
        }
        let start = interval.a;
        let stop = interval.b;
        if (start < 0 || stop < 0) {
            return "";
        }
        this.fill();
        if (stop >= this.tokens.length) {
            stop = this.tokens.length - 1;
        }
        let buf = "";
        for (let i = start; i <= stop; i++) {
            let t = this.tokens[i];
            if (t.type === Token_1.Token.EOF) {
                break;
            }
            buf += t.text;
        }
        return buf.toString();
    }
    getTextFromRange(start, stop) {
        if (this.isToken(start) && this.isToken(stop)) {
            return this.getText(Interval_1.Interval.of(start.tokenIndex, stop.tokenIndex));
        }
        return "";
    }
    /** Get all tokens from lexer until EOF. */
    fill() {
        this.lazyInit();
        const blockSize = 1000;
        while (true) {
            let fetched = this.fetch(blockSize);
            if (fetched < blockSize) {
                return;
            }
        }
    }
    // TODO: Figure out a way to make this more flexible?
    isWritableToken(t) {
        return t instanceof CommonToken_1.CommonToken;
    }
    // TODO: Figure out a way to make this more flexible?
    isToken(t) {
        return t instanceof CommonToken_1.CommonToken;
    }
};
__decorate([
    Decorators.NotNull
], BufferedTokenStream.prototype, "_tokenSource", void 0);
__decorate([
    Decorators.Override
], BufferedTokenStream.prototype, "tokenSource", null);
__decorate([
    Decorators.Override
], BufferedTokenStream.prototype, "index", null);
__decorate([
    Decorators.Override
], BufferedTokenStream.prototype, "mark", null);
__decorate([
    Decorators.Override
], BufferedTokenStream.prototype, "release", null);
__decorate([
    Decorators.Override
], BufferedTokenStream.prototype, "seek", null);
__decorate([
    Decorators.Override
], BufferedTokenStream.prototype, "size", null);
__decorate([
    Decorators.Override
], BufferedTokenStream.prototype, "consume", null);
__decorate([
    Decorators.Override
], BufferedTokenStream.prototype, "get", null);
__decorate([
    Decorators.Override
], BufferedTokenStream.prototype, "LA", null);
__decorate([
    Decorators.NotNull,
    Decorators.Override
], BufferedTokenStream.prototype, "LT", null);
__decorate([
    Decorators.Override
], BufferedTokenStream.prototype, "sourceName", null);
__decorate([
    Decorators.NotNull,
    Decorators.Override
], BufferedTokenStream.prototype, "getText", null);
__decorate([
    Decorators.NotNull,
    Decorators.Override
], BufferedTokenStream.prototype, "getTextFromRange", null);
BufferedTokenStream = __decorate([
    __param(0, Decorators.NotNull)
], BufferedTokenStream);
exports.BufferedTokenStream = BufferedTokenStream;

});

var CommonTokenStream_1 = createCommonjsModule(function (module, exports) {
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
exports.CommonTokenStream = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:50.3953157-07:00



/**
 * This class extends {@link BufferedTokenStream} with functionality to filter
 * token streams to tokens on a particular channel (tokens where
 * {@link Token#getChannel} returns a particular value).
 *
 * This token stream provides access to all tokens by index or when calling
 * methods like {@link #getText}. The channel filtering is only used for code
 * accessing tokens via the lookahead methods {@link #LA}, {@link #LT}, and
 * {@link #LB}.
 *
 * By default, tokens are placed on the default channel
 * ({@link Token#DEFAULT_CHANNEL}), but may be reassigned by using the
 * `->channel(HIDDEN)` lexer command, or by using an embedded action to
 * call {@link Lexer#setChannel}.
 *
 * Note: lexer rules which use the `->skip` lexer command or call
 * {@link Lexer#skip} do not produce tokens at all, so input text matched by
 * such a rule will not be available as part of the token stream, regardless of
 * channel.
 */
let CommonTokenStream = class CommonTokenStream extends BufferedTokenStream_1.BufferedTokenStream {
    /**
     * Constructs a new {@link CommonTokenStream} using the specified token
     * source and filtering tokens to the specified channel. Only tokens whose
     * {@link Token#getChannel} matches `channel` or have the
     * `Token.type` equal to {@link Token#EOF} will be returned by the
     * token stream lookahead methods.
     *
     * @param tokenSource The token source.
     * @param channel The channel to use for filtering tokens.
     */
    constructor(tokenSource, channel = Token_1.Token.DEFAULT_CHANNEL) {
        super(tokenSource);
        this.channel = channel;
    }
    adjustSeekIndex(i) {
        return this.nextTokenOnChannel(i, this.channel);
    }
    tryLB(k) {
        if ((this.p - k) < 0) {
            return undefined;
        }
        let i = this.p;
        let n = 1;
        // find k good tokens looking backwards
        while (n <= k && i > 0) {
            // skip off-channel tokens
            i = this.previousTokenOnChannel(i - 1, this.channel);
            n++;
        }
        if (i < 0) {
            return undefined;
        }
        return this.tokens[i];
    }
    tryLT(k) {
        //System.out.println("enter LT("+k+")");
        this.lazyInit();
        if (k === 0) {
            throw new RangeError("0 is not a valid lookahead index");
        }
        if (k < 0) {
            return this.tryLB(-k);
        }
        let i = this.p;
        let n = 1; // we know tokens[p] is a good one
        // find k good tokens
        while (n < k) {
            // skip off-channel tokens, but make sure to not look past EOF
            if (this.sync(i + 1)) {
                i = this.nextTokenOnChannel(i + 1, this.channel);
            }
            n++;
        }
        //		if ( i>range ) range = i;
        return this.tokens[i];
    }
    /** Count EOF just once. */
    getNumberOfOnChannelTokens() {
        let n = 0;
        this.fill();
        for (let t of this.tokens) {
            if (t.channel === this.channel) {
                n++;
            }
            if (t.type === Token_1.Token.EOF) {
                break;
            }
        }
        return n;
    }
};
__decorate([
    Decorators.Override
], CommonTokenStream.prototype, "adjustSeekIndex", null);
__decorate([
    Decorators.Override
], CommonTokenStream.prototype, "tryLB", null);
__decorate([
    Decorators.Override
], CommonTokenStream.prototype, "tryLT", null);
CommonTokenStream = __decorate([
    __param(0, Decorators.NotNull)
], CommonTokenStream);
exports.CommonTokenStream = CommonTokenStream;

});

var ListTokenSource_1 = createCommonjsModule(function (module, exports) {
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
exports.ListTokenSource = void 0;



/**
 * Provides an implementation of {@link TokenSource} as a wrapper around a list
 * of {@link Token} objects.
 *
 * If the final token in the list is an {@link Token#EOF} token, it will be used
 * as the EOF token for every call to {@link #nextToken} after the end of the
 * list is reached. Otherwise, an EOF token will be created.
 */
let ListTokenSource = class ListTokenSource {
    /**
     * Constructs a new {@link ListTokenSource} instance from the specified
     * collection of {@link Token} objects and source name.
     *
     * @param tokens The collection of {@link Token} objects to provide as a
     * {@link TokenSource}.
     * @param sourceName The name of the {@link TokenSource}. If this value is
     * `undefined`, {@link #getSourceName} will attempt to infer the name from
     * the next {@link Token} (or the previous token if the end of the input has
     * been reached).
     *
     * @exception NullPointerException if `tokens` is `undefined`
     */
    constructor(tokens, sourceName) {
        /**
         * The index into {@link #tokens} of token to return by the next call to
         * {@link #nextToken}. The end of the input is indicated by this value
         * being greater than or equal to the number of items in {@link #tokens}.
         */
        this.i = 0;
        /**
         * This is the backing field for {@link #getTokenFactory} and
         * {@link setTokenFactory}.
         */
        this._factory = CommonTokenFactory_1.CommonTokenFactory.DEFAULT;
        if (tokens == null) {
            throw new Error("tokens cannot be null");
        }
        this.tokens = tokens;
        this._sourceName = sourceName;
    }
    /**
     * {@inheritDoc}
     */
    get charPositionInLine() {
        if (this.i < this.tokens.length) {
            return this.tokens[this.i].charPositionInLine;
        }
        else if (this.eofToken != null) {
            return this.eofToken.charPositionInLine;
        }
        else if (this.tokens.length > 0) {
            // have to calculate the result from the line/column of the previous
            // token, along with the text of the token.
            let lastToken = this.tokens[this.tokens.length - 1];
            let tokenText = lastToken.text;
            if (tokenText != null) {
                let lastNewLine = tokenText.lastIndexOf("\n");
                if (lastNewLine >= 0) {
                    return tokenText.length - lastNewLine - 1;
                }
            }
            return lastToken.charPositionInLine + lastToken.stopIndex - lastToken.startIndex + 1;
        }
        // only reach this if tokens is empty, meaning EOF occurs at the first
        // position in the input
        return 0;
    }
    /**
     * {@inheritDoc}
     */
    nextToken() {
        if (this.i >= this.tokens.length) {
            if (this.eofToken == null) {
                let start = -1;
                if (this.tokens.length > 0) {
                    let previousStop = this.tokens[this.tokens.length - 1].stopIndex;
                    if (previousStop !== -1) {
                        start = previousStop + 1;
                    }
                }
                let stop = Math.max(-1, start - 1);
                this.eofToken = this._factory.create({ source: this, stream: this.inputStream }, Token_1.Token.EOF, "EOF", Token_1.Token.DEFAULT_CHANNEL, start, stop, this.line, this.charPositionInLine);
            }
            return this.eofToken;
        }
        let t = this.tokens[this.i];
        if (this.i === this.tokens.length - 1 && t.type === Token_1.Token.EOF) {
            this.eofToken = t;
        }
        this.i++;
        return t;
    }
    /**
     * {@inheritDoc}
     */
    get line() {
        if (this.i < this.tokens.length) {
            return this.tokens[this.i].line;
        }
        else if (this.eofToken != null) {
            return this.eofToken.line;
        }
        else if (this.tokens.length > 0) {
            // have to calculate the result from the line/column of the previous
            // token, along with the text of the token.
            let lastToken = this.tokens[this.tokens.length - 1];
            let line = lastToken.line;
            let tokenText = lastToken.text;
            if (tokenText != null) {
                for (let i = 0; i < tokenText.length; i++) {
                    if (tokenText.charAt(i) === "\n") {
                        line++;
                    }
                }
            }
            // if no text is available, assume the token did not contain any newline characters.
            return line;
        }
        // only reach this if tokens is empty, meaning EOF occurs at the first
        // position in the input
        return 1;
    }
    /**
     * {@inheritDoc}
     */
    get inputStream() {
        if (this.i < this.tokens.length) {
            return this.tokens[this.i].inputStream;
        }
        else if (this.eofToken != null) {
            return this.eofToken.inputStream;
        }
        else if (this.tokens.length > 0) {
            return this.tokens[this.tokens.length - 1].inputStream;
        }
        // no input stream information is available
        return undefined;
    }
    /**
     * {@inheritDoc}
     */
    get sourceName() {
        if (this._sourceName) {
            return this._sourceName;
        }
        let inputStream = this.inputStream;
        if (inputStream != null) {
            return inputStream.sourceName;
        }
        return "List";
    }
    /**
     * {@inheritDoc}
     */
    // @Override
    set tokenFactory(factory) {
        this._factory = factory;
    }
    /**
     * {@inheritDoc}
     */
    get tokenFactory() {
        return this._factory;
    }
};
__decorate([
    Decorators.Override
], ListTokenSource.prototype, "charPositionInLine", null);
__decorate([
    Decorators.Override
], ListTokenSource.prototype, "nextToken", null);
__decorate([
    Decorators.Override
], ListTokenSource.prototype, "line", null);
__decorate([
    Decorators.Override
], ListTokenSource.prototype, "inputStream", null);
__decorate([
    Decorators.Override
], ListTokenSource.prototype, "sourceName", null);
__decorate([
    Decorators.Override,
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
], ListTokenSource.prototype, "tokenFactory", null);
ListTokenSource = __decorate([
    __param(0, Decorators.NotNull)
], ListTokenSource);
exports.ListTokenSource = ListTokenSource;

});

var MultiMap_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiMap = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:42.1346951-07:00
class MultiMap extends Map {
    constructor() {
        super();
    }
    map(key, value) {
        let elementsForKey = super.get(key);
        if (!elementsForKey) {
            elementsForKey = [];
            super.set(key, elementsForKey);
        }
        elementsForKey.push(value);
    }
    getPairs() {
        let pairs = [];
        this.forEach((values, key) => {
            values.forEach((v) => {
                pairs.push([key, v]);
            });
        });
        return pairs;
    }
}
exports.MultiMap = MultiMap;

});

var ParseCancellationException_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseCancellationException = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:42.5447085-07:00
/**
 * This exception is thrown to cancel a parsing operation. This exception does
 * not extend {@link RecognitionException}, allowing it to bypass the standard
 * error recovery mechanisms. {@link BailErrorStrategy} throws this exception in
 * response to a parse error.
 *
 * @author Sam Harwell
 */
class ParseCancellationException extends Error {
    constructor(cause) {
        super(cause.message);
        this.cause = cause;
        this.stack = cause.stack;
    }
    getCause() {
        return this.cause;
    }
}
exports.ParseCancellationException = ParseCancellationException;

});

var InterpreterRuleContext_1 = createCommonjsModule(function (module, exports) {
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
exports.InterpreterRuleContext = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:51.5898546-07:00


/**
 * This class extends {@link ParserRuleContext} by allowing the value of
 * {@link #getRuleIndex} to be explicitly set for the context.
 *
 * {@link ParserRuleContext} does not include field storage for the rule index
 * since the context classes created by the code generator override the
 * {@link #getRuleIndex} method to return the correct value for that context.
 * Since the parser interpreter does not use the context classes generated for a
 * parser, this class (with slightly more memory overhead per node) is used to
 * provide equivalent functionality.
 */
class InterpreterRuleContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(ruleIndex, parent, invokingStateNumber) {
        if (invokingStateNumber !== undefined) {
            super(parent, invokingStateNumber);
        }
        else {
            super();
        }
        this._ruleIndex = ruleIndex;
    }
    get ruleIndex() {
        return this._ruleIndex;
    }
}
__decorate([
    Decorators.Override
], InterpreterRuleContext.prototype, "ruleIndex", null);
exports.InterpreterRuleContext = InterpreterRuleContext;

});

var ParserInterpreter_1 = createCommonjsModule(function (module, exports) {
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
exports.ParserInterpreter = void 0;








const Decorators_2 = Decorators;





/** A parser simulator that mimics what ANTLR's generated
 *  parser code does. A ParserATNSimulator is used to make
 *  predictions via adaptivePredict but this class moves a pointer through the
 *  ATN to simulate parsing. ParserATNSimulator just
 *  makes us efficient rather than having to backtrack, for example.
 *
 *  This properly creates parse trees even for left recursive rules.
 *
 *  We rely on the left recursive rule invocation and special predicate
 *  transitions to make left recursive rules work.
 *
 *  See TestParserInterpreter for examples.
 */
let ParserInterpreter = class ParserInterpreter extends Parser_1.Parser {
    constructor(grammarFileName, vocabulary, ruleNames, atn, input) {
        super(grammarFileName instanceof ParserInterpreter ? grammarFileName.inputStream : input);
        /** This stack corresponds to the _parentctx, _parentState pair of locals
         *  that would exist on call stack frames with a recursive descent parser;
         *  in the generated function for a left-recursive rule you'd see:
         *
         *  private EContext e(int _p) {
         *      ParserRuleContext _parentctx = _ctx;    // Pair.a
         *      int _parentState = state;          // Pair.b
         *      ...
         *  }
         *
         *  Those values are used to create new recursive rule invocation contexts
         *  associated with left operand of an alt like "expr '*' expr".
         */
        this._parentContextStack = [];
        /** We need a map from (decision,inputIndex)->forced alt for computing ambiguous
         *  parse trees. For now, we allow exactly one override.
         */
        this.overrideDecision = -1;
        this.overrideDecisionInputIndex = -1;
        this.overrideDecisionAlt = -1;
        this.overrideDecisionReached = false; // latch and only override once; error might trigger infinite loop
        /** What is the current context when we override a decisions?  This tells
         *  us what the root of the parse tree is when using override
         *  for an ambiguity/lookahead check.
         */
        this._overrideDecisionRoot = undefined;
        if (grammarFileName instanceof ParserInterpreter) {
            let old = grammarFileName;
            this._grammarFileName = old._grammarFileName;
            this._atn = old._atn;
            this.pushRecursionContextStates = old.pushRecursionContextStates;
            this._ruleNames = old._ruleNames;
            this._vocabulary = old._vocabulary;
            this.interpreter = new ParserATNSimulator_1.ParserATNSimulator(this._atn, this);
        }
        else {
            // The second constructor requires non-null arguments
            vocabulary = vocabulary;
            ruleNames = ruleNames;
            atn = atn;
            this._grammarFileName = grammarFileName;
            this._atn = atn;
            this._ruleNames = ruleNames.slice(0);
            this._vocabulary = vocabulary;
            // identify the ATN states where pushNewRecursionContext() must be called
            this.pushRecursionContextStates = new BitSet_1.BitSet(atn.states.length);
            for (let state of atn.states) {
                if (!(state instanceof StarLoopEntryState_1.StarLoopEntryState)) {
                    continue;
                }
                if (state.precedenceRuleDecision) {
                    this.pushRecursionContextStates.set(state.stateNumber);
                }
            }
            // get atn simulator that knows how to do predictions
            this.interpreter = new ParserATNSimulator_1.ParserATNSimulator(atn, this);
        }
    }
    reset(resetInput) {
        if (resetInput === undefined) {
            super.reset();
        }
        else {
            super.reset(resetInput);
        }
        this.overrideDecisionReached = false;
        this._overrideDecisionRoot = undefined;
    }
    get atn() {
        return this._atn;
    }
    get vocabulary() {
        return this._vocabulary;
    }
    get ruleNames() {
        return this._ruleNames;
    }
    get grammarFileName() {
        return this._grammarFileName;
    }
    /** Begin parsing at startRuleIndex */
    parse(startRuleIndex) {
        let startRuleStartState = this._atn.ruleToStartState[startRuleIndex];
        this._rootContext = this.createInterpreterRuleContext(undefined, ATNState_1.ATNState.INVALID_STATE_NUMBER, startRuleIndex);
        if (startRuleStartState.isPrecedenceRule) {
            this.enterRecursionRule(this._rootContext, startRuleStartState.stateNumber, startRuleIndex, 0);
        }
        else {
            this.enterRule(this._rootContext, startRuleStartState.stateNumber, startRuleIndex);
        }
        while (true) {
            let p = this.atnState;
            switch (p.stateType) {
                case ATNStateType_1.ATNStateType.RULE_STOP:
                    // pop; return from rule
                    if (this._ctx.isEmpty) {
                        if (startRuleStartState.isPrecedenceRule) {
                            let result = this._ctx;
                            let parentContext = this._parentContextStack.pop();
                            this.unrollRecursionContexts(parentContext[0]);
                            return result;
                        }
                        else {
                            this.exitRule();
                            return this._rootContext;
                        }
                    }
                    this.visitRuleStopState(p);
                    break;
                default:
                    try {
                        this.visitState(p);
                    }
                    catch (e) {
                        if (e instanceof RecognitionException_1.RecognitionException) {
                            this.state = this._atn.ruleToStopState[p.ruleIndex].stateNumber;
                            this.context.exception = e;
                            this.errorHandler.reportError(this, e);
                            this.recover(e);
                        }
                        else {
                            throw e;
                        }
                    }
                    break;
            }
        }
    }
    enterRecursionRule(localctx, state, ruleIndex, precedence) {
        this._parentContextStack.push([this._ctx, localctx.invokingState]);
        super.enterRecursionRule(localctx, state, ruleIndex, precedence);
    }
    get atnState() {
        return this._atn.states[this.state];
    }
    visitState(p) {
        let predictedAlt = 1;
        if (p.numberOfTransitions > 1) {
            predictedAlt = this.visitDecisionState(p);
        }
        let transition = p.transition(predictedAlt - 1);
        switch (transition.serializationType) {
            case 1 /* EPSILON */:
                if (this.pushRecursionContextStates.get(p.stateNumber) &&
                    !(transition.target instanceof LoopEndState_1.LoopEndState)) {
                    // We are at the start of a left recursive rule's (...)* loop
                    // and we're not taking the exit branch of loop.
                    let parentContext = this._parentContextStack[this._parentContextStack.length - 1];
                    let localctx = this.createInterpreterRuleContext(parentContext[0], parentContext[1], this._ctx.ruleIndex);
                    this.pushNewRecursionContext(localctx, this._atn.ruleToStartState[p.ruleIndex].stateNumber, this._ctx.ruleIndex);
                }
                break;
            case 5 /* ATOM */:
                this.match(transition._label);
                break;
            case 2 /* RANGE */:
            case 7 /* SET */:
            case 8 /* NOT_SET */:
                if (!transition.matches(this._input.LA(1), Token_1.Token.MIN_USER_TOKEN_TYPE, 65535)) {
                    this.recoverInline();
                }
                this.matchWildcard();
                break;
            case 9 /* WILDCARD */:
                this.matchWildcard();
                break;
            case 3 /* RULE */:
                let ruleStartState = transition.target;
                let ruleIndex = ruleStartState.ruleIndex;
                let newctx = this.createInterpreterRuleContext(this._ctx, p.stateNumber, ruleIndex);
                if (ruleStartState.isPrecedenceRule) {
                    this.enterRecursionRule(newctx, ruleStartState.stateNumber, ruleIndex, transition.precedence);
                }
                else {
                    this.enterRule(newctx, transition.target.stateNumber, ruleIndex);
                }
                break;
            case 4 /* PREDICATE */:
                let predicateTransition = transition;
                if (!this.sempred(this._ctx, predicateTransition.ruleIndex, predicateTransition.predIndex)) {
                    throw new FailedPredicateException_1.FailedPredicateException(this);
                }
                break;
            case 6 /* ACTION */:
                let actionTransition = transition;
                this.action(this._ctx, actionTransition.ruleIndex, actionTransition.actionIndex);
                break;
            case 10 /* PRECEDENCE */:
                if (!this.precpred(this._ctx, transition.precedence)) {
                    let precedence = transition.precedence;
                    throw new FailedPredicateException_1.FailedPredicateException(this, `precpred(_ctx, ${precedence})`);
                }
                break;
            default:
                throw new Error("UnsupportedOperationException: Unrecognized ATN transition type.");
        }
        this.state = transition.target.stateNumber;
    }
    /** Method visitDecisionState() is called when the interpreter reaches
     *  a decision state (instance of DecisionState). It gives an opportunity
     *  for subclasses to track interesting things.
     */
    visitDecisionState(p) {
        let predictedAlt;
        this.errorHandler.sync(this);
        let decision = p.decision;
        if (decision === this.overrideDecision && this._input.index === this.overrideDecisionInputIndex && !this.overrideDecisionReached) {
            predictedAlt = this.overrideDecisionAlt;
            this.overrideDecisionReached = true;
        }
        else {
            predictedAlt = this.interpreter.adaptivePredict(this._input, decision, this._ctx);
        }
        return predictedAlt;
    }
    /** Provide simple "factory" for InterpreterRuleContext's.
     *  @since 4.5.1
     */
    createInterpreterRuleContext(parent, invokingStateNumber, ruleIndex) {
        return new InterpreterRuleContext_1.InterpreterRuleContext(ruleIndex, parent, invokingStateNumber);
    }
    visitRuleStopState(p) {
        let ruleStartState = this._atn.ruleToStartState[p.ruleIndex];
        if (ruleStartState.isPrecedenceRule) {
            let parentContext = this._parentContextStack.pop();
            this.unrollRecursionContexts(parentContext[0]);
            this.state = parentContext[1];
        }
        else {
            this.exitRule();
        }
        let ruleTransition = this._atn.states[this.state].transition(0);
        this.state = ruleTransition.followState.stateNumber;
    }
    /** Override this parser interpreters normal decision-making process
     *  at a particular decision and input token index. Instead of
     *  allowing the adaptive prediction mechanism to choose the
     *  first alternative within a block that leads to a successful parse,
     *  force it to take the alternative, 1..n for n alternatives.
     *
     *  As an implementation limitation right now, you can only specify one
     *  override. This is sufficient to allow construction of different
     *  parse trees for ambiguous input. It means re-parsing the entire input
     *  in general because you're never sure where an ambiguous sequence would
     *  live in the various parse trees. For example, in one interpretation,
     *  an ambiguous input sequence would be matched completely in expression
     *  but in another it could match all the way back to the root.
     *
     *  s : e '!'? ;
     *  e : ID
     *    | ID '!'
     *    ;
     *
     *  Here, x! can be matched as (s (e ID) !) or (s (e ID !)). In the first
     *  case, the ambiguous sequence is fully contained only by the root.
     *  In the second case, the ambiguous sequences fully contained within just
     *  e, as in: (e ID !).
     *
     *  Rather than trying to optimize this and make
     *  some intelligent decisions for optimization purposes, I settled on
     *  just re-parsing the whole input and then using
     *  {link Trees#getRootOfSubtreeEnclosingRegion} to find the minimal
     *  subtree that contains the ambiguous sequence. I originally tried to
     *  record the call stack at the point the parser detected and ambiguity but
     *  left recursive rules create a parse tree stack that does not reflect
     *  the actual call stack. That impedance mismatch was enough to make
     *  it it challenging to restart the parser at a deeply nested rule
     *  invocation.
     *
     *  Only parser interpreters can override decisions so as to avoid inserting
     *  override checking code in the critical ALL(*) prediction execution path.
     *
     *  @since 4.5
     */
    addDecisionOverride(decision, tokenIndex, forcedAlt) {
        this.overrideDecision = decision;
        this.overrideDecisionInputIndex = tokenIndex;
        this.overrideDecisionAlt = forcedAlt;
    }
    get overrideDecisionRoot() {
        return this._overrideDecisionRoot;
    }
    /** Rely on the error handler for this parser but, if no tokens are consumed
     *  to recover, add an error node. Otherwise, nothing is seen in the parse
     *  tree.
     */
    recover(e) {
        let i = this._input.index;
        this.errorHandler.recover(this, e);
        if (this._input.index === i) {
            // no input consumed, better add an error node
            let tok = e.getOffendingToken();
            if (!tok) {
                throw new Error("Expected exception to have an offending token");
            }
            let source = tok.tokenSource;
            let stream = source !== undefined ? source.inputStream : undefined;
            let sourcePair = { source, stream };
            if (e instanceof InputMismatchException_1.InputMismatchException) {
                let expectedTokens = e.expectedTokens;
                if (expectedTokens === undefined) {
                    throw new Error("Expected the exception to provide expected tokens");
                }
                let expectedTokenType = Token_1.Token.INVALID_TYPE;
                if (!expectedTokens.isNil) {
                    // get any element
                    expectedTokenType = expectedTokens.minElement;
                }
                let errToken = this.tokenFactory.create(sourcePair, expectedTokenType, tok.text, Token_1.Token.DEFAULT_CHANNEL, -1, -1, // invalid start/stop
                tok.line, tok.charPositionInLine);
                this._ctx.addErrorNode(this.createErrorNode(this._ctx, errToken));
            }
            else { // NoViableAlt
                let source = tok.tokenSource;
                let errToken = this.tokenFactory.create(sourcePair, Token_1.Token.INVALID_TYPE, tok.text, Token_1.Token.DEFAULT_CHANNEL, -1, -1, // invalid start/stop
                tok.line, tok.charPositionInLine);
                this._ctx.addErrorNode(this.createErrorNode(this._ctx, errToken));
            }
        }
    }
    recoverInline() {
        return this._errHandler.recoverInline(this);
    }
    /** Return the root of the parse, which can be useful if the parser
     *  bails out. You still can access the top node. Note that,
     *  because of the way left recursive rules add children, it's possible
     *  that the root will not have any children if the start rule immediately
     *  called and left recursive rule that fails.
     *
     * @since 4.5.1
     */
    get rootContext() {
        return this._rootContext;
    }
};
__decorate([
    Decorators.NotNull
], ParserInterpreter.prototype, "_vocabulary", void 0);
__decorate([
    Decorators_2.Override
], ParserInterpreter.prototype, "reset", null);
__decorate([
    Decorators_2.Override
], ParserInterpreter.prototype, "atn", null);
__decorate([
    Decorators_2.Override
], ParserInterpreter.prototype, "vocabulary", null);
__decorate([
    Decorators_2.Override
], ParserInterpreter.prototype, "ruleNames", null);
__decorate([
    Decorators_2.Override
], ParserInterpreter.prototype, "grammarFileName", null);
__decorate([
    Decorators_2.Override
], ParserInterpreter.prototype, "enterRecursionRule", null);
ParserInterpreter = __decorate([
    __param(1, Decorators.NotNull)
], ParserInterpreter);
exports.ParserInterpreter = ParserInterpreter;

});

var ParseTreeMatch_1 = createCommonjsModule(function (module, exports) {
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
exports.ParseTreeMatch = void 0;

/**
 * Represents the result of matching a {@link ParseTree} against a tree pattern.
 */
let ParseTreeMatch = class ParseTreeMatch {
    /**
     * Constructs a new instance of {@link ParseTreeMatch} from the specified
     * parse tree and pattern.
     *
     * @param tree The parse tree to match against the pattern.
     * @param pattern The parse tree pattern.
     * @param labels A mapping from label names to collections of
     * {@link ParseTree} objects located by the tree pattern matching process.
     * @param mismatchedNode The first node which failed to match the tree
     * pattern during the matching process.
     *
     * @throws {@link Error} if `tree` is not defined
     * @throws {@link Error} if `pattern` is not defined
     * @throws {@link Error} if `labels` is not defined
     */
    constructor(tree, pattern, labels, mismatchedNode) {
        if (!tree) {
            throw new Error("tree cannot be null");
        }
        if (!pattern) {
            throw new Error("pattern cannot be null");
        }
        if (!labels) {
            throw new Error("labels cannot be null");
        }
        this._tree = tree;
        this._pattern = pattern;
        this._labels = labels;
        this._mismatchedNode = mismatchedNode;
    }
    /**
     * Get the last node associated with a specific `label`.
     *
     * For example, for pattern `<id:ID>`, `get("id")` returns the
     * node matched for that `ID`. If more than one node
     * matched the specified label, only the last is returned. If there is
     * no node associated with the label, this returns `undefined`.
     *
     * Pattern tags like `<ID>` and `<expr>` without labels are
     * considered to be labeled with `ID` and `expr`, respectively.
     *
     * @param label The label to check.
     *
     * @returns The last {@link ParseTree} to match a tag with the specified
     * label, or `undefined` if no parse tree matched a tag with the label.
     */
    get(label) {
        let parseTrees = this._labels.get(label);
        if (!parseTrees || parseTrees.length === 0) {
            return undefined;
        }
        return parseTrees[parseTrees.length - 1]; // return last if multiple
    }
    /**
     * Return all nodes matching a rule or token tag with the specified label.
     *
     * If the `label` is the name of a parser rule or token in the
     * grammar, the resulting list will contain both the parse trees matching
     * rule or tags explicitly labeled with the label and the complete set of
     * parse trees matching the labeled and unlabeled tags in the pattern for
     * the parser rule or token. For example, if `label` is `"foo"`,
     * the result will contain *all* of the following.
     *
     * * Parse tree nodes matching tags of the form `<foo:anyRuleName>` and
     *   `<foo:AnyTokenName>`.
     * * Parse tree nodes matching tags of the form `<anyLabel:foo>`.
     * * Parse tree nodes matching tags of the form `<foo>`.
     *
     * @param label The label.
     *
     * @returns A collection of all {@link ParseTree} nodes matching tags with
     * the specified `label`. If no nodes matched the label, an empty list
     * is returned.
     */
    getAll(label) {
        const nodes = this._labels.get(label);
        if (!nodes) {
            return [];
        }
        return nodes;
    }
    /**
     * Return a mapping from label &rarr; [list of nodes].
     *
     * The map includes special entries corresponding to the names of rules and
     * tokens referenced in tags in the original pattern. For additional
     * information, see the description of {@link #getAll(String)}.
     *
     * @returns A mapping from labels to parse tree nodes. If the parse tree
     * pattern did not contain any rule or token tags, this map will be empty.
     */
    get labels() {
        return this._labels;
    }
    /**
     * Get the node at which we first detected a mismatch.
     *
     * @returns the node at which we first detected a mismatch, or `undefined`
     * if the match was successful.
     */
    get mismatchedNode() {
        return this._mismatchedNode;
    }
    /**
     * Gets a value indicating whether the match operation succeeded.
     *
     * @returns `true` if the match operation succeeded; otherwise,
     * `false`.
     */
    get succeeded() {
        return !this._mismatchedNode;
    }
    /**
     * Get the tree pattern we are matching against.
     *
     * @returns The tree pattern we are matching against.
     */
    get pattern() {
        return this._pattern;
    }
    /**
     * Get the parse tree we are trying to match to a pattern.
     *
     * @returns The {@link ParseTree} we are trying to match to a pattern.
     */
    get tree() {
        return this._tree;
    }
    /**
     * {@inheritDoc}
     */
    toString() {
        return `Match ${this.succeeded ? "succeeded" : "failed"}; found ${this.labels.size} labels`;
    }
};
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
], ParseTreeMatch.prototype, "getAll", null);
__decorate([
    Decorators.NotNull
], ParseTreeMatch.prototype, "labels", null);
__decorate([
    Decorators.NotNull
], ParseTreeMatch.prototype, "pattern", null);
__decorate([
    Decorators.NotNull
], ParseTreeMatch.prototype, "tree", null);
__decorate([
    Decorators.Override
], ParseTreeMatch.prototype, "toString", null);
ParseTreeMatch = __decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(2, Decorators.NotNull)
], ParseTreeMatch);
exports.ParseTreeMatch = ParseTreeMatch;

});

var XPathLexer_1 = createCommonjsModule(function (module, exports) {
// Generated from XPathLexer.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.XPathLexer = void 0;





class XPathLexer extends Lexer_1.Lexer {
    // tslint:enable:no-trailing-whitespace
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(XPathLexer._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return XPathLexer.VOCABULARY;
    }
    // @Override
    get grammarFileName() { return "XPathLexer.g4"; }
    // @Override
    get ruleNames() { return XPathLexer.ruleNames; }
    // @Override
    get serializedATN() { return XPathLexer._serializedATN; }
    // @Override
    get channelNames() { return XPathLexer.channelNames; }
    // @Override
    get modeNames() { return XPathLexer.modeNames; }
    // @Override
    action(_localctx, ruleIndex, actionIndex) {
        switch (ruleIndex) {
            case 4:
                this.ID_action(_localctx, actionIndex);
                break;
        }
    }
    ID_action(_localctx, actionIndex) {
        switch (actionIndex) {
            case 0:
                let text = this.text;
                if (text.charAt(0) === text.charAt(0).toUpperCase()) {
                    this.type = XPathLexer.TOKEN_REF;
                }
                else {
                    this.type = XPathLexer.RULE_REF;
                }
                break;
        }
    }
    static get _ATN() {
        if (!XPathLexer.__ATN) {
            XPathLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(XPathLexer._serializedATN));
        }
        return XPathLexer.__ATN;
    }
}
exports.XPathLexer = XPathLexer;
XPathLexer.TOKEN_REF = 1;
XPathLexer.RULE_REF = 2;
XPathLexer.ANYWHERE = 3;
XPathLexer.ROOT = 4;
XPathLexer.WILDCARD = 5;
XPathLexer.BANG = 6;
XPathLexer.ID = 7;
XPathLexer.STRING = 8;
// tslint:disable:no-trailing-whitespace
XPathLexer.channelNames = [
    "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
];
// tslint:disable:no-trailing-whitespace
XPathLexer.modeNames = [
    "DEFAULT_MODE",
];
XPathLexer.ruleNames = [
    "ANYWHERE", "ROOT", "WILDCARD", "BANG", "ID", "NameChar", "NameStartChar",
    "STRING",
];
XPathLexer._LITERAL_NAMES = [
    undefined, undefined, undefined, "'//'", "'/'", "'*'", "'!'",
];
XPathLexer._SYMBOLIC_NAMES = [
    undefined, "TOKEN_REF", "RULE_REF", "ANYWHERE", "ROOT", "WILDCARD", "BANG",
    "ID", "STRING",
];
XPathLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(XPathLexer._LITERAL_NAMES, XPathLexer._SYMBOLIC_NAMES, []);
XPathLexer._serializedATNSegments = 2;
XPathLexer._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\n2\b\x01\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
    "\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x07\x06\x1F\n\x06\f\x06" +
    "\x0E\x06\"\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03" +
    "\t\x07\t,\n\t\f\t\x0E\t/\v\t\x03\t\x03\t\x03-\x02\x02\n\x03\x02\x05\x05" +
    "\x02\x06\x07\x02\x07\t\x02\b\v\x02\t\r\x02\x02\x0F\x02\x02\x11\x02\n\x03" +
    "\x02\x02\x04\u02B6\x02\x02\x02\n\x02\x10\x02\x1D\x022\x02;\x02C\x02\\" +
    "\x02a\x02a\x02c\x02|\x02\x81\x02\xA1\x02\xAC\x02\xAC\x02\xAF\x02\xAF\x02" +
    "\xB7\x02\xB7\x02\xBC\x02\xBC\x02\xC2\x02\xD8\x02\xDA\x02\xF8\x02\xFA\x02" +
    "\u02C3\x02\u02C8\x02\u02D3\x02\u02E2\x02\u02E6\x02\u02EE\x02\u02EE\x02" +
    "\u02F0\x02\u02F0\x02\u0302\x02\u0376\x02\u0378\x02\u0379\x02\u037C\x02" +
    "\u037F\x02\u0381\x02\u0381\x02\u0388\x02\u0388\x02\u038A\x02\u038C\x02" +
    "\u038E\x02\u038E\x02\u0390\x02\u03A3\x02\u03A5\x02\u03F7\x02\u03F9\x02" +
    "\u0483\x02\u0485\x02\u0489\x02\u048C\x02\u0531\x02\u0533\x02\u0558\x02" +
    "\u055B\x02\u055B\x02\u0563\x02\u0589\x02\u0593\x02\u05BF\x02\u05C1\x02" +
    "\u05C1\x02\u05C3\x02\u05C4\x02\u05C6\x02\u05C7\x02\u05C9\x02\u05C9\x02" +
    "\u05D2\x02\u05EC\x02\u05F2\x02\u05F4\x02\u0602\x02\u0607\x02\u0612\x02" +
    "\u061C\x02\u061E\x02\u061E\x02\u0622\x02\u066B\x02\u0670\x02\u06D5\x02" +
    "\u06D7\x02\u06DF\x02\u06E1\x02\u06EA\x02\u06EC\x02\u06FE\x02\u0701\x02" +
    "\u0701\x02\u0711\x02\u074C\x02\u074F\x02\u07B3\x02\u07C2\x02\u07F7\x02" +
    "\u07FC\x02\u07FC\x02\u0802\x02\u082F\x02\u0842\x02\u085D\x02\u08A2\x02" +
    "\u08B6\x02\u08B8\x02\u08BF\x02\u08D6\x02\u0965\x02\u0968\x02\u0971\x02" +
    "\u0973\x02\u0985\x02\u0987\x02\u098E\x02\u0991\x02\u0992\x02\u0995\x02" +
    "\u09AA\x02\u09AC\x02\u09B2\x02\u09B4\x02\u09B4\x02\u09B8\x02\u09BB\x02" +
    "\u09BE\x02\u09C6\x02\u09C9\x02\u09CA\x02\u09CD\x02\u09D0\x02\u09D9\x02" +
    "\u09D9\x02\u09DE\x02\u09DF\x02\u09E1\x02\u09E5\x02\u09E8\x02\u09F3\x02" +
    "\u0A03\x02\u0A05\x02\u0A07\x02\u0A0C\x02\u0A11\x02\u0A12\x02\u0A15\x02" +
    "\u0A2A\x02\u0A2C\x02\u0A32\x02\u0A34\x02\u0A35\x02\u0A37\x02\u0A38\x02" +
    "\u0A3A\x02\u0A3B\x02\u0A3E\x02\u0A3E\x02\u0A40\x02\u0A44\x02\u0A49\x02" +
    "\u0A4A\x02\u0A4D\x02\u0A4F\x02\u0A53\x02\u0A53\x02\u0A5B\x02\u0A5E\x02" +
    "\u0A60\x02\u0A60\x02\u0A68\x02\u0A77\x02\u0A83\x02\u0A85\x02\u0A87\x02" +
    "\u0A8F\x02\u0A91\x02\u0A93\x02\u0A95\x02\u0AAA\x02\u0AAC\x02\u0AB2\x02" +
    "\u0AB4\x02\u0AB5\x02\u0AB7\x02\u0ABB\x02\u0ABE\x02\u0AC7\x02\u0AC9\x02" +
    "\u0ACB\x02\u0ACD\x02\u0ACF\x02\u0AD2\x02\u0AD2\x02\u0AE2\x02\u0AE5\x02" +
    "\u0AE8\x02\u0AF1\x02\u0AFB\x02\u0AFB\x02\u0B03\x02\u0B05\x02\u0B07\x02" +
    "\u0B0E\x02\u0B11\x02\u0B12\x02\u0B15\x02\u0B2A\x02\u0B2C\x02\u0B32\x02" +
    "\u0B34\x02\u0B35\x02\u0B37\x02\u0B3B\x02\u0B3E\x02\u0B46\x02\u0B49\x02" +
    "\u0B4A\x02\u0B4D\x02\u0B4F\x02\u0B58\x02\u0B59\x02\u0B5E\x02\u0B5F\x02" +
    "\u0B61\x02\u0B65\x02\u0B68\x02\u0B71\x02\u0B73\x02\u0B73\x02\u0B84\x02" +
    "\u0B85\x02\u0B87\x02\u0B8C\x02\u0B90\x02\u0B92\x02\u0B94\x02\u0B97\x02" +
    "\u0B9B\x02\u0B9C\x02\u0B9E\x02\u0B9E\x02\u0BA0\x02\u0BA1\x02\u0BA5\x02" +
    "\u0BA6\x02\u0BAA\x02\u0BAC\x02\u0BB0\x02\u0BBB\x02\u0BC0\x02\u0BC4\x02" +
    "\u0BC8\x02\u0BCA\x02\u0BCC\x02\u0BCF\x02\u0BD2\x02\u0BD2\x02\u0BD9\x02" +
    "\u0BD9\x02\u0BE8\x02\u0BF1\x02\u0C02\x02\u0C05\x02\u0C07\x02\u0C0E\x02" +
    "\u0C10\x02\u0C12\x02\u0C14\x02\u0C2A\x02\u0C2C\x02\u0C3B\x02\u0C3F\x02" +
    "\u0C46\x02\u0C48\x02\u0C4A\x02\u0C4C\x02\u0C4F\x02\u0C57\x02\u0C58\x02" +
    "\u0C5A\x02\u0C5C\x02\u0C62\x02\u0C65\x02\u0C68\x02\u0C71\x02\u0C82\x02" +
    "\u0C85\x02\u0C87\x02\u0C8E\x02\u0C90\x02\u0C92\x02\u0C94\x02\u0CAA\x02" +
    "\u0CAC\x02\u0CB5\x02\u0CB7\x02\u0CBB\x02\u0CBE\x02\u0CC6\x02\u0CC8\x02" +
    "\u0CCA\x02\u0CCC\x02\u0CCF\x02\u0CD7\x02\u0CD8\x02\u0CE0\x02\u0CE0\x02" +
    "\u0CE2\x02\u0CE5\x02\u0CE8\x02\u0CF1\x02\u0CF3\x02\u0CF4\x02\u0D03\x02" +
    "\u0D05\x02\u0D07\x02\u0D0E\x02\u0D10\x02\u0D12\x02\u0D14\x02\u0D3C\x02" +
    "\u0D3F\x02\u0D46\x02\u0D48\x02\u0D4A\x02\u0D4C\x02\u0D50\x02\u0D56\x02" +
    "\u0D59\x02\u0D61\x02\u0D65\x02\u0D68\x02\u0D71\x02\u0D7C\x02\u0D81\x02" +
    "\u0D84\x02\u0D85\x02\u0D87\x02\u0D98\x02\u0D9C\x02\u0DB3\x02\u0DB5\x02" +
    "\u0DBD\x02\u0DBF\x02\u0DBF\x02\u0DC2\x02\u0DC8\x02\u0DCC\x02\u0DCC\x02" +
    "\u0DD1\x02\u0DD6\x02\u0DD8\x02\u0DD8\x02\u0DDA\x02\u0DE1\x02\u0DE8\x02" +
    "\u0DF1\x02\u0DF4\x02\u0DF5\x02\u0E03\x02\u0E3C\x02\u0E42\x02\u0E50\x02" +
    "\u0E52\x02\u0E5B\x02\u0E83\x02\u0E84\x02\u0E86\x02\u0E86\x02\u0E89\x02" +
    "\u0E8A\x02\u0E8C\x02\u0E8C\x02\u0E8F\x02\u0E8F\x02\u0E96\x02\u0E99\x02" +
    "\u0E9B\x02\u0EA1\x02\u0EA3\x02\u0EA5\x02\u0EA7\x02\u0EA7\x02\u0EA9\x02" +
    "\u0EA9\x02\u0EAC\x02\u0EAD\x02\u0EAF\x02\u0EBB\x02\u0EBD\x02\u0EBF\x02" +
    "\u0EC2\x02\u0EC6\x02\u0EC8\x02\u0EC8\x02\u0ECA\x02\u0ECF\x02\u0ED2\x02" +
    "\u0EDB\x02\u0EDE\x02\u0EE1\x02\u0F02\x02\u0F02\x02\u0F1A\x02\u0F1B\x02" +
    "\u0F22\x02\u0F2B\x02\u0F37\x02\u0F37\x02\u0F39\x02\u0F39\x02\u0F3B\x02" +
    "\u0F3B\x02\u0F40\x02\u0F49\x02\u0F4B\x02\u0F6E\x02\u0F73\x02\u0F86\x02" +
    "\u0F88\x02\u0F99\x02\u0F9B\x02\u0FBE\x02\u0FC8\x02\u0FC8\x02\u1002\x02" +
    "\u104B\x02\u1052\x02\u109F\x02\u10A2\x02\u10C7\x02\u10C9\x02\u10C9\x02" +
    "\u10CF\x02\u10CF\x02\u10D2\x02\u10FC\x02\u10FE\x02\u124A\x02\u124C\x02" +
    "\u124F\x02\u1252\x02\u1258\x02\u125A\x02\u125A\x02\u125C\x02\u125F\x02" +
    "\u1262\x02\u128A\x02\u128C\x02\u128F\x02\u1292\x02\u12B2\x02\u12B4\x02" +
    "\u12B7\x02\u12BA\x02\u12C0\x02\u12C2\x02\u12C2\x02\u12C4\x02\u12C7\x02" +
    "\u12CA\x02\u12D8\x02\u12DA\x02\u1312\x02\u1314\x02\u1317\x02\u131A\x02" +
    "\u135C\x02\u135F\x02\u1361\x02\u1382\x02\u1391\x02\u13A2\x02\u13F7\x02" +
    "\u13FA\x02\u13FF\x02\u1403\x02\u166E\x02\u1671\x02\u1681\x02\u1683\x02" +
    "\u169C\x02\u16A2\x02\u16EC\x02\u16F0\x02\u16FA\x02\u1702\x02\u170E\x02" +
    "\u1710\x02\u1716\x02\u1722\x02\u1736\x02\u1742\x02\u1755\x02\u1762\x02" +
    "\u176E\x02\u1770\x02\u1772\x02\u1774\x02\u1775\x02\u1782\x02\u17D5\x02" +
    "\u17D9\x02\u17D9\x02\u17DE\x02\u17DF\x02\u17E2\x02\u17EB\x02\u180D\x02" +
    "\u1810\x02\u1812\x02\u181B\x02\u1822\x02\u1879\x02\u1882\x02\u18AC\x02" +
    "\u18B2\x02\u18F7\x02\u1902\x02\u1920\x02\u1922\x02\u192D\x02\u1932\x02" +
    "\u193D\x02\u1948\x02\u196F\x02\u1972\x02\u1976\x02\u1982\x02\u19AD\x02" +
    "\u19B2\x02\u19CB\x02\u19D2\x02\u19DB\x02\u1A02\x02\u1A1D\x02\u1A22\x02" +
    "\u1A60\x02\u1A62\x02\u1A7E\x02\u1A81\x02\u1A8B\x02\u1A92\x02\u1A9B\x02" +
    "\u1AA9\x02\u1AA9\x02\u1AB2\x02\u1ABF\x02\u1B02\x02\u1B4D\x02\u1B52\x02" +
    "\u1B5B\x02\u1B6D\x02\u1B75\x02\u1B82\x02\u1BF5\x02\u1C02\x02\u1C39\x02" +
    "\u1C42\x02\u1C4B\x02\u1C4F\x02\u1C7F\x02\u1C82\x02\u1C8A\x02\u1CD2\x02" +
    "\u1CD4\x02\u1CD6\x02\u1CF8\x02\u1CFA\x02\u1CFB\x02\u1D02\x02\u1DF7\x02" +
    "\u1DFD\x02\u1F17\x02\u1F1A\x02\u1F1F\x02\u1F22\x02\u1F47\x02\u1F4A\x02" +
    "\u1F4F\x02\u1F52\x02\u1F59\x02\u1F5B\x02\u1F5B\x02\u1F5D\x02\u1F5D\x02" +
    "\u1F5F\x02\u1F5F\x02\u1F61\x02\u1F7F\x02\u1F82\x02\u1FB6\x02\u1FB8\x02" +
    "\u1FBE\x02\u1FC0\x02\u1FC0\x02\u1FC4\x02\u1FC6\x02\u1FC8\x02\u1FCE\x02" +
    "\u1FD2\x02\u1FD5\x02\u1FD8\x02\u1FDD\x02\u1FE2\x02\u1FEE\x02\u1FF4\x02" +
    "\u1FF6\x02\u1FF8\x02\u1FFE\x02\u200D\x02\u2011\x02\u202C\x02\u2030\x02" +
    "\u2041\x02\u2042\x02\u2056\x02\u2056\x02\u2062\x02\u2066\x02\u2068\x02" +
    "\u2071\x02\u2073\x02\u2073\x02\u2081\x02\u2081\x02\u2092\x02\u209E\x02" +
    "\u20D2\x02\u20DE\x02\u20E3\x02\u20E3\x02\u20E7\x02\u20F2\x02\u2104\x02" +
    "\u2104\x02\u2109\x02\u2109\x02\u210C\x02\u2115\x02\u2117\x02\u2117\x02" +
    "\u211B\x02\u211F\x02\u2126\x02\u2126\x02\u2128\x02\u2128\x02\u212A\x02" +
    "\u212A\x02\u212C\x02\u212F\x02\u2131\x02\u213B\x02\u213E\x02\u2141\x02" +
    "\u2147\x02\u214B\x02\u2150\x02\u2150\x02\u2162\x02\u218A\x02\u2C02\x02" +
    "\u2C30\x02\u2C32\x02\u2C60\x02\u2C62\x02\u2CE6\x02\u2CED\x02\u2CF5\x02" +
    "\u2D02\x02\u2D27\x02\u2D29\x02\u2D29\x02\u2D2F\x02\u2D2F\x02\u2D32\x02" +
    "\u2D69\x02\u2D71\x02\u2D71\x02\u2D81\x02\u2D98\x02\u2DA2\x02\u2DA8\x02" +
    "\u2DAA\x02\u2DB0\x02\u2DB2\x02\u2DB8\x02\u2DBA\x02\u2DC0\x02\u2DC2\x02" +
    "\u2DC8\x02\u2DCA\x02\u2DD0\x02\u2DD2\x02\u2DD8\x02\u2DDA\x02\u2DE0\x02" +
    "\u2DE2\x02\u2E01\x02\u2E31\x02\u2E31\x02\u3007\x02\u3009\x02\u3023\x02" +
    "\u3031\x02\u3033\x02\u3037\x02\u303A\x02\u303E\x02\u3043\x02\u3098\x02" +
    "\u309B\x02\u309C\x02\u309F\x02\u30A1\x02\u30A3\x02\u30FC\x02\u30FE\x02" +
    "\u3101\x02\u3107\x02\u312F\x02\u3133\x02\u3190\x02\u31A2\x02\u31BC\x02" +
    "\u31F2\x02\u3201\x02\u3402\x02\u4DB7\x02\u4E02\x02\u9FD7\x02\uA002\x02" +
    "\uA48E\x02\uA4D2\x02\uA4FF\x02\uA502\x02\uA60E\x02\uA612\x02\uA62D\x02" +
    "\uA642\x02\uA671\x02\uA676\x02\uA67F\x02\uA681\x02\uA6F3\x02\uA719\x02" +
    "\uA721\x02\uA724\x02\uA78A\x02\uA78D\x02\uA7B0\x02\uA7B2\x02\uA7B9\x02" +
    "\uA7F9\x02\uA829\x02\uA842\x02\uA875\x02\uA882\x02\uA8C7\x02\uA8D2\x02" +
    "\uA8DB\x02\uA8E2\x02\uA8F9\x02\uA8FD\x02\uA8FD\x02\uA8FF\x02\uA8FF\x02" +
    "\uA902\x02\uA92F\x02\uA932\x02\uA955\x02\uA962\x02\uA97E\x02\uA982\x02" +
    "\uA9C2\x02\uA9D1\x02\uA9DB\x02\uA9E2\x02\uAA00\x02\uAA02\x02\uAA38\x02" +
    "\uAA42\x02\uAA4F\x02\uAA52\x02\uAA5B\x02\uAA62\x02\uAA78\x02\uAA7C\x02" +
    "\uAAC4\x02\uAADD\x02\uAADF\x02\uAAE2\x02\uAAF1\x02\uAAF4\x02\uAAF8\x02" +
    "\uAB03\x02\uAB08\x02\uAB0B\x02\uAB10\x02\uAB13\x02\uAB18\x02\uAB22\x02" +
    "\uAB28\x02\uAB2A\x02\uAB30\x02\uAB32\x02\uAB5C\x02\uAB5E\x02\uAB67\x02" +
    "\uAB72\x02\uABEC\x02\uABEE\x02\uABEF\x02\uABF2\x02\uABFB\x02\uAC02\x02" +
    "\uD7A5\x02\uD7B2\x02\uD7C8\x02\uD7CD\x02\uD7FD\x02\uF902\x02\uFA6F\x02" +
    "\uFA72\x02\uFADB\x02\uFB02\x02\uFB08\x02\uFB15\x02\uFB19\x02\uFB1F\x02" +
    "\uFB2A\x02\uFB2C\x02\uFB38\x02\uFB3A\x02\uFB3E\x02\uFB40\x02\uFB40\x02" +
    "\uFB42\x02\uFB43\x02\uFB45\x02\uFB46\x02\uFB48\x02\uFBB3\x02\uFBD5\x02" +
    "\uFD3F\x02\uFD52\x02\uFD91\x02\uFD94\x02\uFDC9\x02\uFDF2\x02\uFDFD\x02" +
    "\uFE02\x02\uFE11\x02\uFE22\x02\uFE31\x02\uFE35\x02\uFE36\x02\uFE4F\x02" +
    "\uFE51\x02\uFE72\x02\uFE76\x02\uFE78\x02\uFEFE\x02\uFF01\x02\uFF01\x02" +
    "\uFF12\x02\uFF1B\x02\uFF23\x02\uFF3C\x02\uFF41\x02\uFF41\x02\uFF43\x02" +
    "\uFF5C\x02\uFF68\x02\uFFC0\x02\uFFC4\x02\uFFC9\x02\uFFCC\x02\uFFD1\x02" +
    "\uFFD4\x02\uFFD9\x02\uFFDC\x02\uFFDE\x02\uFFFB\x02\uFFFD\x02\x02\x03\r" +
    "\x03\x0F\x03(\x03*\x03<\x03>\x03?\x03A\x03O\x03R\x03_\x03\x82\x03\xFC" +
    "\x03\u0142\x03\u0176\x03\u01FF\x03\u01FF\x03\u0282\x03\u029E\x03\u02A2" +
    "\x03\u02D2\x03\u02E2\x03\u02E2\x03\u0302\x03\u0321\x03\u0332\x03\u034C" +
    "\x03\u0352\x03\u037C\x03\u0382\x03\u039F\x03\u03A2\x03\u03C5\x03\u03CA" +
    "\x03\u03D1\x03\u03D3\x03\u03D7\x03\u0402\x03\u049F\x03\u04A2\x03\u04AB" +
    "\x03\u04B2\x03\u04D5\x03\u04DA\x03\u04FD\x03\u0502\x03\u0529\x03\u0532" +
    "\x03\u0565\x03\u0602\x03\u0738\x03\u0742\x03\u0757\x03\u0762\x03\u0769" +
    "\x03\u0802\x03\u0807\x03\u080A\x03\u080A\x03\u080C\x03\u0837\x03\u0839" +
    "\x03\u083A\x03\u083E\x03\u083E\x03\u0841\x03\u0857\x03\u0862\x03\u0878" +
    "\x03\u0882\x03\u08A0\x03\u08E2\x03\u08F4\x03\u08F6\x03\u08F7\x03\u0902" +
    "\x03\u0917\x03\u0922\x03\u093B\x03\u0982\x03\u09B9\x03\u09C0\x03\u09C1" +
    "\x03\u0A02\x03\u0A05\x03\u0A07\x03\u0A08\x03\u0A0E\x03\u0A15\x03\u0A17" +
    "\x03\u0A19\x03\u0A1B\x03\u0A35\x03\u0A3A\x03\u0A3C\x03\u0A41\x03\u0A41" +
    "\x03\u0A62\x03\u0A7E\x03\u0A82\x03\u0A9E\x03\u0AC2\x03\u0AC9\x03\u0ACB" +
    "\x03\u0AE8\x03\u0B02\x03\u0B37\x03\u0B42\x03\u0B57\x03\u0B62\x03\u0B74" +
    "\x03\u0B82\x03\u0B93\x03\u0C02\x03\u0C4A\x03\u0C82\x03\u0CB4\x03\u0CC2" +
    "\x03\u0CF4\x03\u1002\x03\u1048\x03\u1068\x03\u1071\x03\u1081\x03\u10BC" +
    "\x03\u10BF\x03\u10BF\x03\u10D2\x03\u10EA\x03\u10F2\x03\u10FB\x03\u1102" +
    "\x03\u1136\x03\u1138\x03\u1141\x03\u1152\x03\u1175\x03\u1178\x03\u1178" +
    "\x03\u1182\x03\u11C6\x03\u11CC\x03\u11CE\x03\u11D2\x03\u11DC\x03\u11DE" +
    "\x03\u11DE\x03\u1202\x03\u1213\x03\u1215\x03\u1239\x03\u1240\x03\u1240" +
    "\x03\u1282\x03\u1288\x03\u128A\x03\u128A\x03\u128C\x03\u128F\x03\u1291" +
    "\x03\u129F\x03\u12A1\x03\u12AA\x03\u12B2\x03\u12EC\x03\u12F2\x03\u12FB" +
    "\x03\u1302\x03\u1305\x03\u1307\x03\u130E\x03\u1311\x03\u1312\x03\u1315" +
    "\x03\u132A\x03\u132C\x03\u1332\x03\u1334\x03\u1335\x03\u1337\x03\u133B" +
    "\x03\u133E\x03\u1346\x03\u1349\x03\u134A\x03\u134D\x03\u134F\x03\u1352" +
    "\x03\u1352\x03\u1359\x03\u1359\x03\u135F\x03\u1365\x03\u1368\x03\u136E" +
    "\x03\u1372\x03\u1376\x03\u1402\x03\u144C\x03\u1452\x03\u145B\x03\u1482" +
    "\x03\u14C7\x03\u14C9\x03\u14C9\x03\u14D2\x03\u14DB\x03\u1582\x03\u15B7" +
    "\x03\u15BA\x03\u15C2\x03\u15DA\x03\u15DF\x03\u1602\x03\u1642\x03\u1646" +
    "\x03\u1646\x03\u1652\x03\u165B\x03\u1682\x03\u16B9\x03\u16C2\x03\u16CB" +
    "\x03\u1702\x03\u171B\x03\u171F\x03\u172D\x03\u1732\x03\u173B\x03\u18A2" +
    "\x03\u18EB\x03\u1901\x03\u1901\x03\u1AC2\x03\u1AFA\x03\u1C02\x03\u1C0A" +
    "\x03\u1C0C\x03\u1C38\x03\u1C3A\x03\u1C42\x03\u1C52\x03\u1C5B\x03\u1C74" +
    "\x03\u1C91\x03\u1C94\x03\u1CA9\x03\u1CAB\x03\u1CB8\x03\u2002\x03\u239B" +
    "\x03\u2402\x03\u2470\x03\u2482\x03\u2545\x03\u3002\x03\u3430\x03\u4402" +
    "\x03\u4648\x03\u6802\x03\u6A3A\x03\u6A42\x03\u6A60\x03\u6A62\x03\u6A6B" +
    "\x03\u6AD2\x03\u6AEF\x03\u6AF2\x03\u6AF6\x03\u6B02\x03\u6B38\x03\u6B42" +
    "\x03\u6B45\x03\u6B52\x03\u6B5B\x03\u6B65\x03\u6B79\x03\u6B7F\x03\u6B91" +
    "\x03\u6F02\x03\u6F46\x03\u6F52\x03\u6F80\x03\u6F91\x03\u6FA1\x03\u6FE2" +
    "\x03\u6FE2\x03\u7002\x03\u87EE\x03\u8802\x03\u8AF4\x03\uB002\x03\uB003" +
    "\x03\uBC02\x03\uBC6C\x03\uBC72\x03\uBC7E\x03\uBC82\x03\uBC8A\x03\uBC92" +
    "\x03\uBC9B\x03\uBC9F\x03\uBCA0\x03\uBCA2\x03\uBCA5\x03\uD167\x03\uD16B" +
    "\x03\uD16F\x03\uD184\x03\uD187\x03\uD18D\x03\uD1AC\x03\uD1AF\x03\uD244" +
    "\x03\uD246\x03\uD402\x03\uD456\x03\uD458\x03\uD49E\x03\uD4A0\x03\uD4A1" +
    "\x03\uD4A4\x03\uD4A4\x03\uD4A7\x03\uD4A8\x03\uD4AB\x03\uD4AE\x03\uD4B0" +
    "\x03\uD4BB\x03\uD4BD\x03\uD4BD\x03\uD4BF\x03\uD4C5\x03\uD4C7\x03\uD507" +
    "\x03\uD509\x03\uD50C\x03\uD50F\x03\uD516\x03\uD518\x03\uD51E\x03\uD520" +
    "\x03\uD53B\x03\uD53D\x03\uD540\x03\uD542\x03\uD546\x03\uD548\x03\uD548" +
    "\x03\uD54C\x03\uD552\x03\uD554\x03\uD6A7\x03\uD6AA\x03\uD6C2\x03\uD6C4" +
    "\x03\uD6DC\x03\uD6DE\x03\uD6FC\x03\uD6FE\x03\uD716\x03\uD718\x03\uD736" +
    "\x03\uD738\x03\uD750\x03\uD752\x03\uD770\x03\uD772\x03\uD78A\x03\uD78C" +
    "\x03\uD7AA\x03\uD7AC\x03\uD7C4\x03\uD7C6\x03\uD7CD\x03\uD7D0\x03\uD801" +
    "\x03\uDA02\x03\uDA38\x03\uDA3D\x03\uDA6E\x03\uDA77\x03\uDA77\x03\uDA86" +
    "\x03\uDA86\x03\uDA9D\x03\uDAA1\x03\uDAA3\x03\uDAB1\x03\uE002\x03\uE008" +
    "\x03\uE00A\x03\uE01A\x03\uE01D\x03\uE023\x03\uE025\x03\uE026\x03\uE028" +
    "\x03\uE02C\x03\uE802\x03\uE8C6\x03\uE8D2\x03\uE8D8\x03\uE902\x03\uE94C" +
    "\x03\uE952\x03\uE95B\x03\uEE02\x03\uEE05\x03\uEE07\x03\uEE21\x03\uEE23" +
    "\x03\uEE24\x03\uEE26\x03\uEE26\x03\uEE29\x03\uEE29\x03\uEE2B\x03\uEE34" +
    "\x03\uEE36\x03\uEE39\x03\uEE3B\x03\uEE3B\x03\uEE3D\x03\uEE3D\x03\uEE44" +
    "\x03\uEE44\x03\uEE49\x03\uEE49\x03\uEE4B\x03\uEE4B\x03\uEE4D\x03\uEE4D" +
    "\x03\uEE4F\x03\uEE51\x03\uEE53\x03\uEE54\x03\uEE56\x03\uEE56\x03\uEE59" +
    "\x03\uEE59\x03\uEE5B\x03\uEE5B\x03\uEE5D\x03\uEE5D\x03\uEE5F\x03\uEE5F" +
    "\x03\uEE61\x03\uEE61\x03\uEE63\x03\uEE64\x03\uEE66\x03\uEE66\x03\uEE69" +
    "\x03\uEE6C\x03\uEE6E\x03\uEE74\x03\uEE76\x03\uEE79\x03\uEE7B\x03\uEE7E" +
    "\x03\uEE80\x03\uEE80\x03\uEE82\x03\uEE8B\x03\uEE8D\x03\uEE9D\x03\uEEA3" +
    "\x03\uEEA5\x03\uEEA7\x03\uEEAB\x03\uEEAD\x03\uEEBD\x03\x02\x04\uA6D8\x04" +
    "\uA702\x04\uB736\x04\uB742\x04\uB81F\x04\uB822\x04\uCEA3\x04\uF802\x04" +
    "\uFA1F\x04\x03\x10\x03\x10\"\x10\x81\x10\u0102\x10\u01F1\x10\u0240\x02" +
    "C\x02\\\x02c\x02|\x02\xAC\x02\xAC\x02\xB7\x02\xB7\x02\xBC\x02\xBC\x02" +
    "\xC2\x02\xD8\x02\xDA\x02\xF8\x02\xFA\x02\u02C3\x02\u02C8\x02\u02D3\x02" +
    "\u02E2\x02\u02E6\x02\u02EE\x02\u02EE\x02\u02F0\x02\u02F0\x02\u0372\x02" +
    "\u0376\x02\u0378\x02\u0379\x02\u037C\x02\u037F\x02\u0381\x02\u0381\x02" +
    "\u0388\x02\u0388\x02\u038A\x02\u038C\x02\u038E\x02\u038E\x02\u0390\x02" +
    "\u03A3\x02\u03A5\x02\u03F7\x02\u03F9\x02\u0483\x02\u048C\x02\u0531\x02" +
    "\u0533\x02\u0558\x02\u055B\x02\u055B\x02\u0563\x02\u0589\x02\u05D2\x02" +
    "\u05EC\x02\u05F2\x02\u05F4\x02\u0622\x02\u064C\x02\u0670\x02\u0671\x02" +
    "\u0673\x02\u06D5\x02\u06D7\x02\u06D7\x02\u06E7\x02\u06E8\x02\u06F0\x02" +
    "\u06F1\x02\u06FC\x02\u06FE\x02\u0701\x02\u0701\x02\u0712\x02\u0712\x02" +
    "\u0714\x02\u0731\x02\u074F\x02\u07A7\x02\u07B3\x02\u07B3\x02\u07CC\x02" +
    "\u07EC\x02\u07F6\x02\u07F7\x02\u07FC\x02\u07FC\x02\u0802\x02\u0817\x02" +
    "\u081C\x02\u081C\x02\u0826\x02\u0826\x02\u082A\x02\u082A\x02\u0842\x02" +
    "\u085A\x02\u08A2\x02\u08B6\x02\u08B8\x02\u08BF\x02\u0906\x02\u093B\x02" +
    "\u093F\x02\u093F\x02\u0952\x02\u0952\x02\u095A\x02\u0963\x02\u0973\x02" +
    "\u0982\x02\u0987\x02\u098E\x02\u0991\x02\u0992\x02\u0995\x02\u09AA\x02" +
    "\u09AC\x02\u09B2\x02\u09B4\x02\u09B4\x02\u09B8\x02\u09BB\x02\u09BF\x02" +
    "\u09BF\x02\u09D0\x02\u09D0\x02\u09DE\x02\u09DF\x02\u09E1\x02\u09E3\x02" +
    "\u09F2\x02\u09F3\x02\u0A07\x02\u0A0C\x02\u0A11\x02\u0A12\x02\u0A15\x02" +
    "\u0A2A\x02\u0A2C\x02\u0A32\x02\u0A34\x02\u0A35\x02\u0A37\x02\u0A38\x02" +
    "\u0A3A\x02\u0A3B\x02\u0A5B\x02\u0A5E\x02\u0A60\x02\u0A60\x02\u0A74\x02" +
    "\u0A76\x02\u0A87\x02\u0A8F\x02\u0A91\x02\u0A93\x02\u0A95\x02\u0AAA\x02" +
    "\u0AAC\x02\u0AB2\x02\u0AB4\x02\u0AB5\x02\u0AB7\x02\u0ABB\x02\u0ABF\x02" +
    "\u0ABF\x02\u0AD2\x02\u0AD2\x02\u0AE2\x02\u0AE3\x02\u0AFB\x02\u0AFB\x02" +
    "\u0B07\x02\u0B0E\x02\u0B11\x02\u0B12\x02\u0B15\x02\u0B2A\x02\u0B2C\x02" +
    "\u0B32\x02\u0B34\x02\u0B35\x02\u0B37\x02\u0B3B\x02\u0B3F\x02\u0B3F\x02" +
    "\u0B5E\x02\u0B5F\x02\u0B61\x02\u0B63\x02\u0B73\x02\u0B73\x02\u0B85\x02" +
    "\u0B85\x02\u0B87\x02\u0B8C\x02\u0B90\x02\u0B92\x02\u0B94\x02\u0B97\x02" +
    "\u0B9B\x02\u0B9C\x02\u0B9E\x02\u0B9E\x02\u0BA0\x02\u0BA1\x02\u0BA5\x02" +
    "\u0BA6\x02\u0BAA\x02\u0BAC\x02\u0BB0\x02\u0BBB\x02\u0BD2\x02\u0BD2\x02" +
    "\u0C07\x02\u0C0E\x02\u0C10\x02\u0C12\x02\u0C14\x02\u0C2A\x02\u0C2C\x02" +
    "\u0C3B\x02\u0C3F\x02\u0C3F\x02\u0C5A\x02\u0C5C\x02\u0C62\x02\u0C63\x02" +
    "\u0C82\x02\u0C82\x02\u0C87\x02\u0C8E\x02\u0C90\x02\u0C92\x02\u0C94\x02" +
    "\u0CAA\x02\u0CAC\x02\u0CB5\x02\u0CB7\x02\u0CBB\x02\u0CBF\x02\u0CBF\x02" +
    "\u0CE0\x02\u0CE0\x02\u0CE2\x02\u0CE3\x02\u0CF3\x02\u0CF4\x02\u0D07\x02" +
    "\u0D0E\x02\u0D10\x02\u0D12\x02\u0D14\x02\u0D3C\x02\u0D3F\x02\u0D3F\x02" +
    "\u0D50\x02\u0D50\x02\u0D56\x02\u0D58\x02\u0D61\x02\u0D63\x02\u0D7C\x02" +
    "\u0D81\x02\u0D87\x02\u0D98\x02\u0D9C\x02\u0DB3\x02\u0DB5\x02\u0DBD\x02" +
    "\u0DBF\x02\u0DBF\x02\u0DC2\x02\u0DC8\x02\u0E03\x02\u0E32\x02\u0E34\x02" +
    "\u0E35\x02\u0E42\x02\u0E48\x02\u0E83\x02\u0E84\x02\u0E86\x02\u0E86\x02" +
    "\u0E89\x02\u0E8A\x02\u0E8C\x02\u0E8C\x02\u0E8F\x02\u0E8F\x02\u0E96\x02" +
    "\u0E99\x02\u0E9B\x02\u0EA1\x02\u0EA3\x02\u0EA5\x02\u0EA7\x02\u0EA7\x02" +
    "\u0EA9\x02\u0EA9\x02\u0EAC\x02\u0EAD\x02\u0EAF\x02\u0EB2\x02\u0EB4\x02" +
    "\u0EB5\x02\u0EBF\x02\u0EBF\x02\u0EC2\x02\u0EC6\x02\u0EC8\x02\u0EC8\x02" +
    "\u0EDE\x02\u0EE1\x02\u0F02\x02\u0F02\x02\u0F42\x02\u0F49\x02\u0F4B\x02" +
    "\u0F6E\x02\u0F8A\x02\u0F8E\x02\u1002\x02\u102C\x02\u1041\x02\u1041\x02" +
    "\u1052\x02\u1057\x02\u105C\x02\u105F\x02\u1063\x02\u1063\x02\u1067\x02" +
    "\u1068\x02\u1070\x02\u1072\x02\u1077\x02\u1083\x02\u1090\x02\u1090\x02" +
    "\u10A2\x02\u10C7\x02\u10C9\x02\u10C9\x02\u10CF\x02\u10CF\x02\u10D2\x02" +
    "\u10FC\x02\u10FE\x02\u124A\x02\u124C\x02\u124F\x02\u1252\x02\u1258\x02" +
    "\u125A\x02\u125A\x02\u125C\x02\u125F\x02\u1262\x02\u128A\x02\u128C\x02" +
    "\u128F\x02\u1292\x02\u12B2\x02\u12B4\x02\u12B7\x02\u12BA\x02\u12C0\x02" +
    "\u12C2\x02\u12C2\x02\u12C4\x02\u12C7\x02\u12CA\x02\u12D8\x02\u12DA\x02" +
    "\u1312\x02\u1314\x02\u1317\x02\u131A\x02\u135C\x02\u1382\x02\u1391\x02" +
    "\u13A2\x02\u13F7\x02\u13FA\x02\u13FF\x02\u1403\x02\u166E\x02\u1671\x02" +
    "\u1681\x02\u1683\x02\u169C\x02\u16A2\x02\u16EC\x02\u16F0\x02\u16FA\x02" +
    "\u1702\x02\u170E\x02\u1710\x02\u1713\x02\u1722\x02\u1733\x02\u1742\x02" +
    "\u1753\x02\u1762\x02\u176E\x02\u1770\x02\u1772\x02\u1782\x02\u17B5\x02" +
    "\u17D9\x02\u17D9\x02\u17DE\x02\u17DE\x02\u1822\x02\u1879\x02\u1882\x02" +
    "\u1886\x02\u1889\x02\u18AA\x02\u18AC\x02\u18AC\x02\u18B2\x02\u18F7\x02" +
    "\u1902\x02\u1920\x02\u1952\x02\u196F\x02\u1972\x02\u1976\x02\u1982\x02" +
    "\u19AD\x02\u19B2\x02\u19CB\x02\u1A02\x02\u1A18\x02\u1A22\x02\u1A56\x02" +
    "\u1AA9\x02\u1AA9\x02\u1B07\x02\u1B35\x02\u1B47\x02\u1B4D\x02\u1B85\x02" +
    "\u1BA2\x02\u1BB0\x02\u1BB1\x02\u1BBC\x02\u1BE7\x02\u1C02\x02\u1C25\x02" +
    "\u1C4F\x02\u1C51\x02\u1C5C\x02\u1C7F\x02\u1C82\x02\u1C8A\x02\u1CEB\x02" +
    "\u1CEE\x02\u1CF0\x02\u1CF3\x02\u1CF7\x02\u1CF8\x02\u1D02\x02\u1DC1\x02" +
    "\u1E02\x02\u1F17\x02\u1F1A\x02\u1F1F\x02\u1F22\x02\u1F47\x02\u1F4A\x02" +
    "\u1F4F\x02\u1F52\x02\u1F59\x02\u1F5B\x02\u1F5B\x02\u1F5D\x02\u1F5D\x02" +
    "\u1F5F\x02\u1F5F\x02\u1F61\x02\u1F7F\x02\u1F82\x02\u1FB6\x02\u1FB8\x02" +
    "\u1FBE\x02\u1FC0\x02\u1FC0\x02\u1FC4\x02\u1FC6\x02\u1FC8\x02\u1FCE\x02" +
    "\u1FD2\x02\u1FD5\x02\u1FD8\x02\u1FDD\x02\u1FE2\x02\u1FEE\x02\u1FF4\x02" +
    "\u1FF6\x02\u1FF8\x02\u1FFE\x02\u2073\x02\u2073\x02\u2081\x02\u2081\x02" +
    "\u2092\x02\u209E\x02\u2104\x02\u2104\x02\u2109\x02\u2109\x02\u210C\x02" +
    "\u2115\x02\u2117\x02\u2117\x02\u211B\x02\u211F\x02\u2126\x02\u2126\x02" +
    "\u2128\x02\u2128\x02\u212A\x02\u212A\x02\u212C\x02\u212F\x02\u2131\x02" +
    "\u213B\x02\u213E\x02\u2141\x02\u2147\x02\u214B\x02\u2150\x02\u2150\x02" +
    "\u2162\x02\u218A\x02\u2C02\x02\u2C30\x02\u2C32\x02\u2C60\x02\u2C62\x02" +
    "\u2CE6\x02\u2CED\x02\u2CF0\x02\u2CF4\x02\u2CF5\x02\u2D02\x02\u2D27\x02" +
    "\u2D29\x02\u2D29\x02\u2D2F\x02\u2D2F\x02\u2D32\x02\u2D69\x02\u2D71\x02" +
    "\u2D71\x02\u2D82\x02\u2D98\x02\u2DA2\x02\u2DA8\x02\u2DAA\x02\u2DB0\x02" +
    "\u2DB2\x02\u2DB8\x02\u2DBA\x02\u2DC0\x02\u2DC2\x02\u2DC8\x02\u2DCA\x02" +
    "\u2DD0\x02\u2DD2\x02\u2DD8\x02\u2DDA\x02\u2DE0\x02\u2E31\x02\u2E31\x02" +
    "\u3007\x02\u3009\x02\u3023\x02\u302B\x02\u3033\x02\u3037\x02\u303A\x02" +
    "\u303E\x02\u3043\x02\u3098\x02\u309F\x02\u30A1\x02\u30A3\x02\u30FC\x02" +
    "\u30FE\x02\u3101\x02\u3107\x02\u312F\x02\u3133\x02\u3190\x02\u31A2\x02" +
    "\u31BC\x02\u31F2\x02\u3201\x02\u3402\x02\u4DB7\x02\u4E02\x02\u9FD7\x02" +
    "\uA002\x02\uA48E\x02\uA4D2\x02\uA4FF\x02\uA502\x02\uA60E\x02\uA612\x02" +
    "\uA621\x02\uA62C\x02\uA62D\x02\uA642\x02\uA670\x02\uA681\x02\uA69F\x02" +
    "\uA6A2\x02\uA6F1\x02\uA719\x02\uA721\x02\uA724\x02\uA78A\x02\uA78D\x02" +
    "\uA7B0\x02\uA7B2\x02\uA7B9\x02\uA7F9\x02\uA803\x02\uA805\x02\uA807\x02" +
    "\uA809\x02\uA80C\x02\uA80E\x02\uA824\x02\uA842\x02\uA875\x02\uA884\x02" +
    "\uA8B5\x02\uA8F4\x02\uA8F9\x02\uA8FD\x02\uA8FD\x02\uA8FF\x02\uA8FF\x02" +
    "\uA90C\x02\uA927\x02\uA932\x02\uA948\x02\uA962\x02\uA97E\x02\uA986\x02" +
    "\uA9B4\x02\uA9D1\x02\uA9D1\x02\uA9E2\x02\uA9E6\x02\uA9E8\x02\uA9F1\x02" +
    "\uA9FC\x02\uAA00\x02\uAA02\x02\uAA2A\x02\uAA42\x02\uAA44\x02\uAA46\x02" +
    "\uAA4D\x02\uAA62\x02\uAA78\x02\uAA7C\x02\uAA7C\x02\uAA80\x02\uAAB1\x02" +
    "\uAAB3\x02\uAAB3\x02\uAAB7\x02\uAAB8\x02\uAABB\x02\uAABF\x02\uAAC2\x02" +
    "\uAAC2\x02\uAAC4\x02\uAAC4\x02\uAADD\x02\uAADF\x02\uAAE2\x02\uAAEC\x02" +
    "\uAAF4\x02\uAAF6\x02\uAB03\x02\uAB08\x02\uAB0B\x02\uAB10\x02\uAB13\x02" +
    "\uAB18\x02\uAB22\x02\uAB28\x02\uAB2A\x02\uAB30\x02\uAB32\x02\uAB5C\x02" +
    "\uAB5E\x02\uAB67\x02\uAB72\x02\uABE4\x02\uAC02\x02\uD7A5\x02\uD7B2\x02" +
    "\uD7C8\x02\uD7CD\x02\uD7FD\x02\uF902\x02\uFA6F\x02\uFA72\x02\uFADB\x02" +
    "\uFB02\x02\uFB08\x02\uFB15\x02\uFB19\x02\uFB1F\x02\uFB1F\x02\uFB21\x02" +
    "\uFB2A\x02\uFB2C\x02\uFB38\x02\uFB3A\x02\uFB3E\x02\uFB40\x02\uFB40\x02" +
    "\uFB42\x02\uFB43\x02\uFB45\x02\uFB46\x02\uFB48\x02\uFBB3\x02\uFBD5\x02" +
    "\uFD3F\x02\uFD52\x02\uFD91\x02\uFD94\x02\uFDC9\x02\uFDF2\x02\uFDFD\x02" +
    "\uFE72\x02\uFE76\x02\uFE78\x02\uFEFE\x02\uFF23\x02\uFF3C\x02\uFF43\x02" +
    "\uFF5C\x02\uFF68\x02\uFFC0\x02\uFFC4\x02\uFFC9\x02\uFFCC\x02\uFFD1\x02" +
    "\uFFD4\x02\uFFD9\x02\uFFDC\x02\uFFDE\x02\x02\x03\r\x03\x0F\x03(\x03*\x03" +
    "<\x03>\x03?\x03A\x03O\x03R\x03_\x03\x82\x03\xFC\x03\u0142\x03\u0176\x03" +
    "\u0282\x03\u029E\x03\u02A2\x03\u02D2\x03\u0302\x03\u0321\x03\u0332\x03" +
    "\u034C\x03\u0352\x03\u0377\x03\u0382\x03\u039F\x03\u03A2\x03\u03C5\x03" +
    "\u03CA\x03\u03D1\x03\u03D3\x03\u03D7\x03\u0402\x03\u049F\x03\u04B2\x03" +
    "\u04D5\x03\u04DA\x03\u04FD\x03\u0502\x03\u0529\x03\u0532\x03\u0565\x03" +
    "\u0602\x03\u0738\x03\u0742\x03\u0757\x03\u0762\x03\u0769\x03\u0802\x03" +
    "\u0807\x03\u080A\x03\u080A\x03\u080C\x03\u0837\x03\u0839\x03\u083A\x03" +
    "\u083E\x03\u083E\x03\u0841\x03\u0857\x03\u0862\x03\u0878\x03\u0882\x03" +
    "\u08A0\x03\u08E2\x03\u08F4\x03\u08F6\x03\u08F7\x03\u0902\x03\u0917\x03" +
    "\u0922\x03\u093B\x03\u0982\x03\u09B9\x03\u09C0\x03\u09C1\x03\u0A02\x03" +
    "\u0A02\x03\u0A12\x03\u0A15\x03\u0A17\x03\u0A19\x03\u0A1B\x03\u0A35\x03" +
    "\u0A62\x03\u0A7E\x03\u0A82\x03\u0A9E\x03\u0AC2\x03\u0AC9\x03\u0ACB\x03" +
    "\u0AE6\x03\u0B02\x03\u0B37\x03\u0B42\x03\u0B57\x03\u0B62\x03\u0B74\x03" +
    "\u0B82\x03\u0B93\x03\u0C02\x03\u0C4A\x03\u0C82\x03\u0CB4\x03\u0CC2\x03" +
    "\u0CF4\x03\u1005\x03\u1039\x03\u1085\x03\u10B1\x03\u10D2\x03\u10EA\x03" +
    "\u1105\x03\u1128\x03\u1152\x03\u1174\x03\u1178\x03\u1178\x03\u1185\x03" +
    "\u11B4\x03\u11C3\x03\u11C6\x03\u11DC\x03\u11DC\x03\u11DE\x03\u11DE\x03" +
    "\u1202\x03\u1213\x03\u1215\x03\u122D\x03\u1282\x03\u1288\x03\u128A\x03" +
    "\u128A\x03\u128C\x03\u128F\x03\u1291\x03\u129F\x03\u12A1\x03\u12AA\x03" +
    "\u12B2\x03\u12E0\x03\u1307\x03\u130E\x03\u1311\x03\u1312\x03\u1315\x03" +
    "\u132A\x03\u132C\x03\u1332\x03\u1334\x03\u1335\x03\u1337\x03\u133B\x03" +
    "\u133F\x03\u133F\x03\u1352\x03\u1352\x03\u135F\x03\u1363\x03\u1402\x03" +
    "\u1436\x03\u1449\x03\u144C\x03\u1482\x03\u14B1\x03\u14C6\x03\u14C7\x03" +
    "\u14C9\x03\u14C9\x03\u1582\x03\u15B0\x03\u15DA\x03\u15DD\x03\u1602\x03" +
    "\u1631\x03\u1646\x03\u1646\x03\u1682\x03\u16AC\x03\u1702\x03\u171B\x03" +
    "\u18A2\x03\u18E1\x03\u1901\x03\u1901\x03\u1AC2\x03\u1AFA\x03\u1C02\x03" +
    "\u1C0A\x03\u1C0C\x03\u1C30\x03\u1C42\x03\u1C42\x03\u1C74\x03\u1C91\x03" +
    "\u2002\x03\u239B\x03\u2402\x03\u2470\x03\u2482\x03\u2545\x03\u3002\x03" +
    "\u3430\x03\u4402\x03\u4648\x03\u6802\x03\u6A3A\x03\u6A42\x03\u6A60\x03" +
    "\u6AD2\x03\u6AEF\x03\u6B02\x03\u6B31\x03\u6B42\x03\u6B45\x03\u6B65\x03" +
    "\u6B79\x03\u6B7F\x03\u6B91\x03\u6F02\x03\u6F46\x03\u6F52\x03\u6F52\x03" +
    "\u6F95\x03\u6FA1\x03\u6FE2\x03\u6FE2\x03\u7002\x03\u87EE\x03\u8802\x03" +
    "\u8AF4\x03\uB002\x03\uB003\x03\uBC02\x03\uBC6C\x03\uBC72\x03\uBC7E\x03" +
    "\uBC82\x03\uBC8A\x03\uBC92\x03\uBC9B\x03\uD402\x03\uD456\x03\uD458\x03" +
    "\uD49E\x03\uD4A0\x03\uD4A1\x03\uD4A4\x03\uD4A4\x03\uD4A7\x03\uD4A8\x03" +
    "\uD4AB\x03\uD4AE\x03\uD4B0\x03\uD4BB\x03\uD4BD\x03\uD4BD\x03\uD4BF\x03" +
    "\uD4C5\x03\uD4C7\x03\uD507\x03\uD509\x03\uD50C\x03\uD50F\x03\uD516\x03" +
    "\uD518\x03\uD51E\x03\uD520\x03\uD53B\x03\uD53D\x03\uD540\x03\uD542\x03" +
    "\uD546\x03\uD548\x03\uD548";
XPathLexer._serializedATNSegment1 = "\x03\uD54C\x03\uD552\x03\uD554\x03\uD6A7\x03\uD6AA\x03\uD6C2\x03\uD6C4" +
    "\x03\uD6DC\x03\uD6DE\x03\uD6FC\x03\uD6FE\x03\uD716\x03\uD718\x03\uD736" +
    "\x03\uD738\x03\uD750\x03\uD752\x03\uD770\x03\uD772\x03\uD78A\x03\uD78C" +
    "\x03\uD7AA\x03\uD7AC\x03\uD7C4\x03\uD7C6\x03\uD7CD\x03\uE802\x03\uE8C6" +
    "\x03\uE902\x03\uE945\x03\uEE02\x03\uEE05\x03\uEE07\x03\uEE21\x03\uEE23" +
    "\x03\uEE24\x03\uEE26\x03\uEE26\x03\uEE29\x03\uEE29\x03\uEE2B\x03\uEE34" +
    "\x03\uEE36\x03\uEE39\x03\uEE3B\x03\uEE3B\x03\uEE3D\x03\uEE3D\x03\uEE44" +
    "\x03\uEE44\x03\uEE49\x03\uEE49\x03\uEE4B\x03\uEE4B\x03\uEE4D\x03\uEE4D" +
    "\x03\uEE4F\x03\uEE51\x03\uEE53\x03\uEE54\x03\uEE56\x03\uEE56\x03\uEE59" +
    "\x03\uEE59\x03\uEE5B\x03\uEE5B\x03\uEE5D\x03\uEE5D\x03\uEE5F\x03\uEE5F" +
    "\x03\uEE61\x03\uEE61\x03\uEE63\x03\uEE64\x03\uEE66\x03\uEE66\x03\uEE69" +
    "\x03\uEE6C\x03\uEE6E\x03\uEE74\x03\uEE76\x03\uEE79\x03\uEE7B\x03\uEE7E" +
    "\x03\uEE80\x03\uEE80\x03\uEE82\x03\uEE8B\x03\uEE8D\x03\uEE9D\x03\uEEA3" +
    "\x03\uEEA5\x03\uEEA7\x03\uEEAB\x03\uEEAD\x03\uEEBD\x03\x02\x04\uA6D8\x04" +
    "\uA702\x04\uB736\x04\uB742\x04\uB81F\x04\uB822\x04\uCEA3\x04\uF802\x04" +
    "\uFA1F\x041\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03" +
    "\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\x11\x03\x02" +
    "\x02\x02\x03\x13\x03\x02\x02\x02\x05\x16\x03\x02\x02\x02\x07\x18\x03\x02" +
    "\x02\x02\t\x1A\x03\x02\x02\x02\v\x1C\x03\x02\x02\x02\r%\x03\x02\x02\x02" +
    "\x0F\'\x03\x02\x02\x02\x11)\x03\x02\x02\x02\x13\x14\x071\x02\x02\x14\x15" +
    "\x071\x02\x02\x15\x04\x03\x02\x02\x02\x16\x17\x071\x02\x02\x17\x06\x03" +
    "\x02\x02\x02\x18\x19\x07,\x02\x02\x19\b\x03\x02\x02\x02\x1A\x1B\x07#\x02" +
    "\x02\x1B\n\x03\x02\x02\x02\x1C \x05\x0F\b\x02\x1D\x1F\x05\r\x07\x02\x1E" +
    "\x1D\x03\x02\x02\x02\x1F\"\x03\x02\x02\x02 \x1E\x03\x02\x02\x02 !\x03" +
    "\x02\x02\x02!#\x03\x02\x02\x02\" \x03\x02\x02\x02#$\b\x06\x02\x02$\f\x03" +
    "\x02\x02\x02%&\t\x02\x02\x02&\x0E\x03\x02\x02\x02\'(\t\x03\x02\x02(\x10" +
    "\x03\x02\x02\x02)-\x07)\x02\x02*,\v\x02\x02\x02+*\x03\x02\x02\x02,/\x03" +
    "\x02\x02\x02-.\x03\x02\x02\x02-+\x03\x02\x02\x02.0\x03\x02\x02\x02/-\x03" +
    "\x02\x02\x0201\x07)\x02\x021\x12\x03\x02\x02\x02\x05\x02 -\x03\x03\x06" +
    "\x02";
XPathLexer._serializedATN = Utils.join([
    XPathLexer._serializedATNSegment0,
    XPathLexer._serializedATNSegment1,
], "");

});

var XPathLexerErrorListener_1 = createCommonjsModule(function (module, exports) {
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
exports.XPathLexerErrorListener = void 0;

class XPathLexerErrorListener {
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        // intentionally empty
    }
}
__decorate([
    Decorators.Override
], XPathLexerErrorListener.prototype, "syntaxError", null);
exports.XPathLexerErrorListener = XPathLexerErrorListener;

});

var XPathElement_1 = createCommonjsModule(function (module, exports) {
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
exports.XPathElement = void 0;
// CONVERSTION complete, Burt Harris 10/14/2016

class XPathElement {
    /** Construct element like `/ID` or `ID` or `/*` etc...
     *  op is null if just node
     */
    constructor(nodeName) {
        this.nodeName = nodeName;
        this.invert = false;
    }
    toString() {
        let inv = this.invert ? "!" : "";
        let className = Object.constructor.name;
        return className + "[" + inv + this.nodeName + "]";
    }
}
__decorate([
    Decorators.Override
], XPathElement.prototype, "toString", null);
exports.XPathElement = XPathElement;

});

var XPathRuleAnywhereElement_1 = createCommonjsModule(function (module, exports) {
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
exports.XPathRuleAnywhereElement = void 0;



/**
 * Either `ID` at start of path or `...//ID` in middle of path.
 */
class XPathRuleAnywhereElement extends XPathElement_1.XPathElement {
    constructor(ruleName, ruleIndex) {
        super(ruleName);
        this.ruleIndex = ruleIndex;
    }
    evaluate(t) {
        return Trees_1.Trees.findAllRuleNodes(t, this.ruleIndex);
    }
}
__decorate([
    Decorators.Override
], XPathRuleAnywhereElement.prototype, "evaluate", null);
exports.XPathRuleAnywhereElement = XPathRuleAnywhereElement;

});

var XPathRuleElement_1 = createCommonjsModule(function (module, exports) {
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
exports.XPathRuleElement = void 0;
// CONVERSTION complete, Burt Harris 10/14/2016




class XPathRuleElement extends XPathElement_1.XPathElement {
    constructor(ruleName, ruleIndex) {
        super(ruleName);
        this.ruleIndex = ruleIndex;
    }
    evaluate(t) {
        // return all children of t that match nodeName
        let nodes = [];
        for (let c of Trees_1.Trees.getChildren(t)) {
            if (c instanceof ParserRuleContext_1.ParserRuleContext) {
                if ((c.ruleIndex === this.ruleIndex && !this.invert) ||
                    (c.ruleIndex !== this.ruleIndex && this.invert)) {
                    nodes.push(c);
                }
            }
        }
        return nodes;
    }
}
__decorate([
    Decorators.Override
], XPathRuleElement.prototype, "evaluate", null);
exports.XPathRuleElement = XPathRuleElement;

});

var XPathTokenAnywhereElement_1 = createCommonjsModule(function (module, exports) {
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
exports.XPathTokenAnywhereElement = void 0;
// CONVERSTION complete, Burt Harris 10/14/2016



class XPathTokenAnywhereElement extends XPathElement_1.XPathElement {
    constructor(tokenName, tokenType) {
        super(tokenName);
        this.tokenType = tokenType;
    }
    evaluate(t) {
        return Trees_1.Trees.findAllTokenNodes(t, this.tokenType);
    }
}
__decorate([
    Decorators.Override
], XPathTokenAnywhereElement.prototype, "evaluate", null);
exports.XPathTokenAnywhereElement = XPathTokenAnywhereElement;

});

var XPathTokenElement_1 = createCommonjsModule(function (module, exports) {
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
exports.XPathTokenElement = void 0;
// CONVERSTION complete, Burt Harris 10/14/2016




class XPathTokenElement extends XPathElement_1.XPathElement {
    constructor(tokenName, tokenType) {
        super(tokenName);
        this.tokenType = tokenType;
    }
    evaluate(t) {
        // return all children of t that match nodeName
        let nodes = [];
        for (let c of Trees_1.Trees.getChildren(t)) {
            if (c instanceof TerminalNode_1.TerminalNode) {
                if ((c.symbol.type === this.tokenType && !this.invert) ||
                    (c.symbol.type !== this.tokenType && this.invert)) {
                    nodes.push(c);
                }
            }
        }
        return nodes;
    }
}
__decorate([
    Decorators.Override
], XPathTokenElement.prototype, "evaluate", null);
exports.XPathTokenElement = XPathTokenElement;

});

var XPathWildcardAnywhereElement_1 = createCommonjsModule(function (module, exports) {
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
exports.XPathWildcardAnywhereElement = void 0;
// CONVERSTION complete, Burt Harris 10/14/2016




class XPathWildcardAnywhereElement extends XPathElement_1.XPathElement {
    constructor() {
        super(XPath_1.XPath.WILDCARD);
    }
    evaluate(t) {
        if (this.invert) {
            // !* is weird but valid (empty)
            return [];
        }
        return Trees_1.Trees.getDescendants(t);
    }
}
__decorate([
    Decorators.Override
], XPathWildcardAnywhereElement.prototype, "evaluate", null);
exports.XPathWildcardAnywhereElement = XPathWildcardAnywhereElement;

});

var XPathWildcardElement_1 = createCommonjsModule(function (module, exports) {
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
exports.XPathWildcardElement = void 0;
// CONVERSTION complete, Burt Harris 10/14/2016




class XPathWildcardElement extends XPathElement_1.XPathElement {
    constructor() {
        super(XPath_1.XPath.WILDCARD);
    }
    evaluate(t) {
        let kids = [];
        if (this.invert) {
            // !* is weird but valid (empty)
            return kids;
        }
        for (let c of Trees_1.Trees.getChildren(t)) {
            kids.push(c);
        }
        return kids;
    }
}
__decorate([
    Decorators.Override
], XPathWildcardElement.prototype, "evaluate", null);
exports.XPathWildcardElement = XPathWildcardElement;

});

var XPath_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.XPath = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:46.4373888-07:00













/**
 * Represent a subset of XPath XML path syntax for use in identifying nodes in
 * parse trees.
 *
 * Split path into words and separators `/` and `//` via ANTLR
 * itself then walk path elements from left to right. At each separator-word
 * pair, find set of nodes. Next stage uses those as work list.
 *
 * The basic interface is
 * {@link XPath#findAll ParseTree.findAll}`(tree, pathString, parser)`.
 * But that is just shorthand for:
 *
 * ```
 * let p = new XPath(parser, pathString);
 * return p.evaluate(tree);
 * ```
 *
 * See `TestXPath` for descriptions. In short, this
 * allows operators:
 *
 * | | |
 * | --- | --- |
 * | `/` | root |
 * | `//` | anywhere |
 * | `!` | invert; this much appear directly after root or anywhere operator |
 *
 * and path elements:
 *
 * | | |
 * | --- | --- |
 * | `ID` | token name |
 * | `'string'` | any string literal token from the grammar |
 * | `expr` | rule name |
 * | `*` | wildcard matching any node |
 *
 * Whitespace is not allowed.
 */
class XPath {
    constructor(parser, path) {
        this.parser = parser;
        this.path = path;
        this.elements = this.split(path);
        // console.log(this.elements.toString());
    }
    // TODO: check for invalid token/rule names, bad syntax
    split(path) {
        let lexer = new XPathLexer_1.XPathLexer(CharStreams_1.CharStreams.fromString(path));
        lexer.recover = (e) => { throw e; };
        lexer.removeErrorListeners();
        lexer.addErrorListener(new XPathLexerErrorListener_1.XPathLexerErrorListener());
        let tokenStream = new CommonTokenStream_1.CommonTokenStream(lexer);
        try {
            tokenStream.fill();
        }
        catch (e) {
            if (e instanceof LexerNoViableAltException_1.LexerNoViableAltException) {
                let pos = lexer.charPositionInLine;
                let msg = "Invalid tokens or characters at index " + pos + " in path '" + path + "' -- " + e.message;
                throw new RangeError(msg);
            }
            throw e;
        }
        let tokens = tokenStream.getTokens();
        // console.log("path=" + path + "=>" + tokens);
        let elements = [];
        let n = tokens.length;
        let i = 0;
        loop: while (i < n) {
            let el = tokens[i];
            let next;
            switch (el.type) {
                case XPathLexer_1.XPathLexer.ROOT:
                case XPathLexer_1.XPathLexer.ANYWHERE:
                    let anywhere = el.type === XPathLexer_1.XPathLexer.ANYWHERE;
                    i++;
                    next = tokens[i];
                    let invert = next.type === XPathLexer_1.XPathLexer.BANG;
                    if (invert) {
                        i++;
                        next = tokens[i];
                    }
                    let pathElement = this.getXPathElement(next, anywhere);
                    pathElement.invert = invert;
                    elements.push(pathElement);
                    i++;
                    break;
                case XPathLexer_1.XPathLexer.TOKEN_REF:
                case XPathLexer_1.XPathLexer.RULE_REF:
                case XPathLexer_1.XPathLexer.WILDCARD:
                    elements.push(this.getXPathElement(el, false));
                    i++;
                    break;
                case Token_1.Token.EOF:
                    break loop;
                default:
                    throw new Error("Unknowth path element " + el);
            }
        }
        return elements;
    }
    /**
     * Convert word like `*` or `ID` or `expr` to a path
     * element. `anywhere` is `true` if `//` precedes the
     * word.
     */
    getXPathElement(wordToken, anywhere) {
        if (wordToken.type === Token_1.Token.EOF) {
            throw new Error("Missing path element at end of path");
        }
        let word = wordToken.text;
        if (word == null) {
            throw new Error("Expected wordToken to have text content.");
        }
        let ttype = this.parser.getTokenType(word);
        let ruleIndex = this.parser.getRuleIndex(word);
        switch (wordToken.type) {
            case XPathLexer_1.XPathLexer.WILDCARD:
                return anywhere ?
                    new XPathWildcardAnywhereElement_1.XPathWildcardAnywhereElement() :
                    new XPathWildcardElement_1.XPathWildcardElement();
            case XPathLexer_1.XPathLexer.TOKEN_REF:
            case XPathLexer_1.XPathLexer.STRING:
                if (ttype === Token_1.Token.INVALID_TYPE) {
                    throw new Error(word + " at index " +
                        wordToken.startIndex +
                        " isn't a valid token name");
                }
                return anywhere ?
                    new XPathTokenAnywhereElement_1.XPathTokenAnywhereElement(word, ttype) :
                    new XPathTokenElement_1.XPathTokenElement(word, ttype);
            default:
                if (ruleIndex === -1) {
                    throw new Error(word + " at index " +
                        wordToken.startIndex +
                        " isn't a valid rule name");
                }
                return anywhere ?
                    new XPathRuleAnywhereElement_1.XPathRuleAnywhereElement(word, ruleIndex) :
                    new XPathRuleElement_1.XPathRuleElement(word, ruleIndex);
        }
    }
    static findAll(tree, xpath, parser) {
        let p = new XPath(parser, xpath);
        return p.evaluate(tree);
    }
    /**
     * Return a list of all nodes starting at `t` as root that satisfy the
     * path. The root `/` is relative to the node passed to {@link evaluate}.
     */
    evaluate(t) {
        let dummyRoot = new ParserRuleContext_1.ParserRuleContext();
        dummyRoot.addChild(t);
        let work = new Set([dummyRoot]);
        let i = 0;
        while (i < this.elements.length) {
            let next = new Set();
            for (let node of work) {
                if (node.childCount > 0) {
                    // only try to match next element if it has children
                    // e.g., //func/*/stat might have a token node for which
                    // we can't go looking for stat nodes.
                    let matching = this.elements[i].evaluate(node);
                    matching.forEach(next.add, next);
                }
            }
            i++;
            work = next;
        }
        return work;
    }
}
exports.XPath = XPath;
XPath.WILDCARD = "*"; // word not operator/separator
XPath.NOT = "!"; // word for invert operator

});

var ParseTreePattern_1 = createCommonjsModule(function (module, exports) {
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
exports.ParseTreePattern = void 0;
// CONVERSTION complete, Burt Harris 10/14/2016


/**
 * A pattern like `<ID> = <expr>;` converted to a {@link ParseTree} by
 * {@link ParseTreePatternMatcher#compile(String, int)}.
 */
let ParseTreePattern = class ParseTreePattern {
    /**
     * Construct a new instance of the {@link ParseTreePattern} class.
     *
     * @param matcher The {@link ParseTreePatternMatcher} which created this
     * tree pattern.
     * @param pattern The tree pattern in concrete syntax form.
     * @param patternRuleIndex The parser rule which serves as the root of the
     * tree pattern.
     * @param patternTree The tree pattern in {@link ParseTree} form.
     */
    constructor(matcher, pattern, patternRuleIndex, patternTree) {
        this._matcher = matcher;
        this._patternRuleIndex = patternRuleIndex;
        this._pattern = pattern;
        this._patternTree = patternTree;
    }
    /**
     * Match a specific parse tree against this tree pattern.
     *
     * @param tree The parse tree to match against this tree pattern.
     * @returns A {@link ParseTreeMatch} object describing the result of the
     * match operation. The `ParseTreeMatch.succeeded` method can be
     * used to determine whether or not the match was successful.
     */
    match(tree) {
        return this._matcher.match(tree, this);
    }
    /**
     * Determine whether or not a parse tree matches this tree pattern.
     *
     * @param tree The parse tree to match against this tree pattern.
     * @returns `true` if `tree` is a match for the current tree
     * pattern; otherwise, `false`.
     */
    matches(tree) {
        return this._matcher.match(tree, this).succeeded;
    }
    /**
     * Find all nodes using XPath and then try to match those subtrees against
     * this tree pattern.
     *
     * @param tree The {@link ParseTree} to match against this pattern.
     * @param xpath An expression matching the nodes
     *
     * @returns A collection of {@link ParseTreeMatch} objects describing the
     * successful matches. Unsuccessful matches are omitted from the result,
     * regardless of the reason for the failure.
     */
    findAll(tree, xpath) {
        let subtrees = XPath_1.XPath.findAll(tree, xpath, this._matcher.parser);
        let matches = [];
        for (let t of subtrees) {
            let match = this.match(t);
            if (match.succeeded) {
                matches.push(match);
            }
        }
        return matches;
    }
    /**
     * Get the {@link ParseTreePatternMatcher} which created this tree pattern.
     *
     * @returns The {@link ParseTreePatternMatcher} which created this tree
     * pattern.
     */
    get matcher() {
        return this._matcher;
    }
    /**
     * Get the tree pattern in concrete syntax form.
     *
     * @returns The tree pattern in concrete syntax form.
     */
    get pattern() {
        return this._pattern;
    }
    /**
     * Get the parser rule which serves as the outermost rule for the tree
     * pattern.
     *
     * @returns The parser rule which serves as the outermost rule for the tree
     * pattern.
     */
    get patternRuleIndex() {
        return this._patternRuleIndex;
    }
    /**
     * Get the tree pattern as a {@link ParseTree}. The rule and token tags from
     * the pattern are present in the parse tree as terminal nodes with a symbol
     * of type {@link RuleTagToken} or {@link TokenTagToken}.
     *
     * @returns The tree pattern as a {@link ParseTree}.
     */
    get patternTree() {
        return this._patternTree;
    }
};
__decorate([
    Decorators.NotNull
], ParseTreePattern.prototype, "_pattern", void 0);
__decorate([
    Decorators.NotNull
], ParseTreePattern.prototype, "_patternTree", void 0);
__decorate([
    Decorators.NotNull
], ParseTreePattern.prototype, "_matcher", void 0);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
], ParseTreePattern.prototype, "match", null);
__decorate([
    __param(0, Decorators.NotNull)
], ParseTreePattern.prototype, "matches", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull), __param(1, Decorators.NotNull)
], ParseTreePattern.prototype, "findAll", null);
__decorate([
    Decorators.NotNull
], ParseTreePattern.prototype, "matcher", null);
__decorate([
    Decorators.NotNull
], ParseTreePattern.prototype, "pattern", null);
__decorate([
    Decorators.NotNull
], ParseTreePattern.prototype, "patternTree", null);
ParseTreePattern = __decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(3, Decorators.NotNull)
], ParseTreePattern);
exports.ParseTreePattern = ParseTreePattern;

});

var RuleTagToken_1 = createCommonjsModule(function (module, exports) {
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
exports.RuleTagToken = void 0;


/**
 * A {@link Token} object representing an entire subtree matched by a parser
 * rule; e.g., `<expr>`. These tokens are created for {@link TagChunk}
 * chunks where the tag corresponds to a parser rule.
 */
let RuleTagToken = class RuleTagToken {
    /**
     * Constructs a new instance of {@link RuleTagToken} with the specified rule
     * name, bypass token type, and label.
     *
     * @param ruleName The name of the parser rule this rule tag matches.
     * @param bypassTokenType The bypass token type assigned to the parser rule.
     * @param label The label associated with the rule tag, or `undefined` if
     * the rule tag is unlabeled.
     *
     * @exception IllegalArgumentException if `ruleName` is not defined
     * or empty.
     */
    constructor(ruleName, bypassTokenType, label) {
        if (ruleName == null || ruleName.length === 0) {
            throw new Error("ruleName cannot be null or empty.");
        }
        this._ruleName = ruleName;
        this.bypassTokenType = bypassTokenType;
        this._label = label;
    }
    /**
     * Gets the name of the rule associated with this rule tag.
     *
     * @returns The name of the parser rule associated with this rule tag.
     */
    get ruleName() {
        return this._ruleName;
    }
    /**
     * Gets the label associated with the rule tag.
     *
     * @returns The name of the label associated with the rule tag, or
     * `undefined` if this is an unlabeled rule tag.
     */
    get label() {
        return this._label;
    }
    /**
     * {@inheritDoc}
     *
     * Rule tag tokens are always placed on the {@link #DEFAULT_CHANNEL}.
     */
    get channel() {
        return Token_1.Token.DEFAULT_CHANNEL;
    }
    /**
     * {@inheritDoc}
     *
     * This method returns the rule tag formatted with `<` and `>`
     * delimiters.
     */
    get text() {
        if (this._label != null) {
            return "<" + this._label + ":" + this._ruleName + ">";
        }
        return "<" + this._ruleName + ">";
    }
    /**
     * {@inheritDoc}
     *
     * Rule tag tokens have types assigned according to the rule bypass
     * transitions created during ATN deserialization.
     */
    get type() {
        return this.bypassTokenType;
    }
    /**
     * {@inheritDoc}
     *
     * The implementation for {@link RuleTagToken} always returns 0.
     */
    get line() {
        return 0;
    }
    /**
     * {@inheritDoc}
     *
     * The implementation for {@link RuleTagToken} always returns -1.
     */
    get charPositionInLine() {
        return -1;
    }
    /**
     * {@inheritDoc}
     *
     * The implementation for {@link RuleTagToken} always returns -1.
     */
    get tokenIndex() {
        return -1;
    }
    /**
     * {@inheritDoc}
     *
     * The implementation for {@link RuleTagToken} always returns -1.
     */
    get startIndex() {
        return -1;
    }
    /**
     * {@inheritDoc}
     *
     * The implementation for {@link RuleTagToken} always returns -1.
     */
    get stopIndex() {
        return -1;
    }
    /**
     * {@inheritDoc}
     *
     * The implementation for {@link RuleTagToken} always returns `undefined`.
     */
    get tokenSource() {
        return undefined;
    }
    /**
     * {@inheritDoc}
     *
     * The implementation for {@link RuleTagToken} always returns `undefined`.
     */
    get inputStream() {
        return undefined;
    }
    /**
     * {@inheritDoc}
     *
     * The implementation for {@link RuleTagToken} returns a string of the form
     * `ruleName:bypassTokenType`.
     */
    toString() {
        return this._ruleName + ":" + this.bypassTokenType;
    }
};
__decorate([
    Decorators.NotNull
], RuleTagToken.prototype, "ruleName", null);
__decorate([
    Decorators.Override
], RuleTagToken.prototype, "channel", null);
__decorate([
    Decorators.Override
], RuleTagToken.prototype, "text", null);
__decorate([
    Decorators.Override
], RuleTagToken.prototype, "type", null);
__decorate([
    Decorators.Override
], RuleTagToken.prototype, "line", null);
__decorate([
    Decorators.Override
], RuleTagToken.prototype, "charPositionInLine", null);
__decorate([
    Decorators.Override
], RuleTagToken.prototype, "tokenIndex", null);
__decorate([
    Decorators.Override
], RuleTagToken.prototype, "startIndex", null);
__decorate([
    Decorators.Override
], RuleTagToken.prototype, "stopIndex", null);
__decorate([
    Decorators.Override
], RuleTagToken.prototype, "tokenSource", null);
__decorate([
    Decorators.Override
], RuleTagToken.prototype, "inputStream", null);
__decorate([
    Decorators.Override
], RuleTagToken.prototype, "toString", null);
RuleTagToken = __decorate([
    __param(0, Decorators.NotNull)
], RuleTagToken);
exports.RuleTagToken = RuleTagToken;

});

var Chunk_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chunk = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:45.2799060-07:00
/**
 * A chunk is either a token tag, a rule tag, or a span of literal text within a
 * tree pattern.
 *
 * The method {@link ParseTreePatternMatcher#split(String)} returns a list of
 * chunks in preparation for creating a token stream by
 * {@link ParseTreePatternMatcher#tokenize(String)}. From there, we get a parse
 * tree from with {@link ParseTreePatternMatcher#compile(String, int)}. These
 * chunks are converted to {@link RuleTagToken}, {@link TokenTagToken}, or the
 * regular tokens of the text surrounding the tags.
 */
class Chunk {
}
exports.Chunk = Chunk;

});

var TagChunk_1 = createCommonjsModule(function (module, exports) {
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
exports.TagChunk = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:46.1670669-07:00


/**
 * Represents a placeholder tag in a tree pattern. A tag can have any of the
 * following forms.
 *
 * * `expr`: An unlabeled placeholder for a parser rule `expr`.
 * * `ID`: An unlabeled placeholder for a token of type `ID`.
 * * `e:expr`: A labeled placeholder for a parser rule `expr`.
 * * `id:ID`: A labeled placeholder for a token of type `ID`.
 *
 * This class does not perform any validation on the tag or label names aside
 * from ensuring that the tag is a defined, non-empty string.
 */
class TagChunk extends Chunk_1.Chunk {
    /**
     * Construct a new instance of {@link TagChunk} using the specified label
     * and tag.
     *
     * @param label The label for the tag. If this is `undefined`, the
     * {@link TagChunk} represents an unlabeled tag.
     * @param tag The tag, which should be the name of a parser rule or token
     * type.
     *
     * @exception IllegalArgumentException if `tag` is not defined or
     * empty.
     */
    constructor(tag, label) {
        super();
        if (tag == null || tag.length === 0) {
            throw new Error("tag cannot be null or empty");
        }
        this._tag = tag;
        this._label = label;
    }
    /**
     * Get the tag for this chunk.
     *
     * @returns The tag for the chunk.
     */
    get tag() {
        return this._tag;
    }
    /**
     * Get the label, if any, assigned to this chunk.
     *
     * @returns The label assigned to this chunk, or `undefined` if no label is
     * assigned to the chunk.
     */
    get label() {
        return this._label;
    }
    /**
     * This method returns a text representation of the tag chunk. Labeled tags
     * are returned in the form `label:tag`, and unlabeled tags are
     * returned as just the tag name.
     */
    toString() {
        if (this._label != null) {
            return this._label + ":" + this._tag;
        }
        return this._tag;
    }
}
__decorate([
    Decorators.NotNull
], TagChunk.prototype, "tag", null);
__decorate([
    Decorators.Override
], TagChunk.prototype, "toString", null);
exports.TagChunk = TagChunk;

});

var TextChunk_1 = createCommonjsModule(function (module, exports) {
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
exports.TextChunk = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:46.2521448-07:00


/**
 * Represents a span of raw text (concrete syntax) between tags in a tree
 * pattern string.
 */
let TextChunk = class TextChunk extends Chunk_1.Chunk {
    /**
     * Constructs a new instance of {@link TextChunk} with the specified text.
     *
     * @param text The text of this chunk.
     * @exception IllegalArgumentException if `text` is not defined.
     */
    constructor(text) {
        super();
        if (text == null) {
            throw new Error("text cannot be null");
        }
        this._text = text;
    }
    /**
     * Gets the raw text of this chunk.
     *
     * @returns The text of the chunk.
     */
    get text() {
        return this._text;
    }
    /**
     * {@inheritDoc}
     *
     * The implementation for {@link TextChunk} returns the result of
     * `text` in single quotes.
     */
    toString() {
        return "'" + this._text + "'";
    }
};
__decorate([
    Decorators.NotNull
], TextChunk.prototype, "_text", void 0);
__decorate([
    Decorators.NotNull
], TextChunk.prototype, "text", null);
__decorate([
    Decorators.Override
], TextChunk.prototype, "toString", null);
TextChunk = __decorate([
    __param(0, Decorators.NotNull)
], TextChunk);
exports.TextChunk = TextChunk;

});

var TokenTagToken_1 = createCommonjsModule(function (module, exports) {
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
exports.TokenTagToken = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:46.3281988-07:00


/**
 * A {@link Token} object representing a token of a particular type; e.g.,
 * `<ID>`. These tokens are created for {@link TagChunk} chunks where the
 * tag corresponds to a lexer rule or token type.
 */
let TokenTagToken = class TokenTagToken extends CommonToken_1.CommonToken {
    /**
     * Constructs a new instance of {@link TokenTagToken} with the specified
     * token name, type, and label.
     *
     * @param tokenName The token name.
     * @param type The token type.
     * @param label The label associated with the token tag, or `undefined` if
     * the token tag is unlabeled.
     */
    constructor(tokenName, type, label) {
        super(type);
        this._tokenName = tokenName;
        this._label = label;
    }
    /**
     * Gets the token name.
     * @returns The token name.
     */
    get tokenName() {
        return this._tokenName;
    }
    /**
     * Gets the label associated with the rule tag.
     *
     * @returns The name of the label associated with the rule tag, or
     * `undefined` if this is an unlabeled rule tag.
     */
    get label() {
        return this._label;
    }
    /**
     * {@inheritDoc}
     *
     * The implementation for {@link TokenTagToken} returns the token tag
     * formatted with `<` and `>` delimiters.
     */
    get text() {
        if (this._label != null) {
            return "<" + this._label + ":" + this._tokenName + ">";
        }
        return "<" + this._tokenName + ">";
    }
    /**
     * {@inheritDoc}
     *
     * The implementation for {@link TokenTagToken} returns a string of the form
     * `tokenName:type`.
     */
    toString() {
        return this._tokenName + ":" + this.type;
    }
};
__decorate([
    Decorators.NotNull
], TokenTagToken.prototype, "_tokenName", void 0);
__decorate([
    Decorators.NotNull
], TokenTagToken.prototype, "tokenName", null);
__decorate([
    Decorators.Override
], TokenTagToken.prototype, "text", null);
__decorate([
    Decorators.Override
], TokenTagToken.prototype, "toString", null);
TokenTagToken = __decorate([
    __param(0, Decorators.NotNull)
], TokenTagToken);
exports.TokenTagToken = TokenTagToken;

});

var ParseTreePatternMatcher_1 = createCommonjsModule(function (module, exports) {
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
exports.ParseTreePatternMatcher = void 0;
// CONVERSTION complete, Burt Harris 10/14/2016



















/**
 * A tree pattern matching mechanism for ANTLR {@link ParseTree}s.
 *
 * Patterns are strings of source input text with special tags representing
 * token or rule references such as:
 *
 * ```
 * <ID> = <expr>;
 * ```
 *
 * Given a pattern start rule such as `statement`, this object constructs
 * a {@link ParseTree} with placeholders for the `ID` and `expr`
 * subtree. Then the {@link #match} routines can compare an actual
 * {@link ParseTree} from a parse with this pattern. Tag `<ID>` matches
 * any `ID` token and tag `<expr>` references the result of the
 * `expr` rule (generally an instance of `ExprContext`.
 *
 * Pattern `x = 0;` is a similar pattern that matches the same pattern
 * except that it requires the identifier to be `x` and the expression to
 * be `0`.
 *
 * The {@link #matches} routines return `true` or `false` based
 * upon a match for the tree rooted at the parameter sent in. The
 * {@link #match} routines return a {@link ParseTreeMatch} object that
 * contains the parse tree, the parse tree pattern, and a map from tag name to
 * matched nodes (more below). A subtree that fails to match, returns with
 * {@link ParseTreeMatch#mismatchedNode} set to the first tree node that did not
 * match.
 *
 * For efficiency, you can compile a tree pattern in string form to a
 * {@link ParseTreePattern} object.
 *
 * See `TestParseTreeMatcher` for lots of examples.
 * {@link ParseTreePattern} has two static helper methods:
 * {@link ParseTreePattern#findAll} and {@link ParseTreePattern#match} that
 * are easy to use but not super efficient because they create new
 * {@link ParseTreePatternMatcher} objects each time and have to compile the
 * pattern in string form before using it.
 *
 * The lexer and parser that you pass into the {@link ParseTreePatternMatcher}
 * constructor are used to parse the pattern in string form. The lexer converts
 * the `<ID> = <expr>;` into a sequence of four tokens (assuming lexer
 * throws out whitespace or puts it on a hidden channel). Be aware that the
 * input stream is reset for the lexer (but not the parser; a
 * {@link ParserInterpreter} is created to parse the input.). Any user-defined
 * fields you have put into the lexer might get changed when this mechanism asks
 * it to scan the pattern string.
 *
 * Normally a parser does not accept token `<expr>` as a valid
 * `expr` but, from the parser passed in, we create a special version of
 * the underlying grammar representation (an {@link ATN}) that allows imaginary
 * tokens representing rules (`<expr>`) to match entire rules. We call
 * these *bypass alternatives*.
 *
 * Delimiters are `<`} and `>`}, with `\` as the escape string
 * by default, but you can set them to whatever you want using
 * {@link #setDelimiters}. You must escape both start and stop strings
 * `\<` and `\>`.
 */
class ParseTreePatternMatcher {
    /**
     * Constructs a {@link ParseTreePatternMatcher} or from a {@link Lexer} and
     * {@link Parser} object. The lexer input stream is altered for tokenizing
     * the tree patterns. The parser is used as a convenient mechanism to get
     * the grammar name, plus token, rule names.
     */
    constructor(lexer, parser) {
        this.start = "<";
        this.stop = ">";
        this.escape = "\\"; // e.g., \< and \> must escape BOTH!
        /**
         * Regular expression corresponding to escape, for global replace
         */
        this.escapeRE = /\\/g;
        this._lexer = lexer;
        this._parser = parser;
    }
    /**
     * Set the delimiters used for marking rule and token tags within concrete
     * syntax used by the tree pattern parser.
     *
     * @param start The start delimiter.
     * @param stop The stop delimiter.
     * @param escapeLeft The escape sequence to use for escaping a start or stop delimiter.
     *
     * @throws {@link Error} if `start` is not defined or empty.
     * @throws {@link Error} if `stop` is not defined or empty.
     */
    setDelimiters(start, stop, escapeLeft) {
        if (!start) {
            throw new Error("start cannot be null or empty");
        }
        if (!stop) {
            throw new Error("stop cannot be null or empty");
        }
        this.start = start;
        this.stop = stop;
        this.escape = escapeLeft;
        this.escapeRE = new RegExp(escapeLeft.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
    }
    matches(tree, pattern, patternRuleIndex = 0) {
        if (typeof pattern === "string") {
            let p = this.compile(pattern, patternRuleIndex);
            return this.matches(tree, p);
        }
        else {
            let labels = new MultiMap_1.MultiMap();
            let mismatchedNode = this.matchImpl(tree, pattern.patternTree, labels);
            return !mismatchedNode;
        }
    }
    // Implementation of match
    match(tree, pattern, patternRuleIndex = 0) {
        if (typeof pattern === "string") {
            let p = this.compile(pattern, patternRuleIndex);
            return this.match(tree, p);
        }
        else {
            let labels = new MultiMap_1.MultiMap();
            let mismatchedNode = this.matchImpl(tree, pattern.patternTree, labels);
            return new ParseTreeMatch_1.ParseTreeMatch(tree, pattern, labels, mismatchedNode);
        }
    }
    /**
     * For repeated use of a tree pattern, compile it to a
     * {@link ParseTreePattern} using this method.
     */
    compile(pattern, patternRuleIndex) {
        let tokenList = this.tokenize(pattern);
        let tokenSrc = new ListTokenSource_1.ListTokenSource(tokenList);
        let tokens = new CommonTokenStream_1.CommonTokenStream(tokenSrc);
        const parser = this._parser;
        let parserInterp = new ParserInterpreter_1.ParserInterpreter(parser.grammarFileName, parser.vocabulary, parser.ruleNames, parser.getATNWithBypassAlts(), tokens);
        let tree;
        try {
            parserInterp.errorHandler = new BailErrorStrategy_1.BailErrorStrategy();
            tree = parserInterp.parse(patternRuleIndex);
            //			System.out.println("pattern tree = "+tree.toStringTree(parserInterp));
        }
        catch (e) {
            if (e instanceof ParseCancellationException_1.ParseCancellationException) {
                throw e.getCause();
            }
            else if (e instanceof RecognitionException_1.RecognitionException) {
                throw e;
            }
            else if (e instanceof Error) {
                throw new ParseTreePatternMatcher.CannotInvokeStartRule(e);
            }
            else {
                throw e;
            }
        }
        // Make sure tree pattern compilation checks for a complete parse
        if (tokens.LA(1) !== Token_1.Token.EOF) {
            throw new ParseTreePatternMatcher.StartRuleDoesNotConsumeFullPattern();
        }
        return new ParseTreePattern_1.ParseTreePattern(this, pattern, patternRuleIndex, tree);
    }
    /**
     * Used to convert the tree pattern string into a series of tokens. The
     * input stream is reset.
     */
    get lexer() {
        return this._lexer;
    }
    /**
     * Used to collect to the grammar file name, token names, rule names for
     * used to parse the pattern into a parse tree.
     */
    get parser() {
        return this._parser;
    }
    // ---- SUPPORT CODE ----
    /**
     * Recursively walk `tree` against `patternTree`, filling
     * `match.`{@link ParseTreeMatch#labels labels}.
     *
     * @returns the first node encountered in `tree` which does not match
     * a corresponding node in `patternTree`, or `undefined` if the match
     * was successful. The specific node returned depends on the matching
     * algorithm used by the implementation, and may be overridden.
     */
    matchImpl(tree, patternTree, labels) {
        if (!tree) {
            throw new TypeError("tree cannot be null");
        }
        if (!patternTree) {
            throw new TypeError("patternTree cannot be null");
        }
        // x and <ID>, x and y, or x and x; or could be mismatched types
        if (tree instanceof TerminalNode_1.TerminalNode && patternTree instanceof TerminalNode_1.TerminalNode) {
            let mismatchedNode;
            // both are tokens and they have same type
            if (tree.symbol.type === patternTree.symbol.type) {
                if (patternTree.symbol instanceof TokenTagToken_1.TokenTagToken) { // x and <ID>
                    let tokenTagToken = patternTree.symbol;
                    // track label->list-of-nodes for both token name and label (if any)
                    labels.map(tokenTagToken.tokenName, tree);
                    const l = tokenTagToken.label;
                    if (l) {
                        labels.map(l, tree);
                    }
                }
                else if (tree.text === patternTree.text) ;
                else {
                    // x and y
                    if (!mismatchedNode) {
                        mismatchedNode = tree;
                    }
                }
            }
            else {
                if (!mismatchedNode) {
                    mismatchedNode = tree;
                }
            }
            return mismatchedNode;
        }
        if (tree instanceof ParserRuleContext_1.ParserRuleContext
            && patternTree instanceof ParserRuleContext_1.ParserRuleContext) {
            let mismatchedNode;
            // (expr ...) and <expr>
            let ruleTagToken = this.getRuleTagToken(patternTree);
            if (ruleTagToken) {
                if (tree.ruleContext.ruleIndex === patternTree.ruleContext.ruleIndex) {
                    // track label->list-of-nodes for both rule name and label (if any)
                    labels.map(ruleTagToken.ruleName, tree);
                    const l = ruleTagToken.label;
                    if (l) {
                        labels.map(l, tree);
                    }
                }
                else {
                    if (!mismatchedNode) {
                        mismatchedNode = tree;
                    }
                }
                return mismatchedNode;
            }
            // (expr ...) and (expr ...)
            if (tree.childCount !== patternTree.childCount) {
                if (!mismatchedNode) {
                    mismatchedNode = tree;
                }
                return mismatchedNode;
            }
            let n = tree.childCount;
            for (let i = 0; i < n; i++) {
                let childMatch = this.matchImpl(tree.getChild(i), patternTree.getChild(i), labels);
                if (childMatch) {
                    return childMatch;
                }
            }
            return mismatchedNode;
        }
        // if nodes aren't both tokens or both rule nodes, can't match
        return tree;
    }
    /** Is `t` `(expr <expr>)` subtree? */
    getRuleTagToken(t) {
        if (t instanceof RuleNode_1.RuleNode) {
            if (t.childCount === 1 && t.getChild(0) instanceof TerminalNode_1.TerminalNode) {
                let c = t.getChild(0);
                if (c.symbol instanceof RuleTagToken_1.RuleTagToken) {
                    //					System.out.println("rule tag subtree "+t.toStringTree(parser));
                    return c.symbol;
                }
            }
        }
        return undefined;
    }
    tokenize(pattern) {
        // split pattern into chunks: sea (raw input) and islands (<ID>, <expr>)
        let chunks = this.split(pattern);
        // create token stream from text and tags
        let tokens = [];
        for (let chunk of chunks) {
            if (chunk instanceof TagChunk_1.TagChunk) {
                let tagChunk = chunk;
                const firstChar = tagChunk.tag.substr(0, 1);
                // add special rule token or conjure up new token from name
                if (firstChar === firstChar.toUpperCase()) {
                    let ttype = this._parser.getTokenType(tagChunk.tag);
                    if (ttype === Token_1.Token.INVALID_TYPE) {
                        throw new Error("Unknown token " + tagChunk.tag + " in pattern: " + pattern);
                    }
                    let t = new TokenTagToken_1.TokenTagToken(tagChunk.tag, ttype, tagChunk.label);
                    tokens.push(t);
                }
                else if (firstChar === firstChar.toLowerCase()) {
                    let ruleIndex = this._parser.getRuleIndex(tagChunk.tag);
                    if (ruleIndex === -1) {
                        throw new Error("Unknown rule " + tagChunk.tag + " in pattern: " + pattern);
                    }
                    let ruleImaginaryTokenType = this._parser.getATNWithBypassAlts().ruleToTokenType[ruleIndex];
                    tokens.push(new RuleTagToken_1.RuleTagToken(tagChunk.tag, ruleImaginaryTokenType, tagChunk.label));
                }
                else {
                    throw new Error("invalid tag: " + tagChunk.tag + " in pattern: " + pattern);
                }
            }
            else {
                let textChunk = chunk;
                this._lexer.inputStream = CharStreams_1.CharStreams.fromString(textChunk.text);
                let t = this._lexer.nextToken();
                while (t.type !== Token_1.Token.EOF) {
                    tokens.push(t);
                    t = this._lexer.nextToken();
                }
            }
        }
        //		System.out.println("tokens="+tokens);
        return tokens;
    }
    /** Split `<ID> = <e:expr> ;` into 4 chunks for tokenizing by {@link #tokenize}. */
    split(pattern) {
        let p = 0;
        let n = pattern.length;
        let chunks = [];
        // find all start and stop indexes first, then collect
        let starts = [];
        let stops = [];
        while (p < n) {
            if (p === pattern.indexOf(this.escape + this.start, p)) {
                p += this.escape.length + this.start.length;
            }
            else if (p === pattern.indexOf(this.escape + this.stop, p)) {
                p += this.escape.length + this.stop.length;
            }
            else if (p === pattern.indexOf(this.start, p)) {
                starts.push(p);
                p += this.start.length;
            }
            else if (p === pattern.indexOf(this.stop, p)) {
                stops.push(p);
                p += this.stop.length;
            }
            else {
                p++;
            }
        }
        //		System.out.println("");
        //		System.out.println(starts);
        //		System.out.println(stops);
        if (starts.length > stops.length) {
            throw new Error("unterminated tag in pattern: " + pattern);
        }
        if (starts.length < stops.length) {
            throw new Error("missing start tag in pattern: " + pattern);
        }
        let ntags = starts.length;
        for (let i = 0; i < ntags; i++) {
            if (starts[i] >= stops[i]) {
                throw new Error("tag delimiters out of order in pattern: " + pattern);
            }
        }
        // collect into chunks now
        if (ntags === 0) {
            let text = pattern.substring(0, n);
            chunks.push(new TextChunk_1.TextChunk(text));
        }
        if (ntags > 0 && starts[0] > 0) { // copy text up to first tag into chunks
            let text = pattern.substring(0, starts[0]);
            chunks.push(new TextChunk_1.TextChunk(text));
        }
        for (let i = 0; i < ntags; i++) {
            // copy inside of <tag>
            let tag = pattern.substring(starts[i] + this.start.length, stops[i]);
            let ruleOrToken = tag;
            let label;
            let colon = tag.indexOf(":");
            if (colon >= 0) {
                label = tag.substring(0, colon);
                ruleOrToken = tag.substring(colon + 1, tag.length);
            }
            chunks.push(new TagChunk_1.TagChunk(ruleOrToken, label));
            if (i + 1 < ntags) {
                // copy from end of <tag> to start of next
                let text = pattern.substring(stops[i] + this.stop.length, starts[i + 1]);
                chunks.push(new TextChunk_1.TextChunk(text));
            }
        }
        if (ntags > 0) {
            let afterLastTag = stops[ntags - 1] + this.stop.length;
            if (afterLastTag < n) { // copy text from end of last tag to end
                let text = pattern.substring(afterLastTag, n);
                chunks.push(new TextChunk_1.TextChunk(text));
            }
        }
        // strip out the escape sequences from text chunks but not tags
        for (let i = 0; i < chunks.length; i++) {
            let c = chunks[i];
            if (c instanceof TextChunk_1.TextChunk) {
                let unescaped = c.text.replace(this.escapeRE, "");
                if (unescaped.length < c.text.length) {
                    chunks[i] = new TextChunk_1.TextChunk(unescaped);
                }
            }
        }
        return chunks;
    }
}
__decorate([
    Decorators.NotNull,
    __param(1, Decorators.NotNull)
], ParseTreePatternMatcher.prototype, "match", null);
__decorate([
    Decorators.NotNull
], ParseTreePatternMatcher.prototype, "lexer", null);
__decorate([
    Decorators.NotNull
], ParseTreePatternMatcher.prototype, "parser", null);
__decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(2, Decorators.NotNull)
], ParseTreePatternMatcher.prototype, "matchImpl", null);
exports.ParseTreePatternMatcher = ParseTreePatternMatcher;
(function (ParseTreePatternMatcher) {
    class CannotInvokeStartRule extends Error {
        constructor(error) {
            super(`CannotInvokeStartRule: ${error}`);
            this.error = error;
        }
    }
    ParseTreePatternMatcher.CannotInvokeStartRule = CannotInvokeStartRule;
    // Fixes https://github.com/antlr/antlr4/issues/413
    // "Tree pattern compilation doesn't check for a complete parse"
    class StartRuleDoesNotConsumeFullPattern extends Error {
        constructor() {
            super("StartRuleDoesNotConsumeFullPattern");
        }
    }
    ParseTreePatternMatcher.StartRuleDoesNotConsumeFullPattern = StartRuleDoesNotConsumeFullPattern;
})(ParseTreePatternMatcher = exports.ParseTreePatternMatcher || (exports.ParseTreePatternMatcher = {}));

});

var DecisionEventInfo_1 = createCommonjsModule(function (module, exports) {
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
exports.DecisionEventInfo = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:28.2401032-07:00

/**
 * This is the base class for gathering detailed information about prediction
 * events which occur during parsing.
 *
 * Note that we could record the parser call stack at the time this event
 * occurred but in the presence of left recursive rules, the stack is kind of
 * meaningless. It's better to look at the individual configurations for their
 * individual stacks. Of course that is a {@link PredictionContext} object
 * not a parse tree node and so it does not have information about the extent
 * (start...stop) of the various subtrees. Examining the stack tops of all
 * configurations provide the return states for the rule invocations.
 * From there you can get the enclosing rule.
 *
 * @since 4.3
 */
let DecisionEventInfo = class DecisionEventInfo {
    constructor(decision, state, input, startIndex, stopIndex, fullCtx) {
        this.decision = decision;
        this.fullCtx = fullCtx;
        this.stopIndex = stopIndex;
        this.input = input;
        this.startIndex = startIndex;
        this.state = state;
    }
};
__decorate([
    Decorators.NotNull
], DecisionEventInfo.prototype, "input", void 0);
DecisionEventInfo = __decorate([
    __param(2, Decorators.NotNull)
], DecisionEventInfo);
exports.DecisionEventInfo = DecisionEventInfo;

});

var AmbiguityInfo_1 = createCommonjsModule(function (module, exports) {
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
exports.AmbiguityInfo = void 0;


/**
 * This class represents profiling event information for an ambiguity.
 * Ambiguities are decisions where a particular input resulted in an SLL
 * conflict, followed by LL prediction also reaching a conflict state
 * (indicating a true ambiguity in the grammar).
 *
 * This event may be reported during SLL prediction in cases where the
 * conflicting SLL configuration set provides sufficient information to
 * determine that the SLL conflict is truly an ambiguity. For example, if none
 * of the ATN configurations in the conflicting SLL configuration set have
 * traversed a global follow transition (i.e.
 * {@link ATNConfig#getReachesIntoOuterContext} is `false` for all
 * configurations), then the result of SLL prediction for that input is known to
 * be equivalent to the result of LL prediction for that input.
 *
 * In some cases, the minimum represented alternative in the conflicting LL
 * configuration set is not equal to the minimum represented alternative in the
 * conflicting SLL configuration set. Grammars and inputs which result in this
 * scenario are unable to use {@link PredictionMode#SLL}, which in turn means
 * they cannot use the two-stage parsing strategy to improve parsing performance
 * for that input.
 *
 * @see ParserATNSimulator#reportAmbiguity
 * @see ParserErrorListener#reportAmbiguity
 *
 * @since 4.3
 */
let AmbiguityInfo = class AmbiguityInfo extends DecisionEventInfo_1.DecisionEventInfo {
    /**
     * Constructs a new instance of the {@link AmbiguityInfo} class with the
     * specified detailed ambiguity information.
     *
     * @param decision The decision number
     * @param state The final simulator state identifying the ambiguous
     * alternatives for the current input
     * @param ambigAlts The set of alternatives in the decision that lead to a valid parse.
     *                  The predicted alt is the min(ambigAlts)
     * @param input The input token stream
     * @param startIndex The start index for the current prediction
     * @param stopIndex The index at which the ambiguity was identified during
     * prediction
     */
    constructor(decision, state, ambigAlts, input, startIndex, stopIndex) {
        super(decision, state, input, startIndex, stopIndex, state.useContext);
        this.ambigAlts = ambigAlts;
    }
    /**
     * Gets the set of alternatives in the decision that lead to a valid parse.
     *
     * @since 4.5
     */
    get ambiguousAlternatives() {
        return this.ambigAlts;
    }
};
__decorate([
    Decorators.NotNull
], AmbiguityInfo.prototype, "ambigAlts", void 0);
__decorate([
    Decorators.NotNull
], AmbiguityInfo.prototype, "ambiguousAlternatives", null);
AmbiguityInfo = __decorate([
    __param(1, Decorators.NotNull),
    __param(2, Decorators.NotNull),
    __param(3, Decorators.NotNull)
], AmbiguityInfo);
exports.AmbiguityInfo = AmbiguityInfo;

});

var ContextSensitivityInfo_1 = createCommonjsModule(function (module, exports) {
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
exports.ContextSensitivityInfo = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:28.1575933-07:00


/**
 * This class represents profiling event information for a context sensitivity.
 * Context sensitivities are decisions where a particular input resulted in an
 * SLL conflict, but LL prediction produced a single unique alternative.
 *
 * In some cases, the unique alternative identified by LL prediction is not
 * equal to the minimum represented alternative in the conflicting SLL
 * configuration set. Grammars and inputs which result in this scenario are
 * unable to use {@link PredictionMode#SLL}, which in turn means they cannot use
 * the two-stage parsing strategy to improve parsing performance for that
 * input.
 *
 * @see ParserATNSimulator#reportContextSensitivity
 * @see ParserErrorListener#reportContextSensitivity
 *
 * @since 4.3
 */
let ContextSensitivityInfo = class ContextSensitivityInfo extends DecisionEventInfo_1.DecisionEventInfo {
    /**
     * Constructs a new instance of the {@link ContextSensitivityInfo} class
     * with the specified detailed context sensitivity information.
     *
     * @param decision The decision number
     * @param state The final simulator state containing the unique
     * alternative identified by full-context prediction
     * @param input The input token stream
     * @param startIndex The start index for the current prediction
     * @param stopIndex The index at which the context sensitivity was
     * identified during full-context prediction
     */
    constructor(decision, state, input, startIndex, stopIndex) {
        super(decision, state, input, startIndex, stopIndex, true);
    }
};
ContextSensitivityInfo = __decorate([
    __param(1, Decorators.NotNull),
    __param(2, Decorators.NotNull)
], ContextSensitivityInfo);
exports.ContextSensitivityInfo = ContextSensitivityInfo;

});

var DecisionInfo_1 = createCommonjsModule(function (module, exports) {
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
exports.DecisionInfo = void 0;

/**
 * This class contains profiling gathered for a particular decision.
 *
 * Parsing performance in ANTLR 4 is heavily influenced by both static factors
 * (e.g. the form of the rules in the grammar) and dynamic factors (e.g. the
 * choice of input and the state of the DFA cache at the time profiling
 * operations are started). For best results, gather and use aggregate
 * statistics from a large sample of inputs representing the inputs expected in
 * production before using the results to make changes in the grammar.
 *
 * @since 4.3
 */
class DecisionInfo {
    /**
     * Constructs a new instance of the {@link DecisionInfo} class to contain
     * statistics for a particular decision.
     *
     * @param decision The decision number
     */
    constructor(decision) {
        /**
         * The total number of times {@link ParserATNSimulator#adaptivePredict} was
         * invoked for this decision.
         */
        this.invocations = 0;
        /**
         * The total time spent in {@link ParserATNSimulator#adaptivePredict} for
         * this decision, in nanoseconds.
         *
         * The value of this field contains the sum of differential results obtained
         * by {@link System#nanoTime()}, and is not adjusted to compensate for JIT
         * and/or garbage collection overhead. For best accuracy, use a modern JVM
         * implementation that provides precise results from
         * {@link System#nanoTime()}, and perform profiling in a separate process
         * which is warmed up by parsing the input prior to profiling. If desired,
         * call {@link ATNSimulator#clearDFA} to reset the DFA cache to its initial
         * state before starting the profiling measurement pass.
         */
        this.timeInPrediction = 0;
        /**
         * The sum of the lookahead required for SLL prediction for this decision.
         * Note that SLL prediction is used before LL prediction for performance
         * reasons even when {@link PredictionMode#LL} or
         * {@link PredictionMode#LL_EXACT_AMBIG_DETECTION} is used.
         */
        this.SLL_TotalLook = 0;
        /**
         * Gets the minimum lookahead required for any single SLL prediction to
         * complete for this decision, by reaching a unique prediction, reaching an
         * SLL conflict state, or encountering a syntax error.
         */
        this.SLL_MinLook = 0;
        /**
         * Gets the maximum lookahead required for any single SLL prediction to
         * complete for this decision, by reaching a unique prediction, reaching an
         * SLL conflict state, or encountering a syntax error.
         */
        this.SLL_MaxLook = 0;
        /**
         * The sum of the lookahead required for LL prediction for this decision.
         * Note that LL prediction is only used when SLL prediction reaches a
         * conflict state.
         */
        this.LL_TotalLook = 0;
        /**
         * Gets the minimum lookahead required for any single LL prediction to
         * complete for this decision. An LL prediction completes when the algorithm
         * reaches a unique prediction, a conflict state (for
         * {@link PredictionMode#LL}, an ambiguity state (for
         * {@link PredictionMode#LL_EXACT_AMBIG_DETECTION}, or a syntax error.
         */
        this.LL_MinLook = 0;
        /**
         * Gets the maximum lookahead required for any single LL prediction to
         * complete for this decision. An LL prediction completes when the algorithm
         * reaches a unique prediction, a conflict state (for
         * {@link PredictionMode#LL}, an ambiguity state (for
         * {@link PredictionMode#LL_EXACT_AMBIG_DETECTION}, or a syntax error.
         */
        this.LL_MaxLook = 0;
        /**
         * A collection of {@link ContextSensitivityInfo} instances describing the
         * context sensitivities encountered during LL prediction for this decision.
         *
         * @see ContextSensitivityInfo
         */
        this.contextSensitivities = [];
        /**
         * A collection of {@link ErrorInfo} instances describing the parse errors
         * identified during calls to {@link ParserATNSimulator#adaptivePredict} for
         * this decision.
         *
         * @see ErrorInfo
         */
        this.errors = [];
        /**
         * A collection of {@link AmbiguityInfo} instances describing the
         * ambiguities encountered during LL prediction for this decision.
         *
         * @see AmbiguityInfo
         */
        this.ambiguities = [];
        /**
         * A collection of {@link PredicateEvalInfo} instances describing the
         * results of evaluating individual predicates during prediction for this
         * decision.
         *
         * @see PredicateEvalInfo
         */
        this.predicateEvals = [];
        /**
         * The total number of ATN transitions required during SLL prediction for
         * this decision. An ATN transition is determined by the number of times the
         * DFA does not contain an edge that is required for prediction, resulting
         * in on-the-fly computation of that edge.
         *
         * If DFA caching of SLL transitions is employed by the implementation, ATN
         * computation may cache the computed edge for efficient lookup during
         * future parsing of this decision. Otherwise, the SLL parsing algorithm
         * will use ATN transitions exclusively.
         *
         * @see #SLL_ATNTransitions
         * @see ParserATNSimulator#computeTargetState
         * @see LexerATNSimulator#computeTargetState
         */
        this.SLL_ATNTransitions = 0;
        /**
         * The total number of DFA transitions required during SLL prediction for
         * this decision.
         *
         * If the ATN simulator implementation does not use DFA caching for SLL
         * transitions, this value will be 0.
         *
         * @see ParserATNSimulator#getExistingTargetState
         * @see LexerATNSimulator#getExistingTargetState
         */
        this.SLL_DFATransitions = 0;
        /**
         * Gets the total number of times SLL prediction completed in a conflict
         * state, resulting in fallback to LL prediction.
         *
         * Note that this value is not related to whether or not
         * {@link PredictionMode#SLL} may be used successfully with a particular
         * grammar. If the ambiguity resolution algorithm applied to the SLL
         * conflicts for this decision produce the same result as LL prediction for
         * this decision, {@link PredictionMode#SLL} would produce the same overall
         * parsing result as {@link PredictionMode#LL}.
         */
        this.LL_Fallback = 0;
        /**
         * The total number of ATN transitions required during LL prediction for
         * this decision. An ATN transition is determined by the number of times the
         * DFA does not contain an edge that is required for prediction, resulting
         * in on-the-fly computation of that edge.
         *
         * If DFA caching of LL transitions is employed by the implementation, ATN
         * computation may cache the computed edge for efficient lookup during
         * future parsing of this decision. Otherwise, the LL parsing algorithm will
         * use ATN transitions exclusively.
         *
         * @see #LL_DFATransitions
         * @see ParserATNSimulator#computeTargetState
         * @see LexerATNSimulator#computeTargetState
         */
        this.LL_ATNTransitions = 0;
        /**
         * The total number of DFA transitions required during LL prediction for
         * this decision.
         *
         * If the ATN simulator implementation does not use DFA caching for LL
         * transitions, this value will be 0.
         *
         * @see ParserATNSimulator#getExistingTargetState
         * @see LexerATNSimulator#getExistingTargetState
         */
        this.LL_DFATransitions = 0;
        this.decision = decision;
    }
    toString() {
        return "{" +
            "decision=" + this.decision +
            ", contextSensitivities=" + this.contextSensitivities.length +
            ", errors=" + this.errors.length +
            ", ambiguities=" + this.ambiguities.length +
            ", SLL_lookahead=" + this.SLL_TotalLook +
            ", SLL_ATNTransitions=" + this.SLL_ATNTransitions +
            ", SLL_DFATransitions=" + this.SLL_DFATransitions +
            ", LL_Fallback=" + this.LL_Fallback +
            ", LL_lookahead=" + this.LL_TotalLook +
            ", LL_ATNTransitions=" + this.LL_ATNTransitions +
            "}";
    }
}
__decorate([
    Decorators.Override
], DecisionInfo.prototype, "toString", null);
exports.DecisionInfo = DecisionInfo;

});

var ErrorInfo_1 = createCommonjsModule(function (module, exports) {
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
exports.ErrorInfo = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:28.7213647-07:00


/**
 * This class represents profiling event information for a syntax error
 * identified during prediction. Syntax errors occur when the prediction
 * algorithm is unable to identify an alternative which would lead to a
 * successful parse.
 *
 * @see Parser#notifyErrorListeners(Token, String, RecognitionException)
 * @see ANTLRErrorListener#syntaxError
 *
 * @since 4.3
 */
let ErrorInfo = class ErrorInfo extends DecisionEventInfo_1.DecisionEventInfo {
    /**
     * Constructs a new instance of the {@link ErrorInfo} class with the
     * specified detailed syntax error information.
     *
     * @param decision The decision number
     * @param state The final simulator state reached during prediction
     * prior to reaching the {@link ATNSimulator#ERROR} state
     * @param input The input token stream
     * @param startIndex The start index for the current prediction
     * @param stopIndex The index at which the syntax error was identified
     */
    constructor(decision, state, input, startIndex, stopIndex) {
        super(decision, state, input, startIndex, stopIndex, state.useContext);
    }
};
ErrorInfo = __decorate([
    __param(1, Decorators.NotNull),
    __param(2, Decorators.NotNull)
], ErrorInfo);
exports.ErrorInfo = ErrorInfo;

});

var LookaheadEventInfo_1 = createCommonjsModule(function (module, exports) {
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
exports.LookaheadEventInfo = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:30.6852565-07:00


/**
 * This class represents profiling event information for tracking the lookahead
 * depth required in order to make a prediction.
 *
 * @since 4.3
 */
let LookaheadEventInfo = class LookaheadEventInfo extends DecisionEventInfo_1.DecisionEventInfo {
    /**
     * Constructs a new instance of the {@link LookaheadEventInfo} class with
     * the specified detailed lookahead information.
     *
     * @param decision The decision number
     * @param state The final simulator state containing the necessary
     * information to determine the result of a prediction, or `undefined` if
     * the final state is not available
     * @param input The input token stream
     * @param startIndex The start index for the current prediction
     * @param stopIndex The index at which the prediction was finally made
     * @param fullCtx `true` if the current lookahead is part of an LL
     * prediction; otherwise, `false` if the current lookahead is part of
     * an SLL prediction
     */
    constructor(decision, state, predictedAlt, input, startIndex, stopIndex, fullCtx) {
        super(decision, state, input, startIndex, stopIndex, fullCtx);
        this.predictedAlt = predictedAlt;
    }
};
LookaheadEventInfo = __decorate([
    __param(3, Decorators.NotNull)
], LookaheadEventInfo);
exports.LookaheadEventInfo = LookaheadEventInfo;

});

var PredicateEvalInfo_1 = createCommonjsModule(function (module, exports) {
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
exports.PredicateEvalInfo = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:35.1914305-07:00


/**
 * This class represents profiling event information for semantic predicate
 * evaluations which occur during prediction.
 *
 * @see ParserATNSimulator#evalSemanticContext
 *
 * @since 4.3
 */
let PredicateEvalInfo = class PredicateEvalInfo extends DecisionEventInfo_1.DecisionEventInfo {
    /**
     * Constructs a new instance of the {@link PredicateEvalInfo} class with the
     * specified detailed predicate evaluation information.
     *
     * @param state The simulator state
     * @param decision The decision number
     * @param input The input token stream
     * @param startIndex The start index for the current prediction
     * @param stopIndex The index at which the predicate evaluation was
     * triggered. Note that the input stream may be reset to other positions for
     * the actual evaluation of individual predicates.
     * @param semctx The semantic context which was evaluated
     * @param evalResult The results of evaluating the semantic context
     * @param predictedAlt The alternative number for the decision which is
     * guarded by the semantic context `semctx`. See {@link #predictedAlt}
     * for more information.
     *
     * @see ParserATNSimulator#evalSemanticContext(SemanticContext, ParserRuleContext, int)
     * @see SemanticContext#eval(Recognizer, RuleContext)
     */
    constructor(state, decision, input, startIndex, stopIndex, semctx, evalResult, predictedAlt) {
        super(decision, state, input, startIndex, stopIndex, state.useContext);
        this.semctx = semctx;
        this.evalResult = evalResult;
        this.predictedAlt = predictedAlt;
    }
};
PredicateEvalInfo = __decorate([
    __param(0, Decorators.NotNull),
    __param(2, Decorators.NotNull),
    __param(5, Decorators.NotNull)
], PredicateEvalInfo);
exports.PredicateEvalInfo = PredicateEvalInfo;

});

var ProfilingATNSimulator_1 = createCommonjsModule(function (module, exports) {
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
exports.ProfilingATNSimulator = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:36.4188352-07:00












/**
 * @since 4.3
 */
class ProfilingATNSimulator extends ParserATNSimulator_1.ParserATNSimulator {
    constructor(parser) {
        super(parser.interpreter.atn, parser);
        this._startIndex = 0;
        this._sllStopIndex = 0;
        this._llStopIndex = 0;
        this.currentDecision = 0;
        /** At the point of LL failover, we record how SLL would resolve the conflict so that
         *  we can determine whether or not a decision / input pair is context-sensitive.
         *  If LL gives a different result than SLL's predicted alternative, we have a
         *  context sensitivity for sure. The converse is not necessarily true, however.
         *  It's possible that after conflict resolution chooses minimum alternatives,
         *  SLL could get the same answer as LL. Regardless of whether or not the result indicates
         *  an ambiguity, it is not treated as a context sensitivity because LL prediction
         *  was not required in order to produce a correct prediction for this decision and input sequence.
         *  It may in fact still be a context sensitivity but we don't know by looking at the
         *  minimum alternatives for the current input.
         */
        this.conflictingAltResolvedBySLL = 0;
        this.optimize_ll1 = false;
        this.reportAmbiguities = true;
        this.numDecisions = this.atn.decisionToState.length;
        this.decisions = [];
        for (let i = 0; i < this.numDecisions; i++) {
            this.decisions.push(new DecisionInfo_1.DecisionInfo(i));
        }
    }
    adaptivePredict(input, decision, outerContext, useContext) {
        if (useContext !== undefined) {
            return super.adaptivePredict(input, decision, outerContext, useContext);
        }
        try {
            this._input = input;
            this._startIndex = input.index;
            // it's possible for SLL to reach a conflict state without consuming any input
            this._sllStopIndex = this._startIndex - 1;
            this._llStopIndex = -1;
            this.currentDecision = decision;
            this.currentState = undefined;
            this.conflictingAltResolvedBySLL = ATN_1.ATN.INVALID_ALT_NUMBER;
            let start = process.hrtime();
            let alt = super.adaptivePredict(input, decision, outerContext);
            let stop = process.hrtime();
            let nanoseconds = (stop[0] - start[0]) * 1000000000;
            if (nanoseconds === 0) {
                nanoseconds = stop[1] - start[1];
            }
            else {
                // Add nanoseconds from start to end of that second, plus start of the end second to end
                nanoseconds += (1000000000 - start[1]) + stop[1];
            }
            this.decisions[decision].timeInPrediction += nanoseconds;
            this.decisions[decision].invocations++;
            let SLL_k = this._sllStopIndex - this._startIndex + 1;
            this.decisions[decision].SLL_TotalLook += SLL_k;
            this.decisions[decision].SLL_MinLook = this.decisions[decision].SLL_MinLook === 0 ? SLL_k : Math.min(this.decisions[decision].SLL_MinLook, SLL_k);
            if (SLL_k > this.decisions[decision].SLL_MaxLook) {
                this.decisions[decision].SLL_MaxLook = SLL_k;
                this.decisions[decision].SLL_MaxLookEvent =
                    new LookaheadEventInfo_1.LookaheadEventInfo(decision, undefined, alt, input, this._startIndex, this._sllStopIndex, false);
            }
            if (this._llStopIndex >= 0) {
                let LL_k = this._llStopIndex - this._startIndex + 1;
                this.decisions[decision].LL_TotalLook += LL_k;
                this.decisions[decision].LL_MinLook = this.decisions[decision].LL_MinLook === 0 ? LL_k : Math.min(this.decisions[decision].LL_MinLook, LL_k);
                if (LL_k > this.decisions[decision].LL_MaxLook) {
                    this.decisions[decision].LL_MaxLook = LL_k;
                    this.decisions[decision].LL_MaxLookEvent =
                        new LookaheadEventInfo_1.LookaheadEventInfo(decision, undefined, alt, input, this._startIndex, this._llStopIndex, true);
                }
            }
            return alt;
        }
        finally {
            this._input = undefined;
            this.currentDecision = -1;
        }
    }
    getStartState(dfa, input, outerContext, useContext) {
        let state = super.getStartState(dfa, input, outerContext, useContext);
        this.currentState = state;
        return state;
    }
    computeStartState(dfa, globalContext, useContext) {
        let state = super.computeStartState(dfa, globalContext, useContext);
        this.currentState = state;
        return state;
    }
    computeReachSet(dfa, previous, t, contextCache) {
        if (this._input === undefined) {
            throw new Error("Invalid state");
        }
        let reachState = super.computeReachSet(dfa, previous, t, contextCache);
        if (reachState == null) {
            // no reach on current lookahead symbol. ERROR.
            this.decisions[this.currentDecision].errors.push(new ErrorInfo_1.ErrorInfo(this.currentDecision, previous, this._input, this._startIndex, this._input.index));
        }
        this.currentState = reachState;
        return reachState;
    }
    getExistingTargetState(previousD, t) {
        if (this.currentState === undefined || this._input === undefined) {
            throw new Error("Invalid state");
        }
        // this method is called after each time the input position advances
        if (this.currentState.useContext) {
            this._llStopIndex = this._input.index;
        }
        else {
            this._sllStopIndex = this._input.index;
        }
        let existingTargetState = super.getExistingTargetState(previousD, t);
        if (existingTargetState != null) {
            // this method is directly called by execDFA; must construct a SimulatorState
            // to represent the current state for this case
            this.currentState = new SimulatorState_1.SimulatorState(this.currentState.outerContext, existingTargetState, this.currentState.useContext, this.currentState.remainingOuterContext);
            if (this.currentState.useContext) {
                this.decisions[this.currentDecision].LL_DFATransitions++;
            }
            else {
                this.decisions[this.currentDecision].SLL_DFATransitions++; // count only if we transition over a DFA state
            }
            if (existingTargetState === ATNSimulator_1.ATNSimulator.ERROR) {
                let state = new SimulatorState_1.SimulatorState(this.currentState.outerContext, previousD, this.currentState.useContext, this.currentState.remainingOuterContext);
                this.decisions[this.currentDecision].errors.push(new ErrorInfo_1.ErrorInfo(this.currentDecision, state, this._input, this._startIndex, this._input.index));
            }
        }
        return existingTargetState;
    }
    computeTargetState(dfa, s, remainingGlobalContext, t, useContext, contextCache) {
        let targetState = super.computeTargetState(dfa, s, remainingGlobalContext, t, useContext, contextCache);
        if (useContext) {
            this.decisions[this.currentDecision].LL_ATNTransitions++;
        }
        else {
            this.decisions[this.currentDecision].SLL_ATNTransitions++;
        }
        return targetState;
    }
    evalSemanticContextImpl(pred, parserCallStack, alt) {
        if (this.currentState === undefined || this._input === undefined) {
            throw new Error("Invalid state");
        }
        let result = super.evalSemanticContextImpl(pred, parserCallStack, alt);
        if (!(pred instanceof SemanticContext_1.SemanticContext.PrecedencePredicate)) {
            let fullContext = this._llStopIndex >= 0;
            let stopIndex = fullContext ? this._llStopIndex : this._sllStopIndex;
            this.decisions[this.currentDecision].predicateEvals.push(new PredicateEvalInfo_1.PredicateEvalInfo(this.currentState, this.currentDecision, this._input, this._startIndex, stopIndex, pred, result, alt));
        }
        return result;
    }
    reportContextSensitivity(dfa, prediction, acceptState, startIndex, stopIndex) {
        if (this._input === undefined) {
            throw new Error("Invalid state");
        }
        if (prediction !== this.conflictingAltResolvedBySLL) {
            this.decisions[this.currentDecision].contextSensitivities.push(new ContextSensitivityInfo_1.ContextSensitivityInfo(this.currentDecision, acceptState, this._input, startIndex, stopIndex));
        }
        super.reportContextSensitivity(dfa, prediction, acceptState, startIndex, stopIndex);
    }
    reportAttemptingFullContext(dfa, conflictingAlts, conflictState, startIndex, stopIndex) {
        if (conflictingAlts != null) {
            this.conflictingAltResolvedBySLL = conflictingAlts.nextSetBit(0);
        }
        else {
            this.conflictingAltResolvedBySLL = conflictState.s0.configs.getRepresentedAlternatives().nextSetBit(0);
        }
        this.decisions[this.currentDecision].LL_Fallback++;
        super.reportAttemptingFullContext(dfa, conflictingAlts, conflictState, startIndex, stopIndex);
    }
    reportAmbiguity(dfa, D, startIndex, stopIndex, exact, ambigAlts, configs) {
        if (this.currentState === undefined || this._input === undefined) {
            throw new Error("Invalid state");
        }
        let prediction;
        if (ambigAlts != null) {
            prediction = ambigAlts.nextSetBit(0);
        }
        else {
            prediction = configs.getRepresentedAlternatives().nextSetBit(0);
        }
        if (this.conflictingAltResolvedBySLL !== ATN_1.ATN.INVALID_ALT_NUMBER && prediction !== this.conflictingAltResolvedBySLL) {
            // Even though this is an ambiguity we are reporting, we can
            // still detect some context sensitivities.  Both SLL and LL
            // are showing a conflict, hence an ambiguity, but if they resolve
            // to different minimum alternatives we have also identified a
            // context sensitivity.
            this.decisions[this.currentDecision].contextSensitivities.push(new ContextSensitivityInfo_1.ContextSensitivityInfo(this.currentDecision, this.currentState, this._input, startIndex, stopIndex));
        }
        this.decisions[this.currentDecision].ambiguities.push(new AmbiguityInfo_1.AmbiguityInfo(this.currentDecision, this.currentState, ambigAlts, this._input, startIndex, stopIndex));
        super.reportAmbiguity(dfa, D, startIndex, stopIndex, exact, ambigAlts, configs);
    }
    // ---------------------------------------------------------------------
    getDecisionInfo() {
        return this.decisions;
    }
    getCurrentState() {
        return this.currentState;
    }
}
__decorate([
    Decorators.Override,
    __param(0, Decorators.NotNull)
], ProfilingATNSimulator.prototype, "adaptivePredict", null);
__decorate([
    Decorators.Override
], ProfilingATNSimulator.prototype, "getStartState", null);
__decorate([
    Decorators.Override
], ProfilingATNSimulator.prototype, "computeStartState", null);
__decorate([
    Decorators.Override
], ProfilingATNSimulator.prototype, "computeReachSet", null);
__decorate([
    Decorators.Override
], ProfilingATNSimulator.prototype, "getExistingTargetState", null);
__decorate([
    Decorators.Override
], ProfilingATNSimulator.prototype, "computeTargetState", null);
__decorate([
    Decorators.Override
], ProfilingATNSimulator.prototype, "evalSemanticContextImpl", null);
__decorate([
    Decorators.Override
], ProfilingATNSimulator.prototype, "reportContextSensitivity", null);
__decorate([
    Decorators.Override
], ProfilingATNSimulator.prototype, "reportAttemptingFullContext", null);
__decorate([
    Decorators.Override,
    __param(0, Decorators.NotNull), __param(5, Decorators.NotNull), __param(6, Decorators.NotNull)
], ProfilingATNSimulator.prototype, "reportAmbiguity", null);
exports.ProfilingATNSimulator = ProfilingATNSimulator;

});

var Parser_1 = createCommonjsModule(function (module, exports) {
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
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;














class TraceListener {
    constructor(ruleNames, tokenStream) {
        this.ruleNames = ruleNames;
        this.tokenStream = tokenStream;
    }
    enterEveryRule(ctx) {
        console.log("enter   " + this.ruleNames[ctx.ruleIndex] +
            ", LT(1)=" + this.tokenStream.LT(1).text);
    }
    exitEveryRule(ctx) {
        console.log("exit    " + this.ruleNames[ctx.ruleIndex] +
            ", LT(1)=" + this.tokenStream.LT(1).text);
    }
    visitErrorNode(node) {
        // intentionally empty
    }
    visitTerminal(node) {
        let parent = node.parent.ruleContext;
        let token = node.symbol;
        console.log("consume " + token + " rule " + this.ruleNames[parent.ruleIndex]);
    }
}
__decorate([
    Decorators.Override
], TraceListener.prototype, "enterEveryRule", null);
__decorate([
    Decorators.Override
], TraceListener.prototype, "exitEveryRule", null);
__decorate([
    Decorators.Override
], TraceListener.prototype, "visitErrorNode", null);
__decorate([
    Decorators.Override
], TraceListener.prototype, "visitTerminal", null);
/** This is all the parsing support code essentially; most of it is error recovery stuff. */
class Parser extends Recognizer_1.Recognizer {
    constructor(input) {
        super();
        /**
         * The error handling strategy for the parser. The default value is a new
         * instance of {@link DefaultErrorStrategy}.
         *
         * @see #getErrorHandler
         * @see #setErrorHandler
         */
        this._errHandler = new DefaultErrorStrategy_1.DefaultErrorStrategy();
        this._precedenceStack = new IntegerStack_1.IntegerStack();
        /**
         * Specifies whether or not the parser should construct a parse tree during
         * the parsing process. The default value is `true`.
         *
         * @see `buildParseTree`
         */
        this._buildParseTrees = true;
        /**
         * The list of {@link ParseTreeListener} listeners registered to receive
         * events during the parse.
         *
         * @see #addParseListener
         */
        this._parseListeners = [];
        /**
         * The number of syntax errors reported during parsing. This value is
         * incremented each time {@link #notifyErrorListeners} is called.
         */
        this._syntaxErrors = 0;
        /** Indicates parser has match()ed EOF token. See {@link #exitRule()}. */
        this.matchedEOF = false;
        this._precedenceStack.push(0);
        this.inputStream = input;
    }
    reset(resetInput) {
        // Note: this method executes when not parsing, so _ctx can be undefined
        if (resetInput === undefined || resetInput) {
            this.inputStream.seek(0);
        }
        this._errHandler.reset(this);
        this._ctx = undefined;
        this._syntaxErrors = 0;
        this.matchedEOF = false;
        this.isTrace = false;
        this._precedenceStack.clear();
        this._precedenceStack.push(0);
        let interpreter = this.interpreter;
        if (interpreter != null) {
            interpreter.reset();
        }
    }
    /**
     * Match current input symbol against `ttype`. If the symbol type
     * matches, {@link ANTLRErrorStrategy#reportMatch} and {@link #consume} are
     * called to complete the match process.
     *
     * If the symbol type does not match,
     * {@link ANTLRErrorStrategy#recoverInline} is called on the current error
     * strategy to attempt recovery. If {@link #getBuildParseTree} is
     * `true` and the token index of the symbol returned by
     * {@link ANTLRErrorStrategy#recoverInline} is -1, the symbol is added to
     * the parse tree by calling {@link #createErrorNode(ParserRuleContext, Token)} then
     * {@link ParserRuleContext#addErrorNode(ErrorNode)}.
     *
     * @param ttype the token type to match
     * @returns the matched symbol
     * @ if the current input symbol did not match
     * `ttype` and the error strategy could not recover from the
     * mismatched symbol
     */
    match(ttype) {
        let t = this.currentToken;
        if (t.type === ttype) {
            if (ttype === Token_1.Token.EOF) {
                this.matchedEOF = true;
            }
            this._errHandler.reportMatch(this);
            this.consume();
        }
        else {
            t = this._errHandler.recoverInline(this);
            if (this._buildParseTrees && t.tokenIndex === -1) {
                // we must have conjured up a new token during single token insertion
                // if it's not the current symbol
                this._ctx.addErrorNode(this.createErrorNode(this._ctx, t));
            }
        }
        return t;
    }
    /**
     * Match current input symbol as a wildcard. If the symbol type matches
     * (i.e. has a value greater than 0), {@link ANTLRErrorStrategy#reportMatch}
     * and {@link #consume} are called to complete the match process.
     *
     * If the symbol type does not match,
     * {@link ANTLRErrorStrategy#recoverInline} is called on the current error
     * strategy to attempt recovery. If {@link #getBuildParseTree} is
     * `true` and the token index of the symbol returned by
     * {@link ANTLRErrorStrategy#recoverInline} is -1, the symbol is added to
     * the parse tree by calling {@link Parser#createErrorNode(ParserRuleContext, Token)} then
     * {@link ParserRuleContext#addErrorNode(ErrorNode)}.
     *
     * @returns the matched symbol
     * @ if the current input symbol did not match
     * a wildcard and the error strategy could not recover from the mismatched
     * symbol
     */
    matchWildcard() {
        let t = this.currentToken;
        if (t.type > 0) {
            this._errHandler.reportMatch(this);
            this.consume();
        }
        else {
            t = this._errHandler.recoverInline(this);
            if (this._buildParseTrees && t.tokenIndex === -1) {
                // we must have conjured up a new token during single token insertion
                // if it's not the current symbol
                this._ctx.addErrorNode(this.createErrorNode(this._ctx, t));
            }
        }
        return t;
    }
    /**
     * Track the {@link ParserRuleContext} objects during the parse and hook
     * them up using the {@link ParserRuleContext#children} list so that it
     * forms a parse tree. The {@link ParserRuleContext} returned from the start
     * rule represents the root of the parse tree.
     *
     * Note that if we are not building parse trees, rule contexts only point
     * upwards. When a rule exits, it returns the context but that gets garbage
     * collected if nobody holds a reference. It points upwards but nobody
     * points at it.
     *
     * When we build parse trees, we are adding all of these contexts to
     * {@link ParserRuleContext#children} list. Contexts are then not candidates
     * for garbage collection.
     */
    set buildParseTree(buildParseTrees) {
        this._buildParseTrees = buildParseTrees;
    }
    /**
     * Gets whether or not a complete parse tree will be constructed while
     * parsing. This property is `true` for a newly constructed parser.
     *
     * @returns `true` if a complete parse tree will be constructed while
     * parsing, otherwise `false`
     */
    get buildParseTree() {
        return this._buildParseTrees;
    }
    getParseListeners() {
        return this._parseListeners;
    }
    /**
     * Registers `listener` to receive events during the parsing process.
     *
     * To support output-preserving grammar transformations (including but not
     * limited to left-recursion removal, automated left-factoring, and
     * optimized code generation), calls to listener methods during the parse
     * may differ substantially from calls made by
     * {@link ParseTreeWalker#DEFAULT} used after the parse is complete. In
     * particular, rule entry and exit events may occur in a different order
     * during the parse than after the parser. In addition, calls to certain
     * rule entry methods may be omitted.
     *
     * With the following specific exceptions, calls to listener events are
     * *deterministic*, i.e. for identical input the calls to listener
     * methods will be the same.
     *
     * * Alterations to the grammar used to generate code may change the
     *   behavior of the listener calls.
     * * Alterations to the command line options passed to ANTLR 4 when
     *   generating the parser may change the behavior of the listener calls.
     * * Changing the version of the ANTLR Tool used to generate the parser
     *   may change the behavior of the listener calls.
     *
     * @param listener the listener to add
     *
     * @throws {@link TypeError} if `listener` is `undefined`
     */
    addParseListener(listener) {
        if (listener == null) {
            throw new TypeError("listener cannot be null");
        }
        this._parseListeners.push(listener);
    }
    /**
     * Remove `listener` from the list of parse listeners.
     *
     * If `listener` is `undefined` or has not been added as a parse
     * listener, this method does nothing.
     *
     * @see #addParseListener
     *
     * @param listener the listener to remove
     */
    removeParseListener(listener) {
        let index = this._parseListeners.findIndex((l) => l === listener);
        if (index !== -1) {
            this._parseListeners.splice(index, 1);
        }
    }
    /**
     * Remove all parse listeners.
     *
     * @see #addParseListener
     */
    removeParseListeners() {
        this._parseListeners.length = 0;
    }
    /**
     * Notify any parse listeners of an enter rule event.
     *
     * @see #addParseListener
     */
    triggerEnterRuleEvent() {
        for (let listener of this._parseListeners) {
            if (listener.enterEveryRule) {
                listener.enterEveryRule(this._ctx);
            }
            this._ctx.enterRule(listener);
        }
    }
    /**
     * Notify any parse listeners of an exit rule event.
     *
     * @see #addParseListener
     */
    triggerExitRuleEvent() {
        // reverse order walk of listeners
        for (let i = this._parseListeners.length - 1; i >= 0; i--) {
            let listener = this._parseListeners[i];
            this._ctx.exitRule(listener);
            if (listener.exitEveryRule) {
                listener.exitEveryRule(this._ctx);
            }
        }
    }
    /**
     * Gets the number of syntax errors reported during parsing. This value is
     * incremented each time {@link #notifyErrorListeners} is called.
     *
     * @see #notifyErrorListeners
     */
    get numberOfSyntaxErrors() {
        return this._syntaxErrors;
    }
    get tokenFactory() {
        return this._input.tokenSource.tokenFactory;
    }
    /**
     * The ATN with bypass alternatives is expensive to create so we create it
     * lazily.
     *
     * @ if the current parser does not
     * implement the `serializedATN` property.
     */
    getATNWithBypassAlts() {
        let serializedAtn = this.serializedATN;
        if (serializedAtn == null) {
            throw new Error("The current parser does not support an ATN with bypass alternatives.");
        }
        let result = Parser.bypassAltsAtnCache.get(serializedAtn);
        if (result == null) {
            let deserializationOptions = new ATNDeserializationOptions_1.ATNDeserializationOptions();
            deserializationOptions.isGenerateRuleBypassTransitions = true;
            result = new ATNDeserializer_1.ATNDeserializer(deserializationOptions).deserialize(Utils.toCharArray(serializedAtn));
            Parser.bypassAltsAtnCache.set(serializedAtn, result);
        }
        return result;
    }
    compileParseTreePattern(pattern, patternRuleIndex, lexer) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!lexer) {
                if (this.inputStream) {
                    let tokenSource = this.inputStream.tokenSource;
                    if (tokenSource instanceof Lexer_1.Lexer) {
                        lexer = tokenSource;
                    }
                }
                if (!lexer) {
                    throw new Error("Parser can't discover a lexer to use");
                }
            }
            let currentLexer = lexer;
            let m = yield Promise.resolve().then(() => ParseTreePatternMatcher_1);
            let matcher = new m.ParseTreePatternMatcher(currentLexer, this);
            return matcher.compile(pattern, patternRuleIndex);
        });
    }
    get errorHandler() {
        return this._errHandler;
    }
    set errorHandler(handler) {
        this._errHandler = handler;
    }
    get inputStream() {
        return this._input;
    }
    /** Set the token stream and reset the parser. */
    set inputStream(input) {
        this.reset(false);
        this._input = input;
    }
    /** Match needs to return the current input symbol, which gets put
     *  into the label for the associated token ref; e.g., x=ID.
     */
    get currentToken() {
        return this._input.LT(1);
    }
    notifyErrorListeners(msg, offendingToken, e) {
        if (offendingToken === undefined) {
            offendingToken = this.currentToken;
        }
        else if (offendingToken === null) {
            offendingToken = undefined;
        }
        this._syntaxErrors++;
        let line = -1;
        let charPositionInLine = -1;
        if (offendingToken != null) {
            line = offendingToken.line;
            charPositionInLine = offendingToken.charPositionInLine;
        }
        let listener = this.getErrorListenerDispatch();
        if (listener.syntaxError) {
            listener.syntaxError(this, offendingToken, line, charPositionInLine, msg, e);
        }
    }
    /**
     * Consume and return the [current symbol](`currentToken`).
     *
     * E.g., given the following input with `A` being the current
     * lookahead symbol, this function moves the cursor to `B` and returns
     * `A`.
     *
     * ```
     * A B
     * ^
     * ```
     *
     * If the parser is not in error recovery mode, the consumed symbol is added
     * to the parse tree using {@link ParserRuleContext#addChild(TerminalNode)}, and
     * {@link ParseTreeListener#visitTerminal} is called on any parse listeners.
     * If the parser *is* in error recovery mode, the consumed symbol is
     * added to the parse tree using {@link #createErrorNode(ParserRuleContext, Token)} then
     * {@link ParserRuleContext#addErrorNode(ErrorNode)} and
     * {@link ParseTreeListener#visitErrorNode} is called on any parse
     * listeners.
     */
    consume() {
        let o = this.currentToken;
        if (o.type !== Parser.EOF) {
            this.inputStream.consume();
        }
        let hasListener = this._parseListeners.length !== 0;
        if (this._buildParseTrees || hasListener) {
            if (this._errHandler.inErrorRecoveryMode(this)) {
                let node = this._ctx.addErrorNode(this.createErrorNode(this._ctx, o));
                if (hasListener) {
                    for (let listener of this._parseListeners) {
                        if (listener.visitErrorNode) {
                            listener.visitErrorNode(node);
                        }
                    }
                }
            }
            else {
                let node = this.createTerminalNode(this._ctx, o);
                this._ctx.addChild(node);
                if (hasListener) {
                    for (let listener of this._parseListeners) {
                        if (listener.visitTerminal) {
                            listener.visitTerminal(node);
                        }
                    }
                }
            }
        }
        return o;
    }
    /**
     * How to create a token leaf node associated with a parent.
     * Typically, the terminal node to create is not a function of the parent.
     *
     * @since 4.7
     */
    createTerminalNode(parent, t) {
        return new TerminalNode_1.TerminalNode(t);
    }
    /**
     * How to create an error node, given a token, associated with a parent.
     * Typically, the error node to create is not a function of the parent.
     *
     * @since 4.7
     */
    createErrorNode(parent, t) {
        return new ErrorNode_1.ErrorNode(t);
    }
    addContextToParseTree() {
        let parent = this._ctx._parent;
        // add current context to parent if we have a parent
        if (parent != null) {
            parent.addChild(this._ctx);
        }
    }
    /**
     * Always called by generated parsers upon entry to a rule. Access field
     * {@link #_ctx} get the current context.
     */
    enterRule(localctx, state, ruleIndex) {
        this.state = state;
        this._ctx = localctx;
        this._ctx._start = this._input.LT(1);
        if (this._buildParseTrees) {
            this.addContextToParseTree();
        }
        this.triggerEnterRuleEvent();
    }
    enterLeftFactoredRule(localctx, state, ruleIndex) {
        this.state = state;
        if (this._buildParseTrees) {
            let factoredContext = this._ctx.getChild(this._ctx.childCount - 1);
            this._ctx.removeLastChild();
            factoredContext._parent = localctx;
            localctx.addChild(factoredContext);
        }
        this._ctx = localctx;
        this._ctx._start = this._input.LT(1);
        if (this._buildParseTrees) {
            this.addContextToParseTree();
        }
        this.triggerEnterRuleEvent();
    }
    exitRule() {
        if (this.matchedEOF) {
            // if we have matched EOF, it cannot consume past EOF so we use LT(1) here
            this._ctx._stop = this._input.LT(1); // LT(1) will be end of file
        }
        else {
            this._ctx._stop = this._input.tryLT(-1); // stop node is what we just matched
        }
        // trigger event on _ctx, before it reverts to parent
        this.triggerExitRuleEvent();
        this.state = this._ctx.invokingState;
        this._ctx = this._ctx._parent;
    }
    enterOuterAlt(localctx, altNum) {
        localctx.altNumber = altNum;
        // if we have new localctx, make sure we replace existing ctx
        // that is previous child of parse tree
        if (this._buildParseTrees && this._ctx !== localctx) {
            let parent = this._ctx._parent;
            if (parent != null) {
                parent.removeLastChild();
                parent.addChild(localctx);
            }
        }
        this._ctx = localctx;
    }
    /**
     * Get the precedence level for the top-most precedence rule.
     *
     * @returns The precedence level for the top-most precedence rule, or -1 if
     * the parser context is not nested within a precedence rule.
     */
    get precedence() {
        if (this._precedenceStack.isEmpty) {
            return -1;
        }
        return this._precedenceStack.peek();
    }
    enterRecursionRule(localctx, state, ruleIndex, precedence) {
        this.state = state;
        this._precedenceStack.push(precedence);
        this._ctx = localctx;
        this._ctx._start = this._input.LT(1);
        this.triggerEnterRuleEvent(); // simulates rule entry for left-recursive rules
    }
    /** Like {@link #enterRule} but for recursive rules.
     *  Make the current context the child of the incoming localctx.
     */
    pushNewRecursionContext(localctx, state, ruleIndex) {
        let previous = this._ctx;
        previous._parent = localctx;
        previous.invokingState = state;
        previous._stop = this._input.tryLT(-1);
        this._ctx = localctx;
        this._ctx._start = previous._start;
        if (this._buildParseTrees) {
            this._ctx.addChild(previous);
        }
        this.triggerEnterRuleEvent(); // simulates rule entry for left-recursive rules
    }
    unrollRecursionContexts(_parentctx) {
        this._precedenceStack.pop();
        this._ctx._stop = this._input.tryLT(-1);
        let retctx = this._ctx; // save current ctx (return value)
        // unroll so _ctx is as it was before call to recursive method
        if (this._parseListeners.length > 0) {
            while (this._ctx !== _parentctx) {
                this.triggerExitRuleEvent();
                this._ctx = this._ctx._parent;
            }
        }
        else {
            this._ctx = _parentctx;
        }
        // hook into tree
        retctx._parent = _parentctx;
        if (this._buildParseTrees && _parentctx != null) {
            // add return ctx into invoking rule's tree
            _parentctx.addChild(retctx);
        }
    }
    getInvokingContext(ruleIndex) {
        let p = this._ctx;
        while (p && p.ruleIndex !== ruleIndex) {
            p = p._parent;
        }
        return p;
    }
    get context() {
        return this._ctx;
    }
    set context(ctx) {
        this._ctx = ctx;
    }
    precpred(localctx, precedence) {
        return precedence >= this._precedenceStack.peek();
    }
    getErrorListenerDispatch() {
        return new ProxyParserErrorListener_1.ProxyParserErrorListener(this.getErrorListeners());
    }
    inContext(context) {
        // TODO: useful in parser?
        return false;
    }
    /**
     * Checks whether or not `symbol` can follow the current state in the
     * ATN. The behavior of this method is equivalent to the following, but is
     * implemented such that the complete context-sensitive follow set does not
     * need to be explicitly constructed.
     *
     * ```
     * return getExpectedTokens().contains(symbol);
     * ```
     *
     * @param symbol the symbol type to check
     * @returns `true` if `symbol` can follow the current state in
     * the ATN, otherwise `false`.
     */
    isExpectedToken(symbol) {
        //   		return interpreter.atn.nextTokens(_ctx);
        let atn = this.interpreter.atn;
        let ctx = this._ctx;
        let s = atn.states[this.state];
        let following = atn.nextTokens(s);
        if (following.contains(symbol)) {
            return true;
        }
        //        System.out.println("following "+s+"="+following);
        if (!following.contains(Token_1.Token.EPSILON)) {
            return false;
        }
        while (ctx != null && ctx.invokingState >= 0 && following.contains(Token_1.Token.EPSILON)) {
            let invokingState = atn.states[ctx.invokingState];
            let rt = invokingState.transition(0);
            following = atn.nextTokens(rt.followState);
            if (following.contains(symbol)) {
                return true;
            }
            ctx = ctx._parent;
        }
        if (following.contains(Token_1.Token.EPSILON) && symbol === Token_1.Token.EOF) {
            return true;
        }
        return false;
    }
    get isMatchedEOF() {
        return this.matchedEOF;
    }
    /**
     * Computes the set of input symbols which could follow the current parser
     * state and context, as given by {@link #getState} and {@link #getContext},
     * respectively.
     *
     * @see ATN#getExpectedTokens(int, RuleContext)
     */
    getExpectedTokens() {
        return this.atn.getExpectedTokens(this.state, this.context);
    }
    getExpectedTokensWithinCurrentRule() {
        let atn = this.interpreter.atn;
        let s = atn.states[this.state];
        return atn.nextTokens(s);
    }
    /** Get a rule's index (i.e., `RULE_ruleName` field) or -1 if not found. */
    getRuleIndex(ruleName) {
        let ruleIndex = this.getRuleIndexMap().get(ruleName);
        if (ruleIndex != null) {
            return ruleIndex;
        }
        return -1;
    }
    get ruleContext() { return this._ctx; }
    /** Return List&lt;String&gt; of the rule names in your parser instance
     *  leading up to a call to the current rule.  You could override if
     *  you want more details such as the file/line info of where
     *  in the ATN a rule is invoked.
     *
     *  This is very useful for error messages.
     */
    getRuleInvocationStack(ctx = this._ctx) {
        let p = ctx; // Workaround for Microsoft/TypeScript#14487
        let ruleNames = this.ruleNames;
        let stack = [];
        while (p != null) {
            // compute what follows who invoked us
            let ruleIndex = p.ruleIndex;
            if (ruleIndex < 0) {
                stack.push("n/a");
            }
            else {
                stack.push(ruleNames[ruleIndex]);
            }
            p = p._parent;
        }
        return stack;
    }
    /** For debugging and other purposes. */
    getDFAStrings() {
        let s = [];
        for (let dfa of this._interp.atn.decisionToDFA) {
            s.push(dfa.toString(this.vocabulary, this.ruleNames));
        }
        return s;
    }
    /** For debugging and other purposes. */
    dumpDFA() {
        let seenOne = false;
        for (let dfa of this._interp.atn.decisionToDFA) {
            if (!dfa.isEmpty) {
                if (seenOne) {
                    console.log();
                }
                console.log("Decision " + dfa.decision + ":");
                process.stdout.write(dfa.toString(this.vocabulary, this.ruleNames));
                seenOne = true;
            }
        }
    }
    get sourceName() {
        return this._input.sourceName;
    }
    get parseInfo() {
        return Promise.resolve().then(() => ProfilingATNSimulator_1).then((m) => {
            let interp = this.interpreter;
            if (interp instanceof m.ProfilingATNSimulator) {
                return new ParseInfo_1.ParseInfo(interp);
            }
            return undefined;
        });
    }
    /**
     * @since 4.3
     */
    setProfile(profile) {
        return __awaiter(this, void 0, void 0, function* () {
            let m = yield Promise.resolve().then(() => ProfilingATNSimulator_1);
            let interp = this.interpreter;
            if (profile) {
                if (!(interp instanceof m.ProfilingATNSimulator)) {
                    this.interpreter = new m.ProfilingATNSimulator(this);
                }
            }
            else if (interp instanceof m.ProfilingATNSimulator) {
                this.interpreter = new ParserATNSimulator_1.ParserATNSimulator(this.atn, this);
            }
            this.interpreter.setPredictionMode(interp.getPredictionMode());
        });
    }
    /** During a parse is sometimes useful to listen in on the rule entry and exit
     *  events as well as token matches. This is for quick and dirty debugging.
     */
    set isTrace(trace) {
        if (!trace) {
            if (this._tracer) {
                this.removeParseListener(this._tracer);
                this._tracer = undefined;
            }
        }
        else {
            if (this._tracer) {
                this.removeParseListener(this._tracer);
            }
            else {
                this._tracer = new TraceListener(this.ruleNames, this._input);
            }
            this.addParseListener(this._tracer);
        }
    }
    /**
     * Gets whether a {@link TraceListener} is registered as a parse listener
     * for the parser.
     */
    get isTrace() {
        return this._tracer != null;
    }
}
/**
 * This field maps from the serialized ATN string to the deserialized {@link ATN} with
 * bypass alternatives.
 *
 * @see ATNDeserializationOptions.isGenerateRuleBypassTransitions
 */
Parser.bypassAltsAtnCache = new Map();
__decorate([
    Decorators.NotNull
], Parser.prototype, "_errHandler", void 0);
__decorate([
    Decorators.NotNull
], Parser.prototype, "match", null);
__decorate([
    Decorators.NotNull
], Parser.prototype, "matchWildcard", null);
__decorate([
    Decorators.NotNull
], Parser.prototype, "getParseListeners", null);
__decorate([
    __param(0, Decorators.NotNull)
], Parser.prototype, "addParseListener", null);
__decorate([
    Decorators.NotNull
], Parser.prototype, "getATNWithBypassAlts", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
], Parser.prototype, "errorHandler", null);
__decorate([
    Decorators.Override
], Parser.prototype, "inputStream", null);
__decorate([
    Decorators.NotNull
], Parser.prototype, "currentToken", null);
__decorate([
    __param(0, Decorators.NotNull)
], Parser.prototype, "enterRule", null);
__decorate([
    Decorators.Override,
    __param(0, Decorators.Nullable)
], Parser.prototype, "precpred", null);
__decorate([
    Decorators.Override
], Parser.prototype, "getErrorListenerDispatch", null);
__decorate([
    Decorators.NotNull
], Parser.prototype, "getExpectedTokens", null);
__decorate([
    Decorators.NotNull
], Parser.prototype, "getExpectedTokensWithinCurrentRule", null);
__decorate([
    Decorators.Override
], Parser.prototype, "parseInfo", null);
exports.Parser = Parser;

});

var NoViableAltException_1 = createCommonjsModule(function (module, exports) {
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
exports.NoViableAltException = void 0;



/** Indicates that the parser could not decide which of two or more paths
 *  to take based upon the remaining input. It tracks the starting token
 *  of the offending input and also knows where the parser was
 *  in the various paths when the error. Reported by reportNoViableAlternative()
 */
class NoViableAltException extends RecognitionException_1.RecognitionException {
    constructor(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx) {
        if (recognizer instanceof Parser_1.Parser) {
            if (input === undefined) {
                input = recognizer.inputStream;
            }
            if (startToken === undefined) {
                startToken = recognizer.currentToken;
            }
            if (offendingToken === undefined) {
                offendingToken = recognizer.currentToken;
            }
            if (ctx === undefined) {
                ctx = recognizer.context;
            }
        }
        super(recognizer, input, ctx);
        this._deadEndConfigs = deadEndConfigs;
        this._startToken = startToken;
        this.setOffendingToken(recognizer, offendingToken);
    }
    get startToken() {
        return this._startToken;
    }
    get deadEndConfigs() {
        return this._deadEndConfigs;
    }
}
__decorate([
    Decorators.NotNull
], NoViableAltException.prototype, "_startToken", void 0);
exports.NoViableAltException = NoViableAltException;

});

var DefaultErrorStrategy_1 = createCommonjsModule(function (module, exports) {
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
exports.DefaultErrorStrategy = void 0;









/**
 * This is the default implementation of {@link ANTLRErrorStrategy} used for
 * error reporting and recovery in ANTLR parsers.
 */
class DefaultErrorStrategy {
    constructor() {
        /**
         * Indicates whether the error strategy is currently "recovering from an
         * error". This is used to suppress reporting multiple error messages while
         * attempting to recover from a detected syntax error.
         *
         * @see #inErrorRecoveryMode
         */
        this.errorRecoveryMode = false;
        /** The index into the input stream where the last error occurred.
         * 	This is used to prevent infinite loops where an error is found
         *  but no token is consumed during recovery...another error is found,
         *  ad nauseum.  This is a failsafe mechanism to guarantee that at least
         *  one token/tree node is consumed for two errors.
         */
        this.lastErrorIndex = -1;
        /**
         * @see #nextTokensContext
         */
        this.nextTokensState = ATNState_1.ATNState.INVALID_STATE_NUMBER;
    }
    /**
     * {@inheritDoc}
     *
     * The default implementation simply calls {@link #endErrorCondition} to
     * ensure that the handler is not in error recovery mode.
     */
    reset(recognizer) {
        this.endErrorCondition(recognizer);
    }
    /**
     * This method is called to enter error recovery mode when a recognition
     * exception is reported.
     *
     * @param recognizer the parser instance
     */
    beginErrorCondition(recognizer) {
        this.errorRecoveryMode = true;
    }
    /**
     * {@inheritDoc}
     */
    inErrorRecoveryMode(recognizer) {
        return this.errorRecoveryMode;
    }
    /**
     * This method is called to leave error recovery mode after recovering from
     * a recognition exception.
     *
     * @param recognizer
     */
    endErrorCondition(recognizer) {
        this.errorRecoveryMode = false;
        this.lastErrorStates = undefined;
        this.lastErrorIndex = -1;
    }
    /**
     * {@inheritDoc}
     *
     * The default implementation simply calls {@link #endErrorCondition}.
     */
    reportMatch(recognizer) {
        this.endErrorCondition(recognizer);
    }
    /**
     * {@inheritDoc}
     *
     * The default implementation returns immediately if the handler is already
     * in error recovery mode. Otherwise, it calls {@link #beginErrorCondition}
     * and dispatches the reporting task based on the runtime type of `e`
     * according to the following table.
     *
     * * {@link NoViableAltException}: Dispatches the call to
     *   {@link #reportNoViableAlternative}
     * * {@link InputMismatchException}: Dispatches the call to
     *   {@link #reportInputMismatch}
     * * {@link FailedPredicateException}: Dispatches the call to
     *   {@link #reportFailedPredicate}
     * * All other types: calls {@link Parser#notifyErrorListeners} to report
     *   the exception
     */
    reportError(recognizer, e) {
        // if we've already reported an error and have not matched a token
        // yet successfully, don't report any errors.
        if (this.inErrorRecoveryMode(recognizer)) {
            //			System.err.print("[SPURIOUS] ");
            return; // don't report spurious errors
        }
        this.beginErrorCondition(recognizer);
        if (e instanceof NoViableAltException_1.NoViableAltException) {
            this.reportNoViableAlternative(recognizer, e);
        }
        else if (e instanceof InputMismatchException_1.InputMismatchException) {
            this.reportInputMismatch(recognizer, e);
        }
        else if (e instanceof FailedPredicateException_1.FailedPredicateException) {
            this.reportFailedPredicate(recognizer, e);
        }
        else {
            console.error(`unknown recognition error type: ${e}`);
            this.notifyErrorListeners(recognizer, e.toString(), e);
        }
    }
    notifyErrorListeners(recognizer, message, e) {
        let offendingToken = e.getOffendingToken(recognizer);
        if (offendingToken === undefined) {
            // Pass null to notifyErrorListeners so it in turn calls the error listeners with undefined as the offending
            // token. If we passed undefined, it would instead call the listeners with currentToken from the parser.
            offendingToken = null;
        }
        recognizer.notifyErrorListeners(message, offendingToken, e);
    }
    /**
     * {@inheritDoc}
     *
     * The default implementation resynchronizes the parser by consuming tokens
     * until we find one in the resynchronization set--loosely the set of tokens
     * that can follow the current rule.
     */
    recover(recognizer, e) {
        //		System.out.println("recover in "+recognizer.getRuleInvocationStack()+
        //						   " index="+recognizer.inputStream.index+
        //						   ", lastErrorIndex="+
        //						   lastErrorIndex+
        //						   ", states="+lastErrorStates);
        if (this.lastErrorIndex === recognizer.inputStream.index &&
            this.lastErrorStates &&
            this.lastErrorStates.contains(recognizer.state)) {
            // uh oh, another error at same token index and previously-visited
            // state in ATN; must be a case where LT(1) is in the recovery
            // token set so nothing got consumed. Consume a single token
            // at least to prevent an infinite loop; this is a failsafe.
            //			System.err.println("seen error condition before index="+
            //							   lastErrorIndex+", states="+lastErrorStates);
            //			System.err.println("FAILSAFE consumes "+recognizer.getTokenNames()[recognizer.inputStream.LA(1)]);
            recognizer.consume();
        }
        this.lastErrorIndex = recognizer.inputStream.index;
        if (!this.lastErrorStates) {
            this.lastErrorStates = new IntervalSet_1.IntervalSet();
        }
        this.lastErrorStates.add(recognizer.state);
        let followSet = this.getErrorRecoverySet(recognizer);
        this.consumeUntil(recognizer, followSet);
    }
    /**
     * The default implementation of {@link ANTLRErrorStrategy#sync} makes sure
     * that the current lookahead symbol is consistent with what were expecting
     * at this point in the ATN. You can call this anytime but ANTLR only
     * generates code to check before subrules/loops and each iteration.
     *
     * Implements Jim Idle's magic sync mechanism in closures and optional
     * subrules. E.g.,
     *
     * ```antlr
     * a : sync ( stuff sync )* ;
     * sync : {consume to what can follow sync} ;
     * ```
     *
     * At the start of a sub rule upon error, {@link #sync} performs single
     * token deletion, if possible. If it can't do that, it bails on the current
     * rule and uses the default error recovery, which consumes until the
     * resynchronization set of the current rule.
     *
     * If the sub rule is optional (`(...)?`, `(...)*`, or block
     * with an empty alternative), then the expected set includes what follows
     * the subrule.
     *
     * During loop iteration, it consumes until it sees a token that can start a
     * sub rule or what follows loop. Yes, that is pretty aggressive. We opt to
     * stay in the loop as long as possible.
     *
     * **ORIGINS**
     *
     * Previous versions of ANTLR did a poor job of their recovery within loops.
     * A single mismatch token or missing token would force the parser to bail
     * out of the entire rules surrounding the loop. So, for rule
     *
     * ```antlr
     * classDef : 'class' ID '{' member* '}'
     * ```
     *
     * input with an extra token between members would force the parser to
     * consume until it found the next class definition rather than the next
     * member definition of the current class.
     *
     * This functionality cost a little bit of effort because the parser has to
     * compare token set at the start of the loop and at each iteration. If for
     * some reason speed is suffering for you, you can turn off this
     * functionality by simply overriding this method as a blank { }.
     */
    sync(recognizer) {
        let s = recognizer.interpreter.atn.states[recognizer.state];
        //		System.err.println("sync @ "+s.stateNumber+"="+s.getClass().getSimpleName());
        // If already recovering, don't try to sync
        if (this.inErrorRecoveryMode(recognizer)) {
            return;
        }
        let tokens = recognizer.inputStream;
        let la = tokens.LA(1);
        // try cheaper subset first; might get lucky. seems to shave a wee bit off
        let nextTokens = recognizer.atn.nextTokens(s);
        if (nextTokens.contains(la)) {
            // We are sure the token matches
            this.nextTokensContext = undefined;
            this.nextTokensState = ATNState_1.ATNState.INVALID_STATE_NUMBER;
            return;
        }
        if (nextTokens.contains(Token_1.Token.EPSILON)) {
            if (this.nextTokensContext === undefined) {
                // It's possible the next token won't match; information tracked
                // by sync is restricted for performance.
                this.nextTokensContext = recognizer.context;
                this.nextTokensState = recognizer.state;
            }
            return;
        }
        switch (s.stateType) {
            case ATNStateType_1.ATNStateType.BLOCK_START:
            case ATNStateType_1.ATNStateType.STAR_BLOCK_START:
            case ATNStateType_1.ATNStateType.PLUS_BLOCK_START:
            case ATNStateType_1.ATNStateType.STAR_LOOP_ENTRY:
                // report error and recover if possible
                if (this.singleTokenDeletion(recognizer)) {
                    return;
                }
                throw new InputMismatchException_1.InputMismatchException(recognizer);
            case ATNStateType_1.ATNStateType.PLUS_LOOP_BACK:
            case ATNStateType_1.ATNStateType.STAR_LOOP_BACK:
                //			System.err.println("at loop back: "+s.getClass().getSimpleName());
                this.reportUnwantedToken(recognizer);
                let expecting = recognizer.getExpectedTokens();
                let whatFollowsLoopIterationOrRule = expecting.or(this.getErrorRecoverySet(recognizer));
                this.consumeUntil(recognizer, whatFollowsLoopIterationOrRule);
                break;
        }
    }
    /**
     * This is called by {@link #reportError} when the exception is a
     * {@link NoViableAltException}.
     *
     * @see #reportError
     *
     * @param recognizer the parser instance
     * @param e the recognition exception
     */
    reportNoViableAlternative(recognizer, e) {
        let tokens = recognizer.inputStream;
        let input;
        if (tokens) {
            if (e.startToken.type === Token_1.Token.EOF) {
                input = "<EOF>";
            }
            else {
                input = tokens.getTextFromRange(e.startToken, e.getOffendingToken());
            }
        }
        else {
            input = "<unknown input>";
        }
        let msg = "no viable alternative at input " + this.escapeWSAndQuote(input);
        this.notifyErrorListeners(recognizer, msg, e);
    }
    /**
     * This is called by {@link #reportError} when the exception is an
     * {@link InputMismatchException}.
     *
     * @see #reportError
     *
     * @param recognizer the parser instance
     * @param e the recognition exception
     */
    reportInputMismatch(recognizer, e) {
        let expected = e.expectedTokens;
        let expectedString = expected ? expected.toStringVocabulary(recognizer.vocabulary) : "";
        let msg = "mismatched input " + this.getTokenErrorDisplay(e.getOffendingToken(recognizer)) +
            " expecting " + expectedString;
        this.notifyErrorListeners(recognizer, msg, e);
    }
    /**
     * This is called by {@link #reportError} when the exception is a
     * {@link FailedPredicateException}.
     *
     * @see #reportError
     *
     * @param recognizer the parser instance
     * @param e the recognition exception
     */
    reportFailedPredicate(recognizer, e) {
        let ruleName = recognizer.ruleNames[recognizer.context.ruleIndex];
        let msg = "rule " + ruleName + " " + e.message;
        this.notifyErrorListeners(recognizer, msg, e);
    }
    /**
     * This method is called to report a syntax error which requires the removal
     * of a token from the input stream. At the time this method is called, the
     * erroneous symbol is current `LT(1)` symbol and has not yet been
     * removed from the input stream. When this method returns,
     * `recognizer` is in error recovery mode.
     *
     * This method is called when {@link #singleTokenDeletion} identifies
     * single-token deletion as a viable recovery strategy for a mismatched
     * input error.
     *
     * The default implementation simply returns if the handler is already in
     * error recovery mode. Otherwise, it calls {@link #beginErrorCondition} to
     * enter error recovery mode, followed by calling
     * {@link Parser#notifyErrorListeners}.
     *
     * @param recognizer the parser instance
     */
    reportUnwantedToken(recognizer) {
        if (this.inErrorRecoveryMode(recognizer)) {
            return;
        }
        this.beginErrorCondition(recognizer);
        let t = recognizer.currentToken;
        let tokenName = this.getTokenErrorDisplay(t);
        let expecting = this.getExpectedTokens(recognizer);
        let msg = "extraneous input " + tokenName + " expecting " +
            expecting.toStringVocabulary(recognizer.vocabulary);
        recognizer.notifyErrorListeners(msg, t, undefined);
    }
    /**
     * This method is called to report a syntax error which requires the
     * insertion of a missing token into the input stream. At the time this
     * method is called, the missing token has not yet been inserted. When this
     * method returns, `recognizer` is in error recovery mode.
     *
     * This method is called when {@link #singleTokenInsertion} identifies
     * single-token insertion as a viable recovery strategy for a mismatched
     * input error.
     *
     * The default implementation simply returns if the handler is already in
     * error recovery mode. Otherwise, it calls {@link #beginErrorCondition} to
     * enter error recovery mode, followed by calling
     * {@link Parser#notifyErrorListeners}.
     *
     * @param recognizer the parser instance
     */
    reportMissingToken(recognizer) {
        if (this.inErrorRecoveryMode(recognizer)) {
            return;
        }
        this.beginErrorCondition(recognizer);
        let t = recognizer.currentToken;
        let expecting = this.getExpectedTokens(recognizer);
        let msg = "missing " + expecting.toStringVocabulary(recognizer.vocabulary) +
            " at " + this.getTokenErrorDisplay(t);
        recognizer.notifyErrorListeners(msg, t, undefined);
    }
    /**
     * {@inheritDoc}
     *
     * The default implementation attempts to recover from the mismatched input
     * by using single token insertion and deletion as described below. If the
     * recovery attempt fails, this method
     * {@link InputMismatchException}.
     *
     * **EXTRA TOKEN** (single token deletion)
     *
     * `LA(1)` is not what we are looking for. If `LA(2)` has the
     * right token, however, then assume `LA(1)` is some extra spurious
     * token and delete it. Then consume and return the next token (which was
     * the `LA(2)` token) as the successful result of the match operation.
     *
     * This recovery strategy is implemented by {@link #singleTokenDeletion}.
     *
     * **MISSING TOKEN** (single token insertion)
     *
     * If current token (at `LA(1)`) is consistent with what could come
     * after the expected `LA(1)` token, then assume the token is missing
     * and use the parser's {@link TokenFactory} to create it on the fly. The
     * "insertion" is performed by returning the created token as the successful
     * result of the match operation.
     *
     * This recovery strategy is implemented by {@link #singleTokenInsertion}.
     *
     * **EXAMPLE**
     *
     * For example, Input `i=(3;` is clearly missing the `')'`. When
     * the parser returns from the nested call to `expr`, it will have
     * call chain:
     *
     * ```
     * stat ??? expr ??? atom
     * ```
     *
     * and it will be trying to match the `')'` at this point in the
     * derivation:
     *
     * ```
     * => ID '=' '(' INT ')' ('+' atom)* ';'
     *                    ^
     * ```
     *
     * The attempt to match `')'` will fail when it sees `';'` and
     * call {@link #recoverInline}. To recover, it sees that `LA(1)==';'`
     * is in the set of tokens that can follow the `')'` token reference
     * in rule `atom`. It can assume that you forgot the `')'`.
     */
    recoverInline(recognizer) {
        // SINGLE TOKEN DELETION
        let matchedSymbol = this.singleTokenDeletion(recognizer);
        if (matchedSymbol) {
            // we have deleted the extra token.
            // now, move past ttype token as if all were ok
            recognizer.consume();
            return matchedSymbol;
        }
        // SINGLE TOKEN INSERTION
        if (this.singleTokenInsertion(recognizer)) {
            return this.getMissingSymbol(recognizer);
        }
        // even that didn't work; must throw the exception
        if (this.nextTokensContext === undefined) {
            throw new InputMismatchException_1.InputMismatchException(recognizer);
        }
        else {
            throw new InputMismatchException_1.InputMismatchException(recognizer, this.nextTokensState, this.nextTokensContext);
        }
    }
    /**
     * This method implements the single-token insertion inline error recovery
     * strategy. It is called by {@link #recoverInline} if the single-token
     * deletion strategy fails to recover from the mismatched input. If this
     * method returns `true`, `recognizer` will be in error recovery
     * mode.
     *
     * This method determines whether or not single-token insertion is viable by
     * checking if the `LA(1)` input symbol could be successfully matched
     * if it were instead the `LA(2)` symbol. If this method returns
     * `true`, the caller is responsible for creating and inserting a
     * token with the correct type to produce this behavior.
     *
     * @param recognizer the parser instance
     * @returns `true` if single-token insertion is a viable recovery
     * strategy for the current mismatched input, otherwise `false`
     */
    singleTokenInsertion(recognizer) {
        let currentSymbolType = recognizer.inputStream.LA(1);
        // if current token is consistent with what could come after current
        // ATN state, then we know we're missing a token; error recovery
        // is free to conjure up and insert the missing token
        let currentState = recognizer.interpreter.atn.states[recognizer.state];
        let next = currentState.transition(0).target;
        let atn = recognizer.interpreter.atn;
        let expectingAtLL2 = atn.nextTokens(next, PredictionContext_1.PredictionContext.fromRuleContext(atn, recognizer.context));
        //		console.warn("LT(2) set="+expectingAtLL2.toString(recognizer.getTokenNames()));
        if (expectingAtLL2.contains(currentSymbolType)) {
            this.reportMissingToken(recognizer);
            return true;
        }
        return false;
    }
    /**
     * This method implements the single-token deletion inline error recovery
     * strategy. It is called by {@link #recoverInline} to attempt to recover
     * from mismatched input. If this method returns `undefined`, the parser and error
     * handler state will not have changed. If this method returns non-`undefined`,
     * `recognizer` will *not* be in error recovery mode since the
     * returned token was a successful match.
     *
     * If the single-token deletion is successful, this method calls
     * {@link #reportUnwantedToken} to report the error, followed by
     * {@link Parser#consume} to actually "delete" the extraneous token. Then,
     * before returning {@link #reportMatch} is called to signal a successful
     * match.
     *
     * @param recognizer the parser instance
     * @returns the successfully matched {@link Token} instance if single-token
     * deletion successfully recovers from the mismatched input, otherwise
     * `undefined`
     */
    singleTokenDeletion(recognizer) {
        let nextTokenType = recognizer.inputStream.LA(2);
        let expecting = this.getExpectedTokens(recognizer);
        if (expecting.contains(nextTokenType)) {
            this.reportUnwantedToken(recognizer);
            /*
            System.err.println("recoverFromMismatchedToken deleting "+
                               ((TokenStream)recognizer.inputStream).LT(1)+
                               " since "+((TokenStream)recognizer.inputStream).LT(2)+
                               " is what we want");
            */
            recognizer.consume(); // simply delete extra token
            // we want to return the token we're actually matching
            let matchedSymbol = recognizer.currentToken;
            this.reportMatch(recognizer); // we know current token is correct
            return matchedSymbol;
        }
        return undefined;
    }
    /** Conjure up a missing token during error recovery.
     *
     *  The recognizer attempts to recover from single missing
     *  symbols. But, actions might refer to that missing symbol.
     *  For example, x=ID {f($x);}. The action clearly assumes
     *  that there has been an identifier matched previously and that
     *  $x points at that token. If that token is missing, but
     *  the next token in the stream is what we want we assume that
     *  this token is missing and we keep going. Because we
     *  have to return some token to replace the missing token,
     *  we have to conjure one up. This method gives the user control
     *  over the tokens returned for missing tokens. Mostly,
     *  you will want to create something special for identifier
     *  tokens. For literals such as '{' and ',', the default
     *  action in the parser or tree parser works. It simply creates
     *  a CommonToken of the appropriate type. The text will be the token.
     *  If you change what tokens must be created by the lexer,
     *  override this method to create the appropriate tokens.
     */
    getMissingSymbol(recognizer) {
        let currentSymbol = recognizer.currentToken;
        let expecting = this.getExpectedTokens(recognizer);
        let expectedTokenType = Token_1.Token.INVALID_TYPE;
        if (!expecting.isNil) {
            // get any element
            expectedTokenType = expecting.minElement;
        }
        let tokenText;
        if (expectedTokenType === Token_1.Token.EOF) {
            tokenText = "<missing EOF>";
        }
        else {
            tokenText = "<missing " + recognizer.vocabulary.getDisplayName(expectedTokenType) + ">";
        }
        let current = currentSymbol;
        let lookback = recognizer.inputStream.tryLT(-1);
        if (current.type === Token_1.Token.EOF && lookback != null) {
            current = lookback;
        }
        return this.constructToken(recognizer.inputStream.tokenSource, expectedTokenType, tokenText, current);
    }
    constructToken(tokenSource, expectedTokenType, tokenText, current) {
        let factory = tokenSource.tokenFactory;
        let x = current.tokenSource;
        let stream = x ? x.inputStream : undefined;
        return factory.create({ source: tokenSource, stream }, expectedTokenType, tokenText, Token_1.Token.DEFAULT_CHANNEL, -1, -1, current.line, current.charPositionInLine);
    }
    getExpectedTokens(recognizer) {
        return recognizer.getExpectedTokens();
    }
    /** How should a token be displayed in an error message? The default
     *  is to display just the text, but during development you might
     *  want to have a lot of information spit out.  Override in that case
     *  to use t.toString() (which, for CommonToken, dumps everything about
     *  the token). This is better than forcing you to override a method in
     *  your token objects because you don't have to go modify your lexer
     *  so that it creates a new Java type.
     */
    getTokenErrorDisplay(t) {
        if (!t) {
            return "<no token>";
        }
        let s = this.getSymbolText(t);
        if (!s) {
            if (this.getSymbolType(t) === Token_1.Token.EOF) {
                s = "<EOF>";
            }
            else {
                s = `<${this.getSymbolType(t)}>`;
            }
        }
        return this.escapeWSAndQuote(s);
    }
    getSymbolText(symbol) {
        return symbol.text;
    }
    getSymbolType(symbol) {
        return symbol.type;
    }
    escapeWSAndQuote(s) {
        //		if ( s==null ) return s;
        s = s.replace("\n", "\\n");
        s = s.replace("\r", "\\r");
        s = s.replace("\t", "\\t");
        return "'" + s + "'";
    }
    /*  Compute the error recovery set for the current rule.  During
     *  rule invocation, the parser pushes the set of tokens that can
     *  follow that rule reference on the stack; this amounts to
     *  computing FIRST of what follows the rule reference in the
     *  enclosing rule. See LinearApproximator.FIRST().
     *  This local follow set only includes tokens
     *  from within the rule; i.e., the FIRST computation done by
     *  ANTLR stops at the end of a rule.
     *
     *  EXAMPLE
     *
     *  When you find a "no viable alt exception", the input is not
     *  consistent with any of the alternatives for rule r.  The best
     *  thing to do is to consume tokens until you see something that
     *  can legally follow a call to r *or* any rule that called r.
     *  You don't want the exact set of viable next tokens because the
     *  input might just be missing a token--you might consume the
     *  rest of the input looking for one of the missing tokens.
     *
     *  Consider grammar:
     *
     *  a : '[' b ']'
     *    | '(' b ')'
     *    ;
     *  b : c '^' INT ;
     *  c : ID
     *    | INT
     *    ;
     *
     *  At each rule invocation, the set of tokens that could follow
     *  that rule is pushed on a stack.  Here are the various
     *  context-sensitive follow sets:
     *
     *  FOLLOW(b1_in_a) = FIRST(']') = ']'
     *  FOLLOW(b2_in_a) = FIRST(')') = ')'
     *  FOLLOW(c_in_b) = FIRST('^') = '^'
     *
     *  Upon erroneous input "[]", the call chain is
     *
     *  a -> b -> c
     *
     *  and, hence, the follow context stack is:
     *
     *  depth     follow set       start of rule execution
     *    0         <EOF>                    a (from main())
     *    1          ']'                     b
     *    2          '^'                     c
     *
     *  Notice that ')' is not included, because b would have to have
     *  been called from a different context in rule a for ')' to be
     *  included.
     *
     *  For error recovery, we cannot consider FOLLOW(c)
     *  (context-sensitive or otherwise).  We need the combined set of
     *  all context-sensitive FOLLOW sets--the set of all tokens that
     *  could follow any reference in the call chain.  We need to
     *  resync to one of those tokens.  Note that FOLLOW(c)='^' and if
     *  we resync'd to that token, we'd consume until EOF.  We need to
     *  sync to context-sensitive FOLLOWs for a, b, and c: {']','^'}.
     *  In this case, for input "[]", LA(1) is ']' and in the set, so we would
     *  not consume anything. After printing an error, rule c would
     *  return normally.  Rule b would not find the required '^' though.
     *  At this point, it gets a mismatched token error and
     *  exception (since LA(1) is not in the viable following token
     *  set).  The rule exception handler tries to recover, but finds
     *  the same recovery set and doesn't consume anything.  Rule b
     *  exits normally returning to rule a.  Now it finds the ']' (and
     *  with the successful match exits errorRecovery mode).
     *
     *  So, you can see that the parser walks up the call chain looking
     *  for the token that was a member of the recovery set.
     *
     *  Errors are not generated in errorRecovery mode.
     *
     *  ANTLR's error recovery mechanism is based upon original ideas:
     *
     *  "Algorithms + Data Structures = Programs" by Niklaus Wirth
     *
     *  and
     *
     *  "A note on error recovery in recursive descent parsers":
     *  http://portal.acm.org/citation.cfm?id=947902.947905
     *
     *  Later, Josef Grosch had some good ideas:
     *
     *  "Efficient and Comfortable Error Recovery in Recursive Descent
     *  Parsers":
     *  ftp://www.cocolab.com/products/cocktail/doca4.ps/ell.ps.zip
     *
     *  Like Grosch I implement context-sensitive FOLLOW sets that are combined
     *  at run-time upon error to avoid overhead during parsing.
     */
    getErrorRecoverySet(recognizer) {
        let atn = recognizer.interpreter.atn;
        let ctx = recognizer.context;
        let recoverSet = new IntervalSet_1.IntervalSet();
        while (ctx && ctx.invokingState >= 0) {
            // compute what follows who invoked us
            let invokingState = atn.states[ctx.invokingState];
            let rt = invokingState.transition(0);
            let follow = atn.nextTokens(rt.followState);
            recoverSet.addAll(follow);
            ctx = ctx._parent;
        }
        recoverSet.remove(Token_1.Token.EPSILON);
        //		System.out.println("recover set "+recoverSet.toString(recognizer.getTokenNames()));
        return recoverSet;
    }
    /** Consume tokens until one matches the given token set. */
    consumeUntil(recognizer, set) {
        //		System.err.println("consumeUntil("+set.toString(recognizer.getTokenNames())+")");
        let ttype = recognizer.inputStream.LA(1);
        while (ttype !== Token_1.Token.EOF && !set.contains(ttype)) {
            //System.out.println("consume during recover LA(1)="+getTokenNames()[input.LA(1)]);
            //			recognizer.inputStream.consume();
            recognizer.consume();
            ttype = recognizer.inputStream.LA(1);
        }
    }
}
__decorate([
    Decorators.Override
], DefaultErrorStrategy.prototype, "reset", null);
__decorate([
    __param(0, Decorators.NotNull)
], DefaultErrorStrategy.prototype, "beginErrorCondition", null);
__decorate([
    Decorators.Override
], DefaultErrorStrategy.prototype, "inErrorRecoveryMode", null);
__decorate([
    __param(0, Decorators.NotNull)
], DefaultErrorStrategy.prototype, "endErrorCondition", null);
__decorate([
    Decorators.Override
], DefaultErrorStrategy.prototype, "reportMatch", null);
__decorate([
    Decorators.Override
], DefaultErrorStrategy.prototype, "reportError", null);
__decorate([
    __param(0, Decorators.NotNull)
], DefaultErrorStrategy.prototype, "notifyErrorListeners", null);
__decorate([
    Decorators.Override
], DefaultErrorStrategy.prototype, "recover", null);
__decorate([
    Decorators.Override
], DefaultErrorStrategy.prototype, "sync", null);
__decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
], DefaultErrorStrategy.prototype, "reportNoViableAlternative", null);
__decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
], DefaultErrorStrategy.prototype, "reportInputMismatch", null);
__decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
], DefaultErrorStrategy.prototype, "reportFailedPredicate", null);
__decorate([
    __param(0, Decorators.NotNull)
], DefaultErrorStrategy.prototype, "reportUnwantedToken", null);
__decorate([
    __param(0, Decorators.NotNull)
], DefaultErrorStrategy.prototype, "reportMissingToken", null);
__decorate([
    Decorators.Override
], DefaultErrorStrategy.prototype, "recoverInline", null);
__decorate([
    __param(0, Decorators.NotNull)
], DefaultErrorStrategy.prototype, "singleTokenInsertion", null);
__decorate([
    __param(0, Decorators.NotNull)
], DefaultErrorStrategy.prototype, "singleTokenDeletion", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
], DefaultErrorStrategy.prototype, "getMissingSymbol", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
], DefaultErrorStrategy.prototype, "getExpectedTokens", null);
__decorate([
    __param(0, Decorators.NotNull)
], DefaultErrorStrategy.prototype, "getSymbolText", null);
__decorate([
    __param(0, Decorators.NotNull)
], DefaultErrorStrategy.prototype, "getSymbolType", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
], DefaultErrorStrategy.prototype, "escapeWSAndQuote", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
], DefaultErrorStrategy.prototype, "getErrorRecoverySet", null);
__decorate([
    __param(0, Decorators.NotNull), __param(1, Decorators.NotNull)
], DefaultErrorStrategy.prototype, "consumeUntil", null);
exports.DefaultErrorStrategy = DefaultErrorStrategy;

});

var BailErrorStrategy_1 = createCommonjsModule(function (module, exports) {
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
exports.BailErrorStrategy = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:49.2855056-07:00




/**
 * This implementation of {@link ANTLRErrorStrategy} responds to syntax errors
 * by immediately canceling the parse operation with a
 * {@link ParseCancellationException}. The implementation ensures that the
 * {@link ParserRuleContext#exception} field is set for all parse tree nodes
 * that were not completed prior to encountering the error.
 *
 * This error strategy is useful in the following scenarios.
 *
 * * **Two-stage parsing:** This error strategy allows the first
 *   stage of two-stage parsing to immediately terminate if an error is
 *   encountered, and immediately fall back to the second stage. In addition to
 *   avoiding wasted work by attempting to recover from errors here, the empty
 *   implementation of {@link BailErrorStrategy#sync} improves the performance of
 *   the first stage.
 * * **Silent validation:** When syntax errors are not being
 *   reported or logged, and the parse result is simply ignored if errors occur,
 *   the {@link BailErrorStrategy} avoids wasting work on recovering from errors
 *   when the result will be ignored either way.
 *
 * ```
 * myparser.errorHandler = new BailErrorStrategy();
 * ```
 *
 * @see Parser.errorHandler
 */
class BailErrorStrategy extends DefaultErrorStrategy_1.DefaultErrorStrategy {
    /** Instead of recovering from exception `e`, re-throw it wrapped
     *  in a {@link ParseCancellationException} so it is not caught by the
     *  rule function catches.  Use {@link Exception#getCause()} to get the
     *  original {@link RecognitionException}.
     */
    recover(recognizer, e) {
        for (let context = recognizer.context; context; context = context.parent) {
            context.exception = e;
        }
        throw new ParseCancellationException_1.ParseCancellationException(e);
    }
    /** Make sure we don't attempt to recover inline; if the parser
     *  successfully recovers, it won't throw an exception.
     */
    recoverInline(recognizer) {
        let e = new InputMismatchException_1.InputMismatchException(recognizer);
        for (let context = recognizer.context; context; context = context.parent) {
            context.exception = e;
        }
        throw new ParseCancellationException_1.ParseCancellationException(e);
    }
    /** Make sure we don't attempt to recover from problems in subrules. */
    sync(recognizer) {
        // intentionally empty
    }
}
__decorate([
    Decorators.Override
], BailErrorStrategy.prototype, "recover", null);
__decorate([
    Decorators.Override
], BailErrorStrategy.prototype, "recoverInline", null);
__decorate([
    Decorators.Override
], BailErrorStrategy.prototype, "sync", null);
exports.BailErrorStrategy = BailErrorStrategy;

});

export { ATNDeserializer_1 as A, BailErrorStrategy_1 as B, CharStreams_1 as C, DefaultErrorStrategy_1 as D, InputMismatchException_1 as I, ListTokenSource_1 as L, NoViableAltException_1 as N, ParserRuleContext_1 as P, RuleContext_1 as R, BufferedTokenStream_1 as a, CodePointBuffer_1 as b, CodePointCharStream_1 as c, CommonTokenStream_1 as d, InterpreterRuleContext_1 as e, Parser_1 as f, ParserInterpreter_1 as g, ProxyParserErrorListener_1 as h, ParserATNSimulator_1 as i };
