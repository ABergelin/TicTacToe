let userChoice = "";
			
function computerPlay() {
	let random = Math.random()
	let number = Math.floor(random * 3);
	let compChoice;
	
//	console.log("Random = " + random);
//	console.log("number = " + number);
	
	switch(number){
		case 0:
			compChoice = "ROCK";
			break;
		case 1:
			compChoice = "SCISSORS";
			break;
		case 2:
			compChoice = "PAPER";
			break;
	
	}
	
	return compChoice;
}

//console.log("Comp choice = " + computerPlay());

function playRound(player1, computerSelection) {
	let player1Choice = player1.toUpperCase();
	let outcome = "";
	let message = "";
	
	switch (player1Choice) {
		case "ROCK":
			if (computerSelection === "ROCK"){
				outcome = "DRAW";
			} else if (computerSelection === "SCISSORS"){
				outcome = "WIN";
			} else if (computerSelection === "PAPER"){
				outcome = "LOSE";
			}
			break;
		
		case "SCISSORS":
			if (computerSelection === "ROCK"){
				outcome = "LOSE";
			} else if (computerSelection === "SCISSORS"){
				outcome = "DRAW";
			} else if (computerSelection === "PAPER"){
				outcome = "WIN";
			}
			break;
		
		case "PAPER":
			if (computerSelection === "ROCK"){
				outcome = "WIN";
			} else if (computerSelection === "SCISSORS"){
				outcome = "LOSE";
			} else if (computerSelection === "PAPER"){
				outcome = "DRAW";
			}
			break;	
	}
	
	if (outcome === "WIN"){
		message = `You won! ${player1Choice} beats ${computerSelection}.`;
	} else if (outcome === "LOSE"){
		message = `You lost! ${computerSelection} beats ${player1Choice}.`;
	} else if (outcome === "DRAW"){
		message = "It was a draw!";
	}

	return message;

}

//Run the game from the buttons
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		btn.classList.add('playing');
		userChoice = btn.textContent.toUpperCase();
		//console.log(userChoice);
		if (userChoice != "") {
			//alert(playRound(userChoice, computerPlay()));
			
			var resultField = document.querySelector("#resultField");
			resultField.textContent = playRound(userChoice, computerPlay());
			
		}
	});

});


btns.forEach(key => key.addEventListener('transitionend', removeTransition));


	
