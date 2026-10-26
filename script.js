let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let ans = Math.floor(Math.random() * 3) + 1;
    if (ans === 1) {
        return "rock";
    } else if (ans === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    //compare humanChoice with computerChoice
    let result = ""
    if (humanChoice === computerChoice) {
        result = `Tie, both picked ${humanChoice}`;
    } else if ((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "rock" && computerChoice === "scissors")) {
        ++humanScore;
        result = `You win, ${humanChoice} beats ${computerChoice}`;
    } else {
        ++computerScore;
        result = `You lose, ${computerChoice} beats ${humanChoice}`;
    }
    document.getElementById("result").textContent = result;
    document.getElementById("score").textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    if(computerScore === 5 || humanScore === 5){
    endGame();
}
}

let rockbtn = document.getElementById("rockbtn");
rockbtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})
let paperbtn = document.getElementById("paperbtn");
paperbtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
let scissorsbtn = document.getElementById("scissorsbtn");
scissorsbtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});



function endGame(){
    const finalResult = humanScore === 5 ? 'You win' : 'You lose'
    document.getElementById('result').textContent = finalResult;
}


