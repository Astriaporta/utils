/**
 *
 * @param {string} query
 * @returns {Object}
 */
function parseQuery(query) {
    var vars, params = {}, i = 0, lenVars, pair;
    vars = query.split("&");
    lenVars = vars.length;
    for (; i < lenVars; i++) {
        pair = vars[i].split("=");
        // If entry not exist in object params
        if (typeof params[pair[0]] === "undefined") {
            params[pair[0]] = decodeURIComponent(pair[1]);
            // If entry exist in object params and value is a string
        }
        else if (typeof params[pair[0]] === "string") {
            var arr = [params[pair[0]], decodeURIComponent(pair[1])];
            params[pair[0]] = arr;
        }
        else {
            params[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return params;
}
/**
 *
 * @returns {Object}
 */
function getUrlAllParam() {
    return parseQuery(window.location.search.substring(1));
}
/**
 *
 * @param {string} name
 * @returns {string}
 */
function getUrlParam(name) {
    var params = getUrlAllParam();
    return params[name];
}
