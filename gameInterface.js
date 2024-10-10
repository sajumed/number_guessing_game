const readline = require('readline');
const { NumberGuessingGame } = require('./numberGame.js');

class GameInterface {
    constructor() {
        this.game = new NumberGuessingGame();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    displayWelcome() {
        console.log('========================================');
        console.log('    🎯 NUMBER GUESSING GAME 🎯');
        console.log('========================================');
        console.log('Commands:');
        console.log('  start    - Start a new game');
        console.log('  hint     - Get a hint');
        console.log('  stats    - Show game statistics');
        console.log('  quit     - Exit the game');
        console.log('  help     - Show this help message');
        console.log('========================================\n');
    }

    processCommand(input) {
        const command = input.toLowerCase().trim();

        switch (command) {
            case 'start':
                this.game.startNewGame();
                break;

            case 'hint':
                this.game.showHint();
                break;

            case 'stats':
                this.game.showStats();
                break;

            case 'help':
                this.displayWelcome();
                break;

            case 'quit':
                console.log('👋 Thanks for playing! Goodbye!');
                this.rl.close();
                return true;

            case '':
                // Empty input, do nothing
                break;

            default:
                // Try to process as a number guess
                if (!isNaN(parseInt(command))) {
                    this.game.processGuess(command);
                } else {
                    console.log('❌ Unknown command. Type "help" for available commands.');
                }
                break;
        }

        return false;
    }

    start() {
        this.displayWelcome();
        
        const askForInput = () => {
            this.rl.question('\n🎮 Enter your guess or command: ', (input) => {
                const shouldQuit = this.processCommand(input);
                
                if (!shouldQuit) {
                    askForInput();
                }
            });
        };

        askForInput();
    }
}

// Start the game if this file is run directly
if (require.main === module) {
    const gameInterface = new GameInterface();
    gameInterface.start();
}

module.exports = { GameInterface };