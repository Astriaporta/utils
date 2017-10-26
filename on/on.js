"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addEvent_js_1 = require("../addEvent/addEvent.js");
var eco_js_1 = require("../eco/eco.js");
var isFunction_js_1 = require("../isFunction/isFunction.js");
/**
 * @description Declenche l'evenement onchange sur un select
 *
 * @param DOM dom | querySelector ou getElementById
 * @param String event | click, change...
 * @param Function fn
 * @returns void
 */
function on(dom, event, fn) {
    //Ne rien faire si le dom n'existe pas
    if (null == dom)
        return;
    if (!isFunction_js_1.isFunction(fn)) {
        eco_js_1.eco(' n\'existe pas.');
        return;
    }
    addEvent_js_1.addEvent(dom, event, fn);
}
