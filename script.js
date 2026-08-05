let userScore = 0;
let cpuScore = 0;

const choices = ["rock", "paper", "scissors"];

function play(userChoice) {

    const cpuChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === cpuChoice) {

        result = "It's a Draw!";

    } else if (

        (userChoice === "rock" && cpuChoice === "scissors") ||

        (userChoice === "paper" && cpuChoice === "rock") ||

        (userChoice === "scissors" && cpuChoice === "paper")

    ) {

        result = "You Win 🎉";

        userScore++;

    } else {

        result = "Computer Wins 😢";

        cpuScore++;

    }

    document.getElementById("userChoice").innerHTML =
        "Your Choice : " + emoji(userChoice);

    document.getElementById("cpuChoice").innerHTML =
        "Computer : " + emoji(cpuChoice);

    document.getElementById("winner").innerHTML = result;

    document.getElementById("userScore").innerHTML = userScore;

    document.getElementById("cpuScore").innerHTML = cpuScore;

}

function emoji(choice) {

    switch (choice) {

        case "rock":

            return "🪨 Rock";

        case "paper":

            return "📄 Paper";

        case "scissors":

            return "✂️ Scissors";

    }

}