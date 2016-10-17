// var userName = prompt("What do ppl call u when they aren't calling u 'Lil Bitch?' ")
var win;
var counter = 0;

$(document).ready(function() {
  var userGuess = $("#guess").val();


  $("#button").on("click", function(){
    alert($("#guess").val());
  })

  $("#startGame").on("click", function() {
   win = Math.floor(Math.random()*101);
   alert(win);
 });

  $("#button").on("click", function() {

    if (counter >= 4) {
      $("#answer").addClass("red");
    }
    if (counter <= 6) {
      hiLoGame();
    }
    if (counter > 6) {
      alert("You have run out of tries. Go away.");
    }
    if (counter === 6) {
      $("#button").on("click", function(){
        $("input").hide();
      });
    };
    counter++;
    userGuess = $("#guess").val();
    $("#prevGuess").append("<li>Guess Number " + counter + " is " + userGuess + ".</li>");

  });
});

function hiLoGame() {
   var userNum = document.getElementById("guess").value;
   if (parseInt(userNum) > win) {
     $("#answer").text("Your guess is too high");  };

   if (parseInt(userNum) < win) {
     $("#answer").text("Your guess is too low");  };

   if (parseInt(userNum) === win) {
     $("#answer").text("YOU WIN " + userName + "....for now");  };

   if (isNaN(userNum)) {
     $("#answer").text("We said NUMBERS, dude");  };
 };
