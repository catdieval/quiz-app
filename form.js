//console.clear();

const formElement = document.querySelector('[data-js="card-form"]');
const questionInput = document.querySelector("[data-js=question-input]");
const answerInput = document.querySelector('[data-js="answer-input"]');
const tagInput = document.querySelector('[data-js="tag-input"]');

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const questionInputText = questionInput.value;
  const answerInputText = answerInput.value;
  const tagInputText = "#" + tagInput.value;

  event.target.reset();

  const container = document.querySelector("#form-container");
  const newQuestion = document.createElement("p");
  newQuestion.textContent = "New question: " + questionInputText;
  newQuestion.classList.add("question");
  container.appendChild(newQuestion);
  const newAnswer = document.createElement("p");
  newAnswer.textContent = "New answer: " + answerInputText;
  newAnswer.classList.add("question");
  container.appendChild(newAnswer);
  const newTag = document.createElement("p");
  newTag.textContent = "New tag: " + tagInputText;
  newTag.classList.add("question");
  container.appendChild(newTag);
  
  const obj = {
    questionName: questionInputText, answerName: answerInputText, tagName: tagInputText, isBookmarkedValue: false
  };
  
  let arrayCards = JSON.parse(localStorage.getItem("array-cards"));
  arrayCards.push(obj);
  
  localStorage.setItem("array-cards", JSON.stringify(arrayCards));
});

function calculateAmountLeft(jsAmountLeft, textAreaInput) {
  const amountLeft = document.querySelector(jsAmountLeft);
  const maxLength = textAreaInput.getAttribute("maxlength");
  const updateAmountLeft = (value) => {
    amountLeft.innerText = value;
  };
  updateAmountLeft(maxLength);
  textAreaInput.addEventListener("input", () => {
    updateAmountLeft(maxLength - textAreaInput.value.length);
  });
}

calculateAmountLeft('[data-js="amountLeftQuestion"]', questionInput);
calculateAmountLeft('[data-js="amountLeftAnswer"]', answerInput);
