const $ = document.querySelector.bind(document);

//* HEADER
const darkThemeToggle = document.querySelector('[data-dark-theme-toggle]');
const darkThemeLabel = document.querySelector('[data-dark-theme-label]');

//* HOME
const appHomeElement = $('[data-app-home]');
const formElement = $('[data-form-group]');
const inputElement = $('[data-form-control]');
const errorMessageElement = $('[data-form-message]');

//* INFO
const appInfoElement = $('[data-app-info]');
const infoListElement = $('[data-info-list]');

//* QUESTIONS
const questionWrapperElement = $('[data-question-wrapper]');
const questionStateElement = $('[data-question-state]');
const appTimerElement = $('[data-app-timer]');
const questionTitleElement = $('[data-question-title]');
const questionAnswerElement = $('[data-question-answers]');

//* RESULT
const appResultElement = $('[data-app-result]');
const resultDescriptionElement = $('[data-result-description]');
const resultTableElement = $('[data-result-table]');

//* LEADERBOARD
const appLeaderboardElement = $('[data-app-leaderboard]');
const leaderboardTableElement = $('[data-leaderboard-table]');
const leaderboardDescriptionElement = $('[data-leaderboard-description]');

//* CONTROLS
const appControlsElement = $('[data-app-controls]');
const continueBtnElement = $('[data-btn-continue]');
const startBtnElement = $('[data-btn-start]');
const nextBtnElement = $('[data-btn-next]');
const restartBtnElement = $('[data-btn-restart]');
const highScoresBtnElement = $('[data-btn-high-scores]');
const exitBtnElement = $('[data-btn-exit]');

//* CONSTANTS
const TIME_MINUTE = 1;
const TIME_SECOND = 30;
const POINT_PLUS = 5;
const POINT_MINUS = 3;

let shuffledQuestions;
let currentQuestionIndex;
let correctAnswer;
let wrongAnswer;
let score;

let timer = 90;
let min;
let sec;
let timerId;

let minPlayer;
let secPlayer;
