//export var java = /(\/\*\s*[Tt][Oo][Dd][Oo]([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(\/\/\s*[Tt][Oo][Dd][Oo].*)/g;
// export var java = /\/\/(?:\s*[Tt][Oo][Dd][Oo]\s*:\s*)(.*)/g;
exports.java = new RegExp('//\\s*[Tt][Oo][Dd][Oo]\\s*:\\s*(.*)', 'g');
console.log(exports.java.source);
exports.text = exports.java;
//# sourceMappingURL=regex_store.js.map