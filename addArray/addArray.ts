
function addArray(array: Array<any>, obj: object) {
    return Array.prototype.indexOf.call(array, obj) !== -1;
}

export {addArray}