"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description Converti un objet en arguments à placer dans une url.
 * ex: {arg:val, arg2:val2} => arg=val&arg2=val2
 *
 * @param {Object} obj
 * @returns {string}
 */
function objectToArguments(obj) {
    if (obj === null)
        return "";
    var tabarg = [], key;
    for (key in obj) {
        tabarg.push(key + '=' + obj[key]);
    }
    return tabarg.join('&');
}
exports.objectToArguments = objectToArguments;
