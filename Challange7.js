// Coding Challenge #7 | JavaScript 🔥 | Lecture 042
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

const Marks = {
  firstName: "Mark",
  LastName: "Miller",
  weights: 98,
  height: 2.999,
  calcBMI: function () {
    return (this.BMI = this.weights / (this.height * this.height));
  },
};
const John = {
  firstName: "John",
  LastName: "Smith",
  weights: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.BMI = this.weights / (this.height * this.height));
  },
};
Marks.calcBMI();
John.calcBMI();

if (Marks.calcBMI() > John.BMI) {
  console.log(
    `John's BMI (${John.calcBMI()}) is higher than Mark's (${Marks.BMI})!`
  );
} else {
  console.log(
    `John's BMI (${John.calcBMI()}) is smaller than Mark's (${Marks.BMI})!`
  );
}
