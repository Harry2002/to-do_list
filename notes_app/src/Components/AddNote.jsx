import React, { useState } from "react";

export default function AddNote({handleAddNote}) {
  const [noteText,setText]=useState('');
  const characterLimit=200
  const handleChange=(e)=>{
  //  console.log(e.target.value);
  if(characterLimit-e.target.value.length>=0)
  {
    setText(e.target.value);
  }
  }
  const handleSave=()=>{
    if(noteText.trim().length>0){
      handleAddNote(noteText)
      setText('');// after adding new note empty strings
    }
  }
  return (
    <div className="note new">
      <textarea rows="8" cols="10" placeholder="Type to add note" onChange={handleChange} value={noteText}></textarea>
      <div className="footer">
        <small>{characterLimit-noteText.length} Remaining</small>
        <button className="save" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
