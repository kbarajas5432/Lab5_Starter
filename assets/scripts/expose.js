// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img[alt="No image selected"]');
  const audio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  const jsConfetti = new JSConfetti();  // Confetti instance

  // Horn change event
  hornSelect.addEventListener('change', () => {
    const selected = hornSelect.value;
    hornImage.src = `assets/images/${selected}.svg`;
    audio.src = `assets/audio/${selected}.mp3`;
  });

  // Volume slider change event
  volumeSlider.addEventListener('input', () => {
    const value = volumeSlider.value;
    audio.volume = value / 100;  // Volume is 0.0 to 1.0

    if (value == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (value < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (value < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // Play button click
  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();  // Confetti effect
    }
  });
}