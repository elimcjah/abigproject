"use strict";
var vscode_1 = require('vscode');
var all_1 = require('../const/all');
var assert = require('assert');
var State;
(function (State) {
    State[State["Idle"] = 0] = "Idle";
    State[State["Begin"] = 1] = "Begin";
    State[State["Busy"] = 2] = "Busy";
})(State || (State = {}));
var OutputWriter = (function () {
    function OutputWriter() {
    }
    OutputWriter.createOutputChannel = function () {
        return vscode_1.window.createOutputChannel(all_1.CHANNEL_NAME);
    };
    /**
     * Begin the writing process. Must be called before calling
     * writeTodo(...)
     */
    OutputWriter.begin = function () {
        assert(OutputWriter.state === State.Idle, "Previous work is not finished.");
        OutputWriter.lineIndex = 1;
        OutputWriter.showPanel();
        OutputWriter.state = State.Begin;
    };
    /**
     * Finalize the writing process. Must be called after writeTodo(...)
     * @param todoCount Number of TODOs. Will be used to display the
     * conclusion.
     */
    OutputWriter.finish = function (todoCount) {
        assert(OutputWriter.state === State.Busy, "There is no work to finish.");
        var channel = OutputWriter.outputChannel;
        if (todoCount == 0)
            channel.appendLine('No TODOs found.');
        else {
            channel.appendLine('==================================');
            var unit = (todoCount > 1) ? 'TODOs' : 'TODO';
            channel.appendLine("Found " + todoCount + " " + unit + ".\n");
        }
        OutputWriter.state = State.Idle;
    };
    /**
     * Display parsed todos in a pannel. finish() must be called
     * when writing is done.
     * @param todos List of todos to be written to the panel.
     */
    OutputWriter.writeTodo = function (todos) {
        assert(OutputWriter.state === State.Begin || OutputWriter.state === State.Busy, "begin() is not called.");
        OutputWriter.state = State.Busy;
        if (!todos || todos.length == 0)
            return;
        var channel = OutputWriter.outputChannel;
        for (var _i = 0, todos_1 = todos; _i < todos_1.length; _i++) {
            var todo = todos_1[_i];
            channel.appendLine(OutputWriter.lineIndex + ".");
            channel.appendLine(todo.getDisplayString());
            channel.appendLine('');
            OutputWriter.lineIndex++;
        }
    };
    OutputWriter.showPanel = function () {
        var channel = OutputWriter.outputChannel;
        if (OutputWriter.state === State.Idle) {
            channel.clear();
            channel.show(true);
        }
    };
    OutputWriter.outputChannel = OutputWriter.createOutputChannel();
    OutputWriter.state = State.Idle;
    return OutputWriter;
}());
exports.OutputWriter = OutputWriter;
//# sourceMappingURL=OutputWriter.js.map