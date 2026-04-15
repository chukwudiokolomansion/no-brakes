//screens
const startScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");

//buttons
const startBtnNode = document.querySelector("#start-btn");

//game box
const gameBoxNode = document.querySelector("#game-box");

//global variables
let gameIntervalId = null;
let objSpawnIntervalId = null;

const timeRemainingContainer = document.getElementById("timeRemaining");

const timeDuration = 120; // 120 seconds (2 minutes)

//let bikeObj = null;
let obstObj = null;
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

  gameIntervalId = setInterval(gameLoop, Math.floor(2000 / 60));

  //fallBall();
  //setInterval(Balls, 50);

  //gameIntervalId = setInterval(gameloop, Math.floor(1000/60))

  bikeObj = new Bike();
  obstObj = new Obstacle();
  timeObj = new Time(timeDuration, timeDuration);
  ballsObj = new Balls();

  startTimer();

  //spawnIntervalId = setInterval(spawn, 2000)

  objSpawnIntervalId = setInterval(spawnObj, 1000);
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
  ballsObj.ballGravity();

  //obstObj.automaticMove();

  obstArray.forEach((ballsObj) => {
    ballsObj.ballGravity();
  });
  //ballsObj.ballGravity();
}

//funtions gamespawn
function spawnObj() {
  const randomPositionX = Math.floor(Math.random() * 1800);
  const randomPositionY = Math.floor(Math.random() * 100);
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
//function collition

//function game over
function gameOver() {
  clearInterval(gameIntervalId);
  clearInterval(objSpawnIntervalId);
  clearInterval(timer);

  gameScreenNode.style.display = "none";
  gameOverScreenNode.style.display = "flex";
}

//event listerners
startBtnNode.addEventListener("click", gameStart);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    bikeObj.leftSpeed();
  }

  if (e.key === "ArrowRight") {
    bikeObj.rightSpeed();
  }
});

/*gameBoxNode.addEventListener("click", () => {
  birdObj.jump();
});*/
