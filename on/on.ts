import {addEvent} from "../addEvent/addEvent.js"
import {eco} from "../eco/eco.js"
import {isFunction} from "../isFunction/isFunction.js"

/**
 * @description Declenche l'evenement onchange sur un select
 *
 * @param DOM dom | querySelector ou getElementById
 * @param String event | click, change...
 * @param Function fn
 * @returns void
 */
function on(dom: any, event: string, fn: void): void {
    //Ne rien faire si le dom n'existe pas
    if (null == dom)
        return;

    if (!isFunction(fn)) {
        eco(' n\'existe pas.');
        return;
    }

    addEvent(dom, event, fn);
}