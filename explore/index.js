var helloWorld = "this is my hello world";

function test() {
  return this.helloWorld;
}

function ObjectOne() {
  this.helloWorld = "this is object one hello world";
}

function ObjectTwo() {
  this.helloWorld = "this is object two hello world.";
}

ObjectOne.prototype.test = test;
ObjectTwo.prototype.test = test;

const oOne = new ObjectOne();
const oTwo = new ObjectTwo();

test(); //?
oOne.test(); //?
oTwo.test(); //?
