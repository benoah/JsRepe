// object
let player = {
  name: "Per",
  chips: 200,
  sayHello: function () {
    console.log("Heisann!");
  },
};

player.sayHello();

let cards = []; // array -ordered list of item
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

// Create a function, getRandomCard(), that always returns the number 5

// FLOR REMOVE DECIMALS

function getRandomCard() {
  // if 1     -> return 11
  // if 11-13 -> return 10
  let randomNumer = Math.floor(Math.random() * 13) + 1;
  if (randomNumer > 10) {
    return 10;
  } else if (randomNumer === 1) {
    return 11;
  } else {
    return randomNumer;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

// for (let i = 10; i < 101; i += 10) {
//   console.log(i);
// }

// let cars = [7, 3, 9];
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }
// jjjjc  command + c+ k

// let sentence = ["Hello ", "my ", "name ", "is ", "Per"];
// let greetingEl = document.getElementById("greeting-el");

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

// for (let i = 0; i < sentence.length; i++) {
//   greetingEl.textContent += sentence[i] + " ";
// }
// let player1Time = 102;
// let player2Time = 107;

// function getFastestRaceTime() {
//   if (player1Time < player2Time) {
//     return player1Time;
//   } else if (player2Time < player1Time) {
//     return player2Time;
//   } else {
//     return player1Time;
//   }
// }

// storing the value of the function inside the variabel
// // let fastestRace = getFastestRaceTime();

// // console.log(fastestRace);

// // function getTotalRaceTime() {
// //   return player1Time + player2Time;
// // }

// // let totalTime = getTotalRaceTime();

// // console.log(totalTime);

// let randomNumber = Math.random() * 6

// let flooredNumber = Math.floor(3.45632)

// console.log(flooredNumber)

/* 

What does Math.floor() do to positive numbers?

Your answer: it removes the decimals

*/

// let randomNumber = Math.floor(Math.random() * 6);
// console.log(randomNumber);
// Create a function, rollDice(), that returns a random number between 1 and 6

// function rollDice() {
//   let randomNumber = Math.floor(Math.random() * 6) + 1;
//   return randomNumber;
// }

// console.log(rollDice());

// if (hasCompletedCourse === true) {
//   if (givesCertificate === true) {
//     generateCertificate();
//   }
// }

// if (hasCompletedCourse === true && givesCertificate === true) {
//   generateCertificate();
// }

// if (hasCompletedCourse === false && givesCertificate === false) {
//   generateCertificate();
// }

// function generateCertificate() {
//   console.log("Generating certificate....");
// }

// let hasCompletedCourse = true;
// let givesCertificate = true;

// if this is true and if this is true run the function
// if (hasCompletedCourse === true && givesCertificate === true) {
//   generateCertificate();
// }

// function generateCertificate() {
//   console.log("Generating certificate....");
// }

// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//   showSolution();
// }

// function showSolution() {
//   console.log("Showing the solution....");
// }

// let likesDocumentaries = true;
// let likesStartups = false;
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

// if (likesDocumentaries === true || likesStartups === true) {
//   recommendMovie();
// }

// function recommendMovie() {
//   console.log("Hey, check out this new film we think you will like!");
// }

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format:
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
  name: "Per",
  age: 35,
  country: "Norway",
};

function logData() {
  console.log(
    person.name +
      " is " +
      person.age +
      " years old and lives in " +
      person.country
  );
}

logData();

let age = 15;

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
  console.log("free");
} else if (age < 18) {
  console.log("child discount");
} else if (age < 27) {
  console.log("student discount");
} else if (age < 67) {
  console.log("full price");
} else {
  console.log("senior citizen discount");
}

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

// for (let i = 0; i < largeCountries.length; i++) {
//   console.log("- " + largeCountries[i]);
// }

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

// largeCountries.pop();
// largeCountries.push("Pakistan");
// largeCountries.shift();
// largeCountries.unshift("China");
// console.log(largeCountries);

let dayOfMonth = 13;
let weekday = "Friday";

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&
// both need to be true to evalute the code
if (dayOfMonth === 13 && weekday === "Friday") {
  console.log("😱");
}

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array

function getHand() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}

console.log(getHand());

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function sortFruit() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.textContent += "🍎";
    } else if (fruit[i] === "🍊") {
      orangeShelf.textContent += "🍊";
    }
  }
}

sortFruit();
