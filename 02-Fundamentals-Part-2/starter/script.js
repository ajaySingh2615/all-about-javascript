"use strict";

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicense = true;
// }

// if (hasDriverLicense) console.log("I can drive!");

// FUNCTIONS
/*

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
*/

// FUNCTION DECLARATIONS

function calcAge1(birthYear) {
  return 2024 - birthYear;
}

const age1 = calcAge1(2000);
console.log(age1);

// FUNCTION EXPRESSION

const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(2000);
console.log(age2);

// arrow functions

const calcAge3 = (birthYear) => 2024 - birthYear;
console.log(calcAge3(2000));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2000, "mike"));
