let playerScore = 0;
let computerScore = 0;

function updateScore() {
    document.getElementById("score").textContent = `You: ${playerScore} | Computer: ${computerScore}`;
}
function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]

    let resultText = "";

    if (computerChoice === playerChoice) {
        resultText = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultText = "You Win! 🎉";
        playerScore++;

    } else {
        resultText = "You Lose! 😢";
        computerScore++;
    }



    document.getElementById('result').textContent = resultText;
    updateScore();


}