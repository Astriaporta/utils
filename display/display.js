"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forEach_js_1 = require("../forEach/forEach.js");
function display(el, display) {
    forEach_js_1.forEach(el, function (el, i) {
        el[i].style.display = display;
    });
}
exports.display = display;
