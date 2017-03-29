"use strict";
var vscode_1 = require('vscode');
var FileNavigator = (function () {
    function FileNavigator() {
    }
    FileNavigator.goToFile = function (path, line) {
        var uri = vscode_1.Uri.file(path);
        var success = vscode_1.commands.executeCommand('vscode.open', uri);
        success.then(function (result) {
            console.log(result);
            console.log('success!');
        }, function (reason) {
            console.log(reason);
        });
    };
    return FileNavigator;
}());
exports.FileNavigator = FileNavigator;
//# sourceMappingURL=FileNavigator.js.map