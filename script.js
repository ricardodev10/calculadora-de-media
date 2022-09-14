const inputGrade1 = document.querySelector("#grade1")
const inputGrade2 = document.querySelector("#grade2")
const inputGrade3 = document.querySelector("#grade3")
const btnAverage = document.querySelector(".btn-average")
const message = document.querySelector(".message")

btnAverage.addEventListener("click", processGrades)
document.addEventListener("keydown", enterKey)

function validadeInput() {
    if (Number(inputGrade1.value) === 0 && Number(inputGrade2.value) === 0 && Number(inputGrade3.value) === 0) {
        message.innerHTML = "Digite uma nota maior que 0"
    }
}

function isStudentApproved() {
    const average = (Number(inputGrade1.value) + Number(inputGrade2.value) + Number(inputGrade3.value)) / 3

    if(average >= 6) {
            message.innerHTML = `Parabéns, você foi aprovado! Sua média foi ${average.toFixed(2)}.`
        } else if(average < 6) {
            message.innerHTML = `Sua média foi ${average.toFixed(2)}. Você foi reprovado!`
    }
}

function processGrades() {
    isStudentApproved()
    validadeInput()
}

function enterKey(event) {
    if ((event.key == "Enter")) {
        processGrades()
    }
}

// ==================== Light mode ====================
const body = document.querySelector("body")
const switchBtn = document.getElementById("switch")
const root = document.querySelector(":root")

// Change theme
switchBtn.addEventListener("change", toggleRootClass)

function toggleRootClass() {
    document.querySelector(":root").classList.toggle("light")
}
// ==================== Light mode ====================