const radio = document.getElementById("radio");
const playPauseButton = document.getElementById("play-pause");
const stopButton = document.getElementById("stop");

playPauseButton.addEventListener("click", () => {
    if (radio.paused) {
        radio.play();
        playPauseButton.textContent = "Pausar";
    } else {
        radio.pause();
        playPauseButton.textContent = "Reproducir";
    }
});

stopButton.addEventListener("click", () => {
    radio.pause();
    radio.currentTime = 0;
    playPauseButton.textContent = "Reproducir";
});