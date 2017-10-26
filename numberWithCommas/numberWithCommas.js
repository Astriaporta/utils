"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function numberWithCommas(n, c) {
    if (c === void 0) { c = " "; }
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, c);
}
exports.numberWithCommas = numberWithCommas;
