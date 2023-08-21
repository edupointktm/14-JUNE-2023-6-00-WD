import React, { useCallback, useState } from 'react'

function App() {
let [names, updateName]=useState('pkm')
let [imgname, updateImgName]=useState('')
  
let getName=(e)=>{
    updateName(e.target.value)
  }
  let fetchName=(e)=>{
    e.preventDefault();
    updateImgName(names)
  }
  return (
    <div>
      <h1>My name is : {imgname}</h1>
      <form onSubmit={fetchName}>
      <input type='text' name='names' onChange={getName}></input>
      <button type="submit">Get</button> <br/><br/>
      
      <img src={`https://source.unsplash.com/user/erondu?${imgname}`} alt="" width="25%" />
      </form>
    </div>
  )
}

export default App