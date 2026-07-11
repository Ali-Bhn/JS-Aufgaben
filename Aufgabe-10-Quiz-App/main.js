const questions = [
  {
    question: "Welche Sprache wird hauptsächlich für Webseiten im Browser verwendet?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true },
      { text: "C#", correct: false }
    ]
  },
  {
    question: "Wie viele Kontinente gibt es auf der Erde?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false }
    ]
  },
  {
    question: "Welches HTML-Tag wird für eine große Überschrift verwendet?",
    answers: [
      { text: "<p>", correct: false },
      { text: "<h1>", correct: true },
      { text: "<div>", correct: false },
      { text: "<span>", correct: false }
    ]
  },
  {
    question: "Was bedeutet CSS?",
    answers: [
      { text: "Computer Style System", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Creative Site Structure", correct: false },
      { text: "Code Styling Syntax", correct: false }
    ]
  }
];

const questionsElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

 


function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionsElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click", selectAnswer);

    });

}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function selectAnswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionsElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }

})


startQuiz();
