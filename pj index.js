const containerE1 = document.querySelector(".container");

const careers = ["bhavya", "Tekreant", "Intern", "Learning", "Nodejs"];

let careerIndex = 0;
let characterIndex = 0;

function updateText() {
    containerE1.innerHTML = `<h1> ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

    characterIndex++;

    if (characterIndex > careers[careerIndex].length) {
        characterIndex = 0;
        careerIndex++;
        if (careerIndex === careers.length) {
            careerIndex = 0;
        }
    }

    setTimeout(updateText, 200);
}

updateText();

 

