const prompt = require("prompt-sync")();
const array = ["rock", "paper", "scissors", "rock", "paper", "scissors"];

function getComputerChoice() {
    const random = Math.floor(Math.random() * array.length);

    for(let i = 0; i < array.length; i++){
        return array[random];
    }
}
const userInput = prompt("enter a chioce: ");
const playerSelection = userInput.toLowerCase();
const computerSelection = getComputerChoice();
console.log(computerSelection);

function playRound(playerSelection, computerSelection){
    
    if(playerSelection === computerSelection){
        console.log("tie");
    }else if ((playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")){
        console.log("player win's");
    }else{
        console.log("computer win's");
    }
}

function game(rounds) {
    for(let i = 1; i <= 5; i++){
        rounds += 1;
        playRound(playerSelection, computerSelection);
        // return "start a round";
    }
}
game()



