import React from 'react'
import '../css/item.css'
import img31 from '../images/star-black.svg'
import img62 from '../images/ghobi.png'
import img63 from '../images/gaajer.jpg'
import img64 from '../images/lemon.jpg'

export default function Slider2() {
    return (
        <div>
             <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="main">
                <div className="first">
                <div className="veg">
                    <img src={img62} className="pic"/>
                </div>
                <div className="space">
        
                </div>
                <div className="veg1">
                    <img src={img63} className="pic"/>
                </div>
                <div className="veg2">
                    <img src={img64} className="pic"/>
                </div>
                </div>
                <div className="second">
                    <div className="details">
                        <img src={img31} className="pic1"/>
                        <h3>borcoli</h3>
                        <h6>190per/kg</h6>
                    </div>
                    <div className="space">
        
                    </div>
                    <div className="details1">
                        <img src={img31} className="pic1"/>
                        <h3>carrot</h3>
                        <h6>190per/kg</h6>
                    </div>
                    <div className="details2">
                        <img src={img31} className="pic1"/>
                        <h3>lemon</h3>
                        <h6>190per/kg</h6>
                    </div>
                </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="main">
                <div className="first">
                <div className="veg">
                <img src={img62} className="pic"/>

                </div>
                <div className="space">
        
                </div>
                <div className="veg1">
                <img src={img63} className="pic"/>

                </div>
                <div className="veg2">
                <img src={img64} className="pic"/>
                </div>
                </div>
                <div className="second">
                    <div className="details">
                        <img src={img31} className="pic1"/>
                        <h3>borcoli</h3>
                        <h6>190per/kg</h6>
                    </div>
                    <div className="space">
        
                    </div>
                    <div className="details1">
                        <img src={img31} className="pic1"/>
                        <h3>carrot</h3>
                        <h6>190per/kg</h6>
                    </div>
                    <div className="details2">
                        <img src={img31} className="pic1"/>
                        <h3>lemon</h3>
                        <h6>190per/kg</h6>
                    </div>
                </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="main">
                <div className="first">
                <div className="veg">
                    <img src={img62} className="pic"/>
                </div>
                <div className="space">
        
                </div>
                <div className="veg1">
                    <img src={img63} className="pic"/>
                </div>
                <div className="veg2">
                    <img src={img64} className="pic"/>
                </div>
                </div>
                <div className="second">
                    <div className="details">
                        <img src={img31} className="pic1"/>
                        <h3>borcoli</h3>
                        <h6>190per/kg</h6>
                    </div>
                    <div className="space">
        
                    </div>
                    <div className="details1">
                        <img src={img31} className="pic1"/>
                        <h3>carrot</h3>
                        <h6>190per/kg</h6>
                    </div>
                    <div className="details2">
                        <img src={img31} className="pic1"/>
                        <h3>lemon</h3>
                        <h6>190per/kg</h6>
                    </div>
                </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    )
}
