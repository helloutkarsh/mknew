import React, { useState } from 'react'
import { BrowserRouter as Router,Link, Route, Switch } from 'react-router-dom';
import Sidemenu from './Sidemenu';
import './styling/navbar.css'
const Navbar =()=>{
    const [navLinkOpen, setNavLinkOpen]=useState(false)
    const handleMenu= () =>{
        setNavLinkOpen(!navLinkOpen)
    }
    
    return(
        <>
        <nav>
            <div className="main-menu">
               <button>Menu</button>
            </div>
        <div className="navbar-container">
            <div className="logo">
                <a href="/" className='logo-link'>

                <i className="fas fa-graduation-cap"></i>
                <h4 className="logo-name">MyKlass</h4>
                </a>
                </div>

                
                <ul className="navlinks">
                    
                    <li className="links" ><Link className="alinks"  exact to="/">Dashboard</Link></li>
                    <li className="links" ><Link className="alinks" to="/about">About</Link></li>
                    <li className="links" ><Link className="alinks" to="/more">More</Link></li>
                
                </ul>



                <div className="menu-toggle">
                    <i className="fas fa-bars fa-lg"
                    onClick={handleMenu}></i>
                </div>
                <div className={navLinkOpen?"side-menu-bar active-menu" :"side-menu-bar" }>
                    <Sidemenu/>
                </div>
        </div>
        </nav>
        </>
    )
}
export default Navbar;