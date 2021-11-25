// ASSIGNMENT 1: VALUES AND VARIABLES

const country = "Ireland";
const continent = " North America";
let population = 3;

console.log(country);
console.log(continent);
console.log(population);

// ASSIGNMENT 2: DATA TYPES

let isIsland = false;
//let language;

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof population);
console.log(typeof country);

// ASSIGNMENT 3: LET, CONST, VAR

language = "English";
// continent = "europeo";
// country = "USA";

// ASSIGNMENT 4: BASIC OPERATORS

let halfPopulation = population / 2;
console.log(halfPopulation);
population++;
console.log(population);
let biggerPopulation = population > 6;
console.log(biggerPopulation);
let mexicoAveragePopulation = population < 33;
console.log(mexicoAveragePopulation);

let description =
  "Portugal is in Europe, and its 11 million people speak portuguese";

// ASSIGNMENT 5: STRINGS AND TEMPLATE LITERALS

let descriptionNew = `${country} is in  ${continent}, an its ${population} million people speak ${language}`;
console.log(descriptionNew);

// ASSIGNMENT 6: IF/ ELSE STATEMENTS

if (population > 33) {
  console.log("Mexicos's population is above average");
} else {
  let average = 33 - population;
  console.log(`Mexicos's population is ${average} million below average`);
}

// ASSIGNMENT 7: TYPE CONVERSION AND COERCION
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //23
console.log("19" - "13" + 17); //617
console.log("123" < 57); //false
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

// ASSIGNMENT 8: EQUALITY OPERATORS == AND ===

// let numNeightbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// console.log(typeof numNeightbours);
// if (numNeightbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeightbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// ASSIGNMENT 9: LOGICAL OPERATORS

if (language === "English" && population < 5 && !isIsland) {
  console.log(`You should live in ${country}:)`);
} else {
  console.log(`${country} does not meet your criteria :("`);
}

// ASSIGNMENT 10: SWITCH STATEMENT

let idioma = "french";

switch (idioma) {
  case "chinese" || "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

// ASSIGNMENT 11: THE CONDITIONAL (TERNARY) OPERATOR

let ternary =
  population > 33
    ? `${country}'s population is above average`
    : `${country}'s population is below average`;
console.log(ternary);
