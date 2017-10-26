
function isPrime(n: number): boolean {
    if (n === 1)
        return false;

    let sq: number = Math.sqrt(n), i: number = 2;

    for (i; i <= sq; i++) {
        if (n % i === 0)
            return false;
    }

    return true;
}

export {isPrime}