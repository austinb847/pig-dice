// Business Logic

var player1 = {
  totalPts: 0,
  turnPts: 0,
  id: "p1"

}

var player2 = {
  totalPts: 0,
  turnPts: 0,
  id: "p2"
}

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
    //nextPlayer()
  }
}

function hold(player) {
  //add turnPts to total pts
  player.totalPts += player.turnPts;
  $("#p1-total-points").text(player.totalPts);
  if (player.totalPts >= 30) { //should be 100. set to 30 for testing purposes
    console.log(player.id + " is the winner!");
    //game should stop running here
  } else {
    console.log("go to next player")
    //set current points back to 0
    player.turnPts = 0;
    $("#p1-turn-points").text(0);

    //nextPlayer()


  }
}

function nextPlayer() {
  //check what the current player is then switch to the next one

}


$(document).ready(function() {
  $('button#p1-roll').click(function(event) {
    event.preventDefault();
    rollDice(player1);

  });

  $('button#p1-hold').click(function(event) {
    event.preventDefault();
    hold(player1);
  });

});