class NumberGuessingGame {
    constructor() {
        this.minRange = 1;
        this.maxRange = 100;
        this.targetNumber = 0;
        this.attempts = 0;
        this.maxAttempts = 10;
        this.gameActive = false;
    }

    generateRandomNumber() {
        this.targetNumber = Math.floor(Math.random() * (this.maxRange - this.minRange + 1)) + this.minRange;
    }

    startNewGame() {
        this.generateRandomNumber();
        this.attempts = 0;
        this.gameActive = true;
        console.log(`🎮 New game started! Guess a number between ${this.minRange} and ${this.maxRange}`);
        console.log(`You have ${this.maxAttempts} attempts to guess the correct number.`);
    }

    processGuess(userGuess) {
        if (!this.gameActive) {
            console.log("❌ No active game. Type 'start' to begin a new game.");
            return;
        }

        const guess = parseInt(userGuess);
        
        if (isNaN(guess)) {
            console.log("❌ Please enter a valid number.");
            return;
        }

        this.attempts++;

        if (guess === this.targetNumber) {
            console.log(`🎉 Congratulations! You guessed the correct number ${this.targetNumber} in ${this.attempts} attempts!`);
            this.gameActive = false;
            return true;
        } else if (guess < this.targetNumber) {
            console.log(`📈 Too low! Try a higher number. (Attempt ${this.attempts}/${this.maxAttempts})`);
        } else {
            console.log(`📉 Too high! Try a lower number. (Attempt ${this.attempts}/${this.maxAttempts})`);
        }

        if (this.attempts >= this.maxAttempts) {
            console.log(`💀 Game over! The correct number was ${this.targetNumber}.`);
            console.log("Type 'start' to play again.");
            this.gameActive = false;
        }

        return false;
    }

    showHint() {
        if (!this.gameActive) {
            console.log("❌ No active game. Start a game first.");
            return;
        }

        const range = Math.floor((this.maxRange - this.minRange) / 4);
        if (this.targetNumber <= this.minRange + range) {
            console.log("💡 Hint: The number is in the lower quarter of the range.");
        } else if (this.targetNumber <= this.minRange + range * 2) {
            console.log("💡 Hint: The number is in the lower middle quarter of the range.");
        } else if (this.targetNumber <= this.minRange + range * 3) {
            console.log("💡 Hint: The number is in the upper middle quarter of the range.");
        } else {
            console.log("💡 Hint: The number is in the upper quarter of the range.");
        }
    }

    showStats() {
        console.log(`📊 Game Stats:`);
        console.log(`   Range: ${this.minRange}-${this.maxRange}`);
        console.log(`   Target Number: ${this.gameActive ? '???' : this.targetNumber}`);
        console.log(`   Attempts: ${this.attempts}/${this.maxAttempts}`);
        console.log(`   Game Status: ${this.gameActive ? 'Active' : 'Not Active'}`);
    }
}