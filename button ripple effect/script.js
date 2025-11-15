// Select the button element with the class "btn" and store it in btnEl
const btnEl = document.querySelector(".btn");

// Add an event listener for the "mouseover" event on the button
btnEl.addEventListener("mouseover", (event) => {
  
  // Calculate the X coordinate of the mouse relative to the button
  const x = event.pageX - btnEl.offsetLeft;
  
  // Calculate the Y coordinate of the mouse relative to the button
  const y = event.pageY - btnEl.offsetTop;
  
  // Update the CSS variable --xPos with the X coordinate in pixels
  btnEl.style.setProperty("--xPos", x + "px");
  
  // Update the CSS variable --yPos with the Y coordinate in pixels
  btnEl.style.setProperty("--yPos", y + "px");
});
