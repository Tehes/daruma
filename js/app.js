/* --------------------------------------------------------------------------------------------------
Imports
---------------------------------------------------------------------------------------------------*/

/* --------------------------------------------------------------------------------------------------
Variables
---------------------------------------------------------------------------------------------------*/
var leftEye = document.querySelector(".leftEye");
var rightEye = document.querySelector(".rightEye");
var wishInput = document.querySelector("#wish span");
var colorSelector = document.querySelector("#colorSelector");
var hamburgerIcon = document.querySelector("#hamburger");
var sidebar = document.querySelector("aside");

/* --------------------------------------------------------------------------------------------------
functions
---------------------------------------------------------------------------------------------------*/
function paintEye() {
    event.currentTarget.classList.toggle("visible");
}

function saveWish() {

}

function changeColor() {
    var daruma = document.querySelector("#daruma img");
    daruma.src = "svg/daruma-"+ event.currentTarget.value +".svg";
}


function init() {
    wishInput.contentEditable = true;
    document.addEventListener("touchstart", function() {}, false);
    leftEye.addEventListener("click", paintEye, false);
    rightEye.addEventListener("click", paintEye, false);
    wish.addEventListener("blur", saveWish, false);
    colorSelector.addEventListener("change", changeColor, false);
    hamburgerIcon.addEventListener("click", toggleNav, false);
}

function toggleNav() {
        sidebar.classList.toggle("open");
    }

/* --------------------------------------------------------------------------------------------------
public members, exposed with return statement
---------------------------------------------------------------------------------------------------*/
window.app = {
    init
};

app.init();
