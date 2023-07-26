"use strict";
console.log("hello newbie, index");

// get from local storage or empty array
const cards = JSON.parse(localStorage.getItem("cards")) ?? [];
// call function from renderCards.js
renderCardsConditionally(cards, false);
