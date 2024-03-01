'use strict';

const rectangle = {
  _width: 5,
  _height: 5,

  set width(w) {
    if (typeof w === 'number') {
      this._width = w;
    }
  },
  set height(h) {
    if (typeof h === 'number') {
      this._height = h;
    }
  },
  get perimeter() {
    return `Периметр равен ${(this._width * 2) + (this._height * 2)} см`;
  },
  get square() {
    return `Площадь равна ${this._width * this._height} см2`;
  },
};

console.log(rectangle.width = 15);
console.log(rectangle.height = 30);
console.log(rectangle.perimeter);
console.log(rectangle.square);
console.log(rectangle);
