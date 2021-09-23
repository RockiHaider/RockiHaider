import React from 'react'
import '../css/order.css'
import img31 from '../images/star-black.svg'
import img32 from '../images/chevron-left (2).svg'
import img33 from '../images/ghobi.png'
import img34 from '../images/left-arrow-black.svg'
import img35 from '../images/onion.png'
import img36 from '../images/left-arrow-black.svg'
import img37 from '../images/injeer.png'
import img38 from '../images/left-arrow-black.svg'
import { Link } from 'react-router-dom'


export default function MyOrder() {
    return (
        <div>
            <div class="container">
                <div class="heading">
                    <Link to='/profile'><img src={img32} alt="arrow" srcset=""/>
                    </Link>
                    <h4>My Order</h4>
                </div>

                <div class="images">
                    <div class="pics">
                        <img class="ghobi" src={img33} alt="" srcset="" />
                    </div>
                    <div class="info">
                        <div class="info-heading">
                            <h5>Broccoli</h5>
                            <img class="arrow" src={img34} alt="" srcset="" />
                        </div>
                        <div class="shine-star">

                            <img class="star" src={img31} alt="" srcset="" />
                            <img class="star" src={img31} alt="" srcset="" />
                            <img class="star" src={img31} alt="" srcset="" />
                            <img class="star" src={img31} alt="" srcset="" />
                            <img class="star" src={img31} alt="" srcset="" />
                        </div>
                        <div class="detail">
                            <p>Rate this Product </p>
                            <h5>Delivered on 24 Feb 2021.</h5>
                        </div>
                    </div>
                </div>


                <div class="images">
                    <div class="pics">
                        <img class="ghobi" src={img35} alt="" srcset="" />
                    </div>
                    <div class="info">
                        <div class="info-heading">
                            <h5>Onion</h5>
                            <img class="arrow" src={img36} alt="" srcset="" />
                        </div>
                        <div class="shine-star">

                            <img class="star" src={img31} alt="" srcset="" />
                            <img class="star" src={img31} alt="" srcset="" />
                            <img class="star" src={img31} alt="" srcset="" />
                            <img class="star" src={img31} alt="" srcset="" />
                            <img class="star" src={img31} alt="" srcset="" />
                        </div>
                        <div class="detail">
                            <p>Rate this Product </p>
                            <h5>Delivered on 24 Feb 2021.</h5>
                        </div>
                    </div>
                </div>


                <div class="images">
                    <div class="pics">
                        <img class="ghobi" src={img37} alt="" srcset="" />
                    </div>
                    <div class="info">
                        <div class="info-heading">
                            <h5>Anjeer</h5>
                            <img class="arrow" src={img38} alt="" srcset="" />
                        </div>
                        <div class="shine-star">

                            <img class="star" src={img31} alt="" srcset="" />
                            <img class="star" src={img31} alt="" srcset="" />
                            <img class="star" src={img31} alt="" srcset="" />
                            <img class="star" src={img31} alt="" srcset="" />
                            <img class="star" src={img31} alt="" srcset="" />
                        </div>
                        <div class="detail">
                            <p>Rate this Product </p>
                            <h5>Delivered on 24 Feb 2021.</h5>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
