"use strict";
console.log("hello newbie, bookmarks");

// get from local storage or empty array
const cards = JSON.parse(localStorage.getItem("cards")) ?? [];
// call function from renderCards.js

const filteredCards = cards.filter((card) => card.bookmarked);
renderCardsConditionally(filteredCards);
