console.clear();

const toggleBookmarkBtn = document.querySelector(
  '[data-js="toggle-bookmark-button"]'
);

toggleBookmarkBtn.addEventListener("click", () => {
  toggleBookmarkBtn.classList.toggle("selected-bookmark-button");
});

const toggleAnswerBtn = document.querySelector('[data-js="answer-button"]');
const answerElement = document.querySelector('[data-js="answer"]');

toggleAnswerBtn.addEventListener("click", () => {
  answerElement.classList.toggle("hidden");
  if (toggleAnswerBtn.innerHTML === "Hide answer") {
    toggleAnswerBtn.innerHTML = "Show answer";
  } else {
    toggleAnswerBtn.innerHTML = "Hide answer";
  }
});
