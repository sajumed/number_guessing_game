const NumberGuessingGame = require('./numberGame.js');
const readline = require('readline');

/**
 * Console interface for the Number Guessing Game
 */
class GameInterface {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.game = null;
        this.setupGame();
    }

    /**
     * Initialize game with user-specified range
     */
    setupGame() {
        console.log("🎯 Welcome to the Number Guessing Game! 🎯\n");
        
        this.rl.question("Enter the minimum number (default: 1): ", (minInput) => {
            this.rl.question("Enter the maximum number (default: 100): ", (maxInput) => {
                const min = minInput ? parseInt(minInput) : 1;
                const max = maxInput ? parseInt(maxInput) : 100;
                
                if (isNaN(min) || isNaN(max) || min >= max) {
                    console.log("❌ Invalid range! Using default range 1-100.");
                    this.game = new NumberGuessingGame();
                } else {
                    this.game = new NumberGuessingGame(min, max);
                }
                
                console.log(`\n🎮 Game started! Guess a number between ${this.game.min} and ${this.game.max}`);
                console.log("💡 Type 'help' for available commands\n");
                this.startGameLoop();
            });
        });
    }

    /**
     * Main game loop
     */
    startGameLoop() {
        this.promptGuess();
    }

    /**
     * Prompt user for input
     */
    promptGuess() {
        this.rl.question("\nEnter your guess: ", (input) => {
            this.processInput(input.trim().toLowerCase());
        });
    }

    /**
     * Process user input and execute commands
     */
    processInput(input) {
        switch (input) {
            case 'help':
                this.showHelp();
                break;
            case 'hint':
                console.log(this.game.getHint());
                break;
            case 'status':
                this.showStatus();
                break;
            case 'new':
                console.log(this.game.reset());
                break;
            case 'quit':
            case 'exit':
                this.quitGame();
                return;
            default:
                this.handleGuess(input);
        }
        
        if (input !== 'quit' && input !== 'exit') {
            this.promptGuess();
        }
    }

    /**
     * Handle number guess input
     */
    handleGuess(input) {
        const guess = parseInt(input);
        
        if (isNaN(guess)) {
            console.log("❌ Please enter a valid number or command.");
            return;
        }

        const result = this.game.makeGuess(guess);
        console.log(result);

        if (this.game.gameOver) {
            this.rl.question("\nPlay again? (y/n): ", (answer) => {
                if (answer.toLowerCase() === 'y') {
                    console.log(this.game.reset());
                    this.promptGuess();
                } else {
                    this.quitGame();
                }
            });
        }
    }

    /**
     * Display help information
     */
    showHelp() {
        console.log(`
📋 Available Commands:
- [number]     : Make a guess
- hint         : Get a hint (even/odd)
- status       : Show game status
- new          : Start a new game
- help         : Show this help message
- quit/exit    : Quit the game
        `);
    }

    /**
     * Display current game status
     */
    showStatus() {
        const status = this.game.getStatus();
        console.log(`
📊 Game Status:
- Range: ${status.min} to ${status.max}
- Attempts: ${status.attempts}
- Game Over: ${status.gameOver ? 'Yes' : 'No'}
        `);
    }

    /**
     * Clean up and exit game
     */
    quitGame() {
        console.log("\n👋 Thanks for playing! Goodbye!");
        this.rl.close();
    }
}

// Start the game if this file is run directly
if (require.main === module) {
    new GameInterface();
}

module.exports = GameInterface;