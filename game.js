const options = ["brick", "cloth", "katana"];

function getComputerChoice() {
    const randomNum = Math.round(Math.random() * 10);
    const index = randomNum % 3;

    switch (index) {
        case 0:
            return "brick";
        case 1:
            return "cloth";
        case 2:
            return "katana";
        default:
            throw new Error("erm what the sigma...");
    }
}

function getHumanChoice() {
    const choice = prompt("brick, cloth or katana?");

    if (choice == null ) {
        throw new Error("Input something please.");
    }

    const formattedChoice = choice.toLowerCase();
    if (options.find((option) => option == choice) == undefined) {
        throw new Error("Not a valid move bestie :))");
    }

    return formattedChoice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());