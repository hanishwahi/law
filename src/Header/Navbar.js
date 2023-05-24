import React from 'react'
import { Link } from 'react-router-dom'
import Logo2 from '../Images/Logo2.png'

function Navbar() {

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };

      const scrollToAbout = () => {
        window.scrollTo({
            top: 500,
            behavior: 'smooth'
        });
    };
      const scrollToPractice = () => {
        window.scrollTo({
            top: 1010,
            behavior: 'smooth'
        });
    };
      const scrollToTeam = () => {
        window.scrollTo({
            top: 1670,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className="container-fluid bg-white sticky-top  border-bottom">
                <div className="container">
                    <div className="row align-items-center py-3">
                        <div className="col-lg-1 col-md-8 col-sm-9 col-7">
                            <Link onClick={scrollToTop} to="/"><img style={{ width: "60px" }} src={Logo2} alt='' /></Link>
                        </div>
                        <div className="col-lg-9 col-md-1 desktop-nav">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-2 fw-bold">
                                        <li className="nav-item desk-nav">
                                            <Link onClick={scrollToTeam} className="nav-link text-uppercase " to="/">Find a lawyer</Link>
                                        </li>
                                        <li className="nav-item desk-nav">
                                            <Link onClick={scrollToTeam} className="nav-link text-uppercase" to="/">Legal Advice</Link>
                                        </li>
                                        <li className="nav-item desk-nav">
                                            <Link onClick={scrollToPractice} className="nav-link text-uppercase" to="/">Legal Services</Link>
                                        </li>
                                        <li className="nav-item desk-nav">
                                            <Link onClick={scrollToAbout} className="nav-link text-uppercase" to="/">About</Link>
                                        </li>
                                        <li className="nav-item desk-nav">
                                            <Link className="nav-link text-uppercase" to="/">My Account</Link>
                                        </li>
                                    </ul>
                                </div>


                            </nav>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-2 col-3 text-end">
                            <form className="">
                                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>   */}
                                {/* <Link to="/" className="btn shadow-none border">Search</Link> */}
                                <Link to="tel: 9910089550" className='text-decoration-none desktop-nav fw-bold desk-phone'>M. 9910089550</Link>
                            </form>
                        </div>

                        {/* canwaoff */}
                        <div className='tab-nav col-md-1 col-sm-1 col-2'>
                            <a className="btn shadow-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <i style={{color:"#052963"}} className="fa-solid fa-bars menu-bar"></i>
                            </a>


                            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div className="offcanvas-header  border-bottom">
                                    <h5 className="offcanvas-title fst-italic fw-bold" id="offcanvasExampleLabel" style={{color:"#052963"}}>
                                        Ajay Chauhan</h5>
                                    <button type="button" className="btn-close text-reset shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">

                                    <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-2 fw-bold" style={{color:"#052963"}}>
                                        <li className="nav-item nav-canwa">
                                            <Link className="nav-link text-dark text-uppercase" aria-current="page" to="/">Find a lawyer</Link>
                                        </li>
                                        <li className="nav-item nav-canwa">
                                            <Link className="nav-link text-dark text-uppercase" to="/">Legal Advice</Link>
                                        </li>
                                        <li className="nav-item nav-canwa">
                                            <Link className="nav-link text-dark text-uppercase" to="/">Legal Services</Link>
                                        </li>
                                        <li className="nav-item nav-canwa">
                                            <Link className="nav-link text-dark text-uppercase" to="/">About</Link>
                                        </li>
                                        <li className="nav-item nav-canwa">
                                            <Link className="nav-link text-dark text-uppercase" to="/">My Account</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
