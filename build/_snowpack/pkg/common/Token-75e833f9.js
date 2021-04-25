import { c as createCommonjsModule } from './_commonjsHelpers-8c19dec8.js';

var IntStream_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntStream = void 0;
(function (IntStream) {
    /**
     * The value returned by {@link #LA LA()} when the end of the stream is
     * reached.
     */
    IntStream.EOF = -1;
    /**
     * The value returned by {@link #getSourceName} when the actual name of the
     * underlying source is not known.
     */
    IntStream.UNKNOWN_SOURCE_NAME = "<unknown>";
})(exports.IntStream || (exports.IntStream = {}));

});

var Token_1 = createCommonjsModule(function (module, exports) {
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
(function (Token) {
    Token.INVALID_TYPE = 0;
    /** During lookahead operations, this "token" signifies we hit rule end ATN state
     *  and did not follow it despite needing to.
     */
    Token.EPSILON = -2;
    Token.MIN_USER_TOKEN_TYPE = 1;
    Token.EOF = IntStream_1.IntStream.EOF;
    /** All tokens go to the parser (unless skip() is called in that rule)
     *  on a particular "channel".  The parser tunes to a particular channel
     *  so that whitespace etc... can go to the parser on a "hidden" channel.
     */
    Token.DEFAULT_CHANNEL = 0;
    /** Anything on different channel than DEFAULT_CHANNEL is not parsed
     *  by parser.
     */
    Token.HIDDEN_CHANNEL = 1;
    /**
     * This is the minimum constant value which can be assigned to a
     * user-defined token channel.
     *
     * The non-negative numbers less than {@link #MIN_USER_CHANNEL_VALUE} are
     * assigned to the predefined channels {@link #DEFAULT_CHANNEL} and
     * {@link #HIDDEN_CHANNEL}.
     *
     * @see `Token.channel`
     */
    Token.MIN_USER_CHANNEL_VALUE = 2;
})(exports.Token || (exports.Token = {}));

});

export { IntStream_1 as I, Token_1 as T };
