  // Function to format text (bold, italic, underline)
  function formatText(command) {
    document.execCommand(command, false, null);
  }

  // Function to clear the content of the editor
  function clearContent() {
    document.getElementById("editor").innerHTML = "";
  }