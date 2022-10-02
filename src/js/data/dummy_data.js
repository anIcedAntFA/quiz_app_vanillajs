const data = [
  {
    question: 'What does CPU stand for?',
    category: 'Computer',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Central Processing Unit',
        correct: true,
      },
      {
        text: 'B. Center Processing Unit',
        correct: false,
      },
      {
        text: 'C. Central Proposal Unit',
        correct: false,
      },
      {
        text: 'D. Central Processed Unit ',
        correct: false,
      },
    ],
  },
  {
    question: 'An elephant is smaller than a hippo?',
    category: 'Animals',
    type: 'True / False',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. True',
        correct: false,
      },
      {
        text: 'B. False',
        correct: true,
      },
    ],
  },
  {
    question: 'Is web development fun?',
    category: 'General',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Um no',
        correct: false,
      },
      {
        text: 'B. YES!!!',
        correct: true,
      },
      {
        text: 'C. IDK',
        correct: false,
      },
    ],
  },
  {
    question: 'How many legs has a snake got?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. 2',
        correct: false,
      },
      {
        text: 'B. 4',
        correct: false,
      },
      {
        text: 'C. Footless',
        correct: true,
      },
      {
        text: 'D. Infinity',
        correct: false,
      },
    ],
  },
  {
    question: 'Where could you go when you are feeling sick/had an accident?',
    category: 'General',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: "A. Girlfriend's house",
        correct: false,
      },
      {
        text: 'B. Swimming pool',
        correct: false,
      },
      {
        text: 'C. Restaurant',
        correct: false,
      },
      {
        text: 'E. Hospital',
        correct: true,
      },
      {
        text: 'F. All are correct',
        correct: false,
      },
      {
        text: 'G. All are wrong',
        correct: false,
      },
    ],
  },
  {
    question: 'What is the capital of Japan?',
    category: 'Geography',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Tokyo',
        correct: true,
      },
      {
        text: 'B. Kyoto',
        correct: false,
      },
      {
        text: 'C. Osaka',
        correct: false,
      },
      {
        text: 'D. Hiroshima',
        correct: false,
      },
    ],
  },
  {
    question: 'What is the capital of Italy?',
    category: 'Geography',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Venice',
        correct: false,
      },
      {
        text: 'B. Rome',
        correct: true,
      },
      {
        text: 'C. Florence',
        correct: false,
      },
      {
        text: 'D. Milan',
        correct: false,
      },
    ],
  },
  {
    question: 'What is the capital of China?',
    category: 'Geography',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Shanghai',
        correct: false,
      },
      {
        text: 'B. Beijing',
        correct: true,
      },
      {
        text: 'C. Chongqing',
        correct: false,
      },
      {
        text: 'D. Wuhan',
        correct: false,
      },
    ],
  },
  {
    question: 'What is the capital of India?',
    category: 'Geography',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. New Delhi',
        correct: true,
      },
      {
        text: 'B. Mumbai',
        correct: false,
      },
      {
        text: 'C. Jaipur',
        correct: false,
      },
      {
        text: 'D. Kolkata',
        correct: false,
      },
    ],
  },
  {
    question: 'What is the capital of Australia?',
    category: 'Geography',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Sydney',
        correct: false,
      },
      {
        text: 'B. Canberra',
        correct: true,
      },
      {
        text: 'C. Melbourne',
        correct: false,
      },
      {
        text: 'D. Perth',
        correct: false,
      },
    ],
  },
  {
    question: 'What kind of animal is a dog?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Birds',
        correct: false,
      },
      {
        text: 'B. Mammal',
        correct: true,
      },
      {
        text: 'C. Amphibians',
        correct: false,
      },
      {
        text: 'D. Reptiles ',
        correct: false,
      },
    ],
  },
  {
    question: 'What kind of animal is a snake?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Birds',
        correct: false,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Invertebrates',
        correct: false,
      },
      {
        text: 'D. Reptiles',
        correct: true,
      },
    ],
  },
  {
    question: 'What kind of animal is a frog?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Birds',
        correct: false,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Amphibians',
        correct: true,
      },
      {
        text: 'D. Reptiles',
        correct: false,
      },
    ],
  },
  {
    question: 'What kind of animal is a snails?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Birds',
        correct: false,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Amphibians',
        correct: false,
      },
      {
        text: 'D. Invertebrates',
        correct: true,
      },
    ],
  },
  {
    question: 'What kind of animal is a ladybug?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Birds',
        correct: false,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Amphibians',
        correct: false,
      },
      {
        text: 'D. Invertebrates',
        correct: true,
      },
    ],
  },
  {
    question: 'What kind of animal is a sponges?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Birds',
        correct: false,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Amphibians',
        correct: false,
      },
      {
        text: 'D. Invertebrates',
        correct: true,
      },
    ],
  },
  {
    question: 'What kind of animal is a leeches?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Birds',
        correct: false,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Amphibians',
        correct: false,
      },
      {
        text: 'D. Invertebrates',
        correct: true,
      },
    ],
  },
  {
    question: 'What kind of animal is a lizards?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Birds',
        correct: false,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Invertebrates',
        correct: false,
      },
      {
        text: 'D. Reptiles',
        correct: true,
      },
    ],
  },
  {
    question: 'What kind of animal is a geckos?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Birds',
        correct: false,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Invertebrates',
        correct: false,
      },
      {
        text: 'D. Reptiles',
        correct: true,
      },
    ],
  },
  {
    question: 'What kind of animal is a tortoises?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Birds',
        correct: false,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Invertebrates',
        correct: false,
      },
      {
        text: 'D. Reptiles',
        correct: true,
      },
    ],
  },
  {
    question: 'What kind of animal is a rhinoceroses?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Birds',
        correct: false,
      },
      {
        text: 'B. Mammal',
        correct: true,
      },
      {
        text: 'C. Amphibians',
        correct: false,
      },
      {
        text: 'D. Reptiles ',
        correct: false,
      },
    ],
  },
  {
    question: 'What kind of animal is a eels?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Birds',
        correct: false,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Amphibians',
        correct: false,
      },
      {
        text: 'D. Fish ',
        correct: true,
      },
    ],
  },
  {
    question: 'What kind of animal is a eels?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Birds',
        correct: false,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Amphibians',
        correct: false,
      },
      {
        text: 'D. Fish ',
        correct: true,
      },
    ],
  },
  {
    question: 'What kind of animal is a lampreys?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Birds',
        correct: false,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Amphibians',
        correct: false,
      },
      {
        text: 'D. Fish ',
        correct: true,
      },
    ],
  },
  {
    question: 'What kind of animal is a salmon?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Birds',
        correct: false,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Amphibians',
        correct: false,
      },
      {
        text: 'D. Fish ',
        correct: true,
      },
    ],
  },
  {
    question: 'What kind of animal is a falcons?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Birds',
        correct: true,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Amphibians',
        correct: false,
      },
      {
        text: 'D. Fish ',
        correct: false,
      },
    ],
  },
  {
    question: 'What kind of animal is a flamingoes?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Birds',
        correct: true,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Amphibians',
        correct: false,
      },
      {
        text: 'D. Fish ',
        correct: false,
      },
    ],
  },
  {
    question: 'What kind of animal is a ostriches?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Birds',
        correct: true,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Amphibians',
        correct: false,
      },
      {
        text: 'D. Fish ',
        correct: false,
      },
    ],
  },
  {
    question: 'What kind of animal is a parrots?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Birds',
        correct: true,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Amphibians',
        correct: false,
      },
      {
        text: 'D. Fish ',
        correct: false,
      },
    ],
  },
  {
    question: 'What kind of animal is a penguins?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Birds',
        correct: true,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Amphibians',
        correct: false,
      },
      {
        text: 'D. Fish ',
        correct: false,
      },
    ],
  },
  {
    question: 'What kind of animal is a pigeons?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Birds',
        correct: true,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Amphibians',
        correct: false,
      },
      {
        text: 'D. Fish ',
        correct: false,
      },
    ],
  },
  {
    question: 'What kind of animal is a newts?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Birds',
        correct: false,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Amphibians',
        correct: true,
      },
      {
        text: 'D. Reptiles',
        correct: false,
      },
    ],
  },
  {
    question: 'What kind of animal is a salamanders?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Birds',
        correct: false,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Amphibians',
        correct: true,
      },
      {
        text: 'D. Reptiles',
        correct: false,
      },
    ],
  },
  {
    question: 'What kind of animal is a toads?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Birds',
        correct: false,
      },
      {
        text: 'B. Mammal',
        correct: false,
      },
      {
        text: 'C. Amphibians',
        correct: true,
      },
      {
        text: 'D. Reptiles',
        correct: false,
      },
    ],
  },
  {
    question: "What is Earth's largest continent?",
    category: 'Geography',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Europe',
        correct: false,
      },
      {
        text: 'B. Asia',
        correct: true,
      },
      {
        text: 'C. North America',
        correct: false,
      },
      {
        text: 'D. Australia',
        correct: false,
      },
      {
        text: 'E. Antarctica',
        correct: false,
      },
    ],
  },
  {
    question: "What's the smallest country in the world?",
    category: 'Geography',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. Monaco',
        correct: false,
      },
      {
        text: 'B. Vatican City',
        correct: true,
      },
      {
        text: 'C. Singapore',
        correct: false,
      },
    ],
  },
  {
    question: 'India touches the Indian Ocean, the Arabian Sea, and the Bay of Bengal?',
    category: 'Geography',
    type: 'True / False',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. False',
        correct: false,
      },
      {
        text: 'B. True',
        correct: true,
      },
    ],
  },
  {
    question:
      'The ancient Phoenician city of Constantine is located in what modern-day Arab country?',
    category: 'Geography',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. Libya',
        correct: false,
      },
      {
        text: 'B. Morocco',
        correct: false,
      },
      {
        text: 'C. Algeria',
        correct: true,
      },
      {
        text: 'D. Egypt',
        correct: false,
      },
    ],
  },
  {
    question: 'Which country borders 14 nations and crosses 8 time zones?',
    category: 'Geography',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. China',
        correct: false,
      },
      {
        text: 'B. Russia',
        correct: true,
      },
      {
        text: 'C. New York',
        correct: false,
      },
      {
        text: 'C. Canada',
        correct: false,
      },
    ],
  },
  {
    question: 'What country has the most natural lakes?',
    category: 'Geography',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. China',
        correct: false,
      },
      {
        text: 'B. Russia',
        correct: false,
      },
      {
        text: 'C. New York',
        correct: false,
      },
      {
        text: 'C. Canada',
        correct: true,
      },
    ],
  },
  {
    question:
      'El Salvador is a Central American country that has a name which translates to English as “The Saviour”?',
    category: 'Geography',
    type: 'True / False',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. True',
        correct: true,
      },
      {
        text: 'B. False',
        correct: false,
      },
    ],
  },
  {
    question: 'What is the loudest animal on Earth?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Kakapo',
        correct: false,
      },
      {
        text: 'B. Bulldog Bat',
        correct: false,
      },
      {
        text: 'C. Tiger Pistol Shrimp',
        correct: false,
      },
      {
        text: 'D. Sperm Whale',
        correct: true,
      },
    ],
  },
  {
    question: 'How many hearts does an octopus have?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. 1',
        correct: false,
      },
      {
        text: 'B. 2',
        correct: false,
      },
      {
        text: 'C. 3',
        correct: true,
      },
      {
        text: 'D. 4',
        correct: false,
      },
      {
        text: 'E. 5',
        correct: false,
      },
      {
        text: 'F. 6',
        correct: false,
      },
    ],
  },
  {
    question: 'The unicorn is the national animal of which country?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. Ireland',
        correct: false,
      },
      {
        text: 'B. Scotland',
        correct: true,
      },
      {
        text: 'C. Sweden',
        correct: false,
      },
    ],
  },
  {
    question: 'A group of ravens is known as Unkindness',
    category: 'Animals',
    type: 'True /False',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. False',
        correct: false,
      },
      {
        text: 'B. True',
        correct: true,
      },
    ],
  },
  {
    question: 'How many legs does a spider have?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. 2',
        correct: false,
      },
      {
        text: 'B. 4',
        correct: false,
      },
      {
        text: 'C. 6',
        correct: false,
      },
      {
        text: 'D. 8',
        correct: true,
      },
      {
        text: 'E. 10',
        correct: false,
      },
    ],
  },
  {
    question: 'How long do elephant pregnancies last?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. 22 months',
        correct: true,
      },
      {
        text: 'B. 16 months',
        correct: false,
      },
      {
        text: 'C. 32 months',
        correct: false,
      },
      {
        text: 'D. 24 months',
        correct: false,
      },
    ],
  },
  {
    question: 'Spiny anteater and the duck-billed platypus are mammals that lay eggs?',
    category: 'Animals',
    type: 'True / False',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. True',
        correct: true,
      },
      {
        text: 'B. False',
        correct: false,
      },
    ],
  },
  {
    question: 'What type of animal is a Flemish giant?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. Elephant',
        correct: false,
      },
      {
        text: 'B. Rabbit',
        correct: true,
      },
      {
        text: 'C. Lion',
        correct: false,
      },
      {
        text: 'D. Whale',
        correct: false,
      },
    ],
  },
  {
    question: 'The name of which African animal means "river horse"?',
    category: 'Animals',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. Hippopotamus',
        correct: true,
      },
      {
        text: 'B. Water Buffalo',
        correct: false,
      },
      {
        text: 'C. Rhinoceros',
        correct: false,
      },
      {
        text: 'D. Porpoise',
        correct: false,
      },
    ],
  },
  {
    question: 'In what type of matter are atoms most tightly packed?',
    category: 'Science',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Liquid',
        correct: false,
      },
      {
        text: 'B. Solids',
        correct: true,
      },
      {
        text: 'C. Gas',
        correct: false,
      },
    ],
  },
  {
    question: 'What is the hottest planet in the solar system?',
    category: 'Science',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Venus',
        correct: true,
      },
      {
        text: 'B. Jupiter',
        correct: false,
      },
      {
        text: 'C. Mars',
        correct: false,
      },
      {
        text: 'D. Saturn',
        correct: false,
      },
    ],
  },
  {
    question: 'The opposite of matter is Antimatter?',
    category: 'Science',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. True',
        correct: true,
      },
      {
        text: 'B. False',
        correct: false,
      },
    ],
  },
  {
    question:
      'Which of Newton’s Laws states that ‘for every action, there is an equal and opposite reaction?',
    category: 'Science',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. The first law of motion',
        correct: false,
      },
      {
        text: 'B. The second law of motion',
        correct: false,
      },
      {
        text: 'C. The third law of motion',
        correct: true,
      },
    ],
  },
  {
    question: 'What is the nearest planet to the sun?',
    category: 'Science',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Venus',
        correct: false,
      },
      {
        text: 'B. Jupiter',
        correct: false,
      },
      {
        text: 'C. Mercury',
        correct: true,
      },
      {
        text: 'D. Saturn',
        correct: false,
      },
    ],
  },
  {
    question: "What color is your blood when it's inside your body?",
    category: 'Science',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Red, the blood contains hemoglobin',
        correct: true,
      },
      {
        text: 'B. Yellow, the blood contains hemoglobin',
        correct: false,
      },
      {
        text: 'C. Green, the blood contains hemoglobin',
        correct: false,
      },
      {
        text: 'D. Blue, the blood contains hemoglobin',
        correct: false,
      },
    ],
  },
  {
    question: 'How many teeth does an adult human have?',
    category: 'Science',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. 28',
        correct: false,
      },
      {
        text: 'B. 30',
        correct: false,
      },
      {
        text: 'C. 32',
        correct: true,
      },
      {
        text: 'D. 34',
        correct: false,
      },
    ],
  },
  {
    question: 'What tissues connect the muscles to the bones?',
    category: 'Science',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Spongy',
        correct: false,
      },
      {
        text: 'B. Tendons',
        correct: true,
      },
      {
        text: 'C. Muscles',
        correct: false,
      },
      {
        text: 'D. Nerves',
        correct: false,
      },
    ],
  },
  {
    question: 'Which country consumes the most chocolate per capita?',
    category: 'Food/Drinks',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. Sweden',
        correct: false,
      },
      {
        text: 'B. Switzerland',
        correct: true,
      },
      {
        text: 'C. China',
        correct: false,
      },
      {
        text: 'D. France',
        correct: false,
      },
    ],
  },
  {
    question: 'Pepsi was the first soft drink in space?',
    category: 'Food/Drinks',
    type: 'True / False',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. False',
        correct: false,
      },
      {
        text: 'B. True',
        correct: true,
      },
    ],
  },
  {
    question: 'Honey is the only edible food that never goes bad',
    category: 'Food/Drinks',
    type: 'True / False',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. False',
        correct: false,
      },
      {
        text: 'B. True',
        correct: true,
      },
    ],
  },
  {
    question: 'Which country invented ice cream?',
    category: 'Food/Drinks',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. Sweden',
        correct: false,
      },
      {
        text: 'B. Switzerland',
        correct: false,
      },
      {
        text: 'C. China',
        correct: true,
      },
      {
        text: 'D. France',
        correct: false,
      },
    ],
  },
  {
    question: 'From which country does Gouda cheese originate?',
    category: 'Food/Drinks',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. Sweden',
        correct: false,
      },
      {
        text: 'B. Switzerland',
        correct: false,
      },
      {
        text: 'C. Netherlands',
        correct: true,
      },
      {
        text: 'D. France',
        correct: false,
      },
    ],
  },
  {
    question: 'What are Semantic Elements?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. A semantic element tells nothing about its content to both the browser and the developer',
        correct: false,
      },
      {
        text: 'B. A semantic element clearly describes its meaning to both the browser and the developer',
        correct: true,
      },
      {
        text: 'C. All are wrong',
        correct: false,
      },
    ],
  },
  {
    question: 'What is the Root Element?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. That element which is the parent of all other elements on a page',
        correct: true,
      },
      {
        text: 'B. That element which is the children of all other elements on a page',
        correct: false,
      },
      {
        text: 'C. All are wrong',
        correct: false,
      },
    ],
  },
  {
    question: 'What is the purpose of the fieldset element?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. To group related elements in a form',
        correct: true,
      },
      {
        text: 'B. To group related elements in a table',
        correct: false,
      },
      {
        text: 'C. To group related elements in a summary',
        correct: false,
      },
      {
        text: 'D. To group related elements in a detail',
        correct: false,
      },
    ],
  },
  {
    question: 'What is the purpose of the legend element?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. To define a caption for the detail element',
        correct: false,
      },
      {
        text: 'B. To define a caption for the mark element',
        correct: false,
      },
      {
        text: 'C. To define a caption for the fieldset element',
        correct: true,
      },
      {
        text: 'D. To define a caption for the figcaption element',
        correct: false,
      },
    ],
  },
  {
    question: 'What is the purpose of the DOCTYPE command?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. DOCTYPE tells the browser how to compile the document',
        correct: false,
      },
      {
        text: 'B. DOCTYPE tells the browser how to interpret the document',
        correct: true,
      },
      {
        text: 'C. All are wrong',
        correct: false,
      },
    ],
  },
  {
    question: 'You should place the lang="en" attribute on the html tag',
    category: 'IT',
    type: 'True / False',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. False',
        correct: false,
      },
      {
        text: 'B. True',
        correct: true,
      },
    ],
  },
  {
    question: 'Explain the `position: relative` CSS property?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Normal flow; disables use of left/right/top/bottom/z-index',
        correct: false,
      },
      {
        text: 'B. Normal flow; enables use of left/right/top/bottom/z-index',
        correct: true,
      },
      {
        text: 'C. Normal flow; enables use of left/right/top/bottom',
        correct: false,
      },
      {
        text: 'All are wrong',
        correct: false,
      },
    ],
  },
  {
    question: 'Explain the `position: static` CSS property?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Default; follows the normal page flow',
        correct: true,
      },
      {
        text: 'B. Removed from flow; affected by scrolling',
        correct: false,
      },
      {
        text: 'C. Removed from flow and unaffected by scrolling',
        correct: false,
      },
      {
        text: 'D. To remove default spacing set by the browser',
        correct: false,
      },
    ],
  },
  {
    question: 'Explain the `position: absolute` CSS property?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Default; follows the normal page flow',
        correct: false,
      },
      {
        text: 'B. Removed from flow; affected by scrolling',
        correct: false,
      },
      {
        text: 'C. Normal flow; enables use of left/right/top/bottom',
        correct: false,
      },
      {
        text: 'D. Removed from flow and unaffected by scrolling',
        correct: true,
      },
    ],
  },
  {
    question: 'Explain the `position: fixed` CSS property?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Default; follows the normal page flow',
        correct: false,
      },
      {
        text: 'B. Removed from flow; affected by scrolling',
        correct: false,
      },
      {
        text: 'C. Removed from flow and unaffected by scrolling',
        correct: true,
      },
      {
        text: 'D. To remove default spacing set by the browser',
        correct: false,
      },
    ],
  },
  {
    question: 'Select the pseudo-class selector?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. div.foo:hover',
        correct: true,
      },
      {
        text: 'B. p::first-letter',
        correct: false,
      },
    ],
  },
  {
    question: 'Select the pseudo-element selector?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. span.foo:hover',
        correct: false,
      },
      {
        text: 'B. h2::first-child',
        correct: true,
      },
    ],
  },
  {
    question:
      '`pass by reference` means JS gives variables a `reference` to where objects are stored in the memory',
    category: 'IT',
    type: 'True / False',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. False',
        correct: false,
      },
      {
        text: 'B. True',
        correct: true,
      },
    ],
  },
  {
    question: 'Select the code which randomizes the order of elements in an array?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. array.Math(() => Math.random() - 0.5)',
        correct: false,
      },
      {
        text: 'B. array.sort(() => Math.random() - 0.5)',
        correct: true,
      },
      {
        text: 'C. array.Math.floor(() => Math.random() - 0.5))',
        correct: false,
      },
      {
        text: 'D. All are wrong',
        correct: false,
      },
    ],
  },
  {
    question: 'AJAX stands for Asynchronous JavaScript and XML',
    category: 'IT',
    type: 'True / False',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. True',
        correct: true,
      },
      {
        text: 'B. False',
        correct: false,
      },
    ],
  },
  {
    question: 'What language is Node.js written in?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. C',
        correct: false,
      },
      {
        text: 'B. C++',
        correct: true,
      },
      {
        text: 'C. Java',
        correct: false,
      },
      {
        text: 'D. Rust',
        correct: false,
      },
    ],
  },
  {
    question: 'Use `git checkout -b my-branch` to initialize a new branch in git',
    category: 'IT',
    type: 'True / False',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. True',
        correct: true,
      },
      {
        text: 'B. False',
        correct: false,
      },
    ],
  },
  {
    question: 'How would you connect a local repository to a remote repository?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. git remote commit -m "..."',
        correct: false,
      },
      {
        text: 'B. git remote push origin [url]',
        correct: false,
      },
      {
        text: 'C. git remote add origin [url]',
        correct: true,
      },
      {
        text: 'D. git remote push origin [url] main/master',
        correct: false,
      },
    ],
  },
  {
    question: 'What is JavaScript?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A.  JavaScript is a scripting language used to make the website interactive',
        correct: true,
      },
      {
        text: 'B. JavaScript is an assembly language used to make the website interactive',
        correct: false,
      },
      {
        text: 'C. JavaScript is a compiled language used to make the website interactive',
        correct: false,
      },
      {
        text: 'D. None of the mentioned',
        correct: false,
      },
    ],
  },
  {
    question: 'Among the given statements, which statement defines closures in JavaScript?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A.  JavaScript is a function that is enclosed with references to its inner function scope',
        correct: false,
      },
      {
        text: 'B. JavaScript is a function that is enclosed with references to its lexical environment',
        correct: true,
      },
      {
        text: 'C. JavaScript is a function that is enclosed with the object to its inner function scope',
        correct: false,
      },
      {
        text: 'D. None of the mentioned',
        correct: false,
      },
    ],
  },
  {
    question: 'Arrays in JavaScript are defined by which of the following statements?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A.  It is an ordered list of values',
        correct: true,
      },
      {
        text: 'B.  It is an ordered list of objects',
        correct: false,
      },
      {
        text: 'C. It is an ordered list of string',
        correct: false,
      },
      {
        text: 'D. It is an ordered list of functions',
        correct: false,
      },
    ],
  },
  {
    question: 'Which of the following is not javascript data types?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Null type',
        correct: false,
      },
      {
        text: 'B. Undefined type',
        correct: false,
      },
      {
        text: 'C. Number type',
        correct: false,
      },
      {
        text: 'D. All of the mentioned',
        correct: true,
      },
    ],
  },
  {
    question: 'Where is Client-side JavaScript code is embedded within HTML documents?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. A URL that uses the special javascript:code',
        correct: false,
      },
      {
        text: 'B. A URL that uses the special javascript:protocol',
        correct: true,
      },
      {
        text: 'C. A URL that uses the special javascript:encoding',
        correct: false,
      },
      {
        text: 'D. A URL that uses the special javascript:stack',
        correct: false,
      },
    ],
  },
  {
    question:
      'Which of the following object is the main entry point to all client-side JavaScript features and APIs?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Position',
        correct: false,
      },
      {
        text: 'B. Window',
        correct: true,
      },
      {
        text: 'C. Standard',
        correct: false,
      },
      {
        text: 'D. Location',
        correct: false,
      },
    ],
  },
  {
    question: 'Which of the following can be used to call a JavaScript Code Snippet?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Function/Method',
        correct: true,
      },
      {
        text: 'B. Preprocessor',
        correct: false,
      },
      {
        text: 'C. Triggering Event',
        correct: false,
      },
      {
        text: 'D. None of the mentioned',
        correct: false,
      },
    ],
  },
  {
    question: 'What is the basic difference between JavaScript and Java?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Functions are considered as fields',
        correct: false,
      },
      {
        text: 'B. Functions are values, and there is no hard distinction between methods and fields',
        correct: true,
      },
      {
        text: 'C. Variables are specific',
        correct: false,
      },
      {
        text: 'D. There is no difference',
        correct: false,
      },
    ],
  },
  {
    question: 'Why JavaScript Engine is needed?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Both Compiling & Interpreting the JavaScript',
        correct: false,
      },
      {
        text: 'B. Parsing the javascript',
        correct: false,
      },
      {
        text: 'C. Interpreting the JavaScript',
        correct: true,
      },
      {
        text: 'D. Compiling the JavaScript',
        correct: false,
      },
    ],
  },
  {
    question:
      'What will be the result or type of error if p is not defined in the following JavaScript code snippet `console.log(p)`?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Value not found Error',
        correct: false,
      },
      {
        text: 'B. Reference Error',
        correct: true,
      },
      {
        text: 'C. Null',
        correct: false,
      },
      {
        text: 'D. Zero',
        correct: false,
      },
    ],
  },
  {
    question:
      'What is the prototype represents in the following JavaScript code snippet `function javascript() {};`?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. Not valid',
        correct: false,
      },
      {
        text: 'B. Prototype of a function',
        correct: false,
      },
      {
        text: 'C. Function javascript',
        correct: false,
      },
      {
        text: 'D. A custom constructor',
        correct: true,
      },
    ],
  },
  {
    question: 'What is React.js?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Open-source JavaScript back-end library',
        correct: false,
      },
      {
        text: 'B. JavaScript front-end library to create a database',
        correct: false,
      },
      {
        text: 'C. Free and open-source JavaScript front-end library',
        correct: true,
      },
      {
        text: 'D. None of the mentioned',
        correct: false,
      },
    ],
  },
  {
    question: 'Which of the following acts as the input of a class-based component?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Class',
        correct: false,
      },
      {
        text: 'B. Props',
        correct: true,
      },
      {
        text: 'C. Factory',
        correct: false,
      },
      {
        text: 'D. None of the mentioned',
        correct: false,
      },
    ],
  },
  {
    question: 'Which of the following acts as the input of a class-based component?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. C',
        correct: false,
      },
      {
        text: 'B. C++',
        correct: false,
      },
      {
        text: 'C. Javascript',
        correct: true,
      },
      {
        text: 'D. Java',
        correct: false,
      },
    ],
  },
  {
    question: 'How many elements can a valid react component return?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. React doesn’t return element',
        correct: false,
      },
      {
        text: 'B. 1 Element',
        correct: true,
      },
      {
        text: 'C. More than 1 element',
        correct: false,
      },
      {
        text: 'D. None of the mentioned',
        correct: false,
      },
    ],
  },
  {
    question: 'How many elements can a valid react component return?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. React doesn’t return element',
        correct: false,
      },
      {
        text: 'B. 1 Element',
        correct: true,
      },
      {
        text: 'C. More than 1 element',
        correct: false,
      },
      {
        text: 'D. None of the mentioned',
        correct: false,
      },
    ],
  },
  {
    question: 'Which of the following is method is not a part of ReactDOM?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. ReactDOM.hydrate()',
        correct: false,
      },
      {
        text: 'B. ReactDOM.destroy()',
        correct: true,
      },
      {
        text: 'C. ReactDOM.createPortal()',
        correct: false,
      },
      {
        text: 'D. All of the mentioned',
        correct: false,
      },
    ],
  },
  {
    question: 'Which of the following is correct about prop in react?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Can be changed inside another component',
        correct: false,
      },
      {
        text: 'B. Can be changed inside the component',
        correct: false,
      },
      {
        text: 'C. Cannot be changed in the component',
        correct: true,
      },
      {
        text: 'D. All of the mentioned',
        correct: false,
      },
    ],
  },
  {
    question: 'Props is used to pass data to a component from outside in React?',
    category: 'IT',
    type: 'True / False',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. False',
        correct: false,
      },
      {
        text: 'B. True',
        correct: true,
      },
    ],
  },
  {
    question: 'How to find the index of a particular string?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. position()',
        correct: false,
      },
      {
        text: 'B. index()',
        correct: false,
      },
      {
        text: 'C. indexOf()',
        correct: true,
      },
      {
        text: 'D. positionof()',
        correct: false,
      },
    ],
  },
  {
    question: 'How do you focus a particular part of the HTML page in JavaScript?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. hover()',
        correct: false,
      },
      {
        text: 'B. focus()',
        correct: true,
      },
      {
        text: 'C. on()',
        correct: false,
      },
      {
        text: 'D. focuson()',
        correct: false,
      },
    ],
  },
  {
    question: 'Which of the following is the child object of the JavaScript navigator?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. Navicat',
        correct: false,
      },
      {
        text: 'B. Plugins',
        correct: true,
      },
      {
        text: 'C. NetRight',
        correct: false,
      },
      {
        text: 'D. Plugs',
        correct: false,
      },
    ],
  },
  {
    question: 'Which function is used to clear the timer value?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. clearTimervalue()',
        correct: false,
      },
      {
        text: 'B. clearTimeout()',
        correct: true,
      },
      {
        text: 'C. clear()',
        correct: false,
      },
      {
        text: 'D. flush(timer)',
        correct: false,
      },
    ],
  },
  {
    question: 'Which is the property used to position the object in the left of the screen?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. object.position = left',
        correct: false,
      },
      {
        text: 'B. object = position.left',
        correct: false,
      },
      {
        text: 'C. object.shiftleft',
        correct: true,
      },
      {
        text: 'D. flush(timer)',
        correct: false,
      },
    ],
  },
  {
    question: '`setTimeout()` is the function used to call a function in every time duration?',
    category: 'IT',
    type: 'True / False',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. False',
        correct: true,
      },
      {
        text: 'B. True',
        correct: false,
      },
    ],
  },
  {
    question: 'We get the DOM object in JavaScript by using `getElementbyId()`?',
    category: 'IT',
    type: 'True / False',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. False',
        correct: false,
      },
      {
        text: 'B. True',
        correct: true,
      },
    ],
  },
  {
    question: "Use `img.src='url'` to assign the image source in JavaScript?",
    category: 'IT',
    type: 'True / False',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. True',
        correct: false,
      },
      {
        text: 'B. False',
        correct: true,
      },
    ],
  },
  {
    question: 'How do we create and preload an image object in JavaScript?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. Use new keyword',
        correct: false,
      },
      {
        text: 'B. Call Image()',
        correct: false,
      },
      {
        text: 'C. Both Use new keyword and Call Image()',
        correct: true,
      },
      {
        text: 'D. Set image()',
        correct: false,
      },
    ],
  },
  {
    question:
      '`onMouseOnto` is event handler which be triggered when the user’s mouse moves onto a link?',
    category: 'IT',
    type: 'True / False',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. True',
        correct: false,
      },
      {
        text: 'B. False',
        correct: true,
      },
    ],
  },
  {
    question: 'Which event handler is triggered when the user’s mouse moves away from a link?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. onMouseOver',
        correct: false,
      },
      {
        text: 'B. onMouseOut',
        correct: true,
      },
      {
        text: 'C. onMouse',
        correct: false,
      },
      {
        text: 'D. onMouseOnto',
        correct: false,
      },
    ],
  },
  {
    question: 'How is everything treated in HTML DOM?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Node',
        correct: true,
      },
      {
        text: 'B. Attributes',
        correct: false,
      },
      {
        text: 'C. Elements',
        correct: false,
      },
      {
        text: 'D. Arrays',
        correct: false,
      },
    ],
  },
  {
    question: 'What is the work of the form control elements in the HTML DOM?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. All the possible elements',
        correct: false,
      },
      {
        text: 'B. Debugging elements',
        correct: false,
      },
      {
        text: 'C. Collecting elements',
        correct: false,
      },
      {
        text: 'D. User Interface elements',
        correct: true,
      },
    ],
  },
  {
    question: 'How are the objects organized in the HTML DOM?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Class-wise',
        correct: false,
      },
      {
        text: 'B. Queue',
        correct: false,
      },
      {
        text: 'C. Hierarchy',
        correct: true,
      },
      {
        text: 'D. Stack',
        correct: false,
      },
    ],
  },
  {
    question: 'Which object is the top of the hierarchy?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. Window Object',
        correct: false,
      },
      {
        text: 'B. Document Object',
        correct: false,
      },
      {
        text: 'C. Form Object',
        correct: true,
      },
      {
        text: 'D. Form Control Elements',
        correct: false,
      },
    ],
  },
  {
    question: 'The script tag must be placed in the head or body',
    category: 'IT',
    type: 'True / False',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. False',
        correct: false,
      },
      {
        text: 'B. True',
        correct: true,
      },
    ],
  },
  {
    question:
      'Which attribute is used to specify that the script is executed when the page has finished parsing? (only for external scripts)?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. parse',
        correct: false,
      },
      {
        text: 'B. a sync',
        correct: false,
      },
      {
        text: 'C. defer',
        correct: true,
      },
      {
        text: 'D. type',
        correct: false,
      },
    ],
  },
  {
    question: 'JavaScript can be written directly into JS file and included into HTML',
    category: 'IT',
    type: 'True / False',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. False',
        correct: false,
      },
      {
        text: 'B. True',
        correct: true,
      },
    ],
  },
  {
    question: 'Attribute `script` is used to include External JS code inside your HTML Document?',
    category: 'IT',
    type: 'True / False',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. False',
        correct: true,
      },
      {
        text: 'B. True',
        correct: false,
      },
    ],
  },
  {
    question:
      'The statement a===b refers to both a and b are equal in value, type and reference address',
    category: 'IT',
    type: 'True / False',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. False',
        correct: true,
      },
      {
        text: 'B. True',
        correct: false,
      },
    ],
  },
  {
    question:
      'Assume that we have to convert “false” that is a non-string to string. The command that we use is (without invoking the “new” operator).',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    answers: [
      {
        text: 'A. false.toString()',
        correct: false,
      },
      {
        text: 'B. String(false)',
        correct: false,
      },
      {
        text: "C. String newvariable='false'",
        correct: false,
      },
      {
        text: 'D. Both false.toString() and String(false)',
        correct: true,
      },
    ],
  },
  {
    question: 'The URL property belongs to which of the following object?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Medium',
    answers: [
      {
        text: 'A. Document',
        correct: true,
      },
      {
        text: 'B. Element',
        correct: false,
      },
      {
        text: 'C. Location',
        correct: false,
      },
      {
        text: 'D. Event',
        correct: false,
      },
    ],
  },
  {
    question: 'What does the location property represent?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. Current DOM object',
        correct: false,
      },
      {
        text: 'B. Current URL',
        correct: true,
      },
      {
        text: 'C. Both DOM object and URL',
        correct: false,
      },
      {
        text: 'D. Document',
        correct: false,
      },
    ],
  },
  {
    question:
      'Which is the method that removes the current document from the browsing history before loading the new document?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. modify()',
        correct: false,
      },
      {
        text: 'B. assign()',
        correct: false,
      },
      {
        text: 'C. replace()',
        correct: true,
      },
      {
        text: 'D. remove()',
        correct: false,
      },
    ],
  },
  {
    question: 'Why is the replace() method better than the assign() method?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. Reliable',
        correct: false,
      },
      {
        text: 'B. Highly manageable',
        correct: false,
      },
      {
        text: 'C. More efficient',
        correct: false,
      },
      {
        text: 'D. Handles unconditional loading',
        correct: true,
      },
    ],
  },
  {
    question: 'What is the purpose of the assign() method?',
    category: 'IT',
    type: 'Multiple Choice',
    difficulty: 'Hard',
    answers: [
      {
        text: 'A. Only loading',
        correct: false,
      },
      {
        text: 'B. Loading of window and display',
        correct: true,
      },
      {
        text: 'C. Displays already present window',
        correct: false,
      },
      {
        text: 'D. Unloading of window',
        correct: false,
      },
    ],
  },
];

console.log(data);

const a = data.filter(
  (question) =>
    question.category.toLowerCase() === 'it' && question.difficulty.toLowerCase() === 'hard',
  // question.type.toLowerCase() === 'true / false',
);
console.log(a);
