var readLineSync = require("readline-sync");

score = 0;


function answerChecker(userAnswer, actualAnswer) {
  if (userAnswer.toUpperCase() === actualAnswer.toUpperCase()) {
    console.log(" Correct answer ! ");
    score = score + 1;
  }
  else {
    console.log(" Wrong answer ! ");
    score = score - 1;
  }
  console.log(" Current score = ", score);
  console.log(" ------------------");
}




var questionList = [{ question: " What was the name of Ferrari’s 2022 Formula 1 car chassis ? ", answer: "F1-75" },

{ question: " How many races did Max Verstappen win in 2022 ? ", answer: "15" },

{ question: " Who is the youngest F1 driver to win a race? ", answer: "Max Verstappen" },

{ question: " Which team holds the record for the most wins in a season ? ", answer: "Mercedes" },

{ question: " How many world titles did Michael Schumacher win ? ", answer: "7" },

{ question: " Lewis Hamilton won his first F1 world championship title with which team ? ", answer: "Mclaren" },

{ question: " How many points are awarded to the race winner of each Grand Prix ? ", answer: "25" }

];



var name = readLineSync.question(" Enter your Name here : ");
console.log(" Hi " + name + "! Welcome to F1 fandom quiz ? Let's see how much you score !");
console.log("-------------------------------------------------");
console.log(" Let's get started ! ");
console.log("-------------------------------------------------");



for (var i = 0; i < questionList.length; i = i + 1) {
  var answer = readLineSync.question(questionList[i].question);
  answerChecker(answer, questionList[i].answer);
}


console.log(" Total score is : ", score);
console.log(" Thanks for playing!");
console.log(" -------------------");