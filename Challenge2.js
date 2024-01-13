/*
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
*/
const marksWeights = 78;
const marksHeight = 1.69;
const johnsWeights = 92;
const johnsHeight = 1.95;
const marksBMI = marksWeights / marksHeight ** 2;
const johnsBMI = johnsHeight / johnsHeight ** 2;
if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI ${marksBMI} is higher than John's BMI ${johnsBMI}`);
} else {
  console.log(`John's BMI ${johnsBMI} is higher than Mark's BMI ${marksBMI}`);
}
