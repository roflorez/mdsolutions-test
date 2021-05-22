document.addEventListener("DOMContentLoaded", function() { startMediaPlayer(); }, false);

let mediaPlayer;
let btn = document.getElementById('play-pause-button');

function startMediaPlayer() {
    mediaPlayer = document.getElementById('video');
    mediaPlayer.controls = false;
}

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".open__modal");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


function togglePlayPause() {
    if (mediaPlayer.paused || mediaPlayer.ended) {
       btn.title = 'pause';
       btn.className = 'pause';
       mediaPlayer.play();
    }
    else {
       btn.title = 'play';
       btn.className = 'play';
       mediaPlayer.pause();
    }
 }
