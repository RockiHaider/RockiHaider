import React from 'react'
// import '../App.css'
import img from '../images/1.jpg';
import img1 from '../images/burger.svg';
import img2 from '../images/groceries.svg';
import img3 from '../images/pharma.svg';
import img4 from '../images/ramadan.svg';
import img5 from '../images/documents.svg';
import {
  Link
} from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="heading">
          <p>Delivery to <span className="span"> Home</span></p>
        </div>
        <div className="textbox">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Kya Chahiya?" />
        </div>
      </div>
      {/* slider */}
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style={{height:"200px"}}>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden"></span>
        </button> */}
      </div>
      <marquee className="para">Applicable for one use only</marquee>

      <div className="cards">
        <Link href="/">
          <img className="card-img mar-1" src={img1} alt="" srcset="" />
          <p className="card-para">Food</p></Link>
      </div>

      <div className="cards">
        <Link href="/" >
          <img className="card-img mar-1" src={img2} alt="" srcset="" />
          <p className="card-para">Grocery</p>
        </Link>
      </div>

      <div className="cards">
        <Link href="/">
          <img className="card-img mar-1" src={img3} alt="" srcset="" />
          <p className="card-para">Pharma</p>
        </Link>
      </div>

      <div className="cards">
        <Link href="/">

          <img className="card-img mar-1" src={img4} alt="" srcset="" />
          <p className="card-para">Ramadan</p>
        </Link>
      </div>

      <div className="cheetah">
        <p className="cash">Chetah Cash</p>
        <img className="document" src={img5} alt="wallet" srcset="" />
        <p className="price">Rs.10,000</p>
      </div>
      </div>
  )
}
