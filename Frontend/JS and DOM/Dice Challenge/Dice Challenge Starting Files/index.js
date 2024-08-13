var title = document.querySelector("h1");

var imageOne = document.querySelector("img.img1");
var imageTwo = document.querySelector("img.img2");

var playerOne = Math.floor(Math.random() * 6 + 1);
var playerTwo = Math.floor(Math.random() * 6 + 1);

var imageOneValue = "images/dice" + playerOne + ".png";
var imageTwoValue = "images/dice" + playerTwo + ".png";

if (playerOne > playerTwo) {
    title.innerText = "🚩 Player 1 Wins!";
} else if (playerTwo > playerOne) {
    title.innerText = "Player 2 Wins! 🚩";
} else {
    title.innerText = "It's a Draw!";
}

imageOne.setAttribute("src", imageOneValue);
imageTwo.setAttribute("src", imageTwoValue);

