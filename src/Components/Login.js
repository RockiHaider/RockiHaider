import React from 'react'
import '../css/login.css'
import img51 from '../images/logo.png'
import img52 from '../images/Icon_Facebook.svg'
import img53 from '../images/icons8_Google_2.svg'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            
    <div class="container">

<div class="appinfo">


<div class="text">
<img src={img51} alt=""/>
<p> FoodPharma </p>
</div>


</div>

<div class="form-card">

    <h4>Welcome</h4>
    <p>Sign up to get started and experience</p>
<p> great shopping deals</p>
    <div class="textbox">
<i class="fas fa-user"></i>
    <input type="text" placeholder="Username "/>
</div>
<div class="textbox">
<i class="fas fa-lock"></i>
    <input type="text" placeholder="Password "/>
</div>
<button>
            <a style={{textDecoration: "none",color: "rgb(255, 255, 255)"}} href="index.html">
              Login</a>
          </button>
</div>
 <div class="facebook">
            <p class="or"> -OR-</p>
            <div class="card1">
                <a href="#">
                <img id="imgid" src={img52} alt="burger"/>
                <p id="all">Sign in with Facebook</p>
           </a>
            </div>
            <div class="card1">
                <a href="#">
                <img id="imgid" src={img53} alt="burger"/>
                <p id="all">Sign in with Google</p>
            </a>
            </div>
        <div class="register">
              
                {/* <!-- <img id="imgid" src="images/icons8_Google_2.svg" alt="burger"> --> */}
                <p>Don't have an account?<Link to="/register">Register</Link> </p>
            
            </div>
                 
    </div>
        </div> 

        </div>
    )
}
