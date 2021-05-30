let readlineSync = require('readline-sync');
let chalk = require('chalk');

console.log(chalk.blue.bold('Welcome to the GAME OF THRONE quiz!'))
let userName = readlineSync.question('Enter your Name: ')
console.log('Welcome ' + chalk.yellow(userName) +' in our quiz!')
readlineSync.keyInYN('Do you want to start the quiz?')
let score = 0
let highScore = [
  {
    name : "Sebestian",
    score : 8
  }
]

function GOTQuiz(question, option, answer){
  console.log(chalk.white.bgBlue(question))
  userAnswer = readlineSync.keyInSelect(option)
  if(option[userAnswer] == answer ){
    score += 1
    console.log(chalk.green('You answer is corrected\n' + "your score is : " + score + "\n"))
  }else{
    console.log(chalk.red('Uff.. wrong answer , your score is '+ score + "\n"))
  }
}

questions = [
  {
    question: "\nWho is known as The Kingslayer?",
    options : ['Sandor Clegane', "Jaime Lannister", "Joffrey Baratheon"],
    ans :  "Jaime Lannister"
  },
 {
    question: "Who is the youngest of Ned Stark’s children?",
    options : ["Arya", "Rickon", "Sansa"],
    ans :  "Rickon"
  },
  {
    question: "Who is Jon Snow’s mother?",
    options : ['Catelyn Stark', "an unnamed prostitute", "Lyanna Stark"],
    ans :  "Lyanna Stark"
  },
  {
    question: "Which of the following is not a name of one of Daenerys Targaryen’s dragons?",
    options : ['Viserion', "Balerion", "Drogon", "Rhaegal"],
    ans :  "Balerion"
  },
  {
    question: " Who was called Black Fish?",
    options : ['Sandor Clegane', "Brynden Tully", "Joffrey Baratheon", "Tywin Lannister."],
    ans :  "Brynden Tully"
  },
  {
    question: "Name of Danerys’s unborn child was _____.",
    options : ["Rhaegar", "Drogo", "Rhaego"],
    ans :  "Rhaego"
  },
  {
    question: "Who was responsible for the creation of the Night King?",
    options : ['The Lord of Light', "The Children of the Forest", "The First Men"],
    ans :  "The Children of the Forest"
  },
  {
    question: "What is the name of Arya’s sword?",
    options : ['Needle', "Ice", "Axe"],
    ans :  "Needle"
  },
]

for(let i = 0; i< questions.length ; i++){
  GOTQuiz(questions[i].question, questions[i].options, questions[i].ans)
}

if(score === highScore[0].score){
  console.log(chalk.red.bold('Congratulation!! You have scored highest Score\n Your score is ' + score))
}else{
  console.log(chalk.red.bold('Your total score is : ' + score));
  console.log(chalk.yellow.bold('\nHighest Score is ' + highScore[0].score + ' By ' + highScore[0].name))
}