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

console.log(getComputerChoice());