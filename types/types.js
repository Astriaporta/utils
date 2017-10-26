"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isObject_js_1 = require("../isObject/isObject.js");
var isFunction_js_1 = require("../isFunction/isFunction.js");
function types(t) {
    var class2type, toString;
    class2type = {};
    toString = class2type.toString;
    if (t == null) {
        return t + "";
    }
    return isFunction_js_1.isFunction(t) || isObject_js_1.isObject(t) ?
        class2type[toString.call(t)] || "object" :
        typeof t;
}
exports.types = types;
