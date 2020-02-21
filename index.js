const STORE = [
  {number: 1, question: "One who strikes his father or his mother...", optionA: "...shall be put to death." , optionB: "...shall get ice cream.", optionC: "...shall receive 70 lashes.", optionD: "...shall be sold into slavery.", answer: "a", pasuk: "One who strikes his father or his mother shall be put to death.", source: "S" },
  {number: 2, question: "An eye for an eye,...", optionA: "...an egg for an egg." , optionB: "...a tooth for a tooth." , optionC: "...a bear for a bear.", optionD: "...a door for a door." , answer: "b", pasuk: "An eye for an eye, a tooth for a tooth.", source: "S"}, 
  {number: 3, question: "You shall not allow a sorceress to...", optionA: "...bake.", optionB: "...buy a chair.", optionC: "...live.", optionD: "...get a college degree.", answer: "c", pasuk: "You shall not allow a sorceress to live.", source: "S"},
  {number: 4, question: "If you come upon your enemy's bull or his stray donkey, you shall surely...", optionA: "...sell it for parts.", optionB: "...throw a party.", optionC: "...ask it for directions.", optionD: "...return it to him.", answer: "d", pasuk: "If you come upon your enemy's bull or his stray donkey, you shall surely return it to him.", source: "S"},
  {number: 5, question: "You shall not cook a kid...", optionA: "...on Tuesdays." , optionB: "...in his mother's milk.", optionC: "...in a wok.", optionD: "...in coconut milk.", answer: "b", pasuk: "You shall not cook a kid in its mother's milk.", source: "S"},
]

let currentQ = 0;

//make sure answer submitted is case independent!!


function generateQuestionElement(item) {
  //this function generates the HTML for each quiz question
  console.log("Function generateQuestionElement() ran.");
  return `
    <form id = "${item.number}" class = "js-question-form"> 
    <label>${item.number}. Complete the pasuk: "${item.question}"</label>
    <ol type = "A">
    <li>"${item.optionA}"</li>
    <li>"${item.optionB}"</li>
    <li>"${item.optionC}"</li>
    <li>"${item.optionD}"</li>
    </ol>
    <input type = "text" class = "js-answer-input" placeholder = "Enter a letter">
    <button>Submit</button>
    </form>
    <p class = "js-display-answer"></p>
    `
}

function generateQuestionString(questionList) {
  //this function renders generateQuestionElement result to the page
  
  console.log("Function renderQuestionElement() ran.");
  const fullQuiz = questionList.map((item) => generateQuestionElement(item));
  return fullQuiz.join("");
  
}

function renderQuiz() {
  //this function triggers the quiz, and adds first quiz question
  console.log("Function pressToContinue() ran.");
  $("#js-main-button").click(function() {
    $(".intro").addClass("erase");
    
    $(".quizContainer").html(generateQuestionString(STORE));
  })
}

function submitAnswer() {
  //this function compares the answer submitted with the real answer, responds to user with correct answer.
  console.log("Function submitAnswer() ran.");

  $(".js-question-form").submit(event => {
    event.preventDefault();

    for (let i = 1; i <= STORE.length; i++) {
      let inputAnswer = $(this).find(".js-answer-input").val();
      if (inputAnswer === STORE[i].answer) {
        $(".js-display-answer").text(`Correct!`);
      } else {
        $(".js-display-answer").text(`Incorrect. The full pasuk is "${STORE[i].pasuk}"`);
      };
    };
    
  })

}

function nextQuestion() {
  //this function responds to pressing submit with "next" button, which moves to next question in list.
}

function correctCount() {
  //this function keeps track of the # of correct answers.
  console.log("Function correctCount() ran.");
}

function incorrectCount() {
  //this function keeps track of the # of incorrect answers.
  console.log("Function incorrectCount() ran.");
}

function displayScore() {
  //this function displays score after user has answered the last question.
  console.log("Function displayScore() ran.");
}

function renderPage() {
  
    renderQuiz();
  // submitAnswer();
  nextQuestion();
  correctCount(); 
  incorrectCount();
  displayScore();
}

$(renderPage);