
function removeArray(array: Array<any>, value: any): number {
    let index = array.indexOf(value);

    if (index >= 0) {
        array.splice(index, 1);
    }

    return index;
}

export {removeArray}