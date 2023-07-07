"use strict";

console.clear();
console.log("hello newbie");

// VARIABLE DECLARATION

// Lightmode / Darkmode
const htmlBodyTag = document.querySelector('[data-js="body"]');
const htmlSections = document.querySelectorAll("section");
const darkmodeToggleButton = document.querySelector(
  '[data-js="darkmodeToggleButton"]'
);

// Show Answer / Hide Answer
const answerElement = document.querySelector('[data-js="answer"]');
const showAnswerButton = document.querySelector('[data-js="showAnswerButton"]');

// EVENT LISTENER & LOGIC

// Lightmode / Darkmode

darkmodeToggleButton.addEventListener("click", () => {
  const htmlCollection = htmlBodyTag.children;
  for (let item of htmlCollection) {
    item.classList.toggle("lightmode");
  }
  [...htmlSections].forEach((section) => section.classList.toggle("lightmode"));
});

// Show Answer / Hide Answer
console.log([showAnswerButton]);

showAnswerButton &&
  showAnswerButton.addEventListener("click", () => {
    console.log("click!");
    if (showAnswerButton.innerText === "Show Answer") {
      showAnswerButton.innerText = "Hide Answer";
      answerElement.classList.remove("hidden");
      answerElement.classList.add("visible");
    } else {
      showAnswerButton.innerText = "Show Answer";
      answerElement.classList.remove("visible");
      answerElement.classList.add("hidden");
    }
  });
