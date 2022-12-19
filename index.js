var readlineSync = require('readline-sync')

var score = 0
var userName = readlineSync.question("What's your name? ")

console.log('Welcome ' + userName + ' to - Fandom Quiz?')

// data of high score
var highScores = [
  {
    name: "SUMIT",
    score: 5,
  },
]

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log('Right!')
    score = score + 1
  } else {
    console.log('Oops! the correct answer is ' + answer)
  
  }

  console.log('Current Score: ', score)
  console.log('-----------------')
}

// array of objects
var questions = [
  {
    question: 'When Narendra Modi was born?? ',
    answer: '17 September 1950',
  },
  {
    question: 'Name a book dedicated to Narendra Modi written by Kingshuk Nag ?',
    answer: 'The NaMo Story',
  },
  
  {
    question: 'When was Narendra Modi elected as prime minister for the first time? ',
    answer: '2014',
  },
  {
    question: 'What is the full name of Narendra Modi?',
    answer: 'Narendra Damodardas Modi',
  },
  
  {
    question: 'At which place in the world, Narendra Modi wax statue was unveiled in a museum? ',
    answer: 'London',
  },
  
]

// loop
for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}

console.log('YAY! You SCORED: ', score)
console.log('-------------------')

console.log('Check out the high scorers - ')
for (var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + ': ' + highScores[i].score)
}
console.log('-------------------')

console.log(
  'If you have scored better than the current high scorers then send me a screenshot of your score, so that I can add you to the high scorers list.'
)
console.log('Thank you for playing!')