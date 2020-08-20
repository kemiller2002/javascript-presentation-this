

var helloWorld = "this is my hello world setence";

function test() {
  return this.helloWorld;
}

function ObjectOne() {
  this.helloWorld = "this is object 1 saying: hello world.";
}

function ObjectTwo() {
  this.helloWorld = "this is object 2 saying: hello world.";
}

ObjectOne.prototype.test = test;
ObjectTwo.prototype.test = test;

const oOne = new ObjectOne();
const oTwo = new ObjectTwo(); 

test();         //?
oOne.test();    //?
oTwo.test();    //?
