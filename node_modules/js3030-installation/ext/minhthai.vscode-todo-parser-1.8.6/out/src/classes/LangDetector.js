"use strict";
var LangDetector = (function () {
    function LangDetector() {
    }
    LangDetector.detect = function (fileExtension) {
    };
    return LangDetector;
}());
exports.LangDetector = LangDetector;
var association = {
    "handlebars": ["hbs", "handlebars"],
    "html": ["htm", "html"],
    "coffeescript": ["coffee", "litcoffee"],
    "c": ["c"],
    "cpp": ["cpp", "h", "hpp"],
    10: "css",
    11: "diff",
    12: "dockerfile",
    13: "fsharp",
    14: "git-commit",
    15: "git-rebase",
    16: "go",
    17: "groovy",
    18: "ini",
    19: "jade",
    20: "java",
    21: "javascriptreact",
    22: "javascript",
    23: "json",
    24: "less",
    25: "lua",
    26: "makefile",
    27: "markdown",
    28: "objective-c",
    29: "perl",
    30: "perl6",
    31: "php",
    32: "powershell",
    33: "python",
    34: "r",
    35: "ruby",
    36: "rust",
    37: "scss",
    38: "shaderlab",
    39: "shellscript",
    40: "sql",
    41: "swift",
    42: "typescript",
    43: "typescriptreact",
    44: "vb",
    45: "xml",
    46: "xsl",
    47: "yaml",
    48: "jsx",
    49: "cmake"
};
//# sourceMappingURL=LangDetector.js.map