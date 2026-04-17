//screens
const startScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");

//buttons
const startBtnNode = document.querySelector("#start-btn");

//game box
const gameBoxNode = document.querySelector("#game-box");

//global variables

// NEW
let score = 0;
let lives = 2;

let maxHealth = 100;
let currentHealth = 100;

const healthFill = document.getElementById("health-fill");
const scoreContainer = document.getElementById("score");
const livesContainer = document.getElementById("lives");

const engineSound = new Audio("./audio/engine.wav");
const crashSound = new Audio("./audio/crash.wav");
const bgMusic = new Audio("./audio/bgmusic.mp3");

// settings
engineSound.loop = true;
engineSound.volume = 0.3;

bgMusic.loop = true;
bgMusic.volume = 0.5;

crashSound.volume = 0.8;

let gameIntervalId = null;
let objSpawnIntervalId = null;

const timeRemainingContainer = document.getElementById("timeRemaining");

const timeDuration = 120; // 120 seconds (2 minutes)

//let bikeObj = null;
//let obstObj = null;
let ballsObj = null;
let obstArray = [];

let timer;

/*function fallBall() {
  /*const obj = document.createElement("div");
  obj.classList.add("falling");*/

// Random horizontal position
/*obj.style.left = Math.random() * window.innerWidth + "px";
  obj.style.top = "0px";*/

//gameBoxNode.appendChild(obj);
/*ballGravity();
  // Move object down every frame
  let position = 0;

  const fall = setInterval(() => {
    position += 5;
    ballsObj.style.top = position + "px";

    // Remove when off screen
    if (position > window.innerHeight) {
      clearInterval(fall);
      obj.remove();
    }
  }, 30);
}*/

// Create new objects repeatedly
/*global game functions: function gameStart {
 changing states*/
function gameStart() {
  startScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  score = 0;
  score = 0;
  currentHealth = maxHealth;

  //lives = 2;

  updateUI();

  gameIntervalId = setInterval(gameLoop, Math.floor(2000 / 60));

  //fallBall();
  //setInterval(Balls, 50);

  //gameIntervalId = setInterval(gameloop, Math.floor(1000/60))

  bikeObj = new Bike();
  //obstObj = new Obstacle();
  timeObj = new Time(timeDuration, timeDuration);
  ballsObj = new Balls();

  startTimer();

  //spawnIntervalId = setInterval(spawn, 2000)

  objSpawnIntervalId = setInterval(spawnObj, 2000);

  engineSound.currentTime = 0;
  engineSound.volume = 0.6;
  engineSound.play();

  bgMusic.currentTime = 0;
  bgMusic.play();
}

function updateUI() {
  // Score
  if (scoreContainer) {
    scoreContainer.innerText = "Score: " + score;
  }

  // Health bar
  if (healthFill) {
    const healthPercent = (currentHealth / maxHealth) * 100;
    healthFill.style.width = healthPercent + "%";

    // color change based on health
    if (healthPercent > 60) {
      healthFill.style.background = "limegreen";
    } else if (healthPercent > 30) {
      healthFill.style.background = "orange";
    } else {
      healthFill.style.background = "red";
    }
  }
}

function startTimer() {
  timer = setInterval(function () {
    // decrease time

    timeObj.timeRemaining--;
    const minutes = Math.floor(timeObj.timeRemaining / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeObj.timeRemaining % 60).toString().padStart(2, "0");

    timeRemainingContainer.innerText = `${minutes}:${seconds}`;

    if (timeObj.timeRemaining <= 0) {
      timeObj.timeRemaining = 0;
      clearInterval(timer);
      gameOver();
    }
  }, 1000);
}
//starting the main game interval

//adding the initial elements of the game

//initialize the other intervals of the game}*/

//all automatic movements, collisions and animations
function gameLoop() {
  /*function gameLoop() {
  //bikeObj.bikeSpeed();
  //ballsObj.ballGravity();
  /*if (ballsObj) {*/
  //ballsObj.ballGravity();

  //obstObj.automaticMove();

  obstArray.forEach((ballsObj) => {
    ballsObj.ballGravity();
  });
  tubeDeSpawnCheck();
  bikeCollisionCheck();
  //ballsObj.ballGravity();
  score += 1;
  updateUI();
}

//funtions gamespawn
function spawnObj() {
  const randomPositionX = Math.floor(Math.random() * 6400);
  const randomPositionY = Math.floor(Math.random() * 6400);
  let newBallFall = new Balls(randomPositionX, randomPositionY);
  obstArray.push(newBallFall);
  // random number between -200 and 0
  /*const randomPositionY = Math.floor(Math.random() * -100);

  let newObstUp = new Obstacle("up", randomPositionY);
  obstArray.push(newObstUp);

  let newObstDown = new Obstacle("down", randomPositionY + 340);
  obstArray.push(newObstDown);*/
}
//functions despawn
//function collition
function tubeDeSpawnCheck() {
  for (let i = obstArray.length - 1; i >= 0; i--) {
    if (obstArray[i].x <= 0) {
      obstArray[i].node.remove();
      obstArray.splice(i, 1);

      score += 20;
    }
  }
}

function bikeCollisionCheck() {
  obstArray.forEach((ballsObj, index) => {
    let isColliding = collisionCheck(bikeObj, ballsObj);

    if (isColliding) {
      crashSound.currentTime = 0;
      crashSound.play();

      // remove obstacle after hit
      ballsObj.node.remove();
      obstArray.splice(index, 1);

      // NEW: lose life instead of game over
      currentHealth -= 25;

      updateUI();

      if (currentHealth <= 0) {
        currentHealth = 0;
        gameOver();
      }
    }
  });
}
function collisionCheck(elem1, elem2) {
  return (
    elem1.x < elem2.x + elem2.width &&
    elem1.x + elem1.width > elem2.x &&
    elem1.y < elem2.y + elem2.height &&
    elem1.y + elem1.height > elem2.y
  );
}

//function game over
function gameOver() {
  clearInterval(gameIntervalId);
  clearInterval(objSpawnIntervalId);
  clearInterval(timer);

  engineSound.play();
  bgMusic.pause();

  gameScreenNode.style.display = "none";
  gameOverScreenNode.style.display = "flex";
}

//event listerners
window.addEventListener("click", () => {
  engineSound.currentTime = 0;
  engineSound.volume = 1;
  engineSound.play();

  //gameStart();
});
window.addEventListener("click", () => {
  bgMusic.currentTime = 0;
  bgMusic.volume = 1;
  bgMusic.play();

  //gameStart();
});
startBtnNode.addEventListener("click", () => {
  engineSound.currentTime = 0;
  engineSound.volume = 0.3;
  engineSound.play();

  gameStart();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    bikeObj.leftSpeed();
    engineSound.volume = 0.9;
  }

  if (e.key === "ArrowRight") {
    bikeObj.rightSpeed();
    engineSound.volume = 0.9;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    engineSound.volume = 0.4;
  }
});
/*gameBoxNode.addEventListener("click", () => {
  birdObj.jump();
});*/
