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
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestion = 0;
let score = 0;
 


