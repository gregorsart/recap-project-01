"use strict";
console.log("hello newbie, index");

// localStorage.clear();

// Prepopulate entries
const prepopulatedCards = [
  {
    id: crypto.randomUUID(),
    question: "Welcher Studio Ghibli Film entstand 1997?",
    answer: "Prinzessin Mononoke",
    bookmarked: false,
    tags: "film",
  },
  {
    id: crypto.randomUUID(),
    question: "Wie viele Oskars hat Studio Ghibli bis jetzt gewonnen?",
    answer: "Einen",
    bookmarked: false,
    tags: "film",
  },
];

// get from local storage or empty array
const cards = JSON.parse(localStorage.getItem("cards")) ?? prepopulatedCards;
localStorage.setItem("cards", JSON.stringify(cards));
// call function from renderCards.js
renderCardsConditionally(cards);
