"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isString_js_1 = require("../isString/isString.js");
/**
 *
 * @param string
 * @returns {any}
 */
function lowerCase(string) {
    return isString_js_1.isString(string) ? string.toLowerCase() : string;
}
exports.lowerCase = lowerCase;
