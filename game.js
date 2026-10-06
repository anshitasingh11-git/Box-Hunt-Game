const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const targetBox = document.querySelector(".target-box");
const startButton = document.getElementById("start-button");

let score = 0;
let timeLeft = 30;
let timer;

startButton.addEventListener("click", startGame);

function startGame() {
    console.log("START BUTTON WORKED!");
    score = 0;
    timeLeft = 30;
    
    scoreElement.textContent = score;
    timeElement.textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
        }
    }, 1000);
}
targetBox.addEventListener("click", () => {
    if(timeLeft === 0){
      return;
    }
    score++;
    scoreElement.textContent = score;

    moveTarget();
});
function moveTarget() {
    const containerWidth = document.querySelector(".game-container").clientWidth;
    const containerHeight = document.querySelector(".game-container").clientHeight;

    const targetWidth = targetBox.offsetWidth;
    const targetHeight = targetBox.offsetHeight;

    const randomX = Math.random() * (containerWidth - targetWidth);
    const randomY = Math.random() * (containerHeight - targetHeight);

    targetBox.style.left = `${randomX}px`;
    targetBox.style.top = `${randomY}px`;
}
