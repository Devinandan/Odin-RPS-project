const choices = ["rock","paper","scissors"]
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')


function game() {
    //play the game
    //play 5 rounds
    //console based
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    console.log(computerSelection);
    const winner = Gwinner(playerSelection, computerSelection);
    console.log(winner);
}

function playerChoice () {
    //get input
    let input = prompt("Type Rock, Paper or Scissors");
    while(input == null) {
        input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    console.log(input); 
    return input;
}


function computerChoice () {
    //get random input
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
game();