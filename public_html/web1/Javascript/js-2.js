console.log("JS 2 in action")

// Step 1 - Selecting the element
const myShape = document.getElementById("pentagon");

//Step 2 - adding a click event
// myShape.addEventListener("click", functional() {
myShape.addEventListener("click",() => {
    myShape.classList.toggle("change-me");
} )