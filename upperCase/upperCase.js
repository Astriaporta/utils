"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isString_js_1 = require("../isString/isString.js");
/**
 *
 * @param string
 * @returns {any}
 */
function upperCase(string) {
    return isString_js_1.isString(string) ? string.toUpperCase() : string;
}
exports.upperCase = upperCase;
