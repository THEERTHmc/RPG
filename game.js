const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');
const commands = ['look', 'go', 'attack', 'inventory', 'help'];
let playerLocation = 'start';

function displayMessage(message) {
    outputElement.innerHTML += `<p>${message}</p>`;
}

function processInput() {
    const input = inputElement.value.toLowerCase();
    inputElement.value = '';

    displayMessage(`<strong>Command:</strong> ${input}`);

    if (commands.includes(input)) {
        executeCommand(input);
    } else {
        displayMessage("<em>Invalid command. Type 'help' for a list of commands.</em>");
    }
}

function executeCommand(command) {
    switch (command) {
        case 'look':
            displayMessage('You look around. Nothing unusual.');
            break;
        case 'go':
            displayMessage('You go forward.');
            break;
        case 'attack':
            displayMessage('You swing your weapon, but there is nothing to attack.');
            break;
        case 'inventory':
            displayMessage('You have nothing in your inventory.');
            break;
        case 'help':
            displayMessage('<strong>Available Commands:</strong> look, go, attack, inventory, help');
            break;
        default:
            displayMessage("<em>Invalid command. Type 'help' for a list of commands.</em>");
    }
}
