let human = document.querySelector(".human");
let computer = document.querySelector(".computer");
let win = document.querySelector(".win");
let lose = document.querySelector(".lose");
let draw = document.querySelector(".draw");
// for play function for human and computer
function play(x){
    let choice = ["rock", "paper", "scissors"];
    let result = Math.floor(Math.random(choice)*3);
    let computerChoice = choice[result];
    let answer;
    // determine win lose and tie
    if(x == computerChoice){
        answer = "draw";
    } else if(
        (x == "rock" && computerChoice == "scissors")||
        (x == "paper" && computerChoice == "rock")||
        (x == "scissors" && computerChoice == "paper")
    ){
        answer = "win";
    }else{
        answer = "lose";
    }
    console.log(x);
    console.log(computerChoice);
    console.log(answer);
    // display to human and computer
    human.innerHTML = "Human choice is : "+ x.toUpperCase();
    computer.innerHTML = "Computer choice is : "+ computerChoice.toUpperCase();
    // display win lop and tie hidden and display
    if( answer == "draw"){
        win.classList.add("hidden");
        lose.classList.add("hidden");
        draw.classList.remove("hidden"); 
    }else if(answer == "win"){
        win.classList.remove("hidden");
        lose.classList.add("hidden");
        draw.classList.add("hidden");
    }else if(answer == "lose"){
        win.classList.add("hidden");
        lose.classList.remove("hidden");
        draw.classList.add("hidden");
    }
}