var editorlua = CodeMirror.fromTextArea(document.getElementById("main-typer"), {
    lineNumbers: false,
    indentUnit: 4,
    theme: "rdark",
    viewportMargin: Infinity,
    lineWrapping: true
})

var placeholder = 'This is the start of a great journey.'
editorlua.setValue(placeholder)