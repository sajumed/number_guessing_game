#!/usr/bin/env node

/**
 * Main entry point for the Number Guessing Game
 */

const ConsoleInterface = require('./consoleInterface.js');

// Handle process termination
process.on('SIGINT', () => {
    console.log('\n\n👋 Game interrupted. Thanks for playing!');
    process.exit(0);
});

// Start the game
try {
    const game = new ConsoleInterface();
    game.start();
} catch (error) {
    console.error('❌ Error starting the game:', error.message);
    process.exit(1);
}