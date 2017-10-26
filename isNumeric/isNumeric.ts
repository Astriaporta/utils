import {isNumber} from "../isNumber/isNumber.js"
import {isString} from "../isString/isString.js"
import {types} from "../types/types.js"

/**
 * @description Vérifie si la valeur passer en paramêtre est numérique
 * @param n
 * @returns {boolean}
 */
function isNumeric(n) {
    let type = types(n);
    return (( isNumber(type) || isString(type) ) && !isNaN(n - parseFloat(n))) || n.search(/^[a-zA-Z ]*$/) === -1; //il y a un espace dans la regex. c'est nomal.
}

export {isNumeric}