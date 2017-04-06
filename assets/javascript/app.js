

var questionBank = [
          [question: "What is the spelling of girraffe?",
          answer: "girraffe",
          distractor1: "fred",
          distractor2: "monkey",
          distractor3: "george"],

          [question: "What is the word orange?"
          answer: "orange",
          distractor1: "banana",
          distractor2: "green",
          distractor3: "apple"],

          [question: "Do you have a name?",
          answer: "yes",
          distractor1: "no",
          distractor2: "maybe",
          distractor3: "what do you care"],
          ]





// on click:
// display question 1
// start countdown


function jsonFlickrFeed (jsonCodeFeed) {
  var pixDiv = document.getElementById("pictures");
  $(.question).html(question-bank.question);

  var htmlBits = "<p></p>";
  // = '<p> <a href="' + jsonCodeFeed.link+ '">' +
  //   jsonCodeFeed.title + '</a>'+ '</p>';
  for (i = 0; i < jsonCodeFeed.items.length; i++) {
    htmlBits += '<div class="pixBox"' + jsonCodeFeed.items[i].description + '</div><br />';
  }
  pixDiv.innerHTML = htmlBits;
}


// this puts the code for the json feed into the head tag of the document
// function insertJSONFeedIntoHead() {
//   var head_element = document.getElementsByTagName("head")[0];
//   var newScript = document.createElement("script");
//   newScript.type = "text/javascript";
//   newScript.src = "/question-bank/question-bank.json";
//   head_element.appendChild(newScript);
// }




function displayQuestion(q) {
  $(".question").html(questionBank[q].question);
  $(".answer").html(questionBank[q].answer);
  $(".distractor1").html(questionBank[q].distractor1);
  $(".distractor2").html(questionBank[q].distractor2);
  $(".distractor3").html(questionBank[q].distractor3);
  // now anticipate the answer
};


function doThisOnClick() {
  for (var i = 0; i < questionBank.length; i++) {
    displayQuestion(i);
    countdownFrom(30);
  };
};


$("#buttonClick").click(function() {
  doThisOnClick();
});


// bmc: THE function that results in a countdown displayed
// bmc: use a div or span with id=timeDisplay to display the countdown

var countdownFrom = function(x) {
  countdownFrom = false; // this might work
  var stopInterval = setInterval(countDown, 1000);
  function countDown() {
    $("#timeDisplay").html(x);
    x--;
    if (x < 0) {
      clearInterval(stopInterval);
      console.log("we're done");
      return true;
    };
  };
};

// run this in the javascript logic
countdownFrom(5);

if (countdownFrom(5)) {
  // run code for the end of timer action
}
