document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const seekBar = document.getElementById('seek-bar');

    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            video.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    video.addEventListener('timeupdate', () => {
        seekBar.value = (video.currentTime / video.duration) * 100;
    });

    seekBar.addEventListener('input', () => {
        video.currentTime = (seekBar.value / 100) * video.duration;
    });
});
// Note: You need to have a video.mp4 file in the same directory for this to work.
