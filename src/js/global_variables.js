const getElement = document.querySelector.bind(document);
const getElements = document.querySelectorAll.bind(document);

//* HEADER
const appHeaderElement = getElement('[data-app-header]');
const appInformationToggle = getElement('[data-app-information-toggle]');
const appLanguageToggle = getElement('[data-app-language-toggle]');
const darkThemeToggle = getElement('[data-app-dark-theme-toggle]');
const darkThemeLabel = getElement('[data-app-dark-theme-label]');

//* HOME
const appHomeElement = getElement('[data-app-home]');

//* SETTINGS
const appSettingElement = getElement('[data-app-settings]');
const inputAmountElement = getElement('[data-form-control-amount]');
const inputDifficultyElement = getElement('[data-form-control-difficulty]');
const inputTypeElement = getElement('[data-form-control-type]');
const inputCategoryElements = getElements('[data-form-control-category]');

//* INFO
const appRuleElement = getElement('[data-app-rules]');
const ruleListElement = getElement('[data-rules-list]');

//* QUESTIONS
const appQuestionElement = getElement('[data-app-questions]');
const questionProgressElement = getElement('[data-question-progress]');
const questionAnswerProgressElement = getElement('[data-question-answers-progress]');
const questionTimerElement = getElement('[data-question-timer]');
const questionTitleElement = getElement('[data-question-title]');
const questionAnswerElement = getElement('[data-question-answers]');

//* RESULT
const appResultElement = getElement('[data-app-result]');
const resultDescriptionElement = getElement('[data-result-description]');
const resultTableElement = getElement('[data-result-table]');

//* LEADERBOARD
const appLeaderboardElement = getElement('[data-app-leaderboard]');
const leaderboardTableElement = getElement('[data-leaderboard-table]');
const leaderboardDescriptionElement = getElement('[data-leaderboard-description]');

//* CONTROLS
const appControlsElement = getElement('[data-app-controls]');
const settingBtnElement = getElement('[data-btn-settings]');
const submitBtnElement = getElement('[data-btn-submit]');
const continueBtnElement = getElement('[data-btn-continue]');
const startBtnElement = getElement('[data-btn-start]');
const nextBtnElement = getElement('[data-btn-next]');
const restartBtnElement = getElement('[data-btn-restart]');
const saveBtnElement = getElement('[data-btn-save');
const highScoresBtnElement = getElement('[data-btn-high-scores]');
const backBtnElement = getElement('[data-btn-back');
const exitBtnElement = getElement('[data-btn-exit]');

// * TOASTS
const toastWrapperElement = getElement('[data-toast]');

//* MODALS
const modalWrapperElement = getElement('[data-modal]');

//* CONSTANTS
const TIME_PER_QUESTION = 10;
const POINT_PLUS = 5;
const POINT_MINUS = 2;
const ONE_TIME = 1;

//* HOME
let isSavedPlayerName = false;
let saveNumber = 0;

//* SETTINGS
let questionAmount;
let questionDifficulty;
let questionType;
let questionCategory;
let isSavedPlayerSettings = false;

//* RULES
let isSavedPlayerRules = false;
let isRuleAccepted = false;

//* QUESTIONS
let shuffledQuestions;
let currentQuestionIndex;
let correctAnswer;
let wrongAnswer;
let count;

//* TIMER
let timer;
let timeMinutes;
let timeSeconds;
let minutes;
let seconds;
let timerId;

//* PLAYER
let playerName;
let playerScore;
let playerTimeMin;
let playerTimeSec;
let playerTimeTotal;
let percentAccuracy;
let isSavedPlayerResult;
let isApproved;
let playerLeft;

//* SET TIMEOUT
let warningDuplicateNameTimerId;
let warningDefaultSettingsTimerId;
let highScoresBtnElementTimerId;

//* APIs
let formattedQuestions;
let questionsOutput = [];
let questionIndex1 = [];
let questionIndex2;
const urlQuestionsList = 'https://api.npoint.io/ae231eaa6937096d0d3e';
