const STORE = [
  {answer: "a", pasuk: "One who strikes his father or his mother shall be put to death.", source: "S" },
  {answer: "b", pasuk: "An eye for an eye, a tooth for a tooth.", source: "S"},
  {answer: "c", pasuk: "You shall not allow a sorceress to live.", source: "S"},
  {answer: "d", pasuk: "If you come upon your enemy's bull or his stray donkey, you shall surely return it to him.", source: "S"},
  {answer: "b", pasuk: "You shall not cook a kid in its mother's milk.", source: "S"},
]

function intro() {
//this function shows an opening title when the page is loaded, before the quiz is shown.
}

function pressToContinue() {
  //this function triggers the quiz, when the user clicks a button in the opening title.
}

function submitAnswer() {
  //this function compares the answer submitted with the real answer.
}

function correctCount() {
  //this function keeps track of the # of correct answers.
}

function incorrectCount() {
  //this function keeps track of the # of incorrect answers.
}

function displayScore() {
  //this function displays score after user has answered the last question.
}

function renderPage() {
  intro();
  pressToContinue();
  submitAnswer();
  correctCount();
  incorrectCount();
  displayScore();
}

$(renderPage);