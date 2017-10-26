"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_js_1 = require("../isFunction/isFunction.js");
/**
 * @description Call function
 * @param name Function name
 * @param arguments Function arg
 */
function getFunction(name, arg) {
    var fn = window[name];
    if (isFunction_js_1.isFunction(fn))
        fn.apply(null, arg);
}
exports.getFunction = getFunction;
