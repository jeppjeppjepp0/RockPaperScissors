var wins = 0;
var loss = 0;
var ties = 0;
var RPS = ["R","P","S"];

function playRPS() {
    var playerResponse = prompt("Enter Rock (R), Paper (P), or Scissors (S)");
    var randomResponse = RPS[Math.floor(Math.random() * RPS.length)];

    alert("The computer chose: " + randomResponse + "!");

    if (playerResponse === randomResponse) {
        alert("Tie!");
        ties++;
    }
    else if (playerResponse === "R" && randomResponse === "S" ||
             playerResponse === "P" && randomResponse === "R" ||
             playerResponse === "S" && randomResponse === "P"){
        alert("Win!");
        wins++;
    }
    else {
        alert("Loss :(");
        loss++;
    }

    alert("wins: " + wins + "\nlosses: " + loss + "\nties: " + ties);

    if (confirm("Do you want to play again?") == true) {
        playRPS(); 
      } else {
        alert("Good playing!");
      }
    }

/* 
if press play, play
prompt window: enter R, P, or S
generates random response
compare response and computer random
alert WLT
count win, loss, tie
-display all WLT
confirm if user plays again
*/