//screens
const startScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");

//buttons
const startBtnNode = document.querySelector("#start-btn");

//game box
const gameBoxNode = document.querySelector("#game-screen");

//global variables
const timeRemainingContainer = document.getElementById("timeRemaining");

const timeDuration = 30; // 120 seconds (2 minutes)

let bikeObj = null;
let obstObj = null;

let timer;

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

/*global game functions: function gameStart {
 changing states*/
function gameStart() {
  startScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  startTimer();

  //gameIntervalId = setInterval(gameloop, Math.floor(1000/60))
  gameIntervalId = setInterval(gameloop, Math.floor(1000 / 60));

  bikeObj = new Bike();
  obstObj = new Obstacle();
  timeObj = new Time(timeDuration, timeDuration);

  //spawnIntervalId = setInterval(spawn, 2000)
}

//starting the main game interval

//adding the initial elements of the game

//initialize the other intervals of the game}*/

//all automatic movements, collisions and animations
//funtions gameloop
function gameloop() {
  //bikeObj.bikeSpeed();
  obstObj.automaticGravity();
}

//funtions gamespawn
//functions despawn
//function collition
//function collition

//function game over
function gameOver() {
  gameScreenNode.style.display = "none";
  gameOverScreenNode.style.display = "flex";
}

//event listerners
startBtnNode.addEventListener("click", gameStart);

/*gameBoxNode.addEventListener("click", () => {
  birdObj.jump();
});*/
