import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-8c19dec8.js';
import { D as Decorators } from './Decorators-d5ac3968.js';
import assert from 'assert';
import { U as Utils } from './Utils-bdfdedae.js';

var Transition_1 = createCommonjsModule(function (module, exports) {
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
exports.Transition = void 0;

/** An ATN transition between any two ATN states.  Subclasses define
 *  atom, set, epsilon, action, predicate, rule transitions.
 *
 *  This is a one way link.  It emanates from a state (usually via a list of
 *  transitions) and has a target state.
 *
 *  Since we never have to change the ATN transitions once we construct it,
 *  we can fix these transitions as specific classes. The DFA transitions
 *  on the other hand need to update the labels as it adds transitions to
 *  the states. We'll use the term Edge for the DFA to distinguish them from
 *  ATN transitions.
 */
let Transition = class Transition {
    constructor(target) {
        if (target == null) {
            throw new Error("target cannot be null.");
        }
        this.target = target;
    }
    /**
     * Determines if the transition is an "epsilon" transition.
     *
     * The default implementation returns `false`.
     *
     * @returns `true` if traversing this transition in the ATN does not
     * consume an input symbol; otherwise, `false` if traversing this
     * transition consumes (matches) an input symbol.
     */
    get isEpsilon() {
        return false;
    }
    get label() {
        return undefined;
    }
};
Transition.serializationNames = [
    "INVALID",
    "EPSILON",
    "RANGE",
    "RULE",
    "PREDICATE",
    "ATOM",
    "ACTION",
    "SET",
    "NOT_SET",
    "WILDCARD",
    "PRECEDENCE",
];
__decorate([
    Decorators.NotNull
], Transition.prototype, "target", void 0);
Transition = __decorate([
    __param(0, Decorators.NotNull)
], Transition);
exports.Transition = Transition;

});

var AbstractPredicateTransition_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractPredicateTransition = void 0;

/**
 *
 * @author Sam Harwell
 */
class AbstractPredicateTransition extends Transition_1.Transition {
    constructor(target) {
        super(target);
    }
}
exports.AbstractPredicateTransition = AbstractPredicateTransition;

});

var MurmurHash_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MurmurHash = void 0;
(function (MurmurHash) {
    const DEFAULT_SEED = 0;
    /**
     * Initialize the hash using the specified `seed`.
     *
     * @param seed the seed (optional)
     * @returns the intermediate hash value
     */
    function initialize(seed = DEFAULT_SEED) {
        return seed;
    }
    MurmurHash.initialize = initialize;
    /**
     * Update the intermediate hash value for the next input `value`.
     *
     * @param hash the intermediate hash value
     * @param value the value to add to the current hash
     * @returns the updated intermediate hash value
     */
    function update(hash, value) {
        const c1 = 0xCC9E2D51;
        const c2 = 0x1B873593;
        const r1 = 15;
        const r2 = 13;
        const m = 5;
        const n = 0xE6546B64;
        if (value == null) {
            value = 0;
        }
        else if (typeof value === "string") {
            value = hashString(value);
        }
        else if (typeof value === "object") {
            value = value.hashCode();
        }
        let k = value;
        k = Math.imul(k, c1);
        k = (k << r1) | (k >>> (32 - r1));
        k = Math.imul(k, c2);
        hash = hash ^ k;
        hash = (hash << r2) | (hash >>> (32 - r2));
        hash = Math.imul(hash, m) + n;
        return hash & 0xFFFFFFFF;
    }
    MurmurHash.update = update;
    /**
     * Apply the final computation steps to the intermediate value `hash`
     * to form the final result of the MurmurHash 3 hash function.
     *
     * @param hash the intermediate hash value
     * @param numberOfWords the number of integer values added to the hash
     * @returns the final hash result
     */
    function finish(hash, numberOfWords) {
        hash = hash ^ (numberOfWords * 4);
        hash = hash ^ (hash >>> 16);
        hash = Math.imul(hash, 0x85EBCA6B);
        hash = hash ^ (hash >>> 13);
        hash = Math.imul(hash, 0xC2B2AE35);
        hash = hash ^ (hash >>> 16);
        return hash;
    }
    MurmurHash.finish = finish;
    /**
     * Utility function to compute the hash code of an array using the
     * MurmurHash algorithm.
     *
     * @param <T> the array element type
     * @param data the array data
     * @param seed the seed for the MurmurHash algorithm
     * @returns the hash code of the data
     */
    function hashCode(data, seed = DEFAULT_SEED) {
        let hash = initialize(seed);
        let length = 0;
        for (let value of data) {
            hash = update(hash, value);
            length++;
        }
        hash = finish(hash, length);
        return hash;
    }
    MurmurHash.hashCode = hashCode;
    /**
     * Function to hash a string. Based on the implementation found here:
     * http://stackoverflow.com/a/7616484
     */
    function hashString(str) {
        let len = str.length;
        if (len === 0) {
            return 0;
        }
        let hash = 0;
        for (let i = 0; i < len; i++) {
            let c = str.charCodeAt(i);
            hash = (((hash << 5) >>> 0) - hash) + c;
            hash |= 0;
        }
        return hash;
    }
})(exports.MurmurHash || (exports.MurmurHash = {}));

});

var ObjectEqualityComparator_1 = createCommonjsModule(function (module, exports) {
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
exports.ObjectEqualityComparator = void 0;

/**
 * This default implementation of {@link EqualityComparator} uses object equality
 * for comparisons by calling {@link Object#hashCode} and {@link Object#equals}.
 *
 * @author Sam Harwell
 */
class ObjectEqualityComparator {
    /**
     * {@inheritDoc}
     *
     * This implementation returns
     * `obj.`{@link Object#hashCode hashCode()}.
     */
    hashCode(obj) {
        if (obj == null) {
            return 0;
        }
        return obj.hashCode();
    }
    /**
     * {@inheritDoc}
     *
     * This implementation relies on object equality. If both objects are
     * `undefined` or `null`, this method returns `true`. Otherwise if only
     * `a` is `undefined` or `null`, this method returns `false`. Otherwise,
     * this method returns the result of
     * `a.`{@link Object#equals equals}`(b)`.
     */
    equals(a, b) {
        if (a == null) {
            return b == null;
        }
        return a.equals(b);
    }
}
ObjectEqualityComparator.INSTANCE = new ObjectEqualityComparator();
__decorate([
    Decorators.Override
], ObjectEqualityComparator.prototype, "hashCode", null);
__decorate([
    Decorators.Override
], ObjectEqualityComparator.prototype, "equals", null);
exports.ObjectEqualityComparator = ObjectEqualityComparator;

});

var DefaultEqualityComparator_1 = createCommonjsModule(function (module, exports) {
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
exports.DefaultEqualityComparator = void 0;



/**
 * This default implementation of {@link EqualityComparator} uses object equality
 * for comparisons by calling {@link Object#hashCode} and {@link Object#equals}.
 *
 * @author Sam Harwell
 */
class DefaultEqualityComparator {
    /**
     * {@inheritDoc}
     *
     * This implementation returns
     * `obj.`{@link Object#hashCode hashCode()}.
     */
    hashCode(obj) {
        if (obj == null) {
            return 0;
        }
        else if (typeof obj === "string" || typeof obj === "number") {
            return MurmurHash_1.MurmurHash.hashCode([obj]);
        }
        else {
            return ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE.hashCode(obj);
        }
    }
    /**
     * {@inheritDoc}
     *
     * This implementation relies on object equality. If both objects are
     * `undefined` or `null`, this method returns `true`. Otherwise if only
     * `a` is `undefined` or `null`, this method returns `false`. Otherwise,
     * this method returns the result of
     * `a.`{@link Object#equals equals}`(b)`.
     */
    equals(a, b) {
        if (a == null) {
            return b == null;
        }
        else if (typeof a === "string" || typeof a === "number") {
            return a === b;
        }
        else {
            return ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE.equals(a, b);
        }
    }
}
DefaultEqualityComparator.INSTANCE = new DefaultEqualityComparator();
__decorate([
    Decorators.Override
], DefaultEqualityComparator.prototype, "hashCode", null);
__decorate([
    Decorators.Override
], DefaultEqualityComparator.prototype, "equals", null);
exports.DefaultEqualityComparator = DefaultEqualityComparator;

});

var Array2DHashSet_1 = createCommonjsModule(function (module, exports) {
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
exports.Array2DHashSet = void 0;
// ConvertTo-TS run at 2016-10-03T02:09:41.7434086-07:00




/** {@link Set} implementation with closed hashing (open addressing). */
// NOTE:  JavaScript's Set interface has on significant different diffrence from Java's:
// 		  e.g. the return type of add() differs!
//        For this reason I've commented tweaked the implements clause
const INITAL_CAPACITY = 16; // must be power of 2
const LOAD_FACTOR = 0.75;
class Array2DHashSet {
    constructor(comparatorOrSet, initialCapacity = INITAL_CAPACITY) {
        /** How many elements in set */
        this.n = 0;
        this.threshold = Math.floor(INITAL_CAPACITY * LOAD_FACTOR); // when to expand
        if (comparatorOrSet instanceof Array2DHashSet) {
            this.comparator = comparatorOrSet.comparator;
            this.buckets = comparatorOrSet.buckets.slice(0);
            for (let i = 0; i < this.buckets.length; i++) {
                let bucket = this.buckets[i];
                if (bucket) {
                    this.buckets[i] = bucket.slice(0);
                }
            }
            this.n = comparatorOrSet.n;
            this.threshold = comparatorOrSet.threshold;
        }
        else {
            this.comparator = comparatorOrSet || DefaultEqualityComparator_1.DefaultEqualityComparator.INSTANCE;
            this.buckets = this.createBuckets(initialCapacity);
        }
    }
    /**
     * Add `o` to set if not there; return existing value if already
     * there. This method performs the same operation as {@link #add} aside from
     * the return value.
     */
    getOrAdd(o) {
        if (this.n > this.threshold) {
            this.expand();
        }
        return this.getOrAddImpl(o);
    }
    getOrAddImpl(o) {
        let b = this.getBucket(o);
        let bucket = this.buckets[b];
        // NEW BUCKET
        if (!bucket) {
            bucket = [o];
            this.buckets[b] = bucket;
            this.n++;
            return o;
        }
        // LOOK FOR IT IN BUCKET
        for (let existing of bucket) {
            if (this.comparator.equals(existing, o)) {
                return existing; // found existing, quit
            }
        }
        // FULL BUCKET, expand and add to end
        bucket.push(o);
        this.n++;
        return o;
    }
    get(o) {
        if (o == null) {
            return o;
        }
        let b = this.getBucket(o);
        let bucket = this.buckets[b];
        if (!bucket) {
            // no bucket
            return undefined;
        }
        for (let e of bucket) {
            if (this.comparator.equals(e, o)) {
                return e;
            }
        }
        return undefined;
    }
    getBucket(o) {
        let hash = this.comparator.hashCode(o);
        let b = hash & (this.buckets.length - 1); // assumes len is power of 2
        return b;
    }
    hashCode() {
        let hash = MurmurHash_1.MurmurHash.initialize();
        for (let bucket of this.buckets) {
            if (bucket == null) {
                continue;
            }
            for (let o of bucket) {
                if (o == null) {
                    break;
                }
                hash = MurmurHash_1.MurmurHash.update(hash, this.comparator.hashCode(o));
            }
        }
        hash = MurmurHash_1.MurmurHash.finish(hash, this.size);
        return hash;
    }
    equals(o) {
        if (o === this) {
            return true;
        }
        if (!(o instanceof Array2DHashSet)) {
            return false;
        }
        if (o.size !== this.size) {
            return false;
        }
        let same = this.containsAll(o);
        return same;
    }
    expand() {
        let old = this.buckets;
        let newCapacity = this.buckets.length * 2;
        let newTable = this.createBuckets(newCapacity);
        this.buckets = newTable;
        this.threshold = Math.floor(newCapacity * LOAD_FACTOR);
        //		System.out.println("new size="+newCapacity+", thres="+threshold);
        // rehash all existing entries
        let oldSize = this.size;
        for (let bucket of old) {
            if (!bucket) {
                continue;
            }
            for (let o of bucket) {
                let b = this.getBucket(o);
                let newBucket = this.buckets[b];
                if (!newBucket) {
                    newBucket = [];
                    this.buckets[b] = newBucket;
                }
                newBucket.push(o);
            }
        }
        assert(this.n === oldSize);
    }
    add(t) {
        let existing = this.getOrAdd(t);
        return existing === t;
    }
    get size() {
        return this.n;
    }
    get isEmpty() {
        return this.n === 0;
    }
    contains(o) {
        return this.containsFast(this.asElementType(o));
    }
    containsFast(obj) {
        if (obj == null) {
            return false;
        }
        return this.get(obj) != null;
    }
    *[Symbol.iterator]() {
        yield* this.toArray();
    }
    toArray() {
        const a = new Array(this.size);
        // Copy elements from the nested arrays into the destination array
        let i = 0; // Position within destination array
        for (let bucket of this.buckets) {
            if (bucket == null) {
                continue;
            }
            for (let o of bucket) {
                if (o == null) {
                    break;
                }
                a[i++] = o;
            }
        }
        return a;
    }
    containsAll(collection) {
        if (collection instanceof Array2DHashSet) {
            let s = collection;
            for (let bucket of s.buckets) {
                if (bucket == null) {
                    continue;
                }
                for (let o of bucket) {
                    if (o == null) {
                        break;
                    }
                    if (!this.containsFast(this.asElementType(o))) {
                        return false;
                    }
                }
            }
        }
        else {
            for (let o of collection) {
                if (!this.containsFast(this.asElementType(o))) {
                    return false;
                }
            }
        }
        return true;
    }
    addAll(c) {
        let changed = false;
        for (let o of c) {
            let existing = this.getOrAdd(o);
            if (existing !== o) {
                changed = true;
            }
        }
        return changed;
    }
    clear() {
        this.buckets = this.createBuckets(INITAL_CAPACITY);
        this.n = 0;
        this.threshold = Math.floor(INITAL_CAPACITY * LOAD_FACTOR);
    }
    toString() {
        if (this.size === 0) {
            return "{}";
        }
        let buf = "{";
        let first = true;
        for (let bucket of this.buckets) {
            if (bucket == null) {
                continue;
            }
            for (let o of bucket) {
                if (o == null) {
                    break;
                }
                if (first) {
                    first = false;
                }
                else {
                    buf += ", ";
                }
                buf += o.toString();
            }
        }
        buf += "}";
        return buf;
    }
    toTableString() {
        let buf = "";
        for (let bucket of this.buckets) {
            if (bucket == null) {
                buf += "null\n";
                continue;
            }
            buf += "[";
            let first = true;
            for (let o of bucket) {
                if (first) {
                    first = false;
                }
                else {
                    buf += " ";
                }
                if (o == null) {
                    buf += "_";
                }
                else {
                    buf += o.toString();
                }
            }
            buf += "]\n";
        }
        return buf;
    }
    /**
     * Return `o` as an instance of the element type `T`. If
     * `o` is non-undefined but known to not be an instance of `T`, this
     * method returns `undefined`. The base implementation does not perform any
     * type checks; override this method to provide strong type checks for the
     * {@link #contains} and {@link #remove} methods to ensure the arguments to
     * the {@link EqualityComparator} for the set always have the expected
     * types.
     *
     * @param o the object to try and cast to the element type of the set
     * @returns `o` if it could be an instance of `T`, otherwise
     * `undefined`.
     */
    asElementType(o) {
        return o;
    }
    /**
     * Return an array of `T[]` with length `capacity`.
     *
     * @param capacity the length of the array to return
     * @returns the newly constructed array
     */
    createBuckets(capacity) {
        return new Array(capacity);
    }
}
__decorate([
    Decorators.NotNull
], Array2DHashSet.prototype, "comparator", void 0);
__decorate([
    Decorators.Override
], Array2DHashSet.prototype, "hashCode", null);
__decorate([
    Decorators.Override
], Array2DHashSet.prototype, "equals", null);
__decorate([
    Decorators.Override
], Array2DHashSet.prototype, "add", null);
__decorate([
    Decorators.Override
], Array2DHashSet.prototype, "size", null);
__decorate([
    Decorators.Override
], Array2DHashSet.prototype, "isEmpty", null);
__decorate([
    Decorators.Override
], Array2DHashSet.prototype, "contains", null);
__decorate([
    __param(0, Decorators.Nullable)
], Array2DHashSet.prototype, "containsFast", null);
__decorate([
    Decorators.Override
], Array2DHashSet.prototype, Symbol.iterator, null);
__decorate([
    Decorators.Override
], Array2DHashSet.prototype, "toArray", null);
__decorate([
    Decorators.Override
], Array2DHashSet.prototype, "containsAll", null);
__decorate([
    Decorators.Override
], Array2DHashSet.prototype, "addAll", null);
__decorate([
    Decorators.Override
], Array2DHashSet.prototype, "clear", null);
__decorate([
    Decorators.Override
], Array2DHashSet.prototype, "toString", null);
__decorate([
    Decorators.SuppressWarnings("unchecked")
], Array2DHashSet.prototype, "asElementType", null);
__decorate([
    Decorators.SuppressWarnings("unchecked")
], Array2DHashSet.prototype, "createBuckets", null);
exports.Array2DHashSet = Array2DHashSet;

});

var ArrayEqualityComparator_1 = createCommonjsModule(function (module, exports) {
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
exports.ArrayEqualityComparator = void 0;



/**
 * This default implementation of {@link EqualityComparator} uses object equality
 * for comparisons by calling {@link Object#hashCode} and {@link Object#equals}.
 *
 * @author Sam Harwell
 */
class ArrayEqualityComparator {
    /**
     * {@inheritDoc}
     *
     * This implementation returns
     * `obj.`{@link Object#hashCode hashCode()}.
     */
    hashCode(obj) {
        if (obj == null) {
            return 0;
        }
        return MurmurHash_1.MurmurHash.hashCode(obj, 0);
    }
    /**
     * {@inheritDoc}
     *
     * This implementation relies on object equality. If both objects are
     * `undefined`, this method returns `true`. Otherwise if only
     * `a` is `undefined`, this method returns `false`. Otherwise,
     * this method returns the result of
     * `a.`{@link Object#equals equals}`(b)`.
     */
    equals(a, b) {
        if (a == null) {
            return b == null;
        }
        else if (b == null) {
            return false;
        }
        if (a.length !== b.length) {
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            if (!ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE.equals(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
}
ArrayEqualityComparator.INSTANCE = new ArrayEqualityComparator();
__decorate([
    Decorators.Override
], ArrayEqualityComparator.prototype, "hashCode", null);
__decorate([
    Decorators.Override
], ArrayEqualityComparator.prototype, "equals", null);
exports.ArrayEqualityComparator = ArrayEqualityComparator;

});

var SemanticContext_1 = createCommonjsModule(function (module, exports) {
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
exports.SemanticContext = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:36.9521478-07:00






function max(items) {
    let result;
    for (let current of items) {
        if (result === undefined) {
            result = current;
            continue;
        }
        let comparison = result.compareTo(current);
        if (comparison < 0) {
            result = current;
        }
    }
    return result;
}
function min(items) {
    let result;
    for (let current of items) {
        if (result === undefined) {
            result = current;
            continue;
        }
        let comparison = result.compareTo(current);
        if (comparison > 0) {
            result = current;
        }
    }
    return result;
}
/** A tree structure used to record the semantic context in which
 *  an ATN configuration is valid.  It's either a single predicate,
 *  a conjunction `p1&&p2`, or a sum of products `p1||p2`.
 *
 *  I have scoped the {@link AND}, {@link OR}, and {@link Predicate} subclasses of
 *  {@link SemanticContext} within the scope of this outer class.
 */
class SemanticContext {
    /**
     * The default {@link SemanticContext}, which is semantically equivalent to
     * a predicate of the form `{true}?`.
     */
    static get NONE() {
        if (SemanticContext._NONE === undefined) {
            SemanticContext._NONE = new SemanticContext.Predicate();
        }
        return SemanticContext._NONE;
    }
    /**
     * Evaluate the precedence predicates for the context and reduce the result.
     *
     * @param parser The parser instance.
     * @param parserCallStack
     * @returns The simplified semantic context after precedence predicates are
     * evaluated, which will be one of the following values.
     *
     * * {@link #NONE}: if the predicate simplifies to `true` after
     *   precedence predicates are evaluated.
     * * `undefined`: if the predicate simplifies to `false` after
     *   precedence predicates are evaluated.
     * * `this`: if the semantic context is not changed as a result of
     *   precedence predicate evaluation.
     * * A non-`undefined` {@link SemanticContext}: the new simplified
     *   semantic context after precedence predicates are evaluated.
     */
    evalPrecedence(parser, parserCallStack) {
        return this;
    }
    static and(a, b) {
        if (!a || a === SemanticContext.NONE) {
            return b;
        }
        if (b === SemanticContext.NONE) {
            return a;
        }
        let result = new SemanticContext.AND(a, b);
        if (result.opnds.length === 1) {
            return result.opnds[0];
        }
        return result;
    }
    /**
     *
     *  @see ParserATNSimulator#getPredsForAmbigAlts
     */
    static or(a, b) {
        if (!a) {
            return b;
        }
        if (a === SemanticContext.NONE || b === SemanticContext.NONE) {
            return SemanticContext.NONE;
        }
        let result = new SemanticContext.OR(a, b);
        if (result.opnds.length === 1) {
            return result.opnds[0];
        }
        return result;
    }
}
exports.SemanticContext = SemanticContext;
(function (SemanticContext) {
    /**
     * This random 30-bit prime represents the value of `AND.class.hashCode()`.
     */
    const AND_HASHCODE = 40363613;
    /**
     * This random 30-bit prime represents the value of `OR.class.hashCode()`.
     */
    const OR_HASHCODE = 486279973;
    function filterPrecedencePredicates(collection) {
        let result = [];
        for (let i = 0; i < collection.length; i++) {
            let context = collection[i];
            if (context instanceof SemanticContext.PrecedencePredicate) {
                result.push(context);
                // Remove the item from 'collection' and move i back so we look at the same index again
                collection.splice(i, 1);
                i--;
            }
        }
        return result;
    }
    class Predicate extends SemanticContext {
        constructor(ruleIndex = -1, predIndex = -1, isCtxDependent = false) {
            super();
            this.ruleIndex = ruleIndex;
            this.predIndex = predIndex;
            this.isCtxDependent = isCtxDependent;
        }
        eval(parser, parserCallStack) {
            let localctx = this.isCtxDependent ? parserCallStack : undefined;
            return parser.sempred(localctx, this.ruleIndex, this.predIndex);
        }
        hashCode() {
            let hashCode = MurmurHash_1.MurmurHash.initialize();
            hashCode = MurmurHash_1.MurmurHash.update(hashCode, this.ruleIndex);
            hashCode = MurmurHash_1.MurmurHash.update(hashCode, this.predIndex);
            hashCode = MurmurHash_1.MurmurHash.update(hashCode, this.isCtxDependent ? 1 : 0);
            hashCode = MurmurHash_1.MurmurHash.finish(hashCode, 3);
            return hashCode;
        }
        equals(obj) {
            if (!(obj instanceof Predicate)) {
                return false;
            }
            if (this === obj) {
                return true;
            }
            return this.ruleIndex === obj.ruleIndex &&
                this.predIndex === obj.predIndex &&
                this.isCtxDependent === obj.isCtxDependent;
        }
        toString() {
            return "{" + this.ruleIndex + ":" + this.predIndex + "}?";
        }
    }
    __decorate([
        Decorators.Override
    ], Predicate.prototype, "eval", null);
    __decorate([
        Decorators.Override
    ], Predicate.prototype, "hashCode", null);
    __decorate([
        Decorators.Override
    ], Predicate.prototype, "equals", null);
    __decorate([
        Decorators.Override
    ], Predicate.prototype, "toString", null);
    SemanticContext.Predicate = Predicate;
    class PrecedencePredicate extends SemanticContext {
        constructor(precedence) {
            super();
            this.precedence = precedence;
        }
        eval(parser, parserCallStack) {
            return parser.precpred(parserCallStack, this.precedence);
        }
        evalPrecedence(parser, parserCallStack) {
            if (parser.precpred(parserCallStack, this.precedence)) {
                return SemanticContext.NONE;
            }
            else {
                return undefined;
            }
        }
        compareTo(o) {
            return this.precedence - o.precedence;
        }
        hashCode() {
            let hashCode = 1;
            hashCode = 31 * hashCode + this.precedence;
            return hashCode;
        }
        equals(obj) {
            if (!(obj instanceof PrecedencePredicate)) {
                return false;
            }
            if (this === obj) {
                return true;
            }
            return this.precedence === obj.precedence;
        }
        toString() {
            return "{" + this.precedence + ">=prec}?";
        }
    }
    __decorate([
        Decorators.Override
    ], PrecedencePredicate.prototype, "eval", null);
    __decorate([
        Decorators.Override
    ], PrecedencePredicate.prototype, "evalPrecedence", null);
    __decorate([
        Decorators.Override
    ], PrecedencePredicate.prototype, "compareTo", null);
    __decorate([
        Decorators.Override
    ], PrecedencePredicate.prototype, "hashCode", null);
    __decorate([
        Decorators.Override
    ], PrecedencePredicate.prototype, "equals", null);
    __decorate([
        Decorators.Override
    ], PrecedencePredicate.prototype, "toString", null);
    SemanticContext.PrecedencePredicate = PrecedencePredicate;
    /**
     * This is the base class for semantic context "operators", which operate on
     * a collection of semantic context "operands".
     *
     * @since 4.3
     */
    class Operator extends SemanticContext {
    }
    SemanticContext.Operator = Operator;
    /**
     * A semantic context which is true whenever none of the contained contexts
     * is false.
     */
    let AND = class AND extends Operator {
        constructor(a, b) {
            super();
            let operands = new Array2DHashSet_1.Array2DHashSet(ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE);
            if (a instanceof AND) {
                operands.addAll(a.opnds);
            }
            else {
                operands.add(a);
            }
            if (b instanceof AND) {
                operands.addAll(b.opnds);
            }
            else {
                operands.add(b);
            }
            this.opnds = operands.toArray();
            let precedencePredicates = filterPrecedencePredicates(this.opnds);
            // interested in the transition with the lowest precedence
            let reduced = min(precedencePredicates);
            if (reduced) {
                this.opnds.push(reduced);
            }
        }
        get operands() {
            return this.opnds;
        }
        equals(obj) {
            if (this === obj) {
                return true;
            }
            if (!(obj instanceof AND)) {
                return false;
            }
            return ArrayEqualityComparator_1.ArrayEqualityComparator.INSTANCE.equals(this.opnds, obj.opnds);
        }
        hashCode() {
            return MurmurHash_1.MurmurHash.hashCode(this.opnds, AND_HASHCODE);
        }
        /**
         * {@inheritDoc}
         *
         * The evaluation of predicates by this context is short-circuiting, but
         * unordered.
         */
        eval(parser, parserCallStack) {
            for (let opnd of this.opnds) {
                if (!opnd.eval(parser, parserCallStack)) {
                    return false;
                }
            }
            return true;
        }
        evalPrecedence(parser, parserCallStack) {
            let differs = false;
            let operands = [];
            for (let context of this.opnds) {
                let evaluated = context.evalPrecedence(parser, parserCallStack);
                differs = differs || (evaluated !== context);
                if (evaluated == null) {
                    // The AND context is false if any element is false
                    return undefined;
                }
                else if (evaluated !== SemanticContext.NONE) {
                    // Reduce the result by skipping true elements
                    operands.push(evaluated);
                }
            }
            if (!differs) {
                return this;
            }
            if (operands.length === 0) {
                // all elements were true, so the AND context is true
                return SemanticContext.NONE;
            }
            let result = operands[0];
            for (let i = 1; i < operands.length; i++) {
                result = SemanticContext.and(result, operands[i]);
            }
            return result;
        }
        toString() {
            return Utils.join(this.opnds, "&&");
        }
    };
    __decorate([
        Decorators.Override
    ], AND.prototype, "operands", null);
    __decorate([
        Decorators.Override
    ], AND.prototype, "equals", null);
    __decorate([
        Decorators.Override
    ], AND.prototype, "hashCode", null);
    __decorate([
        Decorators.Override
    ], AND.prototype, "eval", null);
    __decorate([
        Decorators.Override
    ], AND.prototype, "evalPrecedence", null);
    __decorate([
        Decorators.Override
    ], AND.prototype, "toString", null);
    AND = __decorate([
        __param(0, Decorators.NotNull), __param(1, Decorators.NotNull)
    ], AND);
    SemanticContext.AND = AND;
    /**
     * A semantic context which is true whenever at least one of the contained
     * contexts is true.
     */
    let OR = class OR extends Operator {
        constructor(a, b) {
            super();
            let operands = new Array2DHashSet_1.Array2DHashSet(ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE);
            if (a instanceof OR) {
                operands.addAll(a.opnds);
            }
            else {
                operands.add(a);
            }
            if (b instanceof OR) {
                operands.addAll(b.opnds);
            }
            else {
                operands.add(b);
            }
            this.opnds = operands.toArray();
            let precedencePredicates = filterPrecedencePredicates(this.opnds);
            // interested in the transition with the highest precedence
            let reduced = max(precedencePredicates);
            if (reduced) {
                this.opnds.push(reduced);
            }
        }
        get operands() {
            return this.opnds;
        }
        equals(obj) {
            if (this === obj) {
                return true;
            }
            if (!(obj instanceof OR)) {
                return false;
            }
            return ArrayEqualityComparator_1.ArrayEqualityComparator.INSTANCE.equals(this.opnds, obj.opnds);
        }
        hashCode() {
            return MurmurHash_1.MurmurHash.hashCode(this.opnds, OR_HASHCODE);
        }
        /**
         * {@inheritDoc}
         *
         * The evaluation of predicates by this context is short-circuiting, but
         * unordered.
         */
        eval(parser, parserCallStack) {
            for (let opnd of this.opnds) {
                if (opnd.eval(parser, parserCallStack)) {
                    return true;
                }
            }
            return false;
        }
        evalPrecedence(parser, parserCallStack) {
            let differs = false;
            let operands = [];
            for (let context of this.opnds) {
                let evaluated = context.evalPrecedence(parser, parserCallStack);
                differs = differs || (evaluated !== context);
                if (evaluated === SemanticContext.NONE) {
                    // The OR context is true if any element is true
                    return SemanticContext.NONE;
                }
                else if (evaluated) {
                    // Reduce the result by skipping false elements
                    operands.push(evaluated);
                }
            }
            if (!differs) {
                return this;
            }
            if (operands.length === 0) {
                // all elements were false, so the OR context is false
                return undefined;
            }
            let result = operands[0];
            for (let i = 1; i < operands.length; i++) {
                result = SemanticContext.or(result, operands[i]);
            }
            return result;
        }
        toString() {
            return Utils.join(this.opnds, "||");
        }
    };
    __decorate([
        Decorators.Override
    ], OR.prototype, "operands", null);
    __decorate([
        Decorators.Override
    ], OR.prototype, "equals", null);
    __decorate([
        Decorators.Override
    ], OR.prototype, "hashCode", null);
    __decorate([
        Decorators.Override
    ], OR.prototype, "eval", null);
    __decorate([
        Decorators.Override
    ], OR.prototype, "evalPrecedence", null);
    __decorate([
        Decorators.Override
    ], OR.prototype, "toString", null);
    OR = __decorate([
        __param(0, Decorators.NotNull), __param(1, Decorators.NotNull)
    ], OR);
    SemanticContext.OR = OR;
})(SemanticContext = exports.SemanticContext || (exports.SemanticContext = {}));

});

export { Array2DHashSet_1 as A, MurmurHash_1 as M, ObjectEqualityComparator_1 as O, SemanticContext_1 as S, Transition_1 as T, AbstractPredicateTransition_1 as a, ArrayEqualityComparator_1 as b };
