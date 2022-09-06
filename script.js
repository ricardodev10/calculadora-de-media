const inputNote1 = document.querySelector("#note1");
const inputNote2 = document.querySelector("#note2");
const inputNote3 = document.querySelector("#note3");
const btnAverage = document.querySelector(".btn-average");
const message = document.querySelector(".message");

btnAverage.addEventListener("click", generateAverage);
document.addEventListener("keydown", enterKey);

function generateAverage() {
    const average = (Number(inputNote1.value) + Number(inputNote2.value) + Number(inputNote3.value)) / 3;

    if(Number(inputNote1.value) === 0 && Number(inputNote2.value) === 0 && Number(inputNote3.value) === 0) {
        message.innerHTML = "Digite uma nota maior que 0";
    } else {
        if(average >= 6) {
            message.innerHTML = `Parabéns, você foi aprovado! Sua média foi ${average.toFixed(2)}.`;
        } else if(average < 6) {
            message.innerHTML = `Sua média foi ${average.toFixed(2)}. Você foi reprovado!`;
        }
    }
};

function enterKey(event) {
    if((event.key == "Enter")) {
        generateAverage()
    }
};

// ==================== Light mode ====================
const body = document.querySelector("body");
const switchBtn = document.getElementById("switch");
const root = document.querySelector(":root");

// Change theme
switchBtn.addEventListener("change", toggleRootClass);

function toggleRootClass() {
  document.querySelector(":root").classList.toggle("light");
}
// ==================== Light mode ====================