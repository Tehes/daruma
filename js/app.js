/* --------------------------------------------------------------------------------------------------
Variables
---------------------------------------------------------------------------------------------------*/
var daruma = document.querySelector("#daruma img");
var leftEye = document.querySelector("#leftEye");
var rightEye = document.querySelector("#rightEye");
var wishInput = document.querySelector("#wish span");
var wishButton = document.querySelector("#wish img");
var colorSelector = document.querySelector("#colorSelector");
var hamburgerIcon = document.querySelector("#hamburger");
var shareIcon = document.querySelector("header img");
var sidebar = document.querySelector("aside");
var eyeStatus = "on";

/* --------------------------------------------------------------------------------------------------
functions
---------------------------------------------------------------------------------------------------*/
function paintEye() {
    event.currentTarget.classList.toggle("visible");
    localStorage.setItem("Daruma_" + event.currentTarget.id, event.currentTarget.className);
}

function saveWish() {
    localStorage.setItem("Daruma_wish", event.currentTarget.textContent);
}

function changeColor() {
    daruma.src = "svg/daruma-" + event.currentTarget.value + ".svg";
    localStorage.setItem("Daruma_colorIndex", event.currentTarget.selectedIndex);
    localStorage.setItem("Daruma_color", event.currentTarget.value);
}

function toggleNav() {
    sidebar.classList.toggle("open");
}

function hideText() {
    eyeStatus = (eyeStatus === "on") ? "off" : "on";
    wishInput.classList.toggle("hide");
    wishButton.src = "svg/eye-" + eyeStatus + ".svg";
}

function loadStoredValues() {
    wishInput.textContent = localStorage.getItem("Daruma_wish") || '';
    leftEye.className = localStorage.getItem("Daruma_leftEye") || '';
    rightEye.className = localStorage.getItem("Daruma_rightEye") || '';
    colorSelector.selectedIndex = localStorage.getItem("Daruma_colorIndex") || 0;
    var color = localStorage.getItem("Daruma_color") || 'red';
    daruma.src = "svg/daruma-" + color + ".svg";
    if (localStorage.getItem("Daruma_visited") !== "yes") {
        openSidebar();
    }
}

function openSidebar() {
    hamburgerIcon.checked = true;
    sidebar.classList.add("open");
}

function share() {
    if (navigator.share) {
        navigator.share({
            title: 'Dein digitaler Daruma',
            url: 'https://tehes.github.io/daruma/'
        })
    } else {
        // show share modal
        console.log("clicked");
    }
}


function init() {
    loadStoredValues();

    document.addEventListener("touchstart", function() {}, false);

    leftEye.addEventListener("click", paintEye, false);
    rightEye.addEventListener("click", paintEye, false);
    wishInput.addEventListener("blur", saveWish, false);
    wishButton.addEventListener("click", hideText, false);
    colorSelector.addEventListener("change", changeColor, false);
    hamburgerIcon.addEventListener("click", toggleNav, false);
    shareIcon.addEventListener("click", share, false);

    localStorage.setItem("Daruma_visited", "yes");
}

/* --------------------------------------------------------------------------------------------------
public members, exposed with return statement
---------------------------------------------------------------------------------------------------*/
window.app = {
    init
};

app.init();
