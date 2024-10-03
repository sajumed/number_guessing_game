## Number Guessing Game

A simple interactive console game where players try to guess a randomly generated number.

### 🎮 How to Play

1. **Setup**: Ensure you have Node.js installed on your computer
2. **Installation**: No additional packages required - uses only Node.js built-in modules
3. **Start the Game**: Run the game using one of the following commands:
   ```bash
   node game.js
   ```
   or if you have the package.json:
   ```bash
   npm start
   ```

### 🎯 Game Rules

- The computer generates a random number between 1 and 100
- You have 10 attempts to guess the correct number
- After each guess, you'll receive feedback:
  - "Too low!" if your guess is below the target number
  - "Too high!" if your guess is above the target number
- If you guess correctly within 10 attempts, you win!
- If you use all 10 attempts without guessing correctly, you lose

### 🛠️ Features

- **Input Validation**: Handles invalid inputs gracefully
- **Hint System**: Provides directional hints (too high/too low)
- **Attempt Tracking**: Shows current attempt count
- **Play Again**: Option to restart the game after completion
- **Customizable**: Easy to modify game settings in `game-config.js`

### 📁 File Structure

- `game.js` - Main game logic and user interaction
- `game-config.js` - Configuration file for game settings
- `package.json` - Project configuration (optional)

### 🔧 Customization

You can easily modify the game by editing `game-config.js`:
- Change the number range (MIN_RANGE, MAX_RANGE)
- Adjust the number of attempts (MAX_ATTEMPTS)
- Customize game messages

### 🎲 Example Game Session

```
🎯 Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100
You have 10 attempts to guess it correctly.

Enter your guess (1/10): 50
📉 Too high! Try a lower number.

Enter your guess (2/10): 25
📈 Too low! Try a higher number.

Enter your guess (3/10): 37
🎉 Congratulations! You guessed the number 37 in 3 attempts!

Would you like to play again? (y/n): n
Thanks for playing! 👋
```

Enjoy the game! 🎮