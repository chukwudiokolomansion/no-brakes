class Obstacle {
  constructor(type, yPosition) {
    this.type = type;

    this.node = document.createElement("img");
    if (this.type === "up") {
      this.node.src = "./images/obst11.png";
    } else if (this.type === "down") {
      this.node.src = "./images/obst12.jpg";
    }
    gameBoxNode.append(this.node); // add to game screen

    this.lanes = [10, 30, 50, 70, 90];
    this.lane = this.lanes[Math.floor(Math.random() * this.lanes.length)];

    this.gravitySpeed = 50; //Math.random() * window.innerWidth;

    this.x = 500;
    this.y = yPosition;
    this.width = 50;
    this.height = 50;

    // initial adjustments of styles
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;
    this.node.style.position = "absolute";
    this.node.style.transform = "translateX(-50%)";
    this.node.style.left = this.lane + "%";

    this.updatePosition();
  }

  updatePosition() {
    this.node.style.top = this.y + "px";
  }

  automaticMove() {
    this.y += this.gravitySpeed;
    this.updatePosition();
  }
}
