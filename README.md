## Number Guessing Game

An interactive console-based number guessing game where players try to guess a randomly generated number within a specified range.

### 🚀 How to Use

#### Prerequisites
- Node.js (version 12 or higher)

#### Installation & Running

1. **Save the files** in a directory:
   - `game.js` - Core game logic
   - `consoleInterface.js` - Console interaction handling
   - `index.js` - Main entry point
   - `package.json` - Project configuration

2. **Run the game**:
   ```bash
   node index.js
   ```

   Or if you have the package.json configured:
   ```bash
   npm start
   ```

#### 🎮 Game Commands

- **Enter a number** - Make a guess
- **`status`** - Show current game status (range, attempts, etc.)
- **`new`** - Start a new game with the same range
- **`range <min> <max>`** - Start a new game with custom range
- **`help`** - Show available commands
- **`quit` or `exit`** - Exit the game

#### 🎯 Gameplay Example

```
🎯 Welcome to the Number Guessing Game!
========================================
I'm thinking of a number between 1 and 100
Type "help" for available commands
----------------------------------------
🎯 Enter your guess: 50

📉 Too high! Try a lower number.

🎯 Enter your guess: 25

📈 Too low! Try a higher number.

🎯 Enter your guess: 37

🎉 Congratulations! You guessed the number 37 in 3 attempts!

🔄 Would you like to play again? (y/n): y

🔄 New game started! Guess a number between 1 and 100
```

### 📁 File Structure

- `game.js` - Contains the core game logic with the `NumberGuessingGame` class
- `consoleInterface.js` - Handles console input/output and user interaction
- `index.js` - Main application entry point
- `package.json` - Node.js project configuration

### 🛠 Features

- Random number generation within customizable ranges
- Attempt tracking
- Interactive console interface
- Multiple game commands
- Input validation
- Graceful error handling
- Play again functionality

Enjoy playing! 🎮