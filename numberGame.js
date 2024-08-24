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
            return "Game is already over! Start a new game to play again.";
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
     * Start a new game with the same range
     */
    reset() {
        this.secretNumber = this.generateRandomNumber();
        this.attempts = 0;
        this.gameOver = false;
        return `🔄 New game started! Guess a number between ${this.min} and ${this.max}`;
    }

    /**
     * Get a hint (tells if number is even/odd)
     */
    getHint() {
        return `💡 Hint: The number is ${this.secretNumber % 2 === 0 ? 'even' : 'odd'}.`;
    }
}

module.exports = NumberGuessingGame;