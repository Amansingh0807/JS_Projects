

const container1 = document.querySelector(".container");
const careers = ["Web developer", "freelancer", "designer"];
let careerIndex = 0;
let characterIndex = 0;
updateText();
function updateText() {
  container1.innerHTML = ( <h1>
    I am a ${careers[careerIndex].slice(0, characterIndex)}</h1>
  );
  characterIndex++;
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  setTimeout(updateText, 400);
}