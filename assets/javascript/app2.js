var numberRight = 0;
var numberWrong = 0;
var numberNotAnswered = 0;
var answ = "";
var rightAnswerOptionNumber;
var stopInterval;

$(".startButton").click(function() {
  console.log("button clicked");
  doThisOnClick();
});


function doThisOnClick() {
  countdownFrom(30);
  var questionToUse = getRandomArbitrary(0,50);
  displayQuestion(questionToUse);
  $(".startButton").hide();
  $(".resultDisplay").hide();
};



function displayQuestion(j) {
  console.log("displayQuestion started");
$.ajax({
  url: "https://opentdb.com/api.php?amount=50&type=multiple",
  method: "GET"
}).done(function(whatImGettingBack) {

  var quest = whatImGettingBack.results[j].question;
  answ = whatImGettingBack.results[j].correct_answer;
  var dist1 = whatImGettingBack.results[j].incorrect_answers[0];
  var dist2 = whatImGettingBack.results[j].incorrect_answers[1];
  var dist3 = whatImGettingBack.results[j].incorrect_answers[2];

  var answerChoices = [];
  answerChoices.push(answ, dist1, dist2, dist3);
  answerChoices = _.shuffle(answerChoices);
  rightAnswerOptionNumber = _.indexOf(answerChoices, answ);

  // displays the question and answer choices in the window
  $(".question").html(quest);
  $("#opt0").html(answerChoices[0]);
  $("#opt1").html(answerChoices[1]);
  $("#opt2").html(answerChoices[2]);
  $("#opt3").html(answerChoices[3]);
  $(".questionDisplay").show();
});
};

$(".answerDisplay").click(function() {

  clearInterval(stopInterval);
  $("#timeDisplay").text("30");
  console.log("this option was clicked: " + this.id);
  var optionClicked = "opt" + rightAnswerOptionNumber;
  console.log("the option clicked shows: " + optionClicked);
  if (optionClicked === this.id){
    console.log("right answer clicked");
    $(".rightOrWrongWords").html("You were right!");
    numberRight ++;
  }
  else {
    console.log("wrong answer clicked");
    $(".rightOrWrongWords").html("You were wrong.");
    numberWrong ++;
  }
  showResultOnClick();

});

// $(".distractor").click(function() {
//   console.log("wrong answer clicked");
//   $(".rightOrWrongWords").html("You were wrong.");
//   numberWrong ++;
//   showResultOnClick();
//   showScore();
//
// });

function showResultOnClick() {
  $(".questionDisplay").hide();
  $(".resultDisplay").show();
  $(".answerRevealed").html("The correct answer is: " + answ);
  showScore();
}

function showScore() {
  $(".numberRight").html("Number right: " + numberRight);
  $(".numberWrong").html("Number wrong: " + numberWrong);
  $(".numberNotAnswered").html("Number not answered: " + numberNotAnswered)
  var delayEreStartOver = setTimeout(doThisOnClick,5000); // here's a problem
  clearTimeout(delayEreStartOver); // here's where the problem is
}

function countdownFrom(x) {
    stopInterval = setInterval(countDown, 1000);
    function countDown() {
      $("#timeDisplay").text(x);
      x--;
      if (x < 0) {
        clearInterval(stopInterval);
        $(".rightOrWrongWords").html("Time's up!");
        numberNotAnswered ++;
        showResultOnClick();
      };
    };
  };

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
