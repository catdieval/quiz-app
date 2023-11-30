console.clear();

const formElement = document.querySelector('[data-js="card-form"]');
const questionInput = document.querySelector("[data-js=question-input]");
const answerInput = document.querySelector('[data-js="answer-input"]');
const tagInput = document.querySelector('[data-js="tag-input"]');

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const questionInputText = questionInput.value;
  const answerInputText = answerInput.value;
  const tagInputText = tagInput.value;
  console.log(questionInputText);
  console.log(answerInputText);
  console.log(tagInputText);
  const newCard = document.createElement("section");
  newCard.classList.add("question-card-box");
  document.body.append(newCard);
  const newQuestion = document.createElement("p");
  newQuestion.classList.add("question");
  newQuestion.textContent = questionInputText;
  newCard.append(newQuestion);
  const newAnswer = document.createElement("p");
  newAnswer.classList.add("question");
  newAnswer.textContent = answerInputText;
  newCard.append(newAnswer);
  const newUl = document.createElement("ul");
  newCard.append(newUl);
  const newLi = document.createElement("li");
  newLi.classList.add("button-category");
  newUl.append(newLi);
  const newTag = document.createElement("button");
  newTag.classList.add("colored-button");
  newTag.textContent = tagInputText;
  newLi.append(newTag);
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
