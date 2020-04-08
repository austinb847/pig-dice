// Business Logic

var player1 = {
  totalPts: 0,
  turnPts: 0
}

var player2 = {
  totalPts: 0,
  turnPts: 0
}


/* function PlayerScore() {
  this.scores = [];
  this.currentId = 0;
}

function Score (rollDice)
  this.rollDice = rollDice;
  // this.holdDice = holdDice;

} */

// User Inteface Logic

function rollDice(player) {
  var roll = Math.floor((Math.random() * 6) + 1);
  console.log(roll);
  
  if (roll != 1) {
    //add roll to their total and player continues
    player.turnPts += roll;
    //add this score to UI Round score
    $("#p1-turn-points").text(player1.turnPts);
    $("#p1-rolled-number").text(player1.turnPts);
  } else { 
    // player score = 0
    player.turnPts = 0;
    //add turn points to UI turn points
    $("#p1-turn-points").text(player1.turnPts);
    $("#p1-rolled-number").text(player1.turnPts);
    //next player 

  }
}

function hold()


$(document).ready(function() {
  $('button#p1-roll').click(function(event) {
    event.preventDefault();
    rollDice(player1);

  });

});