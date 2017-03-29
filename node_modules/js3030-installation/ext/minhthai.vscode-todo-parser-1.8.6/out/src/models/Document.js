"use strict";
var all_1 = require('../types/all');
var all_2 = require('../utils/all');
var LangDetector = require('language-detect');
var DocumentName = (function () {
    function DocumentName(fileName) {
        this.name = fileName;
        this.ext = all_2.getFileExtension(this.name);
    }
    return DocumentName;
}());
exports.DocumentName = DocumentName;
var ManualReadDocument = (function () {
    function ManualReadDocument(fileName, text) {
        this.name = new DocumentName(fileName);
        this.text = text;
    }
    ManualReadDocument.prototype.getFileName = function () {
        return this.name.name;
    };
    ManualReadDocument.prototype.getExt = function () {
        return this.name.ext;
    };
    ManualReadDocument.prototype.getText = function () {
        return this.text;
    };
    ManualReadDocument.prototype.getLanguage = function () {
        var id = LangDetector.sync(this.getFileName());
        return all_1.LanguageType.fromId(id);
    };
    return ManualReadDocument;
}());
exports.ManualReadDocument = ManualReadDocument;
var ApiDocument = (function () {
    function ApiDocument(data) {
        this.data = data;
        this.name = new DocumentName(data.fileName);
    }
    ApiDocument.prototype.getFileName = function () {
        return this.name.name;
    };
    ApiDocument.prototype.getExt = function () {
        return this.name.ext;
    };
    ApiDocument.prototype.getText = function () {
        return this.data.getText();
    };
    ApiDocument.prototype.getLanguage = function () {
        return all_1.LanguageType.fromId(this.data.languageId);
    };
    return ApiDocument;
}());
exports.ApiDocument = ApiDocument;
//# sourceMappingURL=Document.js.map