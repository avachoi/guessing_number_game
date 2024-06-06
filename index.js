let gameMessage = document.createElement("div");
gameMessage.setAttribute("id", "gameMessage");
gameMessage.innerHTML =
	"Can you guess the number I'm thinking of between 1 and 10?";

let app = document.getElementById("app");
app.appendChild(gameMessage);

let remainingGuesses = document.createElement("div");
remainingGuesses.setAttribute("id", remainingGuesses);
remainingGuesses.innerHTML = "Remaining Guesses: 10";
app.appendChild(remainingGuesses);

let start = document.createElement("button");
start.innerHTML = "start";
app.appendChild(start);

let message = document.createElement("result");
app.appendChild(message);
start.addEventListener("click", () => {
	console.log("click!");
	playGame();
});

let answer = Math.floor(Math.random() * 10) + 1;
let guessLeft = 2;
console.log("answer", answer);
function playGame() {
	while (guessLeft > 0) {
		let userGuess = parseInt(prompt("Enter your guess between 1 and 10"));
		guessLeft--;
		if (userGuess === answer) {
			alert("Congratulation!");
			return;
		} else if (userGuess < answer) {
			alert("Too low!");
		} else {
			alert("Too high!");
		}
		if (guessLeft === 0) {
			alert("Game over");
		}
	}
}
