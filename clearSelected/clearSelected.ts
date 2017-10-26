/**
 * Unselect all option in a select
 *
 * @param dom
 */
function clearSelected(dom: any): void {
    let el: Array<any>, i: number = 0, nb: number;

    el = dom.options;

    nb = el.length;

    for (; i < nb; i++) {
        el[i].selected = false;
    }
}

export {clearSelected}