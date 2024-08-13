var expectedSequence = [];
var playerSequence = [];

function checkIfCorrectColor() {
    if (playerSequence.at(-1) === expectedSequence[playerSequence.length - 1]) {
        if (playerSequence.length === expectedSequence.length) {
            advanceLevel();
            return true;
        } else {
            return true;
        }
    } else {
        gameOver();
        return false;
    };
}

function advanceLevel() {
    addRandomColorToSequence();
    playerSequence.length = 0;
    setTimeout(indicateExpectedTile, 800);
    $("h1").text("Level " + expectedSequence.length);
}

function gameOver() {
    $("h1").text("Game Over, Press Any Key to Restart");
    expectedSequence.length = 0;
    playerSequence.length = 0;
    playSound("sounds/wrong.mp3");

    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over")
    }, 200);
}

function playSound(audioFile) {
    var audio = new Audio(audioFile);
    audio.play();
}

function getRandomColor() {
    var randomColor = $(".row div")[Math.floor(Math.random() * 4)];
    return randomColor.id;
}

function addRandomColorToSequence() {
    expectedSequence.push(getRandomColor());
}

function indicateExpectedTile() {
    let color = expectedSequence.at(-1);

    playSound("sounds/" + color + ".mp3");

    $("." + color).addClass("fadeOut");
    setTimeout(function() {
        $("." + color).removeClass("fadeOut")
    }, 200);
}

$(document).keypress(function() {
    if (expectedSequence.length === 0) {
        advanceLevel();
    }
})

$(".btn").click(function(btn) {
    playerSequence.push(btn.target.id);

    checkIfCorrectColor();

    btn.target.classList.add("pressed");
        setTimeout(function() {
            btn.target.classList.remove("pressed")
        }, 100);

    playSound("sounds/" + btn.target.id + ".mp3");
})