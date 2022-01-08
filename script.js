let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore= 0;

// BUTTONS // 
const btns = document.querySelectorAll(".btnChoice");
btns.forEach((button)=>{
    button.disabled=false;

    button.addEventListener("click",() =>{
        if (container.contains(welcomeMsg)){
            container.removeChild(welcomeMsg);
            console.log("welcome message removed!");
        }
        playerSelection=button.textContent;
        playRound();
    });
}); 
/*const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener('click', () =>{
    playerSelection="rock";
    console.log("you chose rock");
    console.log(playerSelection);
    playRound();
});
const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener('click', () =>{
    playerSelection="paper";
    console.log("you chose paper");
    console.log(playerSelection);
    playRound();
});
const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener('click', () =>{
    playerSelection="scissors";
    console.log("you chose scissors");
    console.log(playerSelection);
    playRound();
});
*/

// RESULTS //
const container = document.querySelector("#container");
const welcomeMsg = document.querySelector("#welcomeMsg");
const currentPlayerScore = document.querySelector("#currentPlayerScore");
const currentComputerScore = document.querySelector("#currentComputerScore");
const results = document.querySelector("#results");
const btnReplay = document.createElement("button");


function playRound(){


    randomNum();
    computerSelection = computerPlay(); 

        if (playerSelection == computerSelection){
            currentPlayerScore.textContent = "Player Score: " + playerScore;
            currentComputerScore.textContent = "Computer Score: " + computerScore ;
            results.textContent="You both picked " + playerSelection + "! No one gets any points!";


        }else if (playerSelection == "rock" && computerSelection=="paper") {
            computerScore++;
            currentPlayerScore.textContent = "Player Score: " + playerScore;
            currentComputerScore.textContent = "Computer Score: " + computerScore ;
            results.textContent="Paper beats Rock! Computer gets a point! ";

        }else if (playerSelection == "rock" && computerSelection=="scissors") {
            playerScore++;
            currentPlayerScore.textContent = "Player Score: " + playerScore;
            currentComputerScore.textContent = "Computer Score: " + computerScore ;
            results.textContent="Rock beats Scissors! You get a point! ";
            

        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerScore++;
            currentPlayerScore.textContent = "Player Score: " + playerScore;
            currentComputerScore.textContent = "Computer Score: " + computerScore ;
            results.textContent="Scissors beats Paper! Computer gets a point! ";

        } else if (playerSelection == "paper" && computerSelection == "rock"){
            playerScore++;
            currentPlayerScore.textContent = "Player Score: " + playerScore;
            currentComputerScore.textContent = "Computer Score: " + computerScore ;
            results.textContent="Paper beats Rock! You gets a point! ";

        }else if (playerSelection == "scissors" && computerSelection=="rock") {
            computerScore++;
            currentPlayerScore.textContent = "Player Score: " + playerScore;
            currentComputerScore.textContent = "Computer Score: " + computerScore ;
            results.textContent="Rock beats Scissors! Computer gets a point! ";

        }else if (playerSelection == "scissors" && computerSelection == "paper"){
            playerScore++;
            currentPlayerScore.textContent = "Player Score: " + playerScore;
            currentComputerScore.textContent = "Computer Score: " + computerScore ;
            results.textContent="Scissors beats Paper! You get a point! ";

        }


if (playerScore == 5 | computerScore== 5){
    results.textContent = "Game over! the final score is:\nPlayer: "
   + playerScore + "\nComputer: " + computerScore;
   btns.forEach((button)=>{
    button.disabled=true;
   });

    btnReplay.textContent="Play Again";
    document.body.appendChild(btnReplay);
    btnReplay.addEventListener("click", () =>{
        computerScore=0;
        playerScore=0;
        currentPlayerScore.textContent = "Player Score: " + playerScore;
        currentComputerScore.textContent = "Computer Score: " + computerScore ;
        results.textContent='';
        btns.forEach((button)=>{
            button.disabled=false;
        });

});
if (playerScore > computerScore){
    playerScore++;
} else {
    computerScore++;
}
}
function computerPlay(){
    
    if (randomNum()>66) {
        return "rock";
    } else if (randomNum()>33) {
        return "paper";
    } else {
        return "scissors";
    }                
}
function randomNum(){
    
    return Math.floor(Math.random()*100);
                }
            }