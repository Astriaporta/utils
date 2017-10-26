"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function forEach(array, callback) {
    var i = 0, nb;
    nb = array.length;
    while (i < nb) {
        callback(array[i], i);
        i++;
    }
}
exports.forEach = forEach;
