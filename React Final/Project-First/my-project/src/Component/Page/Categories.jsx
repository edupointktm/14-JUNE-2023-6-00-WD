import React from 'react'
import CatData from '../../CatData'
import ProData from '../../ProData'
import { Link } from 'react-router-dom'
function Categories() {
  return (
    <div>
      <div className="container">
        <div className="row gap-2 py-3 text-center">
          {CatData.map((cd) =>

            <div className="col bg-success text-white py-3 ">{cd}</div>

          )}
        </div>
      </div>
      <div className="container">
        <div className="row">
          {ProData.map((pd) =>
            <div className="col">
              <div className="card" style={{ width: '18rem' }}>

                <Link to={`/productdetails/    ${pd.id}`}><img src={pd.image} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  )
}

export default Categories