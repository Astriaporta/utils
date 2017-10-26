"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPrime(n) {
    if (n === 1)
        return false;
    var sq = Math.sqrt(n), i = 2;
    for (i; i <= sq; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
exports.isPrime = isPrime;
