let choices = document.querySelectorAll(".choice");
let userScore = 0;
let compScore = 0 ;
msg = document.querySelector("#msg");
 let yourScore = document.querySelector("#user-score")
 let computerScore = document.querySelector("#comp-score")



const genCode = () =>{
    const options = ["rock", "paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx]   ; 
};

showWinner = (userWin)=>{
if(userWin){
    console.log("You Win")
    msg.innerText = "You Win"
    userScore++;
   yourScore.innerText = userScore;
   
    


}else{
    console.log("You Lose")
    msg.innerText = ("You Lose")
    compScore++;
    computerScore.innerText = compScore;


}
}

const compGame = (userChoice)=>{
    console.log("userChoice = " , userChoice);
    const compChoice = genCode();
    console.log("Computer choice =  " , compChoice);
    if (userChoice === compChoice){
        console.log("Match is Draw")
        msg.innerText = "Match is Draw"
    }
   
    else {
        let userWin = true;
        if (userChoice==="rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice==="paper"){
            userWin = compChoice==="scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        
        showWinner(userWin);
    }
   

}
choices.forEach((choice)=> {
    //console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
//console.log("Choice was clicked" , userChoice);
compGame(userChoice);
    })
    

})
