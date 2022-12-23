function dice() {

    var a = Math.floor(Math.random() * 6) + 1;
    var b = Math.floor(Math.random() * 6) + 1;

    // Updating the H1

    if (a > b) {
        document.querySelector("h1").innerHTML = "<img class='flag' src='images/red-flag.png' alt='flag'> Player 1 Wins!";
    } else if (b > a) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! <img class='flag' src='images/red-flag.png' alt='flag'>";
    } else {
        document.querySelector("h1").innerHTML = "There's a draw!";
    }

    // DICE 1 - .dice1

    if (a === 1) {
        document.querySelector(".dice1").src = "images/dice1.png";

    } else if (a === 2) {
        document.querySelector(".dice1").src = "images/dice2.png";

    } else if (a === 3) {
        document.querySelector(".dice1").src = "images/dice3.png";

    } else if (a === 4) {
        document.querySelector(".dice1").src = "images/dice4.png";

    } else if (a === 5) {
        document.querySelector(".dice1").src = "images/dice5.png";

    } else if (a === 6) {
        document.querySelector(".dice1").src = "images/dice6.png";

    } else {
        document.querySelector(".dice1").src = "images/dice6.png";
    }

    // DICE 2 - .dice2

    if (b === 1) {
        document.querySelector(".dice2").src = "images/dice1.png";

    } else if (b === 2) {
        document.querySelector(".dice2").src = "images/dice2.png";

    } else if (b === 3) {
        document.querySelector(".dice2").src = "images/dice3.png";

    } else if (b === 4) {
        document.querySelector(".dice2").src = "images/dice4.png";

    } else if (b === 5) {
        document.querySelector(".dice2").src = "images/dice5.png";

    } else if (b === 6) {
        document.querySelector(".dice2").src = "images/dice6.png";

    } else {
        document.querySelector(".dice2").src = "images/dice6.png";
    }

    // DICE 3 - .dice3

    if (a === 1) {
        document.querySelector(".dice3").src = "images/dice1.png";

    } else if (a === 2) {
        document.querySelector(".dice3").src = "images/dice2.png";

    } else if (a === 3) {
        document.querySelector(".dice3").src = "images/dice3.png";

    } else if (a === 4) {
        document.querySelector(".dice3").src = "images/dice4.png";

    } else if (a === 5) {
        document.querySelector(".dice3").src = "images/dice5.png";

    } else if (a === 6) {
        document.querySelector(".dice3").src = "images/dice6.png";

    } else {
        document.querySelector(".dice3").src = "images/dice6.png";
    }

    // DICE 4 - .dice4

    if (b === 1) {
        document.querySelector(".dice4").src = "images/dice1.png";

    } else if (b === 2) {
        document.querySelector(".dice4").src = "images/dice2.png";

    } else if (b === 3) {
        document.querySelector(".dice4").src = "images/dice3.png";

    } else if (b === 4) {
        document.querySelector(".dice4").src = "images/dice4.png";

    } else if (b === 5) {
        document.querySelector(".dice4").src = "images/dice5.png";

    } else if (b === 6) {
        document.querySelector(".dice4").src = "images/dice6.png";

    } else {
        document.querySelector(".dice4").src = "images/dice6.png";
    }

    a = undefined;
    b = undefined;
}