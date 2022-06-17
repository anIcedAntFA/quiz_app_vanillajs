function Validator(options) {
  //* Storage selector rules
  const selectorRules = {};

  //* Function implement validate input element
  const validate = (inputElement, rule) => {
    const elementParent = inputElement.closest(options.formGroupSelector);
    const errorElement = elementParent.querySelector(options.errorSelector);
    let errorMessage;

    //* Storage all rule of each selector
    // eg: email selector => [check1, check2]
    const rules = selectorRules[rule.selector];
    //* Loop through rule & check
    for (let index = 0; index < rules.length; ++index) {
      switch (inputElement.type) {
        case 'radio':
        case 'checkbox':
          errorMessage = rules[index](formElement.querySelector(rule.selector + ':checked'));
          break;
        default:
          //* 1st error message is found
          errorMessage = rules[index](inputElement.value);
      }
      //* If get error then break out of loop
      if (errorMessage) break;
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      elementParent.classList.add('invalid');
    } else {
      errorElement.innerText = '';
      elementParent.classList.remove('invalid');
    }
    return !!errorMessage;
  };

  //* Get element of form need validating
  const formElement = document.querySelector(options.form);
  if (formElement) {
    //* Prevent default event when clicking submit form
    formElement.onsubmit = (event) => {
      event.preventDefault();

      let isValidForm = true;
      //* Loop through each rule and validate()
      options.rules.forEach((rule) => {
        const inputElement = formElement.querySelector(rule.selector);
        const isInvalid = validate(inputElement, rule);

        if (isInvalid) isValidForm = false;
      });

      if (isValidForm) {
        //* Submit form with javascript
        if (typeof options.onSubmit === 'function') {
          const enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
          //! enableInputs is NoteList => transform into Array
          //* Lặp qua, tạo object với key: input.name, value: input.value
          const formValues = Array.from(enableInputs).reduce((values, input) => {
            switch (input.type) {
              case 'radio':
                values[input.name] = formElement.querySelector(
                  'input[name="' + input.name + '"]:checked',
                ).value;
                break;
              case 'checkbox':
                if (input.matches(':checked')) {
                  if (!Array.isArray(values[input.name])) {
                    values[input.name] = [];
                  }
                  values[input.name].push(input.value);
                }
                if (!input.matches(':checked') && !values[input.name]) {
                  values[input.name] = '';
                }
                break;
              case 'file':
                values[input.name] = input.files;
                break;
              default:
                //! Guaranteed when input is null (no input required), still return values but not null
                values[input.name] = input.value;
            }
            return values;
          }, {});
          options.onSubmit(formValues);
          //* Submit form with default event
        } else {
          formElement.submit();
        }
      }
    };

    //* Loop through each rule & handle events
    options.rules.forEach((rule) => {
      //* Storage rules for each input
      // Eg: 2nd time, isEmail(email) => [check1, check2]
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.check);
      } else {
        //* If not array, bind it to 1 array with 1st element is 1st rule
        // Eg: 1st time, isRequired(email) => [check1]
        selectorRules[rule.selector] = [rule.check];
      }

      const inputElements = formElement.querySelectorAll(rule.selector);
      //! inputElements is NoteList => transform into Array
      Array.from(inputElements).forEach((inputElement) => {
        //* Handle event that users blur outside the input
        inputElement.onblur = () => {
          // value: inputElement.value
          // check function: rule.check
          validate(inputElement, rule);
        };

        //* Handle event that users typing input
        inputElement.oninput = () => {
          const elementParent = inputElement.closest(options.formGroupSelector);
          const errorElement = elementParent.querySelector(options.errorSelector);
          errorElement.innerText = '';
          elementParent.classList.remove('invalid');
        };

        //* Handle event that users change options (<select></select>)
        inputElement.onchange = () => {
          if (inputElement.value === '') {
            validate(inputElement, rule);
          } else {
            const elementParent = inputElement.closest(options.formGroupSelector);
            const errorElement = elementParent.querySelector(options.errorSelector);
            errorElement.innerText = '';
            elementParent.classList.remove('invalid');
          }
        };
      });
    });
  }
}

//*----Define Rules-----*//
// principles:
// 1. Failure => return error message
// 2. Success => return undefined

//* Get value from inputElement, insert to function under
function isRequired(selector, message) {
  return {
    selector,
    check: function (value) {
      // value from inputElement
      return value ? undefined : message || 'Please fill out this field!';
    },
  };
}

function isEmail(selector, message) {
  return {
    selector,
    check: function (value) {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : message || 'This field must be a email!';
    },
  };
}

function isStrength(selector, minLength) {
  return {
    selector,
    check: function (value) {
      const ALPHABET_LOWER_CASE = /[a-z]/; // letter from a to z
      const ALPHABET_UPPER_CASE = /[A-Z]/; // letter from A to Z
      const NUMBERS = /[0-9]/; // numbers from 0 to 9
      const SPECIAL_CHARACTERS = /[!,@,#,$,%,^,&,*,?,_,(,),-,+,=,~]/;

      return value.length >= minLength &&
        value.match(ALPHABET_LOWER_CASE) &&
        value.match(ALPHABET_UPPER_CASE) &&
        value.match(NUMBERS) &&
        value.match(SPECIAL_CHARACTERS)
        ? undefined
        : `Please fill out at least ${minLength} words, 1 lower case letter, 1 upper case letter, 1 number, and 1 special character.`;
    },
  };
}

function isConfirmed(selector, getConfirmedValue, message) {
  return {
    selector,
    check: function (value) {
      return value === getConfirmedValue() ? undefined : message || 'Input value is not correct!';
    },
  };
}

export default Validator;
