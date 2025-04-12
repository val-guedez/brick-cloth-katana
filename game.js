const options = ["brick", "cloth", "katana"];
const BRICK = 0;
const CLOTH = 1;
const KATANA = 2;

let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const compChoice = getComputerChoice();
console.log(`Computer chose ${compChoice}`);

playRound(compChoice, humanChoice)

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
    } else if (computerChoice === options[BRICK]) {
        if (humanChoice === options[CLOTH]) {
            humanScore++;
            console.log("Cloth beats Brick!\nThe human won this round!!");
        } else {
            computerScore++;
            console.log("Brick beats Katana!\nThe computer won this round(come on you piece of flesh...)!!");
        }
    } else if (computerChoice === options[CLOTH]) {
        if (humanChoice === options[KATANA]) {
            humanScore++;
            console.log("Katana beats Cloth!\nThe human won this round!!");
        } else {
            computerScore++;
            console.log("Cloth beats Brick!\nThe computer won this round(come on you piece of flesh...)!!");
        }
    } else {
        if (humanChoice === options[BRICK]) {
            humanScore++;
            console.log("Brick beats Katana!\nThe human won this round!!");
        } else {
            computerScore++;
            console.log("Katana beats Cloth!\nThe computer won this round(come on you piece of flesh...)!!");
        }
    }
}