import React from 'react'

function Address() {
    return (
        <>
            <div className='container-fluid py-5'>
                <div className='container shadow py-4' style={{ background: "rgb(229 229 229)" }}>
                    <div className='row address-heading pb-4'>
                        <h1 className='text-center'>
                            Address</h1>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-md-6 text-center address-heading mb-3'>

                            <h2>Delhi High Court & District Court</h2>
                            <p>Chamber- T-12-B,Second Floor,
                                <br />
                                Tis Hazari Court, New Delhi- 110054 , INDIA
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8372746993355!2d77.2144802744187!3d28.664590647877212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdc4efad00a7%3A0xdb828d7432c2f86e!2sTis%20Hazari%20Court%20Western%20Wing%20chamber%2097%2098!5e0!3m2!1sen!2sin!4v1684752030479!5m2!1sen!2sin" className='w-100' height="250"
                                    style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Address
