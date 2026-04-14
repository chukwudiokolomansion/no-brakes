class Obstacle {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/obst11.jpg";
    gameBoxNode.append(this.node); // add to game screen

    this.x = 50;
    this.y = 60;
    this.width = 40;
    this.height = 50;

    // initial adjustments of styles
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    this.gravitySpeed = 1;
  }

  automaticGravity() {
    this.y += this.gravitySpeed;
    this.node.style.top = `${this.y}px`;
  }
}
