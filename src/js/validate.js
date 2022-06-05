function validateInput() {
  if (checkIfEmpty(inputElement)) return;
  if (!checkIfRequireLength(inputElement)) return;
  return true;
}

function checkIfEmpty(field) {
  if (isEmpty(field.value.trim())) {
    setInvalid('Keep calm Bros! Just fill out this field first 🐸');
    return true;
  } else {
    setValid();
    return false;
  }
}

const isEmpty = (value) => value === '';

function checkIfRequireLength(field) {
  if (isMinLength(field.value.trim()) && isMaxLength(field.value.trim())) {
    setValid();
    return true;
  } else {
    setInvalid(
      'Please enter a player name that is at least 3 characters long, and up to 10 characters 🤡',
    );
    return false;
  }
}

const isMinLength = (value) => value.length >= 3;
const isMaxLength = (value) => value.length <= 10;

function setInvalid(message) {
  formElement.classList.add('invalid');
  errorMessageElement.innerText = message;
}

function setValid() {
  formElement.classList.remove('invalid');
  errorMessageElement.innerText = '';
}

export { validateInput, setValid };
