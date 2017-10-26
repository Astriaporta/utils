
function numberWithCommas(n: number, c: string = " "): string {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, c);
}

export {numberWithCommas}