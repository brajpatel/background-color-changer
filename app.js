const colors = ["red", "green", "blue", "firebrick", "orange", "gold", "khaki", "yellow", "pink", "chocolate", "grey", "silver"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
// get random no. between 0 - 3
    const randomNumber = getRandomNumber();
    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
})
// generate random whole number between 0 - length of colors array
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}