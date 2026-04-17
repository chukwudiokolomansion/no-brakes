class Balls {
  constructor(upBall, downBall) {
    this.node = document.createElement("img");
    //this.node.src = "./images/obst11.png";
    const carImages = [
      "./images/obst1.png",
      "./images/stone1.png",
      "./images/dragon.png",
    ];

    this.node.src = carImages[Math.floor(Math.random() * carImages.length)];
    //this.node.src = "./images/car.png";

    gameBoxNode.append(this.node); // add to game screen

    this.x = upBall;
    this.y = downBall;
    this.width = 240;
    this.height = 340;

    // initial adjustments of styles
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    //this.node.style.top = "60px";
    //this.node.style.left = Math.random() * window.innerWidth + "px";

    //Random horizontal position

    this.Speed = 15;
  }

  ballGravity() {
    this.y += this.Speed;
    this.node.style.top = `${this.y}px`;
    //this.node.left = Math.random() * window.innerWidth + "px";
    //this.node.style.top = "0px";
  }
}
