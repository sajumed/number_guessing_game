/**
 * Configuration file for the Number Guessing Game
 * Easily customize game settings here
 */

const GameConfig = {
    // Game difficulty settings
    MIN_RANGE: 1,
    MAX_RANGE: 100,
    MAX_ATTEMPTS: 10,
    
    // Game messages
    MESSAGES: {
        WELCOME: '🎯 Welcome to the Number Guessing Game!',
        INSTRUCTIONS: 'I\'m thinking of a number between',
        INVALID_INPUT: '❌ Please enter a valid number!',
        OUT_OF_RANGE: '❌ Please enter a number within the range!',
        TOO_LOW: '📈 Too low! Try a higher number.',
        TOO_HIGH: '📉 Too high! Try a lower number.',
        WIN: '🎉 Congratulations! You guessed the number',
        LOSE: '💀 Game Over! The number was',
        PLAY_AGAIN: 'Would you like to play again? (y/n):',
        GOODBYE: 'Thanks for playing! 👋'
    },
    
    // Game colors (for future terminal color support)
    COLORS: {
        SUCCESS: '\x1b[32m', // Green
        ERROR: '\x1b[31m',   // Red
        WARNING: '\x1b[33m', // Yellow
        INFO: '\x1b[36m',    // Cyan
        RESET: '\x1b[0m'     // Reset
    }
};

module.exports = GameConfig;