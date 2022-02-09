
//instantiate new notes object
const notes = new Notes;

// select elements


//keydown event listener
document.addEventListener('keydown', e => {

  if (e.repeat) return

  const pressedKey = e.code;

  const noteDetails = notes.getNoteDetails(pressedKey);

  if (noteDetails == undefined) return

  noteDetails.active = true;

  notes.playNotes(noteDetails)

})

//keyup event listener
document.addEventListener('keyup', e => {

  const pressedKey = e.code;

  const noteDetails = notes.getNoteDetails(pressedKey);;

  if (noteDetails == null) return

  noteDetails.active = false;

  notes.playNotes(noteDetails)
})



