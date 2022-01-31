// Global variables
const btn = document.querySelectorAll(".button");
const userScore = document.querySelector(".user-score");
const computerScore = document.querySelector(".computer-score");
const userChoice = document.querySelector(".user-choice");
const computerChoice = document.querySelector(".computer-choice");
const userNumbers = document.querySelector(".user-numbers");
const computerNumbers = document.querySelector(".computer-numbers");
const winner_div = document.querySelector(".winner"); 
const rounds_div = document.querySelector(".rounds"); 
const buttonAppear = document.querySelector(".button"); 

// Initialize variables to 0
let total = 0; 
let totalc = 0;
let usertotal = 0;  
let computertotal = 0;
let ranNum = 0;
let ranNumC = 0;
let rounds = 0;
const userArray = [];
const computerArray = [];

btn.forEach(function(button){
    button.addEventListener('click', usergetNumber);
});

// Run a randomized number from 1-10 whenever user clicks a button and add it 
// to the previous number and display the new total
function usergetNumber(){
    const ranNum = Math.floor(Math.random() * 10)
    usertotal = parseInt(total += ranNum);
    userNumbers.innerHTML = "Your numbers: " + ranNum;

    userArray.push(" " + ranNum);
    userNumbers.innerHTML = "Your numbers: " + userArray;
    
    userScore.innerHTML = "Your total: " + usertotal;
    computergetNumber();
    rounds++
    rounds_div.innerHTML = "Rounds: " + rounds;
    checkWinner();
};

function computergetNumber(){
    const ranNumC = Math.floor(Math.random() * 10)
    computertotal = parseInt(totalc += ranNumC);
    computerNumbers.innerHTML =  "My numbers:" + " " + ranNumC; 

    computerArray.push(" " + ranNumC);
    computerNumbers.innerHTML = "My numbers: " + computerArray;
    
    computerScore.innerHTML = "My total: " + computertotal;
    
}

function checkWinner(){
    if(usertotal === 20) {
        winner_div.innerHTML = "YOU WIN!"   
    }
    else if(usertotal > 20) {
        winner_div.innerHTML = "Too high!"   
    }
    else{
        winner_div.innerHTML = ""   
    }
};


/*

let btn = document.createElement("button");
btn.innerHTML = "Save";
btn.onclick = function () {
  alert("Button is clicked");
};
document.body.appendChild(btn);

*/
