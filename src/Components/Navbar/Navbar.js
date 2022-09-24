import React from 'react'
import './navbar.css'
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className='navbar2 navbar_fixed'>
       <div className="navbarleft">
        <span>Nilesh</span>
       </div>
       <div className="navbarright">
         <ul className='navbaritem'>
            <Link
            smooth={true} duration={500} className="nav-link" to="home">Home</Link>
            <Link smooth={true}
                duration={500}
                className="nav-link"
                to="about">About</Link>
            <Link
            smooth={true}
            duration={1000}
            className="nav-link"
            to="project">Project</Link>
           <Link
            smooth={true}
            duration={1000}
            className="nav-link"
            to="contact"><button className='secondary-button'> Contact</button></Link>
         </ul>
       </div>
      
    </div>
  )
}

export default Navbar
