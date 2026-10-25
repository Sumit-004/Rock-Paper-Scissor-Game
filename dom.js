let userScore = 0;
let comScore = 0;
const user = document.querySelectorAll(".element")
const message = document.querySelector("#msg")
const uScorePara = document.querySelector("#user-score")
const cScorePara = document.querySelector("#comp-score")

const com = () => {
    const gameElement = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return gameElement[ranIdx];
}

const result = (userWin, userChoice, comChoice) => {
    if (userWin) {
        message.innerHTML = `You Win! Your ${userChoice} beat Computer's ${comChoice}`;
        message.style.backgroundColor = "green"
        userScore++;
        uScorePara.innerText = userScore;

    } else {
        message.innerHTML = `You Lose! Computer's ${comChoice} beat Your ${userChoice}`;
        message.style.backgroundColor = "Red"
        comScore++;
        cScorePara.innerText = comScore;
    }
}

const drawCond = () => {
    message.innerHTML = "Game Draw !"
    message.style.backgroundColor = "black"
}

const playGame = (userChoice) => {
    const comChoice = com();

    if (userChoice === comChoice) {
        drawCond();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = comChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = comChoice === "rock" ? true : false;
        }
        else {
            userWin = comChoice === "rock" ? false : true;
        }
        result(userWin, userChoice, comChoice);
    }
}


user.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})

