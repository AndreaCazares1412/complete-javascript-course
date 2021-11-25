/* Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀 */

///////////////////////////////  MARK

// DATA 1
// let markWeight = 78; //27.309968138370508
// let markHeight = 1.69;
// let johnWeight = 92; //24.194608809993426
// let johnHeight = 1.95;

// DATA 2
let markWeight = 95; //26.87867813490267
let markHeight = 1.88;
let johnWeight = 85; //27.44059917355372
let johnHeight = 1.76;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

console.log(markBMI);
console.log(johnBMI);

///////////////////////////////////// BOOLEAN

let markHigherBMI = markBMI > johnBMI; //true
console.log(markHigherBMI);

/*
Coding Challenge #2

Use the BMI example from Challenge #1, 
and the code you already wrote, and improve it.
Your tasks:

1. Print a nice output to the console,saying who has the higher BMI.
The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.
Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 
😉 GOOD LUCK 😀 
*/

if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else {
  console.log(`John's  BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
}

/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. 
They compete against each other 3 times. 
The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below.
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus1: Include a requirement for a minimum score of 100.
With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus2: Minimum score also applies to a draw! 
So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. 
Otherwise, no team wins the trophy
Test data:

Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/

/// DATA 1
// let dolphinsAverage = (96 + 108 + 89) / 3; //97.6
// console.log(dolphinsAverage);
// let koalasAverage = (88 + 91 + 110) / 3; //96.3
// console.log(koalasAverage);
// let dolphinsAverage = 97.6;
// let koalasAverage = 96.3;

// if (dolphinsAverage > koalasAverage) {
//   console.log(
//     `Dolphins are the winners of the competitions cause they have a higher score of ${dolphinsAverage}!`
//   );
// } else if (dolphinsAverage === koalasAverage) {
//   console.log("There is a draw between the two teams!");
// } else {
//   console.log(
//     `Koalas are the winners of the competitions cause they have a higher score of ${koalasAverage}!`
//   );
// }

//// DATA BONUS 1

// let dolphinsAverage = (97 + 112 + 101) / 3;  //103.3
// console.log(dolphinsAverage);
// let koalasAverage = (109 + 95 + 123) / 3; //109
// console.log(koalasAverage);
// let dolphinsAverage = 103.3;
// let koalasAverage = 109;

//// DATA BONUS 2

// let dolphinsAverage = (97 + 112 + 101) / 3; // 103.3
// console.log(dolphinsAverage);
// let koalasAverage = (109 + 95 + 106) / 3; // 103.3
// console.log(koalasAverage);
let dolphinsAverage = 103.3;
let koalasAverage = 103.3;

if (dolphinsAverage >= 100 && dolphinsAverage > koalasAverage) {
  console.log(`Dolphins are the winners with ${dolphinsAverage}!`);
} else if (koalasAverage >= 100 && koalasAverage > dolphinsAverage) {
  console.log(`Koalas are the winners with ${koalasAverage}!`);
} else if (
  koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage === dolphinsAverage
) {
  console.log(`Both teams are in a draw!`);
} else {
  console.log(
    `Both teams are low in the minimum score, no one wins the trophy :(`
  );
}

/*
Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300.
If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip,depending on the bill value. Create a variable called 'tip' for this. 
It's not allowed to use an if/else statement 😅 
(If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430 Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300😉

GOOD LUCK 😀
*/

let bill = 40; // 430 // 275

let tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
