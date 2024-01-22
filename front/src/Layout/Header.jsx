import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"

function Header() {
  return (
   <div className='header__all'>
   <div className='header__top'>
   <div className='header__all__left' >
       <h1><span>PULSE.</span> </h1>
    </div>
     <div className='header__all__links'>
        <Link to="/" style={{color:"yellow"}}>Home</Link>
        <Link to="/Add">Add</Link>
        <Link to="/Wishlist">Wishlist</Link>
        <Link to="/Basket">BAsket</Link>
        {/* <Link to="/">Home</Link> */}

      
    </div>
   
   </div>

   </div>
  )
}

export default Header
