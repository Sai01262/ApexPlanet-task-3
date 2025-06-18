const quiz = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Media Layout", "None of the above"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which tag is used to include JavaScript?",
    options: ["<script>", "<style>", "<js>", "<javascript>"],
    answer: "<script>"
  },
  {
    question: "Which CSS property is used to make a site responsive?",
    options: ["@import", "z-index", "@media", "position"],
    answer: "@media"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const q = quiz[currentQuestion];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => {
      if (option === q.answer) score++;
      currentQuestion++;
      if (currentQuestion < quiz.length) {
        loadQuestion();
      } else {
        showScore();
      }
    };
    optionsEl.appendChild(btn);
  });
}

function showScore() {
  questionEl.innerText = `You scored ${score} out of ${quiz.length}`;
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
}

nextBtn.style.display = "none";
loadQuestion();