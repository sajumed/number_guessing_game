/**
 * Interactive Number Guessing Game
 * Player tries to guess a random number between 1-100
 */

class NumberGuessingGame {
    constructor() {
        this.minRange = 1;
        this.maxRange = 100;
        this.targetNumber = 0;
        this.attempts = 0;
        this.maxAttempts = 10;
        this.gameActive = false;
        this.initializeGame();
    }

    initializeGame() {
        console.log('🎯 Welcome to the Number Guessing Game!');
        console.log(`I'm thinking of a number between ${this.minRange} and ${this.maxRange}`);
        console.log(`You have ${this.maxAttempts} attempts to guess it correctly.\n`);
        this.startNewGame();
    }

    startNewGame() {
        this.targetNumber = Math.floor(Math.random() * (this.maxRange - this.minRange + 1)) + this.minRange;
        this.attempts = 0;
        this.gameActive = true;
        console.log('New game started! Try to guess the number.');
        this.promptUser();
    }

    promptUser() {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`Enter your guess (${this.attempts + 1}/${this.maxAttempts}): `, (input) => {
            readline.close();
            this.processGuess(input);
        });
    }

    processGuess(input) {
        const guess = parseInt(input.trim());

        // Validate input
        if (isNaN(guess)) {
            console.log('❌ Please enter a valid number!\n');
            return this.promptUser();
        }

        if (guess < this.minRange || guess > this.maxRange) {
            console.log(`❌ Please enter a number between ${this.minRange} and ${this.maxRange}!\n`);
            return this.promptUser();
        }

        this.attempts++;
        
        // Check if guess is correct
        if (guess === this.targetNumber) {
            this.endGame(true);
            return;
        }

        // Provide hint
        if (guess < this.targetNumber) {
            console.log('📈 Too low! Try a higher number.\n');
        } else {
            console.log('📉 Too high! Try a lower number.\n');
        }

        // Check if out of attempts
        if (this.attempts >= this.maxAttempts) {
            this.endGame(false);
            return;
        }

        // Continue game
        this.promptUser();
    }

    endGame(isWin) {
        this.gameActive = false;
        
        if (isWin) {
            console.log(`🎉 Congratulations! You guessed the number ${this.targetNumber} in ${this.attempts} attempts!`);
        } else {
            console.log(`💀 Game Over! The number was ${this.targetNumber}. Better luck next time!`);
        }

        this.askToPlayAgain();
    }

    askToPlayAgain() {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('\nWould you like to play again? (y/n): ', (answer) => {
            readline.close();
            
            if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
                console.log('\n'.repeat(2));
                this.startNewGame();
            } else {
                console.log('Thanks for playing! 👋');
                process.exit(0);
            }
        });
    }
}

// Start the game
new NumberGuessingGame();