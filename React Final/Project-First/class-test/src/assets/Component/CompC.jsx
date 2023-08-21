import React, { useContext } from 'react'
import { namesContext } from '../../App'
function CompC() {
    let getName = useContext(namesContext)
  return (
    <div>
        <h1> This is Component C</h1>
        <p> Data From App Component My name is :{getName} </p>
    </div>
  )
}

export default CompC