import React from 'react'
import { useParams } from 'react-router-dom'
import ProData from '../../ProData'
function Productdetails() {
  let { proid } = useParams()
  // let pData = ProData.find((d) = d.id == proid)
  return (
    <div>
      <div className="container">
        <h1>
          productdetails 
        </h1>
        {pData.map((data) =>
        <div className="row">
           

          <div className="col-lg-2"> 
          <img src="" alt="" /></div>
          <div className="col-lg-7">
            <h1> </h1>
          </div>
          <div className="col-lg-3"></div>

        </div>
         )} 
      </div>
    </div>
  )
}

export default Productdetails