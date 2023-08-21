import React from 'react'
import CatData from '../../CatData'
import ProData from '../../ProData'
import { Link } from 'react-router-dom'
function Home() {


    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="head"><h3>Categories</h3></div>
                            <div className="cat-item">
                                <ul>
                                    {CatData.map((d) =>
                                        <li><a href="#">{d}</a></li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="slide">
                                <img src="https://icms-image.slatic.net/images/ims-web/c8baba30-94a0-4ad3-bea1-a61d707c053f.jpg_1200x1200.jpg" className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3"> Advertise</div>
                    </div>
                </div>
            </div>

            {/* Product List */}

            <div className="section">
                <div className="container py-5">
                    <h1> Prodcut List</h1>

                    <div className="row">

                        {ProData.map((pro) =>
                            <div className="col-lg-3">
                                <div className="card" style={{ width: '18rem' }}>
                                    <Link to = {`/productdetails/    ${pro.id}`}> <img src={pro.image} className="card-img-top" height="50%" alt="..." /></Link>
                                    <div className="card-body">
                                        <h5 className="card-title">{pro.title}</h5>
                                        <p className="card-text">{pro.description.substring(0, 50)}</p>
                                        <p>Price : Rs {pro.price}</p>
                                        <a href="#" className="btn btn-primary"><Link to ={`/productdetails/    ${pro.id}`}> Details </Link></a>
                                    </div>
                                </div>
                            </div>
                        )}





                    </div>
                </div>
            </div>
        </>
    )
}

export default Home