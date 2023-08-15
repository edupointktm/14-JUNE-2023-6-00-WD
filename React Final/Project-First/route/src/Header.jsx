import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <div className="header">
            <div className="container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/category">Category</Link></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header