import React from 'react'
import Parikshit from '../Images/parikshit.jpg';
import AjayChauhan from '../Images/ajaychauhan.jpg';
import { Link } from 'react-router-dom';


function Team() {
    return (
        <>
            <div className='container-fluid py-5'>
                <div className='container'>
                    <div className='row team-heading pb-4 text-center'>
                        <h1 className=''>Our Team</h1>
                        <p>We deals in all criminal matters like NI act, Nds</p>
                    </div>

                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card shadow minheight">
                                <div className='row  justify-content-center  text-center text-lg-start text-sm-start text-md-center'>
                                    <div className=" col-lg-4 col-md-7 col-sm-4 col-7 pt-2">
                                        <img src={Parikshit} className="card-img-top" alt="..." />
                                    </div>
                                    <div className=" col-lg-8 col-md-12 col-sm-8 col-12 card-body align-self-center team-details">
                                        <h5 className=" fw-bold" style={{ color: "#052963" }}>Parikshit Sharma</h5>
                                        <p className="card-text mb-1 fw-bold" style={{ color: "#052963" }}> B.A, LL.B, LL.M</p>
                                        <p className="card-text mb-1"><i style={{ color: "green" }} className="fa-solid fa-phone"></i> <Link to="tel:8410746826">+91 8410746826</Link></p>
                                        <p className="card-text mb-1"><i style={{ color: "#af2929" }} className="fa-solid fa-envelope"></i> advparikshitchandkiram@gmail.com</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"> Supreme court of India & Delhi Court</li>
                                        <li className="list-group-item">General Secretary of state of UP  </li>
                                        <li className="list-group-item">(International Council of Jurists) London </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow minheight">
                                <div className='row justify-content-center text-center text-lg-start text-sm-start text-md-center'>
                                    <div className=" col-lg-4 col-md-7 col-sm-4 col-7 pt-2">
                                        <img src={AjayChauhan} className="card-img-top" alt="..." />
                                    </div>
                                    <div className=" col-lg-8 col-md-12 col-sm-8 col-12 card-body align-self-center  team-details">
                                        <h5 className=" fw-bold" style={{ color: "#052963" }}>Ajay Chauhan</h5>
                                        <p className="card-text mb-1 fw-bold" style={{ color: "#052963" }}>LL.B, MCA</p>
                                        <p className="card-text mb-1"><i style={{ color: "green"}} className="fa-solid fa-phone"></i> <Link to="tel:9910089550">+91 9910089550</Link></p>
                                        <p className="card-text mb-1"><i style={{ color: "#af2929" }} className="fa-solid fa-envelope"></i> advajayrana@rediffmail.com</p>
                                    </div>
                                </div>
                                <div className="card-body ">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"> Delhi High Court & District Court</li>
                                        <li className="list-group-item"> </li>
                                        {/* <li className="list-group-item">(International Council of Jurists) London </li> */}
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

export default Team
