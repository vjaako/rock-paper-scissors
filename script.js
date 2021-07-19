console.log("Terve scripti");

//function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

//in function, Assing random number to a variable from 0 to 100
//If number is <= 33 return "rock", if 34-66 its paper, if 67-100 its scissors

function computerPlay(){
    let result = Math.floor((Math.random() * 100 + 1));
    if (result <= 33){
        return 'rock';
    } else if (result > 33 && result <= 66){
        return 'paper';
    } else {
        return 'scissors';
    }
}

//function that plays a single round of Rock Paper Scissors. 
//The function should take two parameters - the playerSelection and 
//computerSelection - and then return a string that declares the 
//winner of the round like so: "You Lose! Paper beats Rock"

//Create function that takes two paramiters player and computer
//player paramiter will be a typed in function call, and Computer paramiter will be the result computerPlay function
//Go through all of the compinations with if statements: 
//If playerSel is 'rock' and compSel is 'paper', return "You Lose! Paper beats Rock"

//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

//Create a variable to have playerSelection converted toLowerCase.

function singleRound(playerSelection, computerSelection){
    //console.log("player selection: " + playerSelection);
    //console.log("computer selection: " + computerSelection);
    var player = playerSelection.toLowerCase();
    if (player == 'rock' && computerSelection == 'paper'){
        return 'You Lose! Paper beats Rock';
    } else if (player == 'rock' && computerSelection == 'scissors'){
        return 'You Win! Rock beats Scissors';
    } else if (player == 'rock' && computerSelection == 'rock'){
        return 'It\'s a Tie. Rock against Rock.';
    } else if (player == 'paper' && computerSelection == 'scissors'){
        return 'You Lose! Scissors beats Paper';
    } else if (player == 'paper' && computerSelection == 'rock'){
        return 'You Win! Paper beats Rock';
    } else if (player == 'paper' && computerSelection == 'paper'){
        return 'It\'s a Tie. Paper against Paper.';
    } else if (player == 'scissors' && computerSelection == 'rock'){
        return 'You Lose! Rock beats Scissors';
    } else if (player == 'scissors' && computerSelection == 'paper'){
        return 'You Win! Scissors beats Paper';
    } else if (player == 'scissors' && computerSelection == 'scissors'){
        return 'It\'s a Tie. Scissors against Scissors.';
    } else {
        return 'Oops, you misspelled. Try again.'
    }
}
let playerSelection = 'Rock';
let computerSelection = computerPlay();
//console.log(singleRound(playerSelection, computerSelection));

// Write a NEW function called game(). Use the previous function inside 
// of this one to play a 5 round game that keeps score and reports a winner 
// or loser at the end. 

//Function game
//Five rounds with user input between

//Function to show current score and round with string
//variable to keep score for player
//variable to keep score for computer
//variable to show current round
//string to announce the winner

function game(){
    let playerSelection = prompt('Round 1: Rock, Paper or Scissors');
    let computerSelection = computerPlay();
    let round = singleRound(playerSelection, computerSelection)
    console.log(round);

    playerSelection = prompt('Round 2: Rock, Paper or Scissors');
    computerSelection = computerPlay();
    round = singleRound(playerSelection, computerSelection);
    console.log(round);

    playerSelection = prompt('Round 3: Rock, Paper or Scissors');
    computerSelection = computerPlay();
    round = singleRound(playerSelection, computerSelection);
    console.log(round);

    playerSelection = prompt('Round 4: Rock, Paper or Scissors');
    computerSelection = computerPlay();
    round = singleRound(playerSelection, computerSelection);
    console.log(round);

    playerSelection = prompt('Round 5: Rock, Paper or Scissors');
    computerSelection = computerPlay();
    round = singleRound(playerSelection, computerSelection);
    console.log(round);
}
game();