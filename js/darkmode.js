"use strict";
console.log("hello newbie, darkmode");

const darkmodeToggleButton = document.querySelector(
  '[data-js="darkmodeToggleButton"]'
);

// Lightmode / Darkmode

darkmodeToggleButton.addEventListener("click", () => {
  darkmodeToggleButton.firstElementChild.classList.toggle(
    "flipDarkmodeSwitcher"
  );
  document.body.classList.toggle("darkmode");
});
