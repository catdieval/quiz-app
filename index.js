const bodyElement = document.querySelector('[data-js="body"]');
const toggledarkBtn = document.querySelector('[data-js="toggledarkbutton"]');

toggledarkBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("darkmode");
});

const toggleBookmarkBtn = document.querySelector(
  '[data-js="toggle-bookmark-button"]'
);

toggleBookmarkBtn.addEventListener("click", () => {
  toggleBookmarkBtn.classList.toggle("selected-bookmark-button");
});
