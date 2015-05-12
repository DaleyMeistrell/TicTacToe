/* 1) Limit each box to be clicked only once
   2) hover effects to disappear after box has been selected
   3) 9 clicks max
   4) images to replace X's and O's
   5) count score human vs human, first to 5 points wins
   6) each point adds 100% opacity to 50% rock opacity
   7) add win logic, 3 in a row wins the game
   8) when one of the players reaches 5 points, notify which player won
          */
var count = 0;
var imageSrc1 = "images/player1.png"; 
var imageSrc2 = "images/player2.png";

var boxes = document.getElementsByClassName("box");

console.log(boxes)


for (var i=0; i < boxes.length; i++){
	boxes[i].addEventListener("click", addToOutput);
}


function takeTurn(i) {
	if (i % 2 == 0) {
		return "O";
	} else {
		return "X";
	}
}


function addToOutput(click){
	count++;
	console.log(click)
	this.innerHTML = takeTurn(count);
	getWinner();
}


/*for (var i=0; i < boxes.length; i++){
	boxes[i].addEventListener("click", addToOutput);
	console.log(i);
	}*/


function getWinner(){
	console.log(document.getElementById("spot1").innerText)
	if(((document.getElementById("spot1").innerText == "X") &&
	(document.getElementById("spot2").innerText == "X") &&
	(document.getElementById("spot3").innerText == "X"))) {
		alert("Player 1 Wins");
	}

	if(((document.getElementById("spot4").innerText == "X") &&
	(document.getElementById("spot5").innerText == "X") &&
	(document.getElementById("spot6").innerText == "X"))) {
		alert("Player 1 Wins");
	}

	if(((document.getElementById("spot7").innerText == "X") &&
	(document.getElementById("spot8").innerText == "X") &&
	(document.getElementById("spot9").innerText == "X"))) {
		alert("Player 1 Wins");
	}
	if(((document.getElementById("spot1").innerText == "X") &&
	(document.getElementById("spot4").innerText == "X") &&
	(document.getElementById("spot7").innerText == "X"))) {
		alert("Player 1 Wins");
	}
	if(((document.getElementById("spot2").innerText == "X") &&
	(document.getElementById("spot5").innerText == "X") &&
	(document.getElementById("spot8").innerText == "X"))) {
		alert("Player 1 Wins");
	}
	if(((document.getElementById("spot3").innerText == "X") &&
	(document.getElementById("spot6").innerText == "X") &&
	(document.getElementById("spot9").innerText == "X"))) {
		alert("Player 1 Wins");
	}
	if(((document.getElementById("spot1").innerText == "X") &&
	(document.getElementById("spot5").innerText == "X") &&
	(document.getElementById("spot9").innerText == "X"))) {
		alert("Player 1 Wins");
	}
	if(((document.getElementById("spot3").innerText == "X") &&
	(document.getElementById("spot5").innerText == "X") &&
	(document.getElementById("spot7").innerText == "X"))) {
		alert("Player 1 Wins");
	}

}
	/*if (spot1.innerText == "X" &&
   spot2.innerText == "X" &&
   spot3.innerText == "X")*/

/*document.getElementById*/
var index;
var playerWins =  ["spot1", "spot2", "spot3"];
			      ["spot4", "spot5", "spot6"];
			      ["spot7", "spot8", "spot9"];
		          ["spot1", "spot4", "spot7"];
			      ["spot2", "spot5", "spot8"];
			      ["spot3", "spot6", "spot9"];
			      ["spot1", "spot5", "spot9"];
			      ["spot3", "spot5", "spot7"]
for (index = 0; index < playerWins.length; index++) {

}
