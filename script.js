/*
let myFirstName = "Asib";
let myAge = "24";
let success;
const haveFaithInAllah = true;
console.log(myFirstName, myAge, success, haveFaithInAllah);
console.log(typeof success);
console.log(typeof null);

// Assignment operator
let x = 25;
x += 10;
x -= 10;
x *= 4; //x = x * 4
x++;
x--;
console.log(x);

// comparison operator => output will be true or false => <, >, >= , <=


Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 

const marksWeights = 78;
const marksHeight = 1.69;
const johnsWeights = 92;
const johnsHeight = 1.95;
const marksBMI = marksWeights / marksHeight ** 2;
const johnsBMI = johnsWeights / johnsHeight ** 2;
console.log(marksBMI, johnsBMI);
const markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI);


const age = 17;
// const isOldEnough = age >= 18;
if (age >= 18) {
  console.log("I am enable for Driving License 🚗");
} else {
  console.log("Not enable");
}


const birthYear = 1998;
let century;
if (birthYear >= 2000) {
  century = 21;
} else {
  century = 20;
}
console.log(century);


const name = prompt("What is your name?");
console.log(name);

const age = "23";
console.log(Number(age));
*/

// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
// function fruitProcessor(apple, orange) {
//   //   console.log(apple, orange);
//   const juice = `Juice with ${apple} apples and ${orange} oranges`;
//   return juice;
// }
// fruitProcessor(10, 5);
// const juice = fruitProcessor(10, 5);
// console.log(juice);
// console.log(fruitProcessor(20, 40));

// function is a value, we can store it a variable

// age calculate // function declaration// it has hoisting
function calcAge(birthYear) {
  return 2023 - birthYear;
}
console.log(calcAge(1998));

// anonymous function// function expression // does not hoist

const calAge2 = function (birthYear) {
  return 2023 - birthYear;
};

console.log(calAge2(1998));


- array.push(Add new element at the end of the array)
- array.unshift(Add new element at the beginning of the array)
- array.pop(Remove element from the end of the array)
- array.shift(Remove element from the beginning of the array)
- for pop and shift we don’t need to pass argument



const fruit = ["mango", "banana", "apple", "orange", "Guava"];
fruit.push("lemon");
fruit.unshift("lichi");
fruit.pop();
fruit.shift();
console.log(fruit);
console.log(fruit.indexOf("orange"));
console.log(fruit.includes("habi"));



const Riyad = {
  firstName: "Asib",
  lastName: "Riyad",
  job: "Developer",
  Learning: ["JS", "NEXT JS", "Node JS"],
};
const interestedIn = prompt("Explain Riyad");
if (Riyad[interestedIn]) {
  console.log(Riyad[interestedIn]);
} else {
  console.log("Not exist");
}

console.log(
  `${Riyad.firstName} is currently learning ${Riyad.Learning.length} tech and his first priority is ${Riyad.Learning[0]} `
);



const Riyad = {
  firstName: "Asib",
  lastName: "Riyad",
  job: "Developer",
  birthYear: 1999,
  Learning: ["JS", "NEXT JS", "Node JS"],
  hasPassport: false,
  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // },
  // calcAge: function () {
  //   console.log(this);
  //   return 2024 - this.birthYear;
  // },
  calcAge: function () {
    return (this.age = 2024 - this.birthYear);
  },
  // getSummary: function () {
  //   return `${Riyad.lastName} is ${Riyad.age} years old ${Riyad.job}. He has ${
  //     Riyad.hasPassport ? "a" : "no"
  //   } Passport `;
  // },
  getSummary: function () {
    return `${this.lastName} is ${this.age} years old ${this.job}. He has ${
      this.hasPassport ? "a" : "no"
    } Passport `;
  },
};
console.log(Riyad.calcAge());
console.log(Riyad.age);
console.log(Riyad.getSummary());



for (let i = 0; i <= 10; i++) {
  console.log(`Logging for ${i}th times`);
}

const Riyad = ["Asib", "Riyad", "Developer", ["JS", "NEXT JS", "Node JS"]];
const type = [];

for (let i = 0; i < Riyad.length; i++) {
  type[i] = typeof Riyad[i];
  // type.push(typeof Riyad[i]);
  console.log(Riyad[i], typeof Riyad[i]);
}
console.log(type);



const birthYear = [1998, 1980, 1950, 2021];
const age = [];
for (let i = 0; i < birthYear.length; i++) {
  // const calcAge = 2023 - birthYear[i]
  // age.push(calcAge);
  age.push(2023 - birthYear[i]);
}
console.log(age);



const Riyad = [
  "Asib",
  "Riyad",
  "Developer",
  ["JS", "NEXT JS", "Node JS"],
  3000,
  true,
  "hello",
];

//continue
// for (let i = 0; i < Riyad.length; i++) {
//   if (typeof Riyad[i] !== "string") continue;
//   console.log(Riyad[i], typeof Riyad[i]);
// }

//break
for (let i = 0; i < Riyad.length; i++) {
  if (typeof Riyad[i] === "object") break;
  console.log(Riyad[i], typeof Riyad[i]);
}

const Riyad = [
  "Asib",
  "Riyad",
  "Developer",
  ["JS", "NEXT JS", "Node JS"],
  3000,
  "hello",
];
for (let i = Riyad.length - 1; i >= 0; i--) {
  console.log(Riyad[i]);
}


for (let i = 0; i < 4; i++) {
  console.log(`Repetition ${i}`);
  for (let j = 0; j < 5; j++) {
    console.log(`Sub Repetition ${j}`);
  }
}


// while loop
// let i = 1;
// while (i <= 10) {
//   console.log(`Hello ${i}`);
//   i++;
// }

let dice = Math.round(Math.random() * 6);
while (dice !== 6) {
  console.log(`rotating ${dice}`);
  dice = Math.trunc(Math.random() * 7);
  if (dice === 6) {
    console.log(`${dice} yeee`);
  }
}


// const data = [10, 20, 3, 45, 564, 43, 54];
// const calcMax = (array) => {
//   let max = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
//   // console.log(max);
// };

// const calcMin = (array) => {
//   let min = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (min > array[i]) {
//       min = array[i];
//     }
//   }
//   return min;
//   // console.log(min);
// };

// // calcMax(data);

// const amplitude = calcMax(data) - calcMin(data);
// console.log(amplitude);

const temperature = [2, 4, -5, "error", 6, 13, 23, "error", -4, 34];
const tempAmplitude = (array) => {
  let max = array[0];
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") continue;
    if (max < array[i]) {
      max = array[i];
    }
    if (min > array[i]) min = array[i];
  }

  console.log(max, min);
  return max - min;
};



// tempAmplitude([3, 5, 5, -3, 5, 10]);
const amplitude = tempAmplitude(temperature);
console.log(amplitude);

*/
