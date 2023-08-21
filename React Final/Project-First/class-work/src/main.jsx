import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const names="Prabhat Kumar Mallik"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App na={names}/>
  </React.StrictMode>,
)

