"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Unselect all option in a select
 *
 * @param dom
 */
function clearSelected(dom) {
    var el, i = 0, nb;
    el = dom.options;
    nb = el.length;
    for (; i < nb; i++) {
        el[i].selected = false;
    }
}
exports.clearSelected = clearSelected;
