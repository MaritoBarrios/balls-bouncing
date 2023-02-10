var canvas = document.querySelector("canvas");
canvas.height = innerHeight;
canvas.width = innerWidth;
ctx = canvas.getContext("2d");

function Circle(x, y, dx, dy, radius, red, green, blue) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.dy = dy;
  this.red = red;
  this.green = green;
  this.blue = blue;
  this.draw = function () {
    if (this.x - this.radius < 0 || this.x + this.radius > innerWidth) {
      this.dx = -this.dx;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > innerHeight) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.strokeStyle = `rgb(${this.red}, ${this.green}, ${this.blue}`;
  };
}

const circleArray = [];
for (var i = 0; i < 200; i++) {
  var radius = Math.random() * 50;
  var x = Math.random() * innerWidth + radius;
  var y = Math.random() * innerHeight + radius;
  var dx = (Math.random() - 0.5) * 10;
  var dy = (Math.random() - 0.5) * 10;
  var red = Math.random() * 256;
  var green = Math.random() * 256;
  var blue = Math.random() * 256;

  circleArray.push(new Circle(x, y, dx, dy, radius, red, green, blue));
}
console.log(circleArray);

function animation() {
  requestAnimationFrame(animation);
  for (var i = 0; i < 200; i++) {
    circleArray[i].draw();
  }
}

animation();
