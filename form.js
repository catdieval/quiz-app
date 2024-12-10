console.clear();

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

  const newBreak = document.createElement("br");
  document.body.append(newBreak);
  const newQuestion = document.createElement("p");
  newQuestion.textContent = "New question: " + questionInputText;
  newQuestion.classList.add("question");
  document.body.append(newQuestion);
  const newAnswer = document.createElement("p");
  newAnswer.textContent = "New answer: " + answerInputText;
  newAnswer.classList.add("question");
  document.body.append(newAnswer);
  const newTag = document.createElement("p");
  newTag.textContent = "New tag: " + tagInputText;
  newTag.classList.add("question");
  document.body.append(newTag);
  
  const obj = {
    newQuestion: questionInputText, newAnswer: answerInputText, newTag: tagInputText
  };
  
  let arrayNewQuestions;
  if (JSON.parse(localStorage.getItem("array-new-questions")) !== null) {
    arrayNewQuestions = JSON.parse(localStorage.getItem("array-new-questions"));
    arrayNewQuestions.push(obj);
  } else {
    arrayNewQuestions = [obj];
  }
 
  
  
  localStorage.setItem("array-new-questions", JSON.stringify(arrayNewQuestions)); 
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
