// Constants
const options = ["brick", "cloth", "katana"];
const BRICK = 0;
const CLOTH = 1;
const KATANA = 2;
const ROUND_LENGTH = 5;
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const brickButton = document.querySelector("#brick");
const clothButton = document.querySelector("#cloth");
const katanaButton = document.querySelector("#katana");

const humanScoreUi = document.querySelector("#human-score");
const compScoreUi = document.querySelector("#comp-score");
const resultsContainer = document.querySelector(".results-container");
const statusContainer = document.querySelector("#status-container");


brickButton.addEventListener("click", () => {
    const compChoice = getComputerChoice();

    displayGameStatus(compChoice, "brick");
    playRound(compChoice, "brick");
});

clothButton.addEventListener("click", () => {
    const compChoice = getComputerChoice();

    displayGameStatus(compChoice, "cloth");
    playRound(compChoice, "cloth");
});

katanaButton.addEventListener("click", () => {
    const compChoice = getComputerChoice();

    displayGameStatus(compChoice, "katana");
    playRound(compChoice, "katana");
});

// gameLoop();

// function gameLoop() {
//     const humanChoice = getHumanChoice();
//     const compChoice = getComputerChoice();
//     console.log(`Computer chose ${compChoice}`);
//     console.log(`Human chose ${humanChoice}`);

//     playRound(compChoice, humanChoice);

//     getResults();
// }

function getComputerChoice() {
    const randomNum = Math.round(Math.random() * 10);
    const index = randomNum % 3;

    switch (index) {
        case BRICK:
            return options[BRICK];
        case CLOTH:
            return options[CLOTH];
        case KATANA:
            return options[KATANA];
        default:
            throw new Error("erm what the sigma...");
    }
}

function displayGameStatus(compChoice, humanChoice) {
    let compChoiceUi = document.querySelector("#comp-choice");
    let humanChoiceUi = document.querySelector("#human-choice");
    if (compChoiceUi === null) {
        compChoiceUi = document.createElement("div");
        compChoiceUi.setAttribute("id", "comp-choice");

        humanChoiceUi = document.createElement("div");
        humanChoiceUi.setAttribute("id", "human-choice");

        statusContainer.appendChild(compChoiceUi);
        statusContainer.appendChild(humanChoiceUi);
    }

    compChoiceUi.textContent = `Computer chose ${compChoice}`;
    humanChoiceUi.textContent = `Human chose ${humanChoice}`;
}

function playRound(computerChoice, humanChoice) {
    roundCount++;
    if (computerChoice === humanChoice) {
        displayTie();
    } else if (computerChoice === options[BRICK]) {
        if (humanWon(options[CLOTH], humanChoice, computerChoice)) {
            humanScore++;
            humanScoreUi.textContent = `Human: ${humanScore}`;
        } else {
            computerScore++;
            compScoreUi.textContent = `Computer: ${computerScore}`;
        }
    } else if (computerChoice === options[CLOTH]) {
        if (humanWon(options[KATANA], humanChoice, computerChoice)) {
            humanScore++;
            humanScoreUi.textContent = `Human: ${humanScore}`;
        } else {
            computerScore++;
            compScoreUi.textContent = `Computer: ${computerScore}`;
        }
    } else {
        if (humanWon(options[BRICK], humanChoice, computerChoice)) {
            humanScore++;
            humanScoreUi.textContent = `Human: ${humanScore}`;
        } else {
            computerScore++;
            compScoreUi.textContent = `Computer: ${computerScore}`;
        }
    }
}

function humanWon(requiredWin, humanChoice, computerChoice) {
    if (requiredWin === humanChoice) {
        displayHumanWin(humanChoice, computerChoice)
        return true;
    } else {
        displayComputerWin(humanChoice, computerChoice);
        return false;
    }
}

function displayHumanWin(humanChoice, computerChoice) {
    const statusContainer = document.querySelector("#status-container");
    let statusMessage = document.querySelector("#status-message");
    if (statusMessage === null) {
        statusMessage = document.createElement("div");
        statusMessage.setAttribute("id", "status-message");
        statusContainer.appendChild(statusMessage);
    }
    statusMessage.textContent = `${humanChoice} beats ${computerChoice}!\nThe human won this round!!`;
}

function displayComputerWin(humanChoice, computerChoice) {
    const statusContainer = document.querySelector("#status-container");
    let statusMessage = document.querySelector("#status-message");
    if (statusMessage === null) {
        statusMessage = document.createElement("div");
        statusMessage.setAttribute("id", "status-message");
        statusContainer.appendChild(statusMessage);
    }
    statusMessage.textContent = `${computerChoice} beats ${humanChoice}!\nThe computer won this round(come on you piece of flesh...)!!`;
}

function displayTie() {
    const statusContainer = document.querySelector("#status-container");
    let statusMessage = document.querySelector("#status-message");
    if (statusMessage === null) {
        statusMessage = document.createElement("div");
        statusMessage.setAttribute("id", "status-message");
        statusContainer.appendChild(statusMessage);
    }
    statusMessage.textContent = "It's a tie ¯\\_(ツ)_/¯";
}

function getResults() {
    if (humanScore > computerScore) {
        console.log("The human won! gg");
    } else if (computerScore > humanScore) {
        console.log("The computer won! gg");
    } else {
        console.log("It's a tie, y'all suck!");
    }
}