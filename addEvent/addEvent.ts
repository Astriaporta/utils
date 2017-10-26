/**
 *
 * @param DOM el
 * @param event eventName
 * @param function eventHandler
 */
function addEvent(el: any, eventName: string, eventHandler: void): void {
    if (el.addEventListener) {
        el.addEventListener(eventName, eventHandler, false);
    } else if (el.attachEvent) {
        el.attachEvent("on" + eventName, eventHandler);
    }
}

export {addEvent}