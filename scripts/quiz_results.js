// Example: pulling results from localStorage (can be replaced with other transfer method)
const resultsList = document.getElementById("results-list");
const scoreDisplay = document.getElementById("score-display");

const results = JSON.parse(localStorage.getItem("quizResults")); // stored from quiz.js
const questions = JSON.parse(localStorage.getItem("quizQuestions")); // stored from quiz.js

if (!results || !questions) {
  resultsList.innerHTML = "<p>No quiz results found. Please take the quiz first.</p>";
} else {
  const { correctCount, selectedAnswers } = results;

  // Show total score
  scoreDisplay.textContent = `You got ${correctCount} out of ${questions.length} correct.`;

  // Display each question and the correct answer
  questions.forEach((q, i) => {
    const correctAnswer = q.options[q.correctIndex];
    const userAnswer = selectedAnswers[i];

    const isCorrect = userAnswer === correctAnswer;

    const questionHTML = `
      <div class="result-question">
        <h3>Q${i + 1}: ${q.text}</h3>
        <p><strong>Your answer:</strong> ${userAnswer || "No answer selected"}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: ${isCorrect ? 'green' : 'red'}; font-weight: bold;">
          ${isCorrect ? "Correct!" : "Incorrect"}
        </p>
      </div>
      <hr>
    `;

    resultsList.innerHTML += questionHTML;
  });
}
