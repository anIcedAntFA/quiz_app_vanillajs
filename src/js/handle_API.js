function getSettingsValue() {
  const questionAmountDefault = inputAmountElement.value;
  const questionDifficultyDefault = inputDifficultyElement.value;
  const questionTypeDefault = inputTypeElement.value;
  const questionCategoryDefault = Array.from(inputCategoryElements)
    .filter((input) => input.matches(':checked'))
    .map((input) => input.value);

  const questionSettingsValue = {
    questionAmount: questionAmount ?? questionAmountDefault,
    questionDifficulty: questionDifficulty ?? questionDifficultyDefault,
    questionType: questionType ?? questionTypeDefault,
    questionCategory: questionCategory ?? questionCategoryDefault,
  };

  return questionSettingsValue;
}

function handleLoadedQuestions(loadedQuestions) {
  //* Filter questions in turn by difficulty & type
  if (getSettingsValue().questionType !== 'random') {
    formattedQuestions = loadedQuestions.filter(
      (question) =>
        question.difficulty.toLowerCase() === getSettingsValue().questionDifficulty &&
        question.type.toLowerCase() === getSettingsValue().questionType &&
        getSettingsValue().questionCategory.includes(question.category.toLowerCase()),
    );
    //* if type is 'random' => no need filtering by type (get all)
  } else {
    formattedQuestions = loadedQuestions.filter(
      (question) =>
        question.difficulty.toLowerCase() === getSettingsValue().questionDifficulty &&
        getSettingsValue().questionCategory.includes(question.category.toLowerCase()),
    );
  }
  console.log(formattedQuestions);

  //* Create final question list, ready to render
  for (let i = 0; i < getSettingsValue().questionAmount; ++i) {
    questionsOutput.push(formattedQuestions[Math.floor(Math.random() * formattedQuestions.length)]);
  }
  console.log(questionsOutput);
  return questionsOutput;
}

async function handleApiQuestions() {
  try {
    const response = await fetch(urlQuestionsList);
    const loadedQuestions = await response.json();
    handleLoadedQuestions(loadedQuestions);
  } catch (error) {
    console.log(error);
  }
}

// function handleApiQuestions() {
//   fetch(urlQuestionsList, {})
//     .then((response) => response.json())
//     .then(handleLoadedQuestions)
//     .catch((error) => console.log(error));
// }

export default handleApiQuestions;
