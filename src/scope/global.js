var a;
var b = "b";
b = "bb";
var a = "aa";

//Global Scope
var fruit = "Apple";

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Guatemala";
  console.log(country);
}

countries();

console.log(country);
