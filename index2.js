console.clear();

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
        <button
          type="button"
          class="bookmark-button"
          aria-label="Bookmark card"
          title="Bookmark card"
          data-js="toggle-bookmark-button"
        >
          🔖
        </button>
`;
  container.appendChild(cardAdded);
  });

  const listOfToggleBookmarkBtns = document.querySelectorAll('[data-js="toggle-bookmark-button"]');

  for (let i = 0; i < listOfToggleBookmarkBtns.length; i++) {
    const btn = listOfToggleBookmarkBtns[i];
    btn.addEventListener("click", () => {
      btn.classList.toggle("selected-bookmark-button");
    });
  }

  const listOfAnswerElements = document.querySelectorAll('[data-js="answer"]');
  const listOfToggleAnswerBtns = document.querySelectorAll('[data-js="answer-button"]');

  for (let i = 0; i < listOfToggleAnswerBtns.length; i++) {
  
    const btn = listOfToggleAnswerBtns[i];
    const answer = listOfAnswerElements[i];
    btn.addEventListener("click", () => {
      btn.textContent = (answer.hasAttribute("hidden")) ? "Hide answer": "Show answer";
      answer.toggleAttribute("hidden");
    });
  } 
} else {

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
}
