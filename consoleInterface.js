const readline = require('readline');
const NumberGuessingGame = require('./game.js');

/**
 * Console interface for the Number Guessing Game
 */
class ConsoleInterface {
    constructor() {
        this.game = new NumberGuessingGame();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    /**
     * Display welcome message and game instructions
     */
    displayWelcome() {
        console.log('🎯 Welcome to the Number Guessing Game!');
        console.log('========================================');
        console.log(`I'm thinking of a number between ${this.game.min} and ${this.game.max}`);
        console.log('Type "help" for available commands');
        console.log('----------------------------------------');
    }

    /**
     * Display help information
     */
    displayHelp() {
        console.log('\n📖 Available Commands:');
        console.log('  - Enter a number to make a guess');
        console.log('  - "status" - Show current game status');
        console.log('  - "new" - Start a new game with current range');
        console.log('  - "range <min> <max>" - Start new game with custom range');
        console.log('  - "help" - Show this help message');
        console.log('  - "quit" or "exit" - Exit the game\n');
    }

    /**
     * Process user input
     * @param {string} input - User input
     */
    processInput(input) {
        const trimmedInput = input.trim().toLowerCase();

        switch (trimmedInput) {
            case 'help':
                this.displayHelp();
                break;

            case 'status':
                const status = this.game.getStatus();
                console.log(`\n📊 Game Status:`);
                console.log(`   Range: ${status.min} - ${status.max}`);
                console.log(`   Attempts: ${status.attempts}`);
                console.log(`   Game Over: ${status.gameOver ? 'Yes' : 'No'}\n`);
                break;

            case 'new':
                console.log(`\n🔄 ${this.game.reset()}\n`);
                break;

            case 'quit':
            case 'exit':
                console.log('\n👋 Thanks for playing! Goodbye!');
                this.rl.close();
                return;

            default:
                if (trimmedInput.startsWith('range ')) {
                    this.handleRangeCommand(trimmedInput);
                } else {
                    this.handleGuess(trimmedInput);
                }
        }

        if (trimmedInput !== 'quit' && trimmedInput !== 'exit') {
            this.promptUser();
        }
    }

    /**
     * Handle range command to set custom range
     * @param {string} input - Range command input
     */
    handleRangeCommand(input) {
        const parts = input.split(' ');
        if (parts.length !== 3) {
            console.log('❌ Invalid range format. Use: range <min> <max>');
            return;
        }

        const min = parseInt(parts[1]);
        const max = parseInt(parts[2]);

        if (isNaN(min) || isNaN(max) || min >= max) {
            console.log('❌ Invalid range. Please provide valid numbers where min < max');
            return;
        }

        console.log(`\n🔄 ${this.game.reset(min, max)}\n`);
    }

    /**
     * Handle number guess
     * @param {string} input - User's guess
     */
    handleGuess(input) {
        const guess = parseInt(input);

        if (isNaN(guess)) {
            console.log('❌ Please enter a valid number or command');
            return;
        }

        const result = this.game.makeGuess(guess);
        console.log(`\n${result}\n`);

        if (this.game.gameOver) {
            this.promptPlayAgain();
        }
    }

    /**
     * Prompt user to play again after winning
     */
    promptPlayAgain() {
        this.rl.question('🔄 Would you like to play again? (y/n): ', (answer) => {
            if (answer.toLowerCase().startsWith('y')) {
                console.log(`\n${this.game.reset()}\n`);
                this.promptUser();
            } else {
                console.log('\n👋 Thanks for playing! Goodbye!');
                this.rl.close();
            }
        });
    }

    /**
     * Prompt user for input
     */
    promptUser() {
        this.rl.question('🎯 Enter your guess: ', (input) => {
            this.processInput(input);
        });
    }

    /**
     * Start the game
     */
    start() {
        this.displayWelcome();
        this.promptUser();
    }
}

module.exports = ConsoleInterface;