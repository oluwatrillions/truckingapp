import React from 'react'
import truckImg from './images/trucks.jpg'
import Nav from './Nav'
import './Hero.css'
import Container from '@material-ui/core/Container'


function Hero() {
    return (
        <Container className='hero-page' maxWidth='xl'>
            <div className='hero-page'>
                <div className='heroImg'>
                    <img className='hero' src={truckImg} alt='' />
                    <div className='summary'>
                        <Container>
                            <h1>TOBIES FREIGHT SERVICE</h1>
                            <h4>Leaders in transportation, logistics and freight services.</h4>
                            <h3>Contact us for the best freight services. We offer the best deals in transportation and moving services.</h3>
                        </Container>
                    </div>
                </div>
                    <Nav />
            </div>
         </Container>
    )
}

export default Hero
