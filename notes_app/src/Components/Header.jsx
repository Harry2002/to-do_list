import React from 'react'

export default function Header({handleDarkMode}) {
  return (
    <>
    <div className='header'>
    <h1>To-do list</h1>
    <button className='save' onClick={()=>handleDarkMode((prev)=>!prev)}>Night</button>
    </div>
    </>
  )
}
