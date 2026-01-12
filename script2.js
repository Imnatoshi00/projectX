/* 🌙 DARK / LIGHT MODE */
function toggleMode() {
  document.body.classList.toggle("dark-mode");

  const btn = document.querySelector(".toggle-btn");
  if (!btn) return;

  btn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
}

/* 🚪 LOGOUT */
function logout() {
  window.location.href = "index.html";
}

/* 🎮 MINI GAME */
let score = 0;
let timeLeft = 30;
let gameInterval;
let timerInterval;

// Get elements safely
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const target = document.getElementById("target");
const gameArea = document.querySelector(".game");

/* START GAME */
function startGame() {
  if (!gameArea || !target || !scoreDisplay || !timeDisplay) return;

  clearInterval(gameInterval);
  clearInterval(timerInterval);

  score = 0;
  timeLeft = 30;

  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;

  moveTarget();
  gameInterval = setInterval(moveTarget, 2000);
  timerInterval = setInterval(countdown, 1000);
}

/* MOVE TARGET */
function moveTarget() {
  if (!gameArea || !target) return;

  const maxX = gameArea.clientWidth - target.clientWidth;
  const maxY = gameArea.clientHeight - target.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  target.style.left = randomX + "px";
  target.style.top = randomY + "px";
}

/* TIMER */
function countdown() {
  if (timeLeft > 0) {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
  } else {
    endGame();
  }
}

/* TARGET CLICK */
if (target) {
  target.addEventListener("click", () => {
    if (timeLeft > 0) {
      score++;
      scoreDisplay.textContent = score;
      moveTarget();
    }
  });
}

/* END GAME */
function endGame() {
  clearInterval(gameInterval);
  clearInterval(timerInterval);
  alert(`Time's up! Your final score is: ${score}`);
}

/* START GAME ONLY IF GAME EXISTS */
document.addEventListener("DOMContentLoaded", () => {
  if (gameArea) {
    startGame();
  }
});
