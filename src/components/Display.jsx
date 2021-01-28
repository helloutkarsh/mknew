import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './styling/display.css'
import Home from './Home'
import Contact from './Contact'
import Timetable from './Timetable'
import Calender from './Calender'
import About from './About';

const Display=()=>{
    return(<>
            <div className="main-container">
                <div className="main-box">
                    <div className="box" id="box1">floating text area</div>
                    <div className="box" id="box2">
                        <div className="maindisplay">

    <Switch>    
                <Route path="/home" component={Home} exact />
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/timetable" component={Timetable} />
                <Route path="/calender" component={Calender} />
            </Switch>
            </div>
    </div>

                   
                        
                    <div className="box" id="box3">some random info here</div>
                    <div className="box" id="box4">

                        <ul className="links-side">
                            <li>Link 1</li>
                            <li>Link 2</li>
                            <li>Link 3</li>
                            <li>Link 4</li>
                            <li>Link 5</li>
                        </ul>


                    </div>
                    </div>
                </div>
           
        </>
    )
}

export default Display;