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
  
  toggleAnswerBtn.textContent = (answerElement.hasAttribute("hidden")) ? "Hide answer": "Show answer";
  answerElement.toggleAttribute("hidden"); 
  
});
