
//instantiate new notes object
const notes = new Notes;

// select elements
const btn = document.querySelectorAll('.btn');
btn.forEach(n => {

  n.addEventListener('mousedown', e => {
    const btnDiv = e.target;
    const btnClick = e.type;
    const noteDetails = notes.getClickedDetails(btnDiv);
    noteDetails.active = true;
    notes.playNotes(noteDetails);
    console.log(btnClick)
  })

  n.addEventListener('mouseup', e => {
    const btnDiv = e.target;
    const btnClick = e.type;
    const noteDetails = notes.getClickedDetails(btnDiv);
    noteDetails.active = false;
    notes.playNotes(noteDetails);
    console.log(btnClick)
  })

})


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



