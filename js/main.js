"use strict";
console.log("hello newbie, main");

// VARIABLE DECLARATION

const bookmarkToggleButtons = document.querySelectorAll(
  '[data-js="bookmark-button"]'
);

// EVENT LISTENER & LOGIC

// Bookmark Icon
bookmarkToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
  });
});
