//screens
const startScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");

//buttons
const startBtnNode = document.querySelector("#start-btn");

//game box
const gameBoxNode = document.querySelector("#game-box");

//global variables
let bikeObj = null;
let obstObj = null;

/*global game functions: function gameStart {
 changing states*/
function gameStart() {
  startScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  //gameIntervalId = setInterval(gameloop, Math.floor(1000/60))
  gameIntervalId = setInterval(gameloop, Math.floor(1000 / 60));

  bikeObj = new Bike();
  obstObj = new Obstacle();

  //spawnIntervalId = setInterval(spawn, 2000)
}

//starting the main game interval

//adding the initial elements of the game

//initialize the other intervals of the game}*/

//all automatic movements, collisions and animations
//funtions gameloop
function gameloop() {
  bikeObj.bikeSpeed();
  obstObj.automaticGravity();
}

//funtions gamespawn
//functions despawn
//function collition
//function collition check
//function game over

//event listerners
startBtnNode.addEventListener("click", gameStart);

/*gameBoxNode.addEventListener("click", () => {
  birdObj.jump();
});*/
