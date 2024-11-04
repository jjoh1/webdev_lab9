function init(){
  var button = document.getElementById('entrybutton');
  
  function processInput() {
    //get the input
    var inputBox = document.getElementById('entryinput');
    var inputText = inputBox.value;
    
    //set h2
    var header = document.getElementById('textoutput');
    header.innerHTML = inputText;
    
    //alert
    alert("Justice Oh: " + inputText);
  }
  
  //listen for click
  button.addEventListener('click', processInput);
}

window.addEventListener('load', init);