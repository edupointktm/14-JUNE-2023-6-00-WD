import React from "react";
import Header from "./Header";
import Sections from "./Sections";
import Footer from "./Footer";

function App(){
  const names="Prabhat Kumar Mallik"
  const address="Janakpur-10"
  return(
    <>
    
    <Header/>
    <Sections stdname={names} add={address}/>
    <Footer/>
    
    </>
  )
}

export default App