import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header">
         <Link to="/">Home</Link>
         <Link to="/category">Categories</Link>
        </div>
    )
}

export default Header
