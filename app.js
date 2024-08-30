// JavaScript Math :

// * Round Number
/*
let num = 23.0001;
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
*/

// * Square Value : 2 Square === 2*2
/*
let num2 = 2;
console.log(Math.pow(3, 2));
*/

// * Root Value : √64
/*
let num3 = 4;
console.log(Math.sqrt(64));
*/

// * Absolute Value : Always Positive Value
/*
console.log(Math.abs(5));
console.log(Math.abs(-5));
*/

// * Minimum Number
/*
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));
*/

// * Maximum Number
/*
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));
*/

// * PI
/*
console.log(Math.PI);
*/

// * Sin Value
/*
console.log(Math.cos((0 * Math.PI) / 180));
*/

// * Random Number
/*
console.log(Math.random());
console.log(Math.floor(Math.random().toFixed(2) * 10 + 1));
*/

// * Ludo Game
/*
let upperValue = 6;
let lowerValue = 1;
let resultValue = Math.ceil(Math.random() * upperValue);

console.log(resultValue);
*/

function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  let imageSource = "images/" + randomNumber + ".png";
  document.getElementById("ludo").src = imageSource;
}
