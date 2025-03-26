const data = `"Pizza is good", "yes", "no", "pineapple", "pie", 3
  "Pizza is bad", "no", "yes", "pepperoni", "pizza", 1`
const quizData = data.split('\n').map(row => row.split(',').map(cell => cell.trim()));
const amount = 2;
const form = document.getElementById("quiz-form");
let formString = '';

for (let i = 0; i < amount; i++) {
  formString += `
  <div class="question">
      <input type="radio" id="html" value="HTML">
      <label for="html">HTML</label><br>
      <input type="radio" id="css" value="CSS">
      <label for="css">CSS</label><br>
      <input type="radio" id="javascript" value="JavaScript">
      <label for="javascript">JavaScript</label>
      <input type="radio" id="${quizData[i][4]}" value="JavaScript">
      <label for="javascript">${quizData[i][4]}</label>
  </div>
  `;
}

form.innerHTML = formString;
