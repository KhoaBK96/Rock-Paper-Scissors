let result 
let roundCount = 0

function getComputerChoice(){
    let choice = ["Rock", "Paper", "Scissors"]
    return choice[Math.floor(Math.random()* choice.length)]
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

   
    let resultText;
    if((playerSelection == "rock" && computerSelection == "scissors") 
    || (playerSelection == "scissors" && computerSelection == "paper")
    || (playerSelection == "paper" && computerSelection == "rock") ){
        result = "win"
    } else if ((playerSelection == "scissors" && computerSelection == "rock") 
    || (playerSelection == "paper" && computerSelection == "scissors")
    || (playerSelection == "rock" && computerSelection == "paper") ){
        result = "lose"
    } else {
        result = "tie"
    }
    
    result == "win" ? resultText = `${playerSelection} + " beat " + ${computerSelection}` : (result == "lose" ? resultText = `${computerSelection} + " beat " + ${playerSelection}` : resultText="") 

    return `'You' + ${result} +"! " + ${resultText}`
}

function playGame(){

    let playerPoint = 0
    let computerPoint = 0
    let getPlayerSelection = prompt('Select: Rock, Paper , Scissors')
    let resultRound = playRound(getPlayerSelection, getComputerChoice())
    console.log(resultRound)
    roundCount++
    if (result == "win"){
        playerPoint++
    } else if (result == "lose"){
        computerPoint++
    }

    if(roundCount == 5){
        playerPoint > computerPoint ? console.log("Player is the winner") : (playerPoint < computerPoint ? console.log("computer is the winner") : console.log("Tie"))
    }

    if(roundCount < 5){
        playGame()
    }
}




playGame()