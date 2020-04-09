// Business Logic
var Game = function() {
  this.players = [];
  this.gameRunning = true;
  this.currentPlayerIndex = 0;

}

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
};

Game.prototype.rollDice = function() {
  var player = this.players[this.currentPlayerIndex];
  var roll = Math.floor((Math.random() * 6) + 1);
  player.rolledDice = roll;
  console.log(roll);
  if (roll !== 1) {
    player.roundScore += roll;
  } else {
    player.roundScore = 0;
    this.nextPlayer();
    console.log("switched player")
    //this.nextPlayer(this.currentPlayerIndex);
  }
}

Game.prototype.holdTurn = function() {
  var player = this.players[this.currentPlayerIndex];
  player.totalPts += player.roundScore;
  console.log(player.totalPts);  
  if (player.totalPts >= 50) {
    console.log(player.name + " win!");
    this.gameRunning = false; //game stops running
  } else {
    player.roundScore = 0;
    //nextPlayer
    this.nextPlayer();
    console.log("switched player")
  } 
}

Game.prototype.nextPlayer = function() {
  this.currentPlayerIndex = 1 - this.currentPlayerIndex;

}

var Player = function(name) {
  this.totalPts = 0;
  this.roundScore = 0;
  this.name = name;
};

/* var pigDiceGame = new Game();
var player1 = new Player();
pigDiceGame.addPlayer(player1);
console.log(pigDiceGame.players[0]);
pigDiceGame.rollDice(player1);
console.log(player1.roundScore);
console.log(pigDiceGame.players[0]);
pigDiceGame.rollDice(player1);
console.log(player1.roundScore);
console.log(pigDiceGame.players[0]); */


/* var player1 = {
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
    $("#p1-rolled-number").text(roll);
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

} */


$(document).ready(function() {
  var pigDiceGame = new Game();
  var player1 = new Player("player1");
  var player2 = new Player("player2");
  pigDiceGame.addPlayer(player1);
  pigDiceGame.addPlayer(player2);

  





  $('button#p0-roll').click(function(event) {
    event.preventDefault();
    pigDiceGame.rollDice();
    $("#p0-turn-points").text(pigDiceGame.players[0].roundScore);
    $("#p0-rolled-number").text(pigDiceGame.players[0].rolledDice);

  });

  $('button#p0-hold').click(function(event) {
    event.preventDefault();
    pigDiceGame.holdTurn();
    $("#p0-total-points").text(pigDiceGame.players[0].totalPts);
    $("#p0-turn-points").text(pigDiceGame.players[0].roundScore);
    $("#p0-rolled-number").text(0);
  }); 

  $('button#p1-roll').click(function(event) {
    event.preventDefault();
    pigDiceGame.rollDice();
    $("#p1-turn-points").text(pigDiceGame.players[1].roundScore);
    $("#p1-rolled-number").text(pigDiceGame.players[1].rolledDice);

  });

  $('button#p1-hold').click(function(event) {
    event.preventDefault();
    pigDiceGame.holdTurn();
    $("#p1-total-points").text(pigDiceGame.players[1].totalPts);
    $("#p1-turn-points").text(pigDiceGame.players[1].roundScore);
    $("#p1-rolled-number").text(0);
  });

});