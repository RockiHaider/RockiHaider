import React from 'react'
import '../css/profile.css'
import img00 from "../images/Path.svg" 
import img01 from '../images/search.svg'
import img11 from '../images/male.svg'
import img12 from "../images/Icon_Edit-Profile.svg" 
import img13 from "../images/Icon_Location.svg" 
import img14 from "../images/Icon_Wishlist.svg" 
import img15 from "../images/Icon_Order.svg" 
import img16 from "../images/Icon_Order.svg" 
import img17 from "../images/Icon_Payment.svg" 
import img18 from "../images/Icon_Alert.svg" 
import img19 from "../images/Icon_Exit.svg" 
import { Link } from 'react-router-dom'




export default function Profile() {
    return (
        <div>
             <div class="container">
        <div class="account wid-100">
            <h2 class="acc-heading">Account</h2>
            <img class="search" src={img01} alt="search" srcset=""/>
        </div>
        <div class="picture wid-100">
            <div class="img">
                <img class="wid-media" src={img11} alt="male" srcset=""/>
            </div>
<div class="text">
    <h2 class="text-media">Dr.MIRCHU</h2>
    <p class="text-media">dr.mirchu@gmail.com</p>
</div>
        </div>
        <div class="icons wid-100">
<div class="edit">
<img src={img12} alt="profile" srcset="" class="a"/>  <p class="edit-para">Edit Profile</p>
<img src={img00} alt="" srcset="" class="b" style={{marginLeft:"50%"}}/> 
</div>

<div class="edit">
    <img src={img13} alt="profile" srcset="" class="a" /> 
    <p class="edit-para">Shipping Adress</p>
    <img src={img00} alt="" srcset="" class="b" style={{marginLeft:"39%"}}/> 
</div>

<div class="edit">
    
        
    <img  src={img14} alt="profile" srcset="" class="a"/> 
    <Link  to ="/wishlist" class="edit-para">Wishlist</Link>
    <img src={img00} alt="" srcset="" class="b" style={{marginLeft:"56%"}}/> 
</div>
<div class="edit">
    
        
    <img  src={img15} alt="profile" srcset="" class="a"/> 
    <Link  to="/myorder" class="edit-para">Order</Link>
    <img src={img00} alt="" srcset="" class="b" style={{marginLeft:"45%"}}/> 
</div>



<div class="edit">
    <img src={img16} alt="profile" srcset="" class="a"/> 
    <p class="edit-para">Track Order</p>
    <img src={img00} alt="" srcset="" class="b" style={{marginLeft:"48%"}}/> 
</div>

<div class="edit">
    <img src={img17} alt="profile" srcset="" class="a"/> 
    <p class="edit-para">Cards</p>
    <img src={img00} alt="" srcset="" class="b" style={{marginLeft:"60%"}}/> 
</div>

<div class="edit">
    <img src={img18} alt="profile" srcset="" class="a"/> 
    <p class="edit-para">Notifications</p>
    <img src={img00} alt="" srcset="" class="b" style={{marginLeft:"47%"}}/> 
</div>

<div class="edit">
    <img src={img19} alt="profile" srcset="" class="a"/> 
    <Link to="/register" class="edit-para">Log Out</Link>
    <img src={img00} alt="" srcset="" class="b" style={{marginLeft:"55%"}}/> 
</div>
        </div>
    </div>
    </div>

    )
}
