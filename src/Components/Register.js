import React from 'react'
import '../css/register.css'
import img21 from '../images/office.svg'
import { Link } from 'react-router-dom'


export default function Register() {
    return (
        <div>
            <Link to="/"> Home Page </Link>
    <div class="container">
      <div class="info">
        <h2>Register</h2>
        <h6>Register Now For Free</h6>
      </div>
      <div class="ill">
        <img src={img21} alt="illustration" />
      </div>
    </div>

    <div class="form">
      <div class="register">
        <form>
          <input type="text" id="fname" placeholder="Name" name="fname" /><br />
          <br />
          <input
            type="text"
            id="lname"
            placeholder="Email"
            name="lname"
          /><br />
          <br />
          <input
            type="password"
            id="lname"
            placeholder="Password"
            name="lname"
          /><br /><br />
          <input type="tel" id="phone" name="phone" placeholder="phone"/><br />

          <br /><button>
            <Link style={{textDecoration: "none" ,color: "white"}} href="/register">
              Register</Link>
            
          </button>
        </form>
      </div>
    </div>
    <div>
      <h5 class="h5"> Have you already Registerd?

        <Link style={{color: "orange"}} to="/login">Login</Link>


      </h5>
      <p  class="para">
         Don't have on account yet? 
      </p>
    </div>
        </div>
    )
}
