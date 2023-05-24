import React from 'react'
import { Link } from 'react-router-dom'

function PracticeArea() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <>
            <div className='container-fluid py-md-5 px-0'  >
                <div className='py-5' style={{ background: "#052963" }}>
                    <div className='container'>
                        <div className='row practice-heading pb-3 text-center justify-content-center'>
                            <h1>Our Practice Areas</h1>
                            <h3>We represent our clients’ best interests, providing personal legal assistance, handling business affairs, and representing them in disputes before government and administrative agencies.</h3>

                        </div>
                        <div className='row mb-5'>

                            <div class="container">
                                <div class="row row-cols-1 row-cols-md-3 g-4">
                                    <div class="col">
                                        <div class="card">
                                            
                                            <div class="card-body p-lg-5 practice-area-box">
                                                <h5 class="card-title">Drug Offences</h5>
                                                <p class="card-text">
                                                    Our lawyer offers legal expertise, investigates the case, negotiates plea bargains, represents the defendant in court, advocates for fair sentencing, and guides through the appeals process for our clients.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card">
                                             
                                            <div class="card-body p-lg-5 practice-area-box">
                                                <h5 class="card-title">Sexual Offences</h5>
                                                <p class="card-text">
                                                    Our sexual offences lawyer provides vital aid: legal expertise, evidence analysis, credibility challenges, rights protection, navigating laws, strategic defence planning-ensuring fair trials and safeguarding interests.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card">
                                            <div class="card-body p-lg-5 practice-area-box">
                                                <h5 class="card-title">Bail Applications</h5>
                                                <p class="card-text">Our assistance in the bail process includes advocating for release, presenting eligibility arguments, gathering evidence, challenging conditions, and negotiating for a reasonable bail amount with the prosecution.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='row practice-heading justify-content-center'>
                            <Link onClick={scrollToTop} to="/our-practice-area">View All Areas</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PracticeArea