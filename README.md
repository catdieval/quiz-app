# Quiz-App

Quiz-App is a flashcard web application, written with HTML, CSS and vanilla JavaScript.

- 🏠 Homepage: a list of the user's cards.
  - Initially it has only one card. The card has a question, an answer, a tag and 2 buttons.
  - Clicking on the "Hide answer" toggling button hides the answer, and clicking it again reveals the answer (with the button text switching to "Show answer").
  - Clicking on the toggling button with the bookmark icon 🔖 adds the card to a list of bookmarks on the page "Bookmarks", and clicking again deletes the card
  from the bookmarks. Toggling the button also toggles its background color and displays a dialog in the middle of the screen, indicating which action was performed.
  The dialog disappears after 2 seconds.
  - The user can add more cards to this list by creating new cards on the page Create new card.
  - New cards added here have each a delete button ✖. Clicking on this button deletes the card from the list on Homepage.
  A bookmarked card which gets deleted is also removed from Bookmarks page.

- 🔖 Bookmarks: a list of the bookmarked cards.
  - Initially this list is empty.
  - Once that cards are added as bookmarks, they appear here, looking the same as on the Homepage, except for the absence of a bookmarked button.
  - They have each a delete button ✖. Clicking on this button removes the card from the Bookmarks page and sets the corresponding card as not bookmarked
  on the Homepage.
  
- 👤 Profile: a view of the user profile for the user John Doe.
  - It displays the name, an "About me" section and a "Settings" section including one setting
  that the user can modify: the choice between light and dark themes, through a toggling button ☀️ / 🌙.
  - Initially the theme is light.
  - Clicking on the button puts the dark theme on all pages. Clicking it again puts back all pages in the light theme.

- ➕ Create new card: a form is displayed, with input fields for a question, an answer and a tag, and a "Submit" button.
  - Clicking on the button submits the form data.
  - In case of success, it creates a new card and adds it to the list on Homepage.
  - Failure can occur if the user enters a question which already exists as a card in the list of cards, then a friendly message is displayed
    instructing the user what to do.

At the botton of each page is displayed a menu with links containing icons. Each icon corresponds to one of the above pages.
Clicking on an icon redirects the user to the corresponding page. The current page is indicated by the cyan colored background of the corresponding link.
  
