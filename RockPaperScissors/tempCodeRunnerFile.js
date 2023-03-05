const prompt = require("prompt-sync")();
const array = ["rock", "paper", "scissors", "rock", "paper", "scissors"];
const score = 0; 

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