// HINT: You can delete this console.log after you no longer need it!
console.log("JavaScript code has loaded!");
// First, tell us your name
let yourName = "Lauren"; // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkle
let allCookies = 0;

// selecting the element with an id of credit: header 2
const credit = document.querySelector("#credit");
// Cookie buttons
const gbPlusBtn = document.querySelector("#add-gb");
let gbMinusBtn = document.querySelector("#minus-gb");
let ccPlusBtn = document.querySelector("#add-cc");
let ccMinusBtn = document.querySelector("#minus-cc");
let sugarPlusBtn = document.querySelector("#add-sugar");
let sugarMinusBtn = document.querySelector("#minus-sugar");

// Code to update name display
credit.textContent = `Created by ${yourName}`;

//Cookie Summary Quantity
let gbTotal = document.querySelector("#qty-gb");
let ccTotal = document.querySelector("#qty-cc");
let sugarTotal = document.querySelector("#qty-sugar");
let cookieTotal = document.querySelector("#qty-total");

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener("click", function () {
  gb = gb + 1; //add 1 to the gb total
  gbTotal.textContent = gb;
  allCookies = gb + cc + sugar;
  cookieTotal.textContent = allCookies;
});

// Event listener for clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener("click", function () {
  if (gbTotal.textContent > 0) {
    gb = gb - 1; //subtract 1 to the gb total
    gbTotal.textContent = gb;
    allCookies = gb + cc + sugar;
    cookieTotal.textContent = allCookies;
  } else {
    gbTotal.textContent = "0";
    allCookies = gb + cc + sugar;
    cookieTotal.textContent = allCookies;
  }
});

// Event listener for clicks on the "+" button for chocolate chip cookies
ccPlusBtn.addEventListener("click", function () {
  cc = cc + 1; //add 1 to the gb total
  ccTotal.textContent = cc;
  allCookies = gb + cc + sugar;
  cookieTotal.textContent = allCookies;
});

// Event listener for clicks on the "-" button for chocolate chip cookies
ccMinusBtn.addEventListener("click", function () {
  if (ccTotal.textContent > 0) {
    cc = cc - 1; //add 1 to the gb total
    ccTotal.textContent = cc;
    allCookies = gb + cc + sugar;
    cookieTotal.textContent = allCookies;
  } else {
    ccTotal.textContent = "0";
    allCookies = gb + cc + sugar;
    cookieTotal.textContent = allCookies;
  }
});

// Event listener for clicks on the "+" button for sugar cookies
sugarPlusBtn.addEventListener("click", function () {
  sugar = sugar + 1; //add 1 to the gb total
  sugarTotal.textContent = sugar;
  allCookies = gb + cc + sugar;
  cookieTotal.textContent = allCookies;
});

// Event listener for clicks on the "-" button for chocolate chip cookies
sugarMinusBtn.addEventListener("click", function () {
  if (sugarTotal.textContent > 0) {
    sugar = sugar - 1; //add 1 to the gb total
    sugarTotal.textContent = sugar;
    allCookies = gb + cc + sugar;
    cookieTotal.textContent = allCookies;
  } else {
    sugarTotal.textContent = "0";
    allCookies = gb + cc + sugar;
    cookieTotal.textContent = allCookies;
  }
});
