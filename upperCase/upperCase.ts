import {isString} from '../isString/isString.js'

/**
 *
 * @param string
 * @returns {any}
 */
function upperCase(string: string): string {
    return isString(string) ? string.toUpperCase() : string;
}

export {upperCase}