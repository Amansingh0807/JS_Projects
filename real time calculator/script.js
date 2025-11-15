// Select the textarea element by its ID "textarea"
const textareaEl = document.getElementById("textarea");

// Select the element where the total character count will be displayed by its ID "total-counter"
const totalCounterEl = document.getElementById("total-counter");

// Select the element where the remaining character count will be displayed by its ID "remaining-counter"
const remainingCounterEl = document.getElementById("remaining-counter");

// Add an event listener to the textarea that listens for the "keyup" event (triggered when a key is released)
textareaEl.addEventListener("keyup", () => {
  // Call the updateCounter function every time a key is released to update the counters
  updateCounter();
});

// Call the updateCounter function initially to set the counters based on any pre-existing text
updateCounter();

// Function to update both the total and remaining character counters
function updateCounter() {
  // Update the total counter element's text to show the current number of characters in the textarea
  totalCounterEl.innerText = textareaEl.value.length;

  // Update the remaining counter element's text to show how many characters are left
  remainingCounterEl.innerText =
    textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
