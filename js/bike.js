class Bike {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/bike1.png";
    gameBoxNode.append(this.node); // adding the node to the game screen

    this.x = 850;
    this.y = 600;
    this.width = 240;
    this.height = 300;

    // initial adjustments of styles
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    this.engineSpeed = 1;
    //this.rightSwerve = 40;
    //this.leftSwerve = 40
  }

  bikeSpeed() {
    this.y -= this.engineSpeed;
    this.node.style.top = `${this.y}px`;
    //! everytime we adjust a numerical value like y, x, width or height, WE NEED TO ADJUST THE NODE (width, height, top or left)
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
