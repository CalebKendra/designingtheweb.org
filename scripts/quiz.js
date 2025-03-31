document.addEventListener("DOMContentLoaded", async function () {
    // Ensure the DOM is fully loaded before attaching the event
    const loadQuestions = async () => {
        const response = await fetch("../assets/data/quiz-question.json")
        const questions = await response.json()
        return questions
    }

    const root = document.documentElement;
    const root_style = getComputedStyle(root);
    const startDisplay = document.querySelector("#quiz-start");
    const start = document.querySelector("#start-button");
    const box = document.querySelector("#quiz-box");

    // Start button styling
    start.style.backgroundColor = root_style.getPropertyValue('--secondary-color')


    function startQuiz() {
      startDisplay.style.display = "none"
      box.innerHTML = `
        <form id="quiz-form">
        </form>
        <p id="quiz-correct"></p>`;

      const amount = 2;
      const form = document.getElementById("quiz-form");
      let formString = '<h1>Quiz</h1>';
      const correctAnswers = [];

      /*
      loadQuestions().then((value) => {
          const questionData = value
          var option = questionData[i].options
          option.forEach(function (option) {
              var li = document.createElement("li")
              li.textContent = option
              current_options.appendChild(li)
          })
          current_question.innerHTML = `Question ${questionData[i].question}`;
          current_section.appendChild(current_question);
          current_section.appendChild(current_options);
          console.log(questionData)
      }).catch((err) => {
          console.log(err);
      });
      */

      loadQuestions().then((quizData) => {
        for (let i = 0; i < amount; i++) {
          correctAnswers.push(quizData[i].correctAnswerIndex + 1);
          formString += `
            <div class="question">
                <h3>${quizData[i].question}</h3>
                <input type="radio" name="${i}" id="1-${quizData[i].options[0]}" value="${quizData[i].options[0]}">
                <label for="1-${quizData[i].options[0]}">${quizData[i].options[0]}</label><br>
                <input type="radio" name="${i}" id="2-${quizData[i].options[1]}" value="${quizData[i].options[1]}">
                <label for="2-${quizData[i].options[1]}">${quizData[i].options[1]}</label><br>
                <input type="radio" name="${i}" id="3-${quizData[i].options[2]}" value="${quizData[i].options[2]}">
                <label for="3-${quizData[i].options[2]}">${quizData[i].options[2]}</label>
                <input type="radio" name="${i}" id="4-${quizData[i].options[3]}" value="${quizData[i].options[3]}">
                <label for="4-${quizData[i].options[3]}">${quizData[i].options[3]}</label>
            </div>
            `;
        }

        formString += `<button type="submit">Submit</button>`;
        form.innerHTML = formString;
      });



      form.addEventListener('submit', function(event) {
        event.preventDefault();
        let correctCount = 0;

        for (let i = 0; i < amount; i++) {
          const selectedOption = form.querySelector(`input[name="${i}"]:checked`);
          if (selectedOption && selectedOption.id[0] == correctAnswers[i]) {
            correctCount++;
          }
        }

        document.getElementById("quiz-correct").innerHTML = `Number of correct answers: ${correctCount}`;
      });
    }

    // Add event listener to start the quiz when the button is clicked
    start.addEventListener("click", startQuiz);
});
