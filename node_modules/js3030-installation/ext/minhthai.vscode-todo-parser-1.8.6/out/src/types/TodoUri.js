"use strict";
var TodoUri = (function () {
    function TodoUri(uri, line) {
        if (line === void 0) { line = 0; }
        this.uri = uri;
        this.line = line;
    }
    TodoUri.prototype.getUri = function () {
        return this.uri;
    };
    TodoUri.prototype.getLine = function () {
        return this.line;
    };
    TodoUri.fromUri = function (uri) {
        // TODO
        return new TodoUri(uri, 0);
    };
    return TodoUri;
}());
exports.TodoUri = TodoUri;
//# sourceMappingURL=TodoUri.js.map