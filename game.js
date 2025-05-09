// Constants
const options = ["brick", "cloth", "katana"];
const BRICK = 0;
const CLOTH = 1;
const KATANA = 2;
const ROUND_LENGTH = 5;
let humanScore = 0;
let computerScore = 0;

gameLoop();

function gameLoop() {
    for (let i = 0; i < ROUND_LENGTH; i++) {
        const humanChoice = getHumanChoice();
        const compChoice = getComputerChoice();
        console.log(`Computer chose ${compChoice}`);
        console.log(`Human chose ${humanChoice}`);

        playRound(compChoice, humanChoice);
    }

    getResults();
}

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

function getHumanChoice() {
    let choice = prompt("brick, cloth or katana?");

    if (choice === null ) {
        throw new Error("Input something please.");
    }

    choice = choice.trim();
    choice = choice.toLowerCase();
    if (options.find((option) => option === choice) === undefined) {
        throw new Error("Not a valid move bestie :))");
    }

    return choice;
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie ¯\\_(ツ)_/¯");
        console.log("----------------------------------------------------------------");
    } else if (computerChoice === options[BRICK]) {
        humanWon(options[CLOTH], humanChoice, computerChoice) ? humanScore++ : computerScore++;
    } else if (computerChoice === options[CLOTH]) {
        humanWon(options[KATANA], humanChoice, computerChoice) ? humanScore++ : computerScore++;
    } else {
        humanWon(options[BRICK], humanChoice, computerChoice) ? humanScore++ : computerScore++;
    }
}

function humanWon(requiredWin, humanChoice, computerChoice) {
    if (requiredWin === humanChoice) {
        console.log(`${humanChoice} beats ${computerChoice}!\nThe human won this round!!`);
        console.log("----------------------------------------------------------------");
        return true;
    } else {
        computerScore++;
        console.log(`${computerChoice} beats ${humanChoice}!\nThe computer won this round(come on you piece of flesh...)!!`);
        console.log("----------------------------------------------------------------");
        return false;
    }
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