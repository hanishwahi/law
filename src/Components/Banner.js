import React from 'react'
// import { Link } from 'react-router-dom'
import Banner1 from '../Images/banner1.jpg'
import Banner2 from '../Images/banner2.jpg'
import Banner3 from '../Images/banner3.jpg'
import Banner4 from '../Images/banner4.jpg'

function Banner() {
  return (
    <>

      {/* <div className="container-fluid pb-4" style={{background:"#052963"}}>
            <div className="container py-5">
                <div className="row text-center py-3  banner-content">
                    <h1 className="text-white fw-bold">Free Legal Advice Online <br/>
                            From Top Rated Lawyers</h1>
                    <p>Choose from over 10,000 lawyers across 700+ cities in India</p>
                </div>
                <div className='row justify-content-center'>
                          <div className='col-md-4 col-lg-3 col-sm-6 col-12 text-end mb-3'>
                            <Link to={"/"} className="btn btn-outline-light shadow-none w-100">TALK TO A LAWYER</Link>
                          </div>
                          <div className='col-md-4 col-lg-3 col-sm-6 col-12'>
                          <Link to={"/"} className="btn btn-outline-light shadow-none w-100">ASK A FREE QUESTION</Link>
                          </div>
                </div>
            </div>
</div> */}

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