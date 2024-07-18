var crash = document.querySelector(".w");
var kickBass = document.querySelector(".a");
var snare = document.querySelector(".s");
var tom1 = document.querySelector(".d");
var tom2 = document.querySelector(".j");
var tom3 = document.querySelector(".k");
var tom4 = document.querySelector(".l");

var drumButtons = document.querySelectorAll(".drum");

function addAudio(audioFile) {
    var audio = new Audio(audioFile);
    audio.play();
}

function playSound(key) {
    switch(key) {
        case "w":
            addAudio("sounds/tom-1.mp3");
            break;

        case "a":
            addAudio("sounds/tom-2.mp3");
            break;

        case "s":
            addAudio("sounds/tom-3.mp3");
            break;

        case "d":
            addAudio("sounds/tom-4.mp3");
            break;

        case "j":
            addAudio("sounds/snare.mp3");
            break;

        case "k":
            addAudio("sounds/crash.mp3");
            break;

        case "l":
            addAudio("sounds/kick-bass.mp3");
            break;

        default:
            console.log(drum.innerHTML);
    }
}

for(var drum of drumButtons) {

    drum.addEventListener("click", function() {

        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);

    });
}

document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(button) {
    var activeButton = document.querySelector("." + button);

    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
}
