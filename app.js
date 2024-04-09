let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");

const  msg= document.querySelector("#msg");


let userScoremsg = document.querySelector("#user-score");
let comScoremsg = document.querySelector("#computer-score");



const genComChoice = () => {
    const option = ["rack", "paper,", "scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];

}

const userWins  = (userWin,UserchoiceId,comChoice)=>{
    if(userWin){
        userScore++;
        userScoremsg.innerText = userScore;
        console.log("user wining");
        msg.innerText = `user win the game ${UserchoiceId} beats ${comChoice}`;
        msg.style.backgroundColor = "green";

   }else{
    console.log("user loss");
    compScore++;
    comScoremsg.innerText = compScore;
    msg.innerText = `compuer win the game ${UserchoiceId} beats ${comChoice}`;
    msg.style.backgroundColor = "red";
   }
}
const drawGame = (UserchoiceId,comChoice) => {
    console.log("draw thw game");
    msg.innerText = `draw the game try again! ${UserchoiceId} = ${comChoice}`;
    msg.style.backgroundColor = "#081b31";

}
const playGame = (UserchoiceId) => {
    console.log("user choice", UserchoiceId);

    //Generate the computer choice......

    const comChoice = genComChoice();
    console.log("computer choice", comChoice);


    if (UserchoiceId === comChoice) {
        //draw the game
        drawGame(UserchoiceId,comChoice);
    }else{
        let userWin = true;
        if(UserchoiceId === "rack"){
            userWin = comChoice === "paper" ? false :true;
        }else if(UserchoiceId === "paper"){
            userWin = comChoice === "scissors" ? false :true;
        }else{
            userWin = comChoice === "rack" ? false :true;
        }


        userWins(userWin,UserchoiceId,comChoice);
    }
    
};


choice.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const UserchoiceId = choice.getAttribute("id");
        // console.log("click the action" ,UserchoiceId);
        playGame(UserchoiceId);

    })
})