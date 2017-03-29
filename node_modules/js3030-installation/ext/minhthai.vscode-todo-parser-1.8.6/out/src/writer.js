var vscode_1 = require('vscode');
var ps = require('./todo_parser');
var Writer = (function () {
    function Writer() {
    }
    Writer.prototype.update = function (callback) {
        var editor = vscode_1.window.activeTextEditor;
        if (!editor) {
            return;
        }
        var doc = editor.document;
        var todo_list = ps.TodoParser.getTodos(doc);
        var out = vscode_1.window.createOutputChannel('my_channel');
        out.clear();
        if (todo_list.length > 0) {
            //console.log(todo_list);
            for (var _i = 0; _i < todo_list.length; _i++) {
                var todo = todo_list[_i];
                out.appendLine(todo.toString());
                out.appendLine('');
                console.log(111);
            }
        }
        else
            out.appendLine('No TODOs found.');
        out.show(vscode_1.ViewColumn.Three);
        console.log('----------------------------------');
        console.log('Done!');
        if (callback)
            callback();
    };
    Writer.prototype.dispose = function () { };
    return Writer;
})();
exports.Writer = Writer;
//# sourceMappingURL=writer.js.map