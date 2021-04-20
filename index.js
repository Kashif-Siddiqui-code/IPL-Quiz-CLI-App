var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;
console.log(chalk.cyanBright.underline.bold("Welcome to IPL Quiz 2021.Lets check your cricket knowledge."));
var userName = readlineSync.question("Please Enter Your Name: ");
console.log(chalk.whiteBright("Welcome "+userName+" to the IPL quiz 2021"));
console.log(chalk.green("Here are some rules to play the quiz\nPlease type the first letter in capital and rest in small letter always."));
//console.log(chalk.cyanBright("By giving five correct answer you will be promoted to level2."))

function quiz(question,answer){
var userAnswer = readlineSync.question(question);

  if(userAnswer===answer){
    console.log(chalk.cyanBright("You are right."));
    score = score+1;
}
  else{
    console.log(chalk.red("You are wrong"));
    console.log("correct answer is: "+answer);
  }
  console.log(chalk.cyanBright("Current score is: "+score));
}

var questions = [{

  question: "When did IPL started ?",
  answer: "2007"
},{
  question: "Which plaer has made highest runs in IPL history ?",
  answer: "Virat Kohli"
},{
  question: "Which player has taken most numbers of wickets in IPL so far ?",
  answer: "Lasith Malinga"
},{
  question: "which team has never won the IPL tournament ?",
  answer: "RCB",
},{
  question: "Which team has won highest numbers of IPL matches so far ?",
  answer: "Mumbai Indians"
},{
  question: "Who has hit most sixes in all the IPL tournaments ?",
  answer: "Chris Gayle"
},{
  question: "Who is the costliest player in the IPL auction history ?",
  answer: "Chris Morris"
},{
  question: "What was the prize money for IPL 2017 tournament?",
  answer: "20 crore"
},{
  question: "Who has taken most catches in the IPL history so far ?",
  answer: "Suresh Raina"
}]

for(var i=0; i<questions.length; i++){
  var currentQuestions = questions[i];
  quiz(currentQuestions.question,currentQuestions.answer);
}
console.log(chalk.green("Yay! You Scored "+score));
console.log(chalk.white("Now take a screenshot and share with your friends to check their IPL knowledge"));





