import { showWarningToastInput, showErrorToastInput } from './handle_toasts.js';

function checkIfEmpty(field, type = 'warning', message = `Please fill out this ${field.name}`) {
  if (isEmpty(field.value.trim())) {
    setInvalid(field, type, message);
    return IS_VALID;
  } else {
    setValid(field);
    return !IS_VALID;
  }
}

function checkIfNumber(
  field,
  type = 'warning',
  message = `This ${field.name} must contain numbers.`,
) {
  if (isNumber(field.value.trim())) {
    setValid(field);
    return IS_VALID;
  } else {
    setInvalid(field, type, message);
    return !IS_VALID;
  }
}

function checkIfMeetLength(field, type = 'warning', minLength, maxLength) {
  if (field.value.length >= minLength && field.value.length <= maxLength) {
    setValid(field);
    return IS_VALID;
  } else if (field.value.length < minLength) {
    setInvalid(field, type, `This ${field.name} must be at least ${minLength} characters long.`);
    return !IS_VALID;
  } else {
    setInvalid(field, type, `This ${field.name} must be shorter than ${maxLength} characters`);
    return !IS_VALID;
  }
}

function setInvalid(field, type, message) {
  field.classList.add('invalid');
  if (type === 'error') showErrorToastInput(message);
  else showWarningToastInput(message);
}

function setValid(field) {
  field.classList.remove('invalid');
}

const isEmpty = (value) => value === '';
const isNumber = (value) => value.match(NUMBERS);

function validateNickname(type) {
  if (inputNicknameElement !== null) {
    if (checkIfEmpty(inputNicknameElement, type, 'Please fill out your nickname first 🐸.')) return;
    if (!checkIfMeetLength(inputNicknameElement, type, 3, 12)) return;
    return IS_VALID;
  }
}

function validateQuestions(type) {
  if (
    checkIfEmpty(
      inputQuestionsElement,
      type,
      'Please enter a number of questions that you want to answer.',
    )
  )
    return;
  if (!checkIfNumber(inputQuestionsElement, type, 'This field must contain numbers.')) return;
  if (!checkIfMeetLength(inputQuestionsElement, type, 5, 20)) return;
  return IS_VALID;
}

function validateDifficulty(type) {
  if (
    checkIfEmpty(
      inputDifficultyElement,
      type,
      'Please choose difficulty of question that you want to answer.',
    )
  )
    return;
  return IS_VALID;
}

function validateType(type) {
  if (
    checkIfEmpty(
      inputDifficultyElement,
      type,
      'Please choose type of question that you want to answer.',
    )
  )
    return;
  return IS_VALID;
}

export { isEmpty, setValid, validateNickname, validateQuestions, validateDifficulty, validateType };
