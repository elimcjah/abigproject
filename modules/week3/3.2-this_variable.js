/**
 * 
 * this variable, lesson 3.2
 * @author Mike Whitfield
 * 
 * Object oriented programming includes a special keyword 'this' to track the
 * context an object function executes in.  While there are implications of the
 * 'this' keyword in OOP, JavaScript treats the 'this' keyword as unique to 
 * each function.
 * 
 */

function square(w, h) {
  if (w) {
    this.width = w;
  }
  if (h) {
    this.height = h;
  }
  this.area = () => {
    return this.width * this.height;
  }
  return this;
}
console.log(square(4, 2).area()); // 8
square().area(); // 8
new square().area(); // NaN, we've asked a new this object to be created

/*
  Consider that the square 'this' object is bound to the function square.
  This is confusing, but when we call 'new', we are asking for a new 'this'
  object to be created and associated with the square function for that call.

  If we wanted data to persist as a default for the 'this' object on square,
  we'd utilize the 'prototype' property on each Object.
 */

square.prototype.width = 4;
square.prototype.height = 4;
new square().area(); // 16, the 'this' object is inheriting the prototype properties
square(2).area(); // 4, the default 'this' object is still the same!
new square(2).area(); // 8, the 2 parameter overrides the square.prototype.width

class Square {
  constructor(w, h) {
    if (w) {
      this.width = w;
    }
    if (h) {
      this.height = h;
    }
    this.area();
  }

  area() {
    return this.width * this.height;
  }
}

try {
  console.log(Square(4, 2).area()); // error!
} catch(e) {}
try {
  Square().area(); // error!
} catch(e) {}
new Square().area(); // NaN!

/*
  Notice that errors occur when we don't use the 'new' keyword with a class.
  We might think of a class in JavaScript like a function that requires an
  'instantiation' of that class.  Classes specifically leverage an 'instance'
  and a 'this' keyword to act on data unique to that 'instance'.
 */

Square.prototype.width = 4;
Square.prototype.height = 4;
new Square().area(); // 16, the 'this' object is inheriting the prototype properties
try {
  Square(2).area(); // error!
} catch(e) {}
new Square(2).area(); // 8, the 2 parameter overrides the square.prototype.width


/*
 An arrow function is identical to a regular function, except it does not bind act
 this variable.
 */

function outer() {
  this.pizza = 'cheese';
  (function() {
    this.pizza = 'pepperoni';
  })();

  // this.pizza == 'cheese';

  (() => {
    this.pizza = 'pineapple';
  })();

  // this.pizza == 'pineapple'
}