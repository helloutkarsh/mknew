import React from 'react'
import { Redirect } from 'react-router';
import { BrowserRouter as Router,Link, Route, Switch } from 'react-router-dom';
import './styling/footer.css'
const Footer = ()=>{
    return(
        <>
        <div className="footer">
            <div className="site-blocks">
                <div className="social">

            <a className="site-links" href="https://t.me/myklassorg" target="_blank">
                <i className="icon fab fa-telegram-plane"> <h4>Telegram </h4></i>
            </a>
             
            <a className="site-links" href="https://www.twitter.com/myklass" target="_blank">
                <i className="icon fab fa-twitter"> <h4>Twitter </h4></i>
            </a>
               

            <a className="site-links" href="https://www.instagram/myklass" target="_blank">
                <i className="icon fab fa-instagram"> <h4>Instagram</h4></i>
            </a></div>

                <div className="other-links">
                    <ul><Router>
                        <Link to="/"><li>About</li></Link>
                        <Link to="/"><li>Partners</li></Link>
                        <Link to="/"><li>About</li></Link>
                        <Link to="/"><li>Blogs</li></Link>
                        </Router>
                    </ul>
                </div>
                
            </div>
            <div className="email">
                <p>Reach us </p>  <i class="fas icon fa-envelope-open-text"/><code>myklass@email.com</code>
                </div>
                <div className="foot">
                  &#169; pyuriti foundation | All Rights Reserved. 2021
                </div>
            </div>
            
                
        </>
    )
}
export default Footer;