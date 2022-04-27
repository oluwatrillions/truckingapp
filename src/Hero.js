import React from 'react'
import truckImg from './images/trucks.jpg'
import Nav from './Nav'
import './Hero.css'

function Hero() {
    return (
        <div className='hero-page'>
            <div className='heroImg'>
                <img className='hero' src={truckImg} alt='' />
                <div className='summary'>
                    <h1>TOBIES FREIGHT SERVICE</h1>
                    <h4>Leaders in transportation, logistics and freight services.</h4>
                    <h3>Contact us for the best freight services. We offer the best deals in transportation and moving services.</h3>
                </div>
            </div>
                <Nav />
        </div>
    )
}

export default Hero
