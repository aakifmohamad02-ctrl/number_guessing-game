// Game variables

let randomNumber;

let attempts;

let maxAttempts = 10;

let maxNumber;

let score = 0;


// Start game

function startGame() {

    let difficulty =
        document.getElementById("difficulty").value;


    // Difficulty settings

    if (difficulty === "easy") {

        maxNumber = 50;

    }

    else if (difficulty === "medium") {

        maxNumber = 100;

    }

    else {

        maxNumber = 500;

    }


    // Generate random number

    randomNumber =
        Math.floor(Math.random() * maxNumber) + 1;


    attempts = 0;


    // Reset UI

    document.getElementById("attempts").innerText = 0;

    document.getElementById("remaining").innerText =
        maxAttempts;

    document.getElementById("message").innerText =
        `Guess a number between 1 and ${maxNumber} 🎮`;

    document.getElementById("guess").value = "";


    document.getElementById("guess").disabled = false;

    document.querySelector(".game")
        .classList.remove("win");

}


// Check guess

function checkGuess() {

    let guess =
        Number(document.getElementById("guess").value);


    // Empty input

    if (!guess) {

        document.getElementById("message").innerText =
            "⚠️ Please enter a number!";

        return;

    }


    // Invalid number

    if (guess < 1 || guess > maxNumber) {

        document.getElementById("message").innerText =
            `⚠️ Enter a number between 1 and ${maxNumber}`;

        return;

    }


    // Increase attempt

    attempts++;


    document.getElementById("attempts").innerText =
        attempts;


    document.getElementById("remaining").innerText =
        maxAttempts - attempts;


    // Correct answer

    if (guess === randomNumber) {

        let currentScore =
            (maxAttempts - attempts + 1) * 10;


        score += currentScore;


        document.getElementById("score").innerText =
            score;


        document.getElementById("message").innerText =
            `🎉 Correct! Number was ${randomNumber}! +${currentScore} points`;


        document.querySelector(".game")
            .classList.add("win");


        document.getElementById("guess").disabled = true;

    }


    // Guess is low

    else if (guess < randomNumber) {

        document.getElementById("message").innerText =
            "⬆️ Too Low! Try a bigger number.";

    }


    // Guess is high

    else {

        document.getElementById("message").innerText =
            "⬇️ Too High! Try a smaller number.";

    }


    // Game Over

    if (
        attempts >= maxAttempts &&
        guess !== randomNumber
    ) {

        document.getElementById("message").innerText =
            `💀 Game Over! The number was ${randomNumber}`;

        document.getElementById("guess").disabled = true;

    }

}


// Enter key

function enterKey(event) {

    if (event.key === "Enter") {

        checkGuess();

    }

}


// Start first game

startGame();