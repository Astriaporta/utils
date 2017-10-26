"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param DOM el
 * @param event eventName
 * @param function eventHandler
 */
function addEvent(el, eventName, eventHandler) {
    if (el.addEventListener) {
        el.addEventListener(eventName, eventHandler, false);
    }
    else if (el.attachEvent) {
        el.attachEvent("on" + eventName, eventHandler);
    }
}
exports.addEvent = addEvent;
