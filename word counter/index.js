// Select the textarea element by its ID "textarea"
const textareaEl = document.getElementById("textarea");

// Select the element where the total word count will be displayed by its ID "total-counter"
const totalCounterEl = document.getElementById("total-counter");

// Select the element where the remaining word count will be displayed by its ID "remaining-counter"
const remainingCounterEl = document.getElementById("remaining-counter");

// Add an event listener to the textarea that listens for the "keyup" event (triggered when a key is released)
textareaEl.addEventListener("keyup", () => {
  // Call the updateCounter function every time a key is released to update the counters
  updateCounter();
});

// Call the updateCounter function initially to set the counters based on any pre-existing text
updateCounter();

// Function to update both the total and remaining word counters
function updateCounter() {
  // Split the textarea value by spaces and filter out any empty strings to count the words
  const wordsArray = textareaEl.value.trim().split(/\s+/);
  const wordCount = wordsArray.filter(word => word.length > 0).length;

  // Update the total counter element's text to show the current number of words in the textarea
  totalCounterEl.innerText = wordCount;

  // Calculate the maximum number of words allowed (if maxLength is considered as a word limit)
  const maxWords = textareaEl.getAttribute("maxLength");
  
  // Update the remaining counter element's text to show how many words are left
  remainingCounterEl.innerText = maxWords - wordCount;
}
