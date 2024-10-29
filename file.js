const meterToFeet = 3.281;

const literToGaloon = 0.264;

const kiloToPounds = 2.204;


const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert_btn")
const lengthEl = document.getElementById("meterFeet-el")
const volumeEl = document.getElementById("litersGaloons-el")
const massEl = document.getElementById("kiloPounds-el")


let meter = "";
let feet = "";
let liter = "";
let galoon = "";
let kilogram = "";
let pound = "";

function convert() {
    inputValue = inputEl.value 
    feet = (inputValue * meterToFeet).toFixed(3)
    meter = (inputValue/meterToFeet).toFixed(3)

    galoon = (inputValue * literToGaloon).toFixed(3)
    liter = (inputValue/literToGaloon).toFixed(3)

    pound = (inputValue * kiloToPounds).toFixed(3)
    kilogram = (inputValue/kiloToPounds).toFixed(3)

    renderResult()
}

function renderResult() {

    lengthEl.textContent = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meter} meters`;
    volumeEl.textContent = `${inputValue} liters = ${galoon} gallons | ${inputValue} gallons = ${liter} liters`;
    massEl.textContent = `${inputValue} kilograms = ${pound} pounds | ${inputValue} pounds = ${kilogram} kilograms`;
}

const toggleSwitch = document.getElementById("checkbox-theme");

function detectColorScheme() {
    let theme = "light"; 
    if (localStorage.getItem("theme")) {
        theme = localStorage.getItem("theme");
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "dark";
    }
    document.documentElement.setAttribute("data-theme", theme);
    toggleSwitch.checked = theme === "dark";
}

// Функція для перемикання теми
function switchTheme(e) {
    const theme = e.target.checked ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
}

// Ініціалізація та обробник подій
detectColorScheme();
toggleSwitch.addEventListener("change", switchTheme);
