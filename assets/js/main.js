"use strict";

console.clear();
console.log("hello newbie");

// VARIABLE DECLARATION

const htmlBodyTag = document.querySelector('[data-js="body"]');
const htmlSections = document.querySelectorAll("section");

const darkmodeToggleButton = document.querySelector(
  '[data-js="darkmodeToggleButton"]'
);

// EVENT LISTENER & LOGIC

darkmodeToggleButton.addEventListener("click", () => {
  const htmlCollection = htmlBodyTag.children;
  for (let item of htmlCollection) {
    item.classList.toggle("lightmode");
  }
  [...htmlSections].forEach((section) => section.classList.toggle("lightmode"));
});
