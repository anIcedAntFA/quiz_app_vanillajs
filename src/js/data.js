const questionsList = [
  {
    question: 'What does CPU stand for?',
    category: 'Computer',
    type: 'Multiple',
    difficulty: 'Easy',
    answers: [
      { text: 'A. Central Processing Unit', correct: true },
      { text: 'B. Center Processing Unit', correct: false },
      { text: 'C. Central Proposal Unit', correct: false },
      { text: 'D. Central Processed Unit ', correct: false },
    ],
  },
  {
    question: 'An elephant is smaller than a hippo?',
    category: 'Animals',
    type: 'True / False',
    difficulty: 'Easy',
    answers: [
      { text: 'A. True', correct: false },
      { text: 'B. False', correct: true },
    ],
  },
  {
    question: 'Is web development fun?',
    category: 'General',
    type: 'Multiple',
    difficulty: 'Easy',
    answers: [
      { text: 'A. Um no', correct: false },
      { text: 'B. YES!!!', correct: true },
      { text: 'C. IDK', correct: false },
    ],
  },
  {
    question: 'How many legs has a snake got?',
    category: 'Animals',
    type: 'Multiple',
    difficulty: 'Easy',
    answers: [
      { text: 'A. 2', correct: false },
      { text: 'B. 4', correct: false },
      { text: 'C. Footless', correct: true },
      { text: 'D. Infinity', correct: false },
    ],
  },
  {
    question: 'Where could you go when you are feeling sick/had an accident?',
    category: 'General',
    type: 'Multiple',
    difficulty: 'Easy',
    answers: [
      { text: "A. Girlfriend's house", correct: false },
      { text: 'B. Swimming pool', correct: false },
      { text: 'C. Restaurant', correct: false },
      { text: 'E. Hospital', correct: true },
      { text: 'F. All are correct', correct: false },
      { text: 'G. All are wrong', correct: false },
    ],
  },
];

export default questionsList;
