
let container = document.querySelector(".container");
let button = document.getElementById("toggleButton");

function toggleDark() {
    console.log(container.classList);
    container.classList.add("dark-mode");

}
button.onclick = toggleDark;