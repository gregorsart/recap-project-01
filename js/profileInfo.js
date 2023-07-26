"use strict";
console.log("hello newbie, profile info");

// VARIABLES
const amountOfQuestions = document.querySelector(
  '[data-js="amount-of-questions"]'
);
const amountOfBookmarks = document.querySelector(
  '[data-js="amount-of-bookmarks"]'
);

// get from local storage or empty array
const cards = JSON.parse(localStorage.getItem("cards")) ?? [];

// WRITE TO DOM

// questions
const count = cards.length;
amountOfQuestions.textContent = count;

// bookmarks
let bookmarksCount = 0;
cards.forEach((card) => {
  if (card.bookmarked) bookmarksCount++;
});
amountOfBookmarks.textContent = bookmarksCount;
