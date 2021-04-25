import { c as createCommonjsModule, a as commonjsGlobal, g as getDefaultExportFromCjs } from './common/_commonjsHelpers-8c19dec8.js';
import assert from 'assert';
import { D as Decorators } from './common/Decorators-d5ac3968.js';
import { I as IntStream_1, T as Token_1 } from './common/Token-75e833f9.js';
import { P as ParserRuleContext_1, B as BailErrorStrategy_1, a as BufferedTokenStream_1, C as CharStreams_1, b as CodePointBuffer_1, c as CodePointCharStream_1, d as CommonTokenStream_1, D as DefaultErrorStrategy_1, I as InputMismatchException_1, e as InterpreterRuleContext_1, L as ListTokenSource_1, N as NoViableAltException_1, f as Parser_1, g as ParserInterpreter_1, h as ProxyParserErrorListener_1, R as RuleContext_1 } from './common/BailErrorStrategy-11e3fda3.js';
import { B as BitSet_1, L as Lexer_1, a as LexerATNSimulator_1, A as ATN_1, C as CommonToken_1, b as CommonTokenFactory_1, c as ConsoleErrorListener_1, d as LexerNoViableAltException_1, P as ProxyErrorListener_1, R as Recognizer_1 } from './common/IntervalSet-c162c300.js';
import { I as Interval_1 } from './common/Interval-c51e6610.js';
import { F as FailedPredicateException_1 } from './common/FailedPredicateException-7c0d9412.js';
import { R as RecognitionException_1 } from './common/RecognitionException-83ca2269.js';
import { V as VocabularyImpl_1 } from './common/VocabularyImpl-84e96b9c.js';
import 'process';
import './common/Utils-bdfdedae.js';
import './common/SemanticContext-0e784ba9.js';
import './common/RuleNode-b68abfc6.js';
import 'util';

var ANTLRErrorListener = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });

});

var ANTLRErrorStrategy = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });

});

var ANTLRInputStream_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
// ConvertTo-TS run at 2016-10-04T11:26:49.0828748-07:00
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ANTLRInputStream = void 0;
/**
 * Vacuum all input from a {@link Reader}/{@link InputStream} and then treat it
 * like a `char[]` buffer. Can also pass in a {@link String} or
 * `char[]` to use.
 *
 * If you need encoding, pass in stream/reader with correct encoding.
 *
 * @deprecated as of 4.7, please use `CharStreams` interface.
 */
class ANTLRInputStream {
    /** Copy data in string to a local char array */
    constructor(input) {
        /** 0..n-1 index into string of next char */
        this.p = 0;
        this.data = input;
        this.n = input.length;
    }
    /** Reset the stream so that it's in the same state it was
     *  when the object was created *except* the data array is not
     *  touched.
     */
    reset() {
        this.p = 0;
    }
    consume() {
        if (this.p >= this.n) {
            assert(this.LA(1) === IntStream_1.IntStream.EOF);
            throw new Error("cannot consume EOF");
        }
        //System.out.println("prev p="+p+", c="+(char)data[p]);
        if (this.p < this.n) {
            this.p++;
            //System.out.println("p moves to "+p+" (c='"+(char)data[p]+"')");
        }
    }
    LA(i) {
        if (i === 0) {
            return 0; // undefined
        }
        if (i < 0) {
            i++; // e.g., translate LA(-1) to use offset i=0; then data[p+0-1]
            if ((this.p + i - 1) < 0) {
                return IntStream_1.IntStream.EOF; // invalid; no char before first char
            }
        }
        if ((this.p + i - 1) >= this.n) {
            //System.out.println("char LA("+i+")=EOF; p="+p);
            return IntStream_1.IntStream.EOF;
        }
        //System.out.println("char LA("+i+")="+(char)data[p+i-1]+"; p="+p);
        //System.out.println("LA("+i+"); p="+p+" n="+n+" data.length="+data.length);
        return this.data.charCodeAt(this.p + i - 1);
    }
    LT(i) {
        return this.LA(i);
    }
    /** Return the current input symbol index 0..n where n indicates the
     *  last symbol has been read.  The index is the index of char to
     *  be returned from LA(1).
     */
    get index() {
        return this.p;
    }
    get size() {
        return this.n;
    }
    /** mark/release do nothing; we have entire buffer */
    mark() {
        return -1;
    }
    release(marker) {
        // No default implementation since this stream buffers the entire input
    }
    /** consume() ahead until p==index; can't just set p=index as we must
     *  update line and charPositionInLine. If we seek backwards, just set p
     */
    seek(index) {
        if (index <= this.p) {
            this.p = index; // just jump; don't update stream state (line, ...)
            return;
        }
        // seek forward, consume until p hits index or n (whichever comes first)
        index = Math.min(index, this.n);
        while (this.p < index) {
            this.consume();
        }
    }
    getText(interval) {
        let start = interval.a;
        let stop = interval.b;
        if (stop >= this.n) {
            stop = this.n - 1;
        }
        let count = stop - start + 1;
        if (start >= this.n) {
            return "";
        }
        // System.err.println("data: "+Arrays.toString(data)+", n="+n+
        // 				   ", start="+start+
        // 				   ", stop="+stop);
        return this.data.substr(start, count);
    }
    get sourceName() {
        if (!this.name) {
            return IntStream_1.IntStream.UNKNOWN_SOURCE_NAME;
        }
        return this.name;
    }
    toString() { return this.data; }
}
__decorate([
    Decorators.Override
], ANTLRInputStream.prototype, "consume", null);
__decorate([
    Decorators.Override
], ANTLRInputStream.prototype, "LA", null);
__decorate([
    Decorators.Override
], ANTLRInputStream.prototype, "index", null);
__decorate([
    Decorators.Override
], ANTLRInputStream.prototype, "size", null);
__decorate([
    Decorators.Override
], ANTLRInputStream.prototype, "mark", null);
__decorate([
    Decorators.Override
], ANTLRInputStream.prototype, "release", null);
__decorate([
    Decorators.Override
], ANTLRInputStream.prototype, "seek", null);
__decorate([
    Decorators.Override
], ANTLRInputStream.prototype, "getText", null);
__decorate([
    Decorators.Override
], ANTLRInputStream.prototype, "sourceName", null);
__decorate([
    Decorators.Override
], ANTLRInputStream.prototype, "toString", null);
exports.ANTLRInputStream = ANTLRInputStream;

});

var CharStream = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });

});

var Dependents_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dependents = void 0;
(function (Dependents) {
    /**
     * The element is dependent upon the specified rule.
     */
    Dependents[Dependents["SELF"] = 0] = "SELF";
    /**
     * The element is dependent upon the set of the specified rule's parents
     * (rules which directly reference it).
     */
    Dependents[Dependents["PARENTS"] = 1] = "PARENTS";
    /**
     * The element is dependent upon the set of the specified rule's children
     * (rules which it directly references).
     */
    Dependents[Dependents["CHILDREN"] = 2] = "CHILDREN";
    /**
     * The element is dependent upon the set of the specified rule's ancestors
     * (the transitive closure of `PARENTS` rules).
     */
    Dependents[Dependents["ANCESTORS"] = 3] = "ANCESTORS";
    /**
     * The element is dependent upon the set of the specified rule's descendants
     * (the transitive closure of `CHILDREN` rules).
     */
    Dependents[Dependents["DESCENDANTS"] = 4] = "DESCENDANTS";
    /**
     * The element is dependent upon the set of the specified rule's siblings
     * (the union of `CHILDREN` of its `PARENTS`).
     */
    Dependents[Dependents["SIBLINGS"] = 5] = "SIBLINGS";
    /**
     * The element is dependent upon the set of the specified rule's preceeding
     * siblings (the union of `CHILDREN` of its `PARENTS` which
     * appear before a reference to the rule).
     */
    Dependents[Dependents["PRECEEDING_SIBLINGS"] = 6] = "PRECEEDING_SIBLINGS";
    /**
     * The element is dependent upon the set of the specified rule's following
     * siblings (the union of `CHILDREN` of its `PARENTS` which
     * appear after a reference to the rule).
     */
    Dependents[Dependents["FOLLOWING_SIBLINGS"] = 7] = "FOLLOWING_SIBLINGS";
    /**
     * The element is dependent upon the set of the specified rule's preceeding
     * elements (rules which might end before the start of the specified rule
     * while parsing). This is calculated by taking the
     * `PRECEEDING_SIBLINGS` of the rule and each of its
     * `ANCESTORS`, along with the `DESCENDANTS` of those
     * elements.
     */
    Dependents[Dependents["PRECEEDING"] = 8] = "PRECEEDING";
    /**
     * The element is dependent upon the set of the specified rule's following
     * elements (rules which might start after the end of the specified rule
     * while parsing). This is calculated by taking the
     * `FOLLOWING_SIBLINGS` of the rule and each of its
     * `ANCESTORS`, along with the `DESCENDANTS` of those
     * elements.
     */
    Dependents[Dependents["FOLLOWING"] = 9] = "FOLLOWING";
})(exports.Dependents || (exports.Dependents = {}));

});

var DiagnosticErrorListener_1 = createCommonjsModule(function (module, exports) {
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
exports.DiagnosticErrorListener = void 0;



/**
 * This implementation of {@link ANTLRErrorListener} can be used to identify
 * certain potential correctness and performance problems in grammars. "Reports"
 * are made by calling {@link Parser#notifyErrorListeners} with the appropriate
 * message.
 *
 * * **Ambiguities**: These are cases where more than one path through the
 *   grammar can match the input.
 * * **Weak context sensitivity**: These are cases where full-context
 *   prediction resolved an SLL conflict to a unique alternative which equaled the
 *   minimum alternative of the SLL conflict.
 * * **Strong (forced) context sensitivity**: These are cases where the
 *   full-context prediction resolved an SLL conflict to a unique alternative,
 *   *and* the minimum alternative of the SLL conflict was found to not be
 *   a truly viable alternative. Two-stage parsing cannot be used for inputs where
 *   this situation occurs.
 *
 * @author Sam Harwell
 */
class DiagnosticErrorListener {
    /**
     * Initializes a new instance of {@link DiagnosticErrorListener}, specifying
     * whether all ambiguities or only exact ambiguities are reported.
     *
     * @param exactOnly `true` to report only exact ambiguities, otherwise
     * `false` to report all ambiguities.  Defaults to true.
     */
    constructor(exactOnly = true) {
        this.exactOnly = exactOnly;
        this.exactOnly = exactOnly;
    }
    syntaxError(
    /*@NotNull*/
    recognizer, offendingSymbol, line, charPositionInLine, 
    /*@NotNull*/
    msg, e) {
        // intentionally empty
    }
    reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
        if (this.exactOnly && !exact) {
            return;
        }
        let decision = this.getDecisionDescription(recognizer, dfa);
        let conflictingAlts = this.getConflictingAlts(ambigAlts, configs);
        let text = recognizer.inputStream.getText(Interval_1.Interval.of(startIndex, stopIndex));
        let message = `reportAmbiguity d=${decision}: ambigAlts=${conflictingAlts}, input='${text}'`;
        recognizer.notifyErrorListeners(message);
    }
    reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, conflictState) {
        let decision = this.getDecisionDescription(recognizer, dfa);
        let text = recognizer.inputStream.getText(Interval_1.Interval.of(startIndex, stopIndex));
        let message = `reportAttemptingFullContext d=${decision}, input='${text}'`;
        recognizer.notifyErrorListeners(message);
    }
    reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, acceptState) {
        let decision = this.getDecisionDescription(recognizer, dfa);
        let text = recognizer.inputStream.getText(Interval_1.Interval.of(startIndex, stopIndex));
        let message = `reportContextSensitivity d=${decision}, input='${text}'`;
        recognizer.notifyErrorListeners(message);
    }
    getDecisionDescription(recognizer, dfa) {
        let decision = dfa.decision;
        let ruleIndex = dfa.atnStartState.ruleIndex;
        let ruleNames = recognizer.ruleNames;
        if (ruleIndex < 0 || ruleIndex >= ruleNames.length) {
            return decision.toString();
        }
        let ruleName = ruleNames[ruleIndex];
        if (!ruleName) {
            return decision.toString();
        }
        return `${decision} (${ruleName})`;
    }
    /**
     * Computes the set of conflicting or ambiguous alternatives from a
     * configuration set, if that information was not already provided by the
     * parser.
     *
     * @param reportedAlts The set of conflicting or ambiguous alternatives, as
     * reported by the parser.
     * @param configs The conflicting or ambiguous configuration set.
     * @returns Returns `reportedAlts` if it is not `undefined`, otherwise
     * returns the set of alternatives represented in `configs`.
     */
    getConflictingAlts(reportedAlts, configs) {
        if (reportedAlts != null) {
            return reportedAlts;
        }
        let result = new BitSet_1.BitSet();
        for (let config of configs) {
            result.set(config.alt);
        }
        return result;
    }
}
__decorate([
    Decorators.Override
], DiagnosticErrorListener.prototype, "syntaxError", null);
__decorate([
    Decorators.Override,
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(6, Decorators.NotNull)
], DiagnosticErrorListener.prototype, "reportAmbiguity", null);
__decorate([
    Decorators.Override,
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(5, Decorators.NotNull)
], DiagnosticErrorListener.prototype, "reportAttemptingFullContext", null);
__decorate([
    Decorators.Override,
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(5, Decorators.NotNull)
], DiagnosticErrorListener.prototype, "reportContextSensitivity", null);
__decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
], DiagnosticErrorListener.prototype, "getDecisionDescription", null);
__decorate([
    Decorators.NotNull,
    __param(1, Decorators.NotNull)
], DiagnosticErrorListener.prototype, "getConflictingAlts", null);
exports.DiagnosticErrorListener = DiagnosticErrorListener;

});

var LexerInterpreter_1 = createCommonjsModule(function (module, exports) {
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
exports.LexerInterpreter = void 0;



const Decorators_2 = Decorators;
let LexerInterpreter = class LexerInterpreter extends Lexer_1.Lexer {
    constructor(grammarFileName, vocabulary, ruleNames, channelNames, modeNames, atn, input) {
        super(input);
        if (atn.grammarType !== 0 /* LEXER */) {
            throw new Error("IllegalArgumentException: The ATN must be a lexer ATN.");
        }
        this._grammarFileName = grammarFileName;
        this._atn = atn;
        this._ruleNames = ruleNames.slice(0);
        this._channelNames = channelNames.slice(0);
        this._modeNames = modeNames.slice(0);
        this._vocabulary = vocabulary;
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(atn, this);
    }
    get atn() {
        return this._atn;
    }
    get grammarFileName() {
        return this._grammarFileName;
    }
    get ruleNames() {
        return this._ruleNames;
    }
    get channelNames() {
        return this._channelNames;
    }
    get modeNames() {
        return this._modeNames;
    }
    get vocabulary() {
        return this._vocabulary;
    }
};
__decorate([
    Decorators.NotNull
], LexerInterpreter.prototype, "_vocabulary", void 0);
__decorate([
    Decorators_2.Override
], LexerInterpreter.prototype, "atn", null);
__decorate([
    Decorators_2.Override
], LexerInterpreter.prototype, "grammarFileName", null);
__decorate([
    Decorators_2.Override
], LexerInterpreter.prototype, "ruleNames", null);
__decorate([
    Decorators_2.Override
], LexerInterpreter.prototype, "channelNames", null);
__decorate([
    Decorators_2.Override
], LexerInterpreter.prototype, "modeNames", null);
__decorate([
    Decorators_2.Override
], LexerInterpreter.prototype, "vocabulary", null);
LexerInterpreter = __decorate([
    __param(1, Decorators.NotNull)
], LexerInterpreter);
exports.LexerInterpreter = LexerInterpreter;

});

var ParserErrorListener = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });

});

var RuleContextWithAltNum_1 = createCommonjsModule(function (module, exports) {
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
exports.RuleContextWithAltNum = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:57.4741196-07:00



/** A handy class for use with
 *
 *  options {contextSuperClass=org.antlr.v4.runtime.RuleContextWithAltNum;}
 *
 *  that provides a backing field / impl for the outer alternative number
 *  matched for an internal parse tree node.
 *
 *  I'm only putting into Java runtime as I'm certain I'm the only one that
 *  will really every use this.
 */
class RuleContextWithAltNum extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingStateNumber) {
        if (invokingStateNumber !== undefined) {
            super(parent, invokingStateNumber);
        }
        else {
            super();
        }
        this._altNumber = ATN_1.ATN.INVALID_ALT_NUMBER;
    }
    get altNumber() {
        return this._altNumber;
    }
    // @Override
    set altNumber(altNum) {
        this._altNumber = altNum;
    }
}
__decorate([
    Decorators.Override
], RuleContextWithAltNum.prototype, "altNumber", null);
exports.RuleContextWithAltNum = RuleContextWithAltNum;

});

var RuleDependency_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleDependency = void 0;
/**
 * Declares a dependency upon a grammar rule, along with a set of zero or more dependent rules.
 *
 * Version numbers within a grammar should be assigned on a monotonically increasing basis to allow for accurate
 * tracking of dependent rules.
 *
 * @author Sam Harwell
 */
function RuleDependency(dependency) {
    return (target, propertyKey, propertyDescriptor) => {
        // intentionally empty
    };
}
exports.RuleDependency = RuleDependency;

});

var RuleVersion_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleVersion = void 0;
/**
 *
 * @author Sam Harwell
 */
function RuleVersion(version) {
    return (target, propertyKey, propertyDescriptor) => {
        // intentionally empty
    };
}
exports.RuleVersion = RuleVersion;

});

var TokenFactory = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });

});

var TokenSource = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });

});

var TokenStream = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });

});

var TokenStreamRewriter_1 = createCommonjsModule(function (module, exports) {
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
exports.RewriteOperation = exports.TokenStreamRewriter = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:58.1768850-07:00



/**
 * Useful for rewriting out a buffered input token stream after doing some
 * augmentation or other manipulations on it.
 *
 * You can insert stuff, replace, and delete chunks. Note that the operations
 * are done lazily--only if you convert the buffer to a {@link String} with
 * {@link TokenStream#getText()}. This is very efficient because you are not
 * moving data around all the time. As the buffer of tokens is converted to
 * strings, the {@link #getText()} method(s) scan the input token stream and
 * check to see if there is an operation at the current index. If so, the
 * operation is done and then normal {@link String} rendering continues on the
 * buffer. This is like having multiple Turing machine instruction streams
 * (programs) operating on a single input tape. :)
 *
 * This rewriter makes no modifications to the token stream. It does not ask the
 * stream to fill itself up nor does it advance the input cursor. The token
 * stream `TokenStream.index` will return the same value before and
 * after any {@link #getText()} call.
 *
 * The rewriter only works on tokens that you have in the buffer and ignores the
 * current input cursor. If you are buffering tokens on-demand, calling
 * {@link #getText()} halfway through the input will only do rewrites for those
 * tokens in the first half of the file.
 *
 * Since the operations are done lazily at {@link #getText}-time, operations do
 * not screw up the token index values. That is, an insert operation at token
 * index `i` does not change the index values for tokens
 * `i`+1..n-1.
 *
 * Because operations never actually alter the buffer, you may always get the
 * original token stream back without undoing anything. Since the instructions
 * are queued up, you can easily simulate transactions and roll back any changes
 * if there is an error just by removing instructions. For example,
 *
 * ```
 * CharStream input = new ANTLRFileStream("input");
 * TLexer lex = new TLexer(input);
 * CommonTokenStream tokens = new CommonTokenStream(lex);
 * T parser = new T(tokens);
 * TokenStreamRewriter rewriter = new TokenStreamRewriter(tokens);
 * parser.startRule();
 * ```
 *
 * Then in the rules, you can execute (assuming rewriter is visible):
 *
 * ```
 * Token t,u;
 * ...
 * rewriter.insertAfter(t, "text to put after t");}
 * rewriter.insertAfter(u, "text after u");}
 * System.out.println(rewriter.getText());
 * ```
 *
 * You can also have multiple "instruction streams" and get multiple rewrites
 * from a single pass over the input. Just name the instruction streams and use
 * that name again when printing the buffer. This could be useful for generating
 * a C file and also its header file--all from the same buffer:
 *
 * ```
 * rewriter.insertAfter("pass1", t, "text to put after t");}
 * rewriter.insertAfter("pass2", u, "text after u");}
 * System.out.println(rewriter.getText("pass1"));
 * System.out.println(rewriter.getText("pass2"));
 * ```
 *
 * If you don't use named rewrite streams, a "default" stream is used as the
 * first example shows.
 */
class TokenStreamRewriter {
    constructor(tokens) {
        this.tokens = tokens;
        this.programs = new Map();
        this.programs.set(TokenStreamRewriter.DEFAULT_PROGRAM_NAME, []);
        this.lastRewriteTokenIndexes = new Map();
    }
    getTokenStream() {
        return this.tokens;
    }
    rollback(instructionIndex, programName = TokenStreamRewriter.DEFAULT_PROGRAM_NAME) {
        let is = this.programs.get(programName);
        if (is != null) {
            this.programs.set(programName, is.slice(TokenStreamRewriter.MIN_TOKEN_INDEX, instructionIndex));
        }
    }
    deleteProgram(programName = TokenStreamRewriter.DEFAULT_PROGRAM_NAME) {
        this.rollback(TokenStreamRewriter.MIN_TOKEN_INDEX, programName);
    }
    insertAfter(tokenOrIndex, text, programName = TokenStreamRewriter.DEFAULT_PROGRAM_NAME) {
        let index;
        if (typeof tokenOrIndex === "number") {
            index = tokenOrIndex;
        }
        else {
            index = tokenOrIndex.tokenIndex;
        }
        // to insert after, just insert before next index (even if past end)
        let rewrites = this.getProgram(programName);
        let op = new InsertAfterOp(this.tokens, index, rewrites.length, text);
        rewrites.push(op);
    }
    insertBefore(tokenOrIndex, text, programName = TokenStreamRewriter.DEFAULT_PROGRAM_NAME) {
        let index;
        if (typeof tokenOrIndex === "number") {
            index = tokenOrIndex;
        }
        else {
            index = tokenOrIndex.tokenIndex;
        }
        let rewrites = this.getProgram(programName);
        let op = new InsertBeforeOp(this.tokens, index, rewrites.length, text);
        rewrites.push(op);
    }
    replaceSingle(index, text) {
        if (typeof index === "number") {
            this.replace(index, index, text);
        }
        else {
            this.replace(index, index, text);
        }
    }
    replace(from, to, text, programName = TokenStreamRewriter.DEFAULT_PROGRAM_NAME) {
        if (typeof from !== "number") {
            from = from.tokenIndex;
        }
        if (typeof to !== "number") {
            to = to.tokenIndex;
        }
        if (from > to || from < 0 || to < 0 || to >= this.tokens.size) {
            throw new RangeError(`replace: range invalid: ${from}..${to}(size=${this.tokens.size})`);
        }
        let rewrites = this.getProgram(programName);
        let op = new ReplaceOp(this.tokens, from, to, rewrites.length, text);
        rewrites.push(op);
    }
    delete(from, to, programName = TokenStreamRewriter.DEFAULT_PROGRAM_NAME) {
        if (to === undefined) {
            to = from;
        }
        if (typeof from === "number") {
            this.replace(from, to, "", programName);
        }
        else {
            this.replace(from, to, "", programName);
        }
    }
    getLastRewriteTokenIndex(programName = TokenStreamRewriter.DEFAULT_PROGRAM_NAME) {
        let I = this.lastRewriteTokenIndexes.get(programName);
        if (I == null) {
            return -1;
        }
        return I;
    }
    setLastRewriteTokenIndex(programName, i) {
        this.lastRewriteTokenIndexes.set(programName, i);
    }
    getProgram(name) {
        let is = this.programs.get(name);
        if (is == null) {
            is = this.initializeProgram(name);
        }
        return is;
    }
    initializeProgram(name) {
        let is = [];
        this.programs.set(name, is);
        return is;
    }
    getText(intervalOrProgram, programName = TokenStreamRewriter.DEFAULT_PROGRAM_NAME) {
        let interval;
        if (intervalOrProgram instanceof Interval_1.Interval) {
            interval = intervalOrProgram;
        }
        else {
            interval = Interval_1.Interval.of(0, this.tokens.size - 1);
        }
        if (typeof intervalOrProgram === "string") {
            programName = intervalOrProgram;
        }
        let rewrites = this.programs.get(programName);
        let start = interval.a;
        let stop = interval.b;
        // ensure start/end are in range
        if (stop > this.tokens.size - 1) {
            stop = this.tokens.size - 1;
        }
        if (start < 0) {
            start = 0;
        }
        if (rewrites == null || rewrites.length === 0) {
            return this.tokens.getText(interval); // no instructions to execute
        }
        let buf = [];
        // First, optimize instruction stream
        let indexToOp = this.reduceToSingleOperationPerIndex(rewrites);
        // Walk buffer, executing instructions and emitting tokens
        let i = start;
        while (i <= stop && i < this.tokens.size) {
            let op = indexToOp.get(i);
            indexToOp.delete(i); // remove so any left have index size-1
            let t = this.tokens.get(i);
            if (op == null) {
                // no operation at that index, just dump token
                if (t.type !== Token_1.Token.EOF) {
                    buf.push(String(t.text));
                }
                i++; // move to next token
            }
            else {
                i = op.execute(buf); // execute operation and skip
            }
        }
        // include stuff after end if it's last index in buffer
        // So, if they did an insertAfter(lastValidIndex, "foo"), include
        // foo if end==lastValidIndex.
        if (stop === this.tokens.size - 1) {
            // Scan any remaining operations after last token
            // should be included (they will be inserts).
            for (let op of indexToOp.values()) {
                if (op.index >= this.tokens.size - 1) {
                    buf.push(op.text.toString());
                }
            }
        }
        return buf.join("");
    }
    /** We need to combine operations and report invalid operations (like
     *  overlapping replaces that are not completed nested). Inserts to
     *  same index need to be combined etc...  Here are the cases:
     *
     *  I.i.u I.j.v								leave alone, nonoverlapping
     *  I.i.u I.i.v								combine: Iivu
     *
     *  R.i-j.u R.x-y.v	| i-j in x-y			delete first R
     *  R.i-j.u R.i-j.v							delete first R
     *  R.i-j.u R.x-y.v	| x-y in i-j			ERROR
     *  R.i-j.u R.x-y.v	| boundaries overlap	ERROR
     *
     *  Delete special case of replace (text==undefined):
     *  D.i-j.u D.x-y.v	| boundaries overlap	combine to max(min)..max(right)
     *
     *  I.i.u R.x-y.v | i in (x+1)-y			delete I (since insert before
     * 											we're not deleting i)
     *  I.i.u R.x-y.v | i not in (x+1)-y		leave alone, nonoverlapping
     *  R.x-y.v I.i.u | i in x-y				ERROR
     *  R.x-y.v I.x.u 							R.x-y.uv (combine, delete I)
     *  R.x-y.v I.i.u | i not in x-y			leave alone, nonoverlapping
     *
     *  I.i.u = insert u before op @ index i
     *  R.x-y.u = replace x-y indexed tokens with u
     *
     *  First we need to examine replaces. For any replace op:
     *
     * 		1. wipe out any insertions before op within that range.
     * 		2. Drop any replace op before that is contained completely within
     * 	 that range.
     * 		3. Throw exception upon boundary overlap with any previous replace.
     *
     *  Then we can deal with inserts:
     *
     * 		1. for any inserts to same index, combine even if not adjacent.
     * 		2. for any prior replace with same left boundary, combine this
     * 	 insert with replace and delete this replace.
     * 		3. throw exception if index in same range as previous replace
     *
     *  Don't actually delete; make op undefined in list. Easier to walk list.
     *  Later we can throw as we add to index &rarr; op map.
     *
     *  Note that I.2 R.2-2 will wipe out I.2 even though, technically, the
     *  inserted stuff would be before the replace range. But, if you
     *  add tokens in front of a method body '{' and then delete the method
     *  body, I think the stuff before the '{' you added should disappear too.
     *
     *  Return a map from token index to operation.
     */
    reduceToSingleOperationPerIndex(rewrites) {
        // console.log(`rewrites=[${Utils.join(rewrites, ", ")}]`);
        // WALK REPLACES
        for (let i = 0; i < rewrites.length; i++) {
            let op = rewrites[i];
            if (op == null) {
                continue;
            }
            if (!(op instanceof ReplaceOp)) {
                continue;
            }
            let rop = op;
            // Wipe prior inserts within range
            let inserts = this.getKindOfOps(rewrites, InsertBeforeOp, i);
            for (let iop of inserts) {
                if (iop.index === rop.index) {
                    // E.g., insert before 2, delete 2..2; update replace
                    // text to include insert before, kill insert
                    rewrites[iop.instructionIndex] = undefined;
                    rop.text = iop.text.toString() + (rop.text != null ? rop.text.toString() : "");
                }
                else if (iop.index > rop.index && iop.index <= rop.lastIndex) {
                    // delete insert as it's a no-op.
                    rewrites[iop.instructionIndex] = undefined;
                }
            }
            // Drop any prior replaces contained within
            let prevReplaces = this.getKindOfOps(rewrites, ReplaceOp, i);
            for (let prevRop of prevReplaces) {
                if (prevRop.index >= rop.index && prevRop.lastIndex <= rop.lastIndex) {
                    // delete replace as it's a no-op.
                    rewrites[prevRop.instructionIndex] = undefined;
                    continue;
                }
                // throw exception unless disjoint or identical
                let disjoint = prevRop.lastIndex < rop.index || prevRop.index > rop.lastIndex;
                // Delete special case of replace (text==null):
                // D.i-j.u D.x-y.v	| boundaries overlap	combine to max(min)..max(right)
                if (prevRop.text == null && rop.text == null && !disjoint) {
                    // console.log(`overlapping deletes: ${prevRop}, ${rop}`);
                    rewrites[prevRop.instructionIndex] = undefined; // kill first delete
                    rop.index = Math.min(prevRop.index, rop.index);
                    rop.lastIndex = Math.max(prevRop.lastIndex, rop.lastIndex);
                    // console.log(`new rop ${rop}`);
                }
                else if (!disjoint) {
                    throw new Error(`replace op boundaries of ${rop} overlap with previous ${prevRop}`);
                }
            }
        }
        // WALK INSERTS
        for (let i = 0; i < rewrites.length; i++) {
            let op = rewrites[i];
            if (op == null) {
                continue;
            }
            if (!(op instanceof InsertBeforeOp)) {
                continue;
            }
            let iop = op;
            // combine current insert with prior if any at same index
            let prevInserts = this.getKindOfOps(rewrites, InsertBeforeOp, i);
            for (let prevIop of prevInserts) {
                if (prevIop.index === iop.index) {
                    if (prevIop instanceof InsertAfterOp) {
                        iop.text = this.catOpText(prevIop.text, iop.text);
                        rewrites[prevIop.instructionIndex] = undefined;
                    }
                    else if (prevIop instanceof InsertBeforeOp) { // combine objects
                        // convert to strings...we're in process of toString'ing
                        // whole token buffer so no lazy eval issue with any templates
                        iop.text = this.catOpText(iop.text, prevIop.text);
                        // delete redundant prior insert
                        rewrites[prevIop.instructionIndex] = undefined;
                    }
                }
            }
            // look for replaces where iop.index is in range; error
            let prevReplaces = this.getKindOfOps(rewrites, ReplaceOp, i);
            for (let rop of prevReplaces) {
                if (iop.index === rop.index) {
                    rop.text = this.catOpText(iop.text, rop.text);
                    rewrites[i] = undefined; // delete current insert
                    continue;
                }
                if (iop.index >= rop.index && iop.index <= rop.lastIndex) {
                    throw new Error(`insert op ${iop} within boundaries of previous ${rop}`);
                }
            }
        }
        // console.log(`rewrites after=[${Utils.join(rewrites, ", ")}]`);
        let m = new Map();
        for (let op of rewrites) {
            if (op == null) {
                // ignore deleted ops
                continue;
            }
            if (m.get(op.index) != null) {
                throw new Error("should only be one op per index");
            }
            m.set(op.index, op);
        }
        // console.log(`index to op: ${m}`);
        return m;
    }
    catOpText(a, b) {
        let x = "";
        let y = "";
        if (a != null) {
            x = a.toString();
        }
        if (b != null) {
            y = b.toString();
        }
        return x + y;
    }
    /** Get all operations before an index of a particular kind */
    getKindOfOps(rewrites, kind, before) {
        let ops = [];
        for (let i = 0; i < before && i < rewrites.length; i++) {
            let op = rewrites[i];
            if (op == null) {
                // ignore deleted
                continue;
            }
            if (op instanceof kind) {
                ops.push(op);
            }
        }
        return ops;
    }
}
exports.TokenStreamRewriter = TokenStreamRewriter;
TokenStreamRewriter.DEFAULT_PROGRAM_NAME = "default";
TokenStreamRewriter.PROGRAM_INIT_SIZE = 100;
TokenStreamRewriter.MIN_TOKEN_INDEX = 0;
// Define the rewrite operation hierarchy
class RewriteOperation {
    constructor(tokens, index, instructionIndex, text) {
        this.tokens = tokens;
        this.instructionIndex = instructionIndex;
        this.index = index;
        this.text = text === undefined ? "" : text;
    }
    /** Execute the rewrite operation by possibly adding to the buffer.
     *  Return the index of the next token to operate on.
     */
    execute(buf) {
        return this.index;
    }
    toString() {
        let opName = this.constructor.name;
        let $index = opName.indexOf("$");
        opName = opName.substring($index + 1, opName.length);
        return "<" + opName + "@" + this.tokens.get(this.index) +
            ":\"" + this.text + "\">";
    }
}
__decorate([
    Decorators.Override
], RewriteOperation.prototype, "toString", null);
exports.RewriteOperation = RewriteOperation;
class InsertBeforeOp extends RewriteOperation {
    constructor(tokens, index, instructionIndex, text) {
        super(tokens, index, instructionIndex, text);
    }
    execute(buf) {
        buf.push(this.text.toString());
        if (this.tokens.get(this.index).type !== Token_1.Token.EOF) {
            buf.push(String(this.tokens.get(this.index).text));
        }
        return this.index + 1;
    }
}
__decorate([
    Decorators.Override
], InsertBeforeOp.prototype, "execute", null);
/** Distinguish between insert after/before to do the "insert afters"
 *  first and then the "insert befores" at same index. Implementation
 *  of "insert after" is "insert before index+1".
 */
class InsertAfterOp extends InsertBeforeOp {
    constructor(tokens, index, instructionIndex, text) {
        super(tokens, index + 1, instructionIndex, text); // insert after is insert before index+1
    }
}
/** I'm going to try replacing range from x..y with (y-x)+1 ReplaceOp
 *  instructions.
 */
class ReplaceOp extends RewriteOperation {
    constructor(tokens, from, to, instructionIndex, text) {
        super(tokens, from, instructionIndex, text);
        this.lastIndex = to;
    }
    execute(buf) {
        if (this.text != null) {
            buf.push(this.text.toString());
        }
        return this.lastIndex + 1;
    }
    toString() {
        if (this.text == null) {
            return "<DeleteOp@" + this.tokens.get(this.index) +
                ".." + this.tokens.get(this.lastIndex) + ">";
        }
        return "<ReplaceOp@" + this.tokens.get(this.index) +
            ".." + this.tokens.get(this.lastIndex) + ":\"" + this.text + "\">";
    }
}
__decorate([
    Decorators.Override
], ReplaceOp.prototype, "execute", null);
__decorate([
    Decorators.Override
], ReplaceOp.prototype, "toString", null);

});

var Vocabulary = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });

});

var WritableToken = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });

});

var antlr4ts = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(ANTLRErrorListener, exports);
__exportStar(ANTLRErrorStrategy, exports);
// export * from "./ANTLRFileStream";
__exportStar(ANTLRInputStream_1, exports);
__exportStar(BailErrorStrategy_1, exports);
__exportStar(BufferedTokenStream_1, exports);
__exportStar(CharStream, exports);
__exportStar(CharStreams_1, exports);
__exportStar(CodePointBuffer_1, exports);
__exportStar(CodePointCharStream_1, exports);
__exportStar(CommonToken_1, exports);
__exportStar(CommonTokenFactory_1, exports);
__exportStar(CommonTokenStream_1, exports);
__exportStar(ConsoleErrorListener_1, exports);
__exportStar(DefaultErrorStrategy_1, exports);
__exportStar(Dependents_1, exports);
__exportStar(DiagnosticErrorListener_1, exports);
__exportStar(FailedPredicateException_1, exports);
__exportStar(InputMismatchException_1, exports);
__exportStar(InterpreterRuleContext_1, exports);
__exportStar(IntStream_1, exports);
__exportStar(Lexer_1, exports);
__exportStar(LexerInterpreter_1, exports);
__exportStar(LexerNoViableAltException_1, exports);
__exportStar(ListTokenSource_1, exports);
__exportStar(NoViableAltException_1, exports);
__exportStar(Parser_1, exports);
__exportStar(ParserErrorListener, exports);
__exportStar(ParserInterpreter_1, exports);
__exportStar(ParserRuleContext_1, exports);
__exportStar(ProxyErrorListener_1, exports);
__exportStar(ProxyParserErrorListener_1, exports);
__exportStar(RecognitionException_1, exports);
__exportStar(Recognizer_1, exports);
__exportStar(RuleContext_1, exports);
__exportStar(RuleContextWithAltNum_1, exports);
__exportStar(RuleDependency_1, exports);
__exportStar(RuleVersion_1, exports);
__exportStar(Token_1, exports);
__exportStar(TokenFactory, exports);
__exportStar(TokenSource, exports);
__exportStar(TokenStream, exports);
__exportStar(TokenStreamRewriter_1, exports);
// export * from "./UnbufferedCharStream";
// export * from "./UnbufferedTokenStream";
__exportStar(Vocabulary, exports);
__exportStar(VocabularyImpl_1, exports);
__exportStar(WritableToken, exports);

});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(antlr4ts);

var ANTLRInputStream = antlr4ts.ANTLRInputStream;
var BailErrorStrategy = antlr4ts.BailErrorStrategy;
var BufferedTokenStream = antlr4ts.BufferedTokenStream;
var CharStreams = antlr4ts.CharStreams;
var CodePointBuffer = antlr4ts.CodePointBuffer;
var CodePointCharStream = antlr4ts.CodePointCharStream;
var CommonToken = antlr4ts.CommonToken;
var CommonTokenFactory = antlr4ts.CommonTokenFactory;
var CommonTokenStream = antlr4ts.CommonTokenStream;
var ConsoleErrorListener = antlr4ts.ConsoleErrorListener;
var DefaultErrorStrategy = antlr4ts.DefaultErrorStrategy;
var Dependents = antlr4ts.Dependents;
var DiagnosticErrorListener = antlr4ts.DiagnosticErrorListener;
var FailedPredicateException = antlr4ts.FailedPredicateException;
var InputMismatchException = antlr4ts.InputMismatchException;
var IntStream = antlr4ts.IntStream;
var InterpreterRuleContext = antlr4ts.InterpreterRuleContext;
var Lexer = antlr4ts.Lexer;
var LexerInterpreter = antlr4ts.LexerInterpreter;
var LexerNoViableAltException = antlr4ts.LexerNoViableAltException;
var ListTokenSource = antlr4ts.ListTokenSource;
var NoViableAltException = antlr4ts.NoViableAltException;
var Parser = antlr4ts.Parser;
var ParserInterpreter = antlr4ts.ParserInterpreter;
var ParserRuleContext = antlr4ts.ParserRuleContext;
var ProxyErrorListener = antlr4ts.ProxyErrorListener;
var ProxyParserErrorListener = antlr4ts.ProxyParserErrorListener;
var RecognitionException = antlr4ts.RecognitionException;
var Recognizer = antlr4ts.Recognizer;
var RewriteOperation = antlr4ts.RewriteOperation;
var RuleContext = antlr4ts.RuleContext;
var RuleContextWithAltNum = antlr4ts.RuleContextWithAltNum;
var RuleDependency = antlr4ts.RuleDependency;
var RuleVersion = antlr4ts.RuleVersion;
var Token = antlr4ts.Token;
var TokenStreamRewriter = antlr4ts.TokenStreamRewriter;
var VocabularyImpl = antlr4ts.VocabularyImpl;
export default __pika_web_default_export_for_treeshaking__;
export { ANTLRInputStream, BailErrorStrategy, BufferedTokenStream, CharStreams, CodePointBuffer, CodePointCharStream, CommonToken, CommonTokenFactory, CommonTokenStream, ConsoleErrorListener, DefaultErrorStrategy, Dependents, DiagnosticErrorListener, FailedPredicateException, InputMismatchException, IntStream, InterpreterRuleContext, Lexer, LexerInterpreter, LexerNoViableAltException, ListTokenSource, NoViableAltException, Parser, ParserInterpreter, ParserRuleContext, ProxyErrorListener, ProxyParserErrorListener, RecognitionException, Recognizer, RewriteOperation, RuleContext, RuleContextWithAltNum, RuleDependency, RuleVersion, Token, TokenStreamRewriter, VocabularyImpl, antlr4ts as __moduleExports };
