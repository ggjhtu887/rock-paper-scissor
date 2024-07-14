let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")


const userScorepara = document.querySelector("#user-score")
const computerScore = document.querySelector("#comp-score")


const genCompChoice = () => {
   const options = ["rock","paper","scissors"];
   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx];
};

const drawgame = () =>{
  console.log("game was draw");
  msg.innerText = "draw"
  msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userchoice,comchoice) => {
       if(userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `you win ${userchoice} beats ${comchoice}`;
        msg.style.backgroundColor = "green";
       } else {
        compScore++;
        computerScore.innerText = compScore
        msg.innerText = `you lose ${comchoice} beats ${userchoice}`
        msg.style.backgroundColor = "red";
       }
}

const playgame = (userchoice) => {
  console.log("user choice=",userchoice);
  const comchoice = genCompChoice();
  console.log("comp choice=", comchoice);
  if(userchoice === comchoice){
  drawgame();
  } else {
    let userWin = true;
    if(userchoice === "rock"){
      userWin = comchoice === "paper" ? false : true;
    } else if(userchoice === "paper"){
      userWin = comchoice === "scissors" ? false : true;
    } else {
     userWin = comchoice === "rock" ? false : true
    }
    showWinner(userWin , userchoice , comchoice)
  }
 }

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () =>{
    const choicrId = choice.getAttribute("id");
  console.log("choice wad made" , choicrId);
  playgame(choicrId)
  })
})