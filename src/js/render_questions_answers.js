import questionsList from './data.js';
import { removeHide, setStatusClass, resetState } from './common_function.js';
import { updateTimer, saveTimePlayer } from './handle_timer.js';
import renderResult from './render_result.js';

//* Create question progress bar
const questionProgressTextElement = document.createElement('p');
questionProgressTextElement.classList.add('progress__text');

const questionProgressBarElement = document.createElement('div');
questionProgressBarElement.classList.add('progress__bar');

const questionProgressBarFullElement = document.createElement('div');
questionProgressBarFullElement.classList.add('progress__bar-full');

questionProgressBarElement.appendChild(questionProgressBarFullElement);
questionProgressElement.appendChild(questionProgressTextElement);
questionProgressElement.appendChild(questionProgressBarElement);

//* Create correct answer progress bar
const answerProgressCorrectElement = document.createElement('div');
answerProgressCorrectElement.classList.add('answer__progress', 'answer__progress--correct');

const answerProgressTextCorrectElement = document.createElement('p');

const answerProgressBarCorrectElement = document.createElement('div');
answerProgressBarCorrectElement.classList.add('answer__progress-bar');

const answerProgressBarInnerCorrectElement = document.createElement('div');
answerProgressBarInnerCorrectElement.classList.add('answer__progress-bar-inner');

answerProgressBarCorrectElement.appendChild(answerProgressBarInnerCorrectElement);
answerProgressCorrectElement.appendChild(answerProgressTextCorrectElement);
answerProgressCorrectElement.appendChild(answerProgressBarCorrectElement);
questionAnswerProgressElement.appendChild(answerProgressCorrectElement);

//* Create wrong answer progress bar
const answerProgressWrongElement = document.createElement('div');
answerProgressWrongElement.classList.add('answer__progress', 'answer__progress--wrong');

const answerProgressTextWrongElement = document.createElement('p');

const answerProgressBarWrongElement = document.createElement('div');
answerProgressBarWrongElement.classList.add('answer__progress-bar');

const answerProgressBarInnerWrongElement = document.createElement('div');
answerProgressBarInnerWrongElement.classList.add('answer__progress-bar-inner');

answerProgressBarWrongElement.appendChild(answerProgressBarInnerWrongElement);
answerProgressWrongElement.appendChild(answerProgressTextWrongElement);
answerProgressWrongElement.appendChild(answerProgressBarWrongElement);
questionAnswerProgressElement.appendChild(answerProgressWrongElement);

function updateQuestionProgress() {
  questionProgressTextElement.innerHTML = `
    Question ${currentQuestionIndex + 1} of ${questionsList.length}
  `;
  questionProgressBarFullElement.style.width = `
    ${(currentQuestionIndex / questionsList.length) * 100}%
  `;
}

function updateAnswerProgressCorrect() {
  answerProgressTextCorrectElement.innerHTML = `
    Correct answers: ${correctAnswer}
  `;
  answerProgressBarInnerCorrectElement.style.width = `
    ${(correctAnswer / questionsList.length) * 100}%
  `;
  if (correctAnswer !== 0) {
    answerProgressBarInnerCorrectElement.innerHTML = `
      ${(correctAnswer / questionsList.length) * 100}%
    `;
  }
}

function updateAnswerProgressWrong() {
  answerProgressTextWrongElement.innerHTML = `
    Wrong answers: ${wrongAnswer}
  `;
  answerProgressBarInnerWrongElement.style.width = `
    ${(wrongAnswer / questionsList.length) * 100}%
  `;
  if (wrongAnswer !== 0) {
    answerProgressBarInnerWrongElement.innerHTML = `
      ${(wrongAnswer / questionsList.length) * 100}%
    `;
  }
}

function resetAnswerProgressBarInner() {
  answerProgressBarInnerCorrectElement.innerHTML = '';
  answerProgressBarInnerWrongElement.innerHTML = '';
}

function updateAnswerProgress() {
  if (correctAnswer === 0 && wrongAnswer === 0) {
    questionAnswerProgressElement.style.display = 'none';
  } else {
    questionAnswerProgressElement.style.display = 'flex';
  }
  updateAnswerProgressCorrect();
  updateAnswerProgressWrong();
}

function setNextQuestion() {
  const questionObject = shuffledQuestions[currentQuestionIndex];
  resetState();
  updateQuestionProgress();
  updateAnswerProgress();
  renderQuestion(questionObject);
}

function renderQuestion(questionObject) {
  questionTitleElement.innerHTML = `
    <hr />
      ${questionObject.question}
    <hr />
  `;

  questionObject.answers.forEach((answer) => {
    const answerBtnElement = document.createElement('button');
    answerBtnElement.innerText = answer.text;
    answerBtnElement.classList.add('btn', 'btn-question');

    if (shuffledQuestions[currentQuestionIndex].answers.length % 2 === 0) {
      answerBtnElement.style.width = 'calc(100% / 2 - 2rem)';
    } else {
      answerBtnElement.style.width = '100%';
    }

    if (answer.correct) {
      answerBtnElement.dataset.correct = answer.correct;
    }

    questionAnswerElement.appendChild(answerBtnElement);
    answerBtnElement.addEventListener('click', selectAnswer);
  });
}

function selectAnswer(event) {
  const selectedAnswer = event.target;
  const correctDataAttribute = selectedAnswer.dataset.correct;
  handleCorrectAnswer(correctDataAttribute);
  handleQuestionsList(correctDataAttribute);
}

function handleCorrectAnswer(correct) {
  if (correct === 'true') {
    correctAnswer++;
    score += POINT_PLUS;
  } else {
    wrongAnswer++;
    score -= POINT_MINUS;
  }

  setStatusClass(document.body, correct);
  Array.from(questionAnswerElement.children).forEach((answer) => {
    setStatusClass(answer, answer.dataset.correct);
    answer.disabled = true;
    answer.style.cursor = 'auto';
  });
}

function handleQuestionsList() {
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    removeHide(nextBtnElement);
    appControlsElement.style.margin = '0';
  } else {
    percentAccuracy =
      Math.round(((correctAnswer / shuffledQuestions.length) * 100 + Number.EPSILON) * 100) / 100;

    resetAnswerProgressBarInner();
    saveTimePlayer();
    updateTimer();
    renderResult();
  }
}

export { setNextQuestion };
