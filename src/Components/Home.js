import React from 'react'
import Banner from './Banner'
import AboutUs from './AboutUs'
import Gallery from './Gallery'
import Address from './Address'
import Team from './Team'
import SpecialNote from './SpecialNote'
import PracticeArea from './PracticeArea'

function Home() {
    return (
        <>
            <Banner/>
            <AboutUs/>
            <PracticeArea/>
            <Team/> 
            <Gallery/>
          
            <Address/>
            <SpecialNote/>
           
        </>
    )
}

export default Home
