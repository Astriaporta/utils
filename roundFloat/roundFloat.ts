/**
 *
 * @param n
 * @param x number of digit after comma
 */
function roundFloat(n: number, x: number): string {
    return n.toFixed(x);
}

export {roundFloat}