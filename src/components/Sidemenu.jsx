import React from 'react'
import './styling/sidemenu.css'
import { BrowserRouter as Router,Link, Route, Switch } from 'react-router-dom';


const Sidemenu = ()=>{
    return (
        <>  

        <div className="side-menu-container">
            <ul className="side-menu">
            
                
                <li className="side-links"><Link className="side-alink" exact to='/'>Dashboard</Link></li>
                <li className="side-links"><Link className="side-alink" to='/about'>About</Link></li>
                <li className="side-links"><Link className="side-alink" to='/more'>More</Link></li>
                <li className="side-links"><Link className="side-alink" to='/'>Link4</Link></li>
                <li className="side-links"><Link className="side-alink" to='/'>Link5</Link></li>
                <li className="side-links"><Link className="side-alink" to='/'>Link6</Link></li>
          
            </ul>
        </div>

        </>
    )
}

export default Sidemenu;