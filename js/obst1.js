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

    this.x = 500;
    this.y = yPosition;
    this.width = 40;
    this.height = 250;

    // initial adjustments of styles
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.down = `${this.x}px`;

    //this.node.style.left = `${this.x}px`;
    //this.node.style.left = Math.random() * window.innerWidth + "px";

    this.gravitySpeed = 2; //Math.random() * window.innerWidth;
  }

  automaticGravity() {
    this.x += this.gravitySpeed;
    this.node.style.left = `${this.x}px`;
  }
}
