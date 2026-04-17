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
  updatePosition() {
    const minLeft = 2600;
    const maxRight = 4700 - this.width;

    if (this.x < minLeft) this.x = minLeft;
    if (this.x > maxRight) this.x = maxRight;

    this.node.style.left = this.x + "px";
  }

  leftSpeed() {
    this.x -= this.swerveSpeed;
    this.updatePosition();

    this.node.style.left = `${this.x}px`;
  }
  rightSpeed() {
    this.x += this.swerveSpeed;
    this.updatePosition();

    this.node.style.left = `${this.x}px`;
  }
}
