document.addEventListener("DOMContentLoaded", function() { startMediaPlayer(); }, false);

let mediaPlayer;

function startMediaPlayer() {
    mediaPlayer = document.getElementById('video');
    mediaPlayer.controls = false;
}

function togglePlayPause() {
    let btn = document.getElementById('play-pause-button');
    if (mediaPlayer.paused || mediaPlayer.ended) {
       btn.title = 'pause';
       btn.innerHTML = 'pause';
       btn.className = 'pause';
       mediaPlayer.play();
    }
    else {
       btn.title = 'play';
       btn.innerHTML = 'play';
       btn.className = 'play';
       mediaPlayer.pause();
    }
 }
