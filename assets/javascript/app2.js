var numberRight = 0;
var numberWrong = 0;
var numberNotAnswered = 0;
var answ = "";

$("#startButton").click(function() {
  console.log("button clicked");
  doThisOnClick();
});


function doThisOnClick() {
    $(".questionDisplay").show();
    countdownFrom(15);
    $(".resultDisplay").hide();
    var questionToUse = getRandomArbitrary(0,50);
    displayQuestion(questionToUse);
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

  // displays the question and answer choices in the window
  $(".question").html(quest);
  $(".answer").html(answ);
  $(".dist1").html(dist1);
  $(".dist2").html(dist2);
  $(".dist3").html(dist3);
});
};

$(".answer").click(function() {
  console.log("right answer clicked");
  $(".rightOrWrongWords").html("You were right!");
  numberRight ++;
  showResultOnClick();

});

$(".distractor").click(function() {
  console.log("wrong answer clicked");
  $(".rightOrWrongWords").html("You were wrong.");
  numberWrong ++;
  showResultOnClick();
  showScore();

});

function showResultOnClick() {
  $(".questionDisplay").hide();
  $(".resultDisplay").show();
  $(".answerRevealed").html("The correct answer is: " + answ);
}

function showScore() {
  $(".numberRight").html("Number right: " + numberRight);
  $(".numberWrong").html("Number wrong: " + numberWrong);
  $(".numberNotAnswered").html("Number not answered: " + numberNotAnswered)
}

function countdownFrom(x) {
    var stopInterval = setInterval(countDown, 1000);
    function countDown() {
      $("#timeDisplay").html(x);
      x--;
      if (x < 0) {
        clearInterval(stopInterval);
        showResultOnClick();
        doThisOnClick();
      };
    };
  };

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
