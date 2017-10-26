function forEach(array: Array<any>, callback: any): void {
    let i = 0, nb;

    nb = array.length;
    while (i < nb) {
        callback(array[i], i);
        i++;
    }
}

export {forEach}