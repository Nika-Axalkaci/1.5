const questinEl = document.querySelector("#quest");
const answersEl = document.querySelector("#answers");
const answersLi = answersEl.querySelectorAll("#anwswersLi")
const submitEl = document.querySelector("#submit")
const coinsEl = document.querySelector("#coins")
const questions = [
  {
    question: "2+2=?",
    answersQ: ["1", "2", "4", "5"],
    trueAnswer: "4"
  },
  {
    question: "what is capital of georgia",
    answersQ: ["batumi", "kaxeti", "mcxeta", "tbilisi"],
    trueAnswer: "tbilisi"

  },
  {
    question: "what is capital of france",
    answersQ: ["Paris", "tokyo", "London", "Madrid"],
    trueAnswer: "Paris"
  }
];
let indexOfQuestions = 0;
const [{question,answersQ,trueAnswer}] = questions
function buildQuestions(){
  const cuQuestion = questions[indexOfQuestions]
  questinEl.textContent = cuQuestion.question
  answersEl.innerHTML = ""
  cuQuestion.answersQ.forEach((an)=>{
    const list = document.createElement("li")
    list.textContent = an
    answersEl.append(list)
  })
  return
}
function chckAnswers(){
  let coins = 0;
  const cuQuestion = questions[indexOfQuestions]
  const sAnswers = document.querySelector("li.selected")
  if(sAnswers && sAnswers.textContent === cuQuestion.trueAnswer){
    questinEl.style.color = "green"
    coins++
  }else{
    questinEl.style.color = "red"
    coins= coins
  }
  indexOfQuestions++
  coinsEl.textContent =coins
  if(indexOfQuestions ===questions.length){
    alert("quizi morcha!!")
    return
  }
  buildQuestions()
}
answersEl.addEventListener("click",(e)=>{
  const sAnswers = e.target
  answersLi.forEach((asnw)=>{
    asnw.classList.remove('selected')
  })
  sAnswers.classList.add("selected")
})
submitEl.addEventListener('click',()=>{
  chckAnswers()
})

buildQuestions()
