"use strict";
var lib = require('../lib/lib');
var settings = require('../settings');
var RegexFactory = (function () {
    function RegexFactory(languageId) {
        this.languageId = 'plaintext';
        console.log(languageId);
        if (languageId)
            this.languageId = languageId;
    }
    /**
     * Get a format string that will be used to create a RegExp
     * to parse TODOs. This string is different for each language
     * (because of different comment syntax).
     */
    RegexFactory.prototype.getFormat = function () {
        return lib.getRegexSrcForLang(this.languageId);
    };
    /**
     * Create a regex string from a marker
     * @param {marker} a Regex pattern that signals the start of a TODO
     */
    RegexFactory.prototype.createString = function (markers) {
        if (markers.length == 0)
            return lib.stringFormat(this.getFormat(), '');
        // merge markers into 1 string
        var merge = '(?:';
        for (var i = 0; i < markers.length; ++i) {
            var escaped = lib.escapeRegExp(markers[i]);
            merge += escaped;
            if (i < markers.length - 1)
                merge += '|';
        }
        merge += ')';
        // merge with the regex of the language
        var full = lib.stringFormat(this.getFormat(), merge);
        return full;
    };
    RegexFactory.prototype.createRegExp = function (source) {
        return new RegExp(source, 'g');
    };
    /**
     * Create a Regular Expression object
     * @param {marker} a Regex pattern that signals the start of a TODO, default is "[Tt][Oo][Dd][Oo]\\s*:" (i.e. "TODO:", "Todo:"")
     */
    RegexFactory.prototype.get = function (markers) {
        if (markers === void 0) { markers = RegexFactory.markers; }
        //let source = this.createString(markers);
        // here we should parse the comment only, TODO can be 
        // parse later when processing this comment
        var source = this.createString([]);
        var regex = this.createRegExp(source);
        return regex;
    };
    RegexFactory.markers = settings.Settings.getMarkers(); // match markers such as: TODO, todo, ToDo, ...
    return RegexFactory;
}());
exports.RegexFactory = RegexFactory;
//# sourceMappingURL=regex_factory.js.map