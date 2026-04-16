class Car {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/car.png"; // add your car image

    gameBoxNode.append(this.node);

    this.width = 80;
    this.height = 120;

    // 🎯 SAME LANES as bike
    this.lanes = [10, 30, 50, 70, 90];
    this.laneIndex = Math.floor(Math.random() * this.lanes.length);

    this.xPercent = this.lanes[this.laneIndex];
    this.y = -150; // start above screen

    this.speed = 6;

    this.node.style.position = "absolute";
    this.node.style.width = this.width + "px";
    this.node.style.height = this.height + "px";

    this.node.style.left = this.xPercent + "%";
    this.node.style.transform = "translateX(-50%)";

    this.updatePosition();
  }

  updatePosition() {
    this.node.style.top = this.y + "px";
  }

  move() {
    this.y += this.speed;
    this.updatePosition();
  }
}

function spawnObj() {
  let newCar = new Car();
  obstArray.push(newCar);
}

obstArray.forEach((car) => {
  car.move();
});

function tubeDespawnCheck() {
  obstArray.forEach((car, index) => {
    if (car.y > window.innerHeight) {
      car.node.remove();
      obstArray.splice(index, 1);
    }
  });
}

this.x;
this.y;
this.width;
this.height;

const carImages = [
  "./images/car1.png",
  "./images/car2.png",
  "./images/truck.png",
];

this.node.src = carImages[Math.floor(Math.random() * carImages.length)];

this.speed = 5 + Math.random() * 3;
