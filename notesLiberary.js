const audioContext = new AudioContext()

class Notes {
  constructor() {
    this.NOTE_DETAILS = [
      { note: 'C', key: 'Z', frequency: 261.626, active: false },
      { note: 'Db', key: 'S', frequency: 277.183, active: false },
      { note: 'D', key: 'X', frequency: 293.665, active: false },
      { note: 'Eb', key: 'D', frequency: 311.127, active: false },
      { note: 'E', key: 'C', frequency: 329.628, active: false },
      { note: 'F', key: 'V', frequency: 349.228, active: false },
      { note: 'Gb', key: 'G', frequency: 369.994, active: false },
      { note: 'G', key: 'B', frequency: 391.995, active: false },
      { note: 'Ab', key: 'H', frequency: 415.305, active: false },
      { note: 'A', key: 'N', frequency: 440, active: false },
      { note: 'Bb', key: 'J', frequency: 466.164, active: false },
      { note: 'B', key: 'M', frequency: 493.883, active: false }
    ]
  }
  getNoteDetails(pressedKey) {
    return this.NOTE_DETAILS.find(n => `Key${n.key}` === pressedKey)
  }

  getClickedDetails(div) {
    let noteObject = {};

    this.NOTE_DETAILS.forEach(n => {
      const keyElement = document.querySelector(`[data-note="${n.note}"]`)
      if (keyElement.className === div.className)
        noteObject = n;
    });
    return noteObject;

  }


  playNotes(noteDetails) {
    this.NOTE_DETAILS.forEach(n => {
      const keyElement = document.querySelector(`[data-note="${n.note}"]`)
      keyElement.classList.toggle('active', n.active);
      if (n.oscillator != null) {

        n.oscillator.stop();
        n.oscillator.disconnect();
      }
    });

    //filter the active notes
    const activeNotes = this.NOTE_DETAILS.filter(n => n.active);
    const gain = 1 / activeNotes.length
    activeNotes.forEach(n => startNote(n, gain))
  }


}

function startNote(noteDetails, gain) {
  const gainNode = audioContext.createGain();
  gainNode.gain.value = gain
  const oscillator = audioContext.createOscillator();
  oscillator.frequency.value = noteDetails.frequency;
  oscillator.type = 'sine';
  oscillator.connect(gainNode).connect(audioContext.destination);
  oscillator.start();
  noteDetails.oscillator = oscillator;

}