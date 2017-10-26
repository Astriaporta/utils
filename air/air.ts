/**
 * Calculate surface of circle
 * PI = 3.14
 * @param {number} r
 * @returns {number}
 */
function air(r: number) : number {
    //let pi = 3.14;
    let pi = Math.PI;

    return pi*Math.pow(r,2);
}

export {air}