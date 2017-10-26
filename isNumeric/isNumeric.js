"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isNumber_js_1 = require("../isNumber/isNumber.js");
var isString_js_1 = require("../isString/isString.js");
var types_js_1 = require("../types/types.js");
/**
 * @description Vérifie si la valeur passer en paramêtre est numérique
 * @param n
 * @returns {boolean}
 */
function isNumeric(n) {
    var type = types_js_1.types(n);
    return ((isNumber_js_1.isNumber(type) || isString_js_1.isString(type)) && !isNaN(n - parseFloat(n))) || n.search(/^[a-zA-Z ]*$/) === -1; //il y a un espace dans la regex. c'est nomal.
}
exports.isNumeric = isNumeric;
