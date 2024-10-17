let winners = [];
const choices = ["rock","paper","scissors"];

function resetGame(){
    //reset game
}

function startGame() {
    //play the game for 5 rounds
 let imgs = document.querySelectorAll('img')
 imgs.forEach((img) =>
img.addEventListener(('click'), () => {
    if(img.id){
        playRound(img.id);
    }
    })
 );
}

function playRound(playerChoice) {
    let wins = checkWins();
    if(wins >= 5){
        return;
    }
    
    const computerSelection = computerChoice();
    
    const winner = Gwinner(playerSelection, computerSelection);

    winners.push(winner);
    tallyWins();
    displayRound(playerSelection, computerSelection,winner);
    wins = checkWins();
    if(wins==5){
        displayEnd();
    }

}
function displayEnd(){
    let playerWins = winners.filter((item) => item == "Player").length;

    if(playerWins==5){
        document.querySelector('.winner').textContent = `You won 5 games!`;
    } else {
        document.querySelector('.winner').textContent = `Computer won 5 games!`;
    }
    document.querySelector('.reset').style.display = "flex";
}

function displayRound(playerChoice,computerChoice,winner){
    document.querySelector(".playerChoice").textContent = `You chose : ${playerChoice.charAt(0).tuUpperCase() + playerChoice.slice(1)}`
    document.querySelector(".computerChoice").textContent = `You chose : ${computerChoice.charAt(0).tuUpperCase() + computerChoice.slice(1)}`
    document.querySelector(".winner").textContent = `Round Winner : ${winner}`;

}
function tallyWins(){
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winner.sfilter((item) => item == "Tie").length;
    document.querySelector('.playerScore').textContent = `Score: ${pWinCount}`;
    document.querySelector('.computerScore').textContent = `Score: ${cWinCount}`;
    document.querySelector('.ties').textContent = `Score: ${ties}`;

}



function computerChoice () {
    //todo - update the dom with the computer selection
    return choices[Math.floor(Math.random()*choices.length)]
}

function Gwinner(cP, cC){
    if(cP === cC){
        return 'Tie';
    } else if(
        (cP === "rock" && cC === "scissors") ||
        (cP === "paper" && cC === "rock") ||
        (cP === "scissors" && cC === "paper")
    ) {
        return "Player"
      }
      else{
        return "Computer";
      }
}

rockButton.addEventListener('click', () => {
    const computerSelection = computerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
})

paperButton.addEventListener('click', () => {
    const computerSelection = computerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
})
startGame();