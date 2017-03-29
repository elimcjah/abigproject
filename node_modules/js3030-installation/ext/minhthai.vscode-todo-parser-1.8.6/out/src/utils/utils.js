"use strict";
/**
 * Hash function for String. Inspired by Java source.
 * @returns {number} A 32-bit hash value.
 */
function hashCode(str) {
    var hash = 0;
    if (str.length == 0)
        return hash;
    for (var i = 0; i < str.length; ++i) {
        var char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; // force convert to 32-bit int
    }
    return hash;
}
exports.hashCode = hashCode;
//# sourceMappingURL=utils.js.map