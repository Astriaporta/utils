"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Calculate surface of circle
 * PI = 3.14
 * @param {number} r
 * @returns {number}
 */
function air(r) {
    var pi = Math.PI;
    return pi * Math.pow(r, 2);
}
exports.air = air;
