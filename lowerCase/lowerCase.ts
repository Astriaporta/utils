import {isString} from '../isString/isString.js'

/**
 *
 * @param string
 * @returns {any}
 */
function lowerCase(string: string): string {
    return isString(string) ? string.toLowerCase() : string;
}

export {lowerCase}