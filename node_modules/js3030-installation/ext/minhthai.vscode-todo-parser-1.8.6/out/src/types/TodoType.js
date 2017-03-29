"use strict";
var TodoType = (function () {
    function TodoType(file, content, line) {
        if (line === void 0) { line = 0; }
        this.file = file;
        this.content = content;
        this.lineNumber = line;
    }
    TodoType.prototype.getContent = function () {
        return this.content;
    };
    TodoType.prototype.getLineNumber = function () {
        return this.lineNumber;
    };
    TodoType.prototype.getFile = function () {
        return this.file;
    };
    TodoType.prototype.getDisplayString = function () {
        var url = this.getFile().getFile().uri.toString();
        // to take it to the properline
        var middle = "#";
        // what if the file is not saved?
        if (url.split(":")[0].toString() == "untitled") {
            middle = "; Line Number: ";
        }
        var path = url + middle + this.getLineNumber();
        return "From " + path + "\n----------------------------------\n" + this.getContent();
    };
    TodoType.prototype.toString = function () {
        return this.getFile() + "\n" + this.getContent;
    };
    return TodoType;
}());
exports.TodoType = TodoType;
//# sourceMappingURL=TodoType.js.map