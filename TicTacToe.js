/* 1) Limit each box to be clicked only once
   2) count score human vs human, first to 5 points wins
   3) add win logic, 3 in a row wins the game, empty board
   4) when one of the players reaches 5 points, notify which player won
          */
var count = 0;
var boxes = document.getElementsByClassName("box");
var gameBoard = ['', '', '', '', '', '', '', '', '']
/*console.log(boxes)*/

for (var i=0; i < boxes.length; i++){
	boxes[i].addEventListener("click", addToOutput);
}

function takeTurn(i) {
	if (i % 2 == 0) {
		return "2";
	} else {
		return "1";
	}
}

function addToOutput(click){
	count++;
	/*this.innerHTML = takeTurn(count);*/
	if((takeTurn(count) == "2")) {
		this.innerHTML = "<img class='full-opacity' id='firstStone' src='images/player2.png'>"
	} else {
		this.innerHTML = "<img class='full-opacity' id='firstStone' src='images/player1.png'>"
	}     
	gameBoard[this.dataset.id] = takeTurn(count);
	getWinner();	
}

function getWinner(){
	
	if((gameBoard[0] == gameBoard[1]) && 
	(gameBoard[1] == gameBoard[2]) && 
	(gameBoard[0] != "")) {

		console.log("first one");
		console.log(gameBoard)
		document.getElementById("winner").innerHTML = ("Player " + gameBoard[0] + " Wins")
	}
	if((gameBoard[3] == gameBoard[4]) && 
	(gameBoard[4] == gameBoard[5]) && 
	(gameBoard[3] != "")) {
		document.getElementById("winner").innerHTML = ("Player" + gameBoard[3] + " Wins")
	}
	if((gameBoard[6] == gameBoard[7]) && 
	(gameBoard[7] == gameBoard[8]) && 
	(gameBoard[6] != "")) {
		document.getElementById("winner").innerHTML = ("Player" + gameBoard[6] + " Wins")
	}
	if((gameBoard[0] == gameBoard[3]) && 
	(gameBoard[3] == gameBoard[6]) && 
	(gameBoard[0] != "")) {
		document.getElementById("winner").innerHTML = ("Player " + gameBoard[0] + " Wins")
	}
	if((gameBoard[1] == gameBoard[4]) && 
	(gameBoard[4] == gameBoard[7]) && 
	(gameBoard[1] != "")) {
		document.getElementById("winner").innerHTML = ("Player " + gameBoard[1] + " Wins")
	}
	if((gameBoard[2] == gameBoard[5]) && 
	(gameBoard[5] == gameBoard[8]) && 
	(gameBoard[2] != "")) {
		document.getElementById("winner").innerHTML = ("Player " + gameBoard[2] + " Wins")
	}
	if((gameBoard[0] == gameBoard[4]) && 
	(gameBoard[4] == gameBoard[8]) && 
	(gameBoard[0] != "")) {
		document.getElementById("winner").innerHTML = ("Player " + gameBoard[0] + " Wins")
	}
	if((gameBoard[2] == gameBoard[4]) && 
	(gameBoard[4] == gameBoard[6]) && 
	(gameBoard[2] != "")) {
		document.getElementById("winner").innerHTML = ("Player " + gameBoard[2] + " Wins")
	}

	/*if(((document.getElementById("spot1").innerText == "X") &&
	(document.getElementById("spot2").innerText == "X") &&
	(document.getElementById("spot3").innerText == "X"))) {
		document.getElementById("winner").innerHTML = ("Player 1 Wins")
	}

	if(((document.getElementById("spot4").innerText == "X") &&
	(document.getElementById("spot5").innerText == "X") &&
	(document.getElementById("spot6").innerText == "X"))) {
		document.getElementById("winner").innerHTML =("Player 1 Wins");
	}

	if(((document.getElementById("spot7").innerText == "X") &&
	(document.getElementById("spot8").innerText == "X") &&
	(document.getElementById("spot9").innerText == "X"))) {
		document.getElementById("winner").innerHTML =("Player 1 Wins");
	}
	if(((document.getElementById("spot1").innerText == "X") &&
	(document.getElementById("spot4").innerText == "X") &&
	(document.getElementById("spot7").innerText == "X"))) {
		document.getElementById("winner").innerHTML =("Player 1 Wins");
	}
	if(((document.getElementById("spot2").innerText == "X") &&
	(document.getElementById("spot5").innerText == "X") &&
	(document.getElementById("spot8").innerText == "X"))) {
		document.getElementById("winner").innerHTML =("Player 1 Wins");
	}
	if(((document.getElementById("spot3").innerText == "X") &&
	(document.getElementById("spot6").innerText == "X") &&
	(document.getElementById("spot9").innerText == "X"))) {
		document.getElementById("winner").innerHTML =("Player 1 Wins");
	}
	if(((document.getElementById("spot1").innerText == "X") &&
	(document.getElementById("spot5").innerText == "X") &&
	(document.getElementById("spot9").innerText == "X"))) {
		document.getElementById("winner").innerHTML =("Player 1 Wins");
	}
	if(((document.getElementById("spot3").innerText == "X") &&
	(document.getElementById("spot5").innerText == "X") &&
	(document.getElementById("spot7").innerText == "X"))) {
		document.getElementById("winner").innerHTML =("Player 1 Wins");
	}
// Above - player 1 wins | Below - player 2 wins

if(((document.getElementById("spot1").innerText == "O") &&
	(document.getElementById("spot2").innerText == "O") &&
	(document.getElementById("spot3").innerText == "O"))) {
		document.getElementById("winner").innerHTML =("Player 2 Wins");
	}

	if(((document.getElementById("spot4").innerText == "O") &&
	(document.getElementById("spot5").innerText == "O") &&
	(document.getElementById("spot6").innerText == "O"))) {
		document.getElementById("winner").innerHTML =("Player 2 Wins");
	}

	if(((document.getElementById("spot7").innerText == "O") &&
	(document.getElementById("spot8").innerText == "O") &&
	(document.getElementById("spot9").innerText == "O"))) {
		document.getElementById("winner").innerHTML =("Player 2 Wins");
	}
	if(((document.getElementById("spot1").innerText == "O") &&
	(document.getElementById("spot4").innerText == "O") &&
	(document.getElementById("spot7").innerText == "O"))) {
		document.getElementById("winner").innerHTML =("Player 2 Wins");
	}
	if(((document.getElementById("spot2").innerText == "O") &&
	(document.getElementById("spot5").innerText == "O") &&
	(document.getElementById("spot8").innerText == "O"))) {
		document.getElementById("winner").innerHTML =("Player 2 Wins");
	}
	if(((document.getElementById("spot3").innerText == "O") &&
	(document.getElementById("spot6").innerText == "O") &&
	(document.getElementById("spot9").innerText == "O"))) {
		document.getElementById("winner").innerHTML =("Player 2 Wins");
	}
	if(((document.getElementById("spot1").innerText == "O") &&
	(document.getElementById("spot5").innerText == "O") &&
	(document.getElementById("spot9").innerText == "O"))) {
		document.getElementById("winner").innerHTML =("Player 2 Wins");
	}
	if(((document.getElementById("spot3").innerText == "O") &&
	(document.getElementById("spot5").innerText == "O") &&
	(document.getElementById("spot7").innerText == "O"))) {
		document.getElementById("winner").innerHTML =("Player 2 Wins");
	}	*/

}

function gainedPoint(){ 
	score=0; 
	score++; 
} 
function getScore(){ 
	return score; 
} 
	
// var index;
// var playerWins =  ["spot1", "spot2", "spot3"]
// 			      ["spot4", "spot5", "spot6"];
// 			      ["spot7", "spot8", "spot9"];
// 		          ["spot1", "spot4", "spot7"];
// 			      ["spot2", "spot5", "spot8"];
// 			      ["spot3", "spot6", "spot9"];
// 			      ["spot1", "spot5", "spot9"];
// 			      ["spot3", "spot5", "spot7"]
// for (index = 0; index < playerWins.length; index++) {

// }
