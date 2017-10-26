"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isRegExp(value) {
    return toString.call(value) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
