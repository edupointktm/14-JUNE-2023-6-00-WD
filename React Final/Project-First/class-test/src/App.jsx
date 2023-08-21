import React, { createContext, useState } from 'react'
import CompA from './assets/Component/CompA'
export  let namesContext = createContext();
function App() {
  let [names, updateName]=useState("Prabhat Kumar Mallik")
 
  return (
    <namesContext.Provider value={names}>
    <div>
      <h1> This is App Component and Data is {names}</h1>
      <CompA/>
    </div>
    </namesContext.Provider>
  )
}

export default App


