import {forEach} from "../forEach/forEach.js"

function display(el: any, display: string): void {
    forEach(el, function (el, i) {
        el[i].style.display = display;
    });
}

export {display}