("use strict");
console.log("hello newbie, toggleAnswer");

// Show Answer / Hide Answer Animation

// LOGIC
function toggleAnswer(card) {
  const showAnswerButton = card.querySelector('[data-js="showAnswerButton"]');
  // Event Listener
  showAnswerButton.addEventListener("click", () => {
    const answerElement = card.querySelector('[data-js="answer"]');

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
}
// VARIABLES
const htmlCards = document.querySelectorAll('[data-js="card"]');
htmlCards.forEach((card) => {
  toggleAnswer(card);
});
