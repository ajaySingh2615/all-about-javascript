"use strict";

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicense = true;
// }

// if (hasDriverLicense) console.log("I can drive!");

// FUNCTIONS

function logger() {
  console.log("My name is mike");
}

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

console.log(fruitProcessor(5, 0));
