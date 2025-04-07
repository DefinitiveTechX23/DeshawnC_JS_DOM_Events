//When the dom is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function(){

    //Get the element with an id of onload
    let onLoadEl = document.getElementById("onload");
   
    //Add some HTML within the element we grabbed
    onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>"
   
   })
   
   //Get the element that will show our key code
let directionEl = document.getElementById("direction");

// Can be changed with Key press or key up depending on what you might need
document.addEventListener("keydown", function(e) {

 // When a key is pressed, the element with the id of direction will show the message
 directionEl.innerText = `The Key you pressed is ${e.code}`;

});

//My event

let clickme = document.getElementById("clickMe");

clickme.addEventListener("click",function() {
alert("You clicked me!");

});

//random color

function getRandomcolor(){

const r = Math.floor(Math.random() * 256); //value for red
const g = Math.floor(Math.random() * 256); // value for green
const b = Math.floor(Math.random() * 256); //value for blue
return `rgb(${r}, ${g}, ${b})`;
}

const randomColorBtn = document.getElementById("randomColorBtn");
randomColorBtn.addEventListener("click", function(){

    document.body.style.backgroundColor = getRandomColor();
});