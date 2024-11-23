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
var sidebar = document.querySelector("#info");
var shareSheet = document.querySelector("#shareSheet");
var eyeStatus;

/* --------------------------------------------------------------------------------------------------
functions
---------------------------------------------------------------------------------------------------*/
function paintEye(ev) {
    ev.currentTarget.classList.toggle("visible");
    localStorage.setItem("Daruma_" + ev.currentTarget.id, ev.currentTarget.className);
}

function saveWish(ev) {
    localStorage.setItem("Daruma_wish", ev.currentTarget.textContent);
}

function changeColor(ev) {
    daruma.src = "svg/daruma-" + ev.currentTarget.value + ".svg";
    localStorage.setItem("Daruma_colorIndex", ev.currentTarget.selectedIndex);
    localStorage.setItem("Daruma_color", ev.currentTarget.value);
}

function toggleNav() {
    sidebar.classList.toggle("open");
}

function hideText() {
    eyeStatus = (eyeStatus === "on") ? "off" : "on";
    wishInput.classList.toggle("hide");
    wishButton.src = "svg/eye-" + eyeStatus + ".svg";

    if (eyeStatus === "off") {
        let originalText = wishInput.textContent;
        wishInput.setAttribute("data-original-text", originalText);
        let obfuscatedText = originalText.replace(/\S/g, "•");
        wishInput.textContent = obfuscatedText;

        localStorage.setItem("Daruma_wish", originalText);
    } else {
        let originalText = wishInput.getAttribute("data-original-text");
        wishInput.textContent = originalText || '';
        wishInput.removeAttribute("data-original-text");
    }

    localStorage.setItem("Daruma_eyeStatus", eyeStatus);
}

function showTextOnFocus() {
    if (eyeStatus === "off") {
        let originalText = wishInput.getAttribute("data-original-text");
        wishInput.textContent = originalText || '';
        wishInput.removeAttribute("data-original-text");
        wishButton.src = "svg/eye-on.svg";

        eyeStatus = "on";
        localStorage.setItem("Daruma_eyeStatus", eyeStatus);
    }
}

function loadStoredValues() {
    let savedWish = localStorage.getItem("Daruma_wish") || '';
    wishInput.textContent = savedWish;

    eyeStatus = localStorage.getItem("Daruma_eyeStatus") || 'on';
    if (eyeStatus === "off") {
        wishInput.setAttribute("data-original-text", savedWish);

        let obfuscatedText = savedWish.replace(/\S/g, "•");
        wishInput.textContent = obfuscatedText;
    }
    wishButton.src = "svg/eye-" + eyeStatus + ".svg";

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
            title: "Dein digitaler Daruma",
            url: "https://tehes.github.io/daruma/",
            text: "Ich möchte dir diesen Daruma schenken."
        })
    } else {
        shareSheet.classList.toggle("show");
    }
}


function init() {
    loadStoredValues();

    document.addEventListener("touchstart", function() {}, false);

    leftEye.addEventListener("click", paintEye, false);
    rightEye.addEventListener("click", paintEye, false);
    wishInput.addEventListener("blur", saveWish, false);
    wishInput.addEventListener("focus", showTextOnFocus, false);
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
