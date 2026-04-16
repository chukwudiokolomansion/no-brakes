//screens
const startScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");

//buttons
const startBtnNode = document.querySelector("#start-btn");

//game box
const gameBoxNode = document.querySelector("#game-box");

//global variables
const engineSound = new Audio("../audio/engine.wav");
const crashSound = new Audio("../audio/crash.wav");
const bgMusic = new Audio("../audio/bgmusic.mp3");

// settings
engineSound.loop = true;
engineSound.volume = 1;

bgMusic.loop = true;
bgMusic.volume = 0.5;

crashSound.volume = 0.8;

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

  objSpawnIntervalId = setInterval(spawnObj, 2000);

  engineSound.currentTime = 0;
  engineSound.play();

  bgMusic.currentTime = 0;
  bgMusic.play();
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
  tubeDespawnCheck();
  bikeCollitionCheck();
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
function tubeDespawnCheck() {
  obstArray.forEach((ballsObj, index) => {
    if (ballsObj.x <= 0) {
      // When we want to remove an element from the game we need to remove it from both environments:
      //1. DOM environment
      ballsObj.node.remove();
      //2 JS environment
      obstArray.splice(index, 1);
    }
  });
}

function bikeCollitionCheck() {
  // birdObj
  // tubeObj
  obstArray.forEach((ballsObj) => {
    let isColliding = collisionCheck(bikeObj, ballsObj);
    if (isColliding === true) {
      crashSound.currentTime = 0;
      crashSound.play();
      gameOver();
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
startBtnNode.addEventListener("click", gameStart);

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
