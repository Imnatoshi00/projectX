// DARK/LIGHT TOGGLE
function toggleMode() {
  const container = document.querySelector(".container");
  container.classList.toggle("dark-mode");

  const btn = document.querySelector(".toggle-btn");
  btn.textContent = container.classList.contains("dark-mode") ? "☀️" : "🌙";
}

// LOGOUT
function logout() {
  window.location.href = "login.html";
}

/* MINI GAME */
let score = 0;
let timeLeft = 30;
let gameInterval;
let timerInterval;

const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const target = document.getElementById("target");
const gameArea = document.querySelector(".game");

// START OR RESTART GAME
function startGame() {
  clearInterval(gameInterval);
  clearInterval(timerInterval);

  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;

  moveTarget();
  gameInterval = setInterval(moveTarget, 2000); // move target every 2s
  timerInterval = setInterval(countdown, 1000); // countdown every second
}

// MOVE TARGET RANDOMLY
function moveTarget() {
  const maxX = gameArea.clientWidth - target.clientWidth;
  const maxY = gameArea.clientHeight - target.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  target.style.left = randomX + "px";
  target.style.top = randomY + "px";
}

// COUNTDOWN TIMER
function countdown() {
  if (timeLeft > 0) {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
  } else {
    endGame();
  }
}

// CLICK EVENT FOR TARGET
target.addEventListener("click", () => {
  if (timeLeft > 0) {
    score++;
    scoreDisplay.textContent = score;
    moveTarget();
  }
});

// END GAME
function endGame() {
  clearInterval(gameInterval);
  clearInterval(timerInterval);
  alert(`Time's up! Your final score is: ${score}`);
}

// START GAME WHEN PAGE LOADS
window.onload = startGame;
