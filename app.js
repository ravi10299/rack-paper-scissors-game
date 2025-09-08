 const choices = document.querySelectorAll(".choice");
    const msg = document.getElementById("msg");
    const userScoreElem = document.getElementById("user-score");
    const compScoreElem = document.getElementById("computer-score");

    let userScore = 0;
    let compScore = 0;

    const getComputerChoice = () => {
      const options = ["rock", "paper", "scissors"];
      return options[Math.floor(Math.random() * options.length)];
    };

    const playGame = (userChoice) => {
      const compChoice = getComputerChoice();

      if (userChoice === compChoice) {
        msg.textContent = `It's a tie! Both chose ${userChoice}`;
        msg.style.color = "#333";
      } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
      ) {
        userScore++;
        userScoreElem.textContent = userScore;
        msg.textContent = `You win! 🎉 ${userChoice} beats ${compChoice}`;
        msg.style.color = "green";
      } else {
        compScore++;
        compScoreElem.textContent = compScore;
        msg.textContent = `You lose! 😢 ${compChoice} beats ${userChoice}`;
        msg.style.color = "red";
      }

      // Animate message
      msg.parentElement.style.animation = "fadeInUp 0.6s ease";
      setTimeout(() => {
        msg.parentElement.style.animation = "";
      }, 600);
    };

    choices.forEach(choice => {
      choice.addEventListener("click", () => {
        playGame(choice.id);
      });
    });
