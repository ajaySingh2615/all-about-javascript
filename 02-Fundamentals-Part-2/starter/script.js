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

/*
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
*/

// functions calling other functions

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// Arrays

// const friends = ["mike", "eleven", "will", "dustin"];
// console.log(friends);

// const years = new Array(1991, 1992, 1993, 1994);
// console.log(years);

// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "lukas";
// console.log(friends);

// Objects

// const jonas = {
//   firstName: "jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["mike", "will", "dustin"],
// };
// console.log(jonas);

// console.log(jonas.firstName);
// console.log(jonas.lastName);
// console.log(jonas.age);
// console.log(jonas["friends"]);
// console.log(jonas["job"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);

// const jonas = {
//   firstName: "jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["mike", "will", "dustin"],
//   hasDriversLicense: true,

// calcAge: function () {
//   return 2024 - this.birthYear;
// },

//   calcAge: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas["calcAge"](1991));

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
