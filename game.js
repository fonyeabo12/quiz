const question = document.getElementById("question");
const option = Array.from(document.getElementsByClassName("option-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "Where in the HTML file do you place the JavaScript?",
    option1: "In the head element",
    option2: "In the body element",
    option3: "At the end of the html just before closing the body tag",
    option4: "In the title section of the HTML file",
    option5: "Nowhere in the HTML file",
    answer: 3
  },
  {
    question:
      "What does DOM stand for?",
    option1: "Document Object Movement",
    option2: "Descriptive Object Movement",
    option3: "Dormant Operation Make",
    option4: "Document Object Model",
    option5: "Descrition of Meal",
    answer: 4
  },
  {
    question: "Which is a Block Scope Declaration?",
    option1: "Hello",
    option2: "const",
    option3: "var",
    option4: "for",
    option5: "print",
    answer: 2
  },


  {
    question: "Which is not a data type?",
    option1: "number",
    option2: "string",
    option3: "boolean",
    option4: "undefined",
    option5: "print",
    answer: 5
  },

  
  {
    question: "Which of these are High Order Array methods?",
    option1: "forEach, map, filter",
    option2: "print, else if, if else",
    option3: "define, forEach, execute",
    option4: "define, filter, class",
    option5: "shift, execute, map",
    answer: 1
  }
];


const CORRECT_BONUS = 5;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score)
    return window.location.assign("end.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  option.forEach(option => {
    const number = option.dataset["number"];
    option.innerText = currentQuestion["option" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

option.forEach(option => {
  option.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedoption = e.target;
    const selectedAnswer = selectedoption.dataset["number"];

    const classToApply = selectedAnswer== currentQuestion.answer ? "correct" : "Incorrect";

    selectedoption.parentElement.classList.add(classToApply);

    setTimeout( () => {
      selectedoption.parentElement.classList.remove(classToApply);

    console.log(classToApply);
    getNewQuestion();
    }, 1000)
    
  });
});

startGame();