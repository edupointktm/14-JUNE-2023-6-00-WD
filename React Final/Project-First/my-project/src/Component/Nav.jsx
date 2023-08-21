import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>
         <div className="nav">
            <div className="container py-2">
                <div className="row">
                    <div className="col">
                       
                        <ul>
                            <li><Link to ='/'>Home</Link></li>
                            <li><Link to ='/categories'> Categories</Link></li>
                            <li> <Link to='/aboutus'> About Us</Link></li>
                            <li><Link to='#'> Contact Us</Link></li>
                        </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Nav