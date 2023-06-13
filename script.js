function copy(value) {
    // Get the text field
    var copyText = value;
  
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
    
    // Alert the copied text
    alert("Copied " + copyText + " into clipboard");
  }