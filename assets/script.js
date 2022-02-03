// HINT: You can delete this console.log after you no longer need it!
console.log("JavaScript code has loaded!");
// First, tell us your name
let yourName = "Lauren"; // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let cookieType = [
  { type: "gb", quantity: 0 },
  { type: "cc", quantity: 0 },
  { type: "sugar", quantity: 0 },
];

function cookieSum() {
  return (
    cookieType[0].quantity + cookieType[1].quantity + cookieType[2].quantity
  );
}

// selecting the element with an id of credit: header 2
const credit = document.querySelector("#credit");
// Cookie buttons
let plusBtns = document.querySelectorAll(".plus-button");
let minusBtns = document.querySelectorAll(".minus-button");

// Code to update name display
credit.textContent = `Created by ${yourName}`;

//Cookie Summary Quantity
let qtySummary = document.querySelectorAll(".qty-summary");
let cookieTotal = document.querySelector("#qty-total");

// Event listener for clicks on the "+" button for all cookies
for (let i = 0; i < plusBtns.length; i++) {
  plusBtns[i].addEventListener("click", function () {
    cookieType[i].quantity = cookieType[i].quantity + 1;
    qtySummary[i].textContent = cookieType[i].quantity;
    cookieTotal.textContent = cookieSum();
  });
}

// Event listener for clicks on the "-" button for all cookies
for (let i = 0; i < minusBtns.length; i++) {
  minusBtns[i].addEventListener("click", function () {
    if (cookieType[i].quantity > 0) {
      cookieType[i].quantity = cookieType[i].quantity - 1;
      qtySummary[i].textContent = cookieType[i].quantity;
      cookieTotal.textContent = cookieSum();
    } else {
      qtySummary[i].textContent = 0;
    }
  });
}
