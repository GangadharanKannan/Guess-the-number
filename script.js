'use strict';

let secretNumber = Number(Math.trunc(Math.random()*20 + 1));
let score = 20;
document.querySelector(".highscore").textContent = localStorage.getItem("high");
// document.addEventListener("DOMContentLoaded")

document.querySelector(".check").addEventListener("click",() => {

    const guess = document.querySelector(".guess").value;
    if(!guess) {
        document.querySelector(".message").textContent = "🥚 No Number Entered";
    } else if(guess == secretNumber) {
        if(score > 1) {
            document.querySelector(".message").textContent = "🎉 Correct Guess Bro...";
            document.body.style.backgroundColor ="#60b347";
            document.querySelector(".number").textContent = secretNumber;
            document.querySelector(".number").style.width = "30rem";
            let highScore = score;
            localStorage.setItem("high", score);
            document.querySelector(".highscore").textContent = localStorage.getItem("high");
        }
    } else if(guess < secretNumber) {
        if(score > 1) {
            document.querySelector(".message").textContent = "📉 Too Low...";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "❌ You Lost the Silly Game";
            document.querySelector(".score").textContent = 0;
        }
    } else if(guess > secretNumber) {
        if(score > 1) {
            document.querySelector(".message").textContent = "📈 Too High...";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "❌ You Lost the Silly Game";
            document.querySelector(".score").textContent = 0;
        }
    }
})

document.querySelector(".again").addEventListener("click",() => {
    score = 20;
    secretNumber = Number(Math.trunc(Math.random()*20 + 1));
    document.querySelector(".message").textContent = "Start guessing...";
    document.body.style.backgroundColor ="#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    document.querySelector(".highscore").textContent = localStorage.getItem("high");
})