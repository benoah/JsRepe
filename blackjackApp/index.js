let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard + 6; // 23

if (sum < 21) {
  console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
} else {
  console.log("You're out of the game! 😭");
}
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 22;

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (age <= 20) {
  console.log("You can not enter the club!");
} else {
  console.log("Welcome!");
}

// Check if the person is elegible for a birthday card from the King! (100)

let ageguy = 100;

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (ageguy < 100) {
  console.log("NOT ELEGIBEL");
} else if (ageguy === 100) {
  console.log("here is your birthday from the king");
} else {
  console.log("You're out of the game! 😭");
}

let firstCardE = 10;
let secondCardE = 7;
let sumEl = firstCardE + secondCardE;

if (sumEl <= 20) {
  console.log("Do you want to draw a new card? 🙂");
} else if (sum === 20) {
  console.log("Wohoo! You've got Blackjack! 🥳 ");
} else {
  console.log("out of the game ß");
}

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"
