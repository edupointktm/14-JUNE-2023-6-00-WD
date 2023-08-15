import React from 'react'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Categori from './Categori'
import PageNotFound from './PageNotFound'
import StudentDetails from './StudentDetails'

function Sections() {
  return (
    <>
        
            

           
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/category' element={<Categori/>}/>
                    <Route path='/studentdetails/:stdid' element={<StudentDetails/>}/>
                    <Route path='/*' element={<PageNotFound/>}/>
                </Routes>
            
           
    </>
  )
}

export default Sections 