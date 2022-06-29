import { getSettingsValue } from '../common_function.js';
//********************************************************

function handleLoadedQuestions(loadedQuestions) {
  //* Filter questions in turn by difficulty, type & category
  if (getSettingsValue().questionType !== 'random') {
    formattedQuestions = loadedQuestions.filter(
      (question) =>
        question.difficulty.toLowerCase() === getSettingsValue().questionDifficulty &&
        question.type.toLowerCase() === getSettingsValue().questionType &&
        getSettingsValue().questionCategory.includes(question.category.toLowerCase()),
    );
    //* if type is 'random' => no need filtering by type, filter by difficulty & category
  } else {
    formattedQuestions = loadedQuestions.filter(
      (question) =>
        question.difficulty.toLowerCase() === getSettingsValue().questionDifficulty &&
        getSettingsValue().questionCategory.includes(question.category.toLowerCase()),
    );
  }
  //* Continue filter by amount
  for (let i = 0; i < getSettingsValue().questionAmount; ++i) {
    do {
      questionIndex2 = Math.floor(Math.random() * formattedQuestions.length);
    } while (questionIndex1.includes(questionIndex2));
    questionIndex1.push(questionIndex2);

    questionsOutput.push(formattedQuestions[questionIndex2]);
  }

  return questionsOutput;
}

async function handleApiQuestions() {
  try {
    const response = await fetch(urlQuestionsList);
    const loadedQuestions = await response.json();
    return loadedQuestions;
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

export { handleLoadedQuestions };
