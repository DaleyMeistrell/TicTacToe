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
var move=" ";
var imageSrc1 = "images/player1.png"; 
var imageSrc2 = "images/player2.png";

var boxes = document.getElementsByClassName("box");
		console.log(boxes)


for (var i=0; i < boxes.length; i++){
	boxes[i].addEventListener("click", addToOutput);
}


function takeTurn() {
	count++;
   if (count % 2 == 0) {
		move = "O";
} else {
		move = "X";
  }
}




function addToOutput(click){
	takeTurn();
	this.innerHTML = move;
	document.getElementsByClassName("box").innerHTML = move;
}




/*for (var i=0; i < boxes.length; i++){
	boxes[i].addEventListener("click", addToOutput);
	console.log(i);
	}*/



// document.getElementById("solve").addEventListener("click",getSolution);
// document.getElementById("clear").addEventListener("click",clear);
// function getSolution(){
// 	console.log('running get solution');
// 	document.getElementById("console-area").innerHTML = eval(document.getElementById("console-area").innerHTML);
// }
// function clear(){
// 	document.getElementById("console-area").innerHTML = null;
// }



// playerWins [spot1, spot2, spot3]
// 			  [spot4, spot5, spot6]
// 			  [spot7, spot8, spot9]
// 		      [spot1, spot4, spot7]
// 			  [spot2, spot5, spot8]
// 			  [spot3, spot6, spot9]
// 			  [spot1, spot5, spot9]
// 			  [spot3, spot5, spot7]
