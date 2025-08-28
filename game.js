let UserScore=0;
let CompScore=0;
const choices=document.querySelectorAll(".choice");
const Msg=document.querySelector("#Msg");

const userScorePara=document.querySelector("#User-Score");
const compScorePara=document.querySelector("#Comp-Score");

const genCompChoice= () => {
    const options = ["rock" , "paper" , "scissors"]; // string randomly generate kora possible noi but number is possible to generate array ka ander string index ho sakta ha
   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx];
}

const drawGame =() => {
//   console.log("game was draw");
  Msg.innerText= "Game was draw ! paly again";
  Msg.style.backgroundColor ="blue"
}

const showWinner =(userWin, userChoice, compChoice) => {
    if(userWin){
        UserScore++;
        userScorePara.innerText= UserScore;
        Msg.innerText= `you win! Your ${userChoice} beats ${compChoice}`;
        Msg.style.backgroundColor ="green";
    } else{
        CompScore++;
        compScorePara.innerText= CompScore;
        Msg.innerText= `you lose. ${compChoice} beats Your ${userChoice}`;
        Msg.style.backgroundColor ="red";
    }
}

const playGame =(userChoice) =>{
    // console.log("user choice = " , userChoice);
    //generate computer choice;
    const compChoice = genCompChoice();
    // console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    } else {
        let userWin =true;
        if(userChoice === "rock"){
            userWin= compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin= compChoice === "scissors" ? false : true;
        } else {
            userWin= compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
