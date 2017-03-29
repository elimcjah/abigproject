"use strict";
//export var java = '//\\s*{0}(.*)';
exports.java = '(/\\*[\\*\\s\\r\\n]*{0}([^\\*]|[\\r\\n]|(\\*+([^\\*/]|[\\r\\n])))*(?:\\*+/)|//\\s*{0}(.*))';
exports.plaintext = exports.java;
exports.c = exports.java;
exports.cpp = exports.java;
exports.csharp = exports.java;
exports.python = '#\s*(.+)';
exports.coffeescript = exports.python;
exports.ada = '--\s*(.+)';
exports.haskell = exports.ada;
exports.ruby = exports.python;
exports.go = exports.java;
exports.fsharp = '(\\(\\*[\\*\\s\\r\\n]*{0}([^\\*]|[\\r\\n]|(\\*+([^\\*\\)]|[\\r\\n])))*(?:\\*+\\))|//\\s*{0}(.*))';
exports.r = exports.python;
exports.perl = exports.python;
exports.lua = exports.ada;
exports.markdown = exports.java;
exports.less = exports.java;
exports.sass = exports.java;
// For CSS, only /*..*/ is available and not allow nested comment
exports.css = '\/\*([^*]*\*+(?:[^\/*][^*]*\*+)*)\/';
exports.latex = '%\s*(.+)';
// File extensions of supported languages
exports.supportLanguages = [
    'java',
    'txt',
    'c',
    'cpp', 'h', 'hpp',
    'cs',
    'py',
    'coffee',
    'ada', 'adb',
    'hs', 'lhs',
    'rb',
    'go',
    'fs', 'fsx',
    'r',
    'pl', 'PL',
    'lua',
    'md', 'MD', 'markdown',
    'less',
    'css',
    'sass', 'scss',
    'tex'
];
//# sourceMappingURL=regex_store.js.map