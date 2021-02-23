var editorjs = CodeMirror.fromTextArea(document.getElementById("main-typer"), {
    lineNumbers: true,
    mode: "javascript",
    indentUnit: 4,
    theme: "rdark",
    viewportMargin: Infinity,
    lineWrapping: true
})

var placeholder = 'var this_is = "the start of a great journey.";'
editorjs.setValue(placeholder)