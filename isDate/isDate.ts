
function isDate(d: any): boolean {
    return toString.call(d) === '[object Date]';
}

export {isDate}