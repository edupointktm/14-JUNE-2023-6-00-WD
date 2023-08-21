import React from 'react'
import { useParams } from 'react-router-dom'
import ProData from '../../ProData'
function Productdetails() {
  let {proid}=useParams();
  let pData = ProData.find((d)=>d.id==proid)
  
  return (
    <div>
      <div className="container">
        <h2>
          productdetails  
        </h2>
        
        <div className="row">
           

          <div className="col-lg-2"> 
          <img src={pData.image} alt="" class="image-fluid image" /></div>
          <div className="col-lg-7">
            <h1> {pData.title}</h1>
            <p> {pData.description}</p>
            <h3>{pData.price}</h3>
            <button class="btn btn-success">Buy</button> <button class="btn btn-primary">Add Cart</button>
          </div>
          <div className="col-lg-3"></div>

        </div>
   
      </div>
    </div>
  )
}

export default Productdetails