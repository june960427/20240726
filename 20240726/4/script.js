class Square {
  #length;
  constructor(length) {
    length = this.#length;
  }

  getLength(v) {
    return this.#length;
  }

  getPerimeter() {
    return 4 * this.#length;
  }

  getArea() {
    return this.#length * this.#length;
  }
}

const square = new Square(10);
console.log(square);
