console.log("loaded 🤍")

const stage = document.querySelector("body");
const macarons = document.getElementById("macarons");

// Sounds
const macaronSound = new Audio("sounds/so-cute-64351.mp3");

macarons.onclick = function() {
    this.classList.toggle("move");
    macaronSound.play();
}

stage.addEventListener("click", function() {
    console.log(event.clientX + " : " + event.clientY)
    //macarons.style.transform = "translateX("+ event.clientX +"px) translateY("+ event.clientY+"px)";
    //"" '' ``
    macarons.style.transform = `translateX(${event.clientX-100}px) translateY(${event.clientY-92}px)`;
    macarons.style.transform = coords;
})

// Keyboard input
document.onkeydown = checkKeys;

function checkKeys(event) {
    
    var style = window.getComputedStyle(macarons);
    var matrix = new WebKitCSSMatrix(style.transform);
    var xVal = matrix.m41;
    var yVal = matrix.m42;    
    var coords;

    //left arrow
    if(event.keyCode == "37") {
        coords = `translateX(${xVal-200}px) translateY(${yVal}px)`;
        macarons.style.transform = coords;
    }

    //right arrow
    if(event.keyCode == "39") {
        coords = `translateX(${xVal+200}px) translateY(${yVal}px)`;
        macarons.style.transform = coords;
    }

    //up arrow
    if(event.keyCode == "38") {
        coords = `translateX(${xVal}px) translateY(${yVal-200}px)`;
        macarons.style.transform = coords;
    }

    //down arrow
    if(event.keyCode == "40") {
        coords = `translateX(${xVal}px) translateY(${yVal+200}px)`;
        macarons.style.transform = coords;
    }



}
function addMyObject(){

    /* Custom Object */

    let myObject = document.createElement("img");
    myObject.src = "js/macarons.png";
    myObject.style.width = "200px";
    //myObject.style.width = "80px";
    stage.append(myObject);

    let w = window.innerWidth;
    let randoX = Math.floor((Math.random() * w) + 1);
    let h = window.innerHeight;
    let randoY = Math.floor((Math.random() * h) + 1);

    myObject.style.transform = `translateX(${randoX}px) translateY(${randoY}px)`;

    setTimeout(() => { myObject.remove(); addMyObject(); }, 4000);

}
addMyObject();