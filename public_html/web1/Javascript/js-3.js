console.log("loaded");


const myCircles = document.querySelectorAll(".circle");

myCircles.forEach(function(item, index) {
    item.addEventListener("click", function() {
        // alert("circle clicked: ") + (parseInt(index) + 1));
        console.log("circle clicked: " + (parseInt(index) + 1));

        if(item.classList.contains("square")) {
            //dosomething
            item.classList.toggle("make-round")
        } else {
        //do something else
        item.classList.toggle("move-me");
        }
    })
})
