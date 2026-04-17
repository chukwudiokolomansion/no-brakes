class Bike {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/bike1.png";
    gameBoxNode.append(this.node); // adding the node to the game screen

    this.x = 3400;
    this.y = 2700;
    this.width = 500;
    this.height = 900;

    // initial adjustments of styles
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    this.swerveSpeed = 50;
  }

  leftSpeed() {
    this.x -= this.swerveSpeed;
    this.node.style.left = `${this.x}px`;
  }
  rightSpeed() {
    this.x += this.swerveSpeed;
    this.node.style.left = `${this.x}px`;
  }
}
