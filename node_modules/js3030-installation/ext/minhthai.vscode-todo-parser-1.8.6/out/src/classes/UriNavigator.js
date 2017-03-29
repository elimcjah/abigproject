"use strict";
var vscode_1 = require('vscode');
var all_1 = require('../types/all');
var Logger_1 = require('./Logger');
/**
 * Get called to handle a todo URI with special scheme.
 * Instead of returning a readonly document, we return nothing
 * and navigate to the document instead.
 */
var UriNavigator = (function () {
    function UriNavigator() {
    }
    UriNavigator.prototype.provideTextDocumentContent = function (uri, token) {
        var todoUri = all_1.TodoUri.fromUri(uri);
        var self = this;
        this.openDocument(todoUri.getUri()).then(function (doc) {
            self.openDocumentAtLine(doc, todoUri.getLine());
        }, function (reason) {
            Logger_1.Logger.error(reason);
        });
        return undefined;
    };
    UriNavigator.prototype.openDocument = function (uri) {
        return new Promise(function (resolve, reject) {
            vscode_1.workspace.openTextDocument(uri).then(function (doc) {
                resolve(doc);
            }, function (reason) {
                reject(reason);
            });
        });
    };
    UriNavigator.prototype.openDocumentAtLine = function (document, line) {
        vscode_1.window.showTextDocument(document, undefined, false).then(function (editor) {
            var range = editor.document.lineAt(line).range;
            editor.selection = new vscode_1.Selection(range.start, range.end);
            editor.revealRange(range);
        }, function (reason) {
            Logger_1.Logger.error(reason);
        });
    };
    return UriNavigator;
}());
exports.UriNavigator = UriNavigator;
//# sourceMappingURL=UriNavigator.js.map