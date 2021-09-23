import React from 'react'
import '../css/wishlist.css'
import img41 from '../images/chevron-left (2).svg'
import img42 from '../images/ghobi.png'
import img43 from '../images/orange-star.svg'
import img44 from '../images/onion.png'
import img45 from '../images/injeer.png'
import { Link } from 'react-router-dom'

export default function Wishlist() {
    return (
        <div>
            <div class="container">
                <div class="heading">
                    <Link to='/profile'>
                        <img src={img41} alt="arrow" srcset="" />
                    </Link>

                    <h4>My Wishlist</h4>
                </div>

                <div class="images">
                    <div class="pics">
                        <img class="ghobi" src={img42} alt="" srcset="" />
                    </div>
                    <div class="info">
                        <div class="info-heading">
                            <h5>Broccoli</h5>
                        </div>
                        <div class="info-price">
                            <p class="info-para">
                                160 rupees Per/kg
                            </p>

                        </div>
                        <div class="shine-star">

                            <img class="star" src={img43} alt="" srcset="" />
                            <img class="star" src={img43} alt="" srcset="" />
                            <img class="star" src={img43} alt="" srcset="" />
                            <img class="star" src={img43} alt="" srcset="" />
                            <img class="star" src={img43} alt="" srcset="" />
                        </div>
                        <div class="detail">
                            <p>Pick up from organic farms </p>
                        </div>
                        <div class="add-page">
                            <div class="design">
                                <button class="btn" id="inc" onclick="add()"> + </button>
                                <p id="counter" ></p>
                                <button class="btn" id="inc" onclick="sub()"> - </button>
                            </div>
                        </div>
                        <div class="green-btn">
                            <button class="add-btn" id="">Add</button>
                        </div>
                    </div>
                </div>
                <div class="images">
                    <div class="pics">
                        <img class="ghobi" src={img44} alt="" srcset="" />
                    </div>
                    <div class="info">
                        <div class="info-heading">
                            <h5>Onion</h5>
                        </div>
                        <div class="info-price">
                            <p class="info-para">
                                160 Per/ kg
                            </p>
                        </div>
                        <div class="shine-star">
                            <img class="star" src={img43} alt="" srcset="" />
                            <img class="star" src={img43} alt="" srcset="" />
                            <img class="star" src={img43} alt="" srcset="" />
                            <img class="star" src={img43} alt="" srcset="" />
                            <img class="star" src={img43} alt="" srcset="" />
                        </div>
                        <div class="detail">
                            <p>Pick up from organic farms </p>
                        </div>
                        <div class="add-page">
                            <div class="design">
                                <button class="btn" id="inc" onclick="add()"> + </button>
                                <p id="counter" ></p>
                                <button class="btn" id="inc" onclick="sub()"> - </button>
                            </div>
                        </div>
                        <div class="green-btn">
                            <button class="add-btn" id="">Add</button>
                        </div>
                    </div>
                </div>
                <div class="images">
                    <div class="pics">
                        <img class="ghobi" src={img45} alt="" srcset="" />
                    </div>
                    <div class="info">
                        <div class="info-heading">
                            <h5>Anjeer</h5>
                        </div>
                        <div class="info-price">
                            <p class="info-para">
                                160 Per/ kg
                            </p>
                        </div>
                        <div class="shine-star">
                            <img class="star" src={img43} alt="" srcset="" />
                            <img class="star" src={img43} alt="" srcset="" />
                            <img class="star" src={img43} alt="" srcset="" />
                            <img class="star" src={img43} alt="" srcset="" />
                            <img class="star" src={img43} alt="" srcset="" />
                        </div>
                        <div class="detail">
                            <p>Pick up from organic farms </p>
                        </div>
                        <div class="add-page">
                            <div class="design">
                                <button class="btn" id="inc" onclick="add()"> + </button>
                                <p id="counter" ></p>
                                <button class="btn" id="inc" onclick="sub()"> - </button>
                            </div>
                        </div>
                        <div class="green-btn">
                            <button class="add-btn" id="">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
