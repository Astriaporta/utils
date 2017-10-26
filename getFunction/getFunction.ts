import {isFunction} from "../isFunction/isFunction.js"

/**
 * @description Call function
 * @param name Function name
 * @param arguments Function arg
 */
function getFunction(name: string, arg: Array<any>) {
    let fn = window[name];

    if (isFunction(fn))
        fn.apply(null, arg);
}

export {getFunction}