// let myLeads = [];
// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");
// const deleteBtn = document.getElementById("delete-btn");
// const tabBtn = document.getElementById("tab-btn");

// // 1. Grab the SAVE TAB button and store it in a tabBtn variable

// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// if (leadsFromLocalStorage) {
//   myLeads = leadsFromLocalStorage;
//   render(myLeads);
// }

// // 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
// tabBtn.addEventListener("click", function () {
//   chrome.tabs.query({ active: true, currentWindow }, function (tabs) {
//     myLeads.push(tabs[0].url);
//     localStorage.setItem("myLeads", JSON.stringify(myLeads));
//     render(myLeads);
//   });
// });

// function render(leads) {
//   let listItems = "";
//   for (let i = 0; i < leads.length; i++) {
//     // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
//     listItems += `
//             <li>
//                 <a target='_blank' href='${leads[i]}'>
//                     ${leads[i]}
//                 </a>
//             </li>
//         `;
//   }
//   ulEl.innerHTML = listItems;
// }

// deleteBtn.addEventListener("dblclick", function () {
//   localStorage.clear();
//   myLeads = [];
//   render(myLeads);
// });

// inputBtn.addEventListener("click", function () {
//   myLeads.push(inputEl.value);
//   inputEl.value = "";
//   localStorage.setItem("myLeads", JSON.stringify(myLeads));
//   render(myLeads);
// });

// 1. Create a variable, listItems, to hold all the HTML for the list items

// let listItem = "";

// Assign it to an empty string to begin with

// for (let i = 0; i < myLeads.length; i++) {

// 2. Add the item to the listItems variable instead of the ulEl.innerHTML

// listItem += `<li>${myLeads[i]} </li>`;

//}
// 3. Render the listItems inside the unordered list using ulEl.innerHTML

// ulEl.innerHTML = listItem;

// Let's try a different method!

// ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

//}

// for (let i = 0; i < myLeads.length; i++) {
//   const li = document.createElement("li");
//   li.textContent = myLeads[i];
//   ulEl.append();
// }
// Replace .textContent with .innerHTML and use <li> tags
// for (let i = 0; i < myLeads.length; i++) {
//   ulEl.innerHTML += `
//   <li>${myLeads[i]}</li>
//   `;
// }

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");

// const container = document.getElementById("container");
// container.innerHTML = "<button onclick='buy()'>Buy!</button>";

// function buy() {
//   container.innerHTML += "<p>Thank you for buying!</p>";
// }

// inputBtn.addEventListener("click", function () {
//   myLeads.push(inputEl.value);
//   console.log(myLeads);
// });

// for (let i = 0; i < myLeads.length; i++) {
//   ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
// }
// Push the value "www.awesomelead.com" to myArray when the input button is clicked

// inputBtn.addEventListener("click", function () {
// Push the value from the inputEl into the myLeads array
// instead of the hard-coded "www.awesomeleads.com" value
// Google -> "get value from input field javascript"
//   myLeads.push(inputEl.value);
//   console.log(myLeads);
// });

// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

// let inputBtn = document.getElementById("input-btn");

// inputBtn.addEventListener("click", function(){
//     console.log("button addevent");

// })

// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box
// 3. Log out "I want to open the box!" when it's clicked

// let openBox = document.getElementById("box");

// openBox.addEventListener("click", function () {
//   console.log("iwant to open the box");
// });

// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

// let inputBtn = document.getElementById("input-btn");

// inputBtn.addEventListener("click", function () {
//   console.log("save baby ");
// });

// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

// let myLeads = [];
// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");

// inputBtn.addEventListener("click", function () {
//   console.log("Button clicked!");
// });

// // The customer wants to order some stuff. Here are the details:
// const basePrice = 520
// let discount = 120
// const shippingCost = 12
// let shippingTime = "5-12 days"

// template strings/literals

// const recipient = "James";

// Refactor the email string to use template strings
// const email = `Hey recipient! How is it going? Cheers ${recipient}`;

//"Hey " + recipient + "! How is it going? Cheers Per"

// template strings/literals

// const recipient = "James";
// const sender = "Per Harald Borgen";

// Break the email string into multiple lines
//const email = `<p>Hey ${recipient}!</p><p> How is it going? Cheers ${sender}<///p>`;

//console.log(email);
// myLeads = JSON.parse(myLeads);
// console.log("myLeads", myLeads);
// myLeads.push("ww.myleads.com");
// console.log("push", myLeads);
// myLeads = JSON.stringify(myLeads);
// console.log("string", myLeads);
// console.log(typeof myLeads);
// localStorage.setItem("dickhead", "www.tv2.no");
// localStorage.getItem("dickhead");
// localStorage.clear();

// console.log(Boolean("")); // false
// console.log(Boolean("0")); // true
// console.log(Boolean(100)); // true
// console.log(Boolean(null)); // false
// console.log(Boolean([0])); // true
// console.log(Boolean(-0)); // false
// Give the function a parameter, greeting, that replaces "Welcome back"
// function greetUser(greeting, name, emo) {
//   welcomeEl.textContent = `${greeting}, ${name}, ${emo}`;
// }

// greetUser("howdy", "ben", "👋");

// Create a function, add(), that adds two numbers together and returns the sum

// function add(num1, num2) {
//   return num1 + num2;
// }

// console.log(add(3, 3)); // should log 7
// console.log(add(10, 100)); // should log 111

// Create a function, getFirst(arr), that returns the first item in the array

// function getFirst(arr) {
//   return arr[0];
// }

// let firstCard = getFirst([10, 2, 5]);

// console.log(firstCard);

// Call it with an array as an argument to verify that it works

// function getSecons(arr) {
//   return arr[1];
// }

// let secondCard = getSecons([20, 13, 16, 19]);
// console.log(secondCard);

// SETTING THE STAGE
const player = "Per";
const opponent = "Nick";
const game = "AmazingFighter";
let points = 0;
let hasWon = false;

// PLAYING THE GAME
points += 100;
hasWon = true;

// ANNOUNCING THE WINNER
if (hasWon) {
  console.log(`${player} got ${points} points and won the${game} game!`);
} else {
  console.log(`The winner is  ${opponent} !  ${player} lost the game`);
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes
let myCourses = [
  "Learn CSS Animations",
  "UI Design Fundamentals",
  "Intro to Clean Code",
];

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function logItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

logItems(myCourses);
// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

let data = [
  {
    player: "Jane",
    score: 52,
  },
  {
    player: "Mark",
    score: 41,
  },
];

// Fetch the button from the DOM, store it in a variable
const janeBtn = document.getElementById("jane-btn");
// Use addEventListener() to listen for button clicks

janeBtn.addEventListener("click", function () {
  console.log(data[0].score);
});

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
  let baseString = `The ${arr.length} ${desc} are `;
  const lastIndex = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (i === lastIndex) {
      baseString += arr[i];
    } else {
      baseString += arr[i] + ", ";
    }
  }
  return baseString;
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"]);
console.log(sentence);

const imgs = ["amigo", "alo", "salam"];

const container = document.getElementById("container");

function renderImages() {
  let imgsDOM = "";
  for (let i = 0; i < imgs.length; i++) {
    imgsDOM += `<p class="team-img">${imgs[i]}</p>`;
  }
  container.innerHTML = imgsDOM;
}

renderImages();
