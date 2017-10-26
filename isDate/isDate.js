"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isDate(d) {
    return toString.call(d) === '[object Date]';
}
exports.isDate = isDate;
