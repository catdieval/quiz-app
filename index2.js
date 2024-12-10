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

if (JSON.parse(localStorage.getItem("array-new-questions")) !== null) {
    
  const container = document.querySelector(".card-container");
  let arrayNewQuestions = JSON.parse(localStorage.getItem("array-new-questions"));
  arrayNewQuestions.map((obj) => {
  const cardAdded = document.createElement("section");
  cardAdded.classList.add("question-card-box");
  cardAdded.innerHTML = `
<p class="question">${obj.newQuestion}</p>
        <button type="button" class="answer-button" data-js="answer-button">
          Hide answer
        </button>
        <p class="question" data-js="answer">${obj.newAnswer}</p> 
        <div class="tag-section">
           <p>Tag</p>
           <span class="category">${obj.newTag}</span>
        </div>
`;
  container.appendChild(cardAdded);
  });
} 
