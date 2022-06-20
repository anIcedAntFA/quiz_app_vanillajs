const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//* HEADER
const appHeaderElement = $('[data-app-header]');
const appInformationToggle = $('[data-app-information-toggle]');
const appLanguageToggle = $('[data-app-language-toggle]');
const darkThemeToggle = $('[data-app-dark-theme-toggle]');
const darkThemeLabel = $('[data-app-dark-theme-label]');

//* HOME
const appHomeElement = $('[data-app-home]');

//* SETTINGS
const appSettingElement = $('[data-app-settings]');
const inputAmountElement = $('[data-form-control-amount]');
const inputDifficultyElement = $('[data-form-control-difficulty]');
const inputTypeElement = $('[data-form-control-type]');
const inputCategoryElements = $$('[data-form-control-category]');

//* INFO
const appRuleElement = $('[data-app-rules]');
const ruleListElement = $('[data-rules-list]');

//* QUESTIONS
const questionWrapperElement = $('[data-question-wrapper]');
const questionProgressElement = $('[data-question-progress]');
const questionAnswerProgressElement = $('[data-question-answers-progress]');
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
const settingBtnElement = $('[data-btn-settings]');
const submitBtnElement = $('[data-btn-submit]');
const continueBtnElement = $('[data-btn-continue]');
const startBtnElement = $('[data-btn-start]');
const nextBtnElement = $('[data-btn-next]');
const restartBtnElement = $('[data-btn-restart]');
const saveBtnElement = $('[data-btn-save');
const highScoresBtnElement = $('[data-btn-high-scores]');
const backBtnElement = $('[data-btn-back');
const exitBtnElement = $('[data-btn-exit]');

// * TOASTS
const toastWrapperElement = $('[data-toast]');

//* MODALS
const modalWrapperElement = $('[data-modal]');

//* CONSTANTS
const TIME_MINUTE = 1;
const TIME_SECOND = 30;
const POINT_PLUS = 5;
const POINT_MINUS = 3;
const IS_VALID = true;
const NUMBERS = /^-?[0-9]\d*(\.\d+)?$/; // only numbers from 0 to 9 including negative numbers

//* HOME
let playerName;
let isSavedPlayerName = false;
//* SETTINGS
let questionAmount;
let questionDifficulty;
let questionType;
let questionCategory;
let isSavedPlayerSettings = false;
//* RULES
let isSavedPlayerRules = false;
let isRuleAccepted = false;

let shuffledQuestions;
let currentQuestionIndex;
let correctAnswer;
let wrongAnswer;
let percentAccuracy;
let score;
let count;

//* TIMER
let timer = 90;
let min;
let sec;
let timerId;

let minPlayer;
let secPlayer;
let timeTotalPlayer;
let isApproved;
let isSavedPlayerResult;
let playerLeft;

let warningDuplicateNameTimerId;
let warningDefaultSettingsTimerId;
let highScoresBtnElementTimerId;

//* APIs
let formattedQuestions;
const questionsOutput = [];
const urlQuestionsList = 'https://api.npoint.io/ae231eaa6937096d0d3e';

let saveNumber = 0;
