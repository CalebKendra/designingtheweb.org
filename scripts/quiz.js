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
        const value = document.getElementById("question-choice").value;

        console.log(`Selected value: ${value}`); // Check the selected value

        for (let i = 1; i < value; i++) { // Adjust loop to include value itself
            const current_section = document.createElement("section");
            const current_question = document.createElement("h2");
            const current_options = document.createElement("li");
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
            box.appendChild(current_section);
        }
        startDisplay.style.display = "none"
    }

    // Add event listener to start the quiz when the button is clicked
    start.addEventListener("click", startQuiz);
});