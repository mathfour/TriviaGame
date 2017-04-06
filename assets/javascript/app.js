var questionBank = [
  {question: "What is the spelling of girraffe?",
    answer: "girraffe",
    distractor1: "fred",
    distractor2: "monkey",
    distractor3: "george"},

    {question: "What is the word orange?",
    answer: "orange",
    distractor1: "banana",
    distractor2: "green",
    distractor3: "apple"},

    {question: "Do you have a name?",
    answer: "yes",
    distractor1: "no",
    distractor2: "maybe",
    distractor3: "what do you care"}
];


$("#buttonClick").click(function() {
  console.log("button clicked");
  doThisOnClick();
});


function doThisOnClick() {
  for (var i = 0; i < questionBank.length; i++) {
    displayQuestion(i);
    console.log(i); // working
  };
};

function displayQuestion(q) {
  console.log("displayQuestion started");
  $(".question").html(questionBank[q].question);
  $(".answer").html(questionBank[q].answer);
  $(".distractor1").html(questionBank[q].distractor1);
  $(".distractor2").html(questionBank[q].distractor2);
  $(".distractor3").html(questionBank[q].distractor3);
  // now anticipate the answer
  countdownFrom(30);

};

function countdownFrom(x) {
  var stopInterval = setInterval(countDown, 1000);
  function countDown() {
    $("#timeDisplay").html(x);
    x--;
    if (x < 0) {
      clearInterval(stopInterval);
    };
  };
};
