import React from 'react'
import '../css/footer.css'
import img6 from '../images/placeholder.svg';
import img7 from '../images/notification.svg';
import img8 from '../images/search.svg';
import img9 from '../images/shopping-bag.svg';
import img10 from '../images/profile.svg';
import {
    Link
  } from "react-router-dom";
export default function Footer() {
    return (
        <div>
               <div className="footer">
                <div className="foot1">
                    <Link to="/">
                        <img className="footer-icon" src={img6} alt="" />
                        <p>Near Me</p>
                    </Link>
                </div>
                <div className="foot1">
                    <Link to="/">
                        <img className="footer-icon" src={img7} alt="" />
                        <p>Alerts</p>
                    </Link>
                </div>
                <div className="foot1">
                    <Link to="">
                        <img className="footer-icon" src={img8} alt="" />
                        <p>Explore</p>
                    </Link>
                </div>
                <div className="foot1">
                    <Link to="/">
                        <img className="footer-icon" src={img9} alt="" />
                        <p>Cart</p>
                    </Link>
                </div>
                <div className="foot1">
                    <Link to="/profile">
                        <img className="footer-icon" src={img10} alt="" />
                        <p>Account</p>
                    </Link>
                    
                </div>
            </div>  
        </div>
    )
}
