/* --------------------------------------------------------------------------------------------------
Imports
---------------------------------------------------------------------------------------------------*/

/* --------------------------------------------------------------------------------------------------
Variables
---------------------------------------------------------------------------------------------------*/
var leftEye = document.querySelector(".leftEye");
var rightEye = document.querySelector(".rightEye");
var wish = document.querySelector("#wish");
var colorSelector = document.querySelector("#colorSelector");

/* --------------------------------------------------------------------------------------------------
functions
---------------------------------------------------------------------------------------------------*/
function paintEye() {
    event.currentTarget.classList.add("visible");
}

function saveWish() {
    event.currentTarget.contentEditable = false;
    event.currentTarget.classList.add("entered");
    wish.removeEventListener("click", enterWish, false);
}

function changeColor() {
    var daruma = document.querySelector("#daruma img");
    daruma.src = "svg/daruma-"+ event.currentTarget.value +".svg";
}


function init() {
    wish.contentEditable = true;
    document.addEventListener("touchstart", function() {}, false);
    leftEye.addEventListener("click", paintEye, false);
    rightEye.addEventListener("click", paintEye, false);
    wish.addEventListener("blur", saveWish, false);
    colorSelector.addEventListener("change", changeColor, false);
}

/* --------------------------------------------------------------------------------------------------
public members, exposed with return statement
---------------------------------------------------------------------------------------------------*/
window.app = {
    init
};

app.init();
