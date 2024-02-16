console.log("hey");

class Pony {
  constructor(color) {
    this.color = color;
  }
  toString() {
    return `${this.color} pony`;
  }
  static defaultSpeed() {
    return 15;
  }
}

const bluePony = new Pony("blue");
console.log(bluePony.toString());
console.log(Pony.defaultSpeed());

class Animal {
  constructor(speed) {
    this.speed = speed;
  }
}

class Emu extends Animal {
  constructor(speed, height) {
    super(speed + 15);
    this.height = height;
  }
}

const birdie = new Emu(10, 22);
console.log(birdie.speed);

//forEach has a second param???
const testObj = {
  max: 0,
  findMaxNumber(numbers) {
    numbers.forEach(function (element) {
      if (element > this.max) {
        this.max = element;
      }
    }, this);
  },
};

testObj.findMaxNumber([2, 44, -1])
console.log(testObj.max);
