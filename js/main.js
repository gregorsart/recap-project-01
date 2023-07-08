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

// Show Answer / Hide Answer Animation

// if shoAnswerButton can not be assigned, do nothing
showAnswerButton &&
  showAnswerButton.addEventListener("click", () => {
    if (showAnswerButton.innerText === "Show Answer") {
      // animatioin
      answerElement.classList.remove("hidden");
      answerElement.classList.add("visible");
      // change button text
      showAnswerButton.innerText = "Hide Answer";
      // remove hidden attribute
      answerElement.removeAttribute("hidden");
    } else {
      // animation
      answerElement.classList.remove("visible");
      answerElement.classList.add("hidden");

      // wait until animation has ended, and then set hidden and change the button text
      setTimeout(() => {
        answerElement.setAttribute("hidden", true);
        // change button text
        showAnswerButton.innerText = "Show Answer";
      }, 500);
    }
  });
