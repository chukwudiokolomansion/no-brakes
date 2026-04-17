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
    //this.rightSwerve = 40;
    //this.leftSwerve = 40
  }

  leftSpeed() {
    this.x -= this.swerveSpeed;
    this.node.style.left = `${this.x}px`;
    //! everytime we adjust a numerical value like y, x,
    // width or height, WE NEED TO ADJUST THE NODE
    //  (width, height, top or left)
  }
  rightSpeed() {
    this.x += this.swerveSpeed;
    this.node.style.left = `${this.x}px`;
  }

  /*swerveRight() {
    this.y -= this.jumpSpeed;
    this.node.style.top = `${this.y}px`;
  }*/

  /*swerveLeft() {
    this.y -= this.jumpSpeed;
    this.node.style.top = `${this.y}px`;
  }*/
}
