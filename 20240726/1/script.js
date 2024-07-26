class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

const square = new Square(10, 20);

console.log(square);
console.log(square.getPerimeter());
console.log(square.getArea());
