const options = ["brick", "cloth", "katana"];

function getComputerChoice() {
    const index = (Math.random() * 10) % 3;

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