function init(){
  var button = document.getElementById('entrybutton');
  
  function processInput() {
    //get the input
    var inputBox = document.getElementById('entryinput'); //inputBox stores the HTML element
    var inputText = inputBox.value; //inputText stores the text value of the box
    
    //set h2
    var header = document.getElementById('textoutput'); //grab the h2 and store it in "header"
    header.innerHTML = inputText; //set "header" html to be the text from the input
    
    //alert
    alert("Justice Oh: " + inputText); //alert user with text from the input prepended with name
  }
  
  //listen for click
  button.addEventListener('click', processInput);
}

window.addEventListener('load', init);