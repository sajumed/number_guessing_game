/**
 * Interactive Number Guessing Game
 * Player tries to guess a randomly generated number within a specified range
 */

class NumberGuessingGame {
    constructor(min = 1, max = 100) {
        this.min = min;
        this.max = max;
        this.secretNumber = this.generateRandomNumber();
        this.attempts = 0;
        this.gameOver = false;
    }

    /**
     * Generate a random number between min and max (inclusive)
     */
    generateRandomNumber() {
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }

    /**
     * Process player's guess
     * @param {number} guess - Player's guess
     * @returns {string} Feedback message
     */
    makeGuess(guess) {
        if (this.gameOver) {
            return "Game over! Please start a new game.";
        }

        this.attempts++;

        if (guess === this.secretNumber) {
            this.gameOver = true;
            return `🎉 Congratulations! You guessed the number ${this.secretNumber} in ${this.attempts} attempts!`;
        } else if (guess < this.secretNumber) {
            return "📈 Too low! Try a higher number.";
        } else {
            return "📉 Too high! Try a lower number.";
        }
    }

    /**
     * Get current game status
     */
    getStatus() {
        return {
            min: this.min,
            max: this.max,
            attempts: this.attempts,
            gameOver: this.gameOver
        };
    }

    /**
     * Reset the game with new parameters
     */
    reset(min = this.min, max = this.max) {
        this.min = min;
        this.max = max;
        this.secretNumber = this.generateRandomNumber();
        this.attempts = 0;
        this.gameOver = false;
        return `New game started! Guess a number between ${min} and ${max}`;
    }
}

module.exports = NumberGuessingGame;