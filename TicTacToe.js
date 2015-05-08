// var playGame = document.getElementsByClassName("box")
// console.log(playGame)

// var player = true;

// addGamers();

// function addGamers() {
// 	for(var i = 0; i < playGame.length; i++){
// 		console.log("loop called");
// 		playGame[i].addEventListener('click', function(){
// 			console.log('x');
// 		if (player == true && this.innerHTML == "") {
// 			this.innerHTML == "x"; player == false; 
// 		} else if  (player == false && this.innerHTML == ""){
// 	this.innerHTML == "0"; player == true;
// } else {
// 	alert("Choose an empty block");}
// }


var boxes = document.getElementsByClassName("box");
console.log(boxes)
var move = 0;


function takeTurn() {
move++;
   if (move % 2 == 0) {
	return "O";
} else {
	return "X";
}
}

// addToOutput()


function addToOutput(){
	console.log(this.innerHTML)
	document.getElementsByClassName("box").innerHTML += this.innerHTML;
for (var i=0; i < boxes.length; i++){
	boxes[i].addEventListener("click", addToOutput);
	}
}












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
