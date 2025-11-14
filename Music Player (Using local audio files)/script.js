document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const seekBar = document.getElementById('seek-bar');

    playPauseBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    audioPlayer.addEventListener('timeupdate', () => {
        seekBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    });

    seekBar.addEventListener('input', () => {
        audioPlayer.currentTime = (seekBar.value / 100) * audioPlayer.duration;
    });
});
// Note: You need to have a music.mp3 file in the same directory for this to work.
