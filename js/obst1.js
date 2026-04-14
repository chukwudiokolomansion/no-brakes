class Obstacle {
  constructor(type) {
    this.type = type;

    this.node = document.createElement("img");
    if (this.type === "up1") {
      this.node.src = "./images/obst11.png";
    } else if (this.type === "up2") {
      this.node.src = "./images/obst11.png";
    }
    gameBoxNode.append(this.node); // add to game screen

    this.x = 500;
    this.y = 400;
    this.width = 40;
    this.height = 250;

    // initial adjustments of styles
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    //this.node.style.left = `${this.x}px`;
    //this.node.style.left = Math.random() * window.innerWidth + "px";

    this.gravitySpeed = 2; //Math.random() * window.innerWidth;
  }

  automaticGravity() {
    this.y -= this.gravitySpeed;
    this.node.style.left = `${this.x}px`;
  }
}
