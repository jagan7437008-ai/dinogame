const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const scoreText = document.getElementById("score");
const message = document.getElementById("message");
const music = document.getElementById("music");

let score = 0;
let gameFinished = false;

// Dino position
let dinoY = 140;
let jumping = false;
let velocity = 0;

function drawDino() {
  ctx.font = "28px Arial";
  ctx.fillText("🦖", 50, dinoY);
}

function updateDino() {
  if (jumping) {
    velocity -= 1;
    dinoY -= velocity;

    if (dinoY >= 140) {
      dinoY = 140;
      jumping = false;
      velocity = 0;
    }
  }
}

document.addEventListener("keydown", function (e) {
  if (e.code === "Space" && !jumping) {
    jumping = true;
    velocity = 15;
  }
});

function gameLoop() {
  if (gameFinished) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawDino();
  updateDino();

  score++;
  scoreText.innerText = "Score: " + score;

  if (score >= 100) {
    gameFinished = true;
    message.innerHTML =
      "🎉 WOOOHHHH!!! 🎉<br>HAPPY BIRTHDAY BHAI ❤️<br>May your life level up forever 🚀";
    music.play();
    return;
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();
