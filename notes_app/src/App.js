import { useEffect, useState } from "react";
import "./App.css";
import Notelist from "./Components/Notelist";
import { nanoid } from "nanoid";
import Search from "./Components/Search";
import Header from "./Components/Header";

function App() {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: "This is my first note", date: "15/04/2020" },
    { id: nanoid(), text: "This is my second note", date: "16/04/2020" },
    { id: nanoid(), text: "This is my third note", date: "17/04/2020" },
  ]);
  const [searchText,setSearch]=useState('');
  const [darkMode,setDarkMode]=useState(false)
  useEffect(() => {
    const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data'));
    if(savedNotes){
      setNotes(savedNotes);
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes));
  }, [notes])
  
const addNote=(text)=>{
// console.log(text)
const date=new Date();
const newNote={
  id:nanoid(),
  text:text,
  date:date.toLocaleDateString()
}
const newNotes=[...notes,newNote];
setNotes(newNotes);
}
const deleteNote=(id)=>{
const newNotes=notes.filter((note)=> note.id !==id)
setNotes(newNotes)
}
  return (
    <div className="back">
    <div className={`${darkMode && 'dark-mode'}`}>
    <Header handleDarkMode={setDarkMode}/>
    <Search handleSearch={setSearch}/>
      <div className="container ">
        <Notelist notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote
        }/>
      </div>
    </div>
        </div>
  );
}

export default App;
