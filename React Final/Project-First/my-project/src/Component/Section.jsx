import React from 'react'
import Home from './Page/Home'
import { Route, Routes } from 'react-router-dom'
import Aboutus from './Page/Aboutus'
import Categories from './Page/Categories'
import PagenotFound from './Page/PagenotFound'
import Productdetails from './Page/Productdetails'

function Section() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/aboutus' element={<Aboutus/>}/> 
      <Route path='/categories' element={<Categories/>}/> 
      <Route path='/productdetails/:proid' element={<Productdetails/>}/> 
      <Route path='/*' element={<PagenotFound/>}/> 

    </Routes>
    </>
  )
}

export default Section