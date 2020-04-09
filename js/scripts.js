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

// UI logic
$(document).ready(function() {
  var pigDiceGame = new Game();
  var player1 = new Player("player1");
  var player2 = new Player("player2");
  pigDiceGame.addPlayer(player1);
  pigDiceGame.addPlayer(player2);


  function switchPlayerClasses () {
    var currIndex = pigDiceGame.currentPlayerIndex;
    $("#p" + currIndex + "-header" ).addClass("active");
  }

  $('button#p0-roll').click(function(event) {
    event.preventDefault();
    pigDiceGame.rollDice();
    $("#p0-turn-points").text(pigDiceGame.players[0].roundScore);
    $("#p0-rolled-number").text(pigDiceGame.players[0].rolledDice);
    if (pigDiceGame.players[0].rolledDice === 1) {
      $("#p0-header").removeClass("active");
      switchPlayerClasses();
      $("#p0-rolled-number").text(0);
    }

  });

  $('button#p0-hold').click(function(event) {
    event.preventDefault();
    pigDiceGame.holdTurn();
    $("#p0-total-points").text(pigDiceGame.players[0].totalPts);
    $("#p0-turn-points").text(pigDiceGame.players[0].roundScore);
    $("#p0-rolled-number").text(0);
    $("#p0-header").removeClass("active");
    switchPlayerClasses();

  }); 

  $('button#p1-roll').click(function(event) {
    event.preventDefault();
    pigDiceGame.rollDice();
    $("#p1-turn-points").text(pigDiceGame.players[1].roundScore);
    $("#p1-rolled-number").text(pigDiceGame.players[1].rolledDice);
    if (pigDiceGame.players[1].rolledDice === 1) {
      $("#p1-header").removeClass("active");
      switchPlayerClasses();
      $("#p1-rolled-number").text(0);
    }

  });

  $('button#p1-hold').click(function(event) {
    event.preventDefault();
    pigDiceGame.holdTurn();
    $("#p1-total-points").text(pigDiceGame.players[1].totalPts);
    $("#p1-turn-points").text(pigDiceGame.players[1].roundScore);
    $("#p1-rolled-number").text(0);
    $("#p1-header").removeClass("active");
    switchPlayerClasses();
  });

});