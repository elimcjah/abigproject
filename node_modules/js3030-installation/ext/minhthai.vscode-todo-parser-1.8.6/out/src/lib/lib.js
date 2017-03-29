"use strict";
var store = require('../regex_helper/regex_store');
function stringFormat(formatString) {
    var replacementArray = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        replacementArray[_i - 1] = arguments[_i];
    }
    return formatString.replace(/\{(\d+)\}/g, // Matches placeholders, e.g. '{1}'
    function formatStringReplacer(match, placeholderIndex) {
        // Convert String to Number
        placeholderIndex = Number(placeholderIndex);
        // Make sure that index is within array bounds
        if (placeholderIndex < 0 ||
            placeholderIndex > replacementArray.length - 1) {
            return placeholderIndex;
        }
        // Replace placeholder with value from replacement array
        return replacementArray[placeholderIndex];
    });
}
exports.stringFormat = stringFormat;
function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
exports.escapeRegExp = escapeRegExp;
function getRegexSrcForLang(languageId) {
    switch (languageId) {
        case 'java': return store.java;
        case 'python': return store.python;
        case 'ada': return store.ada;
        case 'csharp': return store.csharp;
        case 'c': return store.c;
        case 'cpp': return store.cpp;
        case 'go': return store.go;
        case 'coffeescript': return store.coffeescript;
        case 'fsharp': return store.fsharp;
        case 'ruby': return store.ruby;
        case 'r': return store.r;
        case 'perl': return store.perl;
        case 'lua': return store.lua;
        case 'markdown': return store.markdown;
        default: return store.plaintext;
    }
}
exports.getRegexSrcForLang = getRegexSrcForLang;
//# sourceMappingURL=lib.js.map