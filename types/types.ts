import {isObject} from "../isObject/isObject.js"
import {isFunction} from "../isFunction/isFunction.js"

function types(t: any) {
    let class2type, toString;

    class2type = {};

    toString = class2type.toString;

    if (t == null) {
        return t + "";
    }

    return isFunction(t) || isObject(t) ?
        class2type[toString.call(t)] || "object" :
        typeof t;
}

export {types}