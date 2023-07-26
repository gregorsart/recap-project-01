"use strict";
console.log("hello newbie, form");

// VARIABLES ---------------------------------------------------

const form = document.querySelector('[data-js="form"]');
const questionTextarea = document.querySelector(
  '[data-js="textarea-question"]'
);
const answerTextarea = document.querySelector('[data-js="textarea-answer"]');

// LOGIC -------------------------------------------------------

function checkCharacterLength(textarea, paragraph) {
  const totalLength = textarea.getAttribute("maxlength");
  const inputLength = textarea.value.length;
  const result = totalLength - inputLength;
  paragraph.textContent = `${result} characters left`;
}

// EVENTS ------------------------------------------------------

// question
questionTextarea.addEventListener("input", (event) => {
  const charactersRemaining = document.querySelector(
    '[data-js="characters-left-question"]'
  );
  checkCharacterLength(event.target, charactersRemaining);
});

// answer
answerTextarea.addEventListener("input", (event) => {
  const charactersRemaining = document.querySelector(
    '[data-js="characters-left-answer"]'
  );
  checkCharacterLength(event.target, charactersRemaining);
});

// form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   GET FORM DATA

  const formData = new FormData(form);
  const cardDataObject = {
    id: crypto.randomUUID(),
    ...Object.fromEntries(formData),
    bookmarked: false,
  };
  // get from local storage or empty array
  const cards = JSON.parse(localStorage.getItem("cards")) ?? [];

  // push into cards
  cards.push(cardDataObject);
  // save in local storage
  localStorage.setItem("cards", JSON.stringify(cards));

  form.reset();
});
