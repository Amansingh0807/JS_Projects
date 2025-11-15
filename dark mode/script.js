// Select the checkbox input element with the class "input"
const inputEl = document.querySelector(".input");

// Select the body element of the document
const bodyEl = document.querySelector("body");

// Retrieve the saved checkbox state from local storage and set the checkbox to that state
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

// Call the function to update the body background color based on the checkbox state
updateBody();

// Function to update the body's background color based on the checkbox's checked state
function updateBody() {
  if (inputEl.checked) {
    // If the checkbox is checked, set the background color to black (dark mode)
    bodyEl.style.background = "black";
  } else {
    // If the checkbox is not checked, set the background color to white (light mode)
    bodyEl.style.background = "white";
  }
}

// Add an event listener to the checkbox that triggers when its state changes (checked/unchecked)
inputEl.addEventListener("input", () => {
  // Update the body background color whenever the checkbox is toggled
  updateBody();
  // Save the current checkbox state to local storage
  updateLocalStorage();
});

// Function to save the checkbox's current state to local storage
function updateLocalStorage() {
  // Convert the checkbox state (true/false) to a string and save it under the key "mode"
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
