var currentQuestion;

function selectNewQuestion() {
  currentQuestion = questions[Math.floor(Math.random() * questions.length)];
  document.getElementById("question").innerText = currentQuestion.question;
}

var score = localStorage.getItem("score")
  ? parseInt(localStorage.getItem("score"))
  : 0;
document.getElementById("score").innerText = "Puntuación: " + score;

document.getElementById("submitAnswer").addEventListener("click", function () {
  var userAnswer = document
    .getElementById("inputAnswer")
    .value.toLowerCase()
    .split(" ");
  var correctAnswer = currentQuestion.answer.toLowerCase().split(" ");
  var isCorrect = userAnswer.some((word) => correctAnswer.includes(word));
  if (isCorrect) {
    score++; // Incrementa la puntuación en uno
    localStorage.setItem("score", score); // Guarda la puntuación en el localStorage
    document.getElementById("result").innerText =
      "Correcto! " +
      currentQuestion.answer +
      " ganó " +
      currentQuestion.competition +
      " en " +
      currentQuestion.year;
  } else {
    document.getElementById("result").innerText =
      "Incorrecto, la respuesta correcta era " +
      currentQuestion.answer +
      " que ganó " +
      currentQuestion.competition +
      " en " +
      currentQuestion.year;
  }
  document.getElementById("score").innerText = "Puntuación: " + score; // Actualiza la puntuación
  document.getElementById("inputAnswer").value = "";
  selectNewQuestion();
});
document
  .getElementById("inputAnswer")
  .addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      document.getElementById("submitAnswer").click();
    }
  });

selectNewQuestion();
