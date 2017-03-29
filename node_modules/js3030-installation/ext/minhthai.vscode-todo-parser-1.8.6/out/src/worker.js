"use strict";
var vscode_1 = require('vscode');
var ps = require('./todo_parser');
var Worker = (function () {
    function Worker(docs) {
        this.docs = docs;
    }
    Worker.createOutputChannel = function () {
        return vscode_1.window.createOutputChannel('todo_parser');
    };
    Worker.prototype.run = function (callback) {
        var isEmpty = true;
        if (!Worker.OutputChannel)
            Worker.OutputChannel = Worker.createOutputChannel();
        Worker.OutputChannel.clear();
        var index = 1, nTodos = 0;
        for (var _i = 0, _a = this.docs; _i < _a.length; _i++) {
            var doc = _a[_i];
            var todo_list = ps.TodoParser.getTodos(doc);
            var n = todo_list.length;
            if (n > 0) {
                for (var _b = 0, todo_list_1 = todo_list; _b < todo_list_1.length; _b++) {
                    var todo = todo_list_1[_b];
                    Worker.OutputChannel.appendLine(index + ".");
                    Worker.OutputChannel.appendLine(todo.toDisplayString());
                    Worker.OutputChannel.appendLine('');
                    index++;
                }
                isEmpty = false;
                nTodos += todo_list.length;
            }
        }
        if (isEmpty)
            Worker.OutputChannel.appendLine('No TODOs found.');
        else {
            Worker.OutputChannel.appendLine('==================================================');
            var unit = (nTodos > 1) ? 'TODOs' : 'TODO';
            Worker.OutputChannel.appendLine("Found " + nTodos + " " + unit + ".");
        }
        Worker.OutputChannel.show(true); // show but not get focus
        console.log('----------------------------------');
        console.log('Done!');
        if (callback)
            callback(nTodos);
    };
    Worker.prototype.runNoOutput = function (callback) {
        var nTodos = 0;
        for (var _i = 0, _a = this.docs; _i < _a.length; _i++) {
            var doc = _a[_i];
            var todo_list = ps.TodoParser.getTodos(doc);
            if (todo_list.length > 0) {
                nTodos = todo_list.length;
            }
        }
        if (callback)
            callback(nTodos);
    };
    Worker.prototype.dispose = function () { };
    Worker.OutputChannel = Worker.createOutputChannel();
    return Worker;
}());
exports.Worker = Worker;
//# sourceMappingURL=worker.js.map