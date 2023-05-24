import React from 'react';
import Img1 from '../Images/GL_img1.jpg';
import Img2 from '../Images/GL_img2.jpg';
import Img3 from '../Images/GL_img3.jpg';



import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Gallery() {
    const responsive = {
        superLargeDesktop: { 
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 5
        },
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 4
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 641
            },
            items: 3
        },
        phoneLandscape: {
            breakpoint: {
                max: 640,
                min: 577
            },
            items: 2
        },
        mobile: {
            breakpoint: {
                max: 576,
                min: 0
            },
            items: 1
        }

    };

    return (
        <>
            <div className='container-fluid py-5 px-0'>
                <div className='py-5 ' style={{ background: "#052963" }}>
                    <div className='container'>
                        <div className='row  gallery-heading pb-4'>
                            <h1 className='text-center'>Gallery</h1>
                        </div>
                        <Carousel responsive={responsive}>
                            <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Img1} alt='' /></div>
                            <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Img2} alt='' /></div>
                            <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Img3} alt='' /></div>
                            <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Img1} alt='' /></div>
                            <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Img2} alt='' /></div>
                            <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Img3} alt='' /></div>
                            <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Img1} alt='' /></div>
                            <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Img2} alt='' /></div>
                            <div className='col-sm-11 col-12 text-center'><img className='img-fluid' src={Img3} alt='' /></div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery
