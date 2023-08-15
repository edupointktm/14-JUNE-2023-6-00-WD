import React from 'react'
import  Data  from './Data'
import { Link } from 'react-router-dom'
function Home() {

  return (
    <div className='section'>
        <h1> Student Name List</h1>
        <ul>
            {Data.map((d)=>
            <li><Link to={`/studentdetails/${d.id}`}> {d.names}</Link></li>
            )}
        </ul>
    </div>
  )
}

export default Home