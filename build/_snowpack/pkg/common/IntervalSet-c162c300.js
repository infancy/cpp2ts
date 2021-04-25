import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-8c19dec8.js';
import { A as Array2DHashSet_1, O as ObjectEqualityComparator_1, M as MurmurHash_1, S as SemanticContext_1, b as ArrayEqualityComparator_1, T as Transition_1, a as AbstractPredicateTransition_1 } from './SemanticContext-0e784ba9.js';
import { D as Decorators } from './Decorators-d5ac3968.js';
import { I as Interval_1 } from './Interval-c51e6610.js';
import { T as Token_1, I as IntStream_1 } from './Token-75e833f9.js';
import assert from 'assert';
import util from 'util';
import { U as Utils } from './Utils-bdfdedae.js';
import { V as VocabularyImpl_1 } from './VocabularyImpl-84e96b9c.js';
import { R as RecognitionException_1 } from './RecognitionException-83ca2269.js';

var ATNState_1 = createCommonjsModule(function (module, exports) {
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
exports.ATNState = void 0;
/**
 * The following images show the relation of states and
 * {@link ATNState#transitions} for various grammar constructs.
 *
 * * Solid edges marked with an &#0949; indicate a required
 *   {@link EpsilonTransition}.
 *
 * * Dashed edges indicate locations where any transition derived from
 *   {@link Transition} might appear.
 *
 * * Dashed nodes are place holders for either a sequence of linked
 *   {@link BasicState} states or the inclusion of a block representing a nested
 *   construct in one of the forms below.
 *
 * * Nodes showing multiple outgoing alternatives with a `...` support
 *   any number of alternatives (one or more). Nodes without the `...` only
 *   support the exact number of alternatives shown in the diagram.
 *
 * <h2>Basic Blocks</h2>
 *
 * <h3>Rule</h3>
 *
 * <embed src="images/Rule.svg" type="image/svg+xml"/>
 *
 * <h3>Block of 1 or more alternatives</h3>
 *
 * <embed src="images/Block.svg" type="image/svg+xml"/>
 *
 * <h2>Greedy Loops</h2>
 *
 * <h3>Greedy Closure: `(...)*`</h3>
 *
 * <embed src="images/ClosureGreedy.svg" type="image/svg+xml"/>
 *
 * <h3>Greedy Positive Closure: `(...)+`</h3>
 *
 * <embed src="images/PositiveClosureGreedy.svg" type="image/svg+xml"/>
 *
 * <h3>Greedy Optional: `(...)?`</h3>
 *
 * <embed src="images/OptionalGreedy.svg" type="image/svg+xml"/>
 *
 * <h2>Non-Greedy Loops</h2>
 *
 * <h3>Non-Greedy Closure: `(...)*?`</h3>
 *
 * <embed src="images/ClosureNonGreedy.svg" type="image/svg+xml"/>
 *
 * <h3>Non-Greedy Positive Closure: `(...)+?`</h3>
 *
 * <embed src="images/PositiveClosureNonGreedy.svg" type="image/svg+xml"/>
 *
 * <h3>Non-Greedy Optional: `(...)??`</h3>
 *
 * <embed src="images/OptionalNonGreedy.svg" type="image/svg+xml"/>
 */
class ATNState {
    constructor() {
        this.stateNumber = ATNState.INVALID_STATE_NUMBER;
        this.ruleIndex = 0; // at runtime, we don't have Rule objects
        this.epsilonOnlyTransitions = false;
        /** Track the transitions emanating from this ATN state. */
        this.transitions = [];
        this.optimizedTransitions = this.transitions;
    }
    /**
     * Gets the state number.
     *
     * @returns the state number
     */
    getStateNumber() {
        return this.stateNumber;
    }
    /**
     * For all states except {@link RuleStopState}, this returns the state
     * number. Returns -1 for stop states.
     *
     * @returns -1 for {@link RuleStopState}, otherwise the state number
     */
    get nonStopStateNumber() {
        return this.getStateNumber();
    }
    hashCode() {
        return this.stateNumber;
    }
    equals(o) {
        // are these states same object?
        if (o instanceof ATNState) {
            return this.stateNumber === o.stateNumber;
        }
        return false;
    }
    get isNonGreedyExitState() {
        return false;
    }
    toString() {
        return String(this.stateNumber);
    }
    getTransitions() {
        return this.transitions.slice(0);
    }
    get numberOfTransitions() {
        return this.transitions.length;
    }
    addTransition(e, index) {
        if (this.transitions.length === 0) {
            this.epsilonOnlyTransitions = e.isEpsilon;
        }
        else if (this.epsilonOnlyTransitions !== e.isEpsilon) {
            this.epsilonOnlyTransitions = false;
            throw new Error("ATN state " + this.stateNumber + " has both epsilon and non-epsilon transitions.");
        }
        this.transitions.splice(index !== undefined ? index : this.transitions.length, 0, e);
    }
    transition(i) {
        return this.transitions[i];
    }
    setTransition(i, e) {
        this.transitions[i] = e;
    }
    removeTransition(index) {
        return this.transitions.splice(index, 1)[0];
    }
    get onlyHasEpsilonTransitions() {
        return this.epsilonOnlyTransitions;
    }
    setRuleIndex(ruleIndex) {
        this.ruleIndex = ruleIndex;
    }
    get isOptimized() {
        return this.optimizedTransitions !== this.transitions;
    }
    get numberOfOptimizedTransitions() {
        return this.optimizedTransitions.length;
    }
    getOptimizedTransition(i) {
        return this.optimizedTransitions[i];
    }
    addOptimizedTransition(e) {
        if (!this.isOptimized) {
            this.optimizedTransitions = new Array();
        }
        this.optimizedTransitions.push(e);
    }
    setOptimizedTransition(i, e) {
        if (!this.isOptimized) {
            throw new Error("This ATNState is not optimized.");
        }
        this.optimizedTransitions[i] = e;
    }
    removeOptimizedTransition(i) {
        if (!this.isOptimized) {
            throw new Error("This ATNState is not optimized.");
        }
        this.optimizedTransitions.splice(i, 1);
    }
}
__decorate([
    Decorators.Override
], ATNState.prototype, "hashCode", null);
__decorate([
    Decorators.Override
], ATNState.prototype, "equals", null);
__decorate([
    Decorators.Override
], ATNState.prototype, "toString", null);
exports.ATNState = ATNState;
(function (ATNState) {
    ATNState.INVALID_STATE_NUMBER = -1;
})(ATNState = exports.ATNState || (exports.ATNState = {}));

});

var ATNStateType_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ATNStateType = void 0;
(function (ATNStateType) {
    ATNStateType[ATNStateType["INVALID_TYPE"] = 0] = "INVALID_TYPE";
    ATNStateType[ATNStateType["BASIC"] = 1] = "BASIC";
    ATNStateType[ATNStateType["RULE_START"] = 2] = "RULE_START";
    ATNStateType[ATNStateType["BLOCK_START"] = 3] = "BLOCK_START";
    ATNStateType[ATNStateType["PLUS_BLOCK_START"] = 4] = "PLUS_BLOCK_START";
    ATNStateType[ATNStateType["STAR_BLOCK_START"] = 5] = "STAR_BLOCK_START";
    ATNStateType[ATNStateType["TOKEN_START"] = 6] = "TOKEN_START";
    ATNStateType[ATNStateType["RULE_STOP"] = 7] = "RULE_STOP";
    ATNStateType[ATNStateType["BLOCK_END"] = 8] = "BLOCK_END";
    ATNStateType[ATNStateType["STAR_LOOP_BACK"] = 9] = "STAR_LOOP_BACK";
    ATNStateType[ATNStateType["STAR_LOOP_ENTRY"] = 10] = "STAR_LOOP_ENTRY";
    ATNStateType[ATNStateType["PLUS_LOOP_BACK"] = 11] = "PLUS_LOOP_BACK";
    ATNStateType[ATNStateType["LOOP_END"] = 12] = "LOOP_END";
})(exports.ATNStateType || (exports.ATNStateType = {}));

});

var Arrays_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arrays = void 0;
(function (Arrays) {
    /**
     * Searches the specified array of numbers for the specified value using the binary search algorithm. The array must
     * be sorted prior to making this call. If it is not sorted, the results are unspecified. If the array contains
     * multiple elements with the specified value, there is no guarantee which one will be found.
     *
     * @returns index of the search key, if it is contained in the array; otherwise, (-(insertion point) - 1). The
     * insertion point is defined as the point at which the key would be inserted into the array: the index of the first
     * element greater than the key, or array.length if all elements in the array are less than the specified key. Note
     * that this guarantees that the return value will be >= 0 if and only if the key is found.
     */
    function binarySearch(array, key, fromIndex, toIndex) {
        return binarySearch0(array, fromIndex !== undefined ? fromIndex : 0, toIndex !== undefined ? toIndex : array.length, key);
    }
    Arrays.binarySearch = binarySearch;
    function binarySearch0(array, fromIndex, toIndex, key) {
        let low = fromIndex;
        let high = toIndex - 1;
        while (low <= high) {
            let mid = (low + high) >>> 1;
            let midVal = array[mid];
            if (midVal < key) {
                low = mid + 1;
            }
            else if (midVal > key) {
                high = mid - 1;
            }
            else {
                // key found
                return mid;
            }
        }
        // key not found.
        return -(low + 1);
    }
    function toString(array) {
        let result = "[";
        let first = true;
        for (let element of array) {
            if (first) {
                first = false;
            }
            else {
                result += ", ";
            }
            if (element === null) {
                result += "null";
            }
            else if (element === undefined) {
                result += "undefined";
            }
            else {
                result += element;
            }
        }
        result += "]";
        return result;
    }
    Arrays.toString = toString;
})(exports.Arrays || (exports.Arrays = {}));

});

var IntegerList_1 = createCommonjsModule(function (module, exports) {
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
exports.IntegerList = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:40.5099429-07:00


const EMPTY_DATA = new Int32Array(0);
const INITIAL_SIZE = 4;
const MAX_ARRAY_SIZE = (((1 << 31) >>> 0) - 1) - 8;
/**
 *
 * @author Sam Harwell
 */
class IntegerList {
    constructor(arg) {
        if (!arg) {
            this._data = EMPTY_DATA;
            this._size = 0;
        }
        else if (arg instanceof IntegerList) {
            this._data = arg._data.slice(0);
            this._size = arg._size;
        }
        else if (typeof arg === "number") {
            if (arg === 0) {
                this._data = EMPTY_DATA;
                this._size = 0;
            }
            else {
                this._data = new Int32Array(arg);
                this._size = 0;
            }
        }
        else {
            // arg is Iterable<number>
            this._data = EMPTY_DATA;
            this._size = 0;
            for (let value of arg) {
                this.add(value);
            }
        }
    }
    add(value) {
        if (this._data.length === this._size) {
            this.ensureCapacity(this._size + 1);
        }
        this._data[this._size] = value;
        this._size++;
    }
    addAll(list) {
        if (Array.isArray(list)) {
            this.ensureCapacity(this._size + list.length);
            this._data.subarray(this._size, this._size + list.length).set(list);
            this._size += list.length;
        }
        else if (list instanceof IntegerList) {
            this.ensureCapacity(this._size + list._size);
            this._data.subarray(this._size, this._size + list.size).set(list._data);
            this._size += list._size;
        }
        else {
            // list is JavaCollection<number>
            this.ensureCapacity(this._size + list.size);
            let current = 0;
            for (let xi of list) {
                this._data[this._size + current] = xi;
                current++;
            }
            this._size += list.size;
        }
    }
    get(index) {
        if (index < 0 || index >= this._size) {
            throw RangeError();
        }
        return this._data[index];
    }
    contains(value) {
        for (let i = 0; i < this._size; i++) {
            if (this._data[i] === value) {
                return true;
            }
        }
        return false;
    }
    set(index, value) {
        if (index < 0 || index >= this._size) {
            throw RangeError();
        }
        let previous = this._data[index];
        this._data[index] = value;
        return previous;
    }
    removeAt(index) {
        let value = this.get(index);
        this._data.copyWithin(index, index + 1, this._size);
        this._data[this._size - 1] = 0;
        this._size--;
        return value;
    }
    removeRange(fromIndex, toIndex) {
        if (fromIndex < 0 || toIndex < 0 || fromIndex > this._size || toIndex > this._size) {
            throw RangeError();
        }
        if (fromIndex > toIndex) {
            throw RangeError();
        }
        this._data.copyWithin(toIndex, fromIndex, this._size);
        this._data.fill(0, this._size - (toIndex - fromIndex), this._size);
        this._size -= (toIndex - fromIndex);
    }
    get isEmpty() {
        return this._size === 0;
    }
    get size() {
        return this._size;
    }
    trimToSize() {
        if (this._data.length === this._size) {
            return;
        }
        this._data = this._data.slice(0, this._size);
    }
    clear() {
        this._data.fill(0, 0, this._size);
        this._size = 0;
    }
    toArray() {
        if (this._size === 0) {
            return [];
        }
        return Array.from(this._data.subarray(0, this._size));
    }
    sort() {
        this._data.subarray(0, this._size).sort();
    }
    /**
     * Compares the specified object with this list for equality.  Returns
     * `true` if and only if the specified object is also an {@link IntegerList},
     * both lists have the same size, and all corresponding pairs of elements in
     * the two lists are equal.  In other words, two lists are defined to be
     * equal if they contain the same elements in the same order.
     *
     * This implementation first checks if the specified object is this
     * list. If so, it returns `true`; if not, it checks if the
     * specified object is an {@link IntegerList}. If not, it returns `false`;
     * if so, it checks the size of both lists. If the lists are not the same size,
     * it returns `false`; otherwise it iterates over both lists, comparing
     * corresponding pairs of elements.  If any comparison returns `false`,
     * this method returns `false`.
     *
     * @param o the object to be compared for equality with this list
     * @returns `true` if the specified object is equal to this list
     */
    equals(o) {
        if (o === this) {
            return true;
        }
        if (!(o instanceof IntegerList)) {
            return false;
        }
        if (this._size !== o._size) {
            return false;
        }
        for (let i = 0; i < this._size; i++) {
            if (this._data[i] !== o._data[i]) {
                return false;
            }
        }
        return true;
    }
    /**
     * Returns the hash code value for this list.
     *
     * This implementation uses exactly the code that is used to define the
     * list hash function in the documentation for the {@link List#hashCode}
     * method.
     *
     * @returns the hash code value for this list
     */
    hashCode() {
        let hashCode = 1;
        for (let i = 0; i < this._size; i++) {
            hashCode = 31 * hashCode + this._data[i];
        }
        return hashCode;
    }
    /**
     * Returns a string representation of this list.
     */
    toString() {
        return this._data.toString();
    }
    binarySearch(key, fromIndex, toIndex) {
        if (fromIndex === undefined) {
            fromIndex = 0;
        }
        if (toIndex === undefined) {
            toIndex = this._size;
        }
        if (fromIndex < 0 || toIndex < 0 || fromIndex > this._size || toIndex > this._size) {
            throw new RangeError();
        }
        if (fromIndex > toIndex) {
            throw new RangeError();
        }
        return Arrays_1.Arrays.binarySearch(this._data, key, fromIndex, toIndex);
    }
    ensureCapacity(capacity) {
        if (capacity < 0 || capacity > MAX_ARRAY_SIZE) {
            throw new RangeError();
        }
        let newLength;
        if (this._data.length === 0) {
            newLength = INITIAL_SIZE;
        }
        else {
            newLength = this._data.length;
        }
        while (newLength < capacity) {
            newLength = newLength * 2;
            if (newLength < 0 || newLength > MAX_ARRAY_SIZE) {
                newLength = MAX_ARRAY_SIZE;
            }
        }
        let tmp = new Int32Array(newLength);
        tmp.set(this._data);
        this._data = tmp;
    }
    /** Convert the list to a UTF-16 encoded char array. If all values are less
     *  than the 0xFFFF 16-bit code point limit then this is just a char array
     *  of 16-bit char as usual. For values in the supplementary range, encode
     * them as two UTF-16 code units.
     */
    toCharArray() {
        // Optimize for the common case (all data values are < 0xFFFF) to avoid an extra scan
        let resultArray = new Uint16Array(this._size);
        let resultIdx = 0;
        let calculatedPreciseResultSize = false;
        for (let i = 0; i < this._size; i++) {
            let codePoint = this._data[i];
            if (codePoint >= 0 && codePoint < 0x10000) {
                resultArray[resultIdx] = codePoint;
                resultIdx++;
                continue;
            }
            // Calculate the precise result size if we encounter a code point > 0xFFFF
            if (!calculatedPreciseResultSize) {
                let newResultArray = new Uint16Array(this.charArraySize());
                newResultArray.set(resultArray, 0);
                resultArray = newResultArray;
                calculatedPreciseResultSize = true;
            }
            // This will throw RangeError if the code point is not a valid Unicode code point
            let pair = String.fromCodePoint(codePoint);
            resultArray[resultIdx] = pair.charCodeAt(0);
            resultArray[resultIdx + 1] = pair.charCodeAt(1);
            resultIdx += 2;
        }
        return resultArray;
    }
    charArraySize() {
        let result = 0;
        for (let i = 0; i < this._size; i++) {
            result += this._data[i] >= 0x10000 ? 2 : 1;
        }
        return result;
    }
}
__decorate([
    Decorators.NotNull
], IntegerList.prototype, "_data", void 0);
__decorate([
    Decorators.Override
], IntegerList.prototype, "equals", null);
__decorate([
    Decorators.Override
], IntegerList.prototype, "hashCode", null);
__decorate([
    Decorators.Override
], IntegerList.prototype, "toString", null);
exports.IntegerList = IntegerList;

});

var CommonToken_1 = createCommonjsModule(function (module, exports) {
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
exports.CommonToken = void 0;



let CommonToken = class CommonToken {
    constructor(type, text, source = CommonToken.EMPTY_SOURCE, channel = Token_1.Token.DEFAULT_CHANNEL, start = 0, stop = 0) {
        /**
         * This is the backing field for {@link #getLine} and {@link #setLine}.
         */
        this._line = 0;
        /**
         * This is the backing field for {@link #getCharPositionInLine} and
         * {@link #setCharPositionInLine}.
         */
        this._charPositionInLine = -1; // set to invalid position
        /**
         * This is the backing field for {@link #getChannel} and
         * {@link #setChannel}.
         */
        this._channel = Token_1.Token.DEFAULT_CHANNEL;
        /**
         * This is the backing field for `tokenIndex`.
         */
        this.index = -1;
        this._text = text;
        this._type = type;
        this.source = source;
        this._channel = channel;
        this.start = start;
        this.stop = stop;
        if (source.source != null) {
            this._line = source.source.line;
            this._charPositionInLine = source.source.charPositionInLine;
        }
    }
    /**
     * Constructs a new {@link CommonToken} as a copy of another {@link Token}.
     *
     * If `oldToken` is also a {@link CommonToken} instance, the newly
     * constructed token will share a reference to the {@link #text} field and
     * the {@link Tuple2} stored in {@link #source}. Otherwise, {@link #text} will
     * be assigned the result of calling {@link #getText}, and {@link #source}
     * will be constructed from the result of {@link Token#getTokenSource} and
     * {@link Token#getInputStream}.
     *
     * @param oldToken The token to copy.
     */
    static fromToken(oldToken) {
        let result = new CommonToken(oldToken.type, undefined, CommonToken.EMPTY_SOURCE, oldToken.channel, oldToken.startIndex, oldToken.stopIndex);
        result._line = oldToken.line;
        result.index = oldToken.tokenIndex;
        result._charPositionInLine = oldToken.charPositionInLine;
        if (oldToken instanceof CommonToken) {
            result._text = oldToken._text;
            result.source = oldToken.source;
        }
        else {
            result._text = oldToken.text;
            result.source = { source: oldToken.tokenSource, stream: oldToken.inputStream };
        }
        return result;
    }
    get type() {
        return this._type;
    }
    // @Override
    set type(type) {
        this._type = type;
    }
    get line() {
        return this._line;
    }
    // @Override
    set line(line) {
        this._line = line;
    }
    get text() {
        if (this._text != null) {
            return this._text;
        }
        let input = this.inputStream;
        if (input == null) {
            return undefined;
        }
        let n = input.size;
        if (this.start < n && this.stop < n) {
            return input.getText(Interval_1.Interval.of(this.start, this.stop));
        }
        else {
            return "<EOF>";
        }
    }
    /**
     * Explicitly set the text for this token. If {code text} is not
     * `undefined`, then {@link #getText} will return this value rather than
     * extracting the text from the input.
     *
     * @param text The explicit text of the token, or `undefined` if the text
     * should be obtained from the input along with the start and stop indexes
     * of the token.
     */
    // @Override
    set text(text) {
        this._text = text;
    }
    get charPositionInLine() {
        return this._charPositionInLine;
    }
    // @Override
    set charPositionInLine(charPositionInLine) {
        this._charPositionInLine = charPositionInLine;
    }
    get channel() {
        return this._channel;
    }
    // @Override
    set channel(channel) {
        this._channel = channel;
    }
    get startIndex() {
        return this.start;
    }
    set startIndex(start) {
        this.start = start;
    }
    get stopIndex() {
        return this.stop;
    }
    set stopIndex(stop) {
        this.stop = stop;
    }
    get tokenIndex() {
        return this.index;
    }
    // @Override
    set tokenIndex(index) {
        this.index = index;
    }
    get tokenSource() {
        return this.source.source;
    }
    get inputStream() {
        return this.source.stream;
    }
    toString(recognizer) {
        let channelStr = "";
        if (this._channel > 0) {
            channelStr = ",channel=" + this._channel;
        }
        let txt = this.text;
        if (txt != null) {
            txt = txt.replace(/\n/g, "\\n");
            txt = txt.replace(/\r/g, "\\r");
            txt = txt.replace(/\t/g, "\\t");
        }
        else {
            txt = "<no text>";
        }
        let typeString = String(this._type);
        if (recognizer) {
            typeString = recognizer.vocabulary.getDisplayName(this._type);
        }
        return "[@" + this.tokenIndex + "," + this.start + ":" + this.stop + "='" + txt + "',<" + typeString + ">" + channelStr + "," + this._line + ":" + this.charPositionInLine + "]";
    }
};
/**
 * An empty {@link Tuple2} which is used as the default value of
 * {@link #source} for tokens that do not have a source.
 */
CommonToken.EMPTY_SOURCE = { source: undefined, stream: undefined };
__decorate([
    Decorators.NotNull
], CommonToken.prototype, "source", void 0);
__decorate([
    Decorators.Override
], CommonToken.prototype, "type", null);
__decorate([
    Decorators.Override
], CommonToken.prototype, "line", null);
__decorate([
    Decorators.Override
], CommonToken.prototype, "text", null);
__decorate([
    Decorators.Override
], CommonToken.prototype, "charPositionInLine", null);
__decorate([
    Decorators.Override
], CommonToken.prototype, "channel", null);
__decorate([
    Decorators.Override
], CommonToken.prototype, "startIndex", null);
__decorate([
    Decorators.Override
], CommonToken.prototype, "stopIndex", null);
__decorate([
    Decorators.Override
], CommonToken.prototype, "tokenIndex", null);
__decorate([
    Decorators.Override
], CommonToken.prototype, "tokenSource", null);
__decorate([
    Decorators.Override
], CommonToken.prototype, "inputStream", null);
__decorate([
    Decorators.Override
], CommonToken.prototype, "toString", null);
__decorate([
    __param(0, Decorators.NotNull)
], CommonToken, "fromToken", null);
CommonToken = __decorate([
    __param(2, Decorators.NotNull)
], CommonToken);
exports.CommonToken = CommonToken;

});

var CommonTokenFactory_1 = createCommonjsModule(function (module, exports) {
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
exports.CommonTokenFactory = void 0;



/**
 * This default implementation of {@link TokenFactory} creates
 * {@link CommonToken} objects.
 */
class CommonTokenFactory {
    /**
     * Constructs a {@link CommonTokenFactory} with the specified value for
     * {@link #copyText}.
     *
     * When `copyText` is `false`, the {@link #DEFAULT} instance
     * should be used instead of constructing a new instance.
     *
     * @param copyText The value for {@link #copyText}.
     */
    constructor(copyText = false) {
        this.copyText = copyText;
    }
    create(source, type, text, channel, start, stop, line, charPositionInLine) {
        let t = new CommonToken_1.CommonToken(type, text, source, channel, start, stop);
        t.line = line;
        t.charPositionInLine = charPositionInLine;
        if (text == null && this.copyText && source.stream != null) {
            t.text = source.stream.getText(Interval_1.Interval.of(start, stop));
        }
        return t;
    }
    createSimple(type, text) {
        return new CommonToken_1.CommonToken(type, text);
    }
}
__decorate([
    Decorators.Override
], CommonTokenFactory.prototype, "create", null);
__decorate([
    Decorators.Override
], CommonTokenFactory.prototype, "createSimple", null);
exports.CommonTokenFactory = CommonTokenFactory;
(function (CommonTokenFactory) {
    /**
     * The default {@link CommonTokenFactory} instance.
     *
     * This token factory does not explicitly copy token text when constructing
     * tokens.
     */
    CommonTokenFactory.DEFAULT = new CommonTokenFactory();
})(CommonTokenFactory = exports.CommonTokenFactory || (exports.CommonTokenFactory = {}));

});

var IntegerStack_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegerStack = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:40.6647101-07:00

/**
 *
 * @author Sam Harwell
 */
class IntegerStack extends IntegerList_1.IntegerList {
    constructor(arg) {
        super(arg);
    }
    push(value) {
        this.add(value);
    }
    pop() {
        return this.removeAt(this.size - 1);
    }
    peek() {
        return this.get(this.size - 1);
    }
}
exports.IntegerStack = IntegerStack;

});

var AcceptStateInfo_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcceptStateInfo = void 0;
/**
 * Stores information about a {@link DFAState} which is an accept state under
 * some condition. Certain settings, such as
 * {@link ParserATNSimulator#getPredictionMode()}, may be used in addition to
 * this information to determine whether or not a particular state is an accept
 * state.
 *
 * @author Sam Harwell
 */
class AcceptStateInfo {
    constructor(prediction, lexerActionExecutor) {
        this._prediction = prediction;
        this._lexerActionExecutor = lexerActionExecutor;
    }
    /**
     * Gets the prediction made by this accept state. Note that this value
     * assumes the predicates, if any, in the {@link DFAState} evaluate to
     * `true`. If predicate evaluation is enabled, the final prediction of
     * the accept state will be determined by the result of predicate
     * evaluation.
     */
    get prediction() {
        return this._prediction;
    }
    /**
     * Gets the {@link LexerActionExecutor} which can be used to execute actions
     * and/or commands after the lexer matches a token.
     */
    get lexerActionExecutor() {
        return this._lexerActionExecutor;
    }
}
exports.AcceptStateInfo = AcceptStateInfo;

});

var Array2DHashMap_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Array2DHashMap = void 0;

class MapKeyEqualityComparator {
    constructor(keyComparator) {
        this.keyComparator = keyComparator;
    }
    hashCode(obj) {
        return this.keyComparator.hashCode(obj.key);
    }
    equals(a, b) {
        return this.keyComparator.equals(a.key, b.key);
    }
}
class Array2DHashMap {
    constructor(keyComparer) {
        if (keyComparer instanceof Array2DHashMap) {
            this.backingStore = new Array2DHashSet_1.Array2DHashSet(keyComparer.backingStore);
        }
        else {
            this.backingStore = new Array2DHashSet_1.Array2DHashSet(new MapKeyEqualityComparator(keyComparer));
        }
    }
    clear() {
        this.backingStore.clear();
    }
    containsKey(key) {
        return this.backingStore.contains({ key });
    }
    get(key) {
        let bucket = this.backingStore.get({ key });
        if (!bucket) {
            return undefined;
        }
        return bucket.value;
    }
    get isEmpty() {
        return this.backingStore.isEmpty;
    }
    put(key, value) {
        let element = this.backingStore.get({ key, value });
        let result;
        if (!element) {
            this.backingStore.add({ key, value });
        }
        else {
            result = element.value;
            element.value = value;
        }
        return result;
    }
    putIfAbsent(key, value) {
        let element = this.backingStore.get({ key, value });
        let result;
        if (!element) {
            this.backingStore.add({ key, value });
        }
        else {
            result = element.value;
        }
        return result;
    }
    get size() {
        return this.backingStore.size;
    }
    hashCode() {
        return this.backingStore.hashCode();
    }
    equals(o) {
        if (!(o instanceof Array2DHashMap)) {
            return false;
        }
        return this.backingStore.equals(o.backingStore);
    }
}
exports.Array2DHashMap = Array2DHashMap;

});

var DecisionState_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecisionState = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:28.4381103-07:00

class DecisionState extends ATNState_1.ATNState {
    constructor() {
        super(...arguments);
        this.decision = -1;
        this.nonGreedy = false;
        this.sll = false;
    }
}
exports.DecisionState = DecisionState;

});

var PredictionContextCache_1 = createCommonjsModule(function (module, exports) {
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
exports.PredictionContextCache = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:35.6390614-07:00





/** Used to cache {@link PredictionContext} objects. Its used for the shared
 *  context cash associated with contexts in DFA states. This cache
 *  can be used for both lexers and parsers.
 *
 * @author Sam Harwell
 */
class PredictionContextCache {
    constructor(enableCache = true) {
        this.contexts = new Array2DHashMap_1.Array2DHashMap(ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE);
        this.childContexts = new Array2DHashMap_1.Array2DHashMap(ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE);
        this.joinContexts = new Array2DHashMap_1.Array2DHashMap(ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE);
        this.enableCache = enableCache;
    }
    getAsCached(context) {
        if (!this.enableCache) {
            return context;
        }
        let result = this.contexts.get(context);
        if (!result) {
            result = context;
            this.contexts.put(context, context);
        }
        return result;
    }
    getChild(context, invokingState) {
        if (!this.enableCache) {
            return context.getChild(invokingState);
        }
        let operands = new PredictionContextCache.PredictionContextAndInt(context, invokingState);
        let result = this.childContexts.get(operands);
        if (!result) {
            result = context.getChild(invokingState);
            result = this.getAsCached(result);
            this.childContexts.put(operands, result);
        }
        return result;
    }
    join(x, y) {
        if (!this.enableCache) {
            return PredictionContext_1.PredictionContext.join(x, y, this);
        }
        let operands = new PredictionContextCache.IdentityCommutativePredictionContextOperands(x, y);
        let result = this.joinContexts.get(operands);
        if (result) {
            return result;
        }
        result = PredictionContext_1.PredictionContext.join(x, y, this);
        result = this.getAsCached(result);
        this.joinContexts.put(operands, result);
        return result;
    }
}
exports.PredictionContextCache = PredictionContextCache;
PredictionContextCache.UNCACHED = new PredictionContextCache(false);
(function (PredictionContextCache) {
    class PredictionContextAndInt {
        constructor(obj, value) {
            this.obj = obj;
            this.value = value;
        }
        equals(obj) {
            if (!(obj instanceof PredictionContextAndInt)) {
                return false;
            }
            else if (obj === this) {
                return true;
            }
            let other = obj;
            return this.value === other.value
                && (this.obj === other.obj || (this.obj != null && this.obj.equals(other.obj)));
        }
        hashCode() {
            let hashCode = 5;
            hashCode = 7 * hashCode + (this.obj != null ? this.obj.hashCode() : 0);
            hashCode = 7 * hashCode + this.value;
            return hashCode;
        }
    }
    __decorate([
        Decorators.Override
    ], PredictionContextAndInt.prototype, "equals", null);
    __decorate([
        Decorators.Override
    ], PredictionContextAndInt.prototype, "hashCode", null);
    PredictionContextCache.PredictionContextAndInt = PredictionContextAndInt;
    class IdentityCommutativePredictionContextOperands {
        constructor(x, y) {
            assert(x != null);
            assert(y != null);
            this._x = x;
            this._y = y;
        }
        get x() {
            return this._x;
        }
        get y() {
            return this._y;
        }
        equals(o) {
            if (!(o instanceof IdentityCommutativePredictionContextOperands)) {
                return false;
            }
            else if (this === o) {
                return true;
            }
            let other = o;
            return (this._x === other._x && this._y === other._y) || (this._x === other._y && this._y === other._x);
        }
        hashCode() {
            return this._x.hashCode() ^ this._y.hashCode();
        }
    }
    __decorate([
        Decorators.Override
    ], IdentityCommutativePredictionContextOperands.prototype, "equals", null);
    __decorate([
        Decorators.Override
    ], IdentityCommutativePredictionContextOperands.prototype, "hashCode", null);
    PredictionContextCache.IdentityCommutativePredictionContextOperands = IdentityCommutativePredictionContextOperands;
})(PredictionContextCache = exports.PredictionContextCache || (exports.PredictionContextCache = {}));

});

var PredictionContext_1 = createCommonjsModule(function (module, exports) {
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
exports.SingletonPredictionContext = exports.PredictionContext = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:35.3812636-07:00







const INITIAL_HASH = 1;
class PredictionContext {
    constructor(cachedHashCode) {
        this.cachedHashCode = cachedHashCode;
    }
    static calculateEmptyHashCode() {
        let hash = MurmurHash_1.MurmurHash.initialize(INITIAL_HASH);
        hash = MurmurHash_1.MurmurHash.finish(hash, 0);
        return hash;
    }
    static calculateSingleHashCode(parent, returnState) {
        let hash = MurmurHash_1.MurmurHash.initialize(INITIAL_HASH);
        hash = MurmurHash_1.MurmurHash.update(hash, parent);
        hash = MurmurHash_1.MurmurHash.update(hash, returnState);
        hash = MurmurHash_1.MurmurHash.finish(hash, 2);
        return hash;
    }
    static calculateHashCode(parents, returnStates) {
        let hash = MurmurHash_1.MurmurHash.initialize(INITIAL_HASH);
        for (let parent of parents) {
            hash = MurmurHash_1.MurmurHash.update(hash, parent);
        }
        for (let returnState of returnStates) {
            hash = MurmurHash_1.MurmurHash.update(hash, returnState);
        }
        hash = MurmurHash_1.MurmurHash.finish(hash, 2 * parents.length);
        return hash;
    }
    static fromRuleContext(atn, outerContext, fullContext = true) {
        if (outerContext.isEmpty) {
            return fullContext ? PredictionContext.EMPTY_FULL : PredictionContext.EMPTY_LOCAL;
        }
        let parent;
        if (outerContext._parent) {
            parent = PredictionContext.fromRuleContext(atn, outerContext._parent, fullContext);
        }
        else {
            parent = fullContext ? PredictionContext.EMPTY_FULL : PredictionContext.EMPTY_LOCAL;
        }
        let state = atn.states[outerContext.invokingState];
        let transition = state.transition(0);
        return parent.getChild(transition.followState.stateNumber);
    }
    static addEmptyContext(context) {
        return context.addEmptyContext();
    }
    static removeEmptyContext(context) {
        return context.removeEmptyContext();
    }
    static join(context0, context1, contextCache = PredictionContextCache_1.PredictionContextCache.UNCACHED) {
        if (context0 === context1) {
            return context0;
        }
        if (context0.isEmpty) {
            return PredictionContext.isEmptyLocal(context0) ? context0 : PredictionContext.addEmptyContext(context1);
        }
        else if (context1.isEmpty) {
            return PredictionContext.isEmptyLocal(context1) ? context1 : PredictionContext.addEmptyContext(context0);
        }
        let context0size = context0.size;
        let context1size = context1.size;
        if (context0size === 1 && context1size === 1 && context0.getReturnState(0) === context1.getReturnState(0)) {
            let merged = contextCache.join(context0.getParent(0), context1.getParent(0));
            if (merged === context0.getParent(0)) {
                return context0;
            }
            else if (merged === context1.getParent(0)) {
                return context1;
            }
            else {
                return merged.getChild(context0.getReturnState(0));
            }
        }
        let count = 0;
        let parentsList = new Array(context0size + context1size);
        let returnStatesList = new Array(parentsList.length);
        let leftIndex = 0;
        let rightIndex = 0;
        let canReturnLeft = true;
        let canReturnRight = true;
        while (leftIndex < context0size && rightIndex < context1size) {
            if (context0.getReturnState(leftIndex) === context1.getReturnState(rightIndex)) {
                parentsList[count] = contextCache.join(context0.getParent(leftIndex), context1.getParent(rightIndex));
                returnStatesList[count] = context0.getReturnState(leftIndex);
                canReturnLeft = canReturnLeft && parentsList[count] === context0.getParent(leftIndex);
                canReturnRight = canReturnRight && parentsList[count] === context1.getParent(rightIndex);
                leftIndex++;
                rightIndex++;
            }
            else if (context0.getReturnState(leftIndex) < context1.getReturnState(rightIndex)) {
                parentsList[count] = context0.getParent(leftIndex);
                returnStatesList[count] = context0.getReturnState(leftIndex);
                canReturnRight = false;
                leftIndex++;
            }
            else {
                assert(context1.getReturnState(rightIndex) < context0.getReturnState(leftIndex));
                parentsList[count] = context1.getParent(rightIndex);
                returnStatesList[count] = context1.getReturnState(rightIndex);
                canReturnLeft = false;
                rightIndex++;
            }
            count++;
        }
        while (leftIndex < context0size) {
            parentsList[count] = context0.getParent(leftIndex);
            returnStatesList[count] = context0.getReturnState(leftIndex);
            leftIndex++;
            canReturnRight = false;
            count++;
        }
        while (rightIndex < context1size) {
            parentsList[count] = context1.getParent(rightIndex);
            returnStatesList[count] = context1.getReturnState(rightIndex);
            rightIndex++;
            canReturnLeft = false;
            count++;
        }
        if (canReturnLeft) {
            return context0;
        }
        else if (canReturnRight) {
            return context1;
        }
        if (count < parentsList.length) {
            parentsList = parentsList.slice(0, count);
            returnStatesList = returnStatesList.slice(0, count);
        }
        if (parentsList.length === 0) {
            // if one of them was EMPTY_LOCAL, it would be empty and handled at the beginning of the method
            return PredictionContext.EMPTY_FULL;
        }
        else if (parentsList.length === 1) {
            return new SingletonPredictionContext(parentsList[0], returnStatesList[0]);
        }
        else {
            return new ArrayPredictionContext(parentsList, returnStatesList);
        }
    }
    static isEmptyLocal(context) {
        return context === PredictionContext.EMPTY_LOCAL;
    }
    static getCachedContext(context, contextCache, visited) {
        if (context.isEmpty) {
            return context;
        }
        let existing = visited.get(context);
        if (existing) {
            return existing;
        }
        existing = contextCache.get(context);
        if (existing) {
            visited.put(context, existing);
            return existing;
        }
        let changed = false;
        let parents = new Array(context.size);
        for (let i = 0; i < parents.length; i++) {
            let parent = PredictionContext.getCachedContext(context.getParent(i), contextCache, visited);
            if (changed || parent !== context.getParent(i)) {
                if (!changed) {
                    parents = new Array(context.size);
                    for (let j = 0; j < context.size; j++) {
                        parents[j] = context.getParent(j);
                    }
                    changed = true;
                }
                parents[i] = parent;
            }
        }
        if (!changed) {
            existing = contextCache.putIfAbsent(context, context);
            visited.put(context, existing != null ? existing : context);
            return context;
        }
        // We know parents.length>0 because context.isEmpty is checked at the beginning of the method.
        let updated;
        if (parents.length === 1) {
            updated = new SingletonPredictionContext(parents[0], context.getReturnState(0));
        }
        else {
            let returnStates = new Array(context.size);
            for (let i = 0; i < context.size; i++) {
                returnStates[i] = context.getReturnState(i);
            }
            updated = new ArrayPredictionContext(parents, returnStates, context.hashCode());
        }
        existing = contextCache.putIfAbsent(updated, updated);
        visited.put(updated, existing || updated);
        visited.put(context, existing || updated);
        return updated;
    }
    appendSingleContext(returnContext, contextCache) {
        return this.appendContext(PredictionContext.EMPTY_FULL.getChild(returnContext), contextCache);
    }
    getChild(returnState) {
        return new SingletonPredictionContext(this, returnState);
    }
    hashCode() {
        return this.cachedHashCode;
    }
    toStrings(recognizer, currentState, stop = PredictionContext.EMPTY_FULL) {
        let result = [];
        outer: for (let perm = 0;; perm++) {
            let offset = 0;
            let last = true;
            let p = this;
            let stateNumber = currentState;
            let localBuffer = "";
            localBuffer += "[";
            while (!p.isEmpty && p !== stop) {
                let index = 0;
                if (p.size > 0) {
                    let bits = 1;
                    while (((1 << bits) >>> 0) < p.size) {
                        bits++;
                    }
                    let mask = ((1 << bits) >>> 0) - 1;
                    index = (perm >> offset) & mask;
                    last = last && index >= p.size - 1;
                    if (index >= p.size) {
                        continue outer;
                    }
                    offset += bits;
                }
                if (recognizer) {
                    if (localBuffer.length > 1) {
                        // first char is '[', if more than that this isn't the first rule
                        localBuffer += " ";
                    }
                    let atn = recognizer.atn;
                    let s = atn.states[stateNumber];
                    let ruleName = recognizer.ruleNames[s.ruleIndex];
                    localBuffer += ruleName;
                }
                else if (p.getReturnState(index) !== PredictionContext.EMPTY_FULL_STATE_KEY) {
                    if (!p.isEmpty) {
                        if (localBuffer.length > 1) {
                            // first char is '[', if more than that this isn't the first rule
                            localBuffer += " ";
                        }
                        localBuffer += p.getReturnState(index);
                    }
                }
                stateNumber = p.getReturnState(index);
                p = p.getParent(index);
            }
            localBuffer += "]";
            result.push(localBuffer);
            if (last) {
                break;
            }
        }
        return result;
    }
}
__decorate([
    Decorators.Override
], PredictionContext.prototype, "hashCode", null);
__decorate([
    __param(0, Decorators.NotNull), __param(1, Decorators.NotNull), __param(2, Decorators.NotNull)
], PredictionContext, "join", null);
__decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(2, Decorators.NotNull)
], PredictionContext, "getCachedContext", null);
exports.PredictionContext = PredictionContext;
class EmptyPredictionContext extends PredictionContext {
    constructor(fullContext) {
        super(PredictionContext.calculateEmptyHashCode());
        this.fullContext = fullContext;
    }
    get isFullContext() {
        return this.fullContext;
    }
    addEmptyContext() {
        return this;
    }
    removeEmptyContext() {
        throw new Error("Cannot remove the empty context from itself.");
    }
    getParent(index) {
        throw new Error("index out of bounds");
    }
    getReturnState(index) {
        throw new Error("index out of bounds");
    }
    findReturnState(returnState) {
        return -1;
    }
    get size() {
        return 0;
    }
    appendSingleContext(returnContext, contextCache) {
        return contextCache.getChild(this, returnContext);
    }
    appendContext(suffix, contextCache) {
        return suffix;
    }
    get isEmpty() {
        return true;
    }
    get hasEmpty() {
        return true;
    }
    equals(o) {
        return this === o;
    }
    toStrings(recognizer, currentState, stop) {
        return ["[]"];
    }
}
__decorate([
    Decorators.Override
], EmptyPredictionContext.prototype, "addEmptyContext", null);
__decorate([
    Decorators.Override
], EmptyPredictionContext.prototype, "removeEmptyContext", null);
__decorate([
    Decorators.Override
], EmptyPredictionContext.prototype, "getParent", null);
__decorate([
    Decorators.Override
], EmptyPredictionContext.prototype, "getReturnState", null);
__decorate([
    Decorators.Override
], EmptyPredictionContext.prototype, "findReturnState", null);
__decorate([
    Decorators.Override
], EmptyPredictionContext.prototype, "size", null);
__decorate([
    Decorators.Override
], EmptyPredictionContext.prototype, "appendSingleContext", null);
__decorate([
    Decorators.Override
], EmptyPredictionContext.prototype, "appendContext", null);
__decorate([
    Decorators.Override
], EmptyPredictionContext.prototype, "isEmpty", null);
__decorate([
    Decorators.Override
], EmptyPredictionContext.prototype, "hasEmpty", null);
__decorate([
    Decorators.Override
], EmptyPredictionContext.prototype, "equals", null);
__decorate([
    Decorators.Override
], EmptyPredictionContext.prototype, "toStrings", null);
let ArrayPredictionContext = class ArrayPredictionContext extends PredictionContext {
    constructor(parents, returnStates, hashCode) {
        super(hashCode || PredictionContext.calculateHashCode(parents, returnStates));
        assert(parents.length === returnStates.length);
        assert(returnStates.length > 1 || returnStates[0] !== PredictionContext.EMPTY_FULL_STATE_KEY, "Should be using PredictionContext.EMPTY instead.");
        this.parents = parents;
        this.returnStates = returnStates;
    }
    getParent(index) {
        return this.parents[index];
    }
    getReturnState(index) {
        return this.returnStates[index];
    }
    findReturnState(returnState) {
        return Arrays_1.Arrays.binarySearch(this.returnStates, returnState);
    }
    get size() {
        return this.returnStates.length;
    }
    get isEmpty() {
        return false;
    }
    get hasEmpty() {
        return this.returnStates[this.returnStates.length - 1] === PredictionContext.EMPTY_FULL_STATE_KEY;
    }
    addEmptyContext() {
        if (this.hasEmpty) {
            return this;
        }
        let parents2 = this.parents.slice(0);
        let returnStates2 = this.returnStates.slice(0);
        parents2.push(PredictionContext.EMPTY_FULL);
        returnStates2.push(PredictionContext.EMPTY_FULL_STATE_KEY);
        return new ArrayPredictionContext(parents2, returnStates2);
    }
    removeEmptyContext() {
        if (!this.hasEmpty) {
            return this;
        }
        if (this.returnStates.length === 2) {
            return new SingletonPredictionContext(this.parents[0], this.returnStates[0]);
        }
        else {
            let parents2 = this.parents.slice(0, this.parents.length - 1);
            let returnStates2 = this.returnStates.slice(0, this.returnStates.length - 1);
            return new ArrayPredictionContext(parents2, returnStates2);
        }
    }
    appendContext(suffix, contextCache) {
        return ArrayPredictionContext.appendContextImpl(this, suffix, new PredictionContext.IdentityHashMap());
    }
    static appendContextImpl(context, suffix, visited) {
        if (suffix.isEmpty) {
            if (PredictionContext.isEmptyLocal(suffix)) {
                if (context.hasEmpty) {
                    return PredictionContext.EMPTY_LOCAL;
                }
                throw new Error("what to do here?");
            }
            return context;
        }
        if (suffix.size !== 1) {
            throw new Error("Appending a tree suffix is not yet supported.");
        }
        let result = visited.get(context);
        if (!result) {
            if (context.isEmpty) {
                result = suffix;
            }
            else {
                let parentCount = context.size;
                if (context.hasEmpty) {
                    parentCount--;
                }
                let updatedParents = new Array(parentCount);
                let updatedReturnStates = new Array(parentCount);
                for (let i = 0; i < parentCount; i++) {
                    updatedReturnStates[i] = context.getReturnState(i);
                }
                for (let i = 0; i < parentCount; i++) {
                    updatedParents[i] = ArrayPredictionContext.appendContextImpl(context.getParent(i), suffix, visited);
                }
                if (updatedParents.length === 1) {
                    result = new SingletonPredictionContext(updatedParents[0], updatedReturnStates[0]);
                }
                else {
                    assert(updatedParents.length > 1);
                    result = new ArrayPredictionContext(updatedParents, updatedReturnStates);
                }
                if (context.hasEmpty) {
                    result = PredictionContext.join(result, suffix);
                }
            }
            visited.put(context, result);
        }
        return result;
    }
    equals(o) {
        if (this === o) {
            return true;
        }
        else if (!(o instanceof ArrayPredictionContext)) {
            return false;
        }
        if (this.hashCode() !== o.hashCode()) {
            // can't be same if hash is different
            return false;
        }
        let other = o;
        return this.equalsImpl(other, new Array2DHashSet_1.Array2DHashSet());
    }
    equalsImpl(other, visited) {
        let selfWorkList = [];
        let otherWorkList = [];
        selfWorkList.push(this);
        otherWorkList.push(other);
        while (true) {
            let currentSelf = selfWorkList.pop();
            let currentOther = otherWorkList.pop();
            if (!currentSelf || !currentOther) {
                break;
            }
            let operands = new PredictionContextCache_1.PredictionContextCache.IdentityCommutativePredictionContextOperands(currentSelf, currentOther);
            if (!visited.add(operands)) {
                continue;
            }
            let selfSize = operands.x.size;
            if (selfSize === 0) {
                if (!operands.x.equals(operands.y)) {
                    return false;
                }
                continue;
            }
            let otherSize = operands.y.size;
            if (selfSize !== otherSize) {
                return false;
            }
            for (let i = 0; i < selfSize; i++) {
                if (operands.x.getReturnState(i) !== operands.y.getReturnState(i)) {
                    return false;
                }
                let selfParent = operands.x.getParent(i);
                let otherParent = operands.y.getParent(i);
                if (selfParent.hashCode() !== otherParent.hashCode()) {
                    return false;
                }
                if (selfParent !== otherParent) {
                    selfWorkList.push(selfParent);
                    otherWorkList.push(otherParent);
                }
            }
        }
        return true;
    }
};
__decorate([
    Decorators.NotNull
], ArrayPredictionContext.prototype, "parents", void 0);
__decorate([
    Decorators.NotNull
], ArrayPredictionContext.prototype, "returnStates", void 0);
__decorate([
    Decorators.Override
], ArrayPredictionContext.prototype, "getParent", null);
__decorate([
    Decorators.Override
], ArrayPredictionContext.prototype, "getReturnState", null);
__decorate([
    Decorators.Override
], ArrayPredictionContext.prototype, "findReturnState", null);
__decorate([
    Decorators.Override
], ArrayPredictionContext.prototype, "size", null);
__decorate([
    Decorators.Override
], ArrayPredictionContext.prototype, "isEmpty", null);
__decorate([
    Decorators.Override
], ArrayPredictionContext.prototype, "hasEmpty", null);
__decorate([
    Decorators.Override
], ArrayPredictionContext.prototype, "addEmptyContext", null);
__decorate([
    Decorators.Override
], ArrayPredictionContext.prototype, "removeEmptyContext", null);
__decorate([
    Decorators.Override
], ArrayPredictionContext.prototype, "appendContext", null);
__decorate([
    Decorators.Override
], ArrayPredictionContext.prototype, "equals", null);
ArrayPredictionContext = __decorate([
    __param(0, Decorators.NotNull)
], ArrayPredictionContext);
let SingletonPredictionContext = class SingletonPredictionContext extends PredictionContext {
    constructor(parent, returnState) {
        super(PredictionContext.calculateSingleHashCode(parent, returnState));
        // assert(returnState != PredictionContext.EMPTY_FULL_STATE_KEY && returnState != PredictionContext.EMPTY_LOCAL_STATE_KEY);
        this.parent = parent;
        this.returnState = returnState;
    }
    getParent(index) {
        // assert(index == 0);
        return this.parent;
    }
    getReturnState(index) {
        // assert(index == 0);
        return this.returnState;
    }
    findReturnState(returnState) {
        return this.returnState === returnState ? 0 : -1;
    }
    get size() {
        return 1;
    }
    get isEmpty() {
        return false;
    }
    get hasEmpty() {
        return false;
    }
    appendContext(suffix, contextCache) {
        return contextCache.getChild(this.parent.appendContext(suffix, contextCache), this.returnState);
    }
    addEmptyContext() {
        let parents = [this.parent, PredictionContext.EMPTY_FULL];
        let returnStates = [this.returnState, PredictionContext.EMPTY_FULL_STATE_KEY];
        return new ArrayPredictionContext(parents, returnStates);
    }
    removeEmptyContext() {
        return this;
    }
    equals(o) {
        if (o === this) {
            return true;
        }
        else if (!(o instanceof SingletonPredictionContext)) {
            return false;
        }
        let other = o;
        if (this.hashCode() !== other.hashCode()) {
            return false;
        }
        return this.returnState === other.returnState
            && this.parent.equals(other.parent);
    }
};
__decorate([
    Decorators.NotNull
], SingletonPredictionContext.prototype, "parent", void 0);
__decorate([
    Decorators.Override
], SingletonPredictionContext.prototype, "getParent", null);
__decorate([
    Decorators.Override
], SingletonPredictionContext.prototype, "getReturnState", null);
__decorate([
    Decorators.Override
], SingletonPredictionContext.prototype, "findReturnState", null);
__decorate([
    Decorators.Override
], SingletonPredictionContext.prototype, "size", null);
__decorate([
    Decorators.Override
], SingletonPredictionContext.prototype, "isEmpty", null);
__decorate([
    Decorators.Override
], SingletonPredictionContext.prototype, "hasEmpty", null);
__decorate([
    Decorators.Override
], SingletonPredictionContext.prototype, "appendContext", null);
__decorate([
    Decorators.Override
], SingletonPredictionContext.prototype, "addEmptyContext", null);
__decorate([
    Decorators.Override
], SingletonPredictionContext.prototype, "removeEmptyContext", null);
__decorate([
    Decorators.Override
], SingletonPredictionContext.prototype, "equals", null);
SingletonPredictionContext = __decorate([
    __param(0, Decorators.NotNull)
], SingletonPredictionContext);
exports.SingletonPredictionContext = SingletonPredictionContext;
(function (PredictionContext) {
    PredictionContext.EMPTY_LOCAL = new EmptyPredictionContext(false);
    PredictionContext.EMPTY_FULL = new EmptyPredictionContext(true);
    PredictionContext.EMPTY_LOCAL_STATE_KEY = -((1 << 31) >>> 0);
    PredictionContext.EMPTY_FULL_STATE_KEY = ((1 << 31) >>> 0) - 1;
    class IdentityHashMap extends Array2DHashMap_1.Array2DHashMap {
        constructor() {
            super(IdentityEqualityComparator.INSTANCE);
        }
    }
    PredictionContext.IdentityHashMap = IdentityHashMap;
    class IdentityEqualityComparator {
        IdentityEqualityComparator() {
            // intentionally empty
        }
        hashCode(obj) {
            return obj.hashCode();
        }
        equals(a, b) {
            return a === b;
        }
    }
    IdentityEqualityComparator.INSTANCE = new IdentityEqualityComparator();
    __decorate([
        Decorators.Override
    ], IdentityEqualityComparator.prototype, "hashCode", null);
    __decorate([
        Decorators.Override
    ], IdentityEqualityComparator.prototype, "equals", null);
    PredictionContext.IdentityEqualityComparator = IdentityEqualityComparator;
})(PredictionContext = exports.PredictionContext || (exports.PredictionContext = {}));

});

var ATNConfig_1 = createCommonjsModule(function (module, exports) {
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
exports.ATNConfig = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:25.2796692-07:00








/**
 * This field stores the bit mask for implementing the
 * {@link #isPrecedenceFilterSuppressed} property as a bit within the
 * existing {@link #altAndOuterContextDepth} field.
 */
const SUPPRESS_PRECEDENCE_FILTER = 0x80000000;
/**
 * Represents a location with context in an ATN. The location is identified by the following values:
 *
 * * The current ATN state
 * * The predicted alternative
 * * The semantic context which must be true for this configuration to be enabled
 * * The syntactic context, which is represented as a graph-structured stack whose path(s) lead to the root of the rule
 *   invocations leading to this state
 *
 * In addition to these values, `ATNConfig` stores several properties about paths taken to get to the location which
 * were added over time to help with performance, correctness, and/or debugging.
 *
 * * `reachesIntoOuterContext`:: Used to ensure semantic predicates are not evaluated in the wrong context.
 * * `hasPassedThroughNonGreedyDecision`: Used for enabling first-match-wins instead of longest-match-wins after
 *   crossing a non-greedy decision.
 * * `lexerActionExecutor`: Used for tracking the lexer action(s) to execute should this instance be selected during
 *   lexing.
 * * `isPrecedenceFilterSuppressed`: A state variable for one of the dynamic disambiguation strategies employed by
 *   `ParserATNSimulator.applyPrecedenceFilter`.
 *
 * Due to the use of a graph-structured stack, a single `ATNConfig` is capable of representing many individual ATN
 * configurations which reached the same location in an ATN by following different paths.
 *
 * PERF: To conserve memory, `ATNConfig` is split into several different concrete types. `ATNConfig` itself stores the
 * minimum amount of information typically used to define an `ATNConfig` instance. Various derived types provide
 * additional storage space for cases where a non-default value is used for some of the object properties. The
 * `ATNConfig.create` and `ATNConfig.transform` methods automatically select the smallest concrete type capable of
 * representing the unique information for any given `ATNConfig`.
 */
let ATNConfig = class ATNConfig {
    constructor(state, altOrConfig, context) {
        if (typeof altOrConfig === "number") {
            assert((altOrConfig & 0xFFFFFF) === altOrConfig);
            this._state = state;
            this.altAndOuterContextDepth = altOrConfig;
            this._context = context;
        }
        else {
            this._state = state;
            this.altAndOuterContextDepth = altOrConfig.altAndOuterContextDepth;
            this._context = context;
        }
    }
    static create(state, alt, context, semanticContext = SemanticContext_1.SemanticContext.NONE, lexerActionExecutor) {
        if (semanticContext !== SemanticContext_1.SemanticContext.NONE) {
            if (lexerActionExecutor != null) {
                return new ActionSemanticContextATNConfig(lexerActionExecutor, semanticContext, state, alt, context, false);
            }
            else {
                return new SemanticContextATNConfig(semanticContext, state, alt, context);
            }
        }
        else if (lexerActionExecutor != null) {
            return new ActionATNConfig(lexerActionExecutor, state, alt, context, false);
        }
        else {
            return new ATNConfig(state, alt, context);
        }
    }
    /** Gets the ATN state associated with this configuration */
    get state() {
        return this._state;
    }
    /** What alt (or lexer rule) is predicted by this configuration */
    get alt() {
        return this.altAndOuterContextDepth & 0x00FFFFFF;
    }
    get context() {
        return this._context;
    }
    set context(context) {
        this._context = context;
    }
    get reachesIntoOuterContext() {
        return this.outerContextDepth !== 0;
    }
    /**
     * We cannot execute predicates dependent upon local context unless
     * we know for sure we are in the correct context. Because there is
     * no way to do this efficiently, we simply cannot evaluate
     * dependent predicates unless we are in the rule that initially
     * invokes the ATN simulator.
     *
     * closure() tracks the depth of how far we dip into the outer context:
     * depth &gt; 0.  Note that it may not be totally accurate depth since I
     * don't ever decrement. TODO: make it a boolean then
     */
    get outerContextDepth() {
        return (this.altAndOuterContextDepth >>> 24) & 0x7F;
    }
    set outerContextDepth(outerContextDepth) {
        assert(outerContextDepth >= 0);
        // saturate at 0x7F - everything but zero/positive is only used for debug information anyway
        outerContextDepth = Math.min(outerContextDepth, 0x7F);
        this.altAndOuterContextDepth = ((outerContextDepth << 24) | (this.altAndOuterContextDepth & ~0x7F000000) >>> 0);
    }
    get lexerActionExecutor() {
        return undefined;
    }
    get semanticContext() {
        return SemanticContext_1.SemanticContext.NONE;
    }
    get hasPassedThroughNonGreedyDecision() {
        return false;
    }
    clone() {
        return this.transform(this.state, false);
    }
    transform(/*@NotNull*/ state, checkNonGreedy, arg2) {
        if (arg2 == null) {
            return this.transformImpl(state, this._context, this.semanticContext, checkNonGreedy, this.lexerActionExecutor);
        }
        else if (arg2 instanceof PredictionContext_1.PredictionContext) {
            return this.transformImpl(state, arg2, this.semanticContext, checkNonGreedy, this.lexerActionExecutor);
        }
        else if (arg2 instanceof SemanticContext_1.SemanticContext) {
            return this.transformImpl(state, this._context, arg2, checkNonGreedy, this.lexerActionExecutor);
        }
        else {
            return this.transformImpl(state, this._context, this.semanticContext, checkNonGreedy, arg2);
        }
    }
    transformImpl(state, context, semanticContext, checkNonGreedy, lexerActionExecutor) {
        let passedThroughNonGreedy = checkNonGreedy && ATNConfig.checkNonGreedyDecision(this, state);
        if (semanticContext !== SemanticContext_1.SemanticContext.NONE) {
            if (lexerActionExecutor != null || passedThroughNonGreedy) {
                return new ActionSemanticContextATNConfig(lexerActionExecutor, semanticContext, state, this, context, passedThroughNonGreedy);
            }
            else {
                return new SemanticContextATNConfig(semanticContext, state, this, context);
            }
        }
        else if (lexerActionExecutor != null || passedThroughNonGreedy) {
            return new ActionATNConfig(lexerActionExecutor, state, this, context, passedThroughNonGreedy);
        }
        else {
            return new ATNConfig(state, this, context);
        }
    }
    static checkNonGreedyDecision(source, target) {
        return source.hasPassedThroughNonGreedyDecision
            || target instanceof DecisionState_1.DecisionState && target.nonGreedy;
    }
    appendContext(context, contextCache) {
        if (typeof context === "number") {
            let appendedContext = this.context.appendSingleContext(context, contextCache);
            let result = this.transform(this.state, false, appendedContext);
            return result;
        }
        else {
            let appendedContext = this.context.appendContext(context, contextCache);
            let result = this.transform(this.state, false, appendedContext);
            return result;
        }
    }
    /**
     * Determines if this `ATNConfig` fully contains another `ATNConfig`.
     *
     * An ATN configuration represents a position (including context) in an ATN during parsing. Since `ATNConfig` stores
     * the context as a graph, a single `ATNConfig` instance is capable of representing many ATN configurations which
     * are all in the same "location" but have different contexts. These `ATNConfig` instances are again merged when
     * they are added to an `ATNConfigSet`. This method supports `ATNConfigSet.contains` by evaluating whether a
     * particular `ATNConfig` contains all of the ATN configurations represented by another `ATNConfig`.
     *
     * An `ATNConfig` _a_ contains another `ATNConfig` _b_ if all of the following conditions are met:
     *
     * * The configurations are in the same state (`state`)
     * * The configurations predict the same alternative (`alt`)
     * * The semantic context of _a_ implies the semantic context of _b_ (this method performs a weaker equality check)
     * * Joining the prediction contexts of _a_ and _b_ results in the prediction context of _a_
     *
     * This method implements a conservative approximation of containment. As a result, when this method returns `true`
     * it is known that parsing from `subconfig` can only recognize a subset of the inputs which can be recognized
     * starting at the current `ATNConfig`. However, due to the imprecise evaluation of implication for the semantic
     * contexts, no assumptions can be made about the relationship between the configurations when this method returns
     * `false`.
     *
     * @param subconfig The sub configuration.
     * @returns `true` if this configuration contains `subconfig`; otherwise, `false`.
     */
    contains(subconfig) {
        if (this.state.stateNumber !== subconfig.state.stateNumber
            || this.alt !== subconfig.alt
            || !this.semanticContext.equals(subconfig.semanticContext)) {
            return false;
        }
        let leftWorkList = [];
        let rightWorkList = [];
        leftWorkList.push(this.context);
        rightWorkList.push(subconfig.context);
        while (true) {
            let left = leftWorkList.pop();
            let right = rightWorkList.pop();
            if (!left || !right) {
                break;
            }
            if (left === right) {
                return true;
            }
            if (left.size < right.size) {
                return false;
            }
            if (right.isEmpty) {
                return left.hasEmpty;
            }
            else {
                for (let i = 0; i < right.size; i++) {
                    let index = left.findReturnState(right.getReturnState(i));
                    if (index < 0) {
                        // assumes invokingStates has no duplicate entries
                        return false;
                    }
                    leftWorkList.push(left.getParent(index));
                    rightWorkList.push(right.getParent(i));
                }
            }
        }
        return false;
    }
    get isPrecedenceFilterSuppressed() {
        return (this.altAndOuterContextDepth & SUPPRESS_PRECEDENCE_FILTER) !== 0;
    }
    set isPrecedenceFilterSuppressed(value) {
        if (value) {
            this.altAndOuterContextDepth |= SUPPRESS_PRECEDENCE_FILTER;
        }
        else {
            this.altAndOuterContextDepth &= ~SUPPRESS_PRECEDENCE_FILTER;
        }
    }
    /** An ATN configuration is equal to another if both have
     *  the same state, they predict the same alternative, and
     *  syntactic/semantic contexts are the same.
     */
    equals(o) {
        if (this === o) {
            return true;
        }
        else if (!(o instanceof ATNConfig)) {
            return false;
        }
        return this.state.stateNumber === o.state.stateNumber
            && this.alt === o.alt
            && this.reachesIntoOuterContext === o.reachesIntoOuterContext
            && this.context.equals(o.context)
            && this.semanticContext.equals(o.semanticContext)
            && this.isPrecedenceFilterSuppressed === o.isPrecedenceFilterSuppressed
            && this.hasPassedThroughNonGreedyDecision === o.hasPassedThroughNonGreedyDecision
            && ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE.equals(this.lexerActionExecutor, o.lexerActionExecutor);
    }
    hashCode() {
        let hashCode = MurmurHash_1.MurmurHash.initialize(7);
        hashCode = MurmurHash_1.MurmurHash.update(hashCode, this.state.stateNumber);
        hashCode = MurmurHash_1.MurmurHash.update(hashCode, this.alt);
        hashCode = MurmurHash_1.MurmurHash.update(hashCode, this.reachesIntoOuterContext ? 1 : 0);
        hashCode = MurmurHash_1.MurmurHash.update(hashCode, this.context);
        hashCode = MurmurHash_1.MurmurHash.update(hashCode, this.semanticContext);
        hashCode = MurmurHash_1.MurmurHash.update(hashCode, this.hasPassedThroughNonGreedyDecision ? 1 : 0);
        hashCode = MurmurHash_1.MurmurHash.update(hashCode, this.lexerActionExecutor);
        hashCode = MurmurHash_1.MurmurHash.finish(hashCode, 7);
        return hashCode;
    }
    /**
     * Returns a graphical representation of the current `ATNConfig` in Graphviz format. The graph can be stored to a
     * **.dot** file and then rendered to an image using Graphviz.
     *
     * @returns A Graphviz graph representing the current `ATNConfig`.
     *
     * @see http://www.graphviz.org/
     */
    toDotString() {
        let builder = "";
        builder += ("digraph G {\n");
        builder += ("rankdir=LR;\n");
        let visited = new Array2DHashMap_1.Array2DHashMap(PredictionContext_1.PredictionContext.IdentityEqualityComparator.INSTANCE);
        let workList = [];
        function getOrAddContext(context) {
            let newNumber = visited.size;
            let result = visited.putIfAbsent(context, newNumber);
            if (result != null) {
                // Already saw this context
                return result;
            }
            workList.push(context);
            return newNumber;
        }
        workList.push(this.context);
        visited.put(this.context, 0);
        while (true) {
            let current = workList.pop();
            if (!current) {
                break;
            }
            for (let i = 0; i < current.size; i++) {
                builder += ("  s") + (getOrAddContext(current));
                builder += ("->");
                builder += ("s") + (getOrAddContext(current.getParent(i)));
                builder += ("[label=\"") + (current.getReturnState(i)) + ("\"];\n");
            }
        }
        builder += ("}\n");
        return builder.toString();
    }
    toString(recog, showAlt, showContext) {
        // Must check showContext before showAlt to preserve original overload behavior
        if (showContext == null) {
            showContext = showAlt != null;
        }
        if (showAlt == null) {
            showAlt = true;
        }
        let buf = "";
        // if (this.state.ruleIndex >= 0) {
        // 	if (recog != null) {
        // 		buf += (recog.ruleNames[this.state.ruleIndex] + ":");
        // 	} else {
        // 		buf += (this.state.ruleIndex + ":");
        // 	}
        // }
        let contexts;
        if (showContext) {
            contexts = this.context.toStrings(recog, this.state.stateNumber);
        }
        else {
            contexts = ["?"];
        }
        let first = true;
        for (let contextDesc of contexts) {
            if (first) {
                first = false;
            }
            else {
                buf += (", ");
            }
            buf += ("(");
            buf += (this.state);
            if (showAlt) {
                buf += (",");
                buf += (this.alt);
            }
            if (this.context) {
                buf += (",");
                buf += (contextDesc);
            }
            if (this.semanticContext !== SemanticContext_1.SemanticContext.NONE) {
                buf += (",");
                buf += (this.semanticContext);
            }
            if (this.reachesIntoOuterContext) {
                buf += (",up=") + (this.outerContextDepth);
            }
            buf += (")");
        }
        return buf.toString();
    }
};
__decorate([
    Decorators.NotNull
], ATNConfig.prototype, "_state", void 0);
__decorate([
    Decorators.NotNull
], ATNConfig.prototype, "_context", void 0);
__decorate([
    Decorators.NotNull
], ATNConfig.prototype, "state", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
], ATNConfig.prototype, "context", null);
__decorate([
    Decorators.NotNull
], ATNConfig.prototype, "semanticContext", null);
__decorate([
    Decorators.Override
], ATNConfig.prototype, "clone", null);
__decorate([
    __param(0, Decorators.NotNull), __param(2, Decorators.NotNull)
], ATNConfig.prototype, "transformImpl", null);
__decorate([
    Decorators.Override
], ATNConfig.prototype, "equals", null);
__decorate([
    Decorators.Override
], ATNConfig.prototype, "hashCode", null);
__decorate([
    __param(0, Decorators.NotNull), __param(3, Decorators.NotNull)
], ATNConfig, "create", null);
ATNConfig = __decorate([
    __param(0, Decorators.NotNull), __param(2, Decorators.NotNull)
], ATNConfig);
exports.ATNConfig = ATNConfig;
/**
 * This class was derived from `ATNConfig` purely as a memory optimization. It allows for the creation of an `ATNConfig`
 * with a non-default semantic context.
 *
 * See the `ATNConfig` documentation for more information about conserving memory through the use of several concrete
 * types.
 */
let SemanticContextATNConfig = class SemanticContextATNConfig extends ATNConfig {
    constructor(semanticContext, state, altOrConfig, context) {
        if (typeof altOrConfig === "number") {
            super(state, altOrConfig, context);
        }
        else {
            super(state, altOrConfig, context);
        }
        this._semanticContext = semanticContext;
    }
    get semanticContext() {
        return this._semanticContext;
    }
};
__decorate([
    Decorators.NotNull
], SemanticContextATNConfig.prototype, "_semanticContext", void 0);
__decorate([
    Decorators.Override
], SemanticContextATNConfig.prototype, "semanticContext", null);
SemanticContextATNConfig = __decorate([
    __param(1, Decorators.NotNull), __param(2, Decorators.NotNull)
], SemanticContextATNConfig);
/**
 * This class was derived from `ATNConfig` purely as a memory optimization. It allows for the creation of an `ATNConfig`
 * with a lexer action.
 *
 * See the `ATNConfig` documentation for more information about conserving memory through the use of several concrete
 * types.
 */
let ActionATNConfig = class ActionATNConfig extends ATNConfig {
    constructor(lexerActionExecutor, state, altOrConfig, context, passedThroughNonGreedyDecision) {
        if (typeof altOrConfig === "number") {
            super(state, altOrConfig, context);
        }
        else {
            super(state, altOrConfig, context);
            if (altOrConfig.semanticContext !== SemanticContext_1.SemanticContext.NONE) {
                throw new Error("Not supported");
            }
        }
        this._lexerActionExecutor = lexerActionExecutor;
        this.passedThroughNonGreedyDecision = passedThroughNonGreedyDecision;
    }
    get lexerActionExecutor() {
        return this._lexerActionExecutor;
    }
    get hasPassedThroughNonGreedyDecision() {
        return this.passedThroughNonGreedyDecision;
    }
};
__decorate([
    Decorators.Override
], ActionATNConfig.prototype, "lexerActionExecutor", null);
__decorate([
    Decorators.Override
], ActionATNConfig.prototype, "hasPassedThroughNonGreedyDecision", null);
ActionATNConfig = __decorate([
    __param(1, Decorators.NotNull), __param(2, Decorators.NotNull)
], ActionATNConfig);
/**
 * This class was derived from `SemanticContextATNConfig` purely as a memory optimization. It allows for the creation of
 * an `ATNConfig` with both a lexer action and a non-default semantic context.
 *
 * See the `ATNConfig` documentation for more information about conserving memory through the use of several concrete
 * types.
 */
let ActionSemanticContextATNConfig = class ActionSemanticContextATNConfig extends SemanticContextATNConfig {
    constructor(lexerActionExecutor, semanticContext, state, altOrConfig, context, passedThroughNonGreedyDecision) {
        if (typeof altOrConfig === "number") {
            super(semanticContext, state, altOrConfig, context);
        }
        else {
            super(semanticContext, state, altOrConfig, context);
        }
        this._lexerActionExecutor = lexerActionExecutor;
        this.passedThroughNonGreedyDecision = passedThroughNonGreedyDecision;
    }
    get lexerActionExecutor() {
        return this._lexerActionExecutor;
    }
    get hasPassedThroughNonGreedyDecision() {
        return this.passedThroughNonGreedyDecision;
    }
};
__decorate([
    Decorators.Override
], ActionSemanticContextATNConfig.prototype, "lexerActionExecutor", null);
__decorate([
    Decorators.Override
], ActionSemanticContextATNConfig.prototype, "hasPassedThroughNonGreedyDecision", null);
ActionSemanticContextATNConfig = __decorate([
    __param(1, Decorators.NotNull), __param(2, Decorators.NotNull)
], ActionSemanticContextATNConfig);

});

var BitSet_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitSet = void 0;


/**
 * Private empty array used to construct empty BitSets
 */
const EMPTY_DATA = new Uint16Array(0);
/**
 * Gets the word index of the `UInt16` element in `BitSet.data` containing the bit with the specified index.
 */
function getIndex(bitNumber) {
    return bitNumber >>> 4;
}
/**
 * Convert a word index into the bit index of the LSB of that word
 */
function unIndex(n) {
    return n * 16;
}
/**
 * Get's the bit number of the least signficant bit set LSB which is set in a word non-zero word;
 * Bit numbers run from LSB to MSB starting with 0.
 */
function findLSBSet(word) {
    let bit = 1;
    for (let i = 0; i < 16; i++) {
        if ((word & bit) !== 0) {
            return i;
        }
        bit = (bit << 1) >>> 0;
    }
    throw new RangeError("No specified bit found");
}
function findMSBSet(word) {
    let bit = (1 << 15) >>> 0;
    for (let i = 15; i >= 0; i--) {
        if ((word & bit) !== 0) {
            return i;
        }
        bit = bit >>> 1;
    }
    throw new RangeError("No specified bit found");
}
/**
 * Gets a 16-bit mask with bit numbers fromBit to toBit (inclusive) set.
 * Bit numbers run from LSB to MSB starting with 0.
 */
function bitsFor(fromBit, toBit) {
    fromBit &= 0xF;
    toBit &= 0xF;
    if (fromBit === toBit) {
        return (1 << fromBit) >>> 0;
    }
    return ((0xFFFF >>> (15 - toBit)) ^ (0xFFFF >>> (16 - fromBit)));
}
/**
 * A lookup table for number of set bits in a 16-bit integer.   This is used to quickly count the cardinality (number of unique elements) of a BitSet.
 */
const POP_CNT = new Uint8Array(65536);
for (let i = 0; i < 16; i++) {
    const stride = (1 << i) >>> 0;
    let index = 0;
    while (index < POP_CNT.length) {
        // skip the numbers where the bit isn't set
        index += stride;
        // increment the ones where the bit is set
        for (let j = 0; j < stride; j++) {
            POP_CNT[index]++;
            index++;
        }
    }
}
class BitSet {
    /*
    ** constructor implementation
    */
    constructor(arg) {
        if (!arg) {
            // covering the case of unspecified and nbits===0
            this.data = EMPTY_DATA;
        }
        else if (typeof arg === "number") {
            if (arg < 0) {
                throw new RangeError("nbits cannot be negative");
            }
            else {
                this.data = new Uint16Array(getIndex(arg - 1) + 1);
            }
        }
        else {
            if (arg instanceof BitSet) {
                this.data = arg.data.slice(0); // Clone the data
            }
            else {
                let max = -1;
                for (let v of arg) {
                    if (max < v) {
                        max = v;
                    }
                }
                this.data = new Uint16Array(getIndex(max - 1) + 1);
                for (let v of arg) {
                    this.set(v);
                }
            }
        }
    }
    /**
     * Performs a logical **AND** of this target bit set with the argument bit set. This bit set is modified so that
     * each bit in it has the value `true` if and only if it both initially had the value `true` and the corresponding
     * bit in the bit set argument also had the value `true`.
     */
    and(set) {
        const data = this.data;
        const other = set.data;
        const words = Math.min(data.length, other.length);
        let lastWord = -1; // Keep track of index of last non-zero word
        for (let i = 0; i < words; i++) {
            let value = data[i] &= other[i];
            if (value !== 0) {
                lastWord = i;
            }
        }
        if (lastWord === -1) {
            this.data = EMPTY_DATA;
        }
        if (lastWord < data.length - 1) {
            this.data = data.slice(0, lastWord + 1);
        }
    }
    /**
     * Clears all of the bits in this `BitSet` whose corresponding bit is set in the specified `BitSet`.
     */
    andNot(set) {
        const data = this.data;
        const other = set.data;
        const words = Math.min(data.length, other.length);
        let lastWord = -1; // Keep track of index of last non-zero word
        for (let i = 0; i < words; i++) {
            let value = data[i] &= (other[i] ^ 0xFFFF);
            if (value !== 0) {
                lastWord = i;
            }
        }
        if (lastWord === -1) {
            this.data = EMPTY_DATA;
        }
        if (lastWord < data.length - 1) {
            this.data = data.slice(0, lastWord + 1);
        }
    }
    /**
     * Returns the number of bits set to `true` in this `BitSet`.
     */
    cardinality() {
        if (this.isEmpty) {
            return 0;
        }
        const data = this.data;
        const length = data.length;
        let result = 0;
        for (let i = 0; i < length; i++) {
            result += POP_CNT[data[i]];
        }
        return result;
    }
    clear(fromIndex, toIndex) {
        if (fromIndex == null) {
            this.data.fill(0);
        }
        else if (toIndex == null) {
            this.set(fromIndex, false);
        }
        else {
            this.set(fromIndex, toIndex, false);
        }
    }
    flip(fromIndex, toIndex) {
        if (toIndex == null) {
            toIndex = fromIndex;
        }
        if (fromIndex < 0 || toIndex < fromIndex) {
            throw new RangeError();
        }
        let word = getIndex(fromIndex);
        const lastWord = getIndex(toIndex);
        if (word === lastWord) {
            this.data[word] ^= bitsFor(fromIndex, toIndex);
        }
        else {
            this.data[word++] ^= bitsFor(fromIndex, 15);
            while (word < lastWord) {
                this.data[word++] ^= 0xFFFF;
            }
            this.data[word++] ^= bitsFor(0, toIndex);
        }
    }
    get(fromIndex, toIndex) {
        if (toIndex === undefined) {
            return !!(this.data[getIndex(fromIndex)] & bitsFor(fromIndex, fromIndex));
        }
        else {
            // return a BitSet
            let result = new BitSet(toIndex + 1);
            for (let i = fromIndex; i <= toIndex; i++) {
                result.set(i, this.get(i));
            }
            return result;
        }
    }
    /**
     * Returns true if the specified `BitSet` has any bits set to `true` that are also set to `true` in this `BitSet`.
     *
     * @param set `BitSet` to intersect with
     */
    intersects(set) {
        let smallerLength = Math.min(this.length(), set.length());
        if (smallerLength === 0) {
            return false;
        }
        let bound = getIndex(smallerLength - 1);
        for (let i = 0; i <= bound; i++) {
            if ((this.data[i] & set.data[i]) !== 0) {
                return true;
            }
        }
        return false;
    }
    /**
     * Returns true if this `BitSet` contains no bits that are set to `true`.
     */
    get isEmpty() {
        return this.length() === 0;
    }
    /**
     * Returns the "logical size" of this `BitSet`: the index of the highest set bit in the `BitSet` plus one. Returns
     * zero if the `BitSet` contains no set bits.
     */
    length() {
        if (!this.data.length) {
            return 0;
        }
        return this.previousSetBit(unIndex(this.data.length) - 1) + 1;
    }
    /**
     * Returns the index of the first bit that is set to `false` that occurs on or after the specified starting index,
     * If no such bit exists then `-1` is returned.
     *
     * @param fromIndex the index to start checking from (inclusive)
     *
     * @throws RangeError if the specified index is negative
     */
    nextClearBit(fromIndex) {
        if (fromIndex < 0) {
            throw new RangeError("fromIndex cannot be negative");
        }
        const data = this.data;
        const length = data.length;
        let word = getIndex(fromIndex);
        if (word > length) {
            return -1;
        }
        let ignore = 0xFFFF ^ bitsFor(fromIndex, 15);
        if ((data[word] | ignore) === 0xFFFF) {
            word++;
            ignore = 0;
            for (; word < length; word++) {
                if (data[word] !== 0xFFFF) {
                    break;
                }
            }
            if (word === length) {
                // Hit the end
                return -1;
            }
        }
        return unIndex(word) + findLSBSet((data[word] | ignore) ^ 0xFFFF);
    }
    /**
     * Returns the index of the first bit that is set to `true` that occurs on or after the specified starting index.
     * If no such bit exists then `-1` is returned.
     *
     * To iterate over the `true` bits in a `BitSet`, use the following loop:
     *
     * ```
     * for (let i = bs.nextSetBit(0); i >= 0; i = bs.nextSetBit(i + 1)) {
     *   // operate on index i here
     * }
     * ```
     *
     * @param fromIndex the index to start checking from (inclusive)
     *
     * @throws RangeError if the specified index is negative
     */
    nextSetBit(fromIndex) {
        if (fromIndex < 0) {
            throw new RangeError("fromIndex cannot be negative");
        }
        const data = this.data;
        const length = data.length;
        let word = getIndex(fromIndex);
        if (word > length) {
            return -1;
        }
        let mask = bitsFor(fromIndex, 15);
        if ((data[word] & mask) === 0) {
            word++;
            mask = 0xFFFF;
            for (; word < length; word++) {
                if (data[word] !== 0) {
                    break;
                }
            }
            if (word >= length) {
                return -1;
            }
        }
        return unIndex(word) + findLSBSet(data[word] & mask);
    }
    /**
     * Performs a logical **OR** of this bit set with the bit set argument. This bit set is modified so that a bit in it
     * has the value `true` if and only if it either already had the value `true` or the corresponding bit in the bit
     * set argument has the value `true`.
     */
    or(set) {
        const data = this.data;
        const other = set.data;
        const minWords = Math.min(data.length, other.length);
        const words = Math.max(data.length, other.length);
        const dest = data.length === words ? data : new Uint16Array(words);
        let lastWord = -1;
        // Or those words both sets have in common
        for (let i = 0; i < minWords; i++) {
            let value = dest[i] = data[i] | other[i];
            if (value !== 0) {
                lastWord = i;
            }
        }
        // Copy words from larger set (if there is one)
        const longer = data.length > other.length ? data : other;
        for (let i = minWords; i < words; i++) {
            let value = dest[i] = longer[i];
            if (value !== 0) {
                lastWord = i;
            }
        }
        if (lastWord === -1) {
            this.data = EMPTY_DATA;
        }
        else if (dest.length === lastWord + 1) {
            this.data = dest;
        }
        else {
            this.data = dest.slice(0, lastWord);
        }
    }
    /**
     * Returns the index of the nearest bit that is set to `false` that occurs on or before the specified starting
     * index. If no such bit exists, or if `-1` is given as the starting index, then `-1` is returned.
     *
     * @param fromIndex the index to start checking from (inclusive)
     *
     * @throws RangeError if the specified index is less than `-1`
     */
    previousClearBit(fromIndex) {
        if (fromIndex < 0) {
            throw new RangeError("fromIndex cannot be negative");
        }
        const data = this.data;
        const length = data.length;
        let word = getIndex(fromIndex);
        if (word >= length) {
            word = length - 1;
        }
        let ignore = 0xFFFF ^ bitsFor(0, fromIndex);
        if ((data[word] | ignore) === 0xFFFF) {
            ignore = 0;
            word--;
            for (; word >= 0; word--) {
                if (data[word] !== 0xFFFF) {
                    break;
                }
            }
            if (word < 0) {
                // Hit the end
                return -1;
            }
        }
        return unIndex(word) + findMSBSet((data[word] | ignore) ^ 0xFFFF);
    }
    /**
     * Returns the index of the nearest bit that is set to `true` that occurs on or before the specified starting index.
     * If no such bit exists, or if `-1` is given as the starting index, then `-1` is returned.
     *
     * To iterate over the `true` bits in a `BitSet`, use the following loop:
     *
     * ```
     * for (let i = bs.length(); (i = bs.previousSetBit(i-1)) >= 0; ) {
     *   // operate on index i here
     * }
     * ```
     *
     * @param fromIndex the index to start checking from (inclusive)
     *
     * @throws RangeError if the specified index is less than `-1`
     */
    previousSetBit(fromIndex) {
        if (fromIndex < 0) {
            throw new RangeError("fromIndex cannot be negative");
        }
        const data = this.data;
        const length = data.length;
        let word = getIndex(fromIndex);
        if (word >= length) {
            word = length - 1;
        }
        let mask = bitsFor(0, fromIndex);
        if ((data[word] & mask) === 0) {
            word--;
            mask = 0xFFFF;
            for (; word >= 0; word--) {
                if (data[word] !== 0) {
                    break;
                }
            }
            if (word < 0) {
                return -1;
            }
        }
        return unIndex(word) + findMSBSet(data[word] & mask);
    }
    set(fromIndex, toIndex, value) {
        if (toIndex === undefined) {
            toIndex = fromIndex;
            value = true;
        }
        else if (typeof toIndex === "boolean") {
            value = toIndex;
            toIndex = fromIndex;
        }
        if (value === undefined) {
            value = true;
        }
        if (fromIndex < 0 || fromIndex > toIndex) {
            throw new RangeError();
        }
        let word = getIndex(fromIndex);
        let lastWord = getIndex(toIndex);
        if (value && lastWord >= this.data.length) {
            // Grow array "just enough" for bits we need to set
            let temp = new Uint16Array(lastWord + 1);
            this.data.forEach((value, index) => temp[index] = value);
            this.data = temp;
        }
        else if (!value) {
            // But there is no need to grow array to clear bits.
            if (word >= this.data.length) {
                // Early exit
                return;
            }
            if (lastWord >= this.data.length) {
                // Adjust work to fit array
                lastWord = this.data.length - 1;
                toIndex = this.data.length * 16 - 1;
            }
        }
        if (word === lastWord) {
            this._setBits(word, value, bitsFor(fromIndex, toIndex));
        }
        else {
            this._setBits(word++, value, bitsFor(fromIndex, 15));
            while (word < lastWord) {
                this.data[word++] = value ? 0xFFFF : 0;
            }
            this._setBits(word, value, bitsFor(0, toIndex));
        }
    }
    _setBits(word, value, mask) {
        if (value) {
            this.data[word] |= mask;
        }
        else {
            this.data[word] &= 0xFFFF ^ mask;
        }
    }
    /**
     * Returns the number of bits of space actually in use by this `BitSet` to represent bit values. The maximum element
     * in the set is the size - 1st element.
     */
    get size() {
        return this.data.byteLength * 8;
    }
    /**
     * Returns a new byte array containing all the bits in this bit set.
     *
     * More precisely, if
     * `let bytes = s.toByteArray();`
     * then `bytes.length === (s.length()+7)/8` and `s.get(n) === ((bytes[n/8] & (1<<(n%8))) != 0)` for all
     * `n < 8 * bytes.length`.
     */
    // toByteArray(): Int8Array {
    // 	throw new Error("NOT IMPLEMENTED");
    // }
    /**
     * Returns a new integer array containing all the bits in this bit set.
     *
     * More precisely, if
     * `let integers = s.toIntegerArray();`
     * then `integers.length === (s.length()+31)/32` and `s.get(n) === ((integers[n/32] & (1<<(n%32))) != 0)` for all
     * `n < 32 * integers.length`.
     */
    // toIntegerArray(): Int32Array {
    // 	throw new Error("NOT IMPLEMENTED");
    // }
    hashCode() {
        return MurmurHash_1.MurmurHash.hashCode(this.data, 22);
    }
    /**
     * Compares this object against the specified object. The result is `true` if and only if the argument is not
     * `undefined` and is a `Bitset` object that has exactly the same set of bits set to `true` as this bit set. That
     * is, for every nonnegative index `k`,
     *
     * ```
     * ((BitSet)obj).get(k) == this.get(k)
     * ```
     *
     * must be true. The current sizes of the two bit sets are not compared.
     */
    equals(obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof BitSet)) {
            return false;
        }
        const len = this.length();
        if (len !== obj.length()) {
            return false;
        }
        if (len === 0) {
            return true;
        }
        let bound = getIndex(len - 1);
        for (let i = 0; i <= bound; i++) {
            if (this.data[i] !== obj.data[i]) {
                return false;
            }
        }
        return true;
    }
    /**
     * Returns a string representation of this bit set. For every index for which this `BitSet` contains a bit in the
     * set state, the decimal representation of that index is included in the result. Such indices are listed in order
     * from lowest to highest, separated by ", " (a comma and a space) and surrounded by braces, resulting in the usual
     * mathematical notation for a set of integers.
     *
     * Example:
     *
     *     BitSet drPepper = new BitSet();
     *
     * Now `drPepper.toString()` returns `"{}"`.
     *
     *     drPepper.set(2);
     *
     * Now `drPepper.toString()` returns `"{2}"`.
     *
     *     drPepper.set(4);
     *     drPepper.set(10);
     *
     * Now `drPepper.toString()` returns `"{2, 4, 10}"`.
     */
    toString() {
        let result = "{";
        let first = true;
        for (let i = this.nextSetBit(0); i >= 0; i = this.nextSetBit(i + 1)) {
            if (first) {
                first = false;
            }
            else {
                result += ", ";
            }
            result += i;
        }
        result += "}";
        return result;
    }
    // static valueOf(bytes: Int8Array): BitSet;
    // static valueOf(buffer: ArrayBuffer): BitSet;
    // static valueOf(integers: Int32Array): BitSet;
    // static valueOf(data: Int8Array | Int32Array | ArrayBuffer): BitSet {
    // 	throw new Error("NOT IMPLEMENTED");
    // }
    /**
     * Performs a logical **XOR** of this bit set with the bit set argument. This bit set is modified so that a bit in
     * it has the value `true` if and only if one of the following statements holds:
     *
     * * The bit initially has the value `true`, and the corresponding bit in the argument has the value `false`.
     * * The bit initially has the value `false`, and the corresponding bit in the argument has the value `true`.
     */
    xor(set) {
        const data = this.data;
        const other = set.data;
        const minWords = Math.min(data.length, other.length);
        const words = Math.max(data.length, other.length);
        const dest = data.length === words ? data : new Uint16Array(words);
        let lastWord = -1;
        // Xor those words both sets have in common
        for (let i = 0; i < minWords; i++) {
            let value = dest[i] = data[i] ^ other[i];
            if (value !== 0) {
                lastWord = i;
            }
        }
        // Copy words from larger set (if there is one)
        const longer = data.length > other.length ? data : other;
        for (let i = minWords; i < words; i++) {
            let value = dest[i] = longer[i];
            if (value !== 0) {
                lastWord = i;
            }
        }
        if (lastWord === -1) {
            this.data = EMPTY_DATA;
        }
        else if (dest.length === lastWord + 1) {
            this.data = dest;
        }
        else {
            this.data = dest.slice(0, lastWord + 1);
        }
    }
    clone() {
        return new BitSet(this);
    }
    [Symbol.iterator]() {
        return new BitSetIterator(this.data);
    }
    // Overrides formatting for nodejs assert etc.
    [util.inspect.custom]() {
        return "BitSet " + this.toString();
    }
}
exports.BitSet = BitSet;
class BitSetIterator {
    constructor(data) {
        this.data = data;
        this.index = 0;
        this.mask = 0xFFFF;
    }
    next() {
        while (this.index < this.data.length) {
            const bits = this.data[this.index] & this.mask;
            if (bits !== 0) {
                const bitNumber = unIndex(this.index) + findLSBSet(bits);
                this.mask = bitsFor(bitNumber + 1, 15);
                return { done: false, value: bitNumber };
            }
            this.index++;
            this.mask = 0xFFFF;
        }
        return { done: true, value: -1 };
    }
    [Symbol.iterator]() { return this; }
}

});

var ATNConfigSet_1 = createCommonjsModule(function (module, exports) {
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
exports.ATNConfigSet = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:25.5488013-07:00













class KeyTypeEqualityComparer {
    hashCode(key) {
        return key.state ^ key.alt;
    }
    equals(a, b) {
        return a.state === b.state && a.alt === b.alt;
    }
}
KeyTypeEqualityComparer.INSTANCE = new KeyTypeEqualityComparer();
function NewKeyedConfigMap(map) {
    if (map) {
        return new Array2DHashMap_1.Array2DHashMap(map);
    }
    else {
        return new Array2DHashMap_1.Array2DHashMap(KeyTypeEqualityComparer.INSTANCE);
    }
}
/**
 * Represents a set of ATN configurations (see `ATNConfig`). As configurations are added to the set, they are merged
 * with other `ATNConfig` instances already in the set when possible using the graph-structured stack.
 *
 * An instance of this class represents the complete set of positions (with context) in an ATN which would be associated
 * with a single DFA state. Its internal representation is more complex than traditional state used for NFA to DFA
 * conversion due to performance requirements (both improving speed and reducing memory overhead) as well as supporting
 * features such as semantic predicates and non-greedy operators in a form to support ANTLR's prediction algorithm.
 *
 * @author Sam Harwell
 */
class ATNConfigSet {
    constructor(set, readonly) {
        this._uniqueAlt = 0;
        // Used in parser and lexer. In lexer, it indicates we hit a pred
        // while computing a closure operation.  Don't make a DFA state from this.
        this._hasSemanticContext = false;
        this._dipsIntoOuterContext = false;
        /**
         * When `true`, this config set represents configurations where the entire
         * outer context has been consumed by the ATN interpreter. This prevents the
         * {@link ParserATNSimulator#closure} from pursuing the global FOLLOW when a
         * rule stop state is reached with an empty prediction context.
         *
         * Note: `outermostConfigSet` and {@link #dipsIntoOuterContext} should never
         * be true at the same time.
         */
        this.outermostConfigSet = false;
        this.cachedHashCode = -1;
        if (!set) {
            this.mergedConfigs = NewKeyedConfigMap();
            this.unmerged = [];
            this.configs = [];
            this._uniqueAlt = ATN_1.ATN.INVALID_ALT_NUMBER;
        }
        else {
            if (readonly) {
                this.mergedConfigs = undefined;
                this.unmerged = undefined;
            }
            else if (!set.isReadOnly) {
                this.mergedConfigs = NewKeyedConfigMap(set.mergedConfigs);
                this.unmerged = set.unmerged.slice(0);
            }
            else {
                this.mergedConfigs = NewKeyedConfigMap();
                this.unmerged = [];
            }
            this.configs = set.configs.slice(0);
            this._dipsIntoOuterContext = set._dipsIntoOuterContext;
            this._hasSemanticContext = set._hasSemanticContext;
            this.outermostConfigSet = set.outermostConfigSet;
            if (readonly || !set.isReadOnly) {
                this._uniqueAlt = set._uniqueAlt;
                this._conflictInfo = set._conflictInfo;
            }
            // if (!readonly && set.isReadOnly) -> addAll is called from clone()
        }
    }
    /**
     * Get the set of all alternatives represented by configurations in this
     * set.
     */
    getRepresentedAlternatives() {
        if (this._conflictInfo != null) {
            return this._conflictInfo.conflictedAlts.clone();
        }
        let alts = new BitSet_1.BitSet();
        for (let config of this) {
            alts.set(config.alt);
        }
        return alts;
    }
    get isReadOnly() {
        return this.mergedConfigs == null;
    }
    get isOutermostConfigSet() {
        return this.outermostConfigSet;
    }
    set isOutermostConfigSet(outermostConfigSet) {
        if (this.outermostConfigSet && !outermostConfigSet) {
            throw new Error("IllegalStateException");
        }
        assert(!outermostConfigSet || !this._dipsIntoOuterContext);
        this.outermostConfigSet = outermostConfigSet;
    }
    getStates() {
        let states = new Array2DHashSet_1.Array2DHashSet(ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE);
        for (let c of this.configs) {
            states.add(c.state);
        }
        return states;
    }
    optimizeConfigs(interpreter) {
        if (this.configs.length === 0) {
            return;
        }
        for (let config of this.configs) {
            config.context = interpreter.atn.getCachedContext(config.context);
        }
    }
    clone(readonly) {
        let copy = new ATNConfigSet(this, readonly);
        if (!readonly && this.isReadOnly) {
            copy.addAll(this.configs);
        }
        return copy;
    }
    get size() {
        return this.configs.length;
    }
    get isEmpty() {
        return this.configs.length === 0;
    }
    contains(o) {
        if (!(o instanceof ATNConfig_1.ATNConfig)) {
            return false;
        }
        if (this.mergedConfigs && this.unmerged) {
            let config = o;
            let configKey = this.getKey(config);
            let mergedConfig = this.mergedConfigs.get(configKey);
            if (mergedConfig != null && this.canMerge(config, configKey, mergedConfig)) {
                return mergedConfig.contains(config);
            }
            for (let c of this.unmerged) {
                if (c.contains(o)) {
                    return true;
                }
            }
        }
        else {
            for (let c of this.configs) {
                if (c.contains(o)) {
                    return true;
                }
            }
        }
        return false;
    }
    *[Symbol.iterator]() {
        yield* this.configs;
    }
    toArray() {
        return this.configs;
    }
    add(e, contextCache) {
        this.ensureWritable();
        if (!this.mergedConfigs || !this.unmerged) {
            throw new Error("Covered by ensureWritable but duplicated here for strict null check limitation");
        }
        assert(!this.outermostConfigSet || !e.reachesIntoOuterContext);
        if (contextCache == null) {
            contextCache = PredictionContextCache_1.PredictionContextCache.UNCACHED;
        }
        let addKey;
        let key = this.getKey(e);
        let mergedConfig = this.mergedConfigs.get(key);
        addKey = (mergedConfig == null);
        if (mergedConfig != null && this.canMerge(e, key, mergedConfig)) {
            mergedConfig.outerContextDepth = Math.max(mergedConfig.outerContextDepth, e.outerContextDepth);
            if (e.isPrecedenceFilterSuppressed) {
                mergedConfig.isPrecedenceFilterSuppressed = true;
            }
            let joined = PredictionContext_1.PredictionContext.join(mergedConfig.context, e.context, contextCache);
            this.updatePropertiesForMergedConfig(e);
            if (mergedConfig.context === joined) {
                return false;
            }
            mergedConfig.context = joined;
            return true;
        }
        for (let i = 0; i < this.unmerged.length; i++) {
            let unmergedConfig = this.unmerged[i];
            if (this.canMerge(e, key, unmergedConfig)) {
                unmergedConfig.outerContextDepth = Math.max(unmergedConfig.outerContextDepth, e.outerContextDepth);
                if (e.isPrecedenceFilterSuppressed) {
                    unmergedConfig.isPrecedenceFilterSuppressed = true;
                }
                let joined = PredictionContext_1.PredictionContext.join(unmergedConfig.context, e.context, contextCache);
                this.updatePropertiesForMergedConfig(e);
                if (unmergedConfig.context === joined) {
                    return false;
                }
                unmergedConfig.context = joined;
                if (addKey) {
                    this.mergedConfigs.put(key, unmergedConfig);
                    this.unmerged.splice(i, 1);
                }
                return true;
            }
        }
        this.configs.push(e);
        if (addKey) {
            this.mergedConfigs.put(key, e);
        }
        else {
            this.unmerged.push(e);
        }
        this.updatePropertiesForAddedConfig(e);
        return true;
    }
    updatePropertiesForMergedConfig(config) {
        // merged configs can't change the alt or semantic context
        this._dipsIntoOuterContext = this._dipsIntoOuterContext || config.reachesIntoOuterContext;
        assert(!this.outermostConfigSet || !this._dipsIntoOuterContext);
    }
    updatePropertiesForAddedConfig(config) {
        if (this.configs.length === 1) {
            this._uniqueAlt = config.alt;
        }
        else if (this._uniqueAlt !== config.alt) {
            this._uniqueAlt = ATN_1.ATN.INVALID_ALT_NUMBER;
        }
        this._hasSemanticContext = this._hasSemanticContext || !SemanticContext_1.SemanticContext.NONE.equals(config.semanticContext);
        this._dipsIntoOuterContext = this._dipsIntoOuterContext || config.reachesIntoOuterContext;
        assert(!this.outermostConfigSet || !this._dipsIntoOuterContext);
    }
    canMerge(left, leftKey, right) {
        if (left.state.stateNumber !== right.state.stateNumber) {
            return false;
        }
        if (leftKey.alt !== right.alt) {
            return false;
        }
        return left.semanticContext.equals(right.semanticContext);
    }
    getKey(e) {
        return { state: e.state.stateNumber, alt: e.alt };
    }
    containsAll(c) {
        for (let o of c) {
            if (!(o instanceof ATNConfig_1.ATNConfig)) {
                return false;
            }
            if (!this.contains(o)) {
                return false;
            }
        }
        return true;
    }
    addAll(c, contextCache) {
        this.ensureWritable();
        let changed = false;
        for (let group of c) {
            if (this.add(group, contextCache)) {
                changed = true;
            }
        }
        return changed;
    }
    clear() {
        this.ensureWritable();
        if (!this.mergedConfigs || !this.unmerged) {
            throw new Error("Covered by ensureWritable but duplicated here for strict null check limitation");
        }
        this.mergedConfigs.clear();
        this.unmerged.length = 0;
        this.configs.length = 0;
        this._dipsIntoOuterContext = false;
        this._hasSemanticContext = false;
        this._uniqueAlt = ATN_1.ATN.INVALID_ALT_NUMBER;
        this._conflictInfo = undefined;
    }
    equals(obj) {
        if (this === obj) {
            return true;
        }
        if (!(obj instanceof ATNConfigSet)) {
            return false;
        }
        return this.outermostConfigSet === obj.outermostConfigSet
            && Utils.equals(this._conflictInfo, obj._conflictInfo)
            && ArrayEqualityComparator_1.ArrayEqualityComparator.INSTANCE.equals(this.configs, obj.configs);
    }
    hashCode() {
        if (this.isReadOnly && this.cachedHashCode !== -1) {
            return this.cachedHashCode;
        }
        let hashCode = 1;
        hashCode = 5 * hashCode ^ (this.outermostConfigSet ? 1 : 0);
        hashCode = 5 * hashCode ^ ArrayEqualityComparator_1.ArrayEqualityComparator.INSTANCE.hashCode(this.configs);
        if (this.isReadOnly) {
            this.cachedHashCode = hashCode;
        }
        return hashCode;
    }
    toString(showContext) {
        if (showContext == null) {
            showContext = false;
        }
        let buf = "";
        let sortedConfigs = this.configs.slice(0);
        sortedConfigs.sort((o1, o2) => {
            if (o1.alt !== o2.alt) {
                return o1.alt - o2.alt;
            }
            else if (o1.state.stateNumber !== o2.state.stateNumber) {
                return o1.state.stateNumber - o2.state.stateNumber;
            }
            else {
                return o1.semanticContext.toString().localeCompare(o2.semanticContext.toString());
            }
        });
        buf += ("[");
        for (let i = 0; i < sortedConfigs.length; i++) {
            if (i > 0) {
                buf += (", ");
            }
            buf += (sortedConfigs[i].toString(undefined, true, showContext));
        }
        buf += ("]");
        if (this._hasSemanticContext) {
            buf += (",hasSemanticContext=") + (this._hasSemanticContext);
        }
        if (this._uniqueAlt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
            buf += (",uniqueAlt=") + (this._uniqueAlt);
        }
        if (this._conflictInfo != null) {
            buf += (",conflictingAlts=") + (this._conflictInfo.conflictedAlts);
            if (!this._conflictInfo.isExact) {
                buf += ("*");
            }
        }
        if (this._dipsIntoOuterContext) {
            buf += (",dipsIntoOuterContext");
        }
        return buf.toString();
    }
    get uniqueAlt() {
        return this._uniqueAlt;
    }
    get hasSemanticContext() {
        return this._hasSemanticContext;
    }
    set hasSemanticContext(value) {
        this.ensureWritable();
        this._hasSemanticContext = value;
    }
    get conflictInfo() {
        return this._conflictInfo;
    }
    set conflictInfo(conflictInfo) {
        this.ensureWritable();
        this._conflictInfo = conflictInfo;
    }
    get conflictingAlts() {
        if (this._conflictInfo == null) {
            return undefined;
        }
        return this._conflictInfo.conflictedAlts;
    }
    get isExactConflict() {
        if (this._conflictInfo == null) {
            return false;
        }
        return this._conflictInfo.isExact;
    }
    get dipsIntoOuterContext() {
        return this._dipsIntoOuterContext;
    }
    get(index) {
        return this.configs[index];
    }
    ensureWritable() {
        if (this.isReadOnly) {
            throw new Error("This ATNConfigSet is read only.");
        }
    }
}
__decorate([
    Decorators.NotNull
], ATNConfigSet.prototype, "getRepresentedAlternatives", null);
__decorate([
    Decorators.Override
], ATNConfigSet.prototype, "size", null);
__decorate([
    Decorators.Override
], ATNConfigSet.prototype, "isEmpty", null);
__decorate([
    Decorators.Override
], ATNConfigSet.prototype, "contains", null);
__decorate([
    Decorators.Override
], ATNConfigSet.prototype, Symbol.iterator, null);
__decorate([
    Decorators.Override
], ATNConfigSet.prototype, "toArray", null);
__decorate([
    Decorators.Override
], ATNConfigSet.prototype, "containsAll", null);
__decorate([
    Decorators.Override
], ATNConfigSet.prototype, "clear", null);
__decorate([
    Decorators.Override
], ATNConfigSet.prototype, "equals", null);
__decorate([
    Decorators.Override
], ATNConfigSet.prototype, "hashCode", null);
exports.ATNConfigSet = ATNConfigSet;

});

var DFAState_1 = createCommonjsModule(function (module, exports) {
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
exports.DFAState = void 0;






/** A DFA state represents a set of possible ATN configurations.
 *  As Aho, Sethi, Ullman p. 117 says "The DFA uses its state
 *  to keep track of all possible states the ATN can be in after
 *  reading each input symbol.  That is to say, after reading
 *  input a1a2..an, the DFA is in a state that represents the
 *  subset T of the states of the ATN that are reachable from the
 *  ATN's start state along some path labeled a1a2..an."
 *  In conventional NFA&rarr;DFA conversion, therefore, the subset T
 *  would be a bitset representing the set of states the
 *  ATN could be in.  We need to track the alt predicted by each
 *  state as well, however.  More importantly, we need to maintain
 *  a stack of states, tracking the closure operations as they
 *  jump from rule to rule, emulating rule invocations (method calls).
 *  I have to add a stack to simulate the proper lookahead sequences for
 *  the underlying LL grammar from which the ATN was derived.
 *
 *  I use a set of ATNConfig objects not simple states.  An ATNConfig
 *  is both a state (ala normal conversion) and a RuleContext describing
 *  the chain of rules (if any) followed to arrive at that state.
 *
 *  A DFA state may have multiple references to a particular state,
 *  but with different ATN contexts (with same or different alts)
 *  meaning that state was reached via a different set of rule invocations.
 */
class DFAState {
    /**
     * Constructs a new `DFAState`.
     *
     * @param configs The set of ATN configurations defining this state.
     */
    constructor(configs) {
        this.stateNumber = -1;
        this.configs = configs;
        this.edges = new Map();
        this.contextEdges = new Map();
    }
    get isContextSensitive() {
        return !!this.contextSymbols;
    }
    isContextSymbol(symbol) {
        if (!this.isContextSensitive) {
            return false;
        }
        return this.contextSymbols.get(symbol);
    }
    setContextSymbol(symbol) {
        assert(this.isContextSensitive);
        this.contextSymbols.set(symbol);
    }
    setContextSensitive(atn) {
        assert(!this.configs.isOutermostConfigSet);
        if (this.isContextSensitive) {
            return;
        }
        if (!this.contextSymbols) {
            this.contextSymbols = new BitSet_1.BitSet();
        }
    }
    get acceptStateInfo() {
        return this._acceptStateInfo;
    }
    set acceptStateInfo(acceptStateInfo) {
        this._acceptStateInfo = acceptStateInfo;
    }
    get isAcceptState() {
        return !!this._acceptStateInfo;
    }
    get prediction() {
        if (!this._acceptStateInfo) {
            return ATN_1.ATN.INVALID_ALT_NUMBER;
        }
        return this._acceptStateInfo.prediction;
    }
    get lexerActionExecutor() {
        if (!this._acceptStateInfo) {
            return undefined;
        }
        return this._acceptStateInfo.lexerActionExecutor;
    }
    getTarget(symbol) {
        return this.edges.get(symbol);
    }
    setTarget(symbol, target) {
        this.edges.set(symbol, target);
    }
    getEdgeMap() {
        return this.edges;
    }
    getContextTarget(invokingState) {
        if (invokingState === PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY) {
            invokingState = -1;
        }
        return this.contextEdges.get(invokingState);
    }
    setContextTarget(invokingState, target) {
        if (!this.isContextSensitive) {
            throw new Error("The state is not context sensitive.");
        }
        if (invokingState === PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY) {
            invokingState = -1;
        }
        this.contextEdges.set(invokingState, target);
    }
    getContextEdgeMap() {
        let map = new Map(this.contextEdges);
        let existing = map.get(-1);
        if (existing !== undefined) {
            if (map.size === 1) {
                let result = new Map();
                result.set(PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY, existing);
                return result;
            }
            else {
                map.delete(-1);
                map.set(PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY, existing);
            }
        }
        return map;
    }
    hashCode() {
        let hash = MurmurHash_1.MurmurHash.initialize(7);
        hash = MurmurHash_1.MurmurHash.update(hash, this.configs.hashCode());
        hash = MurmurHash_1.MurmurHash.finish(hash, 1);
        return hash;
    }
    /**
     * Two {@link DFAState} instances are equal if their ATN configuration sets
     * are the same. This method is used to see if a state already exists.
     *
     * Because the number of alternatives and number of ATN configurations are
     * finite, there is a finite number of DFA states that can be processed.
     * This is necessary to show that the algorithm terminates.
     *
     * Cannot test the DFA state numbers here because in
     * {@link ParserATNSimulator#addDFAState} we need to know if any other state
     * exists that has this exact set of ATN configurations. The
     * {@link #stateNumber} is irrelevant.
     */
    equals(o) {
        // compare set of ATN configurations in this set with other
        if (this === o) {
            return true;
        }
        if (!(o instanceof DFAState)) {
            return false;
        }
        let other = o;
        let sameSet = this.configs.equals(other.configs);
        //		System.out.println("DFAState.equals: "+configs+(sameSet?"==":"!=")+other.configs);
        return sameSet;
    }
    toString() {
        let buf = "";
        buf += (this.stateNumber) + (":") + (this.configs);
        if (this.isAcceptState) {
            buf += ("=>");
            if (this.predicates) {
                buf += this.predicates;
            }
            else {
                buf += (this.prediction);
            }
        }
        return buf.toString();
    }
}
__decorate([
    Decorators.NotNull
], DFAState.prototype, "configs", void 0);
__decorate([
    Decorators.NotNull
], DFAState.prototype, "edges", void 0);
__decorate([
    Decorators.NotNull
], DFAState.prototype, "contextEdges", void 0);
__decorate([
    Decorators.Override
], DFAState.prototype, "hashCode", null);
__decorate([
    Decorators.Override
], DFAState.prototype, "equals", null);
__decorate([
    Decorators.Override
], DFAState.prototype, "toString", null);
exports.DFAState = DFAState;
(function (DFAState) {
    /** Map a predicate to a predicted alternative. */
    let PredPrediction = class PredPrediction {
        constructor(pred, alt) {
            this.alt = alt;
            this.pred = pred;
        }
        toString() {
            return "(" + this.pred + ", " + this.alt + ")";
        }
    };
    __decorate([
        Decorators.NotNull
    ], PredPrediction.prototype, "pred", void 0);
    __decorate([
        Decorators.Override
    ], PredPrediction.prototype, "toString", null);
    PredPrediction = __decorate([
        __param(0, Decorators.NotNull)
    ], PredPrediction);
    DFAState.PredPrediction = PredPrediction;
})(DFAState = exports.DFAState || (exports.DFAState = {}));

});

var ATNSimulator_1 = createCommonjsModule(function (module, exports) {
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
exports.ATNSimulator = void 0;




let ATNSimulator = class ATNSimulator {
    constructor(atn) {
        this.atn = atn;
    }
    static get ERROR() {
        if (!ATNSimulator._ERROR) {
            ATNSimulator._ERROR = new DFAState_1.DFAState(new ATNConfigSet_1.ATNConfigSet());
            ATNSimulator._ERROR.stateNumber = PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY;
        }
        return ATNSimulator._ERROR;
    }
    /**
     * Clear the DFA cache used by the current instance. Since the DFA cache may
     * be shared by multiple ATN simulators, this method may affect the
     * performance (but not accuracy) of other parsers which are being used
     * concurrently.
     *
     * @ if the current instance does not
     * support clearing the DFA.
     *
     * @since 4.3
     */
    clearDFA() {
        this.atn.clearDFA();
    }
};
__decorate([
    Decorators.NotNull
], ATNSimulator.prototype, "atn", void 0);
__decorate([
    Decorators.NotNull
], ATNSimulator, "ERROR", null);
ATNSimulator = __decorate([
    __param(0, Decorators.NotNull)
], ATNSimulator);
exports.ATNSimulator = ATNSimulator;
(function (ATNSimulator) {
})(ATNSimulator = exports.ATNSimulator || (exports.ATNSimulator = {}));
exports.ATNSimulator = ATNSimulator;

});

var ConsoleErrorListener_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleErrorListener = void 0;
/**
 *
 * @author Sam Harwell
 */
class ConsoleErrorListener {
    /**
     * {@inheritDoc}
     *
     * This implementation prints messages to {@link System#err} containing the
     * values of `line`, `charPositionInLine`, and `msg` using
     * the following format.
     *
     * <pre>
     * line *line*:*charPositionInLine* *msg*
     * </pre>
     */
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        console.error(`line ${line}:${charPositionInLine} ${msg}`);
    }
}
exports.ConsoleErrorListener = ConsoleErrorListener;
/**
 * Provides a default instance of {@link ConsoleErrorListener}.
 */
ConsoleErrorListener.INSTANCE = new ConsoleErrorListener();

});

var ProxyErrorListener_1 = createCommonjsModule(function (module, exports) {
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
exports.ProxyErrorListener = void 0;

/**
 * This implementation of {@link ANTLRErrorListener} dispatches all calls to a
 * collection of delegate listeners. This reduces the effort required to support multiple
 * listeners.
 *
 * @author Sam Harwell
 */
class ProxyErrorListener {
    constructor(delegates) {
        this.delegates = delegates;
        if (!delegates) {
            throw new Error("Invalid delegates");
        }
    }
    getDelegates() {
        return this.delegates;
    }
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        this.delegates.forEach((listener) => {
            if (listener.syntaxError) {
                listener.syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e);
            }
        });
    }
}
__decorate([
    Decorators.Override,
    __param(0, Decorators.NotNull),
    __param(4, Decorators.NotNull)
], ProxyErrorListener.prototype, "syntaxError", null);
exports.ProxyErrorListener = ProxyErrorListener;

});

var Recognizer_1 = createCommonjsModule(function (module, exports) {
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
exports.Recognizer = void 0;





class Recognizer {
    constructor() {
        this._listeners = [ConsoleErrorListener_1.ConsoleErrorListener.INSTANCE];
        this._stateNumber = -1;
    }
    /**
     * Get a map from token names to token types.
     *
     * Used for XPath and tree pattern compilation.
     */
    getTokenTypeMap() {
        let vocabulary = this.vocabulary;
        let result = Recognizer.tokenTypeMapCache.get(vocabulary);
        if (result == null) {
            let intermediateResult = new Map();
            for (let i = 0; i <= this.atn.maxTokenType; i++) {
                let literalName = vocabulary.getLiteralName(i);
                if (literalName != null) {
                    intermediateResult.set(literalName, i);
                }
                let symbolicName = vocabulary.getSymbolicName(i);
                if (symbolicName != null) {
                    intermediateResult.set(symbolicName, i);
                }
            }
            intermediateResult.set("EOF", Token_1.Token.EOF);
            result = intermediateResult;
            Recognizer.tokenTypeMapCache.set(vocabulary, result);
        }
        return result;
    }
    /**
     * Get a map from rule names to rule indexes.
     *
     * Used for XPath and tree pattern compilation.
     */
    getRuleIndexMap() {
        let ruleNames = this.ruleNames;
        if (ruleNames == null) {
            throw new Error("The current recognizer does not provide a list of rule names.");
        }
        let result = Recognizer.ruleIndexMapCache.get(ruleNames);
        if (result == null) {
            result = Utils.toMap(ruleNames);
            Recognizer.ruleIndexMapCache.set(ruleNames, result);
        }
        return result;
    }
    getTokenType(tokenName) {
        let ttype = this.getTokenTypeMap().get(tokenName);
        if (ttype != null) {
            return ttype;
        }
        return Token_1.Token.INVALID_TYPE;
    }
    /**
     * If this recognizer was generated, it will have a serialized ATN
     * representation of the grammar.
     *
     * For interpreters, we don't know their serialized ATN despite having
     * created the interpreter from it.
     */
    get serializedATN() {
        throw new Error("there is no serialized ATN");
    }
    /**
     * Get the {@link ATN} used by the recognizer for prediction.
     *
     * @returns The {@link ATN} used by the recognizer for prediction.
     */
    get atn() {
        return this._interp.atn;
    }
    /**
     * Get the ATN interpreter used by the recognizer for prediction.
     *
     * @returns The ATN interpreter used by the recognizer for prediction.
     */
    get interpreter() {
        return this._interp;
    }
    /**
     * Set the ATN interpreter used by the recognizer for prediction.
     *
     * @param interpreter The ATN interpreter used by the recognizer for
     * prediction.
     */
    set interpreter(interpreter) {
        this._interp = interpreter;
    }
    /** If profiling during the parse/lex, this will return DecisionInfo records
     *  for each decision in recognizer in a ParseInfo object.
     *
     * @since 4.3
     */
    get parseInfo() {
        return Promise.resolve(undefined);
    }
    /** What is the error header, normally line/character position information? */
    getErrorHeader(e) {
        let token = e.getOffendingToken();
        if (!token) {
            return "";
        }
        let line = token.line;
        let charPositionInLine = token.charPositionInLine;
        return "line " + line + ":" + charPositionInLine;
    }
    /**
     * @exception NullPointerException if `listener` is `undefined`.
     */
    addErrorListener(listener) {
        if (!listener) {
            throw new TypeError("listener must not be null");
        }
        this._listeners.push(listener);
    }
    removeErrorListener(listener) {
        let position = this._listeners.indexOf(listener);
        if (position !== -1) {
            this._listeners.splice(position, 1);
        }
    }
    removeErrorListeners() {
        this._listeners.length = 0;
    }
    getErrorListeners() {
        return this._listeners.slice(0);
    }
    getErrorListenerDispatch() {
        return new ProxyErrorListener_1.ProxyErrorListener(this.getErrorListeners());
    }
    // subclass needs to override these if there are sempreds or actions
    // that the ATN interp needs to execute
    sempred(_localctx, ruleIndex, actionIndex) {
        return true;
    }
    precpred(localctx, precedence) {
        return true;
    }
    action(_localctx, ruleIndex, actionIndex) {
        // intentionally empty
    }
    get state() {
        return this._stateNumber;
    }
    /** Indicate that the recognizer has changed internal state that is
     *  consistent with the ATN state passed in.  This way we always know
     *  where we are in the ATN as the parser goes along. The rule
     *  context objects form a stack that lets us see the stack of
     *  invoking rules. Combine this and we have complete ATN
     *  configuration information.
     */
    set state(atnState) {
        //		System.err.println("setState "+atnState);
        this._stateNumber = atnState;
        //		if ( traceATNStates ) _ctx.trace(atnState);
    }
}
Recognizer.EOF = -1;
Recognizer.tokenTypeMapCache = new WeakMap();
Recognizer.ruleIndexMapCache = new WeakMap();
__decorate([
    Decorators.SuppressWarnings("serial"),
    Decorators.NotNull
], Recognizer.prototype, "_listeners", void 0);
__decorate([
    Decorators.NotNull
], Recognizer.prototype, "getTokenTypeMap", null);
__decorate([
    Decorators.NotNull
], Recognizer.prototype, "getRuleIndexMap", null);
__decorate([
    Decorators.NotNull
], Recognizer.prototype, "serializedATN", null);
__decorate([
    Decorators.NotNull
], Recognizer.prototype, "atn", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
], Recognizer.prototype, "interpreter", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
], Recognizer.prototype, "getErrorHeader", null);
__decorate([
    __param(0, Decorators.NotNull)
], Recognizer.prototype, "addErrorListener", null);
__decorate([
    __param(0, Decorators.NotNull)
], Recognizer.prototype, "removeErrorListener", null);
__decorate([
    Decorators.NotNull
], Recognizer.prototype, "getErrorListeners", null);
exports.Recognizer = Recognizer;

});

var DFASerializer_1 = createCommonjsModule(function (module, exports) {
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
exports.DFASerializer = void 0;





/** A DFA walker that knows how to dump them to serialized strings. */
class DFASerializer {
    constructor(dfa, vocabulary, ruleNames, atn) {
        if (vocabulary instanceof Recognizer_1.Recognizer) {
            ruleNames = vocabulary.ruleNames;
            atn = vocabulary.atn;
            vocabulary = vocabulary.vocabulary;
        }
        else if (!vocabulary) {
            vocabulary = VocabularyImpl_1.VocabularyImpl.EMPTY_VOCABULARY;
        }
        this.dfa = dfa;
        this.vocabulary = vocabulary;
        this.ruleNames = ruleNames;
        this.atn = atn;
    }
    toString() {
        if (!this.dfa.s0) {
            return "";
        }
        let buf = "";
        if (this.dfa.states) {
            let states = new Array(...this.dfa.states.toArray());
            states.sort((o1, o2) => o1.stateNumber - o2.stateNumber);
            for (let s of states) {
                let edges = s.getEdgeMap();
                let edgeKeys = [...edges.keys()].sort((a, b) => a - b);
                let contextEdges = s.getContextEdgeMap();
                let contextEdgeKeys = [...contextEdges.keys()].sort((a, b) => a - b);
                for (let entry of edgeKeys) {
                    let value = edges.get(entry);
                    if ((value == null || value === ATNSimulator_1.ATNSimulator.ERROR) && !s.isContextSymbol(entry)) {
                        continue;
                    }
                    let contextSymbol = false;
                    buf += (this.getStateString(s)) + ("-") + (this.getEdgeLabel(entry)) + ("->");
                    if (s.isContextSymbol(entry)) {
                        buf += ("!");
                        contextSymbol = true;
                    }
                    let t = value;
                    if (t && t.stateNumber !== ATNSimulator_1.ATNSimulator.ERROR.stateNumber) {
                        buf += (this.getStateString(t)) + ("\n");
                    }
                    else if (contextSymbol) {
                        buf += ("ctx\n");
                    }
                }
                if (s.isContextSensitive) {
                    for (let entry of contextEdgeKeys) {
                        buf += (this.getStateString(s))
                            + ("-")
                            + (this.getContextLabel(entry))
                            + ("->")
                            + (this.getStateString(contextEdges.get(entry)))
                            + ("\n");
                    }
                }
            }
        }
        let output = buf;
        if (output.length === 0) {
            return "";
        }
        //return Utils.sortLinesInString(output);
        return output;
    }
    getContextLabel(i) {
        if (i === PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY) {
            return "ctx:EMPTY_FULL";
        }
        else if (i === PredictionContext_1.PredictionContext.EMPTY_LOCAL_STATE_KEY) {
            return "ctx:EMPTY_LOCAL";
        }
        if (this.atn && i > 0 && i <= this.atn.states.length) {
            let state = this.atn.states[i];
            let ruleIndex = state.ruleIndex;
            if (this.ruleNames && ruleIndex >= 0 && ruleIndex < this.ruleNames.length) {
                return "ctx:" + String(i) + "(" + this.ruleNames[ruleIndex] + ")";
            }
        }
        return "ctx:" + String(i);
    }
    getEdgeLabel(i) {
        return this.vocabulary.getDisplayName(i);
    }
    getStateString(s) {
        if (s === ATNSimulator_1.ATNSimulator.ERROR) {
            return "ERROR";
        }
        let n = s.stateNumber;
        let stateStr = "s" + n;
        if (s.isAcceptState) {
            if (s.predicates) {
                stateStr = ":s" + n + "=>" + s.predicates;
            }
            else {
                stateStr = ":s" + n + "=>" + s.prediction;
            }
        }
        if (s.isContextSensitive) {
            stateStr += "*";
            for (let config of s.configs) {
                if (config.reachesIntoOuterContext) {
                    stateStr += "*";
                    break;
                }
            }
        }
        return stateStr;
    }
}
__decorate([
    Decorators.NotNull
], DFASerializer.prototype, "dfa", void 0);
__decorate([
    Decorators.NotNull
], DFASerializer.prototype, "vocabulary", void 0);
__decorate([
    Decorators.Override
], DFASerializer.prototype, "toString", null);
exports.DFASerializer = DFASerializer;

});

var LexerDFASerializer_1 = createCommonjsModule(function (module, exports) {
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
exports.LexerDFASerializer = void 0;



let LexerDFASerializer = class LexerDFASerializer extends DFASerializer_1.DFASerializer {
    constructor(dfa) {
        super(dfa, VocabularyImpl_1.VocabularyImpl.EMPTY_VOCABULARY);
    }
    getEdgeLabel(i) {
        return "'" + String.fromCodePoint(i) + "'";
    }
};
__decorate([
    Decorators.Override,
    Decorators.NotNull
], LexerDFASerializer.prototype, "getEdgeLabel", null);
LexerDFASerializer = __decorate([
    __param(0, Decorators.NotNull)
], LexerDFASerializer);
exports.LexerDFASerializer = LexerDFASerializer;

});

var StarLoopEntryState_1 = createCommonjsModule(function (module, exports) {
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
exports.StarLoopEntryState = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:37.7099201-07:00




class StarLoopEntryState extends DecisionState_1.DecisionState {
    constructor() {
        super(...arguments);
        /**
         * Indicates whether this state can benefit from a precedence DFA during SLL
         * decision making.
         *
         * This is a computed property that is calculated during ATN deserialization
         * and stored for use in {@link ParserATNSimulator} and
         * {@link ParserInterpreter}.
         *
         * @see `DFA.isPrecedenceDfa`
         */
        this.precedenceRuleDecision = false;
        /**
         * For precedence decisions, this set marks states *S* which have all
         * of the following characteristics:
         *
         * * One or more invocation sites of the current rule returns to
         *   *S*.
         * * The closure from *S* includes the current decision without
         *   passing through any rule invocations or stepping out of the current
         *   rule.
         *
         * This field is not used when {@link #precedenceRuleDecision} is
         * `false`.
         */
        this.precedenceLoopbackStates = new BitSet_1.BitSet();
    }
    get stateType() {
        return ATNStateType_1.ATNStateType.STAR_LOOP_ENTRY;
    }
}
__decorate([
    Decorators.Override
], StarLoopEntryState.prototype, "stateType", null);
exports.StarLoopEntryState = StarLoopEntryState;

});

var DFA_1 = createCommonjsModule(function (module, exports) {
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
exports.DFA = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:38.3567094-07:00









let DFA = class DFA {
    constructor(atnStartState, decision = 0) {
        /**
         * A set of all states in the `DFA`.
         *
         * Note that this collection of states holds the DFA states for both SLL and LL prediction. Only the start state
         * needs to be differentiated for these cases, which is tracked by the `s0` and `s0full` fields.
         */
        this.states = new Array2DHashSet_1.Array2DHashSet(ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE);
        this.nextStateNumber = 0;
        if (!atnStartState.atn) {
            throw new Error("The ATNState must be associated with an ATN");
        }
        this.atnStartState = atnStartState;
        this.atn = atnStartState.atn;
        this.decision = decision;
        // Precedence DFAs are associated with the special precedence decision created for left-recursive rules which
        // evaluate their alternatives using a precedence hierarchy. When such a decision is encountered, we mark this
        // DFA instance as a precedence DFA and initialize the initial states s0 and s0full to special DFAState
        // instances which use outgoing edges to link to the actual start state used for each precedence level.
        let isPrecedenceDfa = false;
        if (atnStartState instanceof StarLoopEntryState_1.StarLoopEntryState) {
            if (atnStartState.precedenceRuleDecision) {
                isPrecedenceDfa = true;
                this.s0 = new DFAState_1.DFAState(new ATNConfigSet_1.ATNConfigSet());
                this.s0full = new DFAState_1.DFAState(new ATNConfigSet_1.ATNConfigSet());
            }
        }
        this.precedenceDfa = isPrecedenceDfa;
    }
    /**
     * Gets whether this DFA is a precedence DFA. Precedence DFAs use a special
     * start state {@link #s0} which is not stored in {@link #states}. The
     * {@link DFAState#edges} array for this start state contains outgoing edges
     * supplying individual start states corresponding to specific precedence
     * values.
     *
     * @returns `true` if this is a precedence DFA; otherwise,
     * `false`.
     * @see Parser.precedence
     */
    get isPrecedenceDfa() {
        return this.precedenceDfa;
    }
    /**
     * Get the start state for a specific precedence value.
     *
     * @param precedence The current precedence.
     * @returns The start state corresponding to the specified precedence, or
     * `undefined` if no start state exists for the specified precedence.
     *
     * @ if this is not a precedence DFA.
     * @see `isPrecedenceDfa`
     */
    getPrecedenceStartState(precedence, fullContext) {
        if (!this.isPrecedenceDfa) {
            throw new Error("Only precedence DFAs may contain a precedence start state.");
        }
        // s0 and s0full are never null for a precedence DFA
        if (fullContext) {
            return this.s0full.getTarget(precedence);
        }
        else {
            return this.s0.getTarget(precedence);
        }
    }
    /**
     * Set the start state for a specific precedence value.
     *
     * @param precedence The current precedence.
     * @param startState The start state corresponding to the specified
     * precedence.
     *
     * @ if this is not a precedence DFA.
     * @see `isPrecedenceDfa`
     */
    setPrecedenceStartState(precedence, fullContext, startState) {
        if (!this.isPrecedenceDfa) {
            throw new Error("Only precedence DFAs may contain a precedence start state.");
        }
        if (precedence < 0) {
            return;
        }
        if (fullContext) {
            // s0full is never null for a precedence DFA
            this.s0full.setTarget(precedence, startState);
        }
        else {
            // s0 is never null for a precedence DFA
            this.s0.setTarget(precedence, startState);
        }
    }
    get isEmpty() {
        if (this.isPrecedenceDfa) {
            // s0 and s0full are never null for a precedence DFA
            return this.s0.getEdgeMap().size === 0 && this.s0full.getEdgeMap().size === 0;
        }
        return this.s0 == null && this.s0full == null;
    }
    get isContextSensitive() {
        if (this.isPrecedenceDfa) {
            // s0full is never null for a precedence DFA
            return this.s0full.getEdgeMap().size > 0;
        }
        return this.s0full != null;
    }
    addState(state) {
        state.stateNumber = this.nextStateNumber++;
        return this.states.getOrAdd(state);
    }
    toString(vocabulary, ruleNames) {
        if (!vocabulary) {
            vocabulary = VocabularyImpl_1.VocabularyImpl.EMPTY_VOCABULARY;
        }
        if (!this.s0) {
            return "";
        }
        let serializer;
        if (ruleNames) {
            serializer = new DFASerializer_1.DFASerializer(this, vocabulary, ruleNames, this.atnStartState.atn);
        }
        else {
            serializer = new DFASerializer_1.DFASerializer(this, vocabulary);
        }
        return serializer.toString();
    }
    toLexerString() {
        if (!this.s0) {
            return "";
        }
        let serializer = new LexerDFASerializer_1.LexerDFASerializer(this);
        return serializer.toString();
    }
};
__decorate([
    Decorators.NotNull
], DFA.prototype, "states", void 0);
__decorate([
    Decorators.NotNull
], DFA.prototype, "atnStartState", void 0);
__decorate([
    Decorators.NotNull
], DFA.prototype, "atn", void 0);
DFA = __decorate([
    __param(0, Decorators.NotNull)
], DFA);
exports.DFA = DFA;

});

var BasicState_1 = createCommonjsModule(function (module, exports) {
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
exports.BasicState = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:27.8389930-07:00



/**
 *
 * @author Sam Harwell
 */
class BasicState extends ATNState_1.ATNState {
    get stateType() {
        return ATNStateType_1.ATNStateType.BASIC;
    }
}
__decorate([
    Decorators.Override
], BasicState.prototype, "stateType", null);
exports.BasicState = BasicState;

});

var InvalidState_1 = createCommonjsModule(function (module, exports) {
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
exports.InvalidState = void 0;



/**
 *
 * @author Sam Harwell
 */
class InvalidState extends BasicState_1.BasicState {
    get stateType() {
        return ATNStateType_1.ATNStateType.INVALID_TYPE;
    }
}
__decorate([
    Decorators.Override
], InvalidState.prototype, "stateType", null);
exports.InvalidState = InvalidState;

});

var SetTransition_1 = createCommonjsModule(function (module, exports) {
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
exports.SetTransition = void 0;




/** A transition containing a set of values. */
let SetTransition = class SetTransition extends Transition_1.Transition {
    // TODO (sam): should we really allow undefined here?
    constructor(target, set) {
        super(target);
        if (set == null) {
            set = IntervalSet_1.IntervalSet.of(Token_1.Token.INVALID_TYPE);
        }
        this.set = set;
    }
    get serializationType() {
        return 7 /* SET */;
    }
    get label() {
        return this.set;
    }
    matches(symbol, minVocabSymbol, maxVocabSymbol) {
        return this.set.contains(symbol);
    }
    toString() {
        return this.set.toString();
    }
};
__decorate([
    Decorators.NotNull
], SetTransition.prototype, "set", void 0);
__decorate([
    Decorators.Override
], SetTransition.prototype, "serializationType", null);
__decorate([
    Decorators.Override,
    Decorators.NotNull
], SetTransition.prototype, "label", null);
__decorate([
    Decorators.Override
], SetTransition.prototype, "matches", null);
__decorate([
    Decorators.Override,
    Decorators.NotNull
], SetTransition.prototype, "toString", null);
SetTransition = __decorate([
    __param(0, Decorators.NotNull), __param(1, Decorators.Nullable)
], SetTransition);
exports.SetTransition = SetTransition;

});

var NotSetTransition_1 = createCommonjsModule(function (module, exports) {
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
exports.NotSetTransition = void 0;


let NotSetTransition = class NotSetTransition extends SetTransition_1.SetTransition {
    constructor(target, set) {
        super(target, set);
    }
    get serializationType() {
        return 8 /* NOT_SET */;
    }
    matches(symbol, minVocabSymbol, maxVocabSymbol) {
        return symbol >= minVocabSymbol
            && symbol <= maxVocabSymbol
            && !super.matches(symbol, minVocabSymbol, maxVocabSymbol);
    }
    toString() {
        return "~" + super.toString();
    }
};
__decorate([
    Decorators.Override
], NotSetTransition.prototype, "serializationType", null);
__decorate([
    Decorators.Override
], NotSetTransition.prototype, "matches", null);
__decorate([
    Decorators.Override
], NotSetTransition.prototype, "toString", null);
NotSetTransition = __decorate([
    __param(0, Decorators.NotNull), __param(1, Decorators.Nullable)
], NotSetTransition);
exports.NotSetTransition = NotSetTransition;

});

var RuleStopState_1 = createCommonjsModule(function (module, exports) {
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
exports.RuleStopState = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:36.7513856-07:00



/** The last node in the ATN for a rule, unless that rule is the start symbol.
 *  In that case, there is one transition to EOF. Later, we might encode
 *  references to all calls to this rule to compute FOLLOW sets for
 *  error handling.
 */
class RuleStopState extends ATNState_1.ATNState {
    get nonStopStateNumber() {
        return -1;
    }
    get stateType() {
        return ATNStateType_1.ATNStateType.RULE_STOP;
    }
}
__decorate([
    Decorators.Override
], RuleStopState.prototype, "nonStopStateNumber", null);
__decorate([
    Decorators.Override
], RuleStopState.prototype, "stateType", null);
exports.RuleStopState = RuleStopState;

});

var RuleTransition_1 = createCommonjsModule(function (module, exports) {
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
exports.RuleTransition = void 0;


/** */
let RuleTransition = class RuleTransition extends Transition_1.Transition {
    constructor(ruleStart, ruleIndex, precedence, followState) {
        super(ruleStart);
        this.tailCall = false;
        this.optimizedTailCall = false;
        this.ruleIndex = ruleIndex;
        this.precedence = precedence;
        this.followState = followState;
    }
    get serializationType() {
        return 3 /* RULE */;
    }
    get isEpsilon() {
        return true;
    }
    matches(symbol, minVocabSymbol, maxVocabSymbol) {
        return false;
    }
};
__decorate([
    Decorators.NotNull
], RuleTransition.prototype, "followState", void 0);
__decorate([
    Decorators.Override
], RuleTransition.prototype, "serializationType", null);
__decorate([
    Decorators.Override
], RuleTransition.prototype, "isEpsilon", null);
__decorate([
    Decorators.Override
], RuleTransition.prototype, "matches", null);
RuleTransition = __decorate([
    __param(0, Decorators.NotNull), __param(3, Decorators.NotNull)
], RuleTransition);
exports.RuleTransition = RuleTransition;

});

var WildcardTransition_1 = createCommonjsModule(function (module, exports) {
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
exports.WildcardTransition = void 0;


let WildcardTransition = class WildcardTransition extends Transition_1.Transition {
    constructor(target) {
        super(target);
    }
    get serializationType() {
        return 9 /* WILDCARD */;
    }
    matches(symbol, minVocabSymbol, maxVocabSymbol) {
        return symbol >= minVocabSymbol && symbol <= maxVocabSymbol;
    }
    toString() {
        return ".";
    }
};
__decorate([
    Decorators.Override
], WildcardTransition.prototype, "serializationType", null);
__decorate([
    Decorators.Override
], WildcardTransition.prototype, "matches", null);
__decorate([
    Decorators.Override,
    Decorators.NotNull
], WildcardTransition.prototype, "toString", null);
WildcardTransition = __decorate([
    __param(0, Decorators.NotNull)
], WildcardTransition);
exports.WildcardTransition = WildcardTransition;

});

var LL1Analyzer_1 = createCommonjsModule(function (module, exports) {
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
exports.LL1Analyzer = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:30.4445360-07:00













let LL1Analyzer = class LL1Analyzer {
    constructor(atn) { this.atn = atn; }
    /**
     * Calculates the SLL(1) expected lookahead set for each outgoing transition
     * of an {@link ATNState}. The returned array has one element for each
     * outgoing transition in `s`. If the closure from transition
     * *i* leads to a semantic predicate before matching a symbol, the
     * element at index *i* of the result will be `undefined`.
     *
     * @param s the ATN state
     * @returns the expected symbols for each outgoing transition of `s`.
     */
    getDecisionLookahead(s) {
        //		System.out.println("LOOK("+s.stateNumber+")");
        if (s == null) {
            return undefined;
        }
        let look = new Array(s.numberOfTransitions);
        for (let alt = 0; alt < s.numberOfTransitions; alt++) {
            let current = new IntervalSet_1.IntervalSet();
            look[alt] = current;
            let lookBusy = new Array2DHashSet_1.Array2DHashSet(ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE);
            let seeThruPreds = false; // fail to get lookahead upon pred
            this._LOOK(s.transition(alt).target, undefined, PredictionContext_1.PredictionContext.EMPTY_LOCAL, current, lookBusy, new BitSet_1.BitSet(), seeThruPreds, false);
            // Wipe out lookahead for this alternative if we found nothing
            // or we had a predicate when we !seeThruPreds
            if (current.size === 0 || current.contains(LL1Analyzer.HIT_PRED)) {
                current = undefined;
                look[alt] = current;
            }
        }
        return look;
    }
    LOOK(s, ctx, stopState) {
        if (stopState === undefined) {
            if (s.atn == null) {
                throw new Error("Illegal state");
            }
            stopState = s.atn.ruleToStopState[s.ruleIndex];
        }
        else if (stopState === null) {
            // This is an explicit request to pass undefined as the stopState to _LOOK. Used to distinguish an overload
            // from the method which simply omits the stopState parameter.
            stopState = undefined;
        }
        let r = new IntervalSet_1.IntervalSet();
        let seeThruPreds = true; // ignore preds; get all lookahead
        let addEOF = true;
        this._LOOK(s, stopState, ctx, r, new Array2DHashSet_1.Array2DHashSet(), new BitSet_1.BitSet(), seeThruPreds, addEOF);
        return r;
    }
    /**
     * Compute set of tokens that can follow `s` in the ATN in the
     * specified `ctx`.
     * <p/>
     * If `ctx` is {@link PredictionContext#EMPTY_LOCAL} and
     * `stopState` or the end of the rule containing `s` is reached,
     * {@link Token#EPSILON} is added to the result set. If `ctx` is not
     * {@link PredictionContext#EMPTY_LOCAL} and `addEOF` is `true`
     * and `stopState` or the end of the outermost rule is reached,
     * {@link Token#EOF} is added to the result set.
     *
     * @param s the ATN state.
     * @param stopState the ATN state to stop at. This can be a
     * {@link BlockEndState} to detect epsilon paths through a closure.
     * @param ctx The outer context, or {@link PredictionContext#EMPTY_LOCAL} if
     * the outer context should not be used.
     * @param look The result lookahead set.
     * @param lookBusy A set used for preventing epsilon closures in the ATN
     * from causing a stack overflow. Outside code should pass
     * `new HashSet<ATNConfig>` for this argument.
     * @param calledRuleStack A set used for preventing left recursion in the
     * ATN from causing a stack overflow. Outside code should pass
     * `new BitSet()` for this argument.
     * @param seeThruPreds `true` to true semantic predicates as
     * implicitly `true` and "see through them", otherwise `false`
     * to treat semantic predicates as opaque and add {@link #HIT_PRED} to the
     * result if one is encountered.
     * @param addEOF Add {@link Token#EOF} to the result if the end of the
     * outermost context is reached. This parameter has no effect if `ctx`
     * is {@link PredictionContext#EMPTY_LOCAL}.
     */
    _LOOK(s, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF) {
        //		System.out.println("_LOOK("+s.stateNumber+", ctx="+ctx);
        let c = ATNConfig_1.ATNConfig.create(s, 0, ctx);
        if (!lookBusy.add(c)) {
            return;
        }
        if (s === stopState) {
            if (PredictionContext_1.PredictionContext.isEmptyLocal(ctx)) {
                look.add(Token_1.Token.EPSILON);
                return;
            }
            else if (ctx.isEmpty) {
                if (addEOF) {
                    look.add(Token_1.Token.EOF);
                }
                return;
            }
        }
        if (s instanceof RuleStopState_1.RuleStopState) {
            if (ctx.isEmpty && !PredictionContext_1.PredictionContext.isEmptyLocal(ctx)) {
                if (addEOF) {
                    look.add(Token_1.Token.EOF);
                }
                return;
            }
            let removed = calledRuleStack.get(s.ruleIndex);
            try {
                calledRuleStack.clear(s.ruleIndex);
                for (let i = 0; i < ctx.size; i++) {
                    if (ctx.getReturnState(i) === PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY) {
                        continue;
                    }
                    let returnState = this.atn.states[ctx.getReturnState(i)];
                    //					System.out.println("popping back to "+retState);
                    this._LOOK(returnState, stopState, ctx.getParent(i), look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
                }
            }
            finally {
                if (removed) {
                    calledRuleStack.set(s.ruleIndex);
                }
            }
        }
        let n = s.numberOfTransitions;
        for (let i = 0; i < n; i++) {
            let t = s.transition(i);
            if (t instanceof RuleTransition_1.RuleTransition) {
                if (calledRuleStack.get(t.ruleIndex)) {
                    continue;
                }
                let newContext = ctx.getChild(t.followState.stateNumber);
                try {
                    calledRuleStack.set(t.ruleIndex);
                    this._LOOK(t.target, stopState, newContext, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
                }
                finally {
                    calledRuleStack.clear(t.ruleIndex);
                }
            }
            else if (t instanceof AbstractPredicateTransition_1.AbstractPredicateTransition) {
                if (seeThruPreds) {
                    this._LOOK(t.target, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
                }
                else {
                    look.add(LL1Analyzer.HIT_PRED);
                }
            }
            else if (t.isEpsilon) {
                this._LOOK(t.target, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            }
            else if (t instanceof WildcardTransition_1.WildcardTransition) {
                look.addAll(IntervalSet_1.IntervalSet.of(Token_1.Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType));
            }
            else {
                //				System.out.println("adding "+ t);
                let set = t.label;
                if (set != null) {
                    if (t instanceof NotSetTransition_1.NotSetTransition) {
                        set = set.complement(IntervalSet_1.IntervalSet.of(Token_1.Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType));
                    }
                    look.addAll(set);
                }
            }
        }
    }
};
/** Special value added to the lookahead sets to indicate that we hit
 *  a predicate during analysis if `seeThruPreds==false`.
 */
LL1Analyzer.HIT_PRED = Token_1.Token.INVALID_TYPE;
__decorate([
    Decorators.NotNull
], LL1Analyzer.prototype, "atn", void 0);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull), __param(1, Decorators.NotNull)
], LL1Analyzer.prototype, "LOOK", null);
__decorate([
    __param(0, Decorators.NotNull),
    __param(2, Decorators.NotNull),
    __param(3, Decorators.NotNull),
    __param(4, Decorators.NotNull),
    __param(5, Decorators.NotNull)
], LL1Analyzer.prototype, "_LOOK", null);
LL1Analyzer = __decorate([
    __param(0, Decorators.NotNull)
], LL1Analyzer);
exports.LL1Analyzer = LL1Analyzer;

});

var ATN_1 = createCommonjsModule(function (module, exports) {
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
exports.ATN = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:25.1063510-07:00










/** */
let ATN = class ATN {
    /** Used for runtime deserialization of ATNs from strings */
    constructor(grammarType, maxTokenType) {
        this.states = [];
        /** Each subrule/rule is a decision point and we must track them so we
         *  can go back later and build DFA predictors for them.  This includes
         *  all the rules, subrules, optional blocks, ()+, ()* etc...
         */
        this.decisionToState = [];
        this.modeNameToStartState = new Map();
        this.modeToStartState = [];
        this.contextCache = new Array2DHashMap_1.Array2DHashMap(ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE);
        this.decisionToDFA = [];
        this.modeToDFA = [];
        this.LL1Table = new Map();
        this.grammarType = grammarType;
        this.maxTokenType = maxTokenType;
    }
    clearDFA() {
        this.decisionToDFA = new Array(this.decisionToState.length);
        for (let i = 0; i < this.decisionToDFA.length; i++) {
            this.decisionToDFA[i] = new DFA_1.DFA(this.decisionToState[i], i);
        }
        this.modeToDFA = new Array(this.modeToStartState.length);
        for (let i = 0; i < this.modeToDFA.length; i++) {
            this.modeToDFA[i] = new DFA_1.DFA(this.modeToStartState[i]);
        }
        this.contextCache.clear();
        this.LL1Table.clear();
    }
    get contextCacheSize() {
        return this.contextCache.size;
    }
    getCachedContext(context) {
        return PredictionContext_1.PredictionContext.getCachedContext(context, this.contextCache, new PredictionContext_1.PredictionContext.IdentityHashMap());
    }
    getDecisionToDFA() {
        assert(this.decisionToDFA != null && this.decisionToDFA.length === this.decisionToState.length);
        return this.decisionToDFA;
    }
    nextTokens(s, ctx) {
        if (ctx) {
            let anal = new LL1Analyzer_1.LL1Analyzer(this);
            let next = anal.LOOK(s, ctx);
            return next;
        }
        else {
            if (s.nextTokenWithinRule) {
                return s.nextTokenWithinRule;
            }
            s.nextTokenWithinRule = this.nextTokens(s, PredictionContext_1.PredictionContext.EMPTY_LOCAL);
            s.nextTokenWithinRule.setReadonly(true);
            return s.nextTokenWithinRule;
        }
    }
    addState(state) {
        state.atn = this;
        state.stateNumber = this.states.length;
        this.states.push(state);
    }
    removeState(state) {
        // just replace the state, don't shift states in list
        let invalidState = new InvalidState_1.InvalidState();
        invalidState.atn = this;
        invalidState.stateNumber = state.stateNumber;
        this.states[state.stateNumber] = invalidState;
    }
    defineMode(name, s) {
        this.modeNameToStartState.set(name, s);
        this.modeToStartState.push(s);
        this.modeToDFA.push(new DFA_1.DFA(s));
        this.defineDecisionState(s);
    }
    defineDecisionState(s) {
        this.decisionToState.push(s);
        s.decision = this.decisionToState.length - 1;
        this.decisionToDFA.push(new DFA_1.DFA(s, s.decision));
        return s.decision;
    }
    getDecisionState(decision) {
        if (this.decisionToState.length > 0) {
            return this.decisionToState[decision];
        }
        return undefined;
    }
    get numberOfDecisions() {
        return this.decisionToState.length;
    }
    /**
     * Computes the set of input symbols which could follow ATN state number
     * `stateNumber` in the specified full `context`. This method
     * considers the complete parser context, but does not evaluate semantic
     * predicates (i.e. all predicates encountered during the calculation are
     * assumed true). If a path in the ATN exists from the starting state to the
     * {@link RuleStopState} of the outermost context without matching any
     * symbols, {@link Token#EOF} is added to the returned set.
     *
     * If `context` is `undefined`, it is treated as
     * {@link ParserRuleContext#EMPTY}.
     *
     * Note that this does NOT give you the set of all tokens that could
     * appear at a given token position in the input phrase.  In other words, it
     * does not answer:
     *
     * > Given a specific partial input phrase, return the set of all
     * > tokens that can follow the last token in the input phrase.
     *
     * The big difference is that with just the input, the parser could land
     * right in the middle of a lookahead decision. Getting all
     * *possible* tokens given a partial input stream is a separate
     * computation. See https://github.com/antlr/antlr4/issues/1428
     *
     * For this function, we are specifying an ATN state and call stack to
     * compute what token(s) can come next and specifically: outside of a
     * lookahead decision. That is what you want for error reporting and
     * recovery upon parse error.
     *
     * @param stateNumber the ATN state number
     * @param context the full parse context
     * @returns The set of potentially valid input symbols which could follow the
     * specified state in the specified context.
     * @ if the ATN does not contain a state with
     * number `stateNumber`
     */
    getExpectedTokens(stateNumber, context) {
        if (stateNumber < 0 || stateNumber >= this.states.length) {
            throw new RangeError("Invalid state number.");
        }
        let ctx = context;
        let s = this.states[stateNumber];
        let following = this.nextTokens(s);
        if (!following.contains(Token_1.Token.EPSILON)) {
            return following;
        }
        let expected = new IntervalSet_1.IntervalSet();
        expected.addAll(following);
        expected.remove(Token_1.Token.EPSILON);
        while (ctx != null && ctx.invokingState >= 0 && following.contains(Token_1.Token.EPSILON)) {
            let invokingState = this.states[ctx.invokingState];
            let rt = invokingState.transition(0);
            following = this.nextTokens(rt.followState);
            expected.addAll(following);
            expected.remove(Token_1.Token.EPSILON);
            ctx = ctx._parent;
        }
        if (following.contains(Token_1.Token.EPSILON)) {
            expected.add(Token_1.Token.EOF);
        }
        return expected;
    }
};
__decorate([
    Decorators.NotNull
], ATN.prototype, "states", void 0);
__decorate([
    Decorators.NotNull
], ATN.prototype, "decisionToState", void 0);
__decorate([
    Decorators.NotNull
], ATN.prototype, "modeNameToStartState", void 0);
__decorate([
    Decorators.NotNull
], ATN.prototype, "modeToStartState", void 0);
__decorate([
    Decorators.NotNull
], ATN.prototype, "decisionToDFA", void 0);
__decorate([
    Decorators.NotNull
], ATN.prototype, "modeToDFA", void 0);
__decorate([
    Decorators.NotNull
], ATN.prototype, "nextTokens", null);
__decorate([
    __param(0, Decorators.NotNull)
], ATN.prototype, "removeState", null);
__decorate([
    __param(0, Decorators.NotNull), __param(1, Decorators.NotNull)
], ATN.prototype, "defineMode", null);
__decorate([
    __param(0, Decorators.NotNull)
], ATN.prototype, "defineDecisionState", null);
__decorate([
    Decorators.NotNull
], ATN.prototype, "getExpectedTokens", null);
ATN = __decorate([
    __param(0, Decorators.NotNull)
], ATN);
exports.ATN = ATN;
(function (ATN) {
    ATN.INVALID_ALT_NUMBER = 0;
})(ATN = exports.ATN || (exports.ATN = {}));
exports.ATN = ATN;

});

var LexerIndexedCustomAction_1 = createCommonjsModule(function (module, exports) {
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
exports.LexerIndexedCustomAction = void 0;


/**
 * This implementation of {@link LexerAction} is used for tracking input offsets
 * for position-dependent actions within a {@link LexerActionExecutor}.
 *
 * This action is not serialized as part of the ATN, and is only required for
 * position-dependent lexer actions which appear at a location other than the
 * end of a rule. For more information about DFA optimizations employed for
 * lexer actions, see {@link LexerActionExecutor#append} and
 * {@link LexerActionExecutor#fixOffsetBeforeMatch}.
 *
 * @author Sam Harwell
 * @since 4.2
 */
let LexerIndexedCustomAction = class LexerIndexedCustomAction {
    /**
     * Constructs a new indexed custom action by associating a character offset
     * with a {@link LexerAction}.
     *
     * Note: This class is only required for lexer actions for which
     * {@link LexerAction#isPositionDependent} returns `true`.
     *
     * @param offset The offset into the input {@link CharStream}, relative to
     * the token start index, at which the specified lexer action should be
     * executed.
     * @param action The lexer action to execute at a particular offset in the
     * input {@link CharStream}.
     */
    constructor(offset, action) {
        this._offset = offset;
        this._action = action;
    }
    /**
     * Gets the location in the input {@link CharStream} at which the lexer
     * action should be executed. The value is interpreted as an offset relative
     * to the token start index.
     *
     * @returns The location in the input {@link CharStream} at which the lexer
     * action should be executed.
     */
    get offset() {
        return this._offset;
    }
    /**
     * Gets the lexer action to execute.
     *
     * @returns A {@link LexerAction} object which executes the lexer action.
     */
    get action() {
        return this._action;
    }
    /**
     * {@inheritDoc}
     *
     * @returns This method returns the result of calling {@link #getActionType}
     * on the {@link LexerAction} returned by {@link #getAction}.
     */
    get actionType() {
        return this._action.actionType;
    }
    /**
     * {@inheritDoc}
     * @returns This method returns `true`.
     */
    get isPositionDependent() {
        return true;
    }
    /**
     * {@inheritDoc}
     *
     * This method calls {@link #execute} on the result of {@link #getAction}
     * using the provided `lexer`.
     */
    execute(lexer) {
        // assume the input stream position was properly set by the calling code
        this._action.execute(lexer);
    }
    hashCode() {
        let hash = MurmurHash_1.MurmurHash.initialize();
        hash = MurmurHash_1.MurmurHash.update(hash, this._offset);
        hash = MurmurHash_1.MurmurHash.update(hash, this._action);
        return MurmurHash_1.MurmurHash.finish(hash, 2);
    }
    equals(obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof LexerIndexedCustomAction)) {
            return false;
        }
        return this._offset === obj._offset
            && this._action.equals(obj._action);
    }
};
__decorate([
    Decorators.NotNull
], LexerIndexedCustomAction.prototype, "action", null);
__decorate([
    Decorators.Override
], LexerIndexedCustomAction.prototype, "actionType", null);
__decorate([
    Decorators.Override
], LexerIndexedCustomAction.prototype, "isPositionDependent", null);
__decorate([
    Decorators.Override
], LexerIndexedCustomAction.prototype, "execute", null);
__decorate([
    Decorators.Override
], LexerIndexedCustomAction.prototype, "hashCode", null);
__decorate([
    Decorators.Override
], LexerIndexedCustomAction.prototype, "equals", null);
LexerIndexedCustomAction = __decorate([
    __param(1, Decorators.NotNull)
], LexerIndexedCustomAction);
exports.LexerIndexedCustomAction = LexerIndexedCustomAction;

});

var LexerActionExecutor_1 = createCommonjsModule(function (module, exports) {
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
exports.LexerActionExecutor = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:28.8810453-07:00




/**
 * Represents an executor for a sequence of lexer actions which traversed during
 * the matching operation of a lexer rule (token).
 *
 * The executor tracks position information for position-dependent lexer actions
 * efficiently, ensuring that actions appearing only at the end of the rule do
 * not cause bloating of the {@link DFA} created for the lexer.
 *
 * @author Sam Harwell
 * @since 4.2
 */
let LexerActionExecutor = class LexerActionExecutor {
    /**
     * Constructs an executor for a sequence of {@link LexerAction} actions.
     * @param lexerActions The lexer actions to execute.
     */
    constructor(lexerActions) {
        this._lexerActions = lexerActions;
        let hash = MurmurHash_1.MurmurHash.initialize();
        for (let lexerAction of lexerActions) {
            hash = MurmurHash_1.MurmurHash.update(hash, lexerAction);
        }
        this.cachedHashCode = MurmurHash_1.MurmurHash.finish(hash, lexerActions.length);
    }
    /**
     * Creates a {@link LexerActionExecutor} which executes the actions for
     * the input `lexerActionExecutor` followed by a specified
     * `lexerAction`.
     *
     * @param lexerActionExecutor The executor for actions already traversed by
     * the lexer while matching a token within a particular
     * {@link ATNConfig}. If this is `undefined`, the method behaves as though
     * it were an empty executor.
     * @param lexerAction The lexer action to execute after the actions
     * specified in `lexerActionExecutor`.
     *
     * @returns A {@link LexerActionExecutor} for executing the combine actions
     * of `lexerActionExecutor` and `lexerAction`.
     */
    static append(lexerActionExecutor, lexerAction) {
        if (!lexerActionExecutor) {
            return new LexerActionExecutor([lexerAction]);
        }
        let lexerActions = lexerActionExecutor._lexerActions.slice(0);
        lexerActions.push(lexerAction);
        return new LexerActionExecutor(lexerActions);
    }
    /**
     * Creates a {@link LexerActionExecutor} which encodes the current offset
     * for position-dependent lexer actions.
     *
     * Normally, when the executor encounters lexer actions where
     * {@link LexerAction#isPositionDependent} returns `true`, it calls
     * {@link IntStream#seek} on the input {@link CharStream} to set the input
     * position to the *end* of the current token. This behavior provides
     * for efficient DFA representation of lexer actions which appear at the end
     * of a lexer rule, even when the lexer rule matches a variable number of
     * characters.
     *
     * Prior to traversing a match transition in the ATN, the current offset
     * from the token start index is assigned to all position-dependent lexer
     * actions which have not already been assigned a fixed offset. By storing
     * the offsets relative to the token start index, the DFA representation of
     * lexer actions which appear in the middle of tokens remains efficient due
     * to sharing among tokens of the same length, regardless of their absolute
     * position in the input stream.
     *
     * If the current executor already has offsets assigned to all
     * position-dependent lexer actions, the method returns `this`.
     *
     * @param offset The current offset to assign to all position-dependent
     * lexer actions which do not already have offsets assigned.
     *
     * @returns A {@link LexerActionExecutor} which stores input stream offsets
     * for all position-dependent lexer actions.
     */
    fixOffsetBeforeMatch(offset) {
        let updatedLexerActions;
        for (let i = 0; i < this._lexerActions.length; i++) {
            if (this._lexerActions[i].isPositionDependent && !(this._lexerActions[i] instanceof LexerIndexedCustomAction_1.LexerIndexedCustomAction)) {
                if (!updatedLexerActions) {
                    updatedLexerActions = this._lexerActions.slice(0);
                }
                updatedLexerActions[i] = new LexerIndexedCustomAction_1.LexerIndexedCustomAction(offset, this._lexerActions[i]);
            }
        }
        if (!updatedLexerActions) {
            return this;
        }
        return new LexerActionExecutor(updatedLexerActions);
    }
    /**
     * Gets the lexer actions to be executed by this executor.
     * @returns The lexer actions to be executed by this executor.
     */
    get lexerActions() {
        return this._lexerActions;
    }
    /**
     * Execute the actions encapsulated by this executor within the context of a
     * particular {@link Lexer}.
     *
     * This method calls {@link IntStream#seek} to set the position of the
     * `input` {@link CharStream} prior to calling
     * {@link LexerAction#execute} on a position-dependent action. Before the
     * method returns, the input position will be restored to the same position
     * it was in when the method was invoked.
     *
     * @param lexer The lexer instance.
     * @param input The input stream which is the source for the current token.
     * When this method is called, the current {@link IntStream#index} for
     * `input` should be the start of the following token, i.e. 1
     * character past the end of the current token.
     * @param startIndex The token start index. This value may be passed to
     * {@link IntStream#seek} to set the `input` position to the beginning
     * of the token.
     */
    execute(lexer, input, startIndex) {
        let requiresSeek = false;
        let stopIndex = input.index;
        try {
            for (let lexerAction of this._lexerActions) {
                if (lexerAction instanceof LexerIndexedCustomAction_1.LexerIndexedCustomAction) {
                    let offset = lexerAction.offset;
                    input.seek(startIndex + offset);
                    lexerAction = lexerAction.action;
                    requiresSeek = (startIndex + offset) !== stopIndex;
                }
                else if (lexerAction.isPositionDependent) {
                    input.seek(stopIndex);
                    requiresSeek = false;
                }
                lexerAction.execute(lexer);
            }
        }
        finally {
            if (requiresSeek) {
                input.seek(stopIndex);
            }
        }
    }
    hashCode() {
        return this.cachedHashCode;
    }
    equals(obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof LexerActionExecutor)) {
            return false;
        }
        return this.cachedHashCode === obj.cachedHashCode
            && ArrayEqualityComparator_1.ArrayEqualityComparator.INSTANCE.equals(this._lexerActions, obj._lexerActions);
    }
};
__decorate([
    Decorators.NotNull
], LexerActionExecutor.prototype, "_lexerActions", void 0);
__decorate([
    Decorators.NotNull
], LexerActionExecutor.prototype, "lexerActions", null);
__decorate([
    __param(0, Decorators.NotNull)
], LexerActionExecutor.prototype, "execute", null);
__decorate([
    Decorators.Override
], LexerActionExecutor.prototype, "hashCode", null);
__decorate([
    Decorators.Override
], LexerActionExecutor.prototype, "equals", null);
__decorate([
    Decorators.NotNull,
    __param(1, Decorators.NotNull)
], LexerActionExecutor, "append", null);
LexerActionExecutor = __decorate([
    __param(0, Decorators.NotNull)
], LexerActionExecutor);
exports.LexerActionExecutor = LexerActionExecutor;

});

var LexerNoViableAltException_1 = createCommonjsModule(function (module, exports) {
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
exports.LexerNoViableAltException = void 0;




let LexerNoViableAltException = class LexerNoViableAltException extends RecognitionException_1.RecognitionException {
    constructor(lexer, input, startIndex, deadEndConfigs) {
        super(lexer, input);
        this._startIndex = startIndex;
        this._deadEndConfigs = deadEndConfigs;
    }
    get startIndex() {
        return this._startIndex;
    }
    get deadEndConfigs() {
        return this._deadEndConfigs;
    }
    get inputStream() {
        return super.inputStream;
    }
    toString() {
        let symbol = "";
        if (this._startIndex >= 0 && this._startIndex < this.inputStream.size) {
            symbol = this.inputStream.getText(Interval_1.Interval.of(this._startIndex, this._startIndex));
            symbol = Utils.escapeWhitespace(symbol, false);
        }
        // return String.format(Locale.getDefault(), "%s('%s')", LexerNoViableAltException.class.getSimpleName(), symbol);
        return `LexerNoViableAltException('${symbol}')`;
    }
};
__decorate([
    Decorators.Override
], LexerNoViableAltException.prototype, "inputStream", null);
__decorate([
    Decorators.Override
], LexerNoViableAltException.prototype, "toString", null);
LexerNoViableAltException = __decorate([
    __param(1, Decorators.NotNull)
], LexerNoViableAltException);
exports.LexerNoViableAltException = LexerNoViableAltException;

});

var OrderedATNConfigSet_1 = createCommonjsModule(function (module, exports) {
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
exports.OrderedATNConfigSet = void 0;


/**
 *
 * @author Sam Harwell
 */
class OrderedATNConfigSet extends ATNConfigSet_1.ATNConfigSet {
    constructor(set, readonly) {
        if (set != null && readonly != null) {
            super(set, readonly);
        }
        else {
            super();
        }
    }
    clone(readonly) {
        let copy = new OrderedATNConfigSet(this, readonly);
        if (!readonly && this.isReadOnly) {
            copy.addAll(this);
        }
        return copy;
    }
    getKey(e) {
        // This is a specially crafted key to ensure configurations are only merged if they are equal
        return { state: 0, alt: e.hashCode() };
    }
    canMerge(left, leftKey, right) {
        return left.equals(right);
    }
}
__decorate([
    Decorators.Override
], OrderedATNConfigSet.prototype, "clone", null);
__decorate([
    Decorators.Override
], OrderedATNConfigSet.prototype, "getKey", null);
__decorate([
    Decorators.Override
], OrderedATNConfigSet.prototype, "canMerge", null);
exports.OrderedATNConfigSet = OrderedATNConfigSet;

});

var LexerATNSimulator_1 = createCommonjsModule(function (module, exports) {
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
exports.LexerATNSimulator = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:29.1083066-07:00

















/** "dup" of ParserInterpreter */
let LexerATNSimulator = class LexerATNSimulator extends ATNSimulator_1.ATNSimulator {
    constructor(atn, recog) {
        super(atn);
        this.optimize_tail_calls = true;
        /** The current token's starting index into the character stream.
         *  Shared across DFA to ATN simulation in case the ATN fails and the
         *  DFA did not have a previous accept state. In this case, we use the
         *  ATN-generated exception object.
         */
        this.startIndex = -1;
        /** line number 1..n within the input */
        this._line = 1;
        /** The index of the character relative to the beginning of the line 0..n-1 */
        this._charPositionInLine = 0;
        this.mode = Lexer_1.Lexer.DEFAULT_MODE;
        /** Used during DFA/ATN exec to record the most recent accept configuration info */
        this.prevAccept = new LexerATNSimulator.SimState();
        this.recog = recog;
    }
    copyState(simulator) {
        this._charPositionInLine = simulator.charPositionInLine;
        this._line = simulator._line;
        this.mode = simulator.mode;
        this.startIndex = simulator.startIndex;
    }
    match(input, mode) {
        this.mode = mode;
        let mark = input.mark();
        try {
            this.startIndex = input.index;
            this.prevAccept.reset();
            let s0 = this.atn.modeToDFA[mode].s0;
            if (s0 == null) {
                return this.matchATN(input);
            }
            else {
                return this.execATN(input, s0);
            }
        }
        finally {
            input.release(mark);
        }
    }
    reset() {
        this.prevAccept.reset();
        this.startIndex = -1;
        this._line = 1;
        this._charPositionInLine = 0;
        this.mode = Lexer_1.Lexer.DEFAULT_MODE;
    }
    matchATN(input) {
        let startState = this.atn.modeToStartState[this.mode];
        if (LexerATNSimulator.debug) {
            console.log(`matchATN mode ${this.mode} start: ${startState}`);
        }
        let old_mode = this.mode;
        let s0_closure = this.computeStartState(input, startState);
        let suppressEdge = s0_closure.hasSemanticContext;
        if (suppressEdge) {
            s0_closure.hasSemanticContext = false;
        }
        let next = this.addDFAState(s0_closure);
        if (!suppressEdge) {
            let dfa = this.atn.modeToDFA[this.mode];
            if (!dfa.s0) {
                dfa.s0 = next;
            }
            else {
                next = dfa.s0;
            }
        }
        let predict = this.execATN(input, next);
        if (LexerATNSimulator.debug) {
            console.log(`DFA after matchATN: ${this.atn.modeToDFA[old_mode].toLexerString()}`);
        }
        return predict;
    }
    execATN(input, ds0) {
        // console.log("enter exec index "+input.index+" from "+ds0.configs);
        if (LexerATNSimulator.debug) {
            console.log(`start state closure=${ds0.configs}`);
        }
        if (ds0.isAcceptState) {
            // allow zero-length tokens
            this.captureSimState(this.prevAccept, input, ds0);
        }
        let t = input.LA(1);
        // @NotNull
        let s = ds0; // s is current/from DFA state
        while (true) { // while more work
            if (LexerATNSimulator.debug) {
                console.log(`execATN loop starting closure: ${s.configs}`);
            }
            // As we move src->trg, src->trg, we keep track of the previous trg to
            // avoid looking up the DFA state again, which is expensive.
            // If the previous target was already part of the DFA, we might
            // be able to avoid doing a reach operation upon t. If s!=null,
            // it means that semantic predicates didn't prevent us from
            // creating a DFA state. Once we know s!=null, we check to see if
            // the DFA state has an edge already for t. If so, we can just reuse
            // it's configuration set; there's no point in re-computing it.
            // This is kind of like doing DFA simulation within the ATN
            // simulation because DFA simulation is really just a way to avoid
            // computing reach/closure sets. Technically, once we know that
            // we have a previously added DFA state, we could jump over to
            // the DFA simulator. But, that would mean popping back and forth
            // a lot and making things more complicated algorithmically.
            // This optimization makes a lot of sense for loops within DFA.
            // A character will take us back to an existing DFA state
            // that already has lots of edges out of it. e.g., .* in comments.
            let target = this.getExistingTargetState(s, t);
            if (target == null) {
                target = this.computeTargetState(input, s, t);
            }
            if (target === ATNSimulator_1.ATNSimulator.ERROR) {
                break;
            }
            // If this is a consumable input element, make sure to consume before
            // capturing the accept state so the input index, line, and char
            // position accurately reflect the state of the interpreter at the
            // end of the token.
            if (t !== IntStream_1.IntStream.EOF) {
                this.consume(input);
            }
            if (target.isAcceptState) {
                this.captureSimState(this.prevAccept, input, target);
                if (t === IntStream_1.IntStream.EOF) {
                    break;
                }
            }
            t = input.LA(1);
            s = target; // flip; current DFA target becomes new src/from state
        }
        return this.failOrAccept(this.prevAccept, input, s.configs, t);
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
        let target = s.getTarget(t);
        if (LexerATNSimulator.debug && target != null) {
            console.log("reuse state " + s.stateNumber +
                " edge to " + target.stateNumber);
        }
        return target;
    }
    /**
     * Compute a target state for an edge in the DFA, and attempt to add the
     * computed state and corresponding edge to the DFA.
     *
     * @param input The input stream
     * @param s The current DFA state
     * @param t The next input symbol
     *
     * @returns The computed target DFA state for the given input symbol
     * `t`. If `t` does not lead to a valid DFA state, this method
     * returns {@link #ERROR}.
     */
    computeTargetState(input, s, t) {
        let reach = new OrderedATNConfigSet_1.OrderedATNConfigSet();
        // if we don't find an existing DFA state
        // Fill reach starting from closure, following t transitions
        this.getReachableConfigSet(input, s.configs, reach, t);
        if (reach.isEmpty) { // we got nowhere on t from s
            if (!reach.hasSemanticContext) {
                // we got nowhere on t, don't throw out this knowledge; it'd
                // cause a failover from DFA later.
                this.addDFAEdge(s, t, ATNSimulator_1.ATNSimulator.ERROR);
            }
            // stop when we can't match any more char
            return ATNSimulator_1.ATNSimulator.ERROR;
        }
        // Add an edge from s to target DFA found/created for reach
        return this.addDFAEdge(s, t, reach);
    }
    failOrAccept(prevAccept, input, reach, t) {
        if (prevAccept.dfaState != null) {
            let lexerActionExecutor = prevAccept.dfaState.lexerActionExecutor;
            this.accept(input, lexerActionExecutor, this.startIndex, prevAccept.index, prevAccept.line, prevAccept.charPos);
            return prevAccept.dfaState.prediction;
        }
        else {
            // if no accept and EOF is first char, return EOF
            if (t === IntStream_1.IntStream.EOF && input.index === this.startIndex) {
                return Token_1.Token.EOF;
            }
            throw new LexerNoViableAltException_1.LexerNoViableAltException(this.recog, input, this.startIndex, reach);
        }
    }
    /** Given a starting configuration set, figure out all ATN configurations
     *  we can reach upon input `t`. Parameter `reach` is a return
     *  parameter.
     */
    getReachableConfigSet(input, closure, reach, t) {
        // this is used to skip processing for configs which have a lower priority
        // than a config that already reached an accept state for the same rule
        let skipAlt = ATN_1.ATN.INVALID_ALT_NUMBER;
        for (let c of closure) {
            let currentAltReachedAcceptState = c.alt === skipAlt;
            if (currentAltReachedAcceptState && c.hasPassedThroughNonGreedyDecision) {
                continue;
            }
            if (LexerATNSimulator.debug) {
                console.log(`testing ${this.getTokenName(t)} at ${c.toString(this.recog, true)}`);
            }
            let n = c.state.numberOfOptimizedTransitions;
            for (let ti = 0; ti < n; ti++) { // for each optimized transition
                let trans = c.state.getOptimizedTransition(ti);
                let target = this.getReachableTarget(trans, t);
                if (target != null) {
                    let lexerActionExecutor = c.lexerActionExecutor;
                    let config;
                    if (lexerActionExecutor != null) {
                        lexerActionExecutor = lexerActionExecutor.fixOffsetBeforeMatch(input.index - this.startIndex);
                        config = c.transform(target, true, lexerActionExecutor);
                    }
                    else {
                        assert(c.lexerActionExecutor == null);
                        config = c.transform(target, true);
                    }
                    let treatEofAsEpsilon = t === IntStream_1.IntStream.EOF;
                    if (this.closure(input, config, reach, currentAltReachedAcceptState, true, treatEofAsEpsilon)) {
                        // any remaining configs for this alt have a lower priority than
                        // the one that just reached an accept state.
                        skipAlt = c.alt;
                        break;
                    }
                }
            }
        }
    }
    accept(input, lexerActionExecutor, startIndex, index, line, charPos) {
        if (LexerATNSimulator.debug) {
            console.log(`ACTION ${lexerActionExecutor}`);
        }
        // seek to after last char in token
        input.seek(index);
        this._line = line;
        this._charPositionInLine = charPos;
        if (lexerActionExecutor != null && this.recog != null) {
            lexerActionExecutor.execute(this.recog, input, startIndex);
        }
    }
    getReachableTarget(trans, t) {
        if (trans.matches(t, Lexer_1.Lexer.MIN_CHAR_VALUE, Lexer_1.Lexer.MAX_CHAR_VALUE)) {
            return trans.target;
        }
        return undefined;
    }
    computeStartState(input, p) {
        let initialContext = PredictionContext_1.PredictionContext.EMPTY_FULL;
        let configs = new OrderedATNConfigSet_1.OrderedATNConfigSet();
        for (let i = 0; i < p.numberOfTransitions; i++) {
            let target = p.transition(i).target;
            let c = ATNConfig_1.ATNConfig.create(target, i + 1, initialContext);
            this.closure(input, c, configs, false, false, false);
        }
        return configs;
    }
    /**
     * Since the alternatives within any lexer decision are ordered by
     * preference, this method stops pursuing the closure as soon as an accept
     * state is reached. After the first accept state is reached by depth-first
     * search from `config`, all other (potentially reachable) states for
     * this rule would have a lower priority.
     *
     * @returns `true` if an accept state is reached, otherwise
     * `false`.
     */
    closure(input, config, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon) {
        if (LexerATNSimulator.debug) {
            console.log("closure(" + config.toString(this.recog, true) + ")");
        }
        if (config.state instanceof RuleStopState_1.RuleStopState) {
            if (LexerATNSimulator.debug) {
                if (this.recog != null) {
                    console.log(`closure at ${this.recog.ruleNames[config.state.ruleIndex]} rule stop ${config}`);
                }
                else {
                    console.log(`closure at rule stop ${config}`);
                }
            }
            let context = config.context;
            if (context.isEmpty) {
                configs.add(config);
                return true;
            }
            else if (context.hasEmpty) {
                configs.add(config.transform(config.state, true, PredictionContext_1.PredictionContext.EMPTY_FULL));
                currentAltReachedAcceptState = true;
            }
            for (let i = 0; i < context.size; i++) {
                let returnStateNumber = context.getReturnState(i);
                if (returnStateNumber === PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY) {
                    continue;
                }
                let newContext = context.getParent(i); // "pop" return state
                let returnState = this.atn.states[returnStateNumber];
                let c = config.transform(returnState, false, newContext);
                currentAltReachedAcceptState = this.closure(input, c, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon);
            }
            return currentAltReachedAcceptState;
        }
        // optimization
        if (!config.state.onlyHasEpsilonTransitions) {
            if (!currentAltReachedAcceptState || !config.hasPassedThroughNonGreedyDecision) {
                configs.add(config);
            }
        }
        let p = config.state;
        for (let i = 0; i < p.numberOfOptimizedTransitions; i++) {
            let t = p.getOptimizedTransition(i);
            let c = this.getEpsilonTarget(input, config, t, configs, speculative, treatEofAsEpsilon);
            if (c != null) {
                currentAltReachedAcceptState = this.closure(input, c, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon);
            }
        }
        return currentAltReachedAcceptState;
    }
    // side-effect: can alter configs.hasSemanticContext
    getEpsilonTarget(input, config, t, configs, speculative, treatEofAsEpsilon) {
        let c;
        switch (t.serializationType) {
            case 3 /* RULE */:
                let ruleTransition = t;
                if (this.optimize_tail_calls && ruleTransition.optimizedTailCall && !config.context.hasEmpty) {
                    c = config.transform(t.target, true);
                }
                else {
                    let newContext = config.context.getChild(ruleTransition.followState.stateNumber);
                    c = config.transform(t.target, true, newContext);
                }
                break;
            case 10 /* PRECEDENCE */:
                throw new Error("Precedence predicates are not supported in lexers.");
            case 4 /* PREDICATE */:
                /*  Track traversing semantic predicates. If we traverse,
                    we cannot add a DFA state for this "reach" computation
                    because the DFA would not test the predicate again in the
                    future. Rather than creating collections of semantic predicates
                    like v3 and testing them on prediction, v4 will test them on the
                    fly all the time using the ATN not the DFA. This is slower but
                    semantically it's not used that often. One of the key elements to
                    this predicate mechanism is not adding DFA states that see
                    predicates immediately afterwards in the ATN. For example,
    
                    a : ID {p1}? | ID {p2}? ;
    
                    should create the start state for rule 'a' (to save start state
                    competition), but should not create target of ID state. The
                    collection of ATN states the following ID references includes
                    states reached by traversing predicates. Since this is when we
                    test them, we cannot cash the DFA state target of ID.
                */
                let pt = t;
                if (LexerATNSimulator.debug) {
                    console.log("EVAL rule " + pt.ruleIndex + ":" + pt.predIndex);
                }
                configs.hasSemanticContext = true;
                if (this.evaluatePredicate(input, pt.ruleIndex, pt.predIndex, speculative)) {
                    c = config.transform(t.target, true);
                }
                else {
                    c = undefined;
                }
                break;
            case 6 /* ACTION */:
                if (config.context.hasEmpty) {
                    // execute actions anywhere in the start rule for a token.
                    //
                    // TODO: if the entry rule is invoked recursively, some
                    // actions may be executed during the recursive call. The
                    // problem can appear when hasEmpty is true but
                    // isEmpty is false. In this case, the config needs to be
                    // split into two contexts - one with just the empty path
                    // and another with everything but the empty path.
                    // Unfortunately, the current algorithm does not allow
                    // getEpsilonTarget to return two configurations, so
                    // additional modifications are needed before we can support
                    // the split operation.
                    let lexerActionExecutor = LexerActionExecutor_1.LexerActionExecutor.append(config.lexerActionExecutor, this.atn.lexerActions[t.actionIndex]);
                    c = config.transform(t.target, true, lexerActionExecutor);
                    break;
                }
                else {
                    // ignore actions in referenced rules
                    c = config.transform(t.target, true);
                    break;
                }
            case 1 /* EPSILON */:
                c = config.transform(t.target, true);
                break;
            case 5 /* ATOM */:
            case 2 /* RANGE */:
            case 7 /* SET */:
                if (treatEofAsEpsilon) {
                    if (t.matches(IntStream_1.IntStream.EOF, Lexer_1.Lexer.MIN_CHAR_VALUE, Lexer_1.Lexer.MAX_CHAR_VALUE)) {
                        c = config.transform(t.target, false);
                        break;
                    }
                }
                c = undefined;
                break;
            default:
                c = undefined;
                break;
        }
        return c;
    }
    /**
     * Evaluate a predicate specified in the lexer.
     *
     * If `speculative` is `true`, this method was called before
     * {@link #consume} for the matched character. This method should call
     * {@link #consume} before evaluating the predicate to ensure position
     * sensitive values, including {@link Lexer#getText}, {@link Lexer#getLine},
     * and {@link Lexer#getCharPositionInLine}, properly reflect the current
     * lexer state. This method should restore `input` and the simulator
     * to the original state before returning (i.e. undo the actions made by the
     * call to {@link #consume}.
     *
     * @param input The input stream.
     * @param ruleIndex The rule containing the predicate.
     * @param predIndex The index of the predicate within the rule.
     * @param speculative `true` if the current index in `input` is
     * one character before the predicate's location.
     *
     * @returns `true` if the specified predicate evaluates to
     * `true`.
     */
    evaluatePredicate(input, ruleIndex, predIndex, speculative) {
        // assume true if no recognizer was provided
        if (this.recog == null) {
            return true;
        }
        if (!speculative) {
            return this.recog.sempred(undefined, ruleIndex, predIndex);
        }
        let savedCharPositionInLine = this._charPositionInLine;
        let savedLine = this._line;
        let index = input.index;
        let marker = input.mark();
        try {
            this.consume(input);
            return this.recog.sempred(undefined, ruleIndex, predIndex);
        }
        finally {
            this._charPositionInLine = savedCharPositionInLine;
            this._line = savedLine;
            input.seek(index);
            input.release(marker);
        }
    }
    captureSimState(settings, input, dfaState) {
        settings.index = input.index;
        settings.line = this._line;
        settings.charPos = this._charPositionInLine;
        settings.dfaState = dfaState;
    }
    addDFAEdge(p, t, q) {
        if (q instanceof ATNConfigSet_1.ATNConfigSet) {
            /* leading to this call, ATNConfigSet.hasSemanticContext is used as a
            * marker indicating dynamic predicate evaluation makes this edge
            * dependent on the specific input sequence, so the static edge in the
            * DFA should be omitted. The target DFAState is still created since
            * execATN has the ability to resynchronize with the DFA state cache
            * following the predicate evaluation step.
            *
            * TJP notes: next time through the DFA, we see a pred again and eval.
            * If that gets us to a previously created (but dangling) DFA
            * state, we can continue in pure DFA mode from there.
            */
            let suppressEdge = q.hasSemanticContext;
            if (suppressEdge) {
                q.hasSemanticContext = false;
            }
            // @NotNull
            let to = this.addDFAState(q);
            if (suppressEdge) {
                return to;
            }
            this.addDFAEdge(p, t, to);
            return to;
        }
        else {
            if (LexerATNSimulator.debug) {
                console.log("EDGE " + p + " -> " + q + " upon " + String.fromCharCode(t));
            }
            if (p != null) {
                p.setTarget(t, q);
            }
        }
    }
    /** Add a new DFA state if there isn't one with this set of
     * 	configurations already. This method also detects the first
     * 	configuration containing an ATN rule stop state. Later, when
     * 	traversing the DFA, we will know which rule to accept.
     */
    addDFAState(configs) {
        /* the lexer evaluates predicates on-the-fly; by this point configs
         * should not contain any configurations with unevaluated predicates.
         */
        assert(!configs.hasSemanticContext);
        let proposed = new DFAState_1.DFAState(configs);
        let existing = this.atn.modeToDFA[this.mode].states.get(proposed);
        if (existing != null) {
            return existing;
        }
        configs.optimizeConfigs(this);
        let newState = new DFAState_1.DFAState(configs.clone(true));
        let firstConfigWithRuleStopState;
        for (let c of configs) {
            if (c.state instanceof RuleStopState_1.RuleStopState) {
                firstConfigWithRuleStopState = c;
                break;
            }
        }
        if (firstConfigWithRuleStopState != null) {
            let prediction = this.atn.ruleToTokenType[firstConfigWithRuleStopState.state.ruleIndex];
            let lexerActionExecutor = firstConfigWithRuleStopState.lexerActionExecutor;
            newState.acceptStateInfo = new AcceptStateInfo_1.AcceptStateInfo(prediction, lexerActionExecutor);
        }
        return this.atn.modeToDFA[this.mode].addState(newState);
    }
    getDFA(mode) {
        return this.atn.modeToDFA[mode];
    }
    /** Get the text matched so far for the current token.
     */
    getText(input) {
        // index is first lookahead char, don't include.
        return input.getText(Interval_1.Interval.of(this.startIndex, input.index - 1));
    }
    get line() {
        return this._line;
    }
    set line(line) {
        this._line = line;
    }
    get charPositionInLine() {
        return this._charPositionInLine;
    }
    set charPositionInLine(charPositionInLine) {
        this._charPositionInLine = charPositionInLine;
    }
    consume(input) {
        let curChar = input.LA(1);
        if (curChar === "\n".charCodeAt(0)) {
            this._line++;
            this._charPositionInLine = 0;
        }
        else {
            this._charPositionInLine++;
        }
        input.consume();
    }
    getTokenName(t) {
        if (t === -1) {
            return "EOF";
        }
        //if ( atn.g!=null ) return atn.g.getTokenDisplayName(t);
        return "'" + String.fromCharCode(t) + "'";
    }
};
__decorate([
    Decorators.NotNull
], LexerATNSimulator.prototype, "prevAccept", void 0);
__decorate([
    __param(0, Decorators.NotNull)
], LexerATNSimulator.prototype, "copyState", null);
__decorate([
    __param(0, Decorators.NotNull)
], LexerATNSimulator.prototype, "match", null);
__decorate([
    Decorators.Override
], LexerATNSimulator.prototype, "reset", null);
__decorate([
    __param(0, Decorators.NotNull)
], LexerATNSimulator.prototype, "matchATN", null);
__decorate([
    __param(0, Decorators.NotNull), __param(1, Decorators.NotNull)
], LexerATNSimulator.prototype, "execATN", null);
__decorate([
    __param(0, Decorators.NotNull)
], LexerATNSimulator.prototype, "getExistingTargetState", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull), __param(1, Decorators.NotNull)
], LexerATNSimulator.prototype, "computeTargetState", null);
__decorate([
    __param(0, Decorators.NotNull), __param(1, Decorators.NotNull), __param(2, Decorators.NotNull)
], LexerATNSimulator.prototype, "getReachableConfigSet", null);
__decorate([
    __param(0, Decorators.NotNull)
], LexerATNSimulator.prototype, "accept", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
], LexerATNSimulator.prototype, "computeStartState", null);
__decorate([
    __param(0, Decorators.NotNull), __param(1, Decorators.NotNull), __param(2, Decorators.NotNull)
], LexerATNSimulator.prototype, "closure", null);
__decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(2, Decorators.NotNull),
    __param(3, Decorators.NotNull)
], LexerATNSimulator.prototype, "getEpsilonTarget", null);
__decorate([
    __param(0, Decorators.NotNull)
], LexerATNSimulator.prototype, "evaluatePredicate", null);
__decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(2, Decorators.NotNull)
], LexerATNSimulator.prototype, "captureSimState", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
], LexerATNSimulator.prototype, "addDFAState", null);
__decorate([
    Decorators.NotNull
], LexerATNSimulator.prototype, "getDFA", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
], LexerATNSimulator.prototype, "getText", null);
__decorate([
    __param(0, Decorators.NotNull)
], LexerATNSimulator.prototype, "consume", null);
__decorate([
    Decorators.NotNull
], LexerATNSimulator.prototype, "getTokenName", null);
LexerATNSimulator = __decorate([
    __param(0, Decorators.NotNull)
], LexerATNSimulator);
exports.LexerATNSimulator = LexerATNSimulator;
(function (LexerATNSimulator) {
    LexerATNSimulator.debug = false;
    LexerATNSimulator.dfa_debug = false;
    /** When we hit an accept state in either the DFA or the ATN, we
     *  have to notify the character stream to start buffering characters
     *  via {@link IntStream#mark} and record the current state. The current sim state
     *  includes the current index into the input, the current line,
     *  and current character position in that line. Note that the Lexer is
     *  tracking the starting line and characterization of the token. These
     *  variables track the "state" of the simulator when it hits an accept state.
     *
     *  We track these variables separately for the DFA and ATN simulation
     *  because the DFA simulation often has to fail over to the ATN
     *  simulation. If the ATN simulation fails, we need the DFA to fall
     *  back to its previously accepted state, if any. If the ATN succeeds,
     *  then the ATN does the accept and the DFA simulator that invoked it
     *  can simply return the predicted token type.
     */
    class SimState {
        constructor() {
            this.index = -1;
            this.line = 0;
            this.charPos = -1;
        }
        reset() {
            this.index = -1;
            this.line = 0;
            this.charPos = -1;
            this.dfaState = undefined;
        }
    }
    LexerATNSimulator.SimState = SimState;
})(LexerATNSimulator = exports.LexerATNSimulator || (exports.LexerATNSimulator = {}));
exports.LexerATNSimulator = LexerATNSimulator;

});

var Lexer_1 = createCommonjsModule(function (module, exports) {
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
exports.Lexer = void 0;









/** A lexer is recognizer that draws input symbols from a character stream.
 *  lexer grammars result in a subclass of this object. A Lexer object
 *  uses simplified match() and error recovery mechanisms in the interest
 *  of speed.
 */
class Lexer extends Recognizer_1.Recognizer {
    constructor(input) {
        super();
        /** How to create token objects */
        this._factory = CommonTokenFactory_1.CommonTokenFactory.DEFAULT;
        /** What character index in the stream did the current token start at?
         *  Needed, for example, to get the text for current token.  Set at
         *  the start of nextToken.
         */
        this._tokenStartCharIndex = -1;
        /** The line on which the first character of the token resides */
        this._tokenStartLine = 0;
        /** The character position of first character within the line */
        this._tokenStartCharPositionInLine = 0;
        /** Once we see EOF on char stream, next token will be EOF.
         *  If you have DONE : EOF ; then you see DONE EOF.
         */
        this._hitEOF = false;
        /** The channel number for the current token */
        this._channel = 0;
        /** The token type for the current token */
        this._type = 0;
        this._modeStack = new IntegerStack_1.IntegerStack();
        this._mode = Lexer.DEFAULT_MODE;
        this._input = input;
        this._tokenFactorySourcePair = { source: this, stream: input };
    }
    static get DEFAULT_TOKEN_CHANNEL() {
        return Token_1.Token.DEFAULT_CHANNEL;
    }
    static get HIDDEN() {
        return Token_1.Token.HIDDEN_CHANNEL;
    }
    reset(resetInput) {
        // wack Lexer state variables
        if (resetInput === undefined || resetInput) {
            this._input.seek(0); // rewind the input
        }
        this._token = undefined;
        this._type = Token_1.Token.INVALID_TYPE;
        this._channel = Token_1.Token.DEFAULT_CHANNEL;
        this._tokenStartCharIndex = -1;
        this._tokenStartCharPositionInLine = -1;
        this._tokenStartLine = -1;
        this._text = undefined;
        this._hitEOF = false;
        this._mode = Lexer.DEFAULT_MODE;
        this._modeStack.clear();
        this.interpreter.reset();
    }
    /** Return a token from this source; i.e., match a token on the char
     *  stream.
     */
    nextToken() {
        if (this._input == null) {
            throw new Error("nextToken requires a non-null input stream.");
        }
        // Mark start location in char stream so unbuffered streams are
        // guaranteed at least have text of current token
        let tokenStartMarker = this._input.mark();
        try {
            outer: while (true) {
                if (this._hitEOF) {
                    return this.emitEOF();
                }
                this._token = undefined;
                this._channel = Token_1.Token.DEFAULT_CHANNEL;
                this._tokenStartCharIndex = this._input.index;
                this._tokenStartCharPositionInLine = this.interpreter.charPositionInLine;
                this._tokenStartLine = this.interpreter.line;
                this._text = undefined;
                do {
                    this._type = Token_1.Token.INVALID_TYPE;
                    //				System.out.println("nextToken line "+tokenStartLine+" at "+((char)input.LA(1))+
                    //								   " in mode "+mode+
                    //								   " at index "+input.index);
                    let ttype;
                    try {
                        ttype = this.interpreter.match(this._input, this._mode);
                    }
                    catch (e) {
                        if (e instanceof LexerNoViableAltException_1.LexerNoViableAltException) {
                            this.notifyListeners(e); // report error
                            this.recover(e);
                            ttype = Lexer.SKIP;
                        }
                        else {
                            throw e;
                        }
                    }
                    if (this._input.LA(1) === IntStream_1.IntStream.EOF) {
                        this._hitEOF = true;
                    }
                    if (this._type === Token_1.Token.INVALID_TYPE) {
                        this._type = ttype;
                    }
                    if (this._type === Lexer.SKIP) {
                        continue outer;
                    }
                } while (this._type === Lexer.MORE);
                if (this._token == null) {
                    return this.emit();
                }
                return this._token;
            }
        }
        finally {
            // make sure we release marker after match or
            // unbuffered char stream will keep buffering
            this._input.release(tokenStartMarker);
        }
    }
    /** Instruct the lexer to skip creating a token for current lexer rule
     *  and look for another token.  nextToken() knows to keep looking when
     *  a lexer rule finishes with token set to SKIP_TOKEN.  Recall that
     *  if token==undefined at end of any token rule, it creates one for you
     *  and emits it.
     */
    skip() {
        this._type = Lexer.SKIP;
    }
    more() {
        this._type = Lexer.MORE;
    }
    mode(m) {
        this._mode = m;
    }
    pushMode(m) {
        if (LexerATNSimulator_1.LexerATNSimulator.debug) {
            console.log("pushMode " + m);
        }
        this._modeStack.push(this._mode);
        this.mode(m);
    }
    popMode() {
        if (this._modeStack.isEmpty) {
            throw new Error("EmptyStackException");
        }
        if (LexerATNSimulator_1.LexerATNSimulator.debug) {
            console.log("popMode back to " + this._modeStack.peek());
        }
        this.mode(this._modeStack.pop());
        return this._mode;
    }
    get tokenFactory() {
        return this._factory;
    }
    // @Override
    set tokenFactory(factory) {
        this._factory = factory;
    }
    get inputStream() {
        return this._input;
    }
    /** Set the char stream and reset the lexer */
    set inputStream(input) {
        this.reset(false);
        this._input = input;
        this._tokenFactorySourcePair = { source: this, stream: this._input };
    }
    get sourceName() {
        return this._input.sourceName;
    }
    emit(token) {
        if (!token) {
            token = this._factory.create(this._tokenFactorySourcePair, this._type, this._text, this._channel, this._tokenStartCharIndex, this.charIndex - 1, this._tokenStartLine, this._tokenStartCharPositionInLine);
        }
        this._token = token;
        return token;
    }
    emitEOF() {
        let cpos = this.charPositionInLine;
        let line = this.line;
        let eof = this._factory.create(this._tokenFactorySourcePair, Token_1.Token.EOF, undefined, Token_1.Token.DEFAULT_CHANNEL, this._input.index, this._input.index - 1, line, cpos);
        this.emit(eof);
        return eof;
    }
    get line() {
        return this.interpreter.line;
    }
    set line(line) {
        this.interpreter.line = line;
    }
    get charPositionInLine() {
        return this.interpreter.charPositionInLine;
    }
    set charPositionInLine(charPositionInLine) {
        this.interpreter.charPositionInLine = charPositionInLine;
    }
    /** What is the index of the current character of lookahead? */
    get charIndex() {
        return this._input.index;
    }
    /** Return the text matched so far for the current token or any
     *  text override.
     */
    get text() {
        if (this._text != null) {
            return this._text;
        }
        return this.interpreter.getText(this._input);
    }
    /** Set the complete text of this token; it wipes any previous
     *  changes to the text.
     */
    set text(text) {
        this._text = text;
    }
    /** Override if emitting multiple tokens. */
    get token() { return this._token; }
    set token(_token) {
        this._token = _token;
    }
    set type(ttype) {
        this._type = ttype;
    }
    get type() {
        return this._type;
    }
    set channel(channel) {
        this._channel = channel;
    }
    get channel() {
        return this._channel;
    }
    /** Return a list of all Token objects in input char stream.
     *  Forces load of all tokens. Does not include EOF token.
     */
    getAllTokens() {
        let tokens = [];
        let t = this.nextToken();
        while (t.type !== Token_1.Token.EOF) {
            tokens.push(t);
            t = this.nextToken();
        }
        return tokens;
    }
    notifyListeners(e) {
        let text = this._input.getText(Interval_1.Interval.of(this._tokenStartCharIndex, this._input.index));
        let msg = "token recognition error at: '" +
            this.getErrorDisplay(text) + "'";
        let listener = this.getErrorListenerDispatch();
        if (listener.syntaxError) {
            listener.syntaxError(this, undefined, this._tokenStartLine, this._tokenStartCharPositionInLine, msg, e);
        }
    }
    getErrorDisplay(s) {
        if (typeof s === "number") {
            switch (s) {
                case Token_1.Token.EOF:
                    return "<EOF>";
                case 0x0a:
                    return "\\n";
                case 0x09:
                    return "\\t";
                case 0x0d:
                    return "\\r";
            }
            return String.fromCharCode(s);
        }
        return s.replace(/\n/g, "\\n")
            .replace(/\t/g, "\\t")
            .replace(/\r/g, "\\r");
    }
    getCharErrorDisplay(c) {
        let s = this.getErrorDisplay(c);
        return "'" + s + "'";
    }
    recover(re) {
        if (re instanceof LexerNoViableAltException_1.LexerNoViableAltException) {
            if (this._input.LA(1) !== IntStream_1.IntStream.EOF) {
                // skip a char and try again
                this.interpreter.consume(this._input);
            }
        }
        else {
            //System.out.println("consuming char "+(char)input.LA(1)+" during recovery");
            //re.printStackTrace();
            // TODO: Do we lose character or line position information?
            this._input.consume();
        }
    }
}
Lexer.DEFAULT_MODE = 0;
Lexer.MORE = -2;
Lexer.SKIP = -3;
Lexer.MIN_CHAR_VALUE = 0x0000;
Lexer.MAX_CHAR_VALUE = 0x10FFFF;
__decorate([
    Decorators.Override
], Lexer.prototype, "nextToken", null);
__decorate([
    Decorators.Override
], Lexer.prototype, "tokenFactory", null);
__decorate([
    Decorators.Override
], Lexer.prototype, "inputStream", null);
__decorate([
    Decorators.Override
], Lexer.prototype, "sourceName", null);
__decorate([
    Decorators.Override
], Lexer.prototype, "line", null);
__decorate([
    Decorators.Override
], Lexer.prototype, "charPositionInLine", null);
exports.Lexer = Lexer;

});

var IntervalSet_1 = createCommonjsModule(function (module, exports) {
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
exports.IntervalSet = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:40.8683480-07:00







/**
 * This class implements the {@link IntSet} backed by a sorted array of
 * non-overlapping intervals. It is particularly efficient for representing
 * large collections of numbers, where the majority of elements appear as part
 * of a sequential range of numbers that are all part of the set. For example,
 * the set { 1, 2, 3, 4, 7, 8 } may be represented as { [1, 4], [7, 8] }.
 *
 * This class is able to represent sets containing any combination of values in
 * the range {@link Integer#MIN_VALUE} to {@link Integer#MAX_VALUE}
 * (inclusive).
 */
class IntervalSet {
    constructor(intervals) {
        this.readonly = false;
        if (intervals != null) {
            this._intervals = intervals.slice(0);
        }
        else {
            this._intervals = [];
        }
    }
    static get COMPLETE_CHAR_SET() {
        if (IntervalSet._COMPLETE_CHAR_SET === undefined) {
            IntervalSet._COMPLETE_CHAR_SET = IntervalSet.of(Lexer_1.Lexer.MIN_CHAR_VALUE, Lexer_1.Lexer.MAX_CHAR_VALUE);
            IntervalSet._COMPLETE_CHAR_SET.setReadonly(true);
        }
        return IntervalSet._COMPLETE_CHAR_SET;
    }
    static get EMPTY_SET() {
        if (IntervalSet._EMPTY_SET == null) {
            IntervalSet._EMPTY_SET = new IntervalSet();
            IntervalSet._EMPTY_SET.setReadonly(true);
        }
        return IntervalSet._EMPTY_SET;
    }
    /**
     * Create a set with all ints within range [a..b] (inclusive). If b is omitted, the set contains the single element
     * a.
     */
    static of(a, b = a) {
        let s = new IntervalSet();
        s.add(a, b);
        return s;
    }
    clear() {
        if (this.readonly) {
            throw new Error("can't alter readonly IntervalSet");
        }
        this._intervals.length = 0;
    }
    /** Add interval; i.e., add all integers from a to b to set.
     *  If b&lt;a, do nothing.
     *  Keep list in sorted order (by left range value).
     *  If overlap, combine ranges.  For example,
     *  If this is {1..5, 10..20}, adding 6..7 yields
     *  {1..5, 6..7, 10..20}.  Adding 4..8 yields {1..8, 10..20}.
     */
    add(a, b = a) {
        this.addRange(Interval_1.Interval.of(a, b));
    }
    // copy on write so we can cache a..a intervals and sets of that
    addRange(addition) {
        if (this.readonly) {
            throw new Error("can't alter readonly IntervalSet");
        }
        //System.out.println("add "+addition+" to "+intervals.toString());
        if (addition.b < addition.a) {
            return;
        }
        // find position in list
        // Use iterators as we modify list in place
        for (let i = 0; i < this._intervals.length; i++) {
            let r = this._intervals[i];
            if (addition.equals(r)) {
                return;
            }
            if (addition.adjacent(r) || !addition.disjoint(r)) {
                // next to each other, make a single larger interval
                let bigger = addition.union(r);
                this._intervals[i] = bigger;
                // make sure we didn't just create an interval that
                // should be merged with next interval in list
                while (i < this._intervals.length - 1) {
                    i++;
                    let next = this._intervals[i];
                    if (!bigger.adjacent(next) && bigger.disjoint(next)) {
                        break;
                    }
                    // if we bump up against or overlap next, merge
                    // remove this one
                    this._intervals.splice(i, 1);
                    i--;
                    // move backwards to what we just set
                    this._intervals[i] = bigger.union(next);
                    // set to 3 merged ones
                }
                // first call to next after previous duplicates the result
                return;
            }
            if (addition.startsBeforeDisjoint(r)) {
                // insert before r
                this._intervals.splice(i, 0, addition);
                return;
            }
            // if disjoint and after r, a future iteration will handle it
        }
        // ok, must be after last interval (and disjoint from last interval)
        // just add it
        this._intervals.push(addition);
    }
    /** combine all sets in the array returned the or'd value */
    static or(sets) {
        let r = new IntervalSet();
        for (let s of sets) {
            r.addAll(s);
        }
        return r;
    }
    addAll(set) {
        if (set == null) {
            return this;
        }
        if (set instanceof IntervalSet) {
            let other = set;
            // walk set and add each interval
            let n = other._intervals.length;
            for (let i = 0; i < n; i++) {
                let I = other._intervals[i];
                this.add(I.a, I.b);
            }
        }
        else {
            for (let value of set.toArray()) {
                this.add(value);
            }
        }
        return this;
    }
    complementRange(minElement, maxElement) {
        return this.complement(IntervalSet.of(minElement, maxElement));
    }
    /** {@inheritDoc} */
    complement(vocabulary) {
        if (vocabulary.isNil) {
            // nothing in common with null set
            return IntervalSet.EMPTY_SET;
        }
        let vocabularyIS;
        if (vocabulary instanceof IntervalSet) {
            vocabularyIS = vocabulary;
        }
        else {
            vocabularyIS = new IntervalSet();
            vocabularyIS.addAll(vocabulary);
        }
        return vocabularyIS.subtract(this);
    }
    subtract(a) {
        if (a == null || a.isNil) {
            return new IntervalSet(this._intervals);
        }
        if (a instanceof IntervalSet) {
            return IntervalSet.subtract(this, a);
        }
        let other = new IntervalSet();
        other.addAll(a);
        return IntervalSet.subtract(this, other);
    }
    /**
     * Compute the set difference between two interval sets. The specific
     * operation is `left - right`.
     */
    static subtract(left, right) {
        if (left.isNil) {
            return new IntervalSet();
        }
        let result = new IntervalSet(left._intervals);
        if (right.isNil) {
            // right set has no elements; just return the copy of the current set
            return result;
        }
        let resultI = 0;
        let rightI = 0;
        while (resultI < result._intervals.length && rightI < right._intervals.length) {
            let resultInterval = result._intervals[resultI];
            let rightInterval = right._intervals[rightI];
            // operation: (resultInterval - rightInterval) and update indexes
            if (rightInterval.b < resultInterval.a) {
                rightI++;
                continue;
            }
            if (rightInterval.a > resultInterval.b) {
                resultI++;
                continue;
            }
            let beforeCurrent;
            let afterCurrent;
            if (rightInterval.a > resultInterval.a) {
                beforeCurrent = new Interval_1.Interval(resultInterval.a, rightInterval.a - 1);
            }
            if (rightInterval.b < resultInterval.b) {
                afterCurrent = new Interval_1.Interval(rightInterval.b + 1, resultInterval.b);
            }
            if (beforeCurrent) {
                if (afterCurrent) {
                    // split the current interval into two
                    result._intervals[resultI] = beforeCurrent;
                    result._intervals.splice(resultI + 1, 0, afterCurrent);
                    resultI++;
                    rightI++;
                    continue;
                }
                else {
                    // replace the current interval
                    result._intervals[resultI] = beforeCurrent;
                    resultI++;
                    continue;
                }
            }
            else {
                if (afterCurrent) {
                    // replace the current interval
                    result._intervals[resultI] = afterCurrent;
                    rightI++;
                    continue;
                }
                else {
                    // remove the current interval (thus no need to increment resultI)
                    result._intervals.splice(resultI, 1);
                    continue;
                }
            }
        }
        // If rightI reached right.intervals.size, no more intervals to subtract from result.
        // If resultI reached result.intervals.size, we would be subtracting from an empty set.
        // Either way, we are done.
        return result;
    }
    or(a) {
        let o = new IntervalSet();
        o.addAll(this);
        o.addAll(a);
        return o;
    }
    /** {@inheritDoc} */
    and(other) {
        if (other.isNil) { //|| !(other instanceof IntervalSet) ) {
            // nothing in common with null set
            return new IntervalSet();
        }
        let myIntervals = this._intervals;
        let theirIntervals = other._intervals;
        let intersection;
        let mySize = myIntervals.length;
        let theirSize = theirIntervals.length;
        let i = 0;
        let j = 0;
        // iterate down both interval lists looking for nondisjoint intervals
        while (i < mySize && j < theirSize) {
            let mine = myIntervals[i];
            let theirs = theirIntervals[j];
            //System.out.println("mine="+mine+" and theirs="+theirs);
            if (mine.startsBeforeDisjoint(theirs)) {
                // move this iterator looking for interval that might overlap
                i++;
            }
            else if (theirs.startsBeforeDisjoint(mine)) {
                // move other iterator looking for interval that might overlap
                j++;
            }
            else if (mine.properlyContains(theirs)) {
                // overlap, add intersection, get next theirs
                if (!intersection) {
                    intersection = new IntervalSet();
                }
                intersection.addRange(mine.intersection(theirs));
                j++;
            }
            else if (theirs.properlyContains(mine)) {
                // overlap, add intersection, get next mine
                if (!intersection) {
                    intersection = new IntervalSet();
                }
                intersection.addRange(mine.intersection(theirs));
                i++;
            }
            else if (!mine.disjoint(theirs)) {
                // overlap, add intersection
                if (!intersection) {
                    intersection = new IntervalSet();
                }
                intersection.addRange(mine.intersection(theirs));
                // Move the iterator of lower range [a..b], but not
                // the upper range as it may contain elements that will collide
                // with the next iterator. So, if mine=[0..115] and
                // theirs=[115..200], then intersection is 115 and move mine
                // but not theirs as theirs may collide with the next range
                // in thisIter.
                // move both iterators to next ranges
                if (mine.startsAfterNonDisjoint(theirs)) {
                    j++;
                }
                else if (theirs.startsAfterNonDisjoint(mine)) {
                    i++;
                }
            }
        }
        if (!intersection) {
            return new IntervalSet();
        }
        return intersection;
    }
    /** {@inheritDoc} */
    contains(el) {
        let n = this._intervals.length;
        let l = 0;
        let r = n - 1;
        // Binary search for the element in the (sorted, disjoint) array of intervals.
        while (l <= r) {
            let m = (l + r) >> 1;
            let I = this._intervals[m];
            let a = I.a;
            let b = I.b;
            if (b < el) {
                l = m + 1;
            }
            else if (a > el) {
                r = m - 1;
            }
            else {
                // el >= a && el <= b
                return true;
            }
        }
        return false;
    }
    /** {@inheritDoc} */
    get isNil() {
        return this._intervals == null || this._intervals.length === 0;
    }
    /**
     * Returns the maximum value contained in the set if not isNil.
     *
     * @return the maximum value contained in the set.
     * @throws RangeError if set is empty
     */
    get maxElement() {
        if (this.isNil) {
            throw new RangeError("set is empty");
        }
        let last = this._intervals[this._intervals.length - 1];
        return last.b;
    }
    /**
     * Returns the minimum value contained in the set if not isNil.
     *
     * @return the minimum value contained in the set.
     * @throws RangeError if set is empty
     */
    get minElement() {
        if (this.isNil) {
            throw new RangeError("set is empty");
        }
        return this._intervals[0].a;
    }
    /** Return a list of Interval objects. */
    get intervals() {
        return this._intervals;
    }
    hashCode() {
        let hash = MurmurHash_1.MurmurHash.initialize();
        for (let I of this._intervals) {
            hash = MurmurHash_1.MurmurHash.update(hash, I.a);
            hash = MurmurHash_1.MurmurHash.update(hash, I.b);
        }
        hash = MurmurHash_1.MurmurHash.finish(hash, this._intervals.length * 2);
        return hash;
    }
    /** Are two IntervalSets equal?  Because all intervals are sorted
     *  and disjoint, equals is a simple linear walk over both lists
     *  to make sure they are the same.  Interval.equals() is used
     *  by the List.equals() method to check the ranges.
     */
    equals(o) {
        if (o == null || !(o instanceof IntervalSet)) {
            return false;
        }
        return ArrayEqualityComparator_1.ArrayEqualityComparator.INSTANCE.equals(this._intervals, o._intervals);
    }
    toString(elemAreChar = false) {
        let buf = "";
        if (this._intervals == null || this._intervals.length === 0) {
            return "{}";
        }
        if (this.size > 1) {
            buf += "{";
        }
        let first = true;
        for (let I of this._intervals) {
            if (first) {
                first = false;
            }
            else {
                buf += ", ";
            }
            let a = I.a;
            let b = I.b;
            if (a === b) {
                if (a === Token_1.Token.EOF) {
                    buf += "<EOF>";
                }
                else if (elemAreChar) {
                    buf += "'" + String.fromCodePoint(a) + "'";
                }
                else {
                    buf += a;
                }
            }
            else {
                if (elemAreChar) {
                    buf += "'" + String.fromCodePoint(a) + "'..'" + String.fromCodePoint(b) + "'";
                }
                else {
                    buf += a + ".." + b;
                }
            }
        }
        if (this.size > 1) {
            buf += "}";
        }
        return buf;
    }
    toStringVocabulary(vocabulary) {
        if (this._intervals == null || this._intervals.length === 0) {
            return "{}";
        }
        let buf = "";
        if (this.size > 1) {
            buf += "{";
        }
        let first = true;
        for (let I of this._intervals) {
            if (first) {
                first = false;
            }
            else {
                buf += ", ";
            }
            let a = I.a;
            let b = I.b;
            if (a === b) {
                buf += this.elementName(vocabulary, a);
            }
            else {
                for (let i = a; i <= b; i++) {
                    if (i > a) {
                        buf += ", ";
                    }
                    buf += this.elementName(vocabulary, i);
                }
            }
        }
        if (this.size > 1) {
            buf += "}";
        }
        return buf;
    }
    elementName(vocabulary, a) {
        if (a === Token_1.Token.EOF) {
            return "<EOF>";
        }
        else if (a === Token_1.Token.EPSILON) {
            return "<EPSILON>";
        }
        else {
            return vocabulary.getDisplayName(a);
        }
    }
    get size() {
        let n = 0;
        let numIntervals = this._intervals.length;
        if (numIntervals === 1) {
            let firstInterval = this._intervals[0];
            return firstInterval.b - firstInterval.a + 1;
        }
        for (let i = 0; i < numIntervals; i++) {
            let I = this._intervals[i];
            n += (I.b - I.a + 1);
        }
        return n;
    }
    toIntegerList() {
        let values = new IntegerList_1.IntegerList(this.size);
        let n = this._intervals.length;
        for (let i = 0; i < n; i++) {
            let I = this._intervals[i];
            let a = I.a;
            let b = I.b;
            for (let v = a; v <= b; v++) {
                values.add(v);
            }
        }
        return values;
    }
    toSet() {
        let s = new Set();
        for (let I of this._intervals) {
            let a = I.a;
            let b = I.b;
            for (let v = a; v <= b; v++) {
                s.add(v);
            }
        }
        return s;
    }
    toArray() {
        let values = new Array();
        let n = this._intervals.length;
        for (let i = 0; i < n; i++) {
            let I = this._intervals[i];
            let a = I.a;
            let b = I.b;
            for (let v = a; v <= b; v++) {
                values.push(v);
            }
        }
        return values;
    }
    remove(el) {
        if (this.readonly) {
            throw new Error("can't alter readonly IntervalSet");
        }
        let n = this._intervals.length;
        for (let i = 0; i < n; i++) {
            let I = this._intervals[i];
            let a = I.a;
            let b = I.b;
            if (el < a) {
                break; // list is sorted and el is before this interval; not here
            }
            // if whole interval x..x, rm
            if (el === a && el === b) {
                this._intervals.splice(i, 1);
                break;
            }
            // if on left edge x..b, adjust left
            if (el === a) {
                this._intervals[i] = Interval_1.Interval.of(I.a + 1, I.b);
                break;
            }
            // if on right edge a..x, adjust right
            if (el === b) {
                this._intervals[i] = Interval_1.Interval.of(I.a, I.b - 1);
                break;
            }
            // if in middle a..x..b, split interval
            if (el > a && el < b) { // found in this interval
                let oldb = I.b;
                this._intervals[i] = Interval_1.Interval.of(I.a, el - 1); // [a..x-1]
                this.add(el + 1, oldb); // add [x+1..b]
            }
        }
    }
    get isReadonly() {
        return this.readonly;
    }
    setReadonly(readonly) {
        if (this.readonly && !readonly) {
            throw new Error("can't alter readonly IntervalSet");
        }
        this.readonly = readonly;
    }
}
__decorate([
    Decorators.Override
], IntervalSet.prototype, "addAll", null);
__decorate([
    Decorators.Override
], IntervalSet.prototype, "complement", null);
__decorate([
    Decorators.Override
], IntervalSet.prototype, "subtract", null);
__decorate([
    Decorators.Override
], IntervalSet.prototype, "or", null);
__decorate([
    Decorators.Override
], IntervalSet.prototype, "and", null);
__decorate([
    Decorators.Override
], IntervalSet.prototype, "contains", null);
__decorate([
    Decorators.Override
], IntervalSet.prototype, "isNil", null);
__decorate([
    Decorators.Override
], IntervalSet.prototype, "hashCode", null);
__decorate([
    Decorators.Override
], IntervalSet.prototype, "equals", null);
__decorate([
    __param(0, Decorators.NotNull)
], IntervalSet.prototype, "toStringVocabulary", null);
__decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
], IntervalSet.prototype, "elementName", null);
__decorate([
    Decorators.Override
], IntervalSet.prototype, "size", null);
__decorate([
    Decorators.Override
], IntervalSet.prototype, "remove", null);
__decorate([
    Decorators.NotNull
], IntervalSet, "of", null);
__decorate([
    Decorators.NotNull
], IntervalSet, "subtract", null);
exports.IntervalSet = IntervalSet;

});

export { ATN_1 as A, BitSet_1 as B, CommonToken_1 as C, DecisionState_1 as D, IntervalSet_1 as I, Lexer_1 as L, NotSetTransition_1 as N, ProxyErrorListener_1 as P, Recognizer_1 as R, SetTransition_1 as S, WildcardTransition_1 as W, LexerATNSimulator_1 as a, CommonTokenFactory_1 as b, ConsoleErrorListener_1 as c, LexerNoViableAltException_1 as d, ATNStateType_1 as e, ATNState_1 as f, Array2DHashMap_1 as g, RuleStopState_1 as h, ATNSimulator_1 as i, PredictionContextCache_1 as j, ATNConfigSet_1 as k, IntegerList_1 as l, PredictionContext_1 as m, ATNConfig_1 as n, Arrays_1 as o, DFAState_1 as p, RuleTransition_1 as q, AcceptStateInfo_1 as r, InvalidState_1 as s, DFA_1 as t, StarLoopEntryState_1 as u, BasicState_1 as v, IntegerStack_1 as w };
