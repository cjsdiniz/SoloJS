//Changes all children Text in "Demo" to "new text"
function setText() {
    var a = document.getElementById("demo");
     var arr = a.childNodes;
     for(var x=0;x<arr.length;x++) {
       arr[x].innerHTML = "new text";
     }
}

//calling the function with setTimeout to make sure the HTML is loaded
setTimeout(setText, 500);

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
  //creating a new paragraph
  var p = document.createElement("p");
  var node = document.createTextNode("Some new text");
  //adding the text to the paragraph
  p.appendChild(node);

  var div = document.getElementById("demo");
  //adding the paragraph to the div
  div.appendChild(p);
};