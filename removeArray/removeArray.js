"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeArray(array, value) {
    var index = array.indexOf(value);
    if (index >= 0) {
        array.splice(index, 1);
    }
    return index;
}
exports.removeArray = removeArray;
