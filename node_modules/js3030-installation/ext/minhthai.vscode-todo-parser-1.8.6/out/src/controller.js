"use strict";
var vscode_1 = require('vscode');
var wr = require('./worker');
var ff = require('./file_finder');
var Controller = (function () {
    function Controller() {
        this._garbage = [];
    }
    Controller.prototype.run = function () {
        var self = this;
        var docs_promise = ff.FileFinder.findFile();
        docs_promise.then(function (docs) {
            self.runWorker(docs);
        }, 
        // Cannot find files in current folder manually, switch to using the API 
        function (reason) {
            // Uncomment the line below to use the API. However, the API gives
            // bad and duplicate documents :(
            //let docs = workspace.textDocuments;
            self.runWorker([]);
        });
    };
    /**
     * Same as @run but only for the current document
     * @noOutput do not show TODOs on the screen
     */
    Controller.prototype.runOne = function (noOutput) {
        if (noOutput === void 0) { noOutput = false; }
        this.runWorker([], noOutput);
    };
    Controller.prototype.runWorker = function (docs, noOutput) {
        if (noOutput === void 0) { noOutput = false; }
        // if there is no folder opened (user opened only 1 file)
        // then we take the document from the current editor
        if (docs.length == 0) {
            var editor = vscode_1.window.activeTextEditor;
            if (!editor)
                return;
            docs = [editor.document];
        }
        var worker = new wr.Worker(docs);
        var self = this;
        if (noOutput) {
            worker.runNoOutput(function (nTodos) {
                self.updateStatusBar(nTodos);
            });
        }
        else {
            worker.run();
        }
        this._garbage.push(worker);
    };
    Controller.prototype.updateStatusBar = function (nTodos) {
        // Create as needed
        if (!this._statusBarItem) {
            this._statusBarItem = vscode_1.window.createStatusBarItem(vscode_1.StatusBarAlignment.Left);
        }
        // Get the current text editor
        var editor = vscode_1.window.activeTextEditor;
        if (!editor) {
            this._statusBarItem.hide();
            return;
        }
        var doc = editor.document;
        // Update the status bar
        //this._statusBarItem.text = `Todo: ${nTodos}`;
        this._statusBarItem.text = '$(checklist) ' + nTodos;
        this._statusBarItem.tooltip = (nTodos > 1) ? nTodos + " TODOs" : nTodos + " TODO";
        this._statusBarItem.command = 'extension.startCurrent'; // Clicking on this will start the parser but only for the current file
        this._statusBarItem.show();
    };
    Controller.prototype.dispose = function () {
        this._statusBarItem.dispose();
    };
    return Controller;
}());
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map