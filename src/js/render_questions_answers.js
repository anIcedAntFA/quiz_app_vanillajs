import questionsList from './data.js';
import { removeHide, setStatusClass, resetState } from './common_function.js';
import { updateTimer, saveTimePlayer } from './handle_timer.js';
import renderResult from './render_result.js';

const questionProgressTextElement = document.createElement('p');
questionProgressTextElement.classList.add('progress__text');

const questionProgressBarElement = document.createElement('div');
questionProgressBarElement.classList.add('progress__bar');

const questionProgressBarFullElement = document.createElement('div');
questionProgressBarFullElement.classList.add('progress__bar-full');

questionProgressBarElement.appendChild(questionProgressBarFullElement);
questionStateElement.appendChild(questionProgressTextElement);
questionStateElement.appendChild(questionProgressBarElement);

function updateQuestionProgress() {
  questionProgressTextElement.innerHTML = `
    Question ${currentQuestionIndex + 1} of ${questionsList.length}
  `;

  questionProgressBarFullElement.style.width = `
    ${(currentQuestionIndex / questionsList.length) * 100}%
  `;
}

function setNextQuestion() {
  const questionObject = shuffledQuestions[currentQuestionIndex];
  resetState();
  updateQuestionProgress();
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
    saveTimePlayer();
    updateTimer();
    renderResult();
  }
}

export { setNextQuestion };
