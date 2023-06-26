import React from 'react'
import { MdSearch } from 'react-icons/md'

export default function Search({handleSearch}) {
  return (
    <>
    <div className='search'>
    <MdSearch className='search-icons' size='1.3em'/>
    <input type="text" placeholder='search' onChange={(e)=>handleSearch(e.target.value)} />
    </div>
    </>
  )
}
