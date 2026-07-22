// Data selector
const btn1 = document.getElementById("btn"); // Select button using ID
const btn2 = document.querySelector(".selector"); // Select button using class

// Styling from JS
btn1.style.background = "lime";
btn1.style.padding = "1rem";
btn2.style.background = "orange";

// Event Listener
function changeColor() { // Changing button color when clicked
    btn1.style.background = "aqua";
    console.log("Hi")
}

function changeText() {
    btn2.textContent = "Hi"
}

function resetText() {
    btn2.textContent = "Click Me"
}