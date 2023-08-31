const teamArrow = document.querySelector(".team");
const fileArrow = document.querySelector(".file");
const passArrow = document.querySelector(".pass");
const subArrow = document.querySelector(".sub");
const additionalArrow = document.querySelector(".additional");


const teamAnswer = document.querySelector(".team-answer");
const fileAnswer = document.querySelector(".file-answer");
const passAnswer = document.querySelector(".pass-answer");
const subAnswer = document.querySelector(".sub-answer");
const additionalAnswer = document.querySelector(".additional-answer");


const teamQuestion = document.querySelector(".team-question")
const fileQuestion = document.querySelector(".file-question");
const passQuestion = document.querySelector(".pass-question");
const subQuestion = document.querySelector(".sub-question");
const additionalQuestion = document.querySelector(".additional-question");


teamQuestion.addEventListener("click", ()=>{
    teamAnswer.classList.toggle("active")
    teamQuestion.classList.toggle("active")
})
teamAnswer.addEventListener("click", ()=>{
    teamAnswer.classList.remove("active")
    teamQuestion.style.fontWeight = "normal";
})


fileQuestion.addEventListener("click", ()=>{
    fileAnswer.classList.toggle("active")
    fileQuestion.classList.toggle("active")
})
fileAnswer.addEventListener("click", ()=>{
    fileAnswer.classList.remove("active")
    fileQuestion.style.fontWeight = "normal";
})


passQuestion.addEventListener("click", ()=>{
    passAnswer.classList.toggle("active")
    passQuestion.classList.toggle("active")
})
passAnswer.addEventListener("click", ()=>{
    passAnswer.classList.remove("active")
    passQuestion.style.fontWeight = "normal";
})


subQuestion.addEventListener("click", ()=>{
    subAnswer.classList.toggle("active")
    subQuestion.classList.toggle("active")
})
subAnswer.addEventListener("click", ()=>{
    subAnswer.classList.remove("active")
    subQuestion.style.fontWeight = "normal";
})


additionalQuestion.addEventListener("click", ()=>{
    additionalAnswer.classList.toggle("active")
    additionalQuestion.classList.toggle("active")
})
additionalAnswer.addEventListener("click", ()=>{
    additionalAnswer.classList.remove("active");
    additionalQuestion.style.fontWeight = "normal";
})