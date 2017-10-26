"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    }
    else {
        el.className += ' ' + className;
    }
}
exports.addClass = addClass;
