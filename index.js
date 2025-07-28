// Part 1: 🔐 Login & Access Control
let username = prompt("Enter username (admin or user):");
let password = prompt("Enter password:");

let role = "";
let securityLevel = "";

if ((username === "admin" || username === "user") && password === "1234") {
  role = username;
  securityLevel = (username === "admin") ? "high" : "low";
} else {
  alert("Access denied! Invalid credentials.");
  throw new Error("Unauthorized access. Program stopped.");
}

// Part 2: ☕ Coffee Shop Order Calculator
let customerName = prompt("What is your name?");
let age = parseInt(prompt("How old are you?"));
let coffeeType = prompt("What coffee would you like? (espresso, latte, cappuccino)").toLowerCase();
let quantity = parseInt(prompt("How many cups would you like?"));

let pricePerCup = 0;

switch (coffeeType) {
  case "espresso":
    pricePerCup = 2.5;
    break;
  case "latte":
    pricePerCup = 3.5;
    break;
  case "cappuccino":
    pricePerCup = 4.0;
    break;
  default:
    alert("Invalid coffee type.");
    throw new Error("Program stopped due to invalid input.");
}

let originalTotal = pricePerCup * quantity;
let discount = 0;

if (age < 18 || age > 60) {
  discount = originalTotal * 0.10;
}

let finalTotal = originalTotal - discount;

// Part 3: 🧾 Bill Splitter with Tip
let people = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
if (![1, 2, 3].includes(people)) {
  alert("Invalid number of people.");
  throw new Error("Program stopped.");
}

let tipPercent = parseInt(prompt("Enter tip percentage (0, 5, 10, or 15):"));
if (![0, 5, 10, 15].includes(tipPercent)) {
  alert("Invalid tip percentage.");
  throw new Error("Program stopped.");
}

let tipAmount = finalTotal * (tipPercent / 100);
let totalWithTip = finalTotal + tipAmount;
let perPerson = totalWithTip / people;

// Output
alert(
  `Hello ${customerName}!\n` +
  `You ordered ${quantity} ${coffeeType}(s).\n` +
  `Original total: $${originalTotal.toFixed(2)}\n` +
  `Discount: $${discount.toFixed(2)}\n` +
  `Tip: $${tipAmount.toFixed(2)}\n` +
  `Total with Tip: $${totalWithTip.toFixed(2)}\n` +
  `Split between ${people} people: $${perPerson.toFixed(2)} each`
);
