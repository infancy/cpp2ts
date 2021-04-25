var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var ANTLRErrorListener = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
});
var ANTLRErrorStrategy = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
});
var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var inited = false;
function init() {
  inited = true;
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;
}
function toByteArray(b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  placeHolders = b64[len - 2] === "=" ? 2 : b64[len - 1] === "=" ? 1 : 0;
  arr = new Arr(len * 3 / 4 - placeHolders);
  l = placeHolders > 0 ? len - 4 : len;
  var L = 0;
  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 255;
    arr[L++] = tmp >> 8 & 255;
    arr[L++] = tmp & 255;
  }
  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 255;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 255;
    arr[L++] = tmp & 255;
  }
  return arr;
}
function tripletToBase64(num) {
  return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }
  return output.join("");
}
function fromByteArray(uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3;
  var output = "";
  var parts = [];
  var maxChunkLength = 16383;
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 63];
    output += "==";
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 63];
    output += lookup[tmp << 2 & 63];
    output += "=";
  }
  parts.push(output);
  return parts.join("");
}
function read(buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
  }
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
  }
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}
function write(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);
  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
  }
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
  }
  buffer[offset + i - d] |= s * 128;
}
var toString = {}.toString;
var isArray = Array.isArray || function(arr) {
  return toString.call(arr) == "[object Array]";
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var INSPECT_MAX_BYTES = 50;
Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== void 0 ? global$1.TYPED_ARRAY_SUPPORT : true;
function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError("Invalid typed array length");
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }
  return that;
}
function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  }
  if (typeof arg === "number") {
    if (typeof encodingOrOffset === "string") {
      throw new Error("If encoding is specified then the first argument must be a string");
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192;
Buffer._augment = function(arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};
function from(that, value, encodingOrOffset, length) {
  if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }
  if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }
  if (typeof value === "string") {
    return fromString(that, value, encodingOrOffset);
  }
  return fromObject(that, value);
}
Buffer.from = function(value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};
if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
}
function assertSize(size) {
  if (typeof size !== "number") {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}
function alloc(that, size, fill2, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill2 !== void 0) {
    return typeof encoding === "string" ? createBuffer(that, size).fill(fill2, encoding) : createBuffer(that, size).fill(fill2);
  }
  return createBuffer(that, size);
}
Buffer.alloc = function(size, fill2, encoding) {
  return alloc(null, size, fill2, encoding);
};
function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}
Buffer.allocUnsafe = function(size) {
  return allocUnsafe(null, size);
};
Buffer.allocUnsafeSlow = function(size) {
  return allocUnsafe(null, size);
};
function fromString(that, string, encoding) {
  if (typeof encoding !== "string" || encoding === "") {
    encoding = "utf8";
  }
  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }
  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);
  if (actual !== length) {
    that = that.slice(0, actual);
  }
  return that;
}
function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}
function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength;
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError("'offset' is out of bounds");
  }
  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError("'length' is out of bounds");
  }
  if (byteOffset === void 0 && length === void 0) {
    array = new Uint8Array(array);
  } else if (length === void 0) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    that = fromArrayLike(that, array);
  }
  return that;
}
function fromObject(that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);
    if (that.length === 0) {
      return that;
    }
    obj.copy(that, 0, 0, len);
    return that;
  }
  if (obj) {
    if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
      if (typeof obj.length !== "number" || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }
    if (obj.type === "Buffer" && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function checked(length) {
  if (length >= kMaxLength()) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
  }
  return length | 0;
}
Buffer.isBuffer = isBuffer;
function internalIsBuffer(b) {
  return !!(b != null && b._isBuffer);
}
Buffer.compare = function compare(a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError("Arguments must be Buffers");
  }
  if (a === b)
    return 0;
  var x = a.length;
  var y = b.length;
  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }
  if (x < y)
    return -1;
  if (y < x)
    return 1;
  return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true;
    default:
      return false;
  }
};
Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }
  if (list.length === 0) {
    return Buffer.alloc(0);
  }
  var i;
  if (length === void 0) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }
  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};
function byteLength(string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== "string") {
    string = "" + string;
  }
  var len = string.length;
  if (len === 0)
    return 0;
  var loweredCase = false;
  for (; ; ) {
    switch (encoding) {
      case "ascii":
      case "latin1":
      case "binary":
        return len;
      case "utf8":
      case "utf-8":
      case void 0:
        return utf8ToBytes(string).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return len * 2;
      case "hex":
        return len >>> 1;
      case "base64":
        return base64ToBytes(string).length;
      default:
        if (loweredCase)
          return utf8ToBytes(string).length;
        encoding = ("" + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
  var loweredCase = false;
  if (start === void 0 || start < 0) {
    start = 0;
  }
  if (start > this.length) {
    return "";
  }
  if (end === void 0 || end > this.length) {
    end = this.length;
  }
  if (end <= 0) {
    return "";
  }
  end >>>= 0;
  start >>>= 0;
  if (end <= start) {
    return "";
  }
  if (!encoding)
    encoding = "utf8";
  while (true) {
    switch (encoding) {
      case "hex":
        return hexSlice(this, start, end);
      case "utf8":
      case "utf-8":
        return utf8Slice(this, start, end);
      case "ascii":
        return asciiSlice(this, start, end);
      case "latin1":
      case "binary":
        return latin1Slice(this, start, end);
      case "base64":
        return base64Slice(this, start, end);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return utf16leSlice(this, start, end);
      default:
        if (loweredCase)
          throw new TypeError("Unknown encoding: " + encoding);
        encoding = (encoding + "").toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};
Buffer.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};
Buffer.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};
Buffer.prototype.toString = function toString2() {
  var length = this.length | 0;
  if (length === 0)
    return "";
  if (arguments.length === 0)
    return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};
Buffer.prototype.equals = function equals(b) {
  if (!internalIsBuffer(b))
    throw new TypeError("Argument must be a Buffer");
  if (this === b)
    return true;
  return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
  var str = "";
  var max = INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
    if (this.length > max)
      str += " ... ";
  }
  return "<Buffer " + str + ">";
};
Buffer.prototype.compare = function compare2(target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError("Argument must be a Buffer");
  }
  if (start === void 0) {
    start = 0;
  }
  if (end === void 0) {
    end = target ? target.length : 0;
  }
  if (thisStart === void 0) {
    thisStart = 0;
  }
  if (thisEnd === void 0) {
    thisEnd = this.length;
  }
  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError("out of range index");
  }
  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }
  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target)
    return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);
  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }
  if (x < y)
    return -1;
  if (y < x)
    return 1;
  return 0;
};
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  if (buffer.length === 0)
    return -1;
  if (typeof byteOffset === "string") {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 2147483647) {
    byteOffset = 2147483647;
  } else if (byteOffset < -2147483648) {
    byteOffset = -2147483648;
  }
  byteOffset = +byteOffset;
  if (isNaN(byteOffset)) {
    byteOffset = dir ? 0 : buffer.length - 1;
  }
  if (byteOffset < 0)
    byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir)
      return -1;
    else
      byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir)
      byteOffset = 0;
    else
      return -1;
  }
  if (typeof val === "string") {
    val = Buffer.from(val, encoding);
  }
  if (internalIsBuffer(val)) {
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === "number") {
    val = val & 255;
    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === "function") {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;
  if (encoding !== void 0) {
    encoding = String(encoding).toLowerCase();
    if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }
  function read2(buf, i2) {
    if (indexSize === 1) {
      return buf[i2];
    } else {
      return buf.readUInt16BE(i2 * indexSize);
    }
  }
  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read2(arr, i) === read2(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1)
          foundIndex = i;
        if (i - foundIndex + 1 === valLength)
          return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1)
          i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength)
      byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read2(arr, i + j) !== read2(val, j)) {
          found = false;
          break;
        }
      }
      if (found)
        return i;
    }
  }
  return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }
  var strLen = string.length;
  if (strLen % 2 !== 0)
    throw new TypeError("Invalid hex string");
  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed))
      return i;
    buf[offset + i] = parsed;
  }
  return i;
}
function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}
function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write2(string, offset, length, encoding) {
  if (offset === void 0) {
    encoding = "utf8";
    length = this.length;
    offset = 0;
  } else if (length === void 0 && typeof offset === "string") {
    encoding = offset;
    length = this.length;
    offset = 0;
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === void 0)
        encoding = "utf8";
    } else {
      encoding = length;
      length = void 0;
    }
  } else {
    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
  }
  var remaining = this.length - offset;
  if (length === void 0 || length > remaining)
    length = remaining;
  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError("Attempt to write outside buffer bounds");
  }
  if (!encoding)
    encoding = "utf8";
  var loweredCase = false;
  for (; ; ) {
    switch (encoding) {
      case "hex":
        return hexWrite(this, string, offset, length);
      case "utf8":
      case "utf-8":
        return utf8Write(this, string, offset, length);
      case "ascii":
        return asciiWrite(this, string, offset, length);
      case "latin1":
      case "binary":
        return latin1Write(this, string, offset, length);
      case "base64":
        return base64Write(this, string, offset, length);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return ucs2Write(this, string, offset, length);
      default:
        if (loweredCase)
          throw new TypeError("Unknown encoding: " + encoding);
        encoding = ("" + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};
Buffer.prototype.toJSON = function toJSON() {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf);
  } else {
    return fromByteArray(buf.slice(start, end));
  }
}
function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 128) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 192) === 128) {
            tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
            if (tempCodePoint > 127) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
            if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
              codePoint = tempCodePoint;
            }
          }
      }
    }
    if (codePoint === null) {
      codePoint = 65533;
      bytesPerSequence = 1;
    } else if (codePoint > 65535) {
      codePoint -= 65536;
      res.push(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    res.push(codePoint);
    i += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}
var MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints);
  }
  var res = "";
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}
function asciiSlice(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 127);
  }
  return ret;
}
function latin1Slice(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}
function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0)
    start = 0;
  if (!end || end < 0 || end > len)
    end = len;
  var out = "";
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}
function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = "";
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}
Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === void 0 ? len : ~~end;
  if (start < 0) {
    start += len;
    if (start < 0)
      start = 0;
  } else if (start > len) {
    start = len;
  }
  if (end < 0) {
    end += len;
    if (end < 0)
      end = 0;
  } else if (end > len) {
    end = len;
  }
  if (end < start)
    end = start;
  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, void 0);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }
  return newBuf;
};
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0)
    throw new RangeError("offset is not uint");
  if (offset + ext > length)
    throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert)
    checkOffset(offset, byteLength2, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength2 && (mul *= 256)) {
    val += this[offset + i] * mul;
  }
  return val;
};
Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength2, this.length);
  }
  var val = this[offset + --byteLength2];
  var mul = 1;
  while (byteLength2 > 0 && (mul *= 256)) {
    val += this[offset + --byteLength2] * mul;
  }
  return val;
};
Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length);
  return this[offset];
};
Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length);
  return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert)
    checkOffset(offset, byteLength2, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength2 && (mul *= 256)) {
    val += this[offset + i] * mul;
  }
  mul *= 128;
  if (val >= mul)
    val -= Math.pow(2, 8 * byteLength2);
  return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert)
    checkOffset(offset, byteLength2, this.length);
  var i = byteLength2;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 256)) {
    val += this[offset + --i] * mul;
  }
  mul *= 128;
  if (val >= mul)
    val -= Math.pow(2, 8 * byteLength2);
  return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length);
  if (!(this[offset] & 128))
    return this[offset];
  return (255 - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min)
    throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length)
    throw new RangeError("Index out of range");
}
Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
    checkInt(this, value, offset, byteLength2, maxBytes, 0);
  }
  var mul = 1;
  var i = 0;
  this[offset] = value & 255;
  while (++i < byteLength2 && (mul *= 256)) {
    this[offset + i] = value / mul & 255;
  }
  return offset + byteLength2;
};
Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
    checkInt(this, value, offset, byteLength2, maxBytes, 0);
  }
  var i = byteLength2 - 1;
  var mul = 1;
  this[offset + i] = value & 255;
  while (--i >= 0 && (mul *= 256)) {
    this[offset + i] = value / mul & 255;
  }
  return offset + byteLength2;
};
Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 1, 255, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT)
    value = Math.floor(value);
  this[offset] = value & 255;
  return offset + 1;
};
function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0)
    value = 65535 + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}
Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 2, 65535, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};
Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 2, 65535, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};
function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0)
    value = 4294967295 + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
  }
}
Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 4, 4294967295, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};
Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 4, 4294967295, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength2 - 1);
    checkInt(this, value, offset, byteLength2, limit - 1, -limit);
  }
  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 255;
  while (++i < byteLength2 && (mul *= 256)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 255;
  }
  return offset + byteLength2;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength2 - 1);
    checkInt(this, value, offset, byteLength2, limit - 1, -limit);
  }
  var i = byteLength2 - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 255;
  while (--i >= 0 && (mul *= 256)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 255;
  }
  return offset + byteLength2;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 1, 127, -128);
  if (!Buffer.TYPED_ARRAY_SUPPORT)
    value = Math.floor(value);
  if (value < 0)
    value = 255 + value + 1;
  this[offset] = value & 255;
  return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 2, 32767, -32768);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 2, 32767, -32768);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 4, 2147483647, -2147483648);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert)
    checkInt(this, value, offset, 4, 2147483647, -2147483648);
  if (value < 0)
    value = 4294967295 + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length)
    throw new RangeError("Index out of range");
  if (offset < 0)
    throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start)
    start = 0;
  if (!end && end !== 0)
    end = this.length;
  if (targetStart >= target.length)
    targetStart = target.length;
  if (!targetStart)
    targetStart = 0;
  if (end > 0 && end < start)
    end = start;
  if (end === start)
    return 0;
  if (target.length === 0 || this.length === 0)
    return 0;
  if (targetStart < 0) {
    throw new RangeError("targetStart out of bounds");
  }
  if (start < 0 || start >= this.length)
    throw new RangeError("sourceStart out of bounds");
  if (end < 0)
    throw new RangeError("sourceEnd out of bounds");
  if (end > this.length)
    end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }
  var len = end - start;
  var i;
  if (this === target && start < targetStart && targetStart < end) {
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }
  return len;
};
Buffer.prototype.fill = function fill(val, start, end, encoding) {
  if (typeof val === "string") {
    if (typeof start === "string") {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === "string") {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== void 0 && typeof encoding !== "string") {
      throw new TypeError("encoding must be a string");
    }
    if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) {
      throw new TypeError("Unknown encoding: " + encoding);
    }
  } else if (typeof val === "number") {
    val = val & 255;
  }
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError("Out of range index");
  }
  if (end <= start) {
    return this;
  }
  start = start >>> 0;
  end = end === void 0 ? this.length : end >>> 0;
  if (!val)
    val = 0;
  var i;
  if (typeof val === "number") {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }
  return this;
};
var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
function base64clean(str) {
  str = stringtrim(str).replace(INVALID_BASE64_RE, "");
  if (str.length < 2)
    return "";
  while (str.length % 4 !== 0) {
    str = str + "=";
  }
  return str;
}
function stringtrim(str) {
  if (str.trim)
    return str.trim();
  return str.replace(/^\s+|\s+$/g, "");
}
function toHex(n) {
  if (n < 16)
    return "0" + n.toString(16);
  return n.toString(16);
}
function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];
  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);
    if (codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        } else if (i + 1 === length) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        }
        leadSurrogate = codePoint;
        continue;
      }
      if (codePoint < 56320) {
        if ((units -= 3) > -1)
          bytes.push(239, 191, 189);
        leadSurrogate = codePoint;
        continue;
      }
      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else if (leadSurrogate) {
      if ((units -= 3) > -1)
        bytes.push(239, 191, 189);
    }
    leadSurrogate = null;
    if (codePoint < 128) {
      if ((units -= 1) < 0)
        break;
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0)
        break;
      bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0)
        break;
      bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0)
        break;
      bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else {
      throw new Error("Invalid code point");
    }
  }
  return bytes;
}
function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    byteArray.push(str.charCodeAt(i) & 255);
  }
  return byteArray;
}
function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0)
      break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }
  return byteArray;
}
function base64ToBytes(str) {
  return toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length)
      break;
    dst[i + offset] = src[i];
  }
  return i;
}
function isnan(val) {
  return val !== val;
}
function isBuffer(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
}
function isFastBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
}
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isFastBuffer(obj.slice(0, 0));
}
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
var globalContext;
if (typeof window !== "undefined") {
  globalContext = window;
} else if (typeof self !== "undefined") {
  globalContext = self;
} else {
  globalContext = {};
}
if (typeof globalContext.setTimeout === "function") {
  cachedSetTimeout = setTimeout;
}
if (typeof globalContext.clearTimeout === "function") {
  cachedClearTimeout = clearTimeout;
}
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    return setTimeout(fun, 0);
  }
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e2) {
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    return clearTimeout(marker);
  }
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      return cachedClearTimeout.call(null, marker);
    } catch (e2) {
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
function nextTick(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function() {
  this.fun.apply(null, this.array);
};
var title = "browser";
var platform = "browser";
var browser = true;
var argv = [];
var version = "";
var versions = {};
var release = {};
var config = {};
function noop() {
}
var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;
function binding(name) {
  throw new Error("process.binding is not supported");
}
function cwd() {
  return "/";
}
function chdir(dir) {
  throw new Error("process.chdir is not supported");
}
function umask() {
  return 0;
}
var performance = globalContext.performance || {};
var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {
  return new Date().getTime();
};
function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
}
var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1e3;
}
var process = {
  nextTick,
  title,
  browser,
  env: {NODE_ENV: "production"},
  argv,
  version,
  versions,
  on,
  addListener,
  once,
  off,
  removeListener,
  removeAllListeners,
  emit,
  binding,
  cwd,
  chdir,
  umask,
  hrtime,
  platform,
  release,
  config,
  uptime
};
var inherits;
if (typeof Object.create === "function") {
  inherits = function inherits2(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  inherits = function inherits2(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function() {
    };
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}
var inherits$1 = inherits;
var formatRegExp = /%[sdj%]/g;
function format(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect2(arguments[i]));
    }
    return objects.join(" ");
  }
  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x2) {
    if (x2 === "%%")
      return "%";
    if (i >= len)
      return x2;
    switch (x2) {
      case "%s":
        return String(args[i++]);
      case "%d":
        return Number(args[i++]);
      case "%j":
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return "[Circular]";
        }
      default:
        return x2;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += " " + x;
    } else {
      str += " " + inspect2(x);
    }
  }
  return str;
}
function deprecate(fn, msg) {
  if (isUndefined(global$1.process)) {
    return function() {
      return deprecate(fn, msg).apply(this, arguments);
    };
  }
  if (process.noDeprecation === true) {
    return fn;
  }
  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }
  return deprecated;
}
var debugs = {};
var debugEnviron;
function debuglog(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || "";
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp("\\b" + set + "\\b", "i").test(debugEnviron)) {
      var pid = 0;
      debugs[set] = function() {
        var msg = format.apply(null, arguments);
        console.error("%s %d: %s", set, pid, msg);
      };
    } else {
      debugs[set] = function() {
      };
    }
  }
  return debugs[set];
}
function inspect2(obj, opts) {
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  if (arguments.length >= 3)
    ctx.depth = arguments[2];
  if (arguments.length >= 4)
    ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    ctx.showHidden = opts;
  } else if (opts) {
    _extend(ctx, opts);
  }
  if (isUndefined(ctx.showHidden))
    ctx.showHidden = false;
  if (isUndefined(ctx.depth))
    ctx.depth = 2;
  if (isUndefined(ctx.colors))
    ctx.colors = false;
  if (isUndefined(ctx.customInspect))
    ctx.customInspect = true;
  if (ctx.colors)
    ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
inspect2.colors = {
  bold: [1, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  white: [37, 39],
  grey: [90, 39],
  black: [30, 39],
  blue: [34, 39],
  cyan: [36, 39],
  green: [32, 39],
  magenta: [35, 39],
  red: [31, 39],
  yellow: [33, 39]
};
inspect2.styles = {
  special: "cyan",
  number: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  date: "magenta",
  regexp: "red"
};
function stylizeWithColor(str, styleType) {
  var style = inspect2.styles[styleType];
  if (style) {
    return "[" + inspect2.colors[style][0] + "m" + str + "[" + inspect2.colors[style][1] + "m";
  } else {
    return str;
  }
}
function stylizeNoColor(str, styleType) {
  return str;
}
function arrayToHash(array) {
  var hash = {};
  array.forEach(function(val, idx) {
    hash[val] = true;
  });
  return hash;
}
function formatValue(ctx, value, recurseTimes) {
  if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== inspect2 && !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);
  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }
  if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
    return formatError(value);
  }
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ": " + value.name : "";
      return ctx.stylize("[Function" + name + "]", "special");
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), "date");
    }
    if (isError(value)) {
      return formatError(value);
    }
  }
  var base = "", array = false, braces = ["{", "}"];
  if (isArray$1(value)) {
    array = true;
    braces = ["[", "]"];
  }
  if (isFunction(value)) {
    var n = value.name ? ": " + value.name : "";
    base = " [Function" + n + "]";
  }
  if (isRegExp(value)) {
    base = " " + RegExp.prototype.toString.call(value);
  }
  if (isDate(value)) {
    base = " " + Date.prototype.toUTCString.call(value);
  }
  if (isError(value)) {
    base = " " + formatError(value);
  }
  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }
  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
    } else {
      return ctx.stylize("[Object]", "special");
    }
  }
  ctx.seen.push(value);
  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }
  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}
function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize("undefined", "undefined");
  if (isString(value)) {
    var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
    return ctx.stylize(simple, "string");
  }
  if (isNumber(value))
    return ctx.stylize("" + value, "number");
  if (isBoolean(value))
    return ctx.stylize("" + value, "boolean");
  if (isNull(value))
    return ctx.stylize("null", "null");
}
function formatError(value) {
  return "[" + Error.prototype.toString.call(value) + "]";
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push("");
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || {value: value[key]};
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize("[Getter/Setter]", "special");
    } else {
      str = ctx.stylize("[Getter]", "special");
    }
  } else {
    if (desc.set) {
      str = ctx.stylize("[Setter]", "special");
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = "[" + key + "]";
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf("\n") > -1) {
        if (array) {
          str = str.split("\n").map(function(line) {
            return "  " + line;
          }).join("\n").substr(2);
        } else {
          str = "\n" + str.split("\n").map(function(line) {
            return "   " + line;
          }).join("\n");
        }
      }
    } else {
      str = ctx.stylize("[Circular]", "special");
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify("" + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, "name");
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, "string");
    }
  }
  return name + ": " + str;
}
function reduceToSingleString(output, base, braces) {
  var length = output.reduce(function(prev, cur) {
    if (cur.indexOf("\n") >= 0)
      ;
    return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
  }, 0);
  if (length > 60) {
    return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
  }
  return braces[0] + base + " " + output.join(", ") + " " + braces[1];
}
function isArray$1(ar) {
  return Array.isArray(ar);
}
function isBoolean(arg) {
  return typeof arg === "boolean";
}
function isNull(arg) {
  return arg === null;
}
function isNullOrUndefined(arg) {
  return arg == null;
}
function isNumber(arg) {
  return typeof arg === "number";
}
function isString(arg) {
  return typeof arg === "string";
}
function isSymbol(arg) {
  return typeof arg === "symbol";
}
function isUndefined(arg) {
  return arg === void 0;
}
function isRegExp(re) {
  return isObject(re) && objectToString(re) === "[object RegExp]";
}
function isObject(arg) {
  return typeof arg === "object" && arg !== null;
}
function isDate(d) {
  return isObject(d) && objectToString(d) === "[object Date]";
}
function isError(e) {
  return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
}
function isFunction(arg) {
  return typeof arg === "function";
}
function isPrimitive(arg) {
  return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
}
function isBuffer$1(maybeBuf) {
  return Buffer.isBuffer(maybeBuf);
}
function objectToString(o) {
  return Object.prototype.toString.call(o);
}
function pad(n) {
  return n < 10 ? "0" + n.toString(10) : n.toString(10);
}
var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
function timestamp() {
  var d = new Date();
  var time = [
    pad(d.getHours()),
    pad(d.getMinutes()),
    pad(d.getSeconds())
  ].join(":");
  return [d.getDate(), months[d.getMonth()], time].join(" ");
}
function log() {
  console.log("%s - %s", timestamp(), format.apply(null, arguments));
}
function _extend(origin, add) {
  if (!add || !isObject(add))
    return origin;
  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
var util = {
  inherits: inherits$1,
  _extend,
  log,
  isBuffer: isBuffer$1,
  isPrimitive,
  isFunction,
  isError,
  isDate,
  isObject,
  isRegExp,
  isUndefined,
  isSymbol,
  isString,
  isNumber,
  isNullOrUndefined,
  isNull,
  isBoolean,
  isArray: isArray$1,
  inspect: inspect2,
  deprecate,
  format,
  debuglog
};
var util$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  format,
  deprecate,
  debuglog,
  inspect: inspect2,
  isArray: isArray$1,
  isBoolean,
  isNull,
  isNullOrUndefined,
  isNumber,
  isString,
  isSymbol,
  isUndefined,
  isRegExp,
  isObject,
  isDate,
  isError,
  isFunction,
  isPrimitive,
  isBuffer: isBuffer$1,
  log,
  inherits: inherits$1,
  _extend,
  default: util
});
function compare3(a, b) {
  if (a === b) {
    return 0;
  }
  var x = a.length;
  var y = b.length;
  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }
  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
var hasOwn = Object.prototype.hasOwnProperty;
var objectKeys = Object.keys || function(obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key))
      keys.push(key);
  }
  return keys;
};
var pSlice = Array.prototype.slice;
var _functionsHaveNames;
function functionsHaveNames() {
  if (typeof _functionsHaveNames !== "undefined") {
    return _functionsHaveNames;
  }
  return _functionsHaveNames = function() {
    return function foo() {
    }.name === "foo";
  }();
}
function pToString(obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global$1.ArrayBuffer !== "function") {
    return false;
  }
  if (typeof ArrayBuffer.isView === "function") {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
function assert(value, message) {
  if (!value)
    fail(value, true, message, "==", ok);
}
var regex = /\s*function\s+([^\(\s]*)\s*/;
function getName(func) {
  if (!isFunction(func)) {
    return;
  }
  if (functionsHaveNames()) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = AssertionError;
function AssertionError(options) {
  this.name = "AssertionError";
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    var err = new Error();
    if (err.stack) {
      var out = err.stack;
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf("\n" + fn_name);
      if (idx >= 0) {
        var next_line = out.indexOf("\n", idx + 1);
        out = out.substring(next_line + 1);
      }
      this.stack = out;
    }
  }
}
inherits$1(AssertionError, Error);
function truncate(s, n) {
  if (typeof s === "string") {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect$1(something) {
  if (functionsHaveNames() || !isFunction(something)) {
    return inspect2(something);
  }
  var rawname = getName(something);
  var name = rawname ? ": " + rawname : "";
  return "[Function" + name + "]";
}
function getMessage(self2) {
  return truncate(inspect$1(self2.actual), 128) + " " + self2.operator + " " + truncate(inspect$1(self2.expected), 128);
}
function fail(actual, expected, message, operator, stackStartFunction) {
  throw new AssertionError({
    message,
    actual,
    expected,
    operator,
    stackStartFunction
  });
}
assert.fail = fail;
function ok(value, message) {
  if (!value)
    fail(value, true, message, "==", ok);
}
assert.ok = ok;
assert.equal = equal;
function equal(actual, expected, message) {
  if (actual != expected)
    fail(actual, expected, message, "==", equal);
}
assert.notEqual = notEqual;
function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, "!=", notEqual);
  }
}
assert.deepEqual = deepEqual;
function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, "deepEqual", deepEqual);
  }
}
assert.deepStrictEqual = deepStrictEqual;
function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, "deepStrictEqual", deepStrictEqual);
  }
}
function _deepEqual(actual, expected, strict, memos) {
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare3(actual, expected) === 0;
  } else if (isDate(actual) && isDate(expected)) {
    return actual.getTime() === expected.getTime();
  } else if (isRegExp(actual) && isRegExp(expected)) {
    return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase;
  } else if ((actual === null || typeof actual !== "object") && (expected === null || typeof expected !== "object")) {
    return strict ? actual === expected : actual == expected;
  } else if (isView(actual) && isView(expected) && pToString(actual) === pToString(expected) && !(actual instanceof Float32Array || actual instanceof Float64Array)) {
    return compare3(new Uint8Array(actual.buffer), new Uint8Array(expected.buffer)) === 0;
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};
    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }
    memos.actual.push(actual);
    memos.expected.push(expected);
    return objEquiv(actual, expected, strict, memos);
  }
}
function isArguments(object) {
  return Object.prototype.toString.call(object) == "[object Arguments]";
}
function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === void 0 || b === null || b === void 0)
    return false;
  if (isPrimitive(a) || isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs)
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  if (ka.length !== kb.length)
    return false;
  ka.sort();
  kb.sort();
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}
assert.notDeepEqual = notDeepEqual;
function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, "notDeepEqual", notDeepEqual);
  }
}
assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, "notDeepStrictEqual", notDeepStrictEqual);
  }
}
assert.strictEqual = strictEqual;
function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, "===", strictEqual);
  }
}
assert.notStrictEqual = notStrictEqual;
function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, "!==", notStrictEqual);
  }
}
function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }
  if (Object.prototype.toString.call(expected) == "[object RegExp]") {
    return expected.test(actual);
  }
  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
  }
  if (Error.isPrototypeOf(expected)) {
    return false;
  }
  return expected.call({}, actual) === true;
}
function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}
function _throws(shouldThrow, block, expected, message) {
  var actual;
  if (typeof block !== "function") {
    throw new TypeError('"block" argument must be a function');
  }
  if (typeof expected === "string") {
    message = expected;
    expected = null;
  }
  actual = _tryBlock(block);
  message = (expected && expected.name ? " (" + expected.name + ")." : ".") + (message ? " " + message : ".");
  if (shouldThrow && !actual) {
    fail(actual, expected, "Missing expected exception" + message);
  }
  var userProvidedMessage = typeof message === "string";
  var isUnwantedException = !shouldThrow && isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;
  if (isUnwantedException && userProvidedMessage && expectedException(actual, expected) || isUnexpectedException) {
    fail(actual, expected, "Got unwanted exception" + message);
  }
  if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
    throw actual;
  }
}
assert.throws = throws;
function throws(block, error, message) {
  _throws(true, block, error, message);
}
assert.doesNotThrow = doesNotThrow;
function doesNotThrow(block, error, message) {
  _throws(false, block, error, message);
}
assert.ifError = ifError;
function ifError(err) {
  if (err)
    throw err;
}
var assert$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: assert,
  AssertionError,
  fail,
  ok,
  assert: ok,
  equal,
  notEqual,
  deepEqual,
  deepStrictEqual,
  notDeepEqual,
  notDeepStrictEqual,
  strictEqual,
  notStrictEqual,
  throws,
  doesNotThrow,
  ifError
});
var Decorators = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SuppressWarnings = exports.Override = exports.Nullable = exports.NotNull = void 0;
  function NotNull(target, propertyKey, propertyDescriptor) {
  }
  exports.NotNull = NotNull;
  function Nullable(target, propertyKey, propertyDescriptor) {
  }
  exports.Nullable = Nullable;
  function Override(target, propertyKey, propertyDescriptor) {
  }
  exports.Override = Override;
  function SuppressWarnings(options) {
    return (target, propertyKey, descriptor) => {
    };
  }
  exports.SuppressWarnings = SuppressWarnings;
});
var IntStream_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.IntStream = void 0;
  (function(IntStream2) {
    IntStream2.EOF = -1;
    IntStream2.UNKNOWN_SOURCE_NAME = "<unknown>";
  })(exports.IntStream || (exports.IntStream = {}));
});
var ANTLRInputStream_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ANTLRInputStream = void 0;
  class ANTLRInputStream2 {
    constructor(input) {
      this.p = 0;
      this.data = input;
      this.n = input.length;
    }
    reset() {
      this.p = 0;
    }
    consume() {
      if (this.p >= this.n) {
        assert$1(this.LA(1) === IntStream_1.IntStream.EOF);
        throw new Error("cannot consume EOF");
      }
      if (this.p < this.n) {
        this.p++;
      }
    }
    LA(i) {
      if (i === 0) {
        return 0;
      }
      if (i < 0) {
        i++;
        if (this.p + i - 1 < 0) {
          return IntStream_1.IntStream.EOF;
        }
      }
      if (this.p + i - 1 >= this.n) {
        return IntStream_1.IntStream.EOF;
      }
      return this.data.charCodeAt(this.p + i - 1);
    }
    LT(i) {
      return this.LA(i);
    }
    get index() {
      return this.p;
    }
    get size() {
      return this.n;
    }
    mark() {
      return -1;
    }
    release(marker) {
    }
    seek(index) {
      if (index <= this.p) {
        this.p = index;
        return;
      }
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
      return this.data.substr(start, count);
    }
    get sourceName() {
      if (!this.name) {
        return IntStream_1.IntStream.UNKNOWN_SOURCE_NAME;
      }
      return this.name;
    }
    toString() {
      return this.data;
    }
  }
  __decorate([
    Decorators.Override
  ], ANTLRInputStream2.prototype, "consume", null);
  __decorate([
    Decorators.Override
  ], ANTLRInputStream2.prototype, "LA", null);
  __decorate([
    Decorators.Override
  ], ANTLRInputStream2.prototype, "index", null);
  __decorate([
    Decorators.Override
  ], ANTLRInputStream2.prototype, "size", null);
  __decorate([
    Decorators.Override
  ], ANTLRInputStream2.prototype, "mark", null);
  __decorate([
    Decorators.Override
  ], ANTLRInputStream2.prototype, "release", null);
  __decorate([
    Decorators.Override
  ], ANTLRInputStream2.prototype, "seek", null);
  __decorate([
    Decorators.Override
  ], ANTLRInputStream2.prototype, "getText", null);
  __decorate([
    Decorators.Override
  ], ANTLRInputStream2.prototype, "sourceName", null);
  __decorate([
    Decorators.Override
  ], ANTLRInputStream2.prototype, "toString", null);
  exports.ANTLRInputStream = ANTLRInputStream2;
});
var ATNState_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ATNState = void 0;
  class ATNState {
    constructor() {
      this.stateNumber = ATNState.INVALID_STATE_NUMBER;
      this.ruleIndex = 0;
      this.epsilonOnlyTransitions = false;
      this.transitions = [];
      this.optimizedTransitions = this.transitions;
    }
    getStateNumber() {
      return this.stateNumber;
    }
    get nonStopStateNumber() {
      return this.getStateNumber();
    }
    hashCode() {
      return this.stateNumber;
    }
    equals(o) {
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
      } else if (this.epsilonOnlyTransitions !== e.isEpsilon) {
        this.epsilonOnlyTransitions = false;
        throw new Error("ATN state " + this.stateNumber + " has both epsilon and non-epsilon transitions.");
      }
      this.transitions.splice(index !== void 0 ? index : this.transitions.length, 0, e);
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
  (function(ATNState2) {
    ATNState2.INVALID_STATE_NUMBER = -1;
  })(ATNState = exports.ATNState || (exports.ATNState = {}));
});
var ATNStateType_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ATNStateType = void 0;
  (function(ATNStateType) {
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
var RecognitionException_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RecognitionException = void 0;
  class RecognitionException2 extends Error {
    constructor(recognizer, input, ctx, message) {
      super(message);
      this._offendingState = -1;
      this._recognizer = recognizer;
      this.input = input;
      this.ctx = ctx;
      if (recognizer) {
        this._offendingState = recognizer.state;
      }
    }
    get offendingState() {
      return this._offendingState;
    }
    setOffendingState(offendingState) {
      this._offendingState = offendingState;
    }
    get expectedTokens() {
      if (this._recognizer) {
        return this._recognizer.atn.getExpectedTokens(this._offendingState, this.ctx);
      }
      return void 0;
    }
    get context() {
      return this.ctx;
    }
    get inputStream() {
      return this.input;
    }
    getOffendingToken(recognizer) {
      if (recognizer && recognizer !== this._recognizer) {
        return void 0;
      }
      return this.offendingToken;
    }
    setOffendingToken(recognizer, offendingToken) {
      if (recognizer === this._recognizer) {
        this.offendingToken = offendingToken;
      }
    }
    get recognizer() {
      return this._recognizer;
    }
  }
  exports.RecognitionException = RecognitionException2;
});
var Transition_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Transition = void 0;
  let Transition = class Transition {
    constructor(target) {
      if (target == null) {
        throw new Error("target cannot be null.");
      }
      this.target = target;
    }
    get isEpsilon() {
      return false;
    }
    get label() {
      return void 0;
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
    "PRECEDENCE"
  ];
  __decorate([
    Decorators.NotNull
  ], Transition.prototype, "target", void 0);
  Transition = __decorate([
    __param(0, Decorators.NotNull)
  ], Transition);
  exports.Transition = Transition;
});
var AbstractPredicateTransition_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AbstractPredicateTransition = void 0;
  class AbstractPredicateTransition extends Transition_1.Transition {
    constructor(target) {
      super(target);
    }
  }
  exports.AbstractPredicateTransition = AbstractPredicateTransition;
});
var MurmurHash_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MurmurHash = void 0;
  (function(MurmurHash) {
    const DEFAULT_SEED = 0;
    function initialize(seed = DEFAULT_SEED) {
      return seed;
    }
    MurmurHash.initialize = initialize;
    function update(hash, value) {
      const c1 = 3432918353;
      const c2 = 461845907;
      const r1 = 15;
      const r2 = 13;
      const m = 5;
      const n = 3864292196;
      if (value == null) {
        value = 0;
      } else if (typeof value === "string") {
        value = hashString(value);
      } else if (typeof value === "object") {
        value = value.hashCode();
      }
      let k = value;
      k = Math.imul(k, c1);
      k = k << r1 | k >>> 32 - r1;
      k = Math.imul(k, c2);
      hash = hash ^ k;
      hash = hash << r2 | hash >>> 32 - r2;
      hash = Math.imul(hash, m) + n;
      return hash & 4294967295;
    }
    MurmurHash.update = update;
    function finish(hash, numberOfWords) {
      hash = hash ^ numberOfWords * 4;
      hash = hash ^ hash >>> 16;
      hash = Math.imul(hash, 2246822507);
      hash = hash ^ hash >>> 13;
      hash = Math.imul(hash, 3266489909);
      hash = hash ^ hash >>> 16;
      return hash;
    }
    MurmurHash.finish = finish;
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
    function hashString(str) {
      let len = str.length;
      if (len === 0) {
        return 0;
      }
      let hash = 0;
      for (let i = 0; i < len; i++) {
        let c = str.charCodeAt(i);
        hash = (hash << 5 >>> 0) - hash + c;
        hash |= 0;
      }
      return hash;
    }
  })(exports.MurmurHash || (exports.MurmurHash = {}));
});
var ObjectEqualityComparator_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ObjectEqualityComparator = void 0;
  class ObjectEqualityComparator {
    hashCode(obj) {
      if (obj == null) {
        return 0;
      }
      return obj.hashCode();
    }
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
var DefaultEqualityComparator_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DefaultEqualityComparator = void 0;
  class DefaultEqualityComparator {
    hashCode(obj) {
      if (obj == null) {
        return 0;
      } else if (typeof obj === "string" || typeof obj === "number") {
        return MurmurHash_1.MurmurHash.hashCode([obj]);
      } else {
        return ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE.hashCode(obj);
      }
    }
    equals(a, b) {
      if (a == null) {
        return b == null;
      } else if (typeof a === "string" || typeof a === "number") {
        return a === b;
      } else {
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
var Array2DHashSet_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Array2DHashSet = void 0;
  const INITAL_CAPACITY = 16;
  const LOAD_FACTOR = 0.75;
  class Array2DHashSet {
    constructor(comparatorOrSet, initialCapacity = INITAL_CAPACITY) {
      this.n = 0;
      this.threshold = Math.floor(INITAL_CAPACITY * LOAD_FACTOR);
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
      } else {
        this.comparator = comparatorOrSet || DefaultEqualityComparator_1.DefaultEqualityComparator.INSTANCE;
        this.buckets = this.createBuckets(initialCapacity);
      }
    }
    getOrAdd(o) {
      if (this.n > this.threshold) {
        this.expand();
      }
      return this.getOrAddImpl(o);
    }
    getOrAddImpl(o) {
      let b = this.getBucket(o);
      let bucket = this.buckets[b];
      if (!bucket) {
        bucket = [o];
        this.buckets[b] = bucket;
        this.n++;
        return o;
      }
      for (let existing of bucket) {
        if (this.comparator.equals(existing, o)) {
          return existing;
        }
      }
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
        return void 0;
      }
      for (let e of bucket) {
        if (this.comparator.equals(e, o)) {
          return e;
        }
      }
      return void 0;
    }
    getBucket(o) {
      let hash = this.comparator.hashCode(o);
      let b = hash & this.buckets.length - 1;
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
      assert$1(this.n === oldSize);
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
      let i = 0;
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
      } else {
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
          } else {
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
          } else {
            buf += " ";
          }
          if (o == null) {
            buf += "_";
          } else {
            buf += o.toString();
          }
        }
        buf += "]\n";
      }
      return buf;
    }
    asElementType(o) {
      return o;
    }
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
var ArrayEqualityComparator_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ArrayEqualityComparator = void 0;
  class ArrayEqualityComparator {
    hashCode(obj) {
      if (obj == null) {
        return 0;
      }
      return MurmurHash_1.MurmurHash.hashCode(obj, 0);
    }
    equals(a, b) {
      if (a == null) {
        return b == null;
      } else if (b == null) {
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
var Utils = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.toCharArray = exports.toMap = exports.equals = exports.join = exports.escapeWhitespace = void 0;
  function escapeWhitespace(s, escapeSpaces) {
    return escapeSpaces ? s.replace(/ /, "\xB7") : s.replace(/\t/, "\\t").replace(/\n/, "\\n").replace(/\r/, "\\r");
  }
  exports.escapeWhitespace = escapeWhitespace;
  function join(collection, separator) {
    let buf = "";
    let first = true;
    for (let current of collection) {
      if (first) {
        first = false;
      } else {
        buf += separator;
      }
      buf += current;
    }
    return buf;
  }
  exports.join = join;
  function equals2(x, y) {
    if (x === y) {
      return true;
    }
    if (x === void 0 || y === void 0) {
      return false;
    }
    return x.equals(y);
  }
  exports.equals = equals2;
  function toMap(keys) {
    let m = new Map();
    for (let i = 0; i < keys.length; i++) {
      m.set(keys[i], i);
    }
    return m;
  }
  exports.toMap = toMap;
  function toCharArray(str) {
    if (typeof str === "string") {
      let result = new Uint16Array(str.length);
      for (let i = 0; i < str.length; i++) {
        result[i] = str.charCodeAt(i);
      }
      return result;
    } else {
      return str.toCharArray();
    }
  }
  exports.toCharArray = toCharArray;
});
var SemanticContext_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SemanticContext = void 0;
  function max(items) {
    let result;
    for (let current of items) {
      if (result === void 0) {
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
      if (result === void 0) {
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
  class SemanticContext {
    static get NONE() {
      if (SemanticContext._NONE === void 0) {
        SemanticContext._NONE = new SemanticContext.Predicate();
      }
      return SemanticContext._NONE;
    }
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
  (function(SemanticContext2) {
    const AND_HASHCODE = 40363613;
    const OR_HASHCODE = 486279973;
    function filterPrecedencePredicates(collection) {
      let result = [];
      for (let i = 0; i < collection.length; i++) {
        let context = collection[i];
        if (context instanceof SemanticContext2.PrecedencePredicate) {
          result.push(context);
          collection.splice(i, 1);
          i--;
        }
      }
      return result;
    }
    class Predicate extends SemanticContext2 {
      constructor(ruleIndex = -1, predIndex = -1, isCtxDependent = false) {
        super();
        this.ruleIndex = ruleIndex;
        this.predIndex = predIndex;
        this.isCtxDependent = isCtxDependent;
      }
      eval(parser, parserCallStack) {
        let localctx = this.isCtxDependent ? parserCallStack : void 0;
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
        return this.ruleIndex === obj.ruleIndex && this.predIndex === obj.predIndex && this.isCtxDependent === obj.isCtxDependent;
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
    SemanticContext2.Predicate = Predicate;
    class PrecedencePredicate extends SemanticContext2 {
      constructor(precedence) {
        super();
        this.precedence = precedence;
      }
      eval(parser, parserCallStack) {
        return parser.precpred(parserCallStack, this.precedence);
      }
      evalPrecedence(parser, parserCallStack) {
        if (parser.precpred(parserCallStack, this.precedence)) {
          return SemanticContext2.NONE;
        } else {
          return void 0;
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
    SemanticContext2.PrecedencePredicate = PrecedencePredicate;
    class Operator extends SemanticContext2 {
    }
    SemanticContext2.Operator = Operator;
    let AND = class AND2 extends Operator {
      constructor(a, b) {
        super();
        let operands = new Array2DHashSet_1.Array2DHashSet(ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE);
        if (a instanceof AND2) {
          operands.addAll(a.opnds);
        } else {
          operands.add(a);
        }
        if (b instanceof AND2) {
          operands.addAll(b.opnds);
        } else {
          operands.add(b);
        }
        this.opnds = operands.toArray();
        let precedencePredicates = filterPrecedencePredicates(this.opnds);
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
        if (!(obj instanceof AND2)) {
          return false;
        }
        return ArrayEqualityComparator_1.ArrayEqualityComparator.INSTANCE.equals(this.opnds, obj.opnds);
      }
      hashCode() {
        return MurmurHash_1.MurmurHash.hashCode(this.opnds, AND_HASHCODE);
      }
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
          differs = differs || evaluated !== context;
          if (evaluated == null) {
            return void 0;
          } else if (evaluated !== SemanticContext2.NONE) {
            operands.push(evaluated);
          }
        }
        if (!differs) {
          return this;
        }
        if (operands.length === 0) {
          return SemanticContext2.NONE;
        }
        let result = operands[0];
        for (let i = 1; i < operands.length; i++) {
          result = SemanticContext2.and(result, operands[i]);
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
      __param(0, Decorators.NotNull),
      __param(1, Decorators.NotNull)
    ], AND);
    SemanticContext2.AND = AND;
    let OR = class OR2 extends Operator {
      constructor(a, b) {
        super();
        let operands = new Array2DHashSet_1.Array2DHashSet(ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE);
        if (a instanceof OR2) {
          operands.addAll(a.opnds);
        } else {
          operands.add(a);
        }
        if (b instanceof OR2) {
          operands.addAll(b.opnds);
        } else {
          operands.add(b);
        }
        this.opnds = operands.toArray();
        let precedencePredicates = filterPrecedencePredicates(this.opnds);
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
        if (!(obj instanceof OR2)) {
          return false;
        }
        return ArrayEqualityComparator_1.ArrayEqualityComparator.INSTANCE.equals(this.opnds, obj.opnds);
      }
      hashCode() {
        return MurmurHash_1.MurmurHash.hashCode(this.opnds, OR_HASHCODE);
      }
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
          differs = differs || evaluated !== context;
          if (evaluated === SemanticContext2.NONE) {
            return SemanticContext2.NONE;
          } else if (evaluated) {
            operands.push(evaluated);
          }
        }
        if (!differs) {
          return this;
        }
        if (operands.length === 0) {
          return void 0;
        }
        let result = operands[0];
        for (let i = 1; i < operands.length; i++) {
          result = SemanticContext2.or(result, operands[i]);
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
      __param(0, Decorators.NotNull),
      __param(1, Decorators.NotNull)
    ], OR);
    SemanticContext2.OR = OR;
  })(SemanticContext = exports.SemanticContext || (exports.SemanticContext = {}));
});
var PredicateTransition_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PredicateTransition = void 0;
  let PredicateTransition = class PredicateTransition extends AbstractPredicateTransition_1.AbstractPredicateTransition {
    constructor(target, ruleIndex, predIndex, isCtxDependent) {
      super(target);
      this.ruleIndex = ruleIndex;
      this.predIndex = predIndex;
      this.isCtxDependent = isCtxDependent;
    }
    get serializationType() {
      return 4;
    }
    get isEpsilon() {
      return true;
    }
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
var FailedPredicateException_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FailedPredicateException = void 0;
  let FailedPredicateException2 = class FailedPredicateException3 extends RecognitionException_1.RecognitionException {
    constructor(recognizer, predicate, message) {
      super(recognizer, recognizer.inputStream, recognizer.context, FailedPredicateException3.formatMessage(predicate, message));
      let s = recognizer.interpreter.atn.states[recognizer.state];
      let trans = s.transition(0);
      if (trans instanceof PredicateTransition_1.PredicateTransition) {
        this._ruleIndex = trans.ruleIndex;
        this._predicateIndex = trans.predIndex;
      } else {
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
  ], FailedPredicateException2, "formatMessage", null);
  FailedPredicateException2 = __decorate([
    __param(0, Decorators.NotNull)
  ], FailedPredicateException2);
  exports.FailedPredicateException = FailedPredicateException2;
});
var InputMismatchException_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.InputMismatchException = void 0;
  let InputMismatchException2 = class InputMismatchException extends RecognitionException_1.RecognitionException {
    constructor(recognizer, state, context) {
      if (context === void 0) {
        context = recognizer.context;
      }
      super(recognizer, recognizer.inputStream, context);
      if (state !== void 0) {
        this.setOffendingState(state);
      }
      this.setOffendingToken(recognizer, recognizer.currentToken);
    }
  };
  InputMismatchException2 = __decorate([
    __param(0, Decorators.NotNull)
  ], InputMismatchException2);
  exports.InputMismatchException = InputMismatchException2;
});
var Arrays_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Arrays = void 0;
  (function(Arrays) {
    function binarySearch(array, key, fromIndex, toIndex) {
      return binarySearch0(array, fromIndex !== void 0 ? fromIndex : 0, toIndex !== void 0 ? toIndex : array.length, key);
    }
    Arrays.binarySearch = binarySearch;
    function binarySearch0(array, fromIndex, toIndex, key) {
      let low = fromIndex;
      let high = toIndex - 1;
      while (low <= high) {
        let mid = low + high >>> 1;
        let midVal = array[mid];
        if (midVal < key) {
          low = mid + 1;
        } else if (midVal > key) {
          high = mid - 1;
        } else {
          return mid;
        }
      }
      return -(low + 1);
    }
    function toString3(array) {
      let result = "[";
      let first = true;
      for (let element of array) {
        if (first) {
          first = false;
        } else {
          result += ", ";
        }
        if (element === null) {
          result += "null";
        } else if (element === void 0) {
          result += "undefined";
        } else {
          result += element;
        }
      }
      result += "]";
      return result;
    }
    Arrays.toString = toString3;
  })(exports.Arrays || (exports.Arrays = {}));
});
var IntegerList_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.IntegerList = void 0;
  const EMPTY_DATA = new Int32Array(0);
  const INITIAL_SIZE = 4;
  const MAX_ARRAY_SIZE = (1 << 31 >>> 0) - 1 - 8;
  class IntegerList {
    constructor(arg) {
      if (!arg) {
        this._data = EMPTY_DATA;
        this._size = 0;
      } else if (arg instanceof IntegerList) {
        this._data = arg._data.slice(0);
        this._size = arg._size;
      } else if (typeof arg === "number") {
        if (arg === 0) {
          this._data = EMPTY_DATA;
          this._size = 0;
        } else {
          this._data = new Int32Array(arg);
          this._size = 0;
        }
      } else {
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
      } else if (list instanceof IntegerList) {
        this.ensureCapacity(this._size + list._size);
        this._data.subarray(this._size, this._size + list.size).set(list._data);
        this._size += list._size;
      } else {
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
      this._size -= toIndex - fromIndex;
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
    hashCode() {
      let hashCode = 1;
      for (let i = 0; i < this._size; i++) {
        hashCode = 31 * hashCode + this._data[i];
      }
      return hashCode;
    }
    toString() {
      return this._data.toString();
    }
    binarySearch(key, fromIndex, toIndex) {
      if (fromIndex === void 0) {
        fromIndex = 0;
      }
      if (toIndex === void 0) {
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
      } else {
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
    toCharArray() {
      let resultArray = new Uint16Array(this._size);
      let resultIdx = 0;
      let calculatedPreciseResultSize = false;
      for (let i = 0; i < this._size; i++) {
        let codePoint = this._data[i];
        if (codePoint >= 0 && codePoint < 65536) {
          resultArray[resultIdx] = codePoint;
          resultIdx++;
          continue;
        }
        if (!calculatedPreciseResultSize) {
          let newResultArray = new Uint16Array(this.charArraySize());
          newResultArray.set(resultArray, 0);
          resultArray = newResultArray;
          calculatedPreciseResultSize = true;
        }
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
        result += this._data[i] >= 65536 ? 2 : 1;
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
var Interval_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Interval = void 0;
  const INTERVAL_POOL_MAX_VALUE = 1e3;
  class Interval {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
    static get INVALID() {
      return Interval._INVALID;
    }
    static of(a, b) {
      if (a !== b || a < 0 || a > INTERVAL_POOL_MAX_VALUE) {
        return new Interval(a, b);
      }
      if (Interval.cache[a] == null) {
        Interval.cache[a] = new Interval(a, a);
      }
      return Interval.cache[a];
    }
    get length() {
      if (this.b < this.a) {
        return 0;
      }
      return this.b - this.a + 1;
    }
    equals(o) {
      if (o === this) {
        return true;
      } else if (!(o instanceof Interval)) {
        return false;
      }
      return this.a === o.a && this.b === o.b;
    }
    hashCode() {
      let hash = 23;
      hash = hash * 31 + this.a;
      hash = hash * 31 + this.b;
      return hash;
    }
    startsBeforeDisjoint(other) {
      return this.a < other.a && this.b < other.a;
    }
    startsBeforeNonDisjoint(other) {
      return this.a <= other.a && this.b >= other.a;
    }
    startsAfter(other) {
      return this.a > other.a;
    }
    startsAfterDisjoint(other) {
      return this.a > other.b;
    }
    startsAfterNonDisjoint(other) {
      return this.a > other.a && this.a <= other.b;
    }
    disjoint(other) {
      return this.startsBeforeDisjoint(other) || this.startsAfterDisjoint(other);
    }
    adjacent(other) {
      return this.a === other.b + 1 || this.b === other.a - 1;
    }
    properlyContains(other) {
      return other.a >= this.a && other.b <= this.b;
    }
    union(other) {
      return Interval.of(Math.min(this.a, other.a), Math.max(this.b, other.b));
    }
    intersection(other) {
      return Interval.of(Math.max(this.a, other.a), Math.min(this.b, other.b));
    }
    differenceNotProperlyContained(other) {
      let diff;
      if (other.startsBeforeNonDisjoint(this)) {
        diff = Interval.of(Math.max(this.a, other.b + 1), this.b);
      } else if (other.startsAfterNonDisjoint(this)) {
        diff = Interval.of(this.a, other.a - 1);
      }
      return diff;
    }
    toString() {
      return this.a + ".." + this.b;
    }
  }
  Interval._INVALID = new Interval(-1, -2);
  Interval.cache = new Array(INTERVAL_POOL_MAX_VALUE + 1);
  __decorate([
    Decorators.Override
  ], Interval.prototype, "equals", null);
  __decorate([
    Decorators.Override
  ], Interval.prototype, "hashCode", null);
  __decorate([
    Decorators.Override
  ], Interval.prototype, "toString", null);
  exports.Interval = Interval;
});
var Token_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Token = void 0;
  (function(Token2) {
    Token2.INVALID_TYPE = 0;
    Token2.EPSILON = -2;
    Token2.MIN_USER_TOKEN_TYPE = 1;
    Token2.EOF = IntStream_1.IntStream.EOF;
    Token2.DEFAULT_CHANNEL = 0;
    Token2.HIDDEN_CHANNEL = 1;
    Token2.MIN_USER_CHANNEL_VALUE = 2;
  })(exports.Token || (exports.Token = {}));
});
var CommonToken_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonToken = void 0;
  let CommonToken2 = class CommonToken3 {
    constructor(type, text, source = CommonToken3.EMPTY_SOURCE, channel = Token_1.Token.DEFAULT_CHANNEL, start = 0, stop = 0) {
      this._line = 0;
      this._charPositionInLine = -1;
      this._channel = Token_1.Token.DEFAULT_CHANNEL;
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
    static fromToken(oldToken) {
      let result = new CommonToken3(oldToken.type, void 0, CommonToken3.EMPTY_SOURCE, oldToken.channel, oldToken.startIndex, oldToken.stopIndex);
      result._line = oldToken.line;
      result.index = oldToken.tokenIndex;
      result._charPositionInLine = oldToken.charPositionInLine;
      if (oldToken instanceof CommonToken3) {
        result._text = oldToken._text;
        result.source = oldToken.source;
      } else {
        result._text = oldToken.text;
        result.source = {source: oldToken.tokenSource, stream: oldToken.inputStream};
      }
      return result;
    }
    get type() {
      return this._type;
    }
    set type(type) {
      this._type = type;
    }
    get line() {
      return this._line;
    }
    set line(line) {
      this._line = line;
    }
    get text() {
      if (this._text != null) {
        return this._text;
      }
      let input = this.inputStream;
      if (input == null) {
        return void 0;
      }
      let n = input.size;
      if (this.start < n && this.stop < n) {
        return input.getText(Interval_1.Interval.of(this.start, this.stop));
      } else {
        return "<EOF>";
      }
    }
    set text(text) {
      this._text = text;
    }
    get charPositionInLine() {
      return this._charPositionInLine;
    }
    set charPositionInLine(charPositionInLine) {
      this._charPositionInLine = charPositionInLine;
    }
    get channel() {
      return this._channel;
    }
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
      } else {
        txt = "<no text>";
      }
      let typeString = String(this._type);
      if (recognizer) {
        typeString = recognizer.vocabulary.getDisplayName(this._type);
      }
      return "[@" + this.tokenIndex + "," + this.start + ":" + this.stop + "='" + txt + "',<" + typeString + ">" + channelStr + "," + this._line + ":" + this.charPositionInLine + "]";
    }
  };
  CommonToken2.EMPTY_SOURCE = {source: void 0, stream: void 0};
  __decorate([
    Decorators.NotNull
  ], CommonToken2.prototype, "source", void 0);
  __decorate([
    Decorators.Override
  ], CommonToken2.prototype, "type", null);
  __decorate([
    Decorators.Override
  ], CommonToken2.prototype, "line", null);
  __decorate([
    Decorators.Override
  ], CommonToken2.prototype, "text", null);
  __decorate([
    Decorators.Override
  ], CommonToken2.prototype, "charPositionInLine", null);
  __decorate([
    Decorators.Override
  ], CommonToken2.prototype, "channel", null);
  __decorate([
    Decorators.Override
  ], CommonToken2.prototype, "startIndex", null);
  __decorate([
    Decorators.Override
  ], CommonToken2.prototype, "stopIndex", null);
  __decorate([
    Decorators.Override
  ], CommonToken2.prototype, "tokenIndex", null);
  __decorate([
    Decorators.Override
  ], CommonToken2.prototype, "tokenSource", null);
  __decorate([
    Decorators.Override
  ], CommonToken2.prototype, "inputStream", null);
  __decorate([
    Decorators.Override
  ], CommonToken2.prototype, "toString", null);
  __decorate([
    __param(0, Decorators.NotNull)
  ], CommonToken2, "fromToken", null);
  CommonToken2 = __decorate([
    __param(2, Decorators.NotNull)
  ], CommonToken2);
  exports.CommonToken = CommonToken2;
});
var CommonTokenFactory_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonTokenFactory = void 0;
  class CommonTokenFactory2 {
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
  ], CommonTokenFactory2.prototype, "create", null);
  __decorate([
    Decorators.Override
  ], CommonTokenFactory2.prototype, "createSimple", null);
  exports.CommonTokenFactory = CommonTokenFactory2;
  (function(CommonTokenFactory3) {
    CommonTokenFactory3.DEFAULT = new CommonTokenFactory3();
  })(CommonTokenFactory2 = exports.CommonTokenFactory || (exports.CommonTokenFactory = {}));
});
var IntegerStack_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.IntegerStack = void 0;
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
var AcceptStateInfo_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AcceptStateInfo = void 0;
  class AcceptStateInfo {
    constructor(prediction, lexerActionExecutor) {
      this._prediction = prediction;
      this._lexerActionExecutor = lexerActionExecutor;
    }
    get prediction() {
      return this._prediction;
    }
    get lexerActionExecutor() {
      return this._lexerActionExecutor;
    }
  }
  exports.AcceptStateInfo = AcceptStateInfo;
});
var Array2DHashMap_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
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
      } else {
        this.backingStore = new Array2DHashSet_1.Array2DHashSet(new MapKeyEqualityComparator(keyComparer));
      }
    }
    clear() {
      this.backingStore.clear();
    }
    containsKey(key) {
      return this.backingStore.contains({key});
    }
    get(key) {
      let bucket = this.backingStore.get({key});
      if (!bucket) {
        return void 0;
      }
      return bucket.value;
    }
    get isEmpty() {
      return this.backingStore.isEmpty;
    }
    put(key, value) {
      let element = this.backingStore.get({key, value});
      let result;
      if (!element) {
        this.backingStore.add({key, value});
      } else {
        result = element.value;
        element.value = value;
      }
      return result;
    }
    putIfAbsent(key, value) {
      let element = this.backingStore.get({key, value});
      let result;
      if (!element) {
        this.backingStore.add({key, value});
      } else {
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
var DecisionState_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DecisionState = void 0;
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
var PredictionContextCache_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PredictionContextCache = void 0;
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
  (function(PredictionContextCache2) {
    class PredictionContextAndInt {
      constructor(obj, value) {
        this.obj = obj;
        this.value = value;
      }
      equals(obj) {
        if (!(obj instanceof PredictionContextAndInt)) {
          return false;
        } else if (obj === this) {
          return true;
        }
        let other = obj;
        return this.value === other.value && (this.obj === other.obj || this.obj != null && this.obj.equals(other.obj));
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
    PredictionContextCache2.PredictionContextAndInt = PredictionContextAndInt;
    class IdentityCommutativePredictionContextOperands {
      constructor(x, y) {
        assert$1(x != null);
        assert$1(y != null);
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
        } else if (this === o) {
          return true;
        }
        let other = o;
        return this._x === other._x && this._y === other._y || this._x === other._y && this._y === other._x;
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
    PredictionContextCache2.IdentityCommutativePredictionContextOperands = IdentityCommutativePredictionContextOperands;
  })(PredictionContextCache = exports.PredictionContextCache || (exports.PredictionContextCache = {}));
});
var PredictionContext_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SingletonPredictionContext = exports.PredictionContext = void 0;
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
      } else {
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
      } else if (context1.isEmpty) {
        return PredictionContext.isEmptyLocal(context1) ? context1 : PredictionContext.addEmptyContext(context0);
      }
      let context0size = context0.size;
      let context1size = context1.size;
      if (context0size === 1 && context1size === 1 && context0.getReturnState(0) === context1.getReturnState(0)) {
        let merged = contextCache.join(context0.getParent(0), context1.getParent(0));
        if (merged === context0.getParent(0)) {
          return context0;
        } else if (merged === context1.getParent(0)) {
          return context1;
        } else {
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
        } else if (context0.getReturnState(leftIndex) < context1.getReturnState(rightIndex)) {
          parentsList[count] = context0.getParent(leftIndex);
          returnStatesList[count] = context0.getReturnState(leftIndex);
          canReturnRight = false;
          leftIndex++;
        } else {
          assert$1(context1.getReturnState(rightIndex) < context0.getReturnState(leftIndex));
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
      } else if (canReturnRight) {
        return context1;
      }
      if (count < parentsList.length) {
        parentsList = parentsList.slice(0, count);
        returnStatesList = returnStatesList.slice(0, count);
      }
      if (parentsList.length === 0) {
        return PredictionContext.EMPTY_FULL;
      } else if (parentsList.length === 1) {
        return new SingletonPredictionContext(parentsList[0], returnStatesList[0]);
      } else {
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
      let updated;
      if (parents.length === 1) {
        updated = new SingletonPredictionContext(parents[0], context.getReturnState(0));
      } else {
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
      outer:
        for (let perm = 0; ; perm++) {
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
              while (1 << bits >>> 0 < p.size) {
                bits++;
              }
              let mask = (1 << bits >>> 0) - 1;
              index = perm >> offset & mask;
              last = last && index >= p.size - 1;
              if (index >= p.size) {
                continue outer;
              }
              offset += bits;
            }
            if (recognizer) {
              if (localBuffer.length > 1) {
                localBuffer += " ";
              }
              let atn = recognizer.atn;
              let s = atn.states[stateNumber];
              let ruleName = recognizer.ruleNames[s.ruleIndex];
              localBuffer += ruleName;
            } else if (p.getReturnState(index) !== PredictionContext.EMPTY_FULL_STATE_KEY) {
              if (!p.isEmpty) {
                if (localBuffer.length > 1) {
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
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(2, Decorators.NotNull)
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
  let ArrayPredictionContext = class ArrayPredictionContext2 extends PredictionContext {
    constructor(parents, returnStates, hashCode) {
      super(hashCode || PredictionContext.calculateHashCode(parents, returnStates));
      assert$1(parents.length === returnStates.length);
      assert$1(returnStates.length > 1 || returnStates[0] !== PredictionContext.EMPTY_FULL_STATE_KEY, "Should be using PredictionContext.EMPTY instead.");
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
      return new ArrayPredictionContext2(parents2, returnStates2);
    }
    removeEmptyContext() {
      if (!this.hasEmpty) {
        return this;
      }
      if (this.returnStates.length === 2) {
        return new SingletonPredictionContext(this.parents[0], this.returnStates[0]);
      } else {
        let parents2 = this.parents.slice(0, this.parents.length - 1);
        let returnStates2 = this.returnStates.slice(0, this.returnStates.length - 1);
        return new ArrayPredictionContext2(parents2, returnStates2);
      }
    }
    appendContext(suffix, contextCache) {
      return ArrayPredictionContext2.appendContextImpl(this, suffix, new PredictionContext.IdentityHashMap());
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
        } else {
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
            updatedParents[i] = ArrayPredictionContext2.appendContextImpl(context.getParent(i), suffix, visited);
          }
          if (updatedParents.length === 1) {
            result = new SingletonPredictionContext(updatedParents[0], updatedReturnStates[0]);
          } else {
            assert$1(updatedParents.length > 1);
            result = new ArrayPredictionContext2(updatedParents, updatedReturnStates);
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
      } else if (!(o instanceof ArrayPredictionContext2)) {
        return false;
      }
      if (this.hashCode() !== o.hashCode()) {
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
  let SingletonPredictionContext = class SingletonPredictionContext2 extends PredictionContext {
    constructor(parent, returnState) {
      super(PredictionContext.calculateSingleHashCode(parent, returnState));
      this.parent = parent;
      this.returnState = returnState;
    }
    getParent(index) {
      return this.parent;
    }
    getReturnState(index) {
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
      } else if (!(o instanceof SingletonPredictionContext2)) {
        return false;
      }
      let other = o;
      if (this.hashCode() !== other.hashCode()) {
        return false;
      }
      return this.returnState === other.returnState && this.parent.equals(other.parent);
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
  (function(PredictionContext2) {
    PredictionContext2.EMPTY_LOCAL = new EmptyPredictionContext(false);
    PredictionContext2.EMPTY_FULL = new EmptyPredictionContext(true);
    PredictionContext2.EMPTY_LOCAL_STATE_KEY = -(1 << 31 >>> 0);
    PredictionContext2.EMPTY_FULL_STATE_KEY = (1 << 31 >>> 0) - 1;
    class IdentityHashMap extends Array2DHashMap_1.Array2DHashMap {
      constructor() {
        super(IdentityEqualityComparator.INSTANCE);
      }
    }
    PredictionContext2.IdentityHashMap = IdentityHashMap;
    class IdentityEqualityComparator {
      IdentityEqualityComparator() {
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
    PredictionContext2.IdentityEqualityComparator = IdentityEqualityComparator;
  })(PredictionContext = exports.PredictionContext || (exports.PredictionContext = {}));
});
var ATNConfig_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ATNConfig = void 0;
  const SUPPRESS_PRECEDENCE_FILTER = 2147483648;
  let ATNConfig = class ATNConfig2 {
    constructor(state, altOrConfig, context) {
      if (typeof altOrConfig === "number") {
        assert$1((altOrConfig & 16777215) === altOrConfig);
        this._state = state;
        this.altAndOuterContextDepth = altOrConfig;
        this._context = context;
      } else {
        this._state = state;
        this.altAndOuterContextDepth = altOrConfig.altAndOuterContextDepth;
        this._context = context;
      }
    }
    static create(state, alt, context, semanticContext = SemanticContext_1.SemanticContext.NONE, lexerActionExecutor) {
      if (semanticContext !== SemanticContext_1.SemanticContext.NONE) {
        if (lexerActionExecutor != null) {
          return new ActionSemanticContextATNConfig(lexerActionExecutor, semanticContext, state, alt, context, false);
        } else {
          return new SemanticContextATNConfig(semanticContext, state, alt, context);
        }
      } else if (lexerActionExecutor != null) {
        return new ActionATNConfig(lexerActionExecutor, state, alt, context, false);
      } else {
        return new ATNConfig2(state, alt, context);
      }
    }
    get state() {
      return this._state;
    }
    get alt() {
      return this.altAndOuterContextDepth & 16777215;
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
    get outerContextDepth() {
      return this.altAndOuterContextDepth >>> 24 & 127;
    }
    set outerContextDepth(outerContextDepth) {
      assert$1(outerContextDepth >= 0);
      outerContextDepth = Math.min(outerContextDepth, 127);
      this.altAndOuterContextDepth = outerContextDepth << 24 | (this.altAndOuterContextDepth & ~2130706432) >>> 0;
    }
    get lexerActionExecutor() {
      return void 0;
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
    transform(state, checkNonGreedy, arg2) {
      if (arg2 == null) {
        return this.transformImpl(state, this._context, this.semanticContext, checkNonGreedy, this.lexerActionExecutor);
      } else if (arg2 instanceof PredictionContext_1.PredictionContext) {
        return this.transformImpl(state, arg2, this.semanticContext, checkNonGreedy, this.lexerActionExecutor);
      } else if (arg2 instanceof SemanticContext_1.SemanticContext) {
        return this.transformImpl(state, this._context, arg2, checkNonGreedy, this.lexerActionExecutor);
      } else {
        return this.transformImpl(state, this._context, this.semanticContext, checkNonGreedy, arg2);
      }
    }
    transformImpl(state, context, semanticContext, checkNonGreedy, lexerActionExecutor) {
      let passedThroughNonGreedy = checkNonGreedy && ATNConfig2.checkNonGreedyDecision(this, state);
      if (semanticContext !== SemanticContext_1.SemanticContext.NONE) {
        if (lexerActionExecutor != null || passedThroughNonGreedy) {
          return new ActionSemanticContextATNConfig(lexerActionExecutor, semanticContext, state, this, context, passedThroughNonGreedy);
        } else {
          return new SemanticContextATNConfig(semanticContext, state, this, context);
        }
      } else if (lexerActionExecutor != null || passedThroughNonGreedy) {
        return new ActionATNConfig(lexerActionExecutor, state, this, context, passedThroughNonGreedy);
      } else {
        return new ATNConfig2(state, this, context);
      }
    }
    static checkNonGreedyDecision(source, target) {
      return source.hasPassedThroughNonGreedyDecision || target instanceof DecisionState_1.DecisionState && target.nonGreedy;
    }
    appendContext(context, contextCache) {
      if (typeof context === "number") {
        let appendedContext = this.context.appendSingleContext(context, contextCache);
        let result = this.transform(this.state, false, appendedContext);
        return result;
      } else {
        let appendedContext = this.context.appendContext(context, contextCache);
        let result = this.transform(this.state, false, appendedContext);
        return result;
      }
    }
    contains(subconfig) {
      if (this.state.stateNumber !== subconfig.state.stateNumber || this.alt !== subconfig.alt || !this.semanticContext.equals(subconfig.semanticContext)) {
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
        } else {
          for (let i = 0; i < right.size; i++) {
            let index = left.findReturnState(right.getReturnState(i));
            if (index < 0) {
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
      } else {
        this.altAndOuterContextDepth &= ~SUPPRESS_PRECEDENCE_FILTER;
      }
    }
    equals(o) {
      if (this === o) {
        return true;
      } else if (!(o instanceof ATNConfig2)) {
        return false;
      }
      return this.state.stateNumber === o.state.stateNumber && this.alt === o.alt && this.reachesIntoOuterContext === o.reachesIntoOuterContext && this.context.equals(o.context) && this.semanticContext.equals(o.semanticContext) && this.isPrecedenceFilterSuppressed === o.isPrecedenceFilterSuppressed && this.hasPassedThroughNonGreedyDecision === o.hasPassedThroughNonGreedyDecision && ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE.equals(this.lexerActionExecutor, o.lexerActionExecutor);
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
    toDotString() {
      let builder = "";
      builder += "digraph G {\n";
      builder += "rankdir=LR;\n";
      let visited = new Array2DHashMap_1.Array2DHashMap(PredictionContext_1.PredictionContext.IdentityEqualityComparator.INSTANCE);
      let workList = [];
      function getOrAddContext(context) {
        let newNumber = visited.size;
        let result = visited.putIfAbsent(context, newNumber);
        if (result != null) {
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
          builder += "  s" + getOrAddContext(current);
          builder += "->";
          builder += "s" + getOrAddContext(current.getParent(i));
          builder += '[label="' + current.getReturnState(i) + '"];\n';
        }
      }
      builder += "}\n";
      return builder.toString();
    }
    toString(recog, showAlt, showContext) {
      if (showContext == null) {
        showContext = showAlt != null;
      }
      if (showAlt == null) {
        showAlt = true;
      }
      let buf = "";
      let contexts;
      if (showContext) {
        contexts = this.context.toStrings(recog, this.state.stateNumber);
      } else {
        contexts = ["?"];
      }
      let first = true;
      for (let contextDesc of contexts) {
        if (first) {
          first = false;
        } else {
          buf += ", ";
        }
        buf += "(";
        buf += this.state;
        if (showAlt) {
          buf += ",";
          buf += this.alt;
        }
        if (this.context) {
          buf += ",";
          buf += contextDesc;
        }
        if (this.semanticContext !== SemanticContext_1.SemanticContext.NONE) {
          buf += ",";
          buf += this.semanticContext;
        }
        if (this.reachesIntoOuterContext) {
          buf += ",up=" + this.outerContextDepth;
        }
        buf += ")";
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
    __param(0, Decorators.NotNull),
    __param(2, Decorators.NotNull)
  ], ATNConfig.prototype, "transformImpl", null);
  __decorate([
    Decorators.Override
  ], ATNConfig.prototype, "equals", null);
  __decorate([
    Decorators.Override
  ], ATNConfig.prototype, "hashCode", null);
  __decorate([
    __param(0, Decorators.NotNull),
    __param(3, Decorators.NotNull)
  ], ATNConfig, "create", null);
  ATNConfig = __decorate([
    __param(0, Decorators.NotNull),
    __param(2, Decorators.NotNull)
  ], ATNConfig);
  exports.ATNConfig = ATNConfig;
  let SemanticContextATNConfig = class SemanticContextATNConfig extends ATNConfig {
    constructor(semanticContext, state, altOrConfig, context) {
      if (typeof altOrConfig === "number") {
        super(state, altOrConfig, context);
      } else {
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
    __param(1, Decorators.NotNull),
    __param(2, Decorators.NotNull)
  ], SemanticContextATNConfig);
  let ActionATNConfig = class ActionATNConfig extends ATNConfig {
    constructor(lexerActionExecutor, state, altOrConfig, context, passedThroughNonGreedyDecision) {
      if (typeof altOrConfig === "number") {
        super(state, altOrConfig, context);
      } else {
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
    __param(1, Decorators.NotNull),
    __param(2, Decorators.NotNull)
  ], ActionATNConfig);
  let ActionSemanticContextATNConfig = class ActionSemanticContextATNConfig extends SemanticContextATNConfig {
    constructor(lexerActionExecutor, semanticContext, state, altOrConfig, context, passedThroughNonGreedyDecision) {
      if (typeof altOrConfig === "number") {
        super(semanticContext, state, altOrConfig, context);
      } else {
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
    __param(1, Decorators.NotNull),
    __param(2, Decorators.NotNull)
  ], ActionSemanticContextATNConfig);
});
var BitSet_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BitSet = void 0;
  const EMPTY_DATA = new Uint16Array(0);
  function getIndex(bitNumber) {
    return bitNumber >>> 4;
  }
  function unIndex(n) {
    return n * 16;
  }
  function findLSBSet(word) {
    let bit = 1;
    for (let i = 0; i < 16; i++) {
      if ((word & bit) !== 0) {
        return i;
      }
      bit = bit << 1 >>> 0;
    }
    throw new RangeError("No specified bit found");
  }
  function findMSBSet(word) {
    let bit = 1 << 15 >>> 0;
    for (let i = 15; i >= 0; i--) {
      if ((word & bit) !== 0) {
        return i;
      }
      bit = bit >>> 1;
    }
    throw new RangeError("No specified bit found");
  }
  function bitsFor(fromBit, toBit) {
    fromBit &= 15;
    toBit &= 15;
    if (fromBit === toBit) {
      return 1 << fromBit >>> 0;
    }
    return 65535 >>> 15 - toBit ^ 65535 >>> 16 - fromBit;
  }
  const POP_CNT = new Uint8Array(65536);
  for (let i = 0; i < 16; i++) {
    const stride = 1 << i >>> 0;
    let index = 0;
    while (index < POP_CNT.length) {
      index += stride;
      for (let j = 0; j < stride; j++) {
        POP_CNT[index]++;
        index++;
      }
    }
  }
  class BitSet {
    constructor(arg) {
      if (!arg) {
        this.data = EMPTY_DATA;
      } else if (typeof arg === "number") {
        if (arg < 0) {
          throw new RangeError("nbits cannot be negative");
        } else {
          this.data = new Uint16Array(getIndex(arg - 1) + 1);
        }
      } else {
        if (arg instanceof BitSet) {
          this.data = arg.data.slice(0);
        } else {
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
    and(set) {
      const data = this.data;
      const other = set.data;
      const words = Math.min(data.length, other.length);
      let lastWord = -1;
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
    andNot(set) {
      const data = this.data;
      const other = set.data;
      const words = Math.min(data.length, other.length);
      let lastWord = -1;
      for (let i = 0; i < words; i++) {
        let value = data[i] &= other[i] ^ 65535;
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
      } else if (toIndex == null) {
        this.set(fromIndex, false);
      } else {
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
      } else {
        this.data[word++] ^= bitsFor(fromIndex, 15);
        while (word < lastWord) {
          this.data[word++] ^= 65535;
        }
        this.data[word++] ^= bitsFor(0, toIndex);
      }
    }
    get(fromIndex, toIndex) {
      if (toIndex === void 0) {
        return !!(this.data[getIndex(fromIndex)] & bitsFor(fromIndex, fromIndex));
      } else {
        let result = new BitSet(toIndex + 1);
        for (let i = fromIndex; i <= toIndex; i++) {
          result.set(i, this.get(i));
        }
        return result;
      }
    }
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
    get isEmpty() {
      return this.length() === 0;
    }
    length() {
      if (!this.data.length) {
        return 0;
      }
      return this.previousSetBit(unIndex(this.data.length) - 1) + 1;
    }
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
      let ignore = 65535 ^ bitsFor(fromIndex, 15);
      if ((data[word] | ignore) === 65535) {
        word++;
        ignore = 0;
        for (; word < length; word++) {
          if (data[word] !== 65535) {
            break;
          }
        }
        if (word === length) {
          return -1;
        }
      }
      return unIndex(word) + findLSBSet((data[word] | ignore) ^ 65535);
    }
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
        mask = 65535;
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
    or(set) {
      const data = this.data;
      const other = set.data;
      const minWords = Math.min(data.length, other.length);
      const words = Math.max(data.length, other.length);
      const dest = data.length === words ? data : new Uint16Array(words);
      let lastWord = -1;
      for (let i = 0; i < minWords; i++) {
        let value = dest[i] = data[i] | other[i];
        if (value !== 0) {
          lastWord = i;
        }
      }
      const longer = data.length > other.length ? data : other;
      for (let i = minWords; i < words; i++) {
        let value = dest[i] = longer[i];
        if (value !== 0) {
          lastWord = i;
        }
      }
      if (lastWord === -1) {
        this.data = EMPTY_DATA;
      } else if (dest.length === lastWord + 1) {
        this.data = dest;
      } else {
        this.data = dest.slice(0, lastWord);
      }
    }
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
      let ignore = 65535 ^ bitsFor(0, fromIndex);
      if ((data[word] | ignore) === 65535) {
        ignore = 0;
        word--;
        for (; word >= 0; word--) {
          if (data[word] !== 65535) {
            break;
          }
        }
        if (word < 0) {
          return -1;
        }
      }
      return unIndex(word) + findMSBSet((data[word] | ignore) ^ 65535);
    }
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
        mask = 65535;
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
      if (toIndex === void 0) {
        toIndex = fromIndex;
        value = true;
      } else if (typeof toIndex === "boolean") {
        value = toIndex;
        toIndex = fromIndex;
      }
      if (value === void 0) {
        value = true;
      }
      if (fromIndex < 0 || fromIndex > toIndex) {
        throw new RangeError();
      }
      let word = getIndex(fromIndex);
      let lastWord = getIndex(toIndex);
      if (value && lastWord >= this.data.length) {
        let temp = new Uint16Array(lastWord + 1);
        this.data.forEach((value2, index) => temp[index] = value2);
        this.data = temp;
      } else if (!value) {
        if (word >= this.data.length) {
          return;
        }
        if (lastWord >= this.data.length) {
          lastWord = this.data.length - 1;
          toIndex = this.data.length * 16 - 1;
        }
      }
      if (word === lastWord) {
        this._setBits(word, value, bitsFor(fromIndex, toIndex));
      } else {
        this._setBits(word++, value, bitsFor(fromIndex, 15));
        while (word < lastWord) {
          this.data[word++] = value ? 65535 : 0;
        }
        this._setBits(word, value, bitsFor(0, toIndex));
      }
    }
    _setBits(word, value, mask) {
      if (value) {
        this.data[word] |= mask;
      } else {
        this.data[word] &= 65535 ^ mask;
      }
    }
    get size() {
      return this.data.byteLength * 8;
    }
    hashCode() {
      return MurmurHash_1.MurmurHash.hashCode(this.data, 22);
    }
    equals(obj) {
      if (obj === this) {
        return true;
      } else if (!(obj instanceof BitSet)) {
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
    toString() {
      let result = "{";
      let first = true;
      for (let i = this.nextSetBit(0); i >= 0; i = this.nextSetBit(i + 1)) {
        if (first) {
          first = false;
        } else {
          result += ", ";
        }
        result += i;
      }
      result += "}";
      return result;
    }
    xor(set) {
      const data = this.data;
      const other = set.data;
      const minWords = Math.min(data.length, other.length);
      const words = Math.max(data.length, other.length);
      const dest = data.length === words ? data : new Uint16Array(words);
      let lastWord = -1;
      for (let i = 0; i < minWords; i++) {
        let value = dest[i] = data[i] ^ other[i];
        if (value !== 0) {
          lastWord = i;
        }
      }
      const longer = data.length > other.length ? data : other;
      for (let i = minWords; i < words; i++) {
        let value = dest[i] = longer[i];
        if (value !== 0) {
          lastWord = i;
        }
      }
      if (lastWord === -1) {
        this.data = EMPTY_DATA;
      } else if (dest.length === lastWord + 1) {
        this.data = dest;
      } else {
        this.data = dest.slice(0, lastWord + 1);
      }
    }
    clone() {
      return new BitSet(this);
    }
    [Symbol.iterator]() {
      return new BitSetIterator(this.data);
    }
    [util$1.inspect.custom]() {
      return "BitSet " + this.toString();
    }
  }
  exports.BitSet = BitSet;
  class BitSetIterator {
    constructor(data) {
      this.data = data;
      this.index = 0;
      this.mask = 65535;
    }
    next() {
      while (this.index < this.data.length) {
        const bits = this.data[this.index] & this.mask;
        if (bits !== 0) {
          const bitNumber = unIndex(this.index) + findLSBSet(bits);
          this.mask = bitsFor(bitNumber + 1, 15);
          return {done: false, value: bitNumber};
        }
        this.index++;
        this.mask = 65535;
      }
      return {done: true, value: -1};
    }
    [Symbol.iterator]() {
      return this;
    }
  }
});
var ATNConfigSet_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ATNConfigSet = void 0;
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
    } else {
      return new Array2DHashMap_1.Array2DHashMap(KeyTypeEqualityComparer.INSTANCE);
    }
  }
  class ATNConfigSet {
    constructor(set, readonly) {
      this._uniqueAlt = 0;
      this._hasSemanticContext = false;
      this._dipsIntoOuterContext = false;
      this.outermostConfigSet = false;
      this.cachedHashCode = -1;
      if (!set) {
        this.mergedConfigs = NewKeyedConfigMap();
        this.unmerged = [];
        this.configs = [];
        this._uniqueAlt = ATN_1.ATN.INVALID_ALT_NUMBER;
      } else {
        if (readonly) {
          this.mergedConfigs = void 0;
          this.unmerged = void 0;
        } else if (!set.isReadOnly) {
          this.mergedConfigs = NewKeyedConfigMap(set.mergedConfigs);
          this.unmerged = set.unmerged.slice(0);
        } else {
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
      }
    }
    getRepresentedAlternatives() {
      if (this._conflictInfo != null) {
        return this._conflictInfo.conflictedAlts.clone();
      }
      let alts = new BitSet_1.BitSet();
      for (let config2 of this) {
        alts.set(config2.alt);
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
      assert$1(!outermostConfigSet || !this._dipsIntoOuterContext);
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
      for (let config2 of this.configs) {
        config2.context = interpreter.atn.getCachedContext(config2.context);
      }
    }
    clone(readonly) {
      let copy2 = new ATNConfigSet(this, readonly);
      if (!readonly && this.isReadOnly) {
        copy2.addAll(this.configs);
      }
      return copy2;
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
        let config2 = o;
        let configKey = this.getKey(config2);
        let mergedConfig = this.mergedConfigs.get(configKey);
        if (mergedConfig != null && this.canMerge(config2, configKey, mergedConfig)) {
          return mergedConfig.contains(config2);
        }
        for (let c of this.unmerged) {
          if (c.contains(o)) {
            return true;
          }
        }
      } else {
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
      assert$1(!this.outermostConfigSet || !e.reachesIntoOuterContext);
      if (contextCache == null) {
        contextCache = PredictionContextCache_1.PredictionContextCache.UNCACHED;
      }
      let addKey;
      let key = this.getKey(e);
      let mergedConfig = this.mergedConfigs.get(key);
      addKey = mergedConfig == null;
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
      } else {
        this.unmerged.push(e);
      }
      this.updatePropertiesForAddedConfig(e);
      return true;
    }
    updatePropertiesForMergedConfig(config2) {
      this._dipsIntoOuterContext = this._dipsIntoOuterContext || config2.reachesIntoOuterContext;
      assert$1(!this.outermostConfigSet || !this._dipsIntoOuterContext);
    }
    updatePropertiesForAddedConfig(config2) {
      if (this.configs.length === 1) {
        this._uniqueAlt = config2.alt;
      } else if (this._uniqueAlt !== config2.alt) {
        this._uniqueAlt = ATN_1.ATN.INVALID_ALT_NUMBER;
      }
      this._hasSemanticContext = this._hasSemanticContext || !SemanticContext_1.SemanticContext.NONE.equals(config2.semanticContext);
      this._dipsIntoOuterContext = this._dipsIntoOuterContext || config2.reachesIntoOuterContext;
      assert$1(!this.outermostConfigSet || !this._dipsIntoOuterContext);
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
      return {state: e.state.stateNumber, alt: e.alt};
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
      this._conflictInfo = void 0;
    }
    equals(obj) {
      if (this === obj) {
        return true;
      }
      if (!(obj instanceof ATNConfigSet)) {
        return false;
      }
      return this.outermostConfigSet === obj.outermostConfigSet && Utils.equals(this._conflictInfo, obj._conflictInfo) && ArrayEqualityComparator_1.ArrayEqualityComparator.INSTANCE.equals(this.configs, obj.configs);
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
        } else if (o1.state.stateNumber !== o2.state.stateNumber) {
          return o1.state.stateNumber - o2.state.stateNumber;
        } else {
          return o1.semanticContext.toString().localeCompare(o2.semanticContext.toString());
        }
      });
      buf += "[";
      for (let i = 0; i < sortedConfigs.length; i++) {
        if (i > 0) {
          buf += ", ";
        }
        buf += sortedConfigs[i].toString(void 0, true, showContext);
      }
      buf += "]";
      if (this._hasSemanticContext) {
        buf += ",hasSemanticContext=" + this._hasSemanticContext;
      }
      if (this._uniqueAlt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
        buf += ",uniqueAlt=" + this._uniqueAlt;
      }
      if (this._conflictInfo != null) {
        buf += ",conflictingAlts=" + this._conflictInfo.conflictedAlts;
        if (!this._conflictInfo.isExact) {
          buf += "*";
        }
      }
      if (this._dipsIntoOuterContext) {
        buf += ",dipsIntoOuterContext";
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
        return void 0;
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
var DFAState_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DFAState = void 0;
  class DFAState {
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
      assert$1(this.isContextSensitive);
      this.contextSymbols.set(symbol);
    }
    setContextSensitive(atn) {
      assert$1(!this.configs.isOutermostConfigSet);
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
        return void 0;
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
      if (existing !== void 0) {
        if (map.size === 1) {
          let result = new Map();
          result.set(PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY, existing);
          return result;
        } else {
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
    equals(o) {
      if (this === o) {
        return true;
      }
      if (!(o instanceof DFAState)) {
        return false;
      }
      let other = o;
      let sameSet = this.configs.equals(other.configs);
      return sameSet;
    }
    toString() {
      let buf = "";
      buf += this.stateNumber + ":" + this.configs;
      if (this.isAcceptState) {
        buf += "=>";
        if (this.predicates) {
          buf += this.predicates;
        } else {
          buf += this.prediction;
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
  (function(DFAState2) {
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
    DFAState2.PredPrediction = PredPrediction;
  })(DFAState = exports.DFAState || (exports.DFAState = {}));
});
var ATNSimulator_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ATNSimulator = void 0;
  let ATNSimulator = class ATNSimulator2 {
    constructor(atn) {
      this.atn = atn;
    }
    static get ERROR() {
      if (!ATNSimulator2._ERROR) {
        ATNSimulator2._ERROR = new DFAState_1.DFAState(new ATNConfigSet_1.ATNConfigSet());
        ATNSimulator2._ERROR.stateNumber = PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY;
      }
      return ATNSimulator2._ERROR;
    }
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
  (function(ATNSimulator2) {
  })(ATNSimulator = exports.ATNSimulator || (exports.ATNSimulator = {}));
  exports.ATNSimulator = ATNSimulator;
});
var ConsoleErrorListener_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ConsoleErrorListener = void 0;
  class ConsoleErrorListener2 {
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
      console.error(`line ${line}:${charPositionInLine} ${msg}`);
    }
  }
  exports.ConsoleErrorListener = ConsoleErrorListener2;
  ConsoleErrorListener2.INSTANCE = new ConsoleErrorListener2();
});
var ProxyErrorListener_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ProxyErrorListener = void 0;
  class ProxyErrorListener2 {
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
  ], ProxyErrorListener2.prototype, "syntaxError", null);
  exports.ProxyErrorListener = ProxyErrorListener2;
});
var Recognizer_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Recognizer = void 0;
  class Recognizer2 {
    constructor() {
      this._listeners = [ConsoleErrorListener_1.ConsoleErrorListener.INSTANCE];
      this._stateNumber = -1;
    }
    getTokenTypeMap() {
      let vocabulary = this.vocabulary;
      let result = Recognizer2.tokenTypeMapCache.get(vocabulary);
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
        Recognizer2.tokenTypeMapCache.set(vocabulary, result);
      }
      return result;
    }
    getRuleIndexMap() {
      let ruleNames = this.ruleNames;
      if (ruleNames == null) {
        throw new Error("The current recognizer does not provide a list of rule names.");
      }
      let result = Recognizer2.ruleIndexMapCache.get(ruleNames);
      if (result == null) {
        result = Utils.toMap(ruleNames);
        Recognizer2.ruleIndexMapCache.set(ruleNames, result);
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
    get serializedATN() {
      throw new Error("there is no serialized ATN");
    }
    get atn() {
      return this._interp.atn;
    }
    get interpreter() {
      return this._interp;
    }
    set interpreter(interpreter) {
      this._interp = interpreter;
    }
    get parseInfo() {
      return Promise.resolve(void 0);
    }
    getErrorHeader(e) {
      let token = e.getOffendingToken();
      if (!token) {
        return "";
      }
      let line = token.line;
      let charPositionInLine = token.charPositionInLine;
      return "line " + line + ":" + charPositionInLine;
    }
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
    sempred(_localctx, ruleIndex, actionIndex) {
      return true;
    }
    precpred(localctx, precedence) {
      return true;
    }
    action(_localctx, ruleIndex, actionIndex) {
    }
    get state() {
      return this._stateNumber;
    }
    set state(atnState) {
      this._stateNumber = atnState;
    }
  }
  Recognizer2.EOF = -1;
  Recognizer2.tokenTypeMapCache = new WeakMap();
  Recognizer2.ruleIndexMapCache = new WeakMap();
  __decorate([
    Decorators.SuppressWarnings("serial"),
    Decorators.NotNull
  ], Recognizer2.prototype, "_listeners", void 0);
  __decorate([
    Decorators.NotNull
  ], Recognizer2.prototype, "getTokenTypeMap", null);
  __decorate([
    Decorators.NotNull
  ], Recognizer2.prototype, "getRuleIndexMap", null);
  __decorate([
    Decorators.NotNull
  ], Recognizer2.prototype, "serializedATN", null);
  __decorate([
    Decorators.NotNull
  ], Recognizer2.prototype, "atn", null);
  __decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
  ], Recognizer2.prototype, "interpreter", null);
  __decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
  ], Recognizer2.prototype, "getErrorHeader", null);
  __decorate([
    __param(0, Decorators.NotNull)
  ], Recognizer2.prototype, "addErrorListener", null);
  __decorate([
    __param(0, Decorators.NotNull)
  ], Recognizer2.prototype, "removeErrorListener", null);
  __decorate([
    Decorators.NotNull
  ], Recognizer2.prototype, "getErrorListeners", null);
  exports.Recognizer = Recognizer2;
});
var VocabularyImpl_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.VocabularyImpl = void 0;
  class VocabularyImpl2 {
    constructor(literalNames, symbolicNames, displayNames) {
      this.literalNames = literalNames;
      this.symbolicNames = symbolicNames;
      this.displayNames = displayNames;
      this._maxTokenType = Math.max(this.displayNames.length, Math.max(this.literalNames.length, this.symbolicNames.length)) - 1;
    }
    get maxTokenType() {
      return this._maxTokenType;
    }
    getLiteralName(tokenType) {
      if (tokenType >= 0 && tokenType < this.literalNames.length) {
        return this.literalNames[tokenType];
      }
      return void 0;
    }
    getSymbolicName(tokenType) {
      if (tokenType >= 0 && tokenType < this.symbolicNames.length) {
        return this.symbolicNames[tokenType];
      }
      if (tokenType === Token_1.Token.EOF) {
        return "EOF";
      }
      return void 0;
    }
    getDisplayName(tokenType) {
      if (tokenType >= 0 && tokenType < this.displayNames.length) {
        let displayName = this.displayNames[tokenType];
        if (displayName) {
          return displayName;
        }
      }
      let literalName = this.getLiteralName(tokenType);
      if (literalName) {
        return literalName;
      }
      let symbolicName = this.getSymbolicName(tokenType);
      if (symbolicName) {
        return symbolicName;
      }
      return String(tokenType);
    }
  }
  VocabularyImpl2.EMPTY_VOCABULARY = new VocabularyImpl2([], [], []);
  __decorate([
    Decorators.NotNull
  ], VocabularyImpl2.prototype, "literalNames", void 0);
  __decorate([
    Decorators.NotNull
  ], VocabularyImpl2.prototype, "symbolicNames", void 0);
  __decorate([
    Decorators.NotNull
  ], VocabularyImpl2.prototype, "displayNames", void 0);
  __decorate([
    Decorators.Override
  ], VocabularyImpl2.prototype, "maxTokenType", null);
  __decorate([
    Decorators.Override
  ], VocabularyImpl2.prototype, "getLiteralName", null);
  __decorate([
    Decorators.Override
  ], VocabularyImpl2.prototype, "getSymbolicName", null);
  __decorate([
    Decorators.Override,
    Decorators.NotNull
  ], VocabularyImpl2.prototype, "getDisplayName", null);
  __decorate([
    Decorators.NotNull
  ], VocabularyImpl2, "EMPTY_VOCABULARY", void 0);
  exports.VocabularyImpl = VocabularyImpl2;
});
var DFASerializer_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DFASerializer = void 0;
  class DFASerializer {
    constructor(dfa, vocabulary, ruleNames, atn) {
      if (vocabulary instanceof Recognizer_1.Recognizer) {
        ruleNames = vocabulary.ruleNames;
        atn = vocabulary.atn;
        vocabulary = vocabulary.vocabulary;
      } else if (!vocabulary) {
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
            buf += this.getStateString(s) + "-" + this.getEdgeLabel(entry) + "->";
            if (s.isContextSymbol(entry)) {
              buf += "!";
              contextSymbol = true;
            }
            let t = value;
            if (t && t.stateNumber !== ATNSimulator_1.ATNSimulator.ERROR.stateNumber) {
              buf += this.getStateString(t) + "\n";
            } else if (contextSymbol) {
              buf += "ctx\n";
            }
          }
          if (s.isContextSensitive) {
            for (let entry of contextEdgeKeys) {
              buf += this.getStateString(s) + "-" + this.getContextLabel(entry) + "->" + this.getStateString(contextEdges.get(entry)) + "\n";
            }
          }
        }
      }
      let output = buf;
      if (output.length === 0) {
        return "";
      }
      return output;
    }
    getContextLabel(i) {
      if (i === PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY) {
        return "ctx:EMPTY_FULL";
      } else if (i === PredictionContext_1.PredictionContext.EMPTY_LOCAL_STATE_KEY) {
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
        } else {
          stateStr = ":s" + n + "=>" + s.prediction;
        }
      }
      if (s.isContextSensitive) {
        stateStr += "*";
        for (let config2 of s.configs) {
          if (config2.reachesIntoOuterContext) {
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
var LexerDFASerializer_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
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
var StarLoopEntryState_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.StarLoopEntryState = void 0;
  class StarLoopEntryState extends DecisionState_1.DecisionState {
    constructor() {
      super(...arguments);
      this.precedenceRuleDecision = false;
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
var DFA_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DFA = void 0;
  let DFA = class DFA {
    constructor(atnStartState, decision = 0) {
      this.states = new Array2DHashSet_1.Array2DHashSet(ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE);
      this.nextStateNumber = 0;
      if (!atnStartState.atn) {
        throw new Error("The ATNState must be associated with an ATN");
      }
      this.atnStartState = atnStartState;
      this.atn = atnStartState.atn;
      this.decision = decision;
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
    get isPrecedenceDfa() {
      return this.precedenceDfa;
    }
    getPrecedenceStartState(precedence, fullContext) {
      if (!this.isPrecedenceDfa) {
        throw new Error("Only precedence DFAs may contain a precedence start state.");
      }
      if (fullContext) {
        return this.s0full.getTarget(precedence);
      } else {
        return this.s0.getTarget(precedence);
      }
    }
    setPrecedenceStartState(precedence, fullContext, startState) {
      if (!this.isPrecedenceDfa) {
        throw new Error("Only precedence DFAs may contain a precedence start state.");
      }
      if (precedence < 0) {
        return;
      }
      if (fullContext) {
        this.s0full.setTarget(precedence, startState);
      } else {
        this.s0.setTarget(precedence, startState);
      }
    }
    get isEmpty() {
      if (this.isPrecedenceDfa) {
        return this.s0.getEdgeMap().size === 0 && this.s0full.getEdgeMap().size === 0;
      }
      return this.s0 == null && this.s0full == null;
    }
    get isContextSensitive() {
      if (this.isPrecedenceDfa) {
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
      } else {
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
var BasicState_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BasicState = void 0;
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
var InvalidState_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.InvalidState = void 0;
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
var SetTransition_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SetTransition = void 0;
  let SetTransition = class SetTransition extends Transition_1.Transition {
    constructor(target, set) {
      super(target);
      if (set == null) {
        set = IntervalSet_1.IntervalSet.of(Token_1.Token.INVALID_TYPE);
      }
      this.set = set;
    }
    get serializationType() {
      return 7;
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
    __param(0, Decorators.NotNull),
    __param(1, Decorators.Nullable)
  ], SetTransition);
  exports.SetTransition = SetTransition;
});
var NotSetTransition_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NotSetTransition = void 0;
  let NotSetTransition = class NotSetTransition extends SetTransition_1.SetTransition {
    constructor(target, set) {
      super(target, set);
    }
    get serializationType() {
      return 8;
    }
    matches(symbol, minVocabSymbol, maxVocabSymbol) {
      return symbol >= minVocabSymbol && symbol <= maxVocabSymbol && !super.matches(symbol, minVocabSymbol, maxVocabSymbol);
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
    __param(0, Decorators.NotNull),
    __param(1, Decorators.Nullable)
  ], NotSetTransition);
  exports.NotSetTransition = NotSetTransition;
});
var RuleStopState_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RuleStopState = void 0;
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
var RuleTransition_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RuleTransition = void 0;
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
      return 3;
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
    __param(0, Decorators.NotNull),
    __param(3, Decorators.NotNull)
  ], RuleTransition);
  exports.RuleTransition = RuleTransition;
});
var WildcardTransition_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WildcardTransition = void 0;
  let WildcardTransition = class WildcardTransition extends Transition_1.Transition {
    constructor(target) {
      super(target);
    }
    get serializationType() {
      return 9;
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
var LL1Analyzer_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LL1Analyzer = void 0;
  let LL1Analyzer = class LL1Analyzer2 {
    constructor(atn) {
      this.atn = atn;
    }
    getDecisionLookahead(s) {
      if (s == null) {
        return void 0;
      }
      let look = new Array(s.numberOfTransitions);
      for (let alt = 0; alt < s.numberOfTransitions; alt++) {
        let current = new IntervalSet_1.IntervalSet();
        look[alt] = current;
        let lookBusy = new Array2DHashSet_1.Array2DHashSet(ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE);
        let seeThruPreds = false;
        this._LOOK(s.transition(alt).target, void 0, PredictionContext_1.PredictionContext.EMPTY_LOCAL, current, lookBusy, new BitSet_1.BitSet(), seeThruPreds, false);
        if (current.size === 0 || current.contains(LL1Analyzer2.HIT_PRED)) {
          current = void 0;
          look[alt] = current;
        }
      }
      return look;
    }
    LOOK(s, ctx, stopState) {
      if (stopState === void 0) {
        if (s.atn == null) {
          throw new Error("Illegal state");
        }
        stopState = s.atn.ruleToStopState[s.ruleIndex];
      } else if (stopState === null) {
        stopState = void 0;
      }
      let r = new IntervalSet_1.IntervalSet();
      let seeThruPreds = true;
      let addEOF = true;
      this._LOOK(s, stopState, ctx, r, new Array2DHashSet_1.Array2DHashSet(), new BitSet_1.BitSet(), seeThruPreds, addEOF);
      return r;
    }
    _LOOK(s, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF) {
      let c = ATNConfig_1.ATNConfig.create(s, 0, ctx);
      if (!lookBusy.add(c)) {
        return;
      }
      if (s === stopState) {
        if (PredictionContext_1.PredictionContext.isEmptyLocal(ctx)) {
          look.add(Token_1.Token.EPSILON);
          return;
        } else if (ctx.isEmpty) {
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
            this._LOOK(returnState, stopState, ctx.getParent(i), look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
          }
        } finally {
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
          } finally {
            calledRuleStack.clear(t.ruleIndex);
          }
        } else if (t instanceof AbstractPredicateTransition_1.AbstractPredicateTransition) {
          if (seeThruPreds) {
            this._LOOK(t.target, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
          } else {
            look.add(LL1Analyzer2.HIT_PRED);
          }
        } else if (t.isEpsilon) {
          this._LOOK(t.target, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
        } else if (t instanceof WildcardTransition_1.WildcardTransition) {
          look.addAll(IntervalSet_1.IntervalSet.of(Token_1.Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType));
        } else {
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
  LL1Analyzer.HIT_PRED = Token_1.Token.INVALID_TYPE;
  __decorate([
    Decorators.NotNull
  ], LL1Analyzer.prototype, "atn", void 0);
  __decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
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
var ATN_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ATN = void 0;
  let ATN = class ATN {
    constructor(grammarType, maxTokenType) {
      this.states = [];
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
      assert$1(this.decisionToDFA != null && this.decisionToDFA.length === this.decisionToState.length);
      return this.decisionToDFA;
    }
    nextTokens(s, ctx) {
      if (ctx) {
        let anal = new LL1Analyzer_1.LL1Analyzer(this);
        let next = anal.LOOK(s, ctx);
        return next;
      } else {
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
      return void 0;
    }
    get numberOfDecisions() {
      return this.decisionToState.length;
    }
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
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
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
  (function(ATN2) {
    ATN2.INVALID_ALT_NUMBER = 0;
  })(ATN = exports.ATN || (exports.ATN = {}));
  exports.ATN = ATN;
});
var LexerIndexedCustomAction_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LexerIndexedCustomAction = void 0;
  let LexerIndexedCustomAction = class LexerIndexedCustomAction2 {
    constructor(offset, action) {
      this._offset = offset;
      this._action = action;
    }
    get offset() {
      return this._offset;
    }
    get action() {
      return this._action;
    }
    get actionType() {
      return this._action.actionType;
    }
    get isPositionDependent() {
      return true;
    }
    execute(lexer) {
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
      } else if (!(obj instanceof LexerIndexedCustomAction2)) {
        return false;
      }
      return this._offset === obj._offset && this._action.equals(obj._action);
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
var LexerActionExecutor_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LexerActionExecutor = void 0;
  let LexerActionExecutor = class LexerActionExecutor2 {
    constructor(lexerActions) {
      this._lexerActions = lexerActions;
      let hash = MurmurHash_1.MurmurHash.initialize();
      for (let lexerAction of lexerActions) {
        hash = MurmurHash_1.MurmurHash.update(hash, lexerAction);
      }
      this.cachedHashCode = MurmurHash_1.MurmurHash.finish(hash, lexerActions.length);
    }
    static append(lexerActionExecutor, lexerAction) {
      if (!lexerActionExecutor) {
        return new LexerActionExecutor2([lexerAction]);
      }
      let lexerActions = lexerActionExecutor._lexerActions.slice(0);
      lexerActions.push(lexerAction);
      return new LexerActionExecutor2(lexerActions);
    }
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
      return new LexerActionExecutor2(updatedLexerActions);
    }
    get lexerActions() {
      return this._lexerActions;
    }
    execute(lexer, input, startIndex) {
      let requiresSeek = false;
      let stopIndex = input.index;
      try {
        for (let lexerAction of this._lexerActions) {
          if (lexerAction instanceof LexerIndexedCustomAction_1.LexerIndexedCustomAction) {
            let offset = lexerAction.offset;
            input.seek(startIndex + offset);
            lexerAction = lexerAction.action;
            requiresSeek = startIndex + offset !== stopIndex;
          } else if (lexerAction.isPositionDependent) {
            input.seek(stopIndex);
            requiresSeek = false;
          }
          lexerAction.execute(lexer);
        }
      } finally {
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
      } else if (!(obj instanceof LexerActionExecutor2)) {
        return false;
      }
      return this.cachedHashCode === obj.cachedHashCode && ArrayEqualityComparator_1.ArrayEqualityComparator.INSTANCE.equals(this._lexerActions, obj._lexerActions);
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
var LexerNoViableAltException_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LexerNoViableAltException = void 0;
  let LexerNoViableAltException2 = class LexerNoViableAltException extends RecognitionException_1.RecognitionException {
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
      return `LexerNoViableAltException('${symbol}')`;
    }
  };
  __decorate([
    Decorators.Override
  ], LexerNoViableAltException2.prototype, "inputStream", null);
  __decorate([
    Decorators.Override
  ], LexerNoViableAltException2.prototype, "toString", null);
  LexerNoViableAltException2 = __decorate([
    __param(1, Decorators.NotNull)
  ], LexerNoViableAltException2);
  exports.LexerNoViableAltException = LexerNoViableAltException2;
});
var OrderedATNConfigSet_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OrderedATNConfigSet = void 0;
  class OrderedATNConfigSet extends ATNConfigSet_1.ATNConfigSet {
    constructor(set, readonly) {
      if (set != null && readonly != null) {
        super(set, readonly);
      } else {
        super();
      }
    }
    clone(readonly) {
      let copy2 = new OrderedATNConfigSet(this, readonly);
      if (!readonly && this.isReadOnly) {
        copy2.addAll(this);
      }
      return copy2;
    }
    getKey(e) {
      return {state: 0, alt: e.hashCode()};
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
var LexerATNSimulator_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LexerATNSimulator = void 0;
  let LexerATNSimulator = class LexerATNSimulator2 extends ATNSimulator_1.ATNSimulator {
    constructor(atn, recog) {
      super(atn);
      this.optimize_tail_calls = true;
      this.startIndex = -1;
      this._line = 1;
      this._charPositionInLine = 0;
      this.mode = Lexer_1.Lexer.DEFAULT_MODE;
      this.prevAccept = new LexerATNSimulator2.SimState();
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
        } else {
          return this.execATN(input, s0);
        }
      } finally {
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
      if (LexerATNSimulator2.debug) {
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
        } else {
          next = dfa.s0;
        }
      }
      let predict = this.execATN(input, next);
      if (LexerATNSimulator2.debug) {
        console.log(`DFA after matchATN: ${this.atn.modeToDFA[old_mode].toLexerString()}`);
      }
      return predict;
    }
    execATN(input, ds0) {
      if (LexerATNSimulator2.debug) {
        console.log(`start state closure=${ds0.configs}`);
      }
      if (ds0.isAcceptState) {
        this.captureSimState(this.prevAccept, input, ds0);
      }
      let t = input.LA(1);
      let s = ds0;
      while (true) {
        if (LexerATNSimulator2.debug) {
          console.log(`execATN loop starting closure: ${s.configs}`);
        }
        let target = this.getExistingTargetState(s, t);
        if (target == null) {
          target = this.computeTargetState(input, s, t);
        }
        if (target === ATNSimulator_1.ATNSimulator.ERROR) {
          break;
        }
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
        s = target;
      }
      return this.failOrAccept(this.prevAccept, input, s.configs, t);
    }
    getExistingTargetState(s, t) {
      let target = s.getTarget(t);
      if (LexerATNSimulator2.debug && target != null) {
        console.log("reuse state " + s.stateNumber + " edge to " + target.stateNumber);
      }
      return target;
    }
    computeTargetState(input, s, t) {
      let reach = new OrderedATNConfigSet_1.OrderedATNConfigSet();
      this.getReachableConfigSet(input, s.configs, reach, t);
      if (reach.isEmpty) {
        if (!reach.hasSemanticContext) {
          this.addDFAEdge(s, t, ATNSimulator_1.ATNSimulator.ERROR);
        }
        return ATNSimulator_1.ATNSimulator.ERROR;
      }
      return this.addDFAEdge(s, t, reach);
    }
    failOrAccept(prevAccept, input, reach, t) {
      if (prevAccept.dfaState != null) {
        let lexerActionExecutor = prevAccept.dfaState.lexerActionExecutor;
        this.accept(input, lexerActionExecutor, this.startIndex, prevAccept.index, prevAccept.line, prevAccept.charPos);
        return prevAccept.dfaState.prediction;
      } else {
        if (t === IntStream_1.IntStream.EOF && input.index === this.startIndex) {
          return Token_1.Token.EOF;
        }
        throw new LexerNoViableAltException_1.LexerNoViableAltException(this.recog, input, this.startIndex, reach);
      }
    }
    getReachableConfigSet(input, closure, reach, t) {
      let skipAlt = ATN_1.ATN.INVALID_ALT_NUMBER;
      for (let c of closure) {
        let currentAltReachedAcceptState = c.alt === skipAlt;
        if (currentAltReachedAcceptState && c.hasPassedThroughNonGreedyDecision) {
          continue;
        }
        if (LexerATNSimulator2.debug) {
          console.log(`testing ${this.getTokenName(t)} at ${c.toString(this.recog, true)}`);
        }
        let n = c.state.numberOfOptimizedTransitions;
        for (let ti = 0; ti < n; ti++) {
          let trans = c.state.getOptimizedTransition(ti);
          let target = this.getReachableTarget(trans, t);
          if (target != null) {
            let lexerActionExecutor = c.lexerActionExecutor;
            let config2;
            if (lexerActionExecutor != null) {
              lexerActionExecutor = lexerActionExecutor.fixOffsetBeforeMatch(input.index - this.startIndex);
              config2 = c.transform(target, true, lexerActionExecutor);
            } else {
              assert$1(c.lexerActionExecutor == null);
              config2 = c.transform(target, true);
            }
            let treatEofAsEpsilon = t === IntStream_1.IntStream.EOF;
            if (this.closure(input, config2, reach, currentAltReachedAcceptState, true, treatEofAsEpsilon)) {
              skipAlt = c.alt;
              break;
            }
          }
        }
      }
    }
    accept(input, lexerActionExecutor, startIndex, index, line, charPos) {
      if (LexerATNSimulator2.debug) {
        console.log(`ACTION ${lexerActionExecutor}`);
      }
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
      return void 0;
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
    closure(input, config2, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon) {
      if (LexerATNSimulator2.debug) {
        console.log("closure(" + config2.toString(this.recog, true) + ")");
      }
      if (config2.state instanceof RuleStopState_1.RuleStopState) {
        if (LexerATNSimulator2.debug) {
          if (this.recog != null) {
            console.log(`closure at ${this.recog.ruleNames[config2.state.ruleIndex]} rule stop ${config2}`);
          } else {
            console.log(`closure at rule stop ${config2}`);
          }
        }
        let context = config2.context;
        if (context.isEmpty) {
          configs.add(config2);
          return true;
        } else if (context.hasEmpty) {
          configs.add(config2.transform(config2.state, true, PredictionContext_1.PredictionContext.EMPTY_FULL));
          currentAltReachedAcceptState = true;
        }
        for (let i = 0; i < context.size; i++) {
          let returnStateNumber = context.getReturnState(i);
          if (returnStateNumber === PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY) {
            continue;
          }
          let newContext = context.getParent(i);
          let returnState = this.atn.states[returnStateNumber];
          let c = config2.transform(returnState, false, newContext);
          currentAltReachedAcceptState = this.closure(input, c, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon);
        }
        return currentAltReachedAcceptState;
      }
      if (!config2.state.onlyHasEpsilonTransitions) {
        if (!currentAltReachedAcceptState || !config2.hasPassedThroughNonGreedyDecision) {
          configs.add(config2);
        }
      }
      let p = config2.state;
      for (let i = 0; i < p.numberOfOptimizedTransitions; i++) {
        let t = p.getOptimizedTransition(i);
        let c = this.getEpsilonTarget(input, config2, t, configs, speculative, treatEofAsEpsilon);
        if (c != null) {
          currentAltReachedAcceptState = this.closure(input, c, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon);
        }
      }
      return currentAltReachedAcceptState;
    }
    getEpsilonTarget(input, config2, t, configs, speculative, treatEofAsEpsilon) {
      let c;
      switch (t.serializationType) {
        case 3:
          let ruleTransition = t;
          if (this.optimize_tail_calls && ruleTransition.optimizedTailCall && !config2.context.hasEmpty) {
            c = config2.transform(t.target, true);
          } else {
            let newContext = config2.context.getChild(ruleTransition.followState.stateNumber);
            c = config2.transform(t.target, true, newContext);
          }
          break;
        case 10:
          throw new Error("Precedence predicates are not supported in lexers.");
        case 4:
          let pt = t;
          if (LexerATNSimulator2.debug) {
            console.log("EVAL rule " + pt.ruleIndex + ":" + pt.predIndex);
          }
          configs.hasSemanticContext = true;
          if (this.evaluatePredicate(input, pt.ruleIndex, pt.predIndex, speculative)) {
            c = config2.transform(t.target, true);
          } else {
            c = void 0;
          }
          break;
        case 6:
          if (config2.context.hasEmpty) {
            let lexerActionExecutor = LexerActionExecutor_1.LexerActionExecutor.append(config2.lexerActionExecutor, this.atn.lexerActions[t.actionIndex]);
            c = config2.transform(t.target, true, lexerActionExecutor);
            break;
          } else {
            c = config2.transform(t.target, true);
            break;
          }
        case 1:
          c = config2.transform(t.target, true);
          break;
        case 5:
        case 2:
        case 7:
          if (treatEofAsEpsilon) {
            if (t.matches(IntStream_1.IntStream.EOF, Lexer_1.Lexer.MIN_CHAR_VALUE, Lexer_1.Lexer.MAX_CHAR_VALUE)) {
              c = config2.transform(t.target, false);
              break;
            }
          }
          c = void 0;
          break;
        default:
          c = void 0;
          break;
      }
      return c;
    }
    evaluatePredicate(input, ruleIndex, predIndex, speculative) {
      if (this.recog == null) {
        return true;
      }
      if (!speculative) {
        return this.recog.sempred(void 0, ruleIndex, predIndex);
      }
      let savedCharPositionInLine = this._charPositionInLine;
      let savedLine = this._line;
      let index = input.index;
      let marker = input.mark();
      try {
        this.consume(input);
        return this.recog.sempred(void 0, ruleIndex, predIndex);
      } finally {
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
        let suppressEdge = q.hasSemanticContext;
        if (suppressEdge) {
          q.hasSemanticContext = false;
        }
        let to = this.addDFAState(q);
        if (suppressEdge) {
          return to;
        }
        this.addDFAEdge(p, t, to);
        return to;
      } else {
        if (LexerATNSimulator2.debug) {
          console.log("EDGE " + p + " -> " + q + " upon " + String.fromCharCode(t));
        }
        if (p != null) {
          p.setTarget(t, q);
        }
      }
    }
    addDFAState(configs) {
      assert$1(!configs.hasSemanticContext);
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
    getText(input) {
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
      } else {
        this._charPositionInLine++;
      }
      input.consume();
    }
    getTokenName(t) {
      if (t === -1) {
        return "EOF";
      }
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
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
  ], LexerATNSimulator.prototype, "execATN", null);
  __decorate([
    __param(0, Decorators.NotNull)
  ], LexerATNSimulator.prototype, "getExistingTargetState", null);
  __decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
  ], LexerATNSimulator.prototype, "computeTargetState", null);
  __decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(2, Decorators.NotNull)
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
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(2, Decorators.NotNull)
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
  (function(LexerATNSimulator2) {
    LexerATNSimulator2.debug = false;
    LexerATNSimulator2.dfa_debug = false;
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
        this.dfaState = void 0;
      }
    }
    LexerATNSimulator2.SimState = SimState;
  })(LexerATNSimulator = exports.LexerATNSimulator || (exports.LexerATNSimulator = {}));
  exports.LexerATNSimulator = LexerATNSimulator;
});
var Lexer_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Lexer = void 0;
  class Lexer2 extends Recognizer_1.Recognizer {
    constructor(input) {
      super();
      this._factory = CommonTokenFactory_1.CommonTokenFactory.DEFAULT;
      this._tokenStartCharIndex = -1;
      this._tokenStartLine = 0;
      this._tokenStartCharPositionInLine = 0;
      this._hitEOF = false;
      this._channel = 0;
      this._type = 0;
      this._modeStack = new IntegerStack_1.IntegerStack();
      this._mode = Lexer2.DEFAULT_MODE;
      this._input = input;
      this._tokenFactorySourcePair = {source: this, stream: input};
    }
    static get DEFAULT_TOKEN_CHANNEL() {
      return Token_1.Token.DEFAULT_CHANNEL;
    }
    static get HIDDEN() {
      return Token_1.Token.HIDDEN_CHANNEL;
    }
    reset(resetInput) {
      if (resetInput === void 0 || resetInput) {
        this._input.seek(0);
      }
      this._token = void 0;
      this._type = Token_1.Token.INVALID_TYPE;
      this._channel = Token_1.Token.DEFAULT_CHANNEL;
      this._tokenStartCharIndex = -1;
      this._tokenStartCharPositionInLine = -1;
      this._tokenStartLine = -1;
      this._text = void 0;
      this._hitEOF = false;
      this._mode = Lexer2.DEFAULT_MODE;
      this._modeStack.clear();
      this.interpreter.reset();
    }
    nextToken() {
      if (this._input == null) {
        throw new Error("nextToken requires a non-null input stream.");
      }
      let tokenStartMarker = this._input.mark();
      try {
        outer:
          while (true) {
            if (this._hitEOF) {
              return this.emitEOF();
            }
            this._token = void 0;
            this._channel = Token_1.Token.DEFAULT_CHANNEL;
            this._tokenStartCharIndex = this._input.index;
            this._tokenStartCharPositionInLine = this.interpreter.charPositionInLine;
            this._tokenStartLine = this.interpreter.line;
            this._text = void 0;
            do {
              this._type = Token_1.Token.INVALID_TYPE;
              let ttype;
              try {
                ttype = this.interpreter.match(this._input, this._mode);
              } catch (e) {
                if (e instanceof LexerNoViableAltException_1.LexerNoViableAltException) {
                  this.notifyListeners(e);
                  this.recover(e);
                  ttype = Lexer2.SKIP;
                } else {
                  throw e;
                }
              }
              if (this._input.LA(1) === IntStream_1.IntStream.EOF) {
                this._hitEOF = true;
              }
              if (this._type === Token_1.Token.INVALID_TYPE) {
                this._type = ttype;
              }
              if (this._type === Lexer2.SKIP) {
                continue outer;
              }
            } while (this._type === Lexer2.MORE);
            if (this._token == null) {
              return this.emit();
            }
            return this._token;
          }
      } finally {
        this._input.release(tokenStartMarker);
      }
    }
    skip() {
      this._type = Lexer2.SKIP;
    }
    more() {
      this._type = Lexer2.MORE;
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
    set tokenFactory(factory) {
      this._factory = factory;
    }
    get inputStream() {
      return this._input;
    }
    set inputStream(input) {
      this.reset(false);
      this._input = input;
      this._tokenFactorySourcePair = {source: this, stream: this._input};
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
      let eof = this._factory.create(this._tokenFactorySourcePair, Token_1.Token.EOF, void 0, Token_1.Token.DEFAULT_CHANNEL, this._input.index, this._input.index - 1, line, cpos);
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
    get charIndex() {
      return this._input.index;
    }
    get text() {
      if (this._text != null) {
        return this._text;
      }
      return this.interpreter.getText(this._input);
    }
    set text(text) {
      this._text = text;
    }
    get token() {
      return this._token;
    }
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
      let msg = "token recognition error at: '" + this.getErrorDisplay(text) + "'";
      let listener = this.getErrorListenerDispatch();
      if (listener.syntaxError) {
        listener.syntaxError(this, void 0, this._tokenStartLine, this._tokenStartCharPositionInLine, msg, e);
      }
    }
    getErrorDisplay(s) {
      if (typeof s === "number") {
        switch (s) {
          case Token_1.Token.EOF:
            return "<EOF>";
          case 10:
            return "\\n";
          case 9:
            return "\\t";
          case 13:
            return "\\r";
        }
        return String.fromCharCode(s);
      }
      return s.replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r");
    }
    getCharErrorDisplay(c) {
      let s = this.getErrorDisplay(c);
      return "'" + s + "'";
    }
    recover(re) {
      if (re instanceof LexerNoViableAltException_1.LexerNoViableAltException) {
        if (this._input.LA(1) !== IntStream_1.IntStream.EOF) {
          this.interpreter.consume(this._input);
        }
      } else {
        this._input.consume();
      }
    }
  }
  Lexer2.DEFAULT_MODE = 0;
  Lexer2.MORE = -2;
  Lexer2.SKIP = -3;
  Lexer2.MIN_CHAR_VALUE = 0;
  Lexer2.MAX_CHAR_VALUE = 1114111;
  __decorate([
    Decorators.Override
  ], Lexer2.prototype, "nextToken", null);
  __decorate([
    Decorators.Override
  ], Lexer2.prototype, "tokenFactory", null);
  __decorate([
    Decorators.Override
  ], Lexer2.prototype, "inputStream", null);
  __decorate([
    Decorators.Override
  ], Lexer2.prototype, "sourceName", null);
  __decorate([
    Decorators.Override
  ], Lexer2.prototype, "line", null);
  __decorate([
    Decorators.Override
  ], Lexer2.prototype, "charPositionInLine", null);
  exports.Lexer = Lexer2;
});
var IntervalSet_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.IntervalSet = void 0;
  class IntervalSet {
    constructor(intervals) {
      this.readonly = false;
      if (intervals != null) {
        this._intervals = intervals.slice(0);
      } else {
        this._intervals = [];
      }
    }
    static get COMPLETE_CHAR_SET() {
      if (IntervalSet._COMPLETE_CHAR_SET === void 0) {
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
    add(a, b = a) {
      this.addRange(Interval_1.Interval.of(a, b));
    }
    addRange(addition) {
      if (this.readonly) {
        throw new Error("can't alter readonly IntervalSet");
      }
      if (addition.b < addition.a) {
        return;
      }
      for (let i = 0; i < this._intervals.length; i++) {
        let r = this._intervals[i];
        if (addition.equals(r)) {
          return;
        }
        if (addition.adjacent(r) || !addition.disjoint(r)) {
          let bigger = addition.union(r);
          this._intervals[i] = bigger;
          while (i < this._intervals.length - 1) {
            i++;
            let next = this._intervals[i];
            if (!bigger.adjacent(next) && bigger.disjoint(next)) {
              break;
            }
            this._intervals.splice(i, 1);
            i--;
            this._intervals[i] = bigger.union(next);
          }
          return;
        }
        if (addition.startsBeforeDisjoint(r)) {
          this._intervals.splice(i, 0, addition);
          return;
        }
      }
      this._intervals.push(addition);
    }
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
        let n = other._intervals.length;
        for (let i = 0; i < n; i++) {
          let I = other._intervals[i];
          this.add(I.a, I.b);
        }
      } else {
        for (let value of set.toArray()) {
          this.add(value);
        }
      }
      return this;
    }
    complementRange(minElement, maxElement) {
      return this.complement(IntervalSet.of(minElement, maxElement));
    }
    complement(vocabulary) {
      if (vocabulary.isNil) {
        return IntervalSet.EMPTY_SET;
      }
      let vocabularyIS;
      if (vocabulary instanceof IntervalSet) {
        vocabularyIS = vocabulary;
      } else {
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
    static subtract(left, right) {
      if (left.isNil) {
        return new IntervalSet();
      }
      let result = new IntervalSet(left._intervals);
      if (right.isNil) {
        return result;
      }
      let resultI = 0;
      let rightI = 0;
      while (resultI < result._intervals.length && rightI < right._intervals.length) {
        let resultInterval = result._intervals[resultI];
        let rightInterval = right._intervals[rightI];
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
            result._intervals[resultI] = beforeCurrent;
            result._intervals.splice(resultI + 1, 0, afterCurrent);
            resultI++;
            rightI++;
            continue;
          } else {
            result._intervals[resultI] = beforeCurrent;
            resultI++;
            continue;
          }
        } else {
          if (afterCurrent) {
            result._intervals[resultI] = afterCurrent;
            rightI++;
            continue;
          } else {
            result._intervals.splice(resultI, 1);
            continue;
          }
        }
      }
      return result;
    }
    or(a) {
      let o = new IntervalSet();
      o.addAll(this);
      o.addAll(a);
      return o;
    }
    and(other) {
      if (other.isNil) {
        return new IntervalSet();
      }
      let myIntervals = this._intervals;
      let theirIntervals = other._intervals;
      let intersection;
      let mySize = myIntervals.length;
      let theirSize = theirIntervals.length;
      let i = 0;
      let j = 0;
      while (i < mySize && j < theirSize) {
        let mine = myIntervals[i];
        let theirs = theirIntervals[j];
        if (mine.startsBeforeDisjoint(theirs)) {
          i++;
        } else if (theirs.startsBeforeDisjoint(mine)) {
          j++;
        } else if (mine.properlyContains(theirs)) {
          if (!intersection) {
            intersection = new IntervalSet();
          }
          intersection.addRange(mine.intersection(theirs));
          j++;
        } else if (theirs.properlyContains(mine)) {
          if (!intersection) {
            intersection = new IntervalSet();
          }
          intersection.addRange(mine.intersection(theirs));
          i++;
        } else if (!mine.disjoint(theirs)) {
          if (!intersection) {
            intersection = new IntervalSet();
          }
          intersection.addRange(mine.intersection(theirs));
          if (mine.startsAfterNonDisjoint(theirs)) {
            j++;
          } else if (theirs.startsAfterNonDisjoint(mine)) {
            i++;
          }
        }
      }
      if (!intersection) {
        return new IntervalSet();
      }
      return intersection;
    }
    contains(el) {
      let n = this._intervals.length;
      let l = 0;
      let r = n - 1;
      while (l <= r) {
        let m = l + r >> 1;
        let I = this._intervals[m];
        let a = I.a;
        let b = I.b;
        if (b < el) {
          l = m + 1;
        } else if (a > el) {
          r = m - 1;
        } else {
          return true;
        }
      }
      return false;
    }
    get isNil() {
      return this._intervals == null || this._intervals.length === 0;
    }
    get maxElement() {
      if (this.isNil) {
        throw new RangeError("set is empty");
      }
      let last = this._intervals[this._intervals.length - 1];
      return last.b;
    }
    get minElement() {
      if (this.isNil) {
        throw new RangeError("set is empty");
      }
      return this._intervals[0].a;
    }
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
        } else {
          buf += ", ";
        }
        let a = I.a;
        let b = I.b;
        if (a === b) {
          if (a === Token_1.Token.EOF) {
            buf += "<EOF>";
          } else if (elemAreChar) {
            buf += "'" + String.fromCodePoint(a) + "'";
          } else {
            buf += a;
          }
        } else {
          if (elemAreChar) {
            buf += "'" + String.fromCodePoint(a) + "'..'" + String.fromCodePoint(b) + "'";
          } else {
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
        } else {
          buf += ", ";
        }
        let a = I.a;
        let b = I.b;
        if (a === b) {
          buf += this.elementName(vocabulary, a);
        } else {
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
      } else if (a === Token_1.Token.EPSILON) {
        return "<EPSILON>";
      } else {
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
        n += I.b - I.a + 1;
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
          break;
        }
        if (el === a && el === b) {
          this._intervals.splice(i, 1);
          break;
        }
        if (el === a) {
          this._intervals[i] = Interval_1.Interval.of(I.a + 1, I.b);
          break;
        }
        if (el === b) {
          this._intervals[i] = Interval_1.Interval.of(I.a, I.b - 1);
          break;
        }
        if (el > a && el < b) {
          let oldb = I.b;
          this._intervals[i] = Interval_1.Interval.of(I.a, el - 1);
          this.add(el + 1, oldb);
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
var ATNDeserializationOptions_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ATNDeserializationOptions = void 0;
  class ATNDeserializationOptions {
    constructor(options) {
      this.readOnly = false;
      if (options) {
        this.verifyATN = options.verifyATN;
        this.generateRuleBypassTransitions = options.generateRuleBypassTransitions;
        this.optimize = options.optimize;
      } else {
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
var ActionTransition_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ActionTransition = void 0;
  let ActionTransition = class ActionTransition extends Transition_1.Transition {
    constructor(target, ruleIndex, actionIndex = -1, isCtxDependent = false) {
      super(target);
      this.ruleIndex = ruleIndex;
      this.actionIndex = actionIndex;
      this.isCtxDependent = isCtxDependent;
    }
    get serializationType() {
      return 6;
    }
    get isEpsilon() {
      return true;
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
var AtomTransition_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AtomTransition = void 0;
  let AtomTransition = class AtomTransition extends Transition_1.Transition {
    constructor(target, label) {
      super(target);
      this._label = label;
    }
    get serializationType() {
      return 5;
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
var BlockStartState_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BlockStartState = void 0;
  class BlockStartState extends DecisionState_1.DecisionState {
  }
  exports.BlockStartState = BlockStartState;
});
var BasicBlockStartState_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BasicBlockStartState = void 0;
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
var BlockEndState_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BlockEndState = void 0;
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
var EpsilonTransition_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.EpsilonTransition = void 0;
  let EpsilonTransition = class EpsilonTransition extends Transition_1.Transition {
    constructor(target, outermostPrecedenceReturn = -1) {
      super(target);
      this._outermostPrecedenceReturn = outermostPrecedenceReturn;
    }
    get outermostPrecedenceReturn() {
      return this._outermostPrecedenceReturn;
    }
    get serializationType() {
      return 1;
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
var LexerChannelAction_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LexerChannelAction = void 0;
  class LexerChannelAction {
    constructor(channel) {
      this._channel = channel;
    }
    get channel() {
      return this._channel;
    }
    get actionType() {
      return 0;
    }
    get isPositionDependent() {
      return false;
    }
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
      } else if (!(obj instanceof LexerChannelAction)) {
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
var LexerCustomAction_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LexerCustomAction = void 0;
  class LexerCustomAction {
    constructor(ruleIndex, actionIndex) {
      this._ruleIndex = ruleIndex;
      this._actionIndex = actionIndex;
    }
    get ruleIndex() {
      return this._ruleIndex;
    }
    get actionIndex() {
      return this._actionIndex;
    }
    get actionType() {
      return 1;
    }
    get isPositionDependent() {
      return true;
    }
    execute(lexer) {
      lexer.action(void 0, this._ruleIndex, this._actionIndex);
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
      } else if (!(obj instanceof LexerCustomAction)) {
        return false;
      }
      return this._ruleIndex === obj._ruleIndex && this._actionIndex === obj._actionIndex;
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
var LexerModeAction_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LexerModeAction = void 0;
  class LexerModeAction {
    constructor(mode) {
      this._mode = mode;
    }
    get mode() {
      return this._mode;
    }
    get actionType() {
      return 2;
    }
    get isPositionDependent() {
      return false;
    }
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
      } else if (!(obj instanceof LexerModeAction)) {
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
var LexerMoreAction_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LexerMoreAction = void 0;
  class LexerMoreAction {
    constructor() {
    }
    get actionType() {
      return 3;
    }
    get isPositionDependent() {
      return false;
    }
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
  (function(LexerMoreAction2) {
    LexerMoreAction2.INSTANCE = new LexerMoreAction2();
  })(LexerMoreAction = exports.LexerMoreAction || (exports.LexerMoreAction = {}));
});
var LexerPopModeAction_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LexerPopModeAction = void 0;
  class LexerPopModeAction {
    constructor() {
    }
    get actionType() {
      return 4;
    }
    get isPositionDependent() {
      return false;
    }
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
  (function(LexerPopModeAction2) {
    LexerPopModeAction2.INSTANCE = new LexerPopModeAction2();
  })(LexerPopModeAction = exports.LexerPopModeAction || (exports.LexerPopModeAction = {}));
});
var LexerPushModeAction_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LexerPushModeAction = void 0;
  class LexerPushModeAction {
    constructor(mode) {
      this._mode = mode;
    }
    get mode() {
      return this._mode;
    }
    get actionType() {
      return 5;
    }
    get isPositionDependent() {
      return false;
    }
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
      } else if (!(obj instanceof LexerPushModeAction)) {
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
var LexerSkipAction_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LexerSkipAction = void 0;
  class LexerSkipAction {
    constructor() {
    }
    get actionType() {
      return 6;
    }
    get isPositionDependent() {
      return false;
    }
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
  (function(LexerSkipAction2) {
    LexerSkipAction2.INSTANCE = new LexerSkipAction2();
  })(LexerSkipAction = exports.LexerSkipAction || (exports.LexerSkipAction = {}));
});
var LexerTypeAction_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LexerTypeAction = void 0;
  class LexerTypeAction {
    constructor(type) {
      this._type = type;
    }
    get type() {
      return this._type;
    }
    get actionType() {
      return 7;
    }
    get isPositionDependent() {
      return false;
    }
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
      } else if (!(obj instanceof LexerTypeAction)) {
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
var LoopEndState_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LoopEndState = void 0;
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
var ConflictInfo_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ConflictInfo = void 0;
  class ConflictInfo {
    constructor(conflictedAlts, exact) {
      this._conflictedAlts = conflictedAlts;
      this.exact = exact;
    }
    get conflictedAlts() {
      return this._conflictedAlts;
    }
    get isExact() {
      return this.exact;
    }
    equals(obj) {
      if (obj === this) {
        return true;
      } else if (!(obj instanceof ConflictInfo)) {
        return false;
      }
      return this.isExact === obj.isExact && Utils.equals(this.conflictedAlts, obj.conflictedAlts);
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
var TerminalNode_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TerminalNode = void 0;
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
var ErrorNode_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ErrorNode = void 0;
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
var RuleNode_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RuleNode = void 0;
  class RuleNode {
  }
  exports.RuleNode = RuleNode;
});
var Trees_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Trees = void 0;
  class Trees {
    static toStringTree(t, arg2) {
      let ruleNames;
      if (arg2 instanceof Parser_1.Parser) {
        ruleNames = arg2.ruleNames;
      } else {
        ruleNames = arg2;
      }
      let s = Utils.escapeWhitespace(this.getNodeText(t, ruleNames), false);
      if (t.childCount === 0) {
        return s;
      }
      let buf = "";
      buf += "(";
      s = Utils.escapeWhitespace(this.getNodeText(t, ruleNames), false);
      buf += s;
      buf += " ";
      for (let i = 0; i < t.childCount; i++) {
        if (i > 0) {
          buf += " ";
        }
        buf += this.toStringTree(t.getChild(i), ruleNames);
      }
      buf += ")";
      return buf;
    }
    static getNodeText(t, arg2) {
      let ruleNames;
      if (arg2 instanceof Parser_1.Parser) {
        ruleNames = arg2.ruleNames;
      } else if (arg2) {
        ruleNames = arg2;
      } else {
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
      } else if (t instanceof ErrorNode_1.ErrorNode) {
        return t.toString();
      } else if (t instanceof TerminalNode_1.TerminalNode) {
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
        ancestors.unshift(p);
        p = p.parent;
      }
      return ancestors;
    }
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
      if (findTokens && t instanceof TerminalNode_1.TerminalNode) {
        if (t.symbol.type === index) {
          nodes.push(t);
        }
      } else if (!findTokens && t instanceof ParserRuleContext_1.ParserRuleContext) {
        if (t.ruleIndex === index) {
          nodes.push(t);
        }
      }
      for (let i = 0; i < t.childCount; i++) {
        Trees._findAllNodes(t.getChild(i), index, findTokens, nodes);
      }
    }
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
    static getRootOfSubtreeEnclosingRegion(t, startTokenIndex, stopTokenIndex) {
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
        if (startTokenIndex >= t.start.tokenIndex && (stopToken == null || stopTokenIndex <= stopToken.tokenIndex)) {
          return t;
        }
      }
      return void 0;
    }
    static stripChildrenOutOfRange(t, root, startIndex, stopIndex) {
      if (!t) {
        return;
      }
      let count = t.childCount;
      for (let i = 0; i < count; i++) {
        let child = t.getChild(i);
        let range = child.sourceInterval;
        if (child instanceof ParserRuleContext_1.ParserRuleContext && (range.b < startIndex || range.a > stopIndex)) {
          if (Trees.isAncestorOf(child, root)) {
            let abbrev = new CommonToken_1.CommonToken(Token_1.Token.INVALID_TYPE, "...");
            t.children[i] = new TerminalNode_1.TerminalNode(abbrev);
          }
        }
      }
    }
    static findNodeSuchThat(t, pred) {
      if (pred(t)) {
        return t;
      }
      let n = t.childCount;
      for (let i = 0; i < n; i++) {
        let u = Trees.findNodeSuchThat(t.getChild(i), pred);
        if (u !== void 0) {
          return u;
        }
      }
      return void 0;
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
var RuleContext_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RuleContext = void 0;
  class RuleContext2 extends RuleNode_1.RuleNode {
    constructor(parent, invokingState) {
      super();
      this._parent = parent;
      this.invokingState = invokingState != null ? invokingState : -1;
    }
    static getChildContext(parent, invokingState) {
      return new RuleContext2(parent, invokingState);
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
    get isEmpty() {
      return this.invokingState === -1;
    }
    get sourceInterval() {
      return Interval_1.Interval.INVALID;
    }
    get ruleContext() {
      return this;
    }
    get parent() {
      return this._parent;
    }
    setParent(parent) {
      this._parent = parent;
    }
    get payload() {
      return this;
    }
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
    get ruleIndex() {
      return -1;
    }
    get altNumber() {
      return ATN_1.ATN.INVALID_ALT_NUMBER;
    }
    set altNumber(altNumber) {
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
      const ruleNames = arg1 instanceof Recognizer_1.Recognizer ? arg1.ruleNames : arg1;
      stop = stop || ParserRuleContext_1.ParserRuleContext.emptyContext();
      let buf = "";
      let p = this;
      buf += "[";
      while (p && p !== stop) {
        if (!ruleNames) {
          if (!p.isEmpty) {
            buf += p.invokingState;
          }
        } else {
          let ruleIndex = p.ruleIndex;
          let ruleName = ruleIndex >= 0 && ruleIndex < ruleNames.length ? ruleNames[ruleIndex] : ruleIndex.toString();
          buf += ruleName;
        }
        if (p._parent && (ruleNames || !p._parent.isEmpty)) {
          buf += " ";
        }
        p = p._parent;
      }
      buf += "]";
      return buf.toString();
    }
  }
  __decorate([
    Decorators.Override
  ], RuleContext2.prototype, "sourceInterval", null);
  __decorate([
    Decorators.Override
  ], RuleContext2.prototype, "ruleContext", null);
  __decorate([
    Decorators.Override
  ], RuleContext2.prototype, "parent", null);
  __decorate([
    Decorators.Override
  ], RuleContext2.prototype, "setParent", null);
  __decorate([
    Decorators.Override
  ], RuleContext2.prototype, "payload", null);
  __decorate([
    Decorators.Override
  ], RuleContext2.prototype, "text", null);
  __decorate([
    Decorators.Override
  ], RuleContext2.prototype, "getChild", null);
  __decorate([
    Decorators.Override
  ], RuleContext2.prototype, "childCount", null);
  __decorate([
    Decorators.Override
  ], RuleContext2.prototype, "accept", null);
  __decorate([
    Decorators.Override
  ], RuleContext2.prototype, "toStringTree", null);
  exports.RuleContext = RuleContext2;
});
var ParserRuleContext_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ParserRuleContext = void 0;
  class ParserRuleContext2 extends RuleContext_1.RuleContext {
    constructor(parent, invokingStateNumber) {
      if (invokingStateNumber == null) {
        super();
      } else {
        super(parent, invokingStateNumber);
      }
    }
    static emptyContext() {
      return ParserRuleContext2.EMPTY;
    }
    copyFrom(ctx) {
      this._parent = ctx._parent;
      this.invokingState = ctx.invokingState;
      this._start = ctx._start;
      this._stop = ctx._stop;
      if (ctx.children) {
        this.children = [];
        for (let child of ctx.children) {
          if (child instanceof ErrorNode_1.ErrorNode) {
            this.addChild(child);
          }
        }
      }
    }
    enterRule(listener) {
    }
    exitRule(listener) {
    }
    addAnyChild(t) {
      if (!this.children) {
        this.children = [t];
      } else {
        this.children.push(t);
      }
      return t;
    }
    addChild(t) {
      if (t instanceof TerminalNode_1.TerminalNode) {
        t.setParent(this);
        this.addAnyChild(t);
        return;
      } else if (t instanceof RuleContext_1.RuleContext) {
        this.addAnyChild(t);
        return;
      } else {
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
      } else {
        const badToken = node;
        let t = new ErrorNode_1.ErrorNode(badToken);
        this.addAnyChild(t);
        t.setParent(this);
        return t;
      }
    }
    removeLastChild() {
      if (this.children) {
        this.children.pop();
      }
    }
    get parent() {
      let parent = super.parent;
      if (parent === void 0 || parent instanceof ParserRuleContext2) {
        return parent;
      }
      throw new TypeError("Invalid parent type for ParserRuleContext");
    }
    getChild(i, ctxType) {
      if (!this.children || i < 0 || i >= this.children.length) {
        throw new RangeError("index parameter must be between >= 0 and <= number of children.");
      }
      if (ctxType == null) {
        return this.children[i];
      }
      let result = this.tryGetChild(i, ctxType);
      if (result === void 0) {
        throw new Error("The specified node does not exist");
      }
      return result;
    }
    tryGetChild(i, ctxType) {
      if (!this.children || i < 0 || i >= this.children.length) {
        return void 0;
      }
      let j = -1;
      for (let o of this.children) {
        if (o instanceof ctxType) {
          j++;
          if (j === i) {
            return o;
          }
        }
      }
      return void 0;
    }
    getToken(ttype, i) {
      let result = this.tryGetToken(ttype, i);
      if (result === void 0) {
        throw new Error("The specified token does not exist");
      }
      return result;
    }
    tryGetToken(ttype, i) {
      if (!this.children || i < 0 || i >= this.children.length) {
        return void 0;
      }
      let j = -1;
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
      return void 0;
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
        return Interval_1.Interval.of(this._start.tokenIndex, this._start.tokenIndex - 1);
      }
      return Interval_1.Interval.of(this._start.tokenIndex, this._stop.tokenIndex);
    }
    get start() {
      return this._start;
    }
    get stop() {
      return this._stop;
    }
    toInfoString(recognizer) {
      let rules = recognizer.getRuleInvocationStack(this).reverse();
      return "ParserRuleContext" + rules + "{start=" + this._start + ", stop=" + this._stop + "}";
    }
  }
  ParserRuleContext2.EMPTY = new ParserRuleContext2();
  __decorate([
    Decorators.Override
  ], ParserRuleContext2.prototype, "parent", null);
  __decorate([
    Decorators.Override
  ], ParserRuleContext2.prototype, "childCount", null);
  __decorate([
    Decorators.Override
  ], ParserRuleContext2.prototype, "sourceInterval", null);
  exports.ParserRuleContext = ParserRuleContext2;
});
var PredictionMode_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PredictionMode = void 0;
  (function(PredictionMode) {
    PredictionMode[PredictionMode["SLL"] = 0] = "SLL";
    PredictionMode[PredictionMode["LL"] = 1] = "LL";
    PredictionMode[PredictionMode["LL_EXACT_AMBIG_DETECTION"] = 2] = "LL_EXACT_AMBIG_DETECTION";
  })(exports.PredictionMode || (exports.PredictionMode = {}));
  (function(PredictionMode) {
    class AltAndContextMap extends Array2DHashMap_1.Array2DHashMap {
      constructor() {
        super(AltAndContextConfigEqualityComparator.INSTANCE);
      }
    }
    class AltAndContextConfigEqualityComparator {
      AltAndContextConfigEqualityComparator() {
      }
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
        return a.state.stateNumber === b.state.stateNumber && a.context.equals(b.context);
      }
    }
    AltAndContextConfigEqualityComparator.INSTANCE = new AltAndContextConfigEqualityComparator();
    __decorate([
      Decorators.Override
    ], AltAndContextConfigEqualityComparator.prototype, "hashCode", null);
    __decorate([
      Decorators.Override
    ], AltAndContextConfigEqualityComparator.prototype, "equals", null);
    function hasConfigInRuleStopState(configs) {
      for (let c of configs) {
        if (c.state instanceof RuleStopState_1.RuleStopState) {
          return true;
        }
      }
      return false;
    }
    PredictionMode.hasConfigInRuleStopState = hasConfigInRuleStopState;
    function allConfigsInRuleStopStates(configs) {
      for (let config2 of configs) {
        if (!(config2.state instanceof RuleStopState_1.RuleStopState)) {
          return false;
        }
      }
      return true;
    }
    PredictionMode.allConfigsInRuleStopStates = allConfigsInRuleStopStates;
  })(exports.PredictionMode || (exports.PredictionMode = {}));
});
var SimulatorState_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SimulatorState = void 0;
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
var ParserATNSimulator_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ParserATNSimulator = void 0;
  const MAX_SHORT_VALUE = 65535;
  const MIN_INTEGER_VALUE = -(1 << 31 >>> 0);
  let ParserATNSimulator = class ParserATNSimulator2 extends ATNSimulator_1.ATNSimulator {
    constructor(atn, parser) {
      super(atn);
      this.predictionMode = PredictionMode_1.PredictionMode.LL;
      this.force_global_context = false;
      this.always_try_local_context = true;
      this.enable_global_context_dfa = false;
      this.optimize_unique_closure = true;
      this.optimize_ll1 = true;
      this.optimize_tail_calls = true;
      this.tail_call_preserves_sll = true;
      this.treat_sllk1_conflict_as_ambiguity = false;
      this.reportAmbiguities = false;
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
    }
    adaptivePredict(input, decision, outerContext, useContext) {
      if (useContext === void 0) {
        useContext = false;
      }
      let dfa = this.atn.decisionToDFA[decision];
      assert$1(dfa != null);
      if (this.optimize_ll1 && !dfa.isPrecedenceDfa && !dfa.isEmpty) {
        let ll_1 = input.LA(1);
        if (ll_1 >= 0 && ll_1 <= 65535) {
          let key = (decision << 16 >>> 0) + ll_1;
          let alt = this.atn.LL1Table.get(key);
          if (alt != null) {
            return alt;
          }
        }
      }
      this.dfa = dfa;
      if (this.force_global_context) {
        useContext = true;
      } else if (!this.always_try_local_context) {
        useContext = useContext || dfa.isContextSensitive;
      }
      this.userWantsCtxSensitive = useContext || this.predictionMode !== PredictionMode_1.PredictionMode.SLL && outerContext != null && !this.atn.decisionToState[decision].sll;
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
        if (ParserATNSimulator2.debug) {
          console.log("ATN decision " + dfa.decision + " exec LA(1)==" + this.getLookaheadName(input) + ", outerContext=" + outerContext.toString(this._parser));
        }
        state = this.computeStartState(dfa, outerContext, useContext);
      }
      let m = input.mark();
      let index = input.index;
      try {
        let alt = this.execDFA(dfa, input, index, state);
        if (ParserATNSimulator2.debug) {
          console.log("DFA after predictATN: " + dfa.toString(this._parser.vocabulary, this._parser.ruleNames));
        }
        return alt;
      } finally {
        this.dfa = void 0;
        input.seek(index);
        input.release(m);
      }
    }
    getStartState(dfa, input, outerContext, useContext) {
      if (!useContext) {
        if (dfa.isPrecedenceDfa) {
          let state = dfa.getPrecedenceStartState(this._parser.precedence, false);
          if (state == null) {
            return void 0;
          }
          return new SimulatorState_1.SimulatorState(outerContext, state, false, outerContext);
        } else {
          if (dfa.s0 == null) {
            return void 0;
          }
          return new SimulatorState_1.SimulatorState(outerContext, dfa.s0, false, outerContext);
        }
      }
      if (!this.enable_global_context_dfa) {
        return void 0;
      }
      let remainingContext = outerContext;
      assert$1(outerContext != null);
      let s0;
      if (dfa.isPrecedenceDfa) {
        s0 = dfa.getPrecedenceStartState(this._parser.precedence, true);
      } else {
        s0 = dfa.s0full;
      }
      while (remainingContext != null && s0 != null && s0.isContextSensitive) {
        remainingContext = this.skipTailCalls(remainingContext);
        s0 = s0.getContextTarget(this.getReturnState(remainingContext));
        if (remainingContext.isEmpty) {
          assert$1(s0 == null || !s0.isContextSensitive);
        } else {
          remainingContext = remainingContext.parent;
        }
      }
      if (s0 == null) {
        return void 0;
      }
      return new SimulatorState_1.SimulatorState(outerContext, s0, useContext, remainingContext);
    }
    execDFA(dfa, input, startIndex, state) {
      let outerContext = state.outerContext;
      if (ParserATNSimulator2.dfa_debug) {
        console.log("DFA decision " + dfa.decision + " exec LA(1)==" + this.getLookaheadName(input) + ", outerContext=" + outerContext.toString(this._parser));
      }
      if (ParserATNSimulator2.dfa_debug) {
        console.log(dfa.toString(this._parser.vocabulary, this._parser.ruleNames));
      }
      let s = state.s0;
      let t = input.LA(1);
      let remainingOuterContext = state.remainingOuterContext;
      while (true) {
        if (ParserATNSimulator2.dfa_debug) {
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
              let initialState = new SimulatorState_1.SimulatorState(state.outerContext, s, state.useContext, remainingOuterContext);
              return this.execATN(dfa, input, startIndex, initialState);
            }
            assert$1(remainingOuterContext != null);
            remainingOuterContext = remainingOuterContext.parent;
            s = next;
          }
        }
        if (this.isAcceptState(s, state.useContext)) {
          if (s.predicates != null) {
            if (ParserATNSimulator2.dfa_debug) {
              console.log("accept " + s);
            }
          } else {
            if (ParserATNSimulator2.dfa_debug) {
              console.log("accept; predict " + s.prediction + " in state " + s.stateNumber);
            }
          }
          break;
        }
        assert$1(!this.isAcceptState(s, state.useContext));
        let target = this.getExistingTargetState(s, t);
        if (target == null) {
          if (ParserATNSimulator2.dfa_debug && t >= 0) {
            console.log("no edge for " + this._parser.vocabulary.getDisplayName(t));
          }
          let alt;
          if (ParserATNSimulator2.dfa_debug) {
            let interval = Interval_1.Interval.of(startIndex, this._parser.inputStream.index);
            console.log("ATN exec upon " + this._parser.inputStream.getText(interval) + " at DFA state " + s.stateNumber);
          }
          let initialState = new SimulatorState_1.SimulatorState(outerContext, s, state.useContext, remainingOuterContext);
          alt = this.execATN(dfa, input, startIndex, initialState);
          if (ParserATNSimulator2.dfa_debug) {
            console.log("back from DFA update, alt=" + alt + ", dfa=\n" + dfa.toString(this._parser.vocabulary, this._parser.ruleNames));
          }
          if (ParserATNSimulator2.dfa_debug) {
            console.log("DFA decision " + dfa.decision + " predicts " + alt);
          }
          return alt;
        } else if (target === ATNSimulator_1.ATNSimulator.ERROR) {
          let errorState = new SimulatorState_1.SimulatorState(outerContext, s, state.useContext, remainingOuterContext);
          return this.handleNoViableAlt(input, startIndex, errorState);
        }
        s = target;
        if (!this.isAcceptState(s, state.useContext) && t !== IntStream_1.IntStream.EOF) {
          input.consume();
          t = input.LA(1);
        }
      }
      if (!state.useContext && s.configs.conflictInfo != null) {
        if (dfa.atnStartState instanceof DecisionState_1.DecisionState) {
          if (!this.userWantsCtxSensitive || !s.configs.dipsIntoOuterContext && s.configs.isExactConflict || this.treat_sllk1_conflict_as_ambiguity && input.index === startIndex)
            ;
          else {
            assert$1(!state.useContext);
            let conflictingAlts;
            let predicates2 = s.predicates;
            if (predicates2 != null) {
              let conflictIndex = input.index;
              if (conflictIndex !== startIndex) {
                input.seek(startIndex);
              }
              conflictingAlts = this.evalSemanticContext(predicates2, outerContext, true);
              if (conflictingAlts.cardinality() === 1) {
                return conflictingAlts.nextSetBit(0);
              }
              if (conflictIndex !== startIndex) {
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
            if (startIndex !== stopIndex) {
              input.seek(stopIndex);
            }
            this.reportAmbiguity(dfa, s, startIndex, stopIndex, s.configs.isExactConflict, alts, s.configs);
            return alts.nextSetBit(0);
        }
      }
      if (ParserATNSimulator2.dfa_debug) {
        console.log("DFA decision " + dfa.decision + " predicts " + s.prediction);
      }
      return s.prediction;
    }
    isAcceptState(state, useContext) {
      if (!state.isAcceptState) {
        return false;
      }
      if (state.configs.conflictingAlts == null) {
        return true;
      }
      if (useContext && this.predictionMode === PredictionMode_1.PredictionMode.LL_EXACT_AMBIG_DETECTION) {
        return state.configs.isExactConflict;
      }
      return true;
    }
    execATN(dfa, input, startIndex, initialState) {
      if (ParserATNSimulator2.debug) {
        console.log("execATN decision " + dfa.decision + " exec LA(1)==" + this.getLookaheadName(input));
      }
      let outerContext = initialState.outerContext;
      let useContext = initialState.useContext;
      let t = input.LA(1);
      let previous = initialState;
      let contextCache = new PredictionContextCache_1.PredictionContextCache();
      while (true) {
        let nextState = this.computeReachSet(dfa, previous, t, contextCache);
        if (nextState == null) {
          this.setDFAEdge(previous.s0, input.LA(1), ATNSimulator_1.ATNSimulator.ERROR);
          return this.handleNoViableAlt(input, startIndex, previous);
        }
        let D = nextState.s0;
        assert$1(D.isAcceptState || D.prediction === ATN_1.ATN.INVALID_ALT_NUMBER);
        assert$1(D.isAcceptState || D.configs.conflictInfo == null);
        if (this.isAcceptState(D, useContext)) {
          let conflictingAlts = D.configs.conflictingAlts;
          let predictedAlt = conflictingAlts == null ? D.prediction : ATN_1.ATN.INVALID_ALT_NUMBER;
          if (predictedAlt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
            if (this.optimize_ll1 && input.index === startIndex && !dfa.isPrecedenceDfa && nextState.outerContext === nextState.remainingOuterContext && dfa.decision >= 0 && !D.configs.hasSemanticContext) {
              if (t >= 0 && t <= MAX_SHORT_VALUE) {
                let key = (dfa.decision << 16 >>> 0) + t;
                this.atn.LL1Table.set(key, predictedAlt);
              }
            }
            if (useContext && this.always_try_local_context) {
              this.reportContextSensitivity(dfa, predictedAlt, nextState, startIndex, input.index);
            }
          }
          predictedAlt = D.prediction;
          let attemptFullContext = conflictingAlts != null && this.userWantsCtxSensitive;
          if (attemptFullContext) {
            attemptFullContext = !useContext && (D.configs.dipsIntoOuterContext || !D.configs.isExactConflict) && (!this.treat_sllk1_conflict_as_ambiguity || input.index !== startIndex);
          }
          if (D.configs.hasSemanticContext) {
            let predPredictions = D.predicates;
            if (predPredictions != null) {
              let conflictIndex = input.index;
              if (conflictIndex !== startIndex) {
                input.seek(startIndex);
              }
              conflictingAlts = this.evalSemanticContext(predPredictions, outerContext, attemptFullContext || this.reportAmbiguities);
              switch (conflictingAlts.cardinality()) {
                case 0:
                  throw this.noViableAlt(input, outerContext, D.configs, startIndex);
                case 1:
                  return conflictingAlts.nextSetBit(0);
              }
              if (conflictIndex !== startIndex) {
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
          } else {
            assert$1(!useContext);
            assert$1(this.isAcceptState(D, false));
            if (ParserATNSimulator2.debug) {
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
    handleNoViableAlt(input, startIndex, previous) {
      if (previous.s0 != null) {
        let alts = new BitSet_1.BitSet();
        let maxAlt = 0;
        for (let config2 of previous.s0.configs) {
          if (config2.reachesIntoOuterContext || config2.state instanceof RuleStopState_1.RuleStopState) {
            alts.set(config2.alt);
            maxAlt = Math.max(maxAlt, config2.alt);
          }
        }
        switch (alts.cardinality()) {
          case 0:
            break;
          case 1:
            return alts.nextSetBit(0);
          default:
            if (!previous.s0.configs.hasSemanticContext) {
              return alts.nextSetBit(0);
            }
            let filteredConfigs = new ATNConfigSet_1.ATNConfigSet();
            for (let config2 of previous.s0.configs) {
              if (config2.reachesIntoOuterContext || config2.state instanceof RuleStopState_1.RuleStopState) {
                filteredConfigs.add(config2);
              }
            }
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
                } finally {
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
          assert$1(remainingGlobalContext != null);
          remainingGlobalContext = remainingGlobalContext.parent;
          s = next;
        }
      }
      assert$1(!this.isAcceptState(s, useContext));
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
        return void 0;
      }
      assert$1(!useContext || !target.configs.dipsIntoOuterContext);
      return new SimulatorState_1.SimulatorState(previous.outerContext, target, useContext, remainingGlobalContext);
    }
    getExistingTargetState(s, t) {
      return s.getTarget(t);
    }
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
        let skippedStopStates;
        for (let c of closureConfigs) {
          if (ParserATNSimulator2.debug) {
            console.log("testing " + this.getTokenName(t) + " at " + c.toString());
          }
          if (c.state instanceof RuleStopState_1.RuleStopState) {
            assert$1(c.context.isEmpty);
            if (useContext && !c.reachesIntoOuterContext || t === IntStream_1.IntStream.EOF) {
              if (skippedStopStates == null) {
                skippedStopStates = [];
              }
              skippedStopStates.push(c);
            }
            continue;
          }
          let n = c.state.numberOfOptimizedTransitions;
          for (let ti = 0; ti < n; ti++) {
            let trans = c.state.getOptimizedTransition(ti);
            let target = this.getReachableTarget(c, trans, t);
            if (target != null) {
              reachIntermediate.add(c.transform(target, false), contextCache);
            }
          }
        }
        if (this.optimize_unique_closure && skippedStopStates == null && t !== Token_1.Token.EOF && reachIntermediate.uniqueAlt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
          reachIntermediate.isOutermostConfigSet = reach.isOutermostConfigSet;
          reach = reachIntermediate;
          break;
        }
        let collectPredicates = false;
        let treatEofAsEpsilon = t === Token_1.Token.EOF;
        this.closure(reachIntermediate, reach, collectPredicates, hasMoreContext, contextCache, treatEofAsEpsilon);
        stepIntoGlobal = reach.dipsIntoOuterContext;
        if (t === IntStream_1.IntStream.EOF) {
          reach = this.removeAllConfigsNotInRuleStopState(reach, contextCache);
        }
        if (skippedStopStates != null && (!useContext || !PredictionMode_1.PredictionMode.hasConfigInRuleStopState(reach))) {
          assert$1(skippedStopStates.length > 0);
          for (let c of skippedStopStates) {
            reach.add(c, contextCache);
          }
        }
        if (useContext && stepIntoGlobal) {
          reach.clear();
          remainingGlobalContext = remainingGlobalContext;
          remainingGlobalContext = this.skipTailCalls(remainingGlobalContext);
          let nextContextElement = this.getReturnState(remainingGlobalContext);
          if (contextElements == null) {
            contextElements = new IntegerList_1.IntegerList();
          }
          if (remainingGlobalContext.isEmpty) {
            remainingGlobalContext = void 0;
          } else {
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
    removeAllConfigsNotInRuleStopState(configs, contextCache) {
      if (PredictionMode_1.PredictionMode.allConfigsInRuleStopStates(configs)) {
        return configs;
      }
      let result = new ATNConfigSet_1.ATNConfigSet();
      for (let config2 of configs) {
        if (!(config2.state instanceof RuleStopState_1.RuleStopState)) {
          continue;
        }
        result.add(config2, contextCache);
      }
      return result;
    }
    computeStartState(dfa, globalContext2, useContext) {
      let s0 = dfa.isPrecedenceDfa ? dfa.getPrecedenceStartState(this._parser.precedence, useContext) : useContext ? dfa.s0full : dfa.s0;
      if (s0 != null) {
        if (!useContext) {
          return new SimulatorState_1.SimulatorState(globalContext2, s0, useContext, globalContext2);
        }
        s0.setContextSensitive(this.atn);
      }
      let decision = dfa.decision;
      let p = dfa.atnStartState;
      let previousContext = 0;
      let remainingGlobalContext = globalContext2;
      let initialContext = useContext ? PredictionContext_1.PredictionContext.EMPTY_FULL : PredictionContext_1.PredictionContext.EMPTY_LOCAL;
      let contextCache = new PredictionContextCache_1.PredictionContextCache();
      if (useContext) {
        if (!this.enable_global_context_dfa) {
          while (remainingGlobalContext != null) {
            if (remainingGlobalContext.isEmpty) {
              previousContext = PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY;
              remainingGlobalContext = void 0;
            } else {
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
            remainingGlobalContext = void 0;
          } else {
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
        return new SimulatorState_1.SimulatorState(globalContext2, s0, useContext, remainingGlobalContext);
      }
      let configs = new ATNConfigSet_1.ATNConfigSet();
      while (true) {
        let reachIntermediate = new ATNConfigSet_1.ATNConfigSet();
        let n = p.numberOfTransitions;
        for (let ti = 0; ti < n; ti++) {
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
        } else if (s0 == null) {
          if (!dfa.isPrecedenceDfa) {
            next = this.addDFAState(dfa, configs, contextCache);
            if (useContext) {
              if (!dfa.s0full) {
                dfa.s0full = next;
              } else {
                next = dfa.s0full;
              }
            } else {
              if (!dfa.s0) {
                dfa.s0 = next;
              } else {
                next = dfa.s0;
              }
            }
          } else {
            configs = this.applyPrecedenceFilter(configs, globalContext2, contextCache);
            next = this.addDFAState(dfa, configs, contextCache);
            dfa.setPrecedenceStartState(this._parser.precedence, useContext, next);
          }
        } else {
          if (dfa.isPrecedenceDfa) {
            configs = this.applyPrecedenceFilter(configs, globalContext2, contextCache);
          }
          next = this.addDFAState(dfa, configs, contextCache);
          s0.setContextTarget(previousContext, next);
        }
        s0 = next;
        if (!useContext || !stepIntoGlobal) {
          break;
        }
        next.setContextSensitive(this.atn);
        remainingGlobalContext = remainingGlobalContext;
        configs.clear();
        remainingGlobalContext = this.skipTailCalls(remainingGlobalContext);
        let nextContextElement = this.getReturnState(remainingGlobalContext);
        if (remainingGlobalContext.isEmpty) {
          remainingGlobalContext = void 0;
        } else {
          remainingGlobalContext = remainingGlobalContext.parent;
        }
        if (nextContextElement !== PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY) {
          initialContext = initialContext.appendSingleContext(nextContextElement, contextCache);
        }
        previousContext = nextContextElement;
      }
      return new SimulatorState_1.SimulatorState(globalContext2, s0, useContext, remainingGlobalContext);
    }
    applyPrecedenceFilter(configs, globalContext2, contextCache) {
      let statesFromAlt1 = new Map();
      let configSet = new ATNConfigSet_1.ATNConfigSet();
      for (let config2 of configs) {
        if (config2.alt !== 1) {
          continue;
        }
        let updatedContext = config2.semanticContext.evalPrecedence(this._parser, globalContext2);
        if (updatedContext == null) {
          continue;
        }
        statesFromAlt1.set(config2.state.stateNumber, config2.context);
        if (updatedContext !== config2.semanticContext) {
          configSet.add(config2.transform(config2.state, false, updatedContext), contextCache);
        } else {
          configSet.add(config2, contextCache);
        }
      }
      for (let config2 of configs) {
        if (config2.alt === 1) {
          continue;
        }
        if (!config2.isPrecedenceFilterSuppressed) {
          let context = statesFromAlt1.get(config2.state.stateNumber);
          if (context != null && context.equals(config2.context)) {
            continue;
          }
        }
        configSet.add(config2, contextCache);
      }
      return configSet;
    }
    getReachableTarget(source, trans, ttype) {
      if (trans.matches(ttype, 0, this.atn.maxTokenType)) {
        return trans.target;
      }
      return void 0;
    }
    predicateDFAState(D, configs, nalts) {
      let conflictingAlts = this.getConflictingAltsFromConfigSet(configs);
      if (!conflictingAlts) {
        throw new Error("This unhandled scenario is intended to be unreachable, but I'm currently not sure of why we know that's the case.");
      }
      if (ParserATNSimulator2.debug) {
        console.log("predicateDFAState " + D);
      }
      let altToPred = this.getPredsForAmbigAlts(conflictingAlts, configs, nalts);
      let predPredictions;
      if (altToPred != null) {
        predPredictions = this.getPredicatePredictions(conflictingAlts, altToPred);
        D.predicates = predPredictions;
      }
      return predPredictions;
    }
    getPredsForAmbigAlts(ambigAlts, configs, nalts) {
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
        } else if (altToPred[i] !== SemanticContext_1.SemanticContext.NONE) {
          nPredAlts++;
        }
      }
      let result = altToPred;
      if (nPredAlts === 0) {
        result = void 0;
      }
      if (ParserATNSimulator2.debug) {
        console.log("getPredsForAmbigAlts result " + (result ? Arrays_1.Arrays.toString(result) : "undefined"));
      }
      return result;
    }
    getPredicatePredictions(ambigAlts, altToPred) {
      let pairs = [];
      let containsPredicate = false;
      for (let i = 1; i < altToPred.length; i++) {
        let pred = altToPred[i];
        assert$1(pred != null);
        if (ambigAlts != null && ambigAlts.get(i) && pred === SemanticContext_1.SemanticContext.NONE) {
          pairs.push(new DFAState_1.DFAState.PredPrediction(pred, i));
        } else if (pred !== SemanticContext_1.SemanticContext.NONE) {
          containsPredicate = true;
          pairs.push(new DFAState_1.DFAState.PredPrediction(pred, i));
        }
      }
      if (!containsPredicate) {
        return void 0;
      }
      return pairs;
    }
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
        if (ParserATNSimulator2.debug || ParserATNSimulator2.dfa_debug) {
          console.log("eval pred " + pair + "=" + evaluatedResult);
        }
        if (evaluatedResult) {
          if (ParserATNSimulator2.debug || ParserATNSimulator2.dfa_debug) {
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
    evalSemanticContextImpl(pred, parserCallStack, alt) {
      return pred.eval(this._parser, parserCallStack);
    }
    closure(sourceConfigs, configs, collectPredicates, hasMoreContext, contextCache, treatEofAsEpsilon) {
      if (contextCache == null) {
        contextCache = PredictionContextCache_1.PredictionContextCache.UNCACHED;
      }
      let currentConfigs = sourceConfigs;
      let closureBusy = new Array2DHashSet_1.Array2DHashSet(ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE);
      while (currentConfigs.size > 0) {
        let intermediate = new ATNConfigSet_1.ATNConfigSet();
        for (let config2 of currentConfigs) {
          this.closureImpl(config2, configs, intermediate, closureBusy, collectPredicates, hasMoreContext, contextCache, 0, treatEofAsEpsilon);
        }
        currentConfigs = intermediate;
      }
    }
    closureImpl(config2, configs, intermediate, closureBusy, collectPredicates, hasMoreContexts, contextCache, depth, treatEofAsEpsilon) {
      if (ParserATNSimulator2.debug) {
        console.log("closure(" + config2.toString(this._parser, true) + ")");
      }
      if (config2.state instanceof RuleStopState_1.RuleStopState) {
        if (!config2.context.isEmpty) {
          let hasEmpty = config2.context.hasEmpty;
          let nonEmptySize = config2.context.size - (hasEmpty ? 1 : 0);
          for (let i = 0; i < nonEmptySize; i++) {
            let newContext = config2.context.getParent(i);
            let returnState = this.atn.states[config2.context.getReturnState(i)];
            let c = ATNConfig_1.ATNConfig.create(returnState, config2.alt, newContext, config2.semanticContext);
            c.outerContextDepth = config2.outerContextDepth;
            c.isPrecedenceFilterSuppressed = config2.isPrecedenceFilterSuppressed;
            assert$1(depth > MIN_INTEGER_VALUE);
            this.closureImpl(c, configs, intermediate, closureBusy, collectPredicates, hasMoreContexts, contextCache, depth - 1, treatEofAsEpsilon);
          }
          if (!hasEmpty || !hasMoreContexts) {
            return;
          }
          config2 = config2.transform(config2.state, false, PredictionContext_1.PredictionContext.EMPTY_LOCAL);
        } else if (!hasMoreContexts) {
          configs.add(config2, contextCache);
          return;
        } else {
          if (ParserATNSimulator2.debug) {
            console.log("FALLING off rule " + this.getRuleName(config2.state.ruleIndex));
          }
          if (config2.context === PredictionContext_1.PredictionContext.EMPTY_FULL) {
            config2 = config2.transform(config2.state, false, PredictionContext_1.PredictionContext.EMPTY_LOCAL);
          } else if (!config2.reachesIntoOuterContext && PredictionContext_1.PredictionContext.isEmptyLocal(config2.context)) {
            configs.add(config2, contextCache);
          }
        }
      }
      let p = config2.state;
      if (!p.onlyHasEpsilonTransitions) {
        configs.add(config2, contextCache);
        if (ParserATNSimulator2.debug) {
          console.log("added config " + configs);
        }
      }
      for (let i = 0; i < p.numberOfOptimizedTransitions; i++) {
        if (i === 0 && p.stateType === ATNStateType_1.ATNStateType.STAR_LOOP_ENTRY && p.precedenceRuleDecision && !config2.context.hasEmpty) {
          let precedenceDecision = p;
          let suppress = true;
          for (let j = 0; j < config2.context.size; j++) {
            if (!precedenceDecision.precedenceLoopbackStates.get(config2.context.getReturnState(j))) {
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
        let c = this.getEpsilonTarget(config2, t, continueCollecting, depth === 0, contextCache, treatEofAsEpsilon);
        if (c != null) {
          if (t instanceof RuleTransition_1.RuleTransition) {
            if (intermediate != null && !collectPredicates) {
              intermediate.add(c, contextCache);
              continue;
            }
          }
          let newDepth = depth;
          if (config2.state instanceof RuleStopState_1.RuleStopState) {
            if (this.dfa != null && this.dfa.isPrecedenceDfa) {
              let outermostPrecedenceReturn = t.outermostPrecedenceReturn;
              if (outermostPrecedenceReturn === this.dfa.atnStartState.ruleIndex) {
                c.isPrecedenceFilterSuppressed = true;
              }
            }
            c.outerContextDepth = c.outerContextDepth + 1;
            if (!closureBusy.add(c)) {
              continue;
            }
            assert$1(newDepth > MIN_INTEGER_VALUE);
            newDepth--;
            if (ParserATNSimulator2.debug) {
              console.log("dips into outer ctx: " + c);
            }
          } else if (t instanceof RuleTransition_1.RuleTransition) {
            if (this.optimize_tail_calls && t.optimizedTailCall && (!this.tail_call_preserves_sll || !PredictionContext_1.PredictionContext.isEmptyLocal(config2.context))) {
              assert$1(c.context === config2.context);
              if (newDepth === 0) {
                newDepth--;
                if (!this.tail_call_preserves_sll && PredictionContext_1.PredictionContext.isEmptyLocal(config2.context)) {
                  c.outerContextDepth = c.outerContextDepth + 1;
                }
              }
            } else {
              if (newDepth >= 0) {
                newDepth++;
              }
            }
          } else {
            if (!t.isEpsilon && !closureBusy.add(c)) {
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
    getEpsilonTarget(config2, t, collectPredicates, inContext, contextCache, treatEofAsEpsilon) {
      switch (t.serializationType) {
        case 3:
          return this.ruleTransition(config2, t, contextCache);
        case 10:
          return this.precedenceTransition(config2, t, collectPredicates, inContext);
        case 4:
          return this.predTransition(config2, t, collectPredicates, inContext);
        case 6:
          return this.actionTransition(config2, t);
        case 1:
          return config2.transform(t.target, false);
        case 5:
        case 2:
        case 7:
          if (treatEofAsEpsilon) {
            if (t.matches(Token_1.Token.EOF, 0, 1)) {
              return config2.transform(t.target, false);
            }
          }
          return void 0;
        default:
          return void 0;
      }
    }
    actionTransition(config2, t) {
      if (ParserATNSimulator2.debug) {
        console.log("ACTION edge " + t.ruleIndex + ":" + t.actionIndex);
      }
      return config2.transform(t.target, false);
    }
    precedenceTransition(config2, pt, collectPredicates, inContext) {
      if (ParserATNSimulator2.debug) {
        console.log("PRED (collectPredicates=" + collectPredicates + ") " + pt.precedence + ">=_p, ctx dependent=true");
        if (this._parser != null) {
          console.log("context surrounding pred is " + this._parser.getRuleInvocationStack());
        }
      }
      let c;
      if (collectPredicates && inContext) {
        let newSemCtx = SemanticContext_1.SemanticContext.and(config2.semanticContext, pt.predicate);
        c = config2.transform(pt.target, false, newSemCtx);
      } else {
        c = config2.transform(pt.target, false);
      }
      if (ParserATNSimulator2.debug) {
        console.log("config from pred transition=" + c);
      }
      return c;
    }
    predTransition(config2, pt, collectPredicates, inContext) {
      if (ParserATNSimulator2.debug) {
        console.log("PRED (collectPredicates=" + collectPredicates + ") " + pt.ruleIndex + ":" + pt.predIndex + ", ctx dependent=" + pt.isCtxDependent);
        if (this._parser != null) {
          console.log("context surrounding pred is " + this._parser.getRuleInvocationStack());
        }
      }
      let c;
      if (collectPredicates && (!pt.isCtxDependent || pt.isCtxDependent && inContext)) {
        let newSemCtx = SemanticContext_1.SemanticContext.and(config2.semanticContext, pt.predicate);
        c = config2.transform(pt.target, false, newSemCtx);
      } else {
        c = config2.transform(pt.target, false);
      }
      if (ParserATNSimulator2.debug) {
        console.log("config from pred transition=" + c);
      }
      return c;
    }
    ruleTransition(config2, t, contextCache) {
      if (ParserATNSimulator2.debug) {
        console.log("CALL rule " + this.getRuleName(t.target.ruleIndex) + ", ctx=" + config2.context);
      }
      let returnState = t.followState;
      let newContext;
      if (this.optimize_tail_calls && t.optimizedTailCall && (!this.tail_call_preserves_sll || !PredictionContext_1.PredictionContext.isEmptyLocal(config2.context))) {
        newContext = config2.context;
      } else if (contextCache != null) {
        newContext = contextCache.getChild(config2.context, returnState.stateNumber);
      } else {
        newContext = config2.context.getChild(returnState.stateNumber);
      }
      return config2.transform(t.target, false, newContext);
    }
    isConflicted(configset, contextCache) {
      if (configset.uniqueAlt !== ATN_1.ATN.INVALID_ALT_NUMBER || configset.size <= 1) {
        return void 0;
      }
      let configs = configset.toArray();
      configs.sort(ParserATNSimulator2.STATE_ALT_SORT_COMPARATOR);
      let exact = !configset.dipsIntoOuterContext;
      let alts = new BitSet_1.BitSet();
      let minAlt = configs[0].alt;
      alts.set(minAlt);
      let currentState = configs[0].state.nonStopStateNumber;
      for (let config2 of configs) {
        let stateNumber = config2.state.nonStopStateNumber;
        if (stateNumber !== currentState) {
          if (config2.alt !== minAlt) {
            return void 0;
          }
          currentState = stateNumber;
        }
      }
      let representedAlts;
      if (exact) {
        currentState = configs[0].state.nonStopStateNumber;
        representedAlts = new BitSet_1.BitSet();
        let maxAlt = minAlt;
        for (let config2 of configs) {
          if (config2.state.nonStopStateNumber !== currentState) {
            break;
          }
          let alt = config2.alt;
          representedAlts.set(alt);
          maxAlt = alt;
        }
        currentState = configs[0].state.nonStopStateNumber;
        let currentAlt = minAlt;
        for (let config2 of configs) {
          let stateNumber = config2.state.nonStopStateNumber;
          let alt = config2.alt;
          if (stateNumber !== currentState) {
            if (currentAlt !== maxAlt) {
              exact = false;
              break;
            }
            currentState = stateNumber;
            currentAlt = minAlt;
          } else if (alt !== currentAlt) {
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
        let config2 = configs[i];
        if (config2.alt !== minAlt) {
          break;
        }
        if (config2.state.nonStopStateNumber !== currentState) {
          break;
        }
        lastIndexCurrentStateMinAlt = i;
        joinedCheckContext = contextCache.join(joinedCheckContext, configs[i].context);
      }
      for (let i = lastIndexCurrentStateMinAlt + 1; i < configs.length; i++) {
        let config2 = configs[i];
        let state = config2.state;
        alts.set(config2.alt);
        if (state.nonStopStateNumber !== currentState) {
          currentState = state.nonStopStateNumber;
          firstIndexCurrentState = i;
          lastIndexCurrentStateMinAlt = i;
          joinedCheckContext = config2.context;
          for (let j = firstIndexCurrentState + 1; j < configs.length; j++) {
            let config22 = configs[j];
            if (config22.alt !== minAlt) {
              break;
            }
            if (config22.state.nonStopStateNumber !== currentState) {
              break;
            }
            lastIndexCurrentStateMinAlt = j;
            joinedCheckContext = contextCache.join(joinedCheckContext, config22.context);
          }
          i = lastIndexCurrentStateMinAlt;
          continue;
        }
        let joinedCheckContext2 = config2.context;
        let currentAlt = config2.alt;
        let lastIndexCurrentStateCurrentAlt = i;
        for (let j = lastIndexCurrentStateCurrentAlt + 1; j < configs.length; j++) {
          let config22 = configs[j];
          if (config22.alt !== currentAlt) {
            break;
          }
          if (config22.state.nonStopStateNumber !== currentState) {
            break;
          }
          lastIndexCurrentStateCurrentAlt = j;
          joinedCheckContext2 = contextCache.join(joinedCheckContext2, config22.context);
        }
        i = lastIndexCurrentStateCurrentAlt;
        let check = contextCache.join(joinedCheckContext, joinedCheckContext2);
        if (!joinedCheckContext.equals(check)) {
          return void 0;
        }
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
          } else if (t instanceof SetTransition_1.SetTransition) {
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
          alt = c.alt;
        } else if (c.alt !== alt) {
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
      assert$1(contextTransitions == null || contextTransitions.isEmpty || dfa.isContextSensitive);
      let from2 = fromState;
      let to = this.addDFAState(dfa, toConfigs, contextCache);
      if (contextTransitions != null) {
        for (let context of contextTransitions.toArray()) {
          if (context === PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY) {
            if (from2.configs.isOutermostConfigSet) {
              continue;
            }
          }
          from2.setContextSensitive(this.atn);
          from2.setContextSymbol(t);
          let next = from2.getContextTarget(context);
          if (next != null) {
            from2 = next;
            continue;
          }
          next = this.addDFAContextState(dfa, from2.configs, context, contextCache);
          assert$1(context !== PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY || next.configs.isOutermostConfigSet);
          from2.setContextTarget(context, next);
          from2 = next;
        }
      }
      if (ParserATNSimulator2.debug) {
        console.log("EDGE " + from2 + " -> " + to + " upon " + this.getTokenName(t));
      }
      this.setDFAEdge(from2, t, to);
      if (ParserATNSimulator2.debug) {
        console.log("DFA=\n" + dfa.toString(this._parser != null ? this._parser.vocabulary : VocabularyImpl_1.VocabularyImpl.EMPTY_VOCABULARY, this._parser != null ? this._parser.ruleNames : void 0));
      }
      return to;
    }
    setDFAEdge(p, t, q) {
      if (p != null) {
        p.setTarget(t, q);
      }
    }
    addDFAContextState(dfa, configs, returnContext, contextCache) {
      if (returnContext !== PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY) {
        let contextConfigs = new ATNConfigSet_1.ATNConfigSet();
        for (let config2 of configs) {
          contextConfigs.add(config2.appendContext(returnContext, contextCache));
        }
        return this.addDFAState(dfa, contextConfigs, contextCache);
      } else {
        assert$1(!configs.isOutermostConfigSet, "Shouldn't be adding a duplicate edge.");
        configs = configs.clone(true);
        configs.isOutermostConfigSet = true;
        return this.addDFAState(dfa, configs, contextCache);
      }
    }
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
      let decisionState = this.atn.getDecisionState(dfa.decision);
      let predictedAlt = this.getUniqueAlt(configs);
      if (predictedAlt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
        newState.acceptStateInfo = new AcceptStateInfo_1.AcceptStateInfo(predictedAlt);
      } else if (configs.conflictingAlts != null) {
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
      if (ParserATNSimulator2.debug && added === newState) {
        console.log("adding new DFA state: " + newState);
      }
      return added;
    }
    createDFAState(dfa, configs) {
      return new DFAState_1.DFAState(configs);
    }
    reportAttemptingFullContext(dfa, conflictingAlts, conflictState, startIndex, stopIndex) {
      if (ParserATNSimulator2.debug || ParserATNSimulator2.retry_debug) {
        let interval = Interval_1.Interval.of(startIndex, stopIndex);
        console.log("reportAttemptingFullContext decision=" + dfa.decision + ":" + conflictState.s0.configs + ", input=" + this._parser.inputStream.getText(interval));
      }
      if (this._parser != null) {
        let listener = this._parser.getErrorListenerDispatch();
        if (listener.reportAttemptingFullContext) {
          listener.reportAttemptingFullContext(this._parser, dfa, startIndex, stopIndex, conflictingAlts, conflictState);
        }
      }
    }
    reportContextSensitivity(dfa, prediction, acceptState, startIndex, stopIndex) {
      if (ParserATNSimulator2.debug || ParserATNSimulator2.retry_debug) {
        let interval = Interval_1.Interval.of(startIndex, stopIndex);
        console.log("reportContextSensitivity decision=" + dfa.decision + ":" + acceptState.s0.configs + ", input=" + this._parser.inputStream.getText(interval));
      }
      if (this._parser != null) {
        let listener = this._parser.getErrorListenerDispatch();
        if (listener.reportContextSensitivity) {
          listener.reportContextSensitivity(this._parser, dfa, startIndex, stopIndex, prediction, acceptState);
        }
      }
    }
    reportAmbiguity(dfa, D, startIndex, stopIndex, exact, ambigAlts, configs) {
      if (ParserATNSimulator2.debug || ParserATNSimulator2.retry_debug) {
        let interval = Interval_1.Interval.of(startIndex, stopIndex);
        console.log("reportAmbiguity " + ambigAlts + ":" + configs + ", input=" + this._parser.inputStream.getText(interval));
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
        assert$1(state.numberOfTransitions === 1 && state.transition(0).serializationType === 3);
        let transition = state.transition(0);
        if (!transition.tailCall) {
          break;
        }
        context = context.parent;
      }
      return context;
    }
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
    __param(0, Decorators.NotNull),
    __param(2, Decorators.NotNull)
  ], ParserATNSimulator.prototype, "handleNoViableAlt", null);
  __decorate([
    __param(0, Decorators.NotNull)
  ], ParserATNSimulator.prototype, "getExistingTargetState", null);
  __decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
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
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
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
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
  ], ParserATNSimulator.prototype, "getEpsilonTarget", null);
  __decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
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
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(2, Decorators.Nullable)
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
    __param(0, Decorators.Nullable),
    __param(2, Decorators.Nullable)
  ], ParserATNSimulator.prototype, "setDFAEdge", null);
  __decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
  ], ParserATNSimulator.prototype, "addDFAContextState", null);
  __decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
  ], ParserATNSimulator.prototype, "addDFAState", null);
  __decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
  ], ParserATNSimulator.prototype, "createDFAState", null);
  __decorate([
    __param(0, Decorators.NotNull),
    __param(2, Decorators.NotNull)
  ], ParserATNSimulator.prototype, "reportAttemptingFullContext", null);
  __decorate([
    __param(0, Decorators.NotNull),
    __param(2, Decorators.NotNull)
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
var PlusBlockStartState_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PlusBlockStartState = void 0;
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
var PlusLoopbackState_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PlusLoopbackState = void 0;
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
var PrecedencePredicateTransition_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PrecedencePredicateTransition = void 0;
  let PrecedencePredicateTransition = class PrecedencePredicateTransition extends AbstractPredicateTransition_1.AbstractPredicateTransition {
    constructor(target, precedence) {
      super(target);
      this.precedence = precedence;
    }
    get serializationType() {
      return 10;
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
var RangeTransition_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RangeTransition = void 0;
  let RangeTransition = class RangeTransition extends Transition_1.Transition {
    constructor(target, from2, to) {
      super(target);
      this.from = from2;
      this.to = to;
    }
    get serializationType() {
      return 2;
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
var RuleStartState_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RuleStartState = void 0;
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
var StarBlockStartState_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.StarBlockStartState = void 0;
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
var StarLoopbackState_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.StarLoopbackState = void 0;
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
var TokensStartState_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TokensStartState = void 0;
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
var UUID_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
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
      let moreSigBits = (parseInt(segments[1], 16) << 16 >>> 0) + parseInt(segments[2], 16);
      let lessSigBits = (parseInt(segments[3], 16) << 16 >>> 0) + parseInt(segments[4].substr(0, 4), 16);
      let leastSigBits = parseInt(segments[4].substr(-8), 16);
      return new UUID(mostSigBits, moreSigBits, lessSigBits, leastSigBits);
    }
    hashCode() {
      return MurmurHash_1.MurmurHash.hashCode([this.data[0], this.data[1], this.data[2], this.data[3]]);
    }
    equals(obj) {
      if (obj === this) {
        return true;
      } else if (!(obj instanceof UUID)) {
        return false;
      }
      return this.data[0] === obj.data[0] && this.data[1] === obj.data[1] && this.data[2] === obj.data[2] && this.data[3] === obj.data[3];
    }
    toString() {
      return ("00000000" + this.data[0].toString(16)).substr(-8) + "-" + ("0000" + (this.data[1] >>> 16).toString(16)).substr(-4) + "-" + ("0000" + this.data[1].toString(16)).substr(-4) + "-" + ("0000" + (this.data[2] >>> 16).toString(16)).substr(-4) + "-" + ("0000" + this.data[2].toString(16)).substr(-4) + ("00000000" + this.data[3].toString(16)).substr(-8);
    }
  }
  exports.UUID = UUID;
});
var ATNDeserializer_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ATNDeserializer = void 0;
  var UnicodeDeserializingMode;
  (function(UnicodeDeserializingMode2) {
    UnicodeDeserializingMode2[UnicodeDeserializingMode2["UNICODE_BMP"] = 0] = "UNICODE_BMP";
    UnicodeDeserializingMode2[UnicodeDeserializingMode2["UNICODE_SMP"] = 1] = "UNICODE_SMP";
  })(UnicodeDeserializingMode || (UnicodeDeserializingMode = {}));
  class ATNDeserializer {
    constructor(deserializationOptions) {
      if (deserializationOptions === void 0) {
        deserializationOptions = ATNDeserializationOptions_1.ATNDeserializationOptions.defaultOptions;
      }
      this.deserializationOptions = deserializationOptions;
    }
    static get SERIALIZED_VERSION() {
      return 3;
    }
    static isFeatureSupported(feature, actualUuid) {
      let featureIndex = ATNDeserializer.SUPPORTED_UUIDS.findIndex((e) => e.equals(feature));
      if (featureIndex < 0) {
        return false;
      }
      return ATNDeserializer.SUPPORTED_UUIDS.findIndex((e) => e.equals(actualUuid)) >= featureIndex;
    }
    static getUnicodeDeserializer(mode) {
      if (mode === 0) {
        return {
          readUnicode: (data, p) => {
            return ATNDeserializer.toInt(data[p]);
          },
          size: 1
        };
      } else {
        return {
          readUnicode: (data, p) => {
            return ATNDeserializer.toInt32(data, p);
          },
          size: 2
        };
      }
    }
    deserialize(data) {
      data = data.slice(0);
      for (let i = 1; i < data.length; i++) {
        data[i] = data[i] - 2 & 65535;
      }
      let p = 0;
      let version2 = ATNDeserializer.toInt(data[p++]);
      if (version2 !== ATNDeserializer.SERIALIZED_VERSION) {
        let reason = `Could not deserialize ATN with version ${version2} (expected ${ATNDeserializer.SERIALIZED_VERSION}).`;
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
      let loopBackStateNumbers = [];
      let endStateNumbers = [];
      let nstates = ATNDeserializer.toInt(data[p++]);
      for (let i = 0; i < nstates; i++) {
        let stype = ATNDeserializer.toInt(data[p++]);
        if (stype === ATNStateType_1.ATNStateType.INVALID_TYPE) {
          atn.addState(new InvalidState_1.InvalidState());
          continue;
        }
        let ruleIndex = ATNDeserializer.toInt(data[p++]);
        if (ruleIndex === 65535) {
          ruleIndex = -1;
        }
        let s = this.stateFactory(stype, ruleIndex);
        if (stype === ATNStateType_1.ATNStateType.LOOP_END) {
          let loopBackStateNumber = ATNDeserializer.toInt(data[p++]);
          loopBackStateNumbers.push([s, loopBackStateNumber]);
        } else if (s instanceof BlockStartState_1.BlockStartState) {
          let endStateNumber = ATNDeserializer.toInt(data[p++]);
          endStateNumbers.push([s, endStateNumber]);
        }
        atn.addState(s);
      }
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
      let nrules = ATNDeserializer.toInt(data[p++]);
      if (atn.grammarType === 0) {
        atn.ruleToTokenType = new Int32Array(nrules);
      }
      atn.ruleToStartState = new Array(nrules);
      for (let i = 0; i < nrules; i++) {
        let s = ATNDeserializer.toInt(data[p++]);
        let startState = atn.states[s];
        startState.leftFactored = ATNDeserializer.toInt(data[p++]) !== 0;
        atn.ruleToStartState[i] = startState;
        if (atn.grammarType === 0) {
          let tokenType = ATNDeserializer.toInt(data[p++]);
          if (tokenType === 65535) {
            tokenType = Token_1.Token.EOF;
          }
          atn.ruleToTokenType[i] = tokenType;
          if (!ATNDeserializer.isFeatureSupported(ATNDeserializer.ADDED_LEXER_ACTIONS, uuid)) {
            let actionIndexIgnored = ATNDeserializer.toInt(data[p++]);
            if (actionIndexIgnored === 65535) {
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
      let nmodes = ATNDeserializer.toInt(data[p++]);
      for (let i = 0; i < nmodes; i++) {
        let s = ATNDeserializer.toInt(data[p++]);
        atn.modeToStartState.push(atn.states[s]);
      }
      atn.modeToDFA = new Array(nmodes);
      for (let i = 0; i < nmodes; i++) {
        atn.modeToDFA[i] = new DFA_1.DFA(atn.modeToStartState[i]);
      }
      let sets = [];
      p = this.deserializeSets(data, p, sets, ATNDeserializer.getUnicodeDeserializer(0));
      if (ATNDeserializer.isFeatureSupported(ATNDeserializer.ADDED_UNICODE_SMP, uuid)) {
        p = this.deserializeSets(data, p, sets, ATNDeserializer.getUnicodeDeserializer(1));
      }
      let nedges = ATNDeserializer.toInt(data[p++]);
      for (let i = 0; i < nedges; i++) {
        let src = ATNDeserializer.toInt(data[p]);
        let trg = ATNDeserializer.toInt(data[p + 1]);
        let ttype = ATNDeserializer.toInt(data[p + 2]);
        let arg1 = ATNDeserializer.toInt(data[p + 3]);
        let arg2 = ATNDeserializer.toInt(data[p + 4]);
        let arg3 = ATNDeserializer.toInt(data[p + 5]);
        let trans = this.edgeFactory(atn, ttype, src, trg, arg1, arg2, arg3, sets);
        let srcState = atn.states[src];
        srcState.addTransition(trans);
        p += 6;
      }
      let returnTransitionsSet = new Array2DHashSet_1.Array2DHashSet({
        hashCode: (o) => o.stopState ^ o.returnState ^ o.outermostPrecedenceReturn,
        equals: (a, b) => {
          return a.stopState === b.stopState && a.returnState === b.returnState && a.outermostPrecedenceReturn === b.outermostPrecedenceReturn;
        }
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
          let current = {stopState: ruleTransition.target.ruleIndex, returnState: ruleTransition.followState.stateNumber, outermostPrecedenceReturn};
          if (returnTransitionsSet.add(current)) {
            returnTransitions.push(current);
          }
        }
      }
      for (let returnTransition of returnTransitions) {
        let transition = new EpsilonTransition_1.EpsilonTransition(atn.states[returnTransition.returnState], returnTransition.outermostPrecedenceReturn);
        atn.ruleToStopState[returnTransition.stopState].addTransition(transition);
      }
      for (let state of atn.states) {
        if (state instanceof BlockStartState_1.BlockStartState) {
          if (state.endState === void 0) {
            throw new Error("IllegalStateException");
          }
          if (state.endState.startState !== void 0) {
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
        } else if (state instanceof StarLoopbackState_1.StarLoopbackState) {
          let loopbackState = state;
          for (let i = 0; i < loopbackState.numberOfTransitions; i++) {
            let target = loopbackState.transition(i).target;
            if (target instanceof StarLoopEntryState_1.StarLoopEntryState) {
              target.loopBackState = loopbackState;
            }
          }
        }
      }
      let ndecisions = ATNDeserializer.toInt(data[p++]);
      for (let i = 1; i <= ndecisions; i++) {
        let s = ATNDeserializer.toInt(data[p++]);
        let decState = atn.states[s];
        atn.decisionToState.push(decState);
        decState.decision = i - 1;
      }
      if (atn.grammarType === 0) {
        if (supportsLexerActions) {
          atn.lexerActions = new Array(ATNDeserializer.toInt(data[p++]));
          for (let i = 0; i < atn.lexerActions.length; i++) {
            let actionType = ATNDeserializer.toInt(data[p++]);
            let data1 = ATNDeserializer.toInt(data[p++]);
            if (data1 === 65535) {
              data1 = -1;
            }
            let data2 = ATNDeserializer.toInt(data[p++]);
            if (data2 === 65535) {
              data2 = -1;
            }
            let lexerAction = this.lexerActionFactory(actionType, data1, data2);
            atn.lexerActions[i] = lexerAction;
          }
        } else {
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
      if (this.deserializationOptions.isGenerateRuleBypassTransitions && atn.grammarType === 1) {
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
            endState = void 0;
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
          } else {
            endState = atn.ruleToStopState[i];
          }
          for (let state of atn.states) {
            for (let i2 = 0; i2 < state.numberOfTransitions; i2++) {
              let transition = state.transition(i2);
              if (transition === excludeTransition) {
                continue;
              }
              if (transition.target === endState) {
                transition.target = bypassStop;
              }
            }
          }
          while (atn.ruleToStartState[i].numberOfTransitions > 0) {
            let transition = atn.ruleToStartState[i].removeTransition(atn.ruleToStartState[i].numberOfTransitions - 1);
            bypassStart.addTransition(transition);
          }
          atn.ruleToStartState[i].addTransition(new EpsilonTransition_1.EpsilonTransition(bypassStart));
          bypassStop.addTransition(new EpsilonTransition_1.EpsilonTransition(endState));
          let matchState = new BasicState_1.BasicState();
          atn.addState(matchState);
          matchState.addTransition(new AtomTransition_1.AtomTransition(bypassStop, atn.ruleToTokenType[i]));
          bypassStart.addTransition(new EpsilonTransition_1.EpsilonTransition(matchState));
        }
        if (this.deserializationOptions.isVerifyATN) {
          this.verifyATN(atn);
        }
      }
      if (this.deserializationOptions.isOptimize) {
        while (true) {
          let optimizationCount = 0;
          optimizationCount += ATNDeserializer.inlineSetRules(atn);
          optimizationCount += ATNDeserializer.combineChainedEpsilons(atn);
          let preserveOrder = atn.grammarType === 0;
          optimizationCount += ATNDeserializer.optimizeSets(atn, preserveOrder);
          if (optimizationCount === 0) {
            break;
          }
        }
        if (this.deserializationOptions.isVerifyATN) {
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
    markPrecedenceDecisions(atn) {
      let rulePrecedenceDecisions = new Map();
      for (let state of atn.states) {
        if (!(state instanceof StarLoopEntryState_1.StarLoopEntryState)) {
          continue;
        }
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
      for (let precedenceDecision of rulePrecedenceDecisions) {
        for (let transition of atn.ruleToStopState[precedenceDecision[0]].getTransitions()) {
          if (transition.serializationType !== 1) {
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
      for (let state of atn.states) {
        this.checkCondition(state !== void 0, "ATN states should not be undefined.");
        if (state.stateType === ATNStateType_1.ATNStateType.INVALID_TYPE) {
          continue;
        }
        this.checkCondition(state.onlyHasEpsilonTransitions || state.numberOfTransitions <= 1);
        if (state instanceof PlusBlockStartState_1.PlusBlockStartState) {
          this.checkCondition(state.loopBackState !== void 0);
        }
        if (state instanceof StarLoopEntryState_1.StarLoopEntryState) {
          let starLoopEntryState = state;
          this.checkCondition(starLoopEntryState.loopBackState !== void 0);
          this.checkCondition(starLoopEntryState.numberOfTransitions === 2);
          if (starLoopEntryState.transition(0).target instanceof StarBlockStartState_1.StarBlockStartState) {
            this.checkCondition(starLoopEntryState.transition(1).target instanceof LoopEndState_1.LoopEndState);
            this.checkCondition(!starLoopEntryState.nonGreedy);
          } else if (starLoopEntryState.transition(0).target instanceof LoopEndState_1.LoopEndState) {
            this.checkCondition(starLoopEntryState.transition(1).target instanceof StarBlockStartState_1.StarBlockStartState);
            this.checkCondition(starLoopEntryState.nonGreedy);
          } else {
            throw new Error("IllegalStateException");
          }
        }
        if (state instanceof StarLoopbackState_1.StarLoopbackState) {
          this.checkCondition(state.numberOfTransitions === 1);
          this.checkCondition(state.transition(0).target instanceof StarLoopEntryState_1.StarLoopEntryState);
        }
        if (state instanceof LoopEndState_1.LoopEndState) {
          this.checkCondition(state.loopBackState !== void 0);
        }
        if (state instanceof RuleStartState_1.RuleStartState) {
          this.checkCondition(state.stopState !== void 0);
        }
        if (state instanceof BlockStartState_1.BlockStartState) {
          this.checkCondition(state.endState !== void 0);
        }
        if (state instanceof BlockEndState_1.BlockEndState) {
          this.checkCondition(state.startState !== void 0);
        }
        if (state instanceof DecisionState_1.DecisionState) {
          let decisionState = state;
          this.checkCondition(decisionState.numberOfTransitions <= 1 || decisionState.decision >= 0);
        } else {
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
        while (middleState.onlyHasEpsilonTransitions && middleState.numberOfOptimizedTransitions === 1 && middleState.getOptimizedTransition(0).serializationType === 1) {
          middleState = middleState.getOptimizedTransition(0).target;
        }
        if (middleState.numberOfOptimizedTransitions !== 1) {
          continue;
        }
        let matchTransition = middleState.getOptimizedTransition(0);
        let matchTarget = matchTransition.target;
        if (matchTransition.isEpsilon || !matchTarget.onlyHasEpsilonTransitions || matchTarget.numberOfOptimizedTransitions !== 1 || !(matchTarget.getOptimizedTransition(0).target instanceof RuleStopState_1.RuleStopState)) {
          continue;
        }
        switch (matchTransition.serializationType) {
          case 5:
          case 2:
          case 7:
            ruleToInlineTransition[i] = matchTransition;
            break;
          case 8:
          case 9:
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
            if (optimizedTransitions !== void 0) {
              optimizedTransitions.push(transition);
            }
            continue;
          }
          let ruleTransition = transition;
          let effective = ruleToInlineTransition[ruleTransition.target.ruleIndex];
          if (effective === void 0) {
            if (optimizedTransitions !== void 0) {
              optimizedTransitions.push(transition);
            }
            continue;
          }
          if (optimizedTransitions === void 0) {
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
            case 5:
              intermediateState.addTransition(new AtomTransition_1.AtomTransition(target, effective._label));
              break;
            case 2:
              intermediateState.addTransition(new RangeTransition_1.RangeTransition(target, effective.from, effective.to));
              break;
            case 7:
              intermediateState.addTransition(new SetTransition_1.SetTransition(target, effective.label));
              break;
            default:
              throw new Error("UnsupportedOperationException");
          }
        }
        if (optimizedTransitions !== void 0) {
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
        nextTransition:
          for (let i = 0; i < state.numberOfOptimizedTransitions; i++) {
            let transition = state.getOptimizedTransition(i);
            let intermediate = transition.target;
            if (transition.serializationType !== 1 || transition.outermostPrecedenceReturn !== -1 || intermediate.stateType !== ATNStateType_1.ATNStateType.BASIC || !intermediate.onlyHasEpsilonTransitions) {
              if (optimizedTransitions !== void 0) {
                optimizedTransitions.push(transition);
              }
              continue nextTransition;
            }
            for (let j = 0; j < intermediate.numberOfOptimizedTransitions; j++) {
              if (intermediate.getOptimizedTransition(j).serializationType !== 1 || intermediate.getOptimizedTransition(j).outermostPrecedenceReturn !== -1) {
                if (optimizedTransitions !== void 0) {
                  optimizedTransitions.push(transition);
                }
                continue nextTransition;
              }
            }
            removedEdges++;
            if (optimizedTransitions === void 0) {
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
        if (optimizedTransitions !== void 0) {
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
            continue;
          }
          if (transition instanceof AtomTransition_1.AtomTransition || transition instanceof RangeTransition_1.RangeTransition || transition instanceof SetTransition_1.SetTransition) {
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
            } else {
              matchSet.addAll(matchTransition.label);
            }
          }
        }
        let newTransition;
        if (matchSet.intervals.length === 1) {
          if (matchSet.size === 1) {
            newTransition = new AtomTransition_1.AtomTransition(blockEndState, matchSet.minElement);
          } else {
            let matchInterval = matchSet.intervals[0];
            newTransition = new RangeTransition_1.RangeTransition(blockEndState, matchInterval.a, matchInterval.b);
          }
        } else {
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
          if (t.serializationType !== 1) {
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
      return (data[offset] | data[offset + 1] << 16) >>> 0;
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
        case 1:
          return new EpsilonTransition_1.EpsilonTransition(target);
        case 2:
          if (arg3 !== 0) {
            return new RangeTransition_1.RangeTransition(target, Token_1.Token.EOF, arg2);
          } else {
            return new RangeTransition_1.RangeTransition(target, arg1, arg2);
          }
        case 3:
          let rt = new RuleTransition_1.RuleTransition(atn.states[arg1], arg2, arg3, target);
          return rt;
        case 4:
          let pt = new PredicateTransition_1.PredicateTransition(target, arg1, arg2, arg3 !== 0);
          return pt;
        case 10:
          return new PrecedencePredicateTransition_1.PrecedencePredicateTransition(target, arg1);
        case 5:
          if (arg3 !== 0) {
            return new AtomTransition_1.AtomTransition(target, Token_1.Token.EOF);
          } else {
            return new AtomTransition_1.AtomTransition(target, arg1);
          }
        case 6:
          let a = new ActionTransition_1.ActionTransition(target, arg1, arg2, arg3 !== 0);
          return a;
        case 7:
          return new SetTransition_1.SetTransition(target, sets[arg1]);
        case 8:
          return new NotSetTransition_1.NotSetTransition(target, sets[arg1]);
        case 9:
          return new WildcardTransition_1.WildcardTransition(target);
      }
      throw new Error("The specified transition type is not valid.");
    }
    stateFactory(type, ruleIndex) {
      let s;
      switch (type) {
        case ATNStateType_1.ATNStateType.INVALID_TYPE:
          return new InvalidState_1.InvalidState();
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
        case 0:
          return new LexerChannelAction_1.LexerChannelAction(data1);
        case 1:
          return new LexerCustomAction_1.LexerCustomAction(data1, data2);
        case 2:
          return new LexerModeAction_1.LexerModeAction(data1);
        case 3:
          return LexerMoreAction_1.LexerMoreAction.INSTANCE;
        case 4:
          return LexerPopModeAction_1.LexerPopModeAction.INSTANCE;
        case 5:
          return new LexerPushModeAction_1.LexerPushModeAction(data1);
        case 6:
          return LexerSkipAction_1.LexerSkipAction.INSTANCE;
        case 7:
          return new LexerTypeAction_1.LexerTypeAction(data1);
        default:
          let message = `The specified lexer action type ${type} is not valid.`;
          throw new Error(message);
      }
    }
  }
  ATNDeserializer.BASE_SERIALIZED_UUID = UUID_1.UUID.fromString("E4178468-DF95-44D0-AD87-F22A5D5FB6D3");
  ATNDeserializer.ADDED_LEXER_ACTIONS = UUID_1.UUID.fromString("AB35191A-1603-487E-B75A-479B831EAF6D");
  ATNDeserializer.ADDED_UNICODE_SMP = UUID_1.UUID.fromString("C23FEA89-0605-4f51-AFB8-058BCAB8C91B");
  ATNDeserializer.SUPPORTED_UUIDS = [
    ATNDeserializer.BASE_SERIALIZED_UUID,
    ATNDeserializer.ADDED_LEXER_ACTIONS,
    ATNDeserializer.ADDED_UNICODE_SMP
  ];
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
var ParseInfo_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ParseInfo = void 0;
  let ParseInfo = class ParseInfo {
    constructor(atnSimulator) {
      this.atnSimulator = atnSimulator;
    }
    getDecisionInfo() {
      return this.atnSimulator.getDecisionInfo();
    }
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
    getTotalTimeInPrediction() {
      let decisions = this.atnSimulator.getDecisionInfo();
      let t = 0;
      for (let decision of decisions) {
        t += decision.timeInPrediction;
      }
      return t;
    }
    getTotalSLLLookaheadOps() {
      let decisions = this.atnSimulator.getDecisionInfo();
      let k = 0;
      for (let decision of decisions) {
        k += decision.SLL_TotalLook;
      }
      return k;
    }
    getTotalLLLookaheadOps() {
      let decisions = this.atnSimulator.getDecisionInfo();
      let k = 0;
      for (let decision of decisions) {
        k += decision.LL_TotalLook;
      }
      return k;
    }
    getTotalSLLATNLookaheadOps() {
      let decisions = this.atnSimulator.getDecisionInfo();
      let k = 0;
      for (let decision of decisions) {
        k += decision.SLL_ATNTransitions;
      }
      return k;
    }
    getTotalLLATNLookaheadOps() {
      let decisions = this.atnSimulator.getDecisionInfo();
      let k = 0;
      for (let decision of decisions) {
        k += decision.LL_ATNTransitions;
      }
      return k;
    }
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
      } else {
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
var ProxyParserErrorListener_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ProxyParserErrorListener = void 0;
  class ProxyParserErrorListener2 extends ProxyErrorListener_1.ProxyErrorListener {
    constructor(delegates) {
      super(delegates);
    }
    reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
      this.getDelegates().forEach((listener) => {
        if (listener.reportAmbiguity) {
          listener.reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
        }
      });
    }
    reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, conflictState) {
      this.getDelegates().forEach((listener) => {
        if (listener.reportAttemptingFullContext) {
          listener.reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, conflictState);
        }
      });
    }
    reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, acceptState) {
      this.getDelegates().forEach((listener) => {
        if (listener.reportContextSensitivity) {
          listener.reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, acceptState);
        }
      });
    }
  }
  __decorate([
    Decorators.Override
  ], ProxyParserErrorListener2.prototype, "reportAmbiguity", null);
  __decorate([
    Decorators.Override
  ], ProxyParserErrorListener2.prototype, "reportAttemptingFullContext", null);
  __decorate([
    Decorators.Override
  ], ProxyParserErrorListener2.prototype, "reportContextSensitivity", null);
  exports.ProxyParserErrorListener = ProxyParserErrorListener2;
});
var Character = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isSupplementaryCodePoint = exports.isLowSurrogate = exports.isHighSurrogate = void 0;
  function isHighSurrogate(ch) {
    return ch >= 55296 && ch <= 56319;
  }
  exports.isHighSurrogate = isHighSurrogate;
  function isLowSurrogate(ch) {
    return ch >= 56320 && ch <= 57343;
  }
  exports.isLowSurrogate = isLowSurrogate;
  function isSupplementaryCodePoint(ch) {
    return ch >= 65536;
  }
  exports.isSupplementaryCodePoint = isSupplementaryCodePoint;
});
var CodePointBuffer_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CodePointBuffer = void 0;
  class CodePointBuffer2 {
    constructor(buffer, size) {
      this.buffer = buffer;
      this._position = 0;
      this._size = size;
    }
    static withArray(buffer) {
      return new CodePointBuffer2(buffer, buffer.length);
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
      return new CodePointBuffer2.Builder(initialBufferSize);
    }
  }
  exports.CodePointBuffer = CodePointBuffer2;
  (function(CodePointBuffer3) {
    let Type;
    (function(Type2) {
      Type2[Type2["BYTE"] = 0] = "BYTE";
      Type2[Type2["CHAR"] = 1] = "CHAR";
      Type2[Type2["INT"] = 2] = "INT";
    })(Type || (Type = {}));
    class Builder {
      constructor(initialBufferSize) {
        this.type = 0;
        this.buffer = new Uint8Array(initialBufferSize);
        this.prevHighSurrogate = -1;
        this.position = 0;
      }
      build() {
        return new CodePointBuffer3(this.buffer, this.position);
      }
      static roundUpToNextPowerOfTwo(i) {
        let nextPowerOfTwo = 32 - Math.clz32(i - 1);
        return Math.pow(2, nextPowerOfTwo);
      }
      ensureRemaining(remainingNeeded) {
        switch (this.type) {
          case 0:
            if (this.buffer.length - this.position < remainingNeeded) {
              let newCapacity = Builder.roundUpToNextPowerOfTwo(this.buffer.length + remainingNeeded);
              let newBuffer = new Uint8Array(newCapacity);
              newBuffer.set(this.buffer.subarray(0, this.position), 0);
              this.buffer = newBuffer;
            }
            break;
          case 1:
            if (this.buffer.length - this.position < remainingNeeded) {
              let newCapacity = Builder.roundUpToNextPowerOfTwo(this.buffer.length + remainingNeeded);
              let newBuffer = new Uint16Array(newCapacity);
              newBuffer.set(this.buffer.subarray(0, this.position), 0);
              this.buffer = newBuffer;
            }
            break;
          case 2:
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
          case 0:
            this.appendArrayByte(utf16In);
            break;
          case 1:
            this.appendArrayChar(utf16In);
            break;
          case 2:
            this.appendArrayInt(utf16In);
            break;
        }
      }
      appendArrayByte(utf16In) {
        assert$1(this.prevHighSurrogate === -1);
        let input = utf16In;
        let inOffset = 0;
        let inLimit = utf16In.length;
        let outByte = this.buffer;
        let outOffset = this.position;
        while (inOffset < inLimit) {
          let c = input[inOffset];
          if (c <= 255) {
            outByte[outOffset] = c;
          } else {
            utf16In = utf16In.subarray(inOffset, inLimit);
            this.position = outOffset;
            if (!Character.isHighSurrogate(c)) {
              this.byteToCharBuffer(utf16In.length);
              this.appendArrayChar(utf16In);
              return;
            } else {
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
        assert$1(this.prevHighSurrogate === -1);
        let input = utf16In;
        let inOffset = 0;
        let inLimit = utf16In.length;
        let outChar = this.buffer;
        let outOffset = this.position;
        while (inOffset < inLimit) {
          let c = input[inOffset];
          if (!Character.isHighSurrogate(c)) {
            outChar[outOffset] = c;
          } else {
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
            } else {
              outInt[outOffset] = this.prevHighSurrogate;
              outOffset++;
              if (Character.isHighSurrogate(c)) {
                this.prevHighSurrogate = c;
              } else {
                outInt[outOffset] = c;
                outOffset++;
                this.prevHighSurrogate = -1;
              }
            }
          } else if (Character.isHighSurrogate(c)) {
            this.prevHighSurrogate = c;
          } else {
            outInt[outOffset] = c;
            outOffset++;
          }
        }
        if (this.prevHighSurrogate !== -1) {
          outInt[outOffset] = this.prevHighSurrogate;
          outOffset++;
        }
        this.position = outOffset;
      }
      byteToCharBuffer(toAppend) {
        let newBuffer = new Uint16Array(Math.max(this.position + toAppend, this.buffer.length >> 1));
        newBuffer.set(this.buffer.subarray(0, this.position), 0);
        this.type = 1;
        this.buffer = newBuffer;
      }
      byteToIntBuffer(toAppend) {
        let newBuffer = new Int32Array(Math.max(this.position + toAppend, this.buffer.length >> 2));
        newBuffer.set(this.buffer.subarray(0, this.position), 0);
        this.type = 2;
        this.buffer = newBuffer;
      }
      charToIntBuffer(toAppend) {
        let newBuffer = new Int32Array(Math.max(this.position + toAppend, this.buffer.length >> 1));
        newBuffer.set(this.buffer.subarray(0, this.position), 0);
        this.type = 2;
        this.buffer = newBuffer;
      }
    }
    CodePointBuffer3.Builder = Builder;
  })(CodePointBuffer2 = exports.CodePointBuffer || (exports.CodePointBuffer = {}));
});
var CodePointCharStream_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CodePointCharStream = void 0;
  class CodePointCharStream2 {
    constructor(array, position, remaining, name) {
      assert$1(position === 0);
      this._array = array;
      this._size = remaining;
      this._name = name;
      this._position = 0;
    }
    get internalStorage() {
      return this._array;
    }
    static fromBuffer(codePointBuffer, name) {
      if (name === void 0 || name.length === 0) {
        name = IntStream_1.IntStream.UNKNOWN_SOURCE_NAME;
      }
      return new CodePointCharStream2(codePointBuffer.array(), codePointBuffer.position, codePointBuffer.remaining, name);
    }
    consume() {
      if (this._size - this._position === 0) {
        assert$1(this.LA(1) === IntStream_1.IntStream.EOF);
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
    mark() {
      return -1;
    }
    release(marker) {
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
    getText(interval) {
      const startIdx = Math.min(interval.a, this.size);
      const len = Math.min(interval.b - interval.a + 1, this.size - startIdx);
      if (this._array instanceof Int32Array) {
        return String.fromCodePoint(...Array.from(this._array.subarray(startIdx, startIdx + len)));
      } else {
        return String.fromCharCode(...Array.from(this._array.subarray(startIdx, startIdx + len)));
      }
    }
  }
  __decorate([
    Decorators.Override
  ], CodePointCharStream2.prototype, "consume", null);
  __decorate([
    Decorators.Override
  ], CodePointCharStream2.prototype, "index", null);
  __decorate([
    Decorators.Override
  ], CodePointCharStream2.prototype, "size", null);
  __decorate([
    Decorators.Override
  ], CodePointCharStream2.prototype, "mark", null);
  __decorate([
    Decorators.Override
  ], CodePointCharStream2.prototype, "release", null);
  __decorate([
    Decorators.Override
  ], CodePointCharStream2.prototype, "seek", null);
  __decorate([
    Decorators.Override
  ], CodePointCharStream2.prototype, "sourceName", null);
  __decorate([
    Decorators.Override
  ], CodePointCharStream2.prototype, "toString", null);
  __decorate([
    Decorators.Override
  ], CodePointCharStream2.prototype, "LA", null);
  __decorate([
    Decorators.Override
  ], CodePointCharStream2.prototype, "getText", null);
  exports.CodePointCharStream = CodePointCharStream2;
});
var CharStreams_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CharStreams = void 0;
  (function(CharStreams2) {
    function fromString2(s, sourceName) {
      if (sourceName === void 0 || sourceName.length === 0) {
        sourceName = IntStream_1.IntStream.UNKNOWN_SOURCE_NAME;
      }
      let codePointBufferBuilder = CodePointBuffer_1.CodePointBuffer.builder(s.length);
      let cb = new Uint16Array(s.length);
      for (let i = 0; i < s.length; i++) {
        cb[i] = s.charCodeAt(i);
      }
      codePointBufferBuilder.append(cb);
      return CodePointCharStream_1.CodePointCharStream.fromBuffer(codePointBufferBuilder.build(), sourceName);
    }
    CharStreams2.fromString = fromString2;
  })(exports.CharStreams || (exports.CharStreams = {}));
});
var BufferedTokenStream_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BufferedTokenStream = void 0;
  let BufferedTokenStream2 = class BufferedTokenStream {
    constructor(tokenSource) {
      this.tokens = [];
      this.p = -1;
      this.fetchedEOF = false;
      if (tokenSource == null) {
        throw new Error("tokenSource cannot be null");
      }
      this._tokenSource = tokenSource;
    }
    get tokenSource() {
      return this._tokenSource;
    }
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
          skipEofCheck = this.p < this.tokens.length - 1;
        } else {
          skipEofCheck = this.p < this.tokens.length;
        }
      } else {
        skipEofCheck = false;
      }
      if (!skipEofCheck && this.LA(1) === Token_1.Token.EOF) {
        throw new Error("cannot consume EOF");
      }
      if (this.sync(this.p + 1)) {
        this.p = this.adjustSeekIndex(this.p + 1);
      }
    }
    sync(i) {
      assert$1(i >= 0);
      let n = i - this.tokens.length + 1;
      if (n > 0) {
        let fetched = this.fetch(n);
        return fetched >= n;
      }
      return true;
    }
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
      if (this.p - k < 0) {
        return void 0;
      }
      return this.tokens[this.p - k];
    }
    LT(k) {
      let result = this.tryLT(k);
      if (result === void 0) {
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
        return this.tokens[this.tokens.length - 1];
      }
      return this.tokens[i];
    }
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
    getTokens(start, stop, types) {
      this.lazyInit();
      if (start === void 0) {
        assert$1(stop === void 0 && types === void 0);
        return this.tokens;
      } else if (stop === void 0) {
        stop = this.tokens.length - 1;
      }
      if (start < 0 || stop >= this.tokens.length || stop < 0 || start >= this.tokens.length) {
        throw new RangeError("start " + start + " or stop " + stop + " not in 0.." + (this.tokens.length - 1));
      }
      if (start > stop) {
        return [];
      }
      if (types === void 0) {
        return this.tokens.slice(start, stop + 1);
      } else if (typeof types === "number") {
        types = new Set().add(types);
      }
      let typesSet = types;
      let filteredTokens = this.tokens.slice(start, stop + 1);
      filteredTokens = filteredTokens.filter((value) => typesSet.has(value.type));
      return filteredTokens;
    }
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
    previousTokenOnChannel(i, channel) {
      this.sync(i);
      if (i >= this.size) {
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
    getHiddenTokensToRight(tokenIndex, channel = -1) {
      this.lazyInit();
      if (tokenIndex < 0 || tokenIndex >= this.tokens.length) {
        throw new RangeError(tokenIndex + " not in 0.." + (this.tokens.length - 1));
      }
      let nextOnChannel = this.nextTokenOnChannel(tokenIndex + 1, Lexer_1.Lexer.DEFAULT_TOKEN_CHANNEL);
      let to;
      let from2 = tokenIndex + 1;
      if (nextOnChannel === -1) {
        to = this.size - 1;
      } else {
        to = nextOnChannel;
      }
      return this.filterForChannel(from2, to, channel);
    }
    getHiddenTokensToLeft(tokenIndex, channel = -1) {
      this.lazyInit();
      if (tokenIndex < 0 || tokenIndex >= this.tokens.length) {
        throw new RangeError(tokenIndex + " not in 0.." + (this.tokens.length - 1));
      }
      if (tokenIndex === 0) {
        return [];
      }
      let prevOnChannel = this.previousTokenOnChannel(tokenIndex - 1, Lexer_1.Lexer.DEFAULT_TOKEN_CHANNEL);
      if (prevOnChannel === tokenIndex - 1) {
        return [];
      }
      let from2 = prevOnChannel + 1;
      let to = tokenIndex - 1;
      return this.filterForChannel(from2, to, channel);
    }
    filterForChannel(from2, to, channel) {
      let hidden = new Array();
      for (let i = from2; i <= to; i++) {
        let t = this.tokens[i];
        if (channel === -1) {
          if (t.channel !== Lexer_1.Lexer.DEFAULT_TOKEN_CHANNEL) {
            hidden.push(t);
          }
        } else {
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
      if (interval === void 0) {
        interval = Interval_1.Interval.of(0, this.size - 1);
      } else if (!(interval instanceof Interval_1.Interval)) {
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
    fill() {
      this.lazyInit();
      const blockSize = 1e3;
      while (true) {
        let fetched = this.fetch(blockSize);
        if (fetched < blockSize) {
          return;
        }
      }
    }
    isWritableToken(t) {
      return t instanceof CommonToken_1.CommonToken;
    }
    isToken(t) {
      return t instanceof CommonToken_1.CommonToken;
    }
  };
  __decorate([
    Decorators.NotNull
  ], BufferedTokenStream2.prototype, "_tokenSource", void 0);
  __decorate([
    Decorators.Override
  ], BufferedTokenStream2.prototype, "tokenSource", null);
  __decorate([
    Decorators.Override
  ], BufferedTokenStream2.prototype, "index", null);
  __decorate([
    Decorators.Override
  ], BufferedTokenStream2.prototype, "mark", null);
  __decorate([
    Decorators.Override
  ], BufferedTokenStream2.prototype, "release", null);
  __decorate([
    Decorators.Override
  ], BufferedTokenStream2.prototype, "seek", null);
  __decorate([
    Decorators.Override
  ], BufferedTokenStream2.prototype, "size", null);
  __decorate([
    Decorators.Override
  ], BufferedTokenStream2.prototype, "consume", null);
  __decorate([
    Decorators.Override
  ], BufferedTokenStream2.prototype, "get", null);
  __decorate([
    Decorators.Override
  ], BufferedTokenStream2.prototype, "LA", null);
  __decorate([
    Decorators.NotNull,
    Decorators.Override
  ], BufferedTokenStream2.prototype, "LT", null);
  __decorate([
    Decorators.Override
  ], BufferedTokenStream2.prototype, "sourceName", null);
  __decorate([
    Decorators.NotNull,
    Decorators.Override
  ], BufferedTokenStream2.prototype, "getText", null);
  __decorate([
    Decorators.NotNull,
    Decorators.Override
  ], BufferedTokenStream2.prototype, "getTextFromRange", null);
  BufferedTokenStream2 = __decorate([
    __param(0, Decorators.NotNull)
  ], BufferedTokenStream2);
  exports.BufferedTokenStream = BufferedTokenStream2;
});
var CommonTokenStream_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonTokenStream = void 0;
  let CommonTokenStream2 = class CommonTokenStream extends BufferedTokenStream_1.BufferedTokenStream {
    constructor(tokenSource, channel = Token_1.Token.DEFAULT_CHANNEL) {
      super(tokenSource);
      this.channel = channel;
    }
    adjustSeekIndex(i) {
      return this.nextTokenOnChannel(i, this.channel);
    }
    tryLB(k) {
      if (this.p - k < 0) {
        return void 0;
      }
      let i = this.p;
      let n = 1;
      while (n <= k && i > 0) {
        i = this.previousTokenOnChannel(i - 1, this.channel);
        n++;
      }
      if (i < 0) {
        return void 0;
      }
      return this.tokens[i];
    }
    tryLT(k) {
      this.lazyInit();
      if (k === 0) {
        throw new RangeError("0 is not a valid lookahead index");
      }
      if (k < 0) {
        return this.tryLB(-k);
      }
      let i = this.p;
      let n = 1;
      while (n < k) {
        if (this.sync(i + 1)) {
          i = this.nextTokenOnChannel(i + 1, this.channel);
        }
        n++;
      }
      return this.tokens[i];
    }
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
  ], CommonTokenStream2.prototype, "adjustSeekIndex", null);
  __decorate([
    Decorators.Override
  ], CommonTokenStream2.prototype, "tryLB", null);
  __decorate([
    Decorators.Override
  ], CommonTokenStream2.prototype, "tryLT", null);
  CommonTokenStream2 = __decorate([
    __param(0, Decorators.NotNull)
  ], CommonTokenStream2);
  exports.CommonTokenStream = CommonTokenStream2;
});
var ListTokenSource_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ListTokenSource = void 0;
  let ListTokenSource2 = class ListTokenSource {
    constructor(tokens, sourceName) {
      this.i = 0;
      this._factory = CommonTokenFactory_1.CommonTokenFactory.DEFAULT;
      if (tokens == null) {
        throw new Error("tokens cannot be null");
      }
      this.tokens = tokens;
      this._sourceName = sourceName;
    }
    get charPositionInLine() {
      if (this.i < this.tokens.length) {
        return this.tokens[this.i].charPositionInLine;
      } else if (this.eofToken != null) {
        return this.eofToken.charPositionInLine;
      } else if (this.tokens.length > 0) {
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
      return 0;
    }
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
          this.eofToken = this._factory.create({source: this, stream: this.inputStream}, Token_1.Token.EOF, "EOF", Token_1.Token.DEFAULT_CHANNEL, start, stop, this.line, this.charPositionInLine);
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
    get line() {
      if (this.i < this.tokens.length) {
        return this.tokens[this.i].line;
      } else if (this.eofToken != null) {
        return this.eofToken.line;
      } else if (this.tokens.length > 0) {
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
        return line;
      }
      return 1;
    }
    get inputStream() {
      if (this.i < this.tokens.length) {
        return this.tokens[this.i].inputStream;
      } else if (this.eofToken != null) {
        return this.eofToken.inputStream;
      } else if (this.tokens.length > 0) {
        return this.tokens[this.tokens.length - 1].inputStream;
      }
      return void 0;
    }
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
    set tokenFactory(factory) {
      this._factory = factory;
    }
    get tokenFactory() {
      return this._factory;
    }
  };
  __decorate([
    Decorators.Override
  ], ListTokenSource2.prototype, "charPositionInLine", null);
  __decorate([
    Decorators.Override
  ], ListTokenSource2.prototype, "nextToken", null);
  __decorate([
    Decorators.Override
  ], ListTokenSource2.prototype, "line", null);
  __decorate([
    Decorators.Override
  ], ListTokenSource2.prototype, "inputStream", null);
  __decorate([
    Decorators.Override
  ], ListTokenSource2.prototype, "sourceName", null);
  __decorate([
    Decorators.Override,
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
  ], ListTokenSource2.prototype, "tokenFactory", null);
  ListTokenSource2 = __decorate([
    __param(0, Decorators.NotNull)
  ], ListTokenSource2);
  exports.ListTokenSource = ListTokenSource2;
});
var MultiMap_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MultiMap = void 0;
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
var ParseCancellationException_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ParseCancellationException = void 0;
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
var InterpreterRuleContext_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.InterpreterRuleContext = void 0;
  class InterpreterRuleContext2 extends ParserRuleContext_1.ParserRuleContext {
    constructor(ruleIndex, parent, invokingStateNumber) {
      if (invokingStateNumber !== void 0) {
        super(parent, invokingStateNumber);
      } else {
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
  ], InterpreterRuleContext2.prototype, "ruleIndex", null);
  exports.InterpreterRuleContext = InterpreterRuleContext2;
});
var ParserInterpreter_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ParserInterpreter = void 0;
  const Decorators_2 = Decorators;
  let ParserInterpreter2 = class ParserInterpreter3 extends Parser_1.Parser {
    constructor(grammarFileName, vocabulary, ruleNames, atn, input) {
      super(grammarFileName instanceof ParserInterpreter3 ? grammarFileName.inputStream : input);
      this._parentContextStack = [];
      this.overrideDecision = -1;
      this.overrideDecisionInputIndex = -1;
      this.overrideDecisionAlt = -1;
      this.overrideDecisionReached = false;
      this._overrideDecisionRoot = void 0;
      if (grammarFileName instanceof ParserInterpreter3) {
        let old = grammarFileName;
        this._grammarFileName = old._grammarFileName;
        this._atn = old._atn;
        this.pushRecursionContextStates = old.pushRecursionContextStates;
        this._ruleNames = old._ruleNames;
        this._vocabulary = old._vocabulary;
        this.interpreter = new ParserATNSimulator_1.ParserATNSimulator(this._atn, this);
      } else {
        vocabulary = vocabulary;
        ruleNames = ruleNames;
        atn = atn;
        this._grammarFileName = grammarFileName;
        this._atn = atn;
        this._ruleNames = ruleNames.slice(0);
        this._vocabulary = vocabulary;
        this.pushRecursionContextStates = new BitSet_1.BitSet(atn.states.length);
        for (let state of atn.states) {
          if (!(state instanceof StarLoopEntryState_1.StarLoopEntryState)) {
            continue;
          }
          if (state.precedenceRuleDecision) {
            this.pushRecursionContextStates.set(state.stateNumber);
          }
        }
        this.interpreter = new ParserATNSimulator_1.ParserATNSimulator(atn, this);
      }
    }
    reset(resetInput) {
      if (resetInput === void 0) {
        super.reset();
      } else {
        super.reset(resetInput);
      }
      this.overrideDecisionReached = false;
      this._overrideDecisionRoot = void 0;
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
    parse(startRuleIndex) {
      let startRuleStartState = this._atn.ruleToStartState[startRuleIndex];
      this._rootContext = this.createInterpreterRuleContext(void 0, ATNState_1.ATNState.INVALID_STATE_NUMBER, startRuleIndex);
      if (startRuleStartState.isPrecedenceRule) {
        this.enterRecursionRule(this._rootContext, startRuleStartState.stateNumber, startRuleIndex, 0);
      } else {
        this.enterRule(this._rootContext, startRuleStartState.stateNumber, startRuleIndex);
      }
      while (true) {
        let p = this.atnState;
        switch (p.stateType) {
          case ATNStateType_1.ATNStateType.RULE_STOP:
            if (this._ctx.isEmpty) {
              if (startRuleStartState.isPrecedenceRule) {
                let result = this._ctx;
                let parentContext = this._parentContextStack.pop();
                this.unrollRecursionContexts(parentContext[0]);
                return result;
              } else {
                this.exitRule();
                return this._rootContext;
              }
            }
            this.visitRuleStopState(p);
            break;
          default:
            try {
              this.visitState(p);
            } catch (e) {
              if (e instanceof RecognitionException_1.RecognitionException) {
                this.state = this._atn.ruleToStopState[p.ruleIndex].stateNumber;
                this.context.exception = e;
                this.errorHandler.reportError(this, e);
                this.recover(e);
              } else {
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
        case 1:
          if (this.pushRecursionContextStates.get(p.stateNumber) && !(transition.target instanceof LoopEndState_1.LoopEndState)) {
            let parentContext = this._parentContextStack[this._parentContextStack.length - 1];
            let localctx = this.createInterpreterRuleContext(parentContext[0], parentContext[1], this._ctx.ruleIndex);
            this.pushNewRecursionContext(localctx, this._atn.ruleToStartState[p.ruleIndex].stateNumber, this._ctx.ruleIndex);
          }
          break;
        case 5:
          this.match(transition._label);
          break;
        case 2:
        case 7:
        case 8:
          if (!transition.matches(this._input.LA(1), Token_1.Token.MIN_USER_TOKEN_TYPE, 65535)) {
            this.recoverInline();
          }
          this.matchWildcard();
          break;
        case 9:
          this.matchWildcard();
          break;
        case 3:
          let ruleStartState = transition.target;
          let ruleIndex = ruleStartState.ruleIndex;
          let newctx = this.createInterpreterRuleContext(this._ctx, p.stateNumber, ruleIndex);
          if (ruleStartState.isPrecedenceRule) {
            this.enterRecursionRule(newctx, ruleStartState.stateNumber, ruleIndex, transition.precedence);
          } else {
            this.enterRule(newctx, transition.target.stateNumber, ruleIndex);
          }
          break;
        case 4:
          let predicateTransition = transition;
          if (!this.sempred(this._ctx, predicateTransition.ruleIndex, predicateTransition.predIndex)) {
            throw new FailedPredicateException_1.FailedPredicateException(this);
          }
          break;
        case 6:
          let actionTransition = transition;
          this.action(this._ctx, actionTransition.ruleIndex, actionTransition.actionIndex);
          break;
        case 10:
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
    visitDecisionState(p) {
      let predictedAlt;
      this.errorHandler.sync(this);
      let decision = p.decision;
      if (decision === this.overrideDecision && this._input.index === this.overrideDecisionInputIndex && !this.overrideDecisionReached) {
        predictedAlt = this.overrideDecisionAlt;
        this.overrideDecisionReached = true;
      } else {
        predictedAlt = this.interpreter.adaptivePredict(this._input, decision, this._ctx);
      }
      return predictedAlt;
    }
    createInterpreterRuleContext(parent, invokingStateNumber, ruleIndex) {
      return new InterpreterRuleContext_1.InterpreterRuleContext(ruleIndex, parent, invokingStateNumber);
    }
    visitRuleStopState(p) {
      let ruleStartState = this._atn.ruleToStartState[p.ruleIndex];
      if (ruleStartState.isPrecedenceRule) {
        let parentContext = this._parentContextStack.pop();
        this.unrollRecursionContexts(parentContext[0]);
        this.state = parentContext[1];
      } else {
        this.exitRule();
      }
      let ruleTransition = this._atn.states[this.state].transition(0);
      this.state = ruleTransition.followState.stateNumber;
    }
    addDecisionOverride(decision, tokenIndex, forcedAlt) {
      this.overrideDecision = decision;
      this.overrideDecisionInputIndex = tokenIndex;
      this.overrideDecisionAlt = forcedAlt;
    }
    get overrideDecisionRoot() {
      return this._overrideDecisionRoot;
    }
    recover(e) {
      let i = this._input.index;
      this.errorHandler.recover(this, e);
      if (this._input.index === i) {
        let tok = e.getOffendingToken();
        if (!tok) {
          throw new Error("Expected exception to have an offending token");
        }
        let source = tok.tokenSource;
        let stream = source !== void 0 ? source.inputStream : void 0;
        let sourcePair = {source, stream};
        if (e instanceof InputMismatchException_1.InputMismatchException) {
          let expectedTokens = e.expectedTokens;
          if (expectedTokens === void 0) {
            throw new Error("Expected the exception to provide expected tokens");
          }
          let expectedTokenType = Token_1.Token.INVALID_TYPE;
          if (!expectedTokens.isNil) {
            expectedTokenType = expectedTokens.minElement;
          }
          let errToken = this.tokenFactory.create(sourcePair, expectedTokenType, tok.text, Token_1.Token.DEFAULT_CHANNEL, -1, -1, tok.line, tok.charPositionInLine);
          this._ctx.addErrorNode(this.createErrorNode(this._ctx, errToken));
        } else {
          let source2 = tok.tokenSource;
          let errToken = this.tokenFactory.create(sourcePair, Token_1.Token.INVALID_TYPE, tok.text, Token_1.Token.DEFAULT_CHANNEL, -1, -1, tok.line, tok.charPositionInLine);
          this._ctx.addErrorNode(this.createErrorNode(this._ctx, errToken));
        }
      }
    }
    recoverInline() {
      return this._errHandler.recoverInline(this);
    }
    get rootContext() {
      return this._rootContext;
    }
  };
  __decorate([
    Decorators.NotNull
  ], ParserInterpreter2.prototype, "_vocabulary", void 0);
  __decorate([
    Decorators_2.Override
  ], ParserInterpreter2.prototype, "reset", null);
  __decorate([
    Decorators_2.Override
  ], ParserInterpreter2.prototype, "atn", null);
  __decorate([
    Decorators_2.Override
  ], ParserInterpreter2.prototype, "vocabulary", null);
  __decorate([
    Decorators_2.Override
  ], ParserInterpreter2.prototype, "ruleNames", null);
  __decorate([
    Decorators_2.Override
  ], ParserInterpreter2.prototype, "grammarFileName", null);
  __decorate([
    Decorators_2.Override
  ], ParserInterpreter2.prototype, "enterRecursionRule", null);
  ParserInterpreter2 = __decorate([
    __param(1, Decorators.NotNull)
  ], ParserInterpreter2);
  exports.ParserInterpreter = ParserInterpreter2;
});
var ParseTreeMatch_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ParseTreeMatch = void 0;
  let ParseTreeMatch = class ParseTreeMatch {
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
    get(label) {
      let parseTrees = this._labels.get(label);
      if (!parseTrees || parseTrees.length === 0) {
        return void 0;
      }
      return parseTrees[parseTrees.length - 1];
    }
    getAll(label) {
      const nodes = this._labels.get(label);
      if (!nodes) {
        return [];
      }
      return nodes;
    }
    get labels() {
      return this._labels;
    }
    get mismatchedNode() {
      return this._mismatchedNode;
    }
    get succeeded() {
      return !this._mismatchedNode;
    }
    get pattern() {
      return this._pattern;
    }
    get tree() {
      return this._tree;
    }
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
var XPathLexer_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.XPathLexer = void 0;
  class XPathLexer extends Lexer_1.Lexer {
    constructor(input) {
      super(input);
      this._interp = new LexerATNSimulator_1.LexerATNSimulator(XPathLexer._ATN, this);
    }
    get vocabulary() {
      return XPathLexer.VOCABULARY;
    }
    get grammarFileName() {
      return "XPathLexer.g4";
    }
    get ruleNames() {
      return XPathLexer.ruleNames;
    }
    get serializedATN() {
      return XPathLexer._serializedATN;
    }
    get channelNames() {
      return XPathLexer.channelNames;
    }
    get modeNames() {
      return XPathLexer.modeNames;
    }
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
          } else {
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
  XPathLexer.channelNames = [
    "DEFAULT_TOKEN_CHANNEL",
    "HIDDEN"
  ];
  XPathLexer.modeNames = [
    "DEFAULT_MODE"
  ];
  XPathLexer.ruleNames = [
    "ANYWHERE",
    "ROOT",
    "WILDCARD",
    "BANG",
    "ID",
    "NameChar",
    "NameStartChar",
    "STRING"
  ];
  XPathLexer._LITERAL_NAMES = [
    void 0,
    void 0,
    void 0,
    "'//'",
    "'/'",
    "'*'",
    "'!'"
  ];
  XPathLexer._SYMBOLIC_NAMES = [
    void 0,
    "TOKEN_REF",
    "RULE_REF",
    "ANYWHERE",
    "ROOT",
    "WILDCARD",
    "BANG",
    "ID",
    "STRING"
  ];
  XPathLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(XPathLexer._LITERAL_NAMES, XPathLexer._SYMBOLIC_NAMES, []);
  XPathLexer._serializedATNSegments = 2;
  XPathLexer._serializedATNSegment0 = '\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\n2\b					\x07	\x07\b	\b			\x07\n\f"\v\x07\x07\b\b		\x07	,\n	\f		/\v			-\n\x07\x07	\b\v	\r\n\u02B6\n2;C\\aac|\x81\xA1\xAC\xAC\xAF\xAF\xB7\xB7\xBC\xBC\xC2\xD8\xDA\xF8\xFA\u02C3\u02C8\u02D3\u02E2\u02E6\u02EE\u02EE\u02F0\u02F0\u0302\u0376\u0378\u0379\u037C\u037F\u0381\u0381\u0388\u0388\u038A\u038C\u038E\u038E\u0390\u03A3\u03A5\u03F7\u03F9\u0483\u0485\u0489\u048C\u0531\u0533\u0558\u055B\u055B\u0563\u0589\u0593\u05BF\u05C1\u05C1\u05C3\u05C4\u05C6\u05C7\u05C9\u05C9\u05D2\u05EC\u05F2\u05F4\u0602\u0607\u0612\u061C\u061E\u061E\u0622\u066B\u0670\u06D5\u06D7\u06DF\u06E1\u06EA\u06EC\u06FE\u0701\u0701\u0711\u074C\u074F\u07B3\u07C2\u07F7\u07FC\u07FC\u0802\u082F\u0842\u085D\u08A2\u08B6\u08B8\u08BF\u08D6\u0965\u0968\u0971\u0973\u0985\u0987\u098E\u0991\u0992\u0995\u09AA\u09AC\u09B2\u09B4\u09B4\u09B8\u09BB\u09BE\u09C6\u09C9\u09CA\u09CD\u09D0\u09D9\u09D9\u09DE\u09DF\u09E1\u09E5\u09E8\u09F3\u0A03\u0A05\u0A07\u0A0C\u0A11\u0A12\u0A15\u0A2A\u0A2C\u0A32\u0A34\u0A35\u0A37\u0A38\u0A3A\u0A3B\u0A3E\u0A3E\u0A40\u0A44\u0A49\u0A4A\u0A4D\u0A4F\u0A53\u0A53\u0A5B\u0A5E\u0A60\u0A60\u0A68\u0A77\u0A83\u0A85\u0A87\u0A8F\u0A91\u0A93\u0A95\u0AAA\u0AAC\u0AB2\u0AB4\u0AB5\u0AB7\u0ABB\u0ABE\u0AC7\u0AC9\u0ACB\u0ACD\u0ACF\u0AD2\u0AD2\u0AE2\u0AE5\u0AE8\u0AF1\u0AFB\u0AFB\u0B03\u0B05\u0B07\u0B0E\u0B11\u0B12\u0B15\u0B2A\u0B2C\u0B32\u0B34\u0B35\u0B37\u0B3B\u0B3E\u0B46\u0B49\u0B4A\u0B4D\u0B4F\u0B58\u0B59\u0B5E\u0B5F\u0B61\u0B65\u0B68\u0B71\u0B73\u0B73\u0B84\u0B85\u0B87\u0B8C\u0B90\u0B92\u0B94\u0B97\u0B9B\u0B9C\u0B9E\u0B9E\u0BA0\u0BA1\u0BA5\u0BA6\u0BAA\u0BAC\u0BB0\u0BBB\u0BC0\u0BC4\u0BC8\u0BCA\u0BCC\u0BCF\u0BD2\u0BD2\u0BD9\u0BD9\u0BE8\u0BF1\u0C02\u0C05\u0C07\u0C0E\u0C10\u0C12\u0C14\u0C2A\u0C2C\u0C3B\u0C3F\u0C46\u0C48\u0C4A\u0C4C\u0C4F\u0C57\u0C58\u0C5A\u0C5C\u0C62\u0C65\u0C68\u0C71\u0C82\u0C85\u0C87\u0C8E\u0C90\u0C92\u0C94\u0CAA\u0CAC\u0CB5\u0CB7\u0CBB\u0CBE\u0CC6\u0CC8\u0CCA\u0CCC\u0CCF\u0CD7\u0CD8\u0CE0\u0CE0\u0CE2\u0CE5\u0CE8\u0CF1\u0CF3\u0CF4\u0D03\u0D05\u0D07\u0D0E\u0D10\u0D12\u0D14\u0D3C\u0D3F\u0D46\u0D48\u0D4A\u0D4C\u0D50\u0D56\u0D59\u0D61\u0D65\u0D68\u0D71\u0D7C\u0D81\u0D84\u0D85\u0D87\u0D98\u0D9C\u0DB3\u0DB5\u0DBD\u0DBF\u0DBF\u0DC2\u0DC8\u0DCC\u0DCC\u0DD1\u0DD6\u0DD8\u0DD8\u0DDA\u0DE1\u0DE8\u0DF1\u0DF4\u0DF5\u0E03\u0E3C\u0E42\u0E50\u0E52\u0E5B\u0E83\u0E84\u0E86\u0E86\u0E89\u0E8A\u0E8C\u0E8C\u0E8F\u0E8F\u0E96\u0E99\u0E9B\u0EA1\u0EA3\u0EA5\u0EA7\u0EA7\u0EA9\u0EA9\u0EAC\u0EAD\u0EAF\u0EBB\u0EBD\u0EBF\u0EC2\u0EC6\u0EC8\u0EC8\u0ECA\u0ECF\u0ED2\u0EDB\u0EDE\u0EE1\u0F02\u0F02\u0F1A\u0F1B\u0F22\u0F2B\u0F37\u0F37\u0F39\u0F39\u0F3B\u0F3B\u0F40\u0F49\u0F4B\u0F6E\u0F73\u0F86\u0F88\u0F99\u0F9B\u0FBE\u0FC8\u0FC8\u1002\u104B\u1052\u109F\u10A2\u10C7\u10C9\u10C9\u10CF\u10CF\u10D2\u10FC\u10FE\u124A\u124C\u124F\u1252\u1258\u125A\u125A\u125C\u125F\u1262\u128A\u128C\u128F\u1292\u12B2\u12B4\u12B7\u12BA\u12C0\u12C2\u12C2\u12C4\u12C7\u12CA\u12D8\u12DA\u1312\u1314\u1317\u131A\u135C\u135F\u1361\u1382\u1391\u13A2\u13F7\u13FA\u13FF\u1403\u166E\u1671\u1681\u1683\u169C\u16A2\u16EC\u16F0\u16FA\u1702\u170E\u1710\u1716\u1722\u1736\u1742\u1755\u1762\u176E\u1770\u1772\u1774\u1775\u1782\u17D5\u17D9\u17D9\u17DE\u17DF\u17E2\u17EB\u180D\u1810\u1812\u181B\u1822\u1879\u1882\u18AC\u18B2\u18F7\u1902\u1920\u1922\u192D\u1932\u193D\u1948\u196F\u1972\u1976\u1982\u19AD\u19B2\u19CB\u19D2\u19DB\u1A02\u1A1D\u1A22\u1A60\u1A62\u1A7E\u1A81\u1A8B\u1A92\u1A9B\u1AA9\u1AA9\u1AB2\u1ABF\u1B02\u1B4D\u1B52\u1B5B\u1B6D\u1B75\u1B82\u1BF5\u1C02\u1C39\u1C42\u1C4B\u1C4F\u1C7F\u1C82\u1C8A\u1CD2\u1CD4\u1CD6\u1CF8\u1CFA\u1CFB\u1D02\u1DF7\u1DFD\u1F17\u1F1A\u1F1F\u1F22\u1F47\u1F4A\u1F4F\u1F52\u1F59\u1F5B\u1F5B\u1F5D\u1F5D\u1F5F\u1F5F\u1F61\u1F7F\u1F82\u1FB6\u1FB8\u1FBE\u1FC0\u1FC0\u1FC4\u1FC6\u1FC8\u1FCE\u1FD2\u1FD5\u1FD8\u1FDD\u1FE2\u1FEE\u1FF4\u1FF6\u1FF8\u1FFE\u200D\u2011\u202C\u2030\u2041\u2042\u2056\u2056\u2062\u2066\u2068\u2071\u2073\u2073\u2081\u2081\u2092\u209E\u20D2\u20DE\u20E3\u20E3\u20E7\u20F2\u2104\u2104\u2109\u2109\u210C\u2115\u2117\u2117\u211B\u211F\u2126\u2126\u2128\u2128\u212A\u212A\u212C\u212F\u2131\u213B\u213E\u2141\u2147\u214B\u2150\u2150\u2162\u218A\u2C02\u2C30\u2C32\u2C60\u2C62\u2CE6\u2CED\u2CF5\u2D02\u2D27\u2D29\u2D29\u2D2F\u2D2F\u2D32\u2D69\u2D71\u2D71\u2D81\u2D98\u2DA2\u2DA8\u2DAA\u2DB0\u2DB2\u2DB8\u2DBA\u2DC0\u2DC2\u2DC8\u2DCA\u2DD0\u2DD2\u2DD8\u2DDA\u2DE0\u2DE2\u2E01\u2E31\u2E31\u3007\u3009\u3023\u3031\u3033\u3037\u303A\u303E\u3043\u3098\u309B\u309C\u309F\u30A1\u30A3\u30FC\u30FE\u3101\u3107\u312F\u3133\u3190\u31A2\u31BC\u31F2\u3201\u3402\u4DB7\u4E02\u9FD7\uA002\uA48E\uA4D2\uA4FF\uA502\uA60E\uA612\uA62D\uA642\uA671\uA676\uA67F\uA681\uA6F3\uA719\uA721\uA724\uA78A\uA78D\uA7B0\uA7B2\uA7B9\uA7F9\uA829\uA842\uA875\uA882\uA8C7\uA8D2\uA8DB\uA8E2\uA8F9\uA8FD\uA8FD\uA8FF\uA8FF\uA902\uA92F\uA932\uA955\uA962\uA97E\uA982\uA9C2\uA9D1\uA9DB\uA9E2\uAA00\uAA02\uAA38\uAA42\uAA4F\uAA52\uAA5B\uAA62\uAA78\uAA7C\uAAC4\uAADD\uAADF\uAAE2\uAAF1\uAAF4\uAAF8\uAB03\uAB08\uAB0B\uAB10\uAB13\uAB18\uAB22\uAB28\uAB2A\uAB30\uAB32\uAB5C\uAB5E\uAB67\uAB72\uABEC\uABEE\uABEF\uABF2\uABFB\uAC02\uD7A5\uD7B2\uD7C8\uD7CD\uD7FD\uF902\uFA6F\uFA72\uFADB\uFB02\uFB08\uFB15\uFB19\uFB1F\uFB2A\uFB2C\uFB38\uFB3A\uFB3E\uFB40\uFB40\uFB42\uFB43\uFB45\uFB46\uFB48\uFBB3\uFBD5\uFD3F\uFD52\uFD91\uFD94\uFDC9\uFDF2\uFDFD\uFE02\uFE11\uFE22\uFE31\uFE35\uFE36\uFE4F\uFE51\uFE72\uFE76\uFE78\uFEFE\uFF01\uFF01\uFF12\uFF1B\uFF23\uFF3C\uFF41\uFF41\uFF43\uFF5C\uFF68\uFFC0\uFFC4\uFFC9\uFFCC\uFFD1\uFFD4\uFFD9\uFFDC\uFFDE\uFFFB\uFFFD\r(*<>?AOR_\x82\xFC\u0142\u0176\u01FF\u01FF\u0282\u029E\u02A2\u02D2\u02E2\u02E2\u0302\u0321\u0332\u034C\u0352\u037C\u0382\u039F\u03A2\u03C5\u03CA\u03D1\u03D3\u03D7\u0402\u049F\u04A2\u04AB\u04B2\u04D5\u04DA\u04FD\u0502\u0529\u0532\u0565\u0602\u0738\u0742\u0757\u0762\u0769\u0802\u0807\u080A\u080A\u080C\u0837\u0839\u083A\u083E\u083E\u0841\u0857\u0862\u0878\u0882\u08A0\u08E2\u08F4\u08F6\u08F7\u0902\u0917\u0922\u093B\u0982\u09B9\u09C0\u09C1\u0A02\u0A05\u0A07\u0A08\u0A0E\u0A15\u0A17\u0A19\u0A1B\u0A35\u0A3A\u0A3C\u0A41\u0A41\u0A62\u0A7E\u0A82\u0A9E\u0AC2\u0AC9\u0ACB\u0AE8\u0B02\u0B37\u0B42\u0B57\u0B62\u0B74\u0B82\u0B93\u0C02\u0C4A\u0C82\u0CB4\u0CC2\u0CF4\u1002\u1048\u1068\u1071\u1081\u10BC\u10BF\u10BF\u10D2\u10EA\u10F2\u10FB\u1102\u1136\u1138\u1141\u1152\u1175\u1178\u1178\u1182\u11C6\u11CC\u11CE\u11D2\u11DC\u11DE\u11DE\u1202\u1213\u1215\u1239\u1240\u1240\u1282\u1288\u128A\u128A\u128C\u128F\u1291\u129F\u12A1\u12AA\u12B2\u12EC\u12F2\u12FB\u1302\u1305\u1307\u130E\u1311\u1312\u1315\u132A\u132C\u1332\u1334\u1335\u1337\u133B\u133E\u1346\u1349\u134A\u134D\u134F\u1352\u1352\u1359\u1359\u135F\u1365\u1368\u136E\u1372\u1376\u1402\u144C\u1452\u145B\u1482\u14C7\u14C9\u14C9\u14D2\u14DB\u1582\u15B7\u15BA\u15C2\u15DA\u15DF\u1602\u1642\u1646\u1646\u1652\u165B\u1682\u16B9\u16C2\u16CB\u1702\u171B\u171F\u172D\u1732\u173B\u18A2\u18EB\u1901\u1901\u1AC2\u1AFA\u1C02\u1C0A\u1C0C\u1C38\u1C3A\u1C42\u1C52\u1C5B\u1C74\u1C91\u1C94\u1CA9\u1CAB\u1CB8\u2002\u239B\u2402\u2470\u2482\u2545\u3002\u3430\u4402\u4648\u6802\u6A3A\u6A42\u6A60\u6A62\u6A6B\u6AD2\u6AEF\u6AF2\u6AF6\u6B02\u6B38\u6B42\u6B45\u6B52\u6B5B\u6B65\u6B79\u6B7F\u6B91\u6F02\u6F46\u6F52\u6F80\u6F91\u6FA1\u6FE2\u6FE2\u7002\u87EE\u8802\u8AF4\uB002\uB003\uBC02\uBC6C\uBC72\uBC7E\uBC82\uBC8A\uBC92\uBC9B\uBC9F\uBCA0\uBCA2\uBCA5\uD167\uD16B\uD16F\uD184\uD187\uD18D\uD1AC\uD1AF\uD244\uD246\uD402\uD456\uD458\uD49E\uD4A0\uD4A1\uD4A4\uD4A4\uD4A7\uD4A8\uD4AB\uD4AE\uD4B0\uD4BB\uD4BD\uD4BD\uD4BF\uD4C5\uD4C7\uD507\uD509\uD50C\uD50F\uD516\uD518\uD51E\uD520\uD53B\uD53D\uD540\uD542\uD546\uD548\uD548\uD54C\uD552\uD554\uD6A7\uD6AA\uD6C2\uD6C4\uD6DC\uD6DE\uD6FC\uD6FE\uD716\uD718\uD736\uD738\uD750\uD752\uD770\uD772\uD78A\uD78C\uD7AA\uD7AC\uD7C4\uD7C6\uD7CD\uD7D0\uD801\uDA02\uDA38\uDA3D\uDA6E\uDA77\uDA77\uDA86\uDA86\uDA9D\uDAA1\uDAA3\uDAB1\uE002\uE008\uE00A\uE01A\uE01D\uE023\uE025\uE026\uE028\uE02C\uE802\uE8C6\uE8D2\uE8D8\uE902\uE94C\uE952\uE95B\uEE02\uEE05\uEE07\uEE21\uEE23\uEE24\uEE26\uEE26\uEE29\uEE29\uEE2B\uEE34\uEE36\uEE39\uEE3B\uEE3B\uEE3D\uEE3D\uEE44\uEE44\uEE49\uEE49\uEE4B\uEE4B\uEE4D\uEE4D\uEE4F\uEE51\uEE53\uEE54\uEE56\uEE56\uEE59\uEE59\uEE5B\uEE5B\uEE5D\uEE5D\uEE5F\uEE5F\uEE61\uEE61\uEE63\uEE64\uEE66\uEE66\uEE69\uEE6C\uEE6E\uEE74\uEE76\uEE79\uEE7B\uEE7E\uEE80\uEE80\uEE82\uEE8B\uEE8D\uEE9D\uEEA3\uEEA5\uEEA7\uEEAB\uEEAD\uEEBD\uA6D8\uA702\uB736\uB742\uB81F\uB822\uCEA3\uF802\uFA1F"\x81\u0102\u01F1\u0240C\\c|\xAC\xAC\xB7\xB7\xBC\xBC\xC2\xD8\xDA\xF8\xFA\u02C3\u02C8\u02D3\u02E2\u02E6\u02EE\u02EE\u02F0\u02F0\u0372\u0376\u0378\u0379\u037C\u037F\u0381\u0381\u0388\u0388\u038A\u038C\u038E\u038E\u0390\u03A3\u03A5\u03F7\u03F9\u0483\u048C\u0531\u0533\u0558\u055B\u055B\u0563\u0589\u05D2\u05EC\u05F2\u05F4\u0622\u064C\u0670\u0671\u0673\u06D5\u06D7\u06D7\u06E7\u06E8\u06F0\u06F1\u06FC\u06FE\u0701\u0701\u0712\u0712\u0714\u0731\u074F\u07A7\u07B3\u07B3\u07CC\u07EC\u07F6\u07F7\u07FC\u07FC\u0802\u0817\u081C\u081C\u0826\u0826\u082A\u082A\u0842\u085A\u08A2\u08B6\u08B8\u08BF\u0906\u093B\u093F\u093F\u0952\u0952\u095A\u0963\u0973\u0982\u0987\u098E\u0991\u0992\u0995\u09AA\u09AC\u09B2\u09B4\u09B4\u09B8\u09BB\u09BF\u09BF\u09D0\u09D0\u09DE\u09DF\u09E1\u09E3\u09F2\u09F3\u0A07\u0A0C\u0A11\u0A12\u0A15\u0A2A\u0A2C\u0A32\u0A34\u0A35\u0A37\u0A38\u0A3A\u0A3B\u0A5B\u0A5E\u0A60\u0A60\u0A74\u0A76\u0A87\u0A8F\u0A91\u0A93\u0A95\u0AAA\u0AAC\u0AB2\u0AB4\u0AB5\u0AB7\u0ABB\u0ABF\u0ABF\u0AD2\u0AD2\u0AE2\u0AE3\u0AFB\u0AFB\u0B07\u0B0E\u0B11\u0B12\u0B15\u0B2A\u0B2C\u0B32\u0B34\u0B35\u0B37\u0B3B\u0B3F\u0B3F\u0B5E\u0B5F\u0B61\u0B63\u0B73\u0B73\u0B85\u0B85\u0B87\u0B8C\u0B90\u0B92\u0B94\u0B97\u0B9B\u0B9C\u0B9E\u0B9E\u0BA0\u0BA1\u0BA5\u0BA6\u0BAA\u0BAC\u0BB0\u0BBB\u0BD2\u0BD2\u0C07\u0C0E\u0C10\u0C12\u0C14\u0C2A\u0C2C\u0C3B\u0C3F\u0C3F\u0C5A\u0C5C\u0C62\u0C63\u0C82\u0C82\u0C87\u0C8E\u0C90\u0C92\u0C94\u0CAA\u0CAC\u0CB5\u0CB7\u0CBB\u0CBF\u0CBF\u0CE0\u0CE0\u0CE2\u0CE3\u0CF3\u0CF4\u0D07\u0D0E\u0D10\u0D12\u0D14\u0D3C\u0D3F\u0D3F\u0D50\u0D50\u0D56\u0D58\u0D61\u0D63\u0D7C\u0D81\u0D87\u0D98\u0D9C\u0DB3\u0DB5\u0DBD\u0DBF\u0DBF\u0DC2\u0DC8\u0E03\u0E32\u0E34\u0E35\u0E42\u0E48\u0E83\u0E84\u0E86\u0E86\u0E89\u0E8A\u0E8C\u0E8C\u0E8F\u0E8F\u0E96\u0E99\u0E9B\u0EA1\u0EA3\u0EA5\u0EA7\u0EA7\u0EA9\u0EA9\u0EAC\u0EAD\u0EAF\u0EB2\u0EB4\u0EB5\u0EBF\u0EBF\u0EC2\u0EC6\u0EC8\u0EC8\u0EDE\u0EE1\u0F02\u0F02\u0F42\u0F49\u0F4B\u0F6E\u0F8A\u0F8E\u1002\u102C\u1041\u1041\u1052\u1057\u105C\u105F\u1063\u1063\u1067\u1068\u1070\u1072\u1077\u1083\u1090\u1090\u10A2\u10C7\u10C9\u10C9\u10CF\u10CF\u10D2\u10FC\u10FE\u124A\u124C\u124F\u1252\u1258\u125A\u125A\u125C\u125F\u1262\u128A\u128C\u128F\u1292\u12B2\u12B4\u12B7\u12BA\u12C0\u12C2\u12C2\u12C4\u12C7\u12CA\u12D8\u12DA\u1312\u1314\u1317\u131A\u135C\u1382\u1391\u13A2\u13F7\u13FA\u13FF\u1403\u166E\u1671\u1681\u1683\u169C\u16A2\u16EC\u16F0\u16FA\u1702\u170E\u1710\u1713\u1722\u1733\u1742\u1753\u1762\u176E\u1770\u1772\u1782\u17B5\u17D9\u17D9\u17DE\u17DE\u1822\u1879\u1882\u1886\u1889\u18AA\u18AC\u18AC\u18B2\u18F7\u1902\u1920\u1952\u196F\u1972\u1976\u1982\u19AD\u19B2\u19CB\u1A02\u1A18\u1A22\u1A56\u1AA9\u1AA9\u1B07\u1B35\u1B47\u1B4D\u1B85\u1BA2\u1BB0\u1BB1\u1BBC\u1BE7\u1C02\u1C25\u1C4F\u1C51\u1C5C\u1C7F\u1C82\u1C8A\u1CEB\u1CEE\u1CF0\u1CF3\u1CF7\u1CF8\u1D02\u1DC1\u1E02\u1F17\u1F1A\u1F1F\u1F22\u1F47\u1F4A\u1F4F\u1F52\u1F59\u1F5B\u1F5B\u1F5D\u1F5D\u1F5F\u1F5F\u1F61\u1F7F\u1F82\u1FB6\u1FB8\u1FBE\u1FC0\u1FC0\u1FC4\u1FC6\u1FC8\u1FCE\u1FD2\u1FD5\u1FD8\u1FDD\u1FE2\u1FEE\u1FF4\u1FF6\u1FF8\u1FFE\u2073\u2073\u2081\u2081\u2092\u209E\u2104\u2104\u2109\u2109\u210C\u2115\u2117\u2117\u211B\u211F\u2126\u2126\u2128\u2128\u212A\u212A\u212C\u212F\u2131\u213B\u213E\u2141\u2147\u214B\u2150\u2150\u2162\u218A\u2C02\u2C30\u2C32\u2C60\u2C62\u2CE6\u2CED\u2CF0\u2CF4\u2CF5\u2D02\u2D27\u2D29\u2D29\u2D2F\u2D2F\u2D32\u2D69\u2D71\u2D71\u2D82\u2D98\u2DA2\u2DA8\u2DAA\u2DB0\u2DB2\u2DB8\u2DBA\u2DC0\u2DC2\u2DC8\u2DCA\u2DD0\u2DD2\u2DD8\u2DDA\u2DE0\u2E31\u2E31\u3007\u3009\u3023\u302B\u3033\u3037\u303A\u303E\u3043\u3098\u309F\u30A1\u30A3\u30FC\u30FE\u3101\u3107\u312F\u3133\u3190\u31A2\u31BC\u31F2\u3201\u3402\u4DB7\u4E02\u9FD7\uA002\uA48E\uA4D2\uA4FF\uA502\uA60E\uA612\uA621\uA62C\uA62D\uA642\uA670\uA681\uA69F\uA6A2\uA6F1\uA719\uA721\uA724\uA78A\uA78D\uA7B0\uA7B2\uA7B9\uA7F9\uA803\uA805\uA807\uA809\uA80C\uA80E\uA824\uA842\uA875\uA884\uA8B5\uA8F4\uA8F9\uA8FD\uA8FD\uA8FF\uA8FF\uA90C\uA927\uA932\uA948\uA962\uA97E\uA986\uA9B4\uA9D1\uA9D1\uA9E2\uA9E6\uA9E8\uA9F1\uA9FC\uAA00\uAA02\uAA2A\uAA42\uAA44\uAA46\uAA4D\uAA62\uAA78\uAA7C\uAA7C\uAA80\uAAB1\uAAB3\uAAB3\uAAB7\uAAB8\uAABB\uAABF\uAAC2\uAAC2\uAAC4\uAAC4\uAADD\uAADF\uAAE2\uAAEC\uAAF4\uAAF6\uAB03\uAB08\uAB0B\uAB10\uAB13\uAB18\uAB22\uAB28\uAB2A\uAB30\uAB32\uAB5C\uAB5E\uAB67\uAB72\uABE4\uAC02\uD7A5\uD7B2\uD7C8\uD7CD\uD7FD\uF902\uFA6F\uFA72\uFADB\uFB02\uFB08\uFB15\uFB19\uFB1F\uFB1F\uFB21\uFB2A\uFB2C\uFB38\uFB3A\uFB3E\uFB40\uFB40\uFB42\uFB43\uFB45\uFB46\uFB48\uFBB3\uFBD5\uFD3F\uFD52\uFD91\uFD94\uFDC9\uFDF2\uFDFD\uFE72\uFE76\uFE78\uFEFE\uFF23\uFF3C\uFF43\uFF5C\uFF68\uFFC0\uFFC4\uFFC9\uFFCC\uFFD1\uFFD4\uFFD9\uFFDC\uFFDE\r(*<>?AOR_\x82\xFC\u0142\u0176\u0282\u029E\u02A2\u02D2\u0302\u0321\u0332\u034C\u0352\u0377\u0382\u039F\u03A2\u03C5\u03CA\u03D1\u03D3\u03D7\u0402\u049F\u04B2\u04D5\u04DA\u04FD\u0502\u0529\u0532\u0565\u0602\u0738\u0742\u0757\u0762\u0769\u0802\u0807\u080A\u080A\u080C\u0837\u0839\u083A\u083E\u083E\u0841\u0857\u0862\u0878\u0882\u08A0\u08E2\u08F4\u08F6\u08F7\u0902\u0917\u0922\u093B\u0982\u09B9\u09C0\u09C1\u0A02\u0A02\u0A12\u0A15\u0A17\u0A19\u0A1B\u0A35\u0A62\u0A7E\u0A82\u0A9E\u0AC2\u0AC9\u0ACB\u0AE6\u0B02\u0B37\u0B42\u0B57\u0B62\u0B74\u0B82\u0B93\u0C02\u0C4A\u0C82\u0CB4\u0CC2\u0CF4\u1005\u1039\u1085\u10B1\u10D2\u10EA\u1105\u1128\u1152\u1174\u1178\u1178\u1185\u11B4\u11C3\u11C6\u11DC\u11DC\u11DE\u11DE\u1202\u1213\u1215\u122D\u1282\u1288\u128A\u128A\u128C\u128F\u1291\u129F\u12A1\u12AA\u12B2\u12E0\u1307\u130E\u1311\u1312\u1315\u132A\u132C\u1332\u1334\u1335\u1337\u133B\u133F\u133F\u1352\u1352\u135F\u1363\u1402\u1436\u1449\u144C\u1482\u14B1\u14C6\u14C7\u14C9\u14C9\u1582\u15B0\u15DA\u15DD\u1602\u1631\u1646\u1646\u1682\u16AC\u1702\u171B\u18A2\u18E1\u1901\u1901\u1AC2\u1AFA\u1C02\u1C0A\u1C0C\u1C30\u1C42\u1C42\u1C74\u1C91\u2002\u239B\u2402\u2470\u2482\u2545\u3002\u3430\u4402\u4648\u6802\u6A3A\u6A42\u6A60\u6AD2\u6AEF\u6B02\u6B31\u6B42\u6B45\u6B65\u6B79\u6B7F\u6B91\u6F02\u6F46\u6F52\u6F52\u6F95\u6FA1\u6FE2\u6FE2\u7002\u87EE\u8802\u8AF4\uB002\uB003\uBC02\uBC6C\uBC72\uBC7E\uBC82\uBC8A\uBC92\uBC9B\uD402\uD456\uD458\uD49E\uD4A0\uD4A1\uD4A4\uD4A4\uD4A7\uD4A8\uD4AB\uD4AE\uD4B0\uD4BB\uD4BD\uD4BD\uD4BF\uD4C5\uD4C7\uD507\uD509\uD50C\uD50F\uD516\uD518\uD51E\uD520\uD53B\uD53D\uD540\uD542\uD546\uD548\uD548';
  XPathLexer._serializedATNSegment1 = `\uD54C\uD552\uD554\uD6A7\uD6AA\uD6C2\uD6C4\uD6DC\uD6DE\uD6FC\uD6FE\uD716\uD718\uD736\uD738\uD750\uD752\uD770\uD772\uD78A\uD78C\uD7AA\uD7AC\uD7C4\uD7C6\uD7CD\uE802\uE8C6\uE902\uE945\uEE02\uEE05\uEE07\uEE21\uEE23\uEE24\uEE26\uEE26\uEE29\uEE29\uEE2B\uEE34\uEE36\uEE39\uEE3B\uEE3B\uEE3D\uEE3D\uEE44\uEE44\uEE49\uEE49\uEE4B\uEE4B\uEE4D\uEE4D\uEE4F\uEE51\uEE53\uEE54\uEE56\uEE56\uEE59\uEE59\uEE5B\uEE5B\uEE5D\uEE5D\uEE5F\uEE5F\uEE61\uEE61\uEE63\uEE64\uEE66\uEE66\uEE69\uEE6C\uEE6E\uEE74\uEE76\uEE79\uEE7B\uEE7E\uEE80\uEE80\uEE82\uEE8B\uEE8D\uEE9D\uEEA3\uEEA5\uEEA7\uEEAB\uEEAD\uEEBD\uA6D8\uA702\uB736\uB742\uB81F\uB822\uCEA3\uF802\uFA1F1\x07	\v\x07	\v\r%')\x071\x071\x071\x07,\b\x07#
 \b\r\x07"  !!#" #$\b$\f%&	&'(	()-\x07)*,\v+*,/-.-+.0/-01\x07)1 -`;
  XPathLexer._serializedATN = Utils.join([
    XPathLexer._serializedATNSegment0,
    XPathLexer._serializedATNSegment1
  ], "");
});
var XPathLexerErrorListener_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.XPathLexerErrorListener = void 0;
  class XPathLexerErrorListener {
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    }
  }
  __decorate([
    Decorators.Override
  ], XPathLexerErrorListener.prototype, "syntaxError", null);
  exports.XPathLexerErrorListener = XPathLexerErrorListener;
});
var XPathElement_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.XPathElement = void 0;
  class XPathElement {
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
var XPathRuleAnywhereElement_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.XPathRuleAnywhereElement = void 0;
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
var XPathRuleElement_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.XPathRuleElement = void 0;
  class XPathRuleElement extends XPathElement_1.XPathElement {
    constructor(ruleName, ruleIndex) {
      super(ruleName);
      this.ruleIndex = ruleIndex;
    }
    evaluate(t) {
      let nodes = [];
      for (let c of Trees_1.Trees.getChildren(t)) {
        if (c instanceof ParserRuleContext_1.ParserRuleContext) {
          if (c.ruleIndex === this.ruleIndex && !this.invert || c.ruleIndex !== this.ruleIndex && this.invert) {
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
var XPathTokenAnywhereElement_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.XPathTokenAnywhereElement = void 0;
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
var XPathTokenElement_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.XPathTokenElement = void 0;
  class XPathTokenElement extends XPathElement_1.XPathElement {
    constructor(tokenName, tokenType) {
      super(tokenName);
      this.tokenType = tokenType;
    }
    evaluate(t) {
      let nodes = [];
      for (let c of Trees_1.Trees.getChildren(t)) {
        if (c instanceof TerminalNode_1.TerminalNode) {
          if (c.symbol.type === this.tokenType && !this.invert || c.symbol.type !== this.tokenType && this.invert) {
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
var XPathWildcardAnywhereElement_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.XPathWildcardAnywhereElement = void 0;
  class XPathWildcardAnywhereElement extends XPathElement_1.XPathElement {
    constructor() {
      super(XPath_1.XPath.WILDCARD);
    }
    evaluate(t) {
      if (this.invert) {
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
var XPathWildcardElement_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.XPathWildcardElement = void 0;
  class XPathWildcardElement extends XPathElement_1.XPathElement {
    constructor() {
      super(XPath_1.XPath.WILDCARD);
    }
    evaluate(t) {
      let kids = [];
      if (this.invert) {
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
var XPath_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.XPath = void 0;
  class XPath {
    constructor(parser, path) {
      this.parser = parser;
      this.path = path;
      this.elements = this.split(path);
    }
    split(path) {
      let lexer = new XPathLexer_1.XPathLexer(CharStreams_1.CharStreams.fromString(path));
      lexer.recover = (e) => {
        throw e;
      };
      lexer.removeErrorListeners();
      lexer.addErrorListener(new XPathLexerErrorListener_1.XPathLexerErrorListener());
      let tokenStream = new CommonTokenStream_1.CommonTokenStream(lexer);
      try {
        tokenStream.fill();
      } catch (e) {
        if (e instanceof LexerNoViableAltException_1.LexerNoViableAltException) {
          let pos = lexer.charPositionInLine;
          let msg = "Invalid tokens or characters at index " + pos + " in path '" + path + "' -- " + e.message;
          throw new RangeError(msg);
        }
        throw e;
      }
      let tokens = tokenStream.getTokens();
      let elements = [];
      let n = tokens.length;
      let i = 0;
      loop:
        while (i < n) {
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
          return anywhere ? new XPathWildcardAnywhereElement_1.XPathWildcardAnywhereElement() : new XPathWildcardElement_1.XPathWildcardElement();
        case XPathLexer_1.XPathLexer.TOKEN_REF:
        case XPathLexer_1.XPathLexer.STRING:
          if (ttype === Token_1.Token.INVALID_TYPE) {
            throw new Error(word + " at index " + wordToken.startIndex + " isn't a valid token name");
          }
          return anywhere ? new XPathTokenAnywhereElement_1.XPathTokenAnywhereElement(word, ttype) : new XPathTokenElement_1.XPathTokenElement(word, ttype);
        default:
          if (ruleIndex === -1) {
            throw new Error(word + " at index " + wordToken.startIndex + " isn't a valid rule name");
          }
          return anywhere ? new XPathRuleAnywhereElement_1.XPathRuleAnywhereElement(word, ruleIndex) : new XPathRuleElement_1.XPathRuleElement(word, ruleIndex);
      }
    }
    static findAll(tree, xpath, parser) {
      let p = new XPath(parser, xpath);
      return p.evaluate(tree);
    }
    evaluate(t) {
      let dummyRoot = new ParserRuleContext_1.ParserRuleContext();
      dummyRoot.addChild(t);
      let work = new Set([dummyRoot]);
      let i = 0;
      while (i < this.elements.length) {
        let next = new Set();
        for (let node of work) {
          if (node.childCount > 0) {
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
  XPath.WILDCARD = "*";
  XPath.NOT = "!";
});
var ParseTreePattern_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ParseTreePattern = void 0;
  let ParseTreePattern = class ParseTreePattern {
    constructor(matcher, pattern, patternRuleIndex, patternTree) {
      this._matcher = matcher;
      this._patternRuleIndex = patternRuleIndex;
      this._pattern = pattern;
      this._patternTree = patternTree;
    }
    match(tree) {
      return this._matcher.match(tree, this);
    }
    matches(tree) {
      return this._matcher.match(tree, this).succeeded;
    }
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
    get matcher() {
      return this._matcher;
    }
    get pattern() {
      return this._pattern;
    }
    get patternRuleIndex() {
      return this._patternRuleIndex;
    }
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
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
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
var RuleTagToken_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RuleTagToken = void 0;
  let RuleTagToken = class RuleTagToken {
    constructor(ruleName, bypassTokenType, label) {
      if (ruleName == null || ruleName.length === 0) {
        throw new Error("ruleName cannot be null or empty.");
      }
      this._ruleName = ruleName;
      this.bypassTokenType = bypassTokenType;
      this._label = label;
    }
    get ruleName() {
      return this._ruleName;
    }
    get label() {
      return this._label;
    }
    get channel() {
      return Token_1.Token.DEFAULT_CHANNEL;
    }
    get text() {
      if (this._label != null) {
        return "<" + this._label + ":" + this._ruleName + ">";
      }
      return "<" + this._ruleName + ">";
    }
    get type() {
      return this.bypassTokenType;
    }
    get line() {
      return 0;
    }
    get charPositionInLine() {
      return -1;
    }
    get tokenIndex() {
      return -1;
    }
    get startIndex() {
      return -1;
    }
    get stopIndex() {
      return -1;
    }
    get tokenSource() {
      return void 0;
    }
    get inputStream() {
      return void 0;
    }
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
var Chunk_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Chunk = void 0;
  class Chunk {
  }
  exports.Chunk = Chunk;
});
var TagChunk_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TagChunk = void 0;
  class TagChunk extends Chunk_1.Chunk {
    constructor(tag, label) {
      super();
      if (tag == null || tag.length === 0) {
        throw new Error("tag cannot be null or empty");
      }
      this._tag = tag;
      this._label = label;
    }
    get tag() {
      return this._tag;
    }
    get label() {
      return this._label;
    }
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
var TextChunk_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TextChunk = void 0;
  let TextChunk = class TextChunk extends Chunk_1.Chunk {
    constructor(text) {
      super();
      if (text == null) {
        throw new Error("text cannot be null");
      }
      this._text = text;
    }
    get text() {
      return this._text;
    }
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
var TokenTagToken_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TokenTagToken = void 0;
  let TokenTagToken = class TokenTagToken extends CommonToken_1.CommonToken {
    constructor(tokenName, type, label) {
      super(type);
      this._tokenName = tokenName;
      this._label = label;
    }
    get tokenName() {
      return this._tokenName;
    }
    get label() {
      return this._label;
    }
    get text() {
      if (this._label != null) {
        return "<" + this._label + ":" + this._tokenName + ">";
      }
      return "<" + this._tokenName + ">";
    }
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
var ParseTreePatternMatcher_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ParseTreePatternMatcher = void 0;
  class ParseTreePatternMatcher {
    constructor(lexer, parser) {
      this.start = "<";
      this.stop = ">";
      this.escape = "\\";
      this.escapeRE = /\\/g;
      this._lexer = lexer;
      this._parser = parser;
    }
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
      } else {
        let labels = new MultiMap_1.MultiMap();
        let mismatchedNode = this.matchImpl(tree, pattern.patternTree, labels);
        return !mismatchedNode;
      }
    }
    match(tree, pattern, patternRuleIndex = 0) {
      if (typeof pattern === "string") {
        let p = this.compile(pattern, patternRuleIndex);
        return this.match(tree, p);
      } else {
        let labels = new MultiMap_1.MultiMap();
        let mismatchedNode = this.matchImpl(tree, pattern.patternTree, labels);
        return new ParseTreeMatch_1.ParseTreeMatch(tree, pattern, labels, mismatchedNode);
      }
    }
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
      } catch (e) {
        if (e instanceof ParseCancellationException_1.ParseCancellationException) {
          throw e.getCause();
        } else if (e instanceof RecognitionException_1.RecognitionException) {
          throw e;
        } else if (e instanceof Error) {
          throw new ParseTreePatternMatcher.CannotInvokeStartRule(e);
        } else {
          throw e;
        }
      }
      if (tokens.LA(1) !== Token_1.Token.EOF) {
        throw new ParseTreePatternMatcher.StartRuleDoesNotConsumeFullPattern();
      }
      return new ParseTreePattern_1.ParseTreePattern(this, pattern, patternRuleIndex, tree);
    }
    get lexer() {
      return this._lexer;
    }
    get parser() {
      return this._parser;
    }
    matchImpl(tree, patternTree, labels) {
      if (!tree) {
        throw new TypeError("tree cannot be null");
      }
      if (!patternTree) {
        throw new TypeError("patternTree cannot be null");
      }
      if (tree instanceof TerminalNode_1.TerminalNode && patternTree instanceof TerminalNode_1.TerminalNode) {
        let mismatchedNode;
        if (tree.symbol.type === patternTree.symbol.type) {
          if (patternTree.symbol instanceof TokenTagToken_1.TokenTagToken) {
            let tokenTagToken = patternTree.symbol;
            labels.map(tokenTagToken.tokenName, tree);
            const l = tokenTagToken.label;
            if (l) {
              labels.map(l, tree);
            }
          } else if (tree.text === patternTree.text)
            ;
          else {
            if (!mismatchedNode) {
              mismatchedNode = tree;
            }
          }
        } else {
          if (!mismatchedNode) {
            mismatchedNode = tree;
          }
        }
        return mismatchedNode;
      }
      if (tree instanceof ParserRuleContext_1.ParserRuleContext && patternTree instanceof ParserRuleContext_1.ParserRuleContext) {
        let mismatchedNode;
        let ruleTagToken = this.getRuleTagToken(patternTree);
        if (ruleTagToken) {
          if (tree.ruleContext.ruleIndex === patternTree.ruleContext.ruleIndex) {
            labels.map(ruleTagToken.ruleName, tree);
            const l = ruleTagToken.label;
            if (l) {
              labels.map(l, tree);
            }
          } else {
            if (!mismatchedNode) {
              mismatchedNode = tree;
            }
          }
          return mismatchedNode;
        }
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
      return tree;
    }
    getRuleTagToken(t) {
      if (t instanceof RuleNode_1.RuleNode) {
        if (t.childCount === 1 && t.getChild(0) instanceof TerminalNode_1.TerminalNode) {
          let c = t.getChild(0);
          if (c.symbol instanceof RuleTagToken_1.RuleTagToken) {
            return c.symbol;
          }
        }
      }
      return void 0;
    }
    tokenize(pattern) {
      let chunks = this.split(pattern);
      let tokens = [];
      for (let chunk of chunks) {
        if (chunk instanceof TagChunk_1.TagChunk) {
          let tagChunk = chunk;
          const firstChar = tagChunk.tag.substr(0, 1);
          if (firstChar === firstChar.toUpperCase()) {
            let ttype = this._parser.getTokenType(tagChunk.tag);
            if (ttype === Token_1.Token.INVALID_TYPE) {
              throw new Error("Unknown token " + tagChunk.tag + " in pattern: " + pattern);
            }
            let t = new TokenTagToken_1.TokenTagToken(tagChunk.tag, ttype, tagChunk.label);
            tokens.push(t);
          } else if (firstChar === firstChar.toLowerCase()) {
            let ruleIndex = this._parser.getRuleIndex(tagChunk.tag);
            if (ruleIndex === -1) {
              throw new Error("Unknown rule " + tagChunk.tag + " in pattern: " + pattern);
            }
            let ruleImaginaryTokenType = this._parser.getATNWithBypassAlts().ruleToTokenType[ruleIndex];
            tokens.push(new RuleTagToken_1.RuleTagToken(tagChunk.tag, ruleImaginaryTokenType, tagChunk.label));
          } else {
            throw new Error("invalid tag: " + tagChunk.tag + " in pattern: " + pattern);
          }
        } else {
          let textChunk = chunk;
          this._lexer.inputStream = CharStreams_1.CharStreams.fromString(textChunk.text);
          let t = this._lexer.nextToken();
          while (t.type !== Token_1.Token.EOF) {
            tokens.push(t);
            t = this._lexer.nextToken();
          }
        }
      }
      return tokens;
    }
    split(pattern) {
      let p = 0;
      let n = pattern.length;
      let chunks = [];
      let starts = [];
      let stops = [];
      while (p < n) {
        if (p === pattern.indexOf(this.escape + this.start, p)) {
          p += this.escape.length + this.start.length;
        } else if (p === pattern.indexOf(this.escape + this.stop, p)) {
          p += this.escape.length + this.stop.length;
        } else if (p === pattern.indexOf(this.start, p)) {
          starts.push(p);
          p += this.start.length;
        } else if (p === pattern.indexOf(this.stop, p)) {
          stops.push(p);
          p += this.stop.length;
        } else {
          p++;
        }
      }
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
      if (ntags === 0) {
        let text = pattern.substring(0, n);
        chunks.push(new TextChunk_1.TextChunk(text));
      }
      if (ntags > 0 && starts[0] > 0) {
        let text = pattern.substring(0, starts[0]);
        chunks.push(new TextChunk_1.TextChunk(text));
      }
      for (let i = 0; i < ntags; i++) {
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
          let text = pattern.substring(stops[i] + this.stop.length, starts[i + 1]);
          chunks.push(new TextChunk_1.TextChunk(text));
        }
      }
      if (ntags > 0) {
        let afterLastTag = stops[ntags - 1] + this.stop.length;
        if (afterLastTag < n) {
          let text = pattern.substring(afterLastTag, n);
          chunks.push(new TextChunk_1.TextChunk(text));
        }
      }
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
  (function(ParseTreePatternMatcher2) {
    class CannotInvokeStartRule extends Error {
      constructor(error) {
        super(`CannotInvokeStartRule: ${error}`);
        this.error = error;
      }
    }
    ParseTreePatternMatcher2.CannotInvokeStartRule = CannotInvokeStartRule;
    class StartRuleDoesNotConsumeFullPattern extends Error {
      constructor() {
        super("StartRuleDoesNotConsumeFullPattern");
      }
    }
    ParseTreePatternMatcher2.StartRuleDoesNotConsumeFullPattern = StartRuleDoesNotConsumeFullPattern;
  })(ParseTreePatternMatcher = exports.ParseTreePatternMatcher || (exports.ParseTreePatternMatcher = {}));
});
var DecisionEventInfo_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DecisionEventInfo = void 0;
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
var AmbiguityInfo_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AmbiguityInfo = void 0;
  let AmbiguityInfo = class AmbiguityInfo extends DecisionEventInfo_1.DecisionEventInfo {
    constructor(decision, state, ambigAlts, input, startIndex, stopIndex) {
      super(decision, state, input, startIndex, stopIndex, state.useContext);
      this.ambigAlts = ambigAlts;
    }
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
var ContextSensitivityInfo_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ContextSensitivityInfo = void 0;
  let ContextSensitivityInfo = class ContextSensitivityInfo extends DecisionEventInfo_1.DecisionEventInfo {
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
var DecisionInfo_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DecisionInfo = void 0;
  class DecisionInfo {
    constructor(decision) {
      this.invocations = 0;
      this.timeInPrediction = 0;
      this.SLL_TotalLook = 0;
      this.SLL_MinLook = 0;
      this.SLL_MaxLook = 0;
      this.LL_TotalLook = 0;
      this.LL_MinLook = 0;
      this.LL_MaxLook = 0;
      this.contextSensitivities = [];
      this.errors = [];
      this.ambiguities = [];
      this.predicateEvals = [];
      this.SLL_ATNTransitions = 0;
      this.SLL_DFATransitions = 0;
      this.LL_Fallback = 0;
      this.LL_ATNTransitions = 0;
      this.LL_DFATransitions = 0;
      this.decision = decision;
    }
    toString() {
      return "{decision=" + this.decision + ", contextSensitivities=" + this.contextSensitivities.length + ", errors=" + this.errors.length + ", ambiguities=" + this.ambiguities.length + ", SLL_lookahead=" + this.SLL_TotalLook + ", SLL_ATNTransitions=" + this.SLL_ATNTransitions + ", SLL_DFATransitions=" + this.SLL_DFATransitions + ", LL_Fallback=" + this.LL_Fallback + ", LL_lookahead=" + this.LL_TotalLook + ", LL_ATNTransitions=" + this.LL_ATNTransitions + "}";
    }
  }
  __decorate([
    Decorators.Override
  ], DecisionInfo.prototype, "toString", null);
  exports.DecisionInfo = DecisionInfo;
});
var ErrorInfo_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ErrorInfo = void 0;
  let ErrorInfo = class ErrorInfo extends DecisionEventInfo_1.DecisionEventInfo {
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
var LookaheadEventInfo_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LookaheadEventInfo = void 0;
  let LookaheadEventInfo = class LookaheadEventInfo extends DecisionEventInfo_1.DecisionEventInfo {
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
var PredicateEvalInfo_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PredicateEvalInfo = void 0;
  let PredicateEvalInfo = class PredicateEvalInfo extends DecisionEventInfo_1.DecisionEventInfo {
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
var ProfilingATNSimulator_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ProfilingATNSimulator = void 0;
  class ProfilingATNSimulator extends ParserATNSimulator_1.ParserATNSimulator {
    constructor(parser) {
      super(parser.interpreter.atn, parser);
      this._startIndex = 0;
      this._sllStopIndex = 0;
      this._llStopIndex = 0;
      this.currentDecision = 0;
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
      if (useContext !== void 0) {
        return super.adaptivePredict(input, decision, outerContext, useContext);
      }
      try {
        this._input = input;
        this._startIndex = input.index;
        this._sllStopIndex = this._startIndex - 1;
        this._llStopIndex = -1;
        this.currentDecision = decision;
        this.currentState = void 0;
        this.conflictingAltResolvedBySLL = ATN_1.ATN.INVALID_ALT_NUMBER;
        let start = process.hrtime();
        let alt = super.adaptivePredict(input, decision, outerContext);
        let stop = process.hrtime();
        let nanoseconds = (stop[0] - start[0]) * 1e9;
        if (nanoseconds === 0) {
          nanoseconds = stop[1] - start[1];
        } else {
          nanoseconds += 1e9 - start[1] + stop[1];
        }
        this.decisions[decision].timeInPrediction += nanoseconds;
        this.decisions[decision].invocations++;
        let SLL_k = this._sllStopIndex - this._startIndex + 1;
        this.decisions[decision].SLL_TotalLook += SLL_k;
        this.decisions[decision].SLL_MinLook = this.decisions[decision].SLL_MinLook === 0 ? SLL_k : Math.min(this.decisions[decision].SLL_MinLook, SLL_k);
        if (SLL_k > this.decisions[decision].SLL_MaxLook) {
          this.decisions[decision].SLL_MaxLook = SLL_k;
          this.decisions[decision].SLL_MaxLookEvent = new LookaheadEventInfo_1.LookaheadEventInfo(decision, void 0, alt, input, this._startIndex, this._sllStopIndex, false);
        }
        if (this._llStopIndex >= 0) {
          let LL_k = this._llStopIndex - this._startIndex + 1;
          this.decisions[decision].LL_TotalLook += LL_k;
          this.decisions[decision].LL_MinLook = this.decisions[decision].LL_MinLook === 0 ? LL_k : Math.min(this.decisions[decision].LL_MinLook, LL_k);
          if (LL_k > this.decisions[decision].LL_MaxLook) {
            this.decisions[decision].LL_MaxLook = LL_k;
            this.decisions[decision].LL_MaxLookEvent = new LookaheadEventInfo_1.LookaheadEventInfo(decision, void 0, alt, input, this._startIndex, this._llStopIndex, true);
          }
        }
        return alt;
      } finally {
        this._input = void 0;
        this.currentDecision = -1;
      }
    }
    getStartState(dfa, input, outerContext, useContext) {
      let state = super.getStartState(dfa, input, outerContext, useContext);
      this.currentState = state;
      return state;
    }
    computeStartState(dfa, globalContext2, useContext) {
      let state = super.computeStartState(dfa, globalContext2, useContext);
      this.currentState = state;
      return state;
    }
    computeReachSet(dfa, previous, t, contextCache) {
      if (this._input === void 0) {
        throw new Error("Invalid state");
      }
      let reachState = super.computeReachSet(dfa, previous, t, contextCache);
      if (reachState == null) {
        this.decisions[this.currentDecision].errors.push(new ErrorInfo_1.ErrorInfo(this.currentDecision, previous, this._input, this._startIndex, this._input.index));
      }
      this.currentState = reachState;
      return reachState;
    }
    getExistingTargetState(previousD, t) {
      if (this.currentState === void 0 || this._input === void 0) {
        throw new Error("Invalid state");
      }
      if (this.currentState.useContext) {
        this._llStopIndex = this._input.index;
      } else {
        this._sllStopIndex = this._input.index;
      }
      let existingTargetState = super.getExistingTargetState(previousD, t);
      if (existingTargetState != null) {
        this.currentState = new SimulatorState_1.SimulatorState(this.currentState.outerContext, existingTargetState, this.currentState.useContext, this.currentState.remainingOuterContext);
        if (this.currentState.useContext) {
          this.decisions[this.currentDecision].LL_DFATransitions++;
        } else {
          this.decisions[this.currentDecision].SLL_DFATransitions++;
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
      } else {
        this.decisions[this.currentDecision].SLL_ATNTransitions++;
      }
      return targetState;
    }
    evalSemanticContextImpl(pred, parserCallStack, alt) {
      if (this.currentState === void 0 || this._input === void 0) {
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
      if (this._input === void 0) {
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
      } else {
        this.conflictingAltResolvedBySLL = conflictState.s0.configs.getRepresentedAlternatives().nextSetBit(0);
      }
      this.decisions[this.currentDecision].LL_Fallback++;
      super.reportAttemptingFullContext(dfa, conflictingAlts, conflictState, startIndex, stopIndex);
    }
    reportAmbiguity(dfa, D, startIndex, stopIndex, exact, ambigAlts, configs) {
      if (this.currentState === void 0 || this._input === void 0) {
        throw new Error("Invalid state");
      }
      let prediction;
      if (ambigAlts != null) {
        prediction = ambigAlts.nextSetBit(0);
      } else {
        prediction = configs.getRepresentedAlternatives().nextSetBit(0);
      }
      if (this.conflictingAltResolvedBySLL !== ATN_1.ATN.INVALID_ALT_NUMBER && prediction !== this.conflictingAltResolvedBySLL) {
        this.decisions[this.currentDecision].contextSensitivities.push(new ContextSensitivityInfo_1.ContextSensitivityInfo(this.currentDecision, this.currentState, this._input, startIndex, stopIndex));
      }
      this.decisions[this.currentDecision].ambiguities.push(new AmbiguityInfo_1.AmbiguityInfo(this.currentDecision, this.currentState, ambigAlts, this._input, startIndex, stopIndex));
      super.reportAmbiguity(dfa, D, startIndex, stopIndex, exact, ambigAlts, configs);
    }
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
    __param(0, Decorators.NotNull),
    __param(5, Decorators.NotNull),
    __param(6, Decorators.NotNull)
  ], ProfilingATNSimulator.prototype, "reportAmbiguity", null);
  exports.ProfilingATNSimulator = ProfilingATNSimulator;
});
var Parser_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var __awaiter = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Parser = void 0;
  class TraceListener {
    constructor(ruleNames, tokenStream) {
      this.ruleNames = ruleNames;
      this.tokenStream = tokenStream;
    }
    enterEveryRule(ctx) {
      console.log("enter   " + this.ruleNames[ctx.ruleIndex] + ", LT(1)=" + this.tokenStream.LT(1).text);
    }
    exitEveryRule(ctx) {
      console.log("exit    " + this.ruleNames[ctx.ruleIndex] + ", LT(1)=" + this.tokenStream.LT(1).text);
    }
    visitErrorNode(node) {
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
  class Parser2 extends Recognizer_1.Recognizer {
    constructor(input) {
      super();
      this._errHandler = new DefaultErrorStrategy_1.DefaultErrorStrategy();
      this._precedenceStack = new IntegerStack_1.IntegerStack();
      this._buildParseTrees = true;
      this._parseListeners = [];
      this._syntaxErrors = 0;
      this.matchedEOF = false;
      this._precedenceStack.push(0);
      this.inputStream = input;
    }
    reset(resetInput) {
      if (resetInput === void 0 || resetInput) {
        this.inputStream.seek(0);
      }
      this._errHandler.reset(this);
      this._ctx = void 0;
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
    match(ttype) {
      let t = this.currentToken;
      if (t.type === ttype) {
        if (ttype === Token_1.Token.EOF) {
          this.matchedEOF = true;
        }
        this._errHandler.reportMatch(this);
        this.consume();
      } else {
        t = this._errHandler.recoverInline(this);
        if (this._buildParseTrees && t.tokenIndex === -1) {
          this._ctx.addErrorNode(this.createErrorNode(this._ctx, t));
        }
      }
      return t;
    }
    matchWildcard() {
      let t = this.currentToken;
      if (t.type > 0) {
        this._errHandler.reportMatch(this);
        this.consume();
      } else {
        t = this._errHandler.recoverInline(this);
        if (this._buildParseTrees && t.tokenIndex === -1) {
          this._ctx.addErrorNode(this.createErrorNode(this._ctx, t));
        }
      }
      return t;
    }
    set buildParseTree(buildParseTrees) {
      this._buildParseTrees = buildParseTrees;
    }
    get buildParseTree() {
      return this._buildParseTrees;
    }
    getParseListeners() {
      return this._parseListeners;
    }
    addParseListener(listener) {
      if (listener == null) {
        throw new TypeError("listener cannot be null");
      }
      this._parseListeners.push(listener);
    }
    removeParseListener(listener) {
      let index = this._parseListeners.findIndex((l) => l === listener);
      if (index !== -1) {
        this._parseListeners.splice(index, 1);
      }
    }
    removeParseListeners() {
      this._parseListeners.length = 0;
    }
    triggerEnterRuleEvent() {
      for (let listener of this._parseListeners) {
        if (listener.enterEveryRule) {
          listener.enterEveryRule(this._ctx);
        }
        this._ctx.enterRule(listener);
      }
    }
    triggerExitRuleEvent() {
      for (let i = this._parseListeners.length - 1; i >= 0; i--) {
        let listener = this._parseListeners[i];
        this._ctx.exitRule(listener);
        if (listener.exitEveryRule) {
          listener.exitEveryRule(this._ctx);
        }
      }
    }
    get numberOfSyntaxErrors() {
      return this._syntaxErrors;
    }
    get tokenFactory() {
      return this._input.tokenSource.tokenFactory;
    }
    getATNWithBypassAlts() {
      let serializedAtn = this.serializedATN;
      if (serializedAtn == null) {
        throw new Error("The current parser does not support an ATN with bypass alternatives.");
      }
      let result = Parser2.bypassAltsAtnCache.get(serializedAtn);
      if (result == null) {
        let deserializationOptions = new ATNDeserializationOptions_1.ATNDeserializationOptions();
        deserializationOptions.isGenerateRuleBypassTransitions = true;
        result = new ATNDeserializer_1.ATNDeserializer(deserializationOptions).deserialize(Utils.toCharArray(serializedAtn));
        Parser2.bypassAltsAtnCache.set(serializedAtn, result);
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
    set inputStream(input) {
      this.reset(false);
      this._input = input;
    }
    get currentToken() {
      return this._input.LT(1);
    }
    notifyErrorListeners(msg, offendingToken, e) {
      if (offendingToken === void 0) {
        offendingToken = this.currentToken;
      } else if (offendingToken === null) {
        offendingToken = void 0;
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
    consume() {
      let o = this.currentToken;
      if (o.type !== Parser2.EOF) {
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
        } else {
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
    createTerminalNode(parent, t) {
      return new TerminalNode_1.TerminalNode(t);
    }
    createErrorNode(parent, t) {
      return new ErrorNode_1.ErrorNode(t);
    }
    addContextToParseTree() {
      let parent = this._ctx._parent;
      if (parent != null) {
        parent.addChild(this._ctx);
      }
    }
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
        this._ctx._stop = this._input.LT(1);
      } else {
        this._ctx._stop = this._input.tryLT(-1);
      }
      this.triggerExitRuleEvent();
      this.state = this._ctx.invokingState;
      this._ctx = this._ctx._parent;
    }
    enterOuterAlt(localctx, altNum) {
      localctx.altNumber = altNum;
      if (this._buildParseTrees && this._ctx !== localctx) {
        let parent = this._ctx._parent;
        if (parent != null) {
          parent.removeLastChild();
          parent.addChild(localctx);
        }
      }
      this._ctx = localctx;
    }
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
      this.triggerEnterRuleEvent();
    }
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
      this.triggerEnterRuleEvent();
    }
    unrollRecursionContexts(_parentctx) {
      this._precedenceStack.pop();
      this._ctx._stop = this._input.tryLT(-1);
      let retctx = this._ctx;
      if (this._parseListeners.length > 0) {
        while (this._ctx !== _parentctx) {
          this.triggerExitRuleEvent();
          this._ctx = this._ctx._parent;
        }
      } else {
        this._ctx = _parentctx;
      }
      retctx._parent = _parentctx;
      if (this._buildParseTrees && _parentctx != null) {
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
      return false;
    }
    isExpectedToken(symbol) {
      let atn = this.interpreter.atn;
      let ctx = this._ctx;
      let s = atn.states[this.state];
      let following = atn.nextTokens(s);
      if (following.contains(symbol)) {
        return true;
      }
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
    getExpectedTokens() {
      return this.atn.getExpectedTokens(this.state, this.context);
    }
    getExpectedTokensWithinCurrentRule() {
      let atn = this.interpreter.atn;
      let s = atn.states[this.state];
      return atn.nextTokens(s);
    }
    getRuleIndex(ruleName) {
      let ruleIndex = this.getRuleIndexMap().get(ruleName);
      if (ruleIndex != null) {
        return ruleIndex;
      }
      return -1;
    }
    get ruleContext() {
      return this._ctx;
    }
    getRuleInvocationStack(ctx = this._ctx) {
      let p = ctx;
      let ruleNames = this.ruleNames;
      let stack = [];
      while (p != null) {
        let ruleIndex = p.ruleIndex;
        if (ruleIndex < 0) {
          stack.push("n/a");
        } else {
          stack.push(ruleNames[ruleIndex]);
        }
        p = p._parent;
      }
      return stack;
    }
    getDFAStrings() {
      let s = [];
      for (let dfa of this._interp.atn.decisionToDFA) {
        s.push(dfa.toString(this.vocabulary, this.ruleNames));
      }
      return s;
    }
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
        return void 0;
      });
    }
    setProfile(profile) {
      return __awaiter(this, void 0, void 0, function* () {
        let m = yield Promise.resolve().then(() => ProfilingATNSimulator_1);
        let interp = this.interpreter;
        if (profile) {
          if (!(interp instanceof m.ProfilingATNSimulator)) {
            this.interpreter = new m.ProfilingATNSimulator(this);
          }
        } else if (interp instanceof m.ProfilingATNSimulator) {
          this.interpreter = new ParserATNSimulator_1.ParserATNSimulator(this.atn, this);
        }
        this.interpreter.setPredictionMode(interp.getPredictionMode());
      });
    }
    set isTrace(trace) {
      if (!trace) {
        if (this._tracer) {
          this.removeParseListener(this._tracer);
          this._tracer = void 0;
        }
      } else {
        if (this._tracer) {
          this.removeParseListener(this._tracer);
        } else {
          this._tracer = new TraceListener(this.ruleNames, this._input);
        }
        this.addParseListener(this._tracer);
      }
    }
    get isTrace() {
      return this._tracer != null;
    }
  }
  Parser2.bypassAltsAtnCache = new Map();
  __decorate([
    Decorators.NotNull
  ], Parser2.prototype, "_errHandler", void 0);
  __decorate([
    Decorators.NotNull
  ], Parser2.prototype, "match", null);
  __decorate([
    Decorators.NotNull
  ], Parser2.prototype, "matchWildcard", null);
  __decorate([
    Decorators.NotNull
  ], Parser2.prototype, "getParseListeners", null);
  __decorate([
    __param(0, Decorators.NotNull)
  ], Parser2.prototype, "addParseListener", null);
  __decorate([
    Decorators.NotNull
  ], Parser2.prototype, "getATNWithBypassAlts", null);
  __decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
  ], Parser2.prototype, "errorHandler", null);
  __decorate([
    Decorators.Override
  ], Parser2.prototype, "inputStream", null);
  __decorate([
    Decorators.NotNull
  ], Parser2.prototype, "currentToken", null);
  __decorate([
    __param(0, Decorators.NotNull)
  ], Parser2.prototype, "enterRule", null);
  __decorate([
    Decorators.Override,
    __param(0, Decorators.Nullable)
  ], Parser2.prototype, "precpred", null);
  __decorate([
    Decorators.Override
  ], Parser2.prototype, "getErrorListenerDispatch", null);
  __decorate([
    Decorators.NotNull
  ], Parser2.prototype, "getExpectedTokens", null);
  __decorate([
    Decorators.NotNull
  ], Parser2.prototype, "getExpectedTokensWithinCurrentRule", null);
  __decorate([
    Decorators.Override
  ], Parser2.prototype, "parseInfo", null);
  exports.Parser = Parser2;
});
var NoViableAltException_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NoViableAltException = void 0;
  class NoViableAltException2 extends RecognitionException_1.RecognitionException {
    constructor(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx) {
      if (recognizer instanceof Parser_1.Parser) {
        if (input === void 0) {
          input = recognizer.inputStream;
        }
        if (startToken === void 0) {
          startToken = recognizer.currentToken;
        }
        if (offendingToken === void 0) {
          offendingToken = recognizer.currentToken;
        }
        if (ctx === void 0) {
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
  ], NoViableAltException2.prototype, "_startToken", void 0);
  exports.NoViableAltException = NoViableAltException2;
});
var DefaultErrorStrategy_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DefaultErrorStrategy = void 0;
  class DefaultErrorStrategy2 {
    constructor() {
      this.errorRecoveryMode = false;
      this.lastErrorIndex = -1;
      this.nextTokensState = ATNState_1.ATNState.INVALID_STATE_NUMBER;
    }
    reset(recognizer) {
      this.endErrorCondition(recognizer);
    }
    beginErrorCondition(recognizer) {
      this.errorRecoveryMode = true;
    }
    inErrorRecoveryMode(recognizer) {
      return this.errorRecoveryMode;
    }
    endErrorCondition(recognizer) {
      this.errorRecoveryMode = false;
      this.lastErrorStates = void 0;
      this.lastErrorIndex = -1;
    }
    reportMatch(recognizer) {
      this.endErrorCondition(recognizer);
    }
    reportError(recognizer, e) {
      if (this.inErrorRecoveryMode(recognizer)) {
        return;
      }
      this.beginErrorCondition(recognizer);
      if (e instanceof NoViableAltException_1.NoViableAltException) {
        this.reportNoViableAlternative(recognizer, e);
      } else if (e instanceof InputMismatchException_1.InputMismatchException) {
        this.reportInputMismatch(recognizer, e);
      } else if (e instanceof FailedPredicateException_1.FailedPredicateException) {
        this.reportFailedPredicate(recognizer, e);
      } else {
        console.error(`unknown recognition error type: ${e}`);
        this.notifyErrorListeners(recognizer, e.toString(), e);
      }
    }
    notifyErrorListeners(recognizer, message, e) {
      let offendingToken = e.getOffendingToken(recognizer);
      if (offendingToken === void 0) {
        offendingToken = null;
      }
      recognizer.notifyErrorListeners(message, offendingToken, e);
    }
    recover(recognizer, e) {
      if (this.lastErrorIndex === recognizer.inputStream.index && this.lastErrorStates && this.lastErrorStates.contains(recognizer.state)) {
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
    sync(recognizer) {
      let s = recognizer.interpreter.atn.states[recognizer.state];
      if (this.inErrorRecoveryMode(recognizer)) {
        return;
      }
      let tokens = recognizer.inputStream;
      let la = tokens.LA(1);
      let nextTokens = recognizer.atn.nextTokens(s);
      if (nextTokens.contains(la)) {
        this.nextTokensContext = void 0;
        this.nextTokensState = ATNState_1.ATNState.INVALID_STATE_NUMBER;
        return;
      }
      if (nextTokens.contains(Token_1.Token.EPSILON)) {
        if (this.nextTokensContext === void 0) {
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
          if (this.singleTokenDeletion(recognizer)) {
            return;
          }
          throw new InputMismatchException_1.InputMismatchException(recognizer);
        case ATNStateType_1.ATNStateType.PLUS_LOOP_BACK:
        case ATNStateType_1.ATNStateType.STAR_LOOP_BACK:
          this.reportUnwantedToken(recognizer);
          let expecting = recognizer.getExpectedTokens();
          let whatFollowsLoopIterationOrRule = expecting.or(this.getErrorRecoverySet(recognizer));
          this.consumeUntil(recognizer, whatFollowsLoopIterationOrRule);
          break;
      }
    }
    reportNoViableAlternative(recognizer, e) {
      let tokens = recognizer.inputStream;
      let input;
      if (tokens) {
        if (e.startToken.type === Token_1.Token.EOF) {
          input = "<EOF>";
        } else {
          input = tokens.getTextFromRange(e.startToken, e.getOffendingToken());
        }
      } else {
        input = "<unknown input>";
      }
      let msg = "no viable alternative at input " + this.escapeWSAndQuote(input);
      this.notifyErrorListeners(recognizer, msg, e);
    }
    reportInputMismatch(recognizer, e) {
      let expected = e.expectedTokens;
      let expectedString = expected ? expected.toStringVocabulary(recognizer.vocabulary) : "";
      let msg = "mismatched input " + this.getTokenErrorDisplay(e.getOffendingToken(recognizer)) + " expecting " + expectedString;
      this.notifyErrorListeners(recognizer, msg, e);
    }
    reportFailedPredicate(recognizer, e) {
      let ruleName = recognizer.ruleNames[recognizer.context.ruleIndex];
      let msg = "rule " + ruleName + " " + e.message;
      this.notifyErrorListeners(recognizer, msg, e);
    }
    reportUnwantedToken(recognizer) {
      if (this.inErrorRecoveryMode(recognizer)) {
        return;
      }
      this.beginErrorCondition(recognizer);
      let t = recognizer.currentToken;
      let tokenName = this.getTokenErrorDisplay(t);
      let expecting = this.getExpectedTokens(recognizer);
      let msg = "extraneous input " + tokenName + " expecting " + expecting.toStringVocabulary(recognizer.vocabulary);
      recognizer.notifyErrorListeners(msg, t, void 0);
    }
    reportMissingToken(recognizer) {
      if (this.inErrorRecoveryMode(recognizer)) {
        return;
      }
      this.beginErrorCondition(recognizer);
      let t = recognizer.currentToken;
      let expecting = this.getExpectedTokens(recognizer);
      let msg = "missing " + expecting.toStringVocabulary(recognizer.vocabulary) + " at " + this.getTokenErrorDisplay(t);
      recognizer.notifyErrorListeners(msg, t, void 0);
    }
    recoverInline(recognizer) {
      let matchedSymbol = this.singleTokenDeletion(recognizer);
      if (matchedSymbol) {
        recognizer.consume();
        return matchedSymbol;
      }
      if (this.singleTokenInsertion(recognizer)) {
        return this.getMissingSymbol(recognizer);
      }
      if (this.nextTokensContext === void 0) {
        throw new InputMismatchException_1.InputMismatchException(recognizer);
      } else {
        throw new InputMismatchException_1.InputMismatchException(recognizer, this.nextTokensState, this.nextTokensContext);
      }
    }
    singleTokenInsertion(recognizer) {
      let currentSymbolType = recognizer.inputStream.LA(1);
      let currentState = recognizer.interpreter.atn.states[recognizer.state];
      let next = currentState.transition(0).target;
      let atn = recognizer.interpreter.atn;
      let expectingAtLL2 = atn.nextTokens(next, PredictionContext_1.PredictionContext.fromRuleContext(atn, recognizer.context));
      if (expectingAtLL2.contains(currentSymbolType)) {
        this.reportMissingToken(recognizer);
        return true;
      }
      return false;
    }
    singleTokenDeletion(recognizer) {
      let nextTokenType = recognizer.inputStream.LA(2);
      let expecting = this.getExpectedTokens(recognizer);
      if (expecting.contains(nextTokenType)) {
        this.reportUnwantedToken(recognizer);
        recognizer.consume();
        let matchedSymbol = recognizer.currentToken;
        this.reportMatch(recognizer);
        return matchedSymbol;
      }
      return void 0;
    }
    getMissingSymbol(recognizer) {
      let currentSymbol = recognizer.currentToken;
      let expecting = this.getExpectedTokens(recognizer);
      let expectedTokenType = Token_1.Token.INVALID_TYPE;
      if (!expecting.isNil) {
        expectedTokenType = expecting.minElement;
      }
      let tokenText;
      if (expectedTokenType === Token_1.Token.EOF) {
        tokenText = "<missing EOF>";
      } else {
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
      let stream = x ? x.inputStream : void 0;
      return factory.create({source: tokenSource, stream}, expectedTokenType, tokenText, Token_1.Token.DEFAULT_CHANNEL, -1, -1, current.line, current.charPositionInLine);
    }
    getExpectedTokens(recognizer) {
      return recognizer.getExpectedTokens();
    }
    getTokenErrorDisplay(t) {
      if (!t) {
        return "<no token>";
      }
      let s = this.getSymbolText(t);
      if (!s) {
        if (this.getSymbolType(t) === Token_1.Token.EOF) {
          s = "<EOF>";
        } else {
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
      s = s.replace("\n", "\\n");
      s = s.replace("\r", "\\r");
      s = s.replace("	", "\\t");
      return "'" + s + "'";
    }
    getErrorRecoverySet(recognizer) {
      let atn = recognizer.interpreter.atn;
      let ctx = recognizer.context;
      let recoverSet = new IntervalSet_1.IntervalSet();
      while (ctx && ctx.invokingState >= 0) {
        let invokingState = atn.states[ctx.invokingState];
        let rt = invokingState.transition(0);
        let follow = atn.nextTokens(rt.followState);
        recoverSet.addAll(follow);
        ctx = ctx._parent;
      }
      recoverSet.remove(Token_1.Token.EPSILON);
      return recoverSet;
    }
    consumeUntil(recognizer, set) {
      let ttype = recognizer.inputStream.LA(1);
      while (ttype !== Token_1.Token.EOF && !set.contains(ttype)) {
        recognizer.consume();
        ttype = recognizer.inputStream.LA(1);
      }
    }
  }
  __decorate([
    Decorators.Override
  ], DefaultErrorStrategy2.prototype, "reset", null);
  __decorate([
    __param(0, Decorators.NotNull)
  ], DefaultErrorStrategy2.prototype, "beginErrorCondition", null);
  __decorate([
    Decorators.Override
  ], DefaultErrorStrategy2.prototype, "inErrorRecoveryMode", null);
  __decorate([
    __param(0, Decorators.NotNull)
  ], DefaultErrorStrategy2.prototype, "endErrorCondition", null);
  __decorate([
    Decorators.Override
  ], DefaultErrorStrategy2.prototype, "reportMatch", null);
  __decorate([
    Decorators.Override
  ], DefaultErrorStrategy2.prototype, "reportError", null);
  __decorate([
    __param(0, Decorators.NotNull)
  ], DefaultErrorStrategy2.prototype, "notifyErrorListeners", null);
  __decorate([
    Decorators.Override
  ], DefaultErrorStrategy2.prototype, "recover", null);
  __decorate([
    Decorators.Override
  ], DefaultErrorStrategy2.prototype, "sync", null);
  __decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
  ], DefaultErrorStrategy2.prototype, "reportNoViableAlternative", null);
  __decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
  ], DefaultErrorStrategy2.prototype, "reportInputMismatch", null);
  __decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
  ], DefaultErrorStrategy2.prototype, "reportFailedPredicate", null);
  __decorate([
    __param(0, Decorators.NotNull)
  ], DefaultErrorStrategy2.prototype, "reportUnwantedToken", null);
  __decorate([
    __param(0, Decorators.NotNull)
  ], DefaultErrorStrategy2.prototype, "reportMissingToken", null);
  __decorate([
    Decorators.Override
  ], DefaultErrorStrategy2.prototype, "recoverInline", null);
  __decorate([
    __param(0, Decorators.NotNull)
  ], DefaultErrorStrategy2.prototype, "singleTokenInsertion", null);
  __decorate([
    __param(0, Decorators.NotNull)
  ], DefaultErrorStrategy2.prototype, "singleTokenDeletion", null);
  __decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
  ], DefaultErrorStrategy2.prototype, "getMissingSymbol", null);
  __decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
  ], DefaultErrorStrategy2.prototype, "getExpectedTokens", null);
  __decorate([
    __param(0, Decorators.NotNull)
  ], DefaultErrorStrategy2.prototype, "getSymbolText", null);
  __decorate([
    __param(0, Decorators.NotNull)
  ], DefaultErrorStrategy2.prototype, "getSymbolType", null);
  __decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
  ], DefaultErrorStrategy2.prototype, "escapeWSAndQuote", null);
  __decorate([
    Decorators.NotNull,
    __param(0, Decorators.NotNull)
  ], DefaultErrorStrategy2.prototype, "getErrorRecoverySet", null);
  __decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
  ], DefaultErrorStrategy2.prototype, "consumeUntil", null);
  exports.DefaultErrorStrategy = DefaultErrorStrategy2;
});
var BailErrorStrategy_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BailErrorStrategy = void 0;
  class BailErrorStrategy2 extends DefaultErrorStrategy_1.DefaultErrorStrategy {
    recover(recognizer, e) {
      for (let context = recognizer.context; context; context = context.parent) {
        context.exception = e;
      }
      throw new ParseCancellationException_1.ParseCancellationException(e);
    }
    recoverInline(recognizer) {
      let e = new InputMismatchException_1.InputMismatchException(recognizer);
      for (let context = recognizer.context; context; context = context.parent) {
        context.exception = e;
      }
      throw new ParseCancellationException_1.ParseCancellationException(e);
    }
    sync(recognizer) {
    }
  }
  __decorate([
    Decorators.Override
  ], BailErrorStrategy2.prototype, "recover", null);
  __decorate([
    Decorators.Override
  ], BailErrorStrategy2.prototype, "recoverInline", null);
  __decorate([
    Decorators.Override
  ], BailErrorStrategy2.prototype, "sync", null);
  exports.BailErrorStrategy = BailErrorStrategy2;
});
var CharStream = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
});
var Dependents_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Dependents = void 0;
  (function(Dependents2) {
    Dependents2[Dependents2["SELF"] = 0] = "SELF";
    Dependents2[Dependents2["PARENTS"] = 1] = "PARENTS";
    Dependents2[Dependents2["CHILDREN"] = 2] = "CHILDREN";
    Dependents2[Dependents2["ANCESTORS"] = 3] = "ANCESTORS";
    Dependents2[Dependents2["DESCENDANTS"] = 4] = "DESCENDANTS";
    Dependents2[Dependents2["SIBLINGS"] = 5] = "SIBLINGS";
    Dependents2[Dependents2["PRECEEDING_SIBLINGS"] = 6] = "PRECEEDING_SIBLINGS";
    Dependents2[Dependents2["FOLLOWING_SIBLINGS"] = 7] = "FOLLOWING_SIBLINGS";
    Dependents2[Dependents2["PRECEEDING"] = 8] = "PRECEEDING";
    Dependents2[Dependents2["FOLLOWING"] = 9] = "FOLLOWING";
  })(exports.Dependents || (exports.Dependents = {}));
});
var DiagnosticErrorListener_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DiagnosticErrorListener = void 0;
  class DiagnosticErrorListener2 {
    constructor(exactOnly = true) {
      this.exactOnly = exactOnly;
      this.exactOnly = exactOnly;
    }
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
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
    getConflictingAlts(reportedAlts, configs) {
      if (reportedAlts != null) {
        return reportedAlts;
      }
      let result = new BitSet_1.BitSet();
      for (let config2 of configs) {
        result.set(config2.alt);
      }
      return result;
    }
  }
  __decorate([
    Decorators.Override
  ], DiagnosticErrorListener2.prototype, "syntaxError", null);
  __decorate([
    Decorators.Override,
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(6, Decorators.NotNull)
  ], DiagnosticErrorListener2.prototype, "reportAmbiguity", null);
  __decorate([
    Decorators.Override,
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(5, Decorators.NotNull)
  ], DiagnosticErrorListener2.prototype, "reportAttemptingFullContext", null);
  __decorate([
    Decorators.Override,
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull),
    __param(5, Decorators.NotNull)
  ], DiagnosticErrorListener2.prototype, "reportContextSensitivity", null);
  __decorate([
    __param(0, Decorators.NotNull),
    __param(1, Decorators.NotNull)
  ], DiagnosticErrorListener2.prototype, "getDecisionDescription", null);
  __decorate([
    Decorators.NotNull,
    __param(1, Decorators.NotNull)
  ], DiagnosticErrorListener2.prototype, "getConflictingAlts", null);
  exports.DiagnosticErrorListener = DiagnosticErrorListener2;
});
var LexerInterpreter_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __param = commonjsGlobal && commonjsGlobal.__param || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LexerInterpreter = void 0;
  const Decorators_2 = Decorators;
  let LexerInterpreter2 = class LexerInterpreter extends Lexer_1.Lexer {
    constructor(grammarFileName, vocabulary, ruleNames, channelNames, modeNames, atn, input) {
      super(input);
      if (atn.grammarType !== 0) {
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
  ], LexerInterpreter2.prototype, "_vocabulary", void 0);
  __decorate([
    Decorators_2.Override
  ], LexerInterpreter2.prototype, "atn", null);
  __decorate([
    Decorators_2.Override
  ], LexerInterpreter2.prototype, "grammarFileName", null);
  __decorate([
    Decorators_2.Override
  ], LexerInterpreter2.prototype, "ruleNames", null);
  __decorate([
    Decorators_2.Override
  ], LexerInterpreter2.prototype, "channelNames", null);
  __decorate([
    Decorators_2.Override
  ], LexerInterpreter2.prototype, "modeNames", null);
  __decorate([
    Decorators_2.Override
  ], LexerInterpreter2.prototype, "vocabulary", null);
  LexerInterpreter2 = __decorate([
    __param(1, Decorators.NotNull)
  ], LexerInterpreter2);
  exports.LexerInterpreter = LexerInterpreter2;
});
var ParserErrorListener = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
});
var RuleContextWithAltNum_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RuleContextWithAltNum = void 0;
  class RuleContextWithAltNum2 extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingStateNumber) {
      if (invokingStateNumber !== void 0) {
        super(parent, invokingStateNumber);
      } else {
        super();
      }
      this._altNumber = ATN_1.ATN.INVALID_ALT_NUMBER;
    }
    get altNumber() {
      return this._altNumber;
    }
    set altNumber(altNum) {
      this._altNumber = altNum;
    }
  }
  __decorate([
    Decorators.Override
  ], RuleContextWithAltNum2.prototype, "altNumber", null);
  exports.RuleContextWithAltNum = RuleContextWithAltNum2;
});
var RuleDependency_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RuleDependency = void 0;
  function RuleDependency2(dependency) {
    return (target, propertyKey, propertyDescriptor) => {
    };
  }
  exports.RuleDependency = RuleDependency2;
});
var RuleVersion_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RuleVersion = void 0;
  function RuleVersion2(version2) {
    return (target, propertyKey, propertyDescriptor) => {
    };
  }
  exports.RuleVersion = RuleVersion2;
});
var TokenFactory = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
});
var TokenSource = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
});
var TokenStream = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
});
var TokenStreamRewriter_1 = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RewriteOperation = exports.TokenStreamRewriter = void 0;
  class TokenStreamRewriter2 {
    constructor(tokens) {
      this.tokens = tokens;
      this.programs = new Map();
      this.programs.set(TokenStreamRewriter2.DEFAULT_PROGRAM_NAME, []);
      this.lastRewriteTokenIndexes = new Map();
    }
    getTokenStream() {
      return this.tokens;
    }
    rollback(instructionIndex, programName = TokenStreamRewriter2.DEFAULT_PROGRAM_NAME) {
      let is = this.programs.get(programName);
      if (is != null) {
        this.programs.set(programName, is.slice(TokenStreamRewriter2.MIN_TOKEN_INDEX, instructionIndex));
      }
    }
    deleteProgram(programName = TokenStreamRewriter2.DEFAULT_PROGRAM_NAME) {
      this.rollback(TokenStreamRewriter2.MIN_TOKEN_INDEX, programName);
    }
    insertAfter(tokenOrIndex, text, programName = TokenStreamRewriter2.DEFAULT_PROGRAM_NAME) {
      let index;
      if (typeof tokenOrIndex === "number") {
        index = tokenOrIndex;
      } else {
        index = tokenOrIndex.tokenIndex;
      }
      let rewrites = this.getProgram(programName);
      let op = new InsertAfterOp(this.tokens, index, rewrites.length, text);
      rewrites.push(op);
    }
    insertBefore(tokenOrIndex, text, programName = TokenStreamRewriter2.DEFAULT_PROGRAM_NAME) {
      let index;
      if (typeof tokenOrIndex === "number") {
        index = tokenOrIndex;
      } else {
        index = tokenOrIndex.tokenIndex;
      }
      let rewrites = this.getProgram(programName);
      let op = new InsertBeforeOp(this.tokens, index, rewrites.length, text);
      rewrites.push(op);
    }
    replaceSingle(index, text) {
      if (typeof index === "number") {
        this.replace(index, index, text);
      } else {
        this.replace(index, index, text);
      }
    }
    replace(from2, to, text, programName = TokenStreamRewriter2.DEFAULT_PROGRAM_NAME) {
      if (typeof from2 !== "number") {
        from2 = from2.tokenIndex;
      }
      if (typeof to !== "number") {
        to = to.tokenIndex;
      }
      if (from2 > to || from2 < 0 || to < 0 || to >= this.tokens.size) {
        throw new RangeError(`replace: range invalid: ${from2}..${to}(size=${this.tokens.size})`);
      }
      let rewrites = this.getProgram(programName);
      let op = new ReplaceOp(this.tokens, from2, to, rewrites.length, text);
      rewrites.push(op);
    }
    delete(from2, to, programName = TokenStreamRewriter2.DEFAULT_PROGRAM_NAME) {
      if (to === void 0) {
        to = from2;
      }
      if (typeof from2 === "number") {
        this.replace(from2, to, "", programName);
      } else {
        this.replace(from2, to, "", programName);
      }
    }
    getLastRewriteTokenIndex(programName = TokenStreamRewriter2.DEFAULT_PROGRAM_NAME) {
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
    getText(intervalOrProgram, programName = TokenStreamRewriter2.DEFAULT_PROGRAM_NAME) {
      let interval;
      if (intervalOrProgram instanceof Interval_1.Interval) {
        interval = intervalOrProgram;
      } else {
        interval = Interval_1.Interval.of(0, this.tokens.size - 1);
      }
      if (typeof intervalOrProgram === "string") {
        programName = intervalOrProgram;
      }
      let rewrites = this.programs.get(programName);
      let start = interval.a;
      let stop = interval.b;
      if (stop > this.tokens.size - 1) {
        stop = this.tokens.size - 1;
      }
      if (start < 0) {
        start = 0;
      }
      if (rewrites == null || rewrites.length === 0) {
        return this.tokens.getText(interval);
      }
      let buf = [];
      let indexToOp = this.reduceToSingleOperationPerIndex(rewrites);
      let i = start;
      while (i <= stop && i < this.tokens.size) {
        let op = indexToOp.get(i);
        indexToOp.delete(i);
        let t = this.tokens.get(i);
        if (op == null) {
          if (t.type !== Token_1.Token.EOF) {
            buf.push(String(t.text));
          }
          i++;
        } else {
          i = op.execute(buf);
        }
      }
      if (stop === this.tokens.size - 1) {
        for (let op of indexToOp.values()) {
          if (op.index >= this.tokens.size - 1) {
            buf.push(op.text.toString());
          }
        }
      }
      return buf.join("");
    }
    reduceToSingleOperationPerIndex(rewrites) {
      for (let i = 0; i < rewrites.length; i++) {
        let op = rewrites[i];
        if (op == null) {
          continue;
        }
        if (!(op instanceof ReplaceOp)) {
          continue;
        }
        let rop = op;
        let inserts = this.getKindOfOps(rewrites, InsertBeforeOp, i);
        for (let iop of inserts) {
          if (iop.index === rop.index) {
            rewrites[iop.instructionIndex] = void 0;
            rop.text = iop.text.toString() + (rop.text != null ? rop.text.toString() : "");
          } else if (iop.index > rop.index && iop.index <= rop.lastIndex) {
            rewrites[iop.instructionIndex] = void 0;
          }
        }
        let prevReplaces = this.getKindOfOps(rewrites, ReplaceOp, i);
        for (let prevRop of prevReplaces) {
          if (prevRop.index >= rop.index && prevRop.lastIndex <= rop.lastIndex) {
            rewrites[prevRop.instructionIndex] = void 0;
            continue;
          }
          let disjoint = prevRop.lastIndex < rop.index || prevRop.index > rop.lastIndex;
          if (prevRop.text == null && rop.text == null && !disjoint) {
            rewrites[prevRop.instructionIndex] = void 0;
            rop.index = Math.min(prevRop.index, rop.index);
            rop.lastIndex = Math.max(prevRop.lastIndex, rop.lastIndex);
          } else if (!disjoint) {
            throw new Error(`replace op boundaries of ${rop} overlap with previous ${prevRop}`);
          }
        }
      }
      for (let i = 0; i < rewrites.length; i++) {
        let op = rewrites[i];
        if (op == null) {
          continue;
        }
        if (!(op instanceof InsertBeforeOp)) {
          continue;
        }
        let iop = op;
        let prevInserts = this.getKindOfOps(rewrites, InsertBeforeOp, i);
        for (let prevIop of prevInserts) {
          if (prevIop.index === iop.index) {
            if (prevIop instanceof InsertAfterOp) {
              iop.text = this.catOpText(prevIop.text, iop.text);
              rewrites[prevIop.instructionIndex] = void 0;
            } else if (prevIop instanceof InsertBeforeOp) {
              iop.text = this.catOpText(iop.text, prevIop.text);
              rewrites[prevIop.instructionIndex] = void 0;
            }
          }
        }
        let prevReplaces = this.getKindOfOps(rewrites, ReplaceOp, i);
        for (let rop of prevReplaces) {
          if (iop.index === rop.index) {
            rop.text = this.catOpText(iop.text, rop.text);
            rewrites[i] = void 0;
            continue;
          }
          if (iop.index >= rop.index && iop.index <= rop.lastIndex) {
            throw new Error(`insert op ${iop} within boundaries of previous ${rop}`);
          }
        }
      }
      let m = new Map();
      for (let op of rewrites) {
        if (op == null) {
          continue;
        }
        if (m.get(op.index) != null) {
          throw new Error("should only be one op per index");
        }
        m.set(op.index, op);
      }
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
    getKindOfOps(rewrites, kind, before) {
      let ops = [];
      for (let i = 0; i < before && i < rewrites.length; i++) {
        let op = rewrites[i];
        if (op == null) {
          continue;
        }
        if (op instanceof kind) {
          ops.push(op);
        }
      }
      return ops;
    }
  }
  exports.TokenStreamRewriter = TokenStreamRewriter2;
  TokenStreamRewriter2.DEFAULT_PROGRAM_NAME = "default";
  TokenStreamRewriter2.PROGRAM_INIT_SIZE = 100;
  TokenStreamRewriter2.MIN_TOKEN_INDEX = 0;
  class RewriteOperation2 {
    constructor(tokens, index, instructionIndex, text) {
      this.tokens = tokens;
      this.instructionIndex = instructionIndex;
      this.index = index;
      this.text = text === void 0 ? "" : text;
    }
    execute(buf) {
      return this.index;
    }
    toString() {
      let opName = this.constructor.name;
      let $index = opName.indexOf("$");
      opName = opName.substring($index + 1, opName.length);
      return "<" + opName + "@" + this.tokens.get(this.index) + ':"' + this.text + '">';
    }
  }
  __decorate([
    Decorators.Override
  ], RewriteOperation2.prototype, "toString", null);
  exports.RewriteOperation = RewriteOperation2;
  class InsertBeforeOp extends RewriteOperation2 {
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
  class InsertAfterOp extends InsertBeforeOp {
    constructor(tokens, index, instructionIndex, text) {
      super(tokens, index + 1, instructionIndex, text);
    }
  }
  class ReplaceOp extends RewriteOperation2 {
    constructor(tokens, from2, to, instructionIndex, text) {
      super(tokens, from2, instructionIndex, text);
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
        return "<DeleteOp@" + this.tokens.get(this.index) + ".." + this.tokens.get(this.lastIndex) + ">";
      }
      return "<ReplaceOp@" + this.tokens.get(this.index) + ".." + this.tokens.get(this.lastIndex) + ':"' + this.text + '">';
    }
  }
  __decorate([
    Decorators.Override
  ], ReplaceOp.prototype, "execute", null);
  __decorate([
    Decorators.Override
  ], ReplaceOp.prototype, "toString", null);
});
var Vocabulary = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
});
var WritableToken = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  Object.defineProperty(exports, "__esModule", {value: true});
});
var antlr4ts = createCommonjsModule(function(module, exports) {
  /*!
   * Copyright 2016 The ANTLR Project. All rights reserved.
   * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
   */
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    Object.defineProperty(o, k2, {enumerable: true, get: function() {
      return m[k];
    }});
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  __exportStar(ANTLRErrorListener, exports);
  __exportStar(ANTLRErrorStrategy, exports);
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
  __exportStar(Vocabulary, exports);
  __exportStar(VocabularyImpl_1, exports);
  __exportStar(WritableToken, exports);
});
var __pika_web_default_export_for_treeshaking__ = /* @__PURE__ */ getDefaultExportFromCjs(antlr4ts);
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
export {ANTLRInputStream, BailErrorStrategy, BufferedTokenStream, CharStreams, CodePointBuffer, CodePointCharStream, CommonToken, CommonTokenFactory, CommonTokenStream, ConsoleErrorListener, DefaultErrorStrategy, Dependents, DiagnosticErrorListener, FailedPredicateException, InputMismatchException, IntStream, InterpreterRuleContext, Lexer, LexerInterpreter, LexerNoViableAltException, ListTokenSource, NoViableAltException, Parser, ParserInterpreter, ParserRuleContext, ProxyErrorListener, ProxyParserErrorListener, RecognitionException, Recognizer, RewriteOperation, RuleContext, RuleContextWithAltNum, RuleDependency, RuleVersion, Token, TokenStreamRewriter, VocabularyImpl, antlr4ts as __moduleExports};
