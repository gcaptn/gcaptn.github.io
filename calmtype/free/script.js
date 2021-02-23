var editorlua = CodeMirror.fromTextArea(document.getElementById("main-typer"), {
    lineNumbers: true,
    mode: "lua",
    indentUnit: 4,
    theme: "rdark",
    viewportMargin: Infinity,
    lineWrapping: true
})

var placeholder = 'local this_is = "the start of a great journey."'
editorlua.setValue(placeholder)