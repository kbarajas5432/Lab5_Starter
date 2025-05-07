// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const faceImg = document.querySelector('img');

  let voices = [];

  // Load available voices
  function populateVoices() {
    voices = synth.getVoices();
    for (const voice of voices) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    }
  }

  // Some browsers load voices asynchronously
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  } else {
    populateVoices(); // fallback
  }

  // Speak when button is clicked
  button.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    const selectedVoiceName = voiceSelect.value;

    for (const voice of voices) {
      if (voice.name === selectedVoiceName) {
        utterance.voice = voice;
        break;
      }
    }

    // Open mouth
    faceImg.src = 'assets/images/smiling-open.png';

    // When done speaking, go back to smile
    utterance.addEventListener('end', () => {
      faceImg.src = 'assets/images/smiling.png';
    });

    synth.speak(utterance);
  });
}