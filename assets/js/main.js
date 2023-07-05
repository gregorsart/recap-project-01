"use strict";

console.clear();

// VARIABLE DECLARATION

const htmlBodyTag = document.querySelector('[data-js="body"]');

const darkmodeToggleButton = document.querySelector(
  '[data-js="darkmodeToggleButton"]'
);

darkmodeToggleButton.addEventListener("click", () => {
  const htmlCollection = htmlBodyTag.children;

  for (let item of htmlCollection) {
    item.classList.toggle("lightmode");
  }
});
