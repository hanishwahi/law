import React from 'react'
// import { Link } from 'react-router-dom'
import Banner1 from '../Images/banner1.jpg'
import Banner2 from '../Images/banner2.jpg'
import Banner3 from '../Images/banner3.jpg'
import Banner4 from '../Images/banner4.jpg'

function Banner() {
  return (
    <>
 <div className="container-fluid pb-4 px-0 ">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner banner-Img">
            <div className="carousel-item active">
              <img src={Banner2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Banner3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item ">
              <img src={Banner4} className="d-block w-100" alt="..." />
            </div>
            
            <div className="carousel-item">
              <img src={Banner1} className="d-block w-100" alt="..." />
            </div>

              

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </>)
}

export default Banner