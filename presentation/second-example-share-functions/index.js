

var helloWorld = "this is my hello world setence";

function returnHelloWorld() {
  return this.helloWorld;
}

function ObjectOne() {
  this.helloWorld = "this is object 1 a constructor function saying: hello world.";
}

class ObjectTwo  {
  helloWorld = "this is object 2 a class saying: hello world.";
}

ObjectOne.prototype.returnHelloWorld = returnHelloWorld;
ObjectTwo.prototype.returnHelloWorld = returnHelloWorld;

const oOne = new ObjectOne();
const oTwo = new ObjectTwo(); 

returnHelloWorld();             //?
oOne.returnHelloWorld();        //?
oTwo.returnHelloWorld();        //?
