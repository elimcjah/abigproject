"use strict";
var vscode_1 = require('vscode');
var Settings = (function () {
    function Settings() {
    }
    Settings.getExcluded = function () {
        if (!this.isLoaded) {
            this.reload();
        }
        return this.excluded;
    };
    Settings.getMarkers = function () {
        if (!this.isLoaded) {
            this.reload();
        }
        return this.markers;
    };
    Settings.reload = function () {
        var settings = vscode_1.workspace.getConfiguration('TodoParser');
        if (settings) {
            var excluded = settings.get('exclude');
            if (excluded)
                this.excluded = excluded;
            var markers = settings.get('markers');
            if (markers)
                this.markers = this.default_markers.concat(markers);
        }
        this.isLoaded = true;
    };
    Settings.excluded = [];
    Settings.markers = [];
    Settings.default_markers = ['TODO:', 'Todo:', 'todo:'];
    Settings.isLoaded = false;
    return Settings;
}());
exports.Settings = Settings;
//# sourceMappingURL=settings.js.map