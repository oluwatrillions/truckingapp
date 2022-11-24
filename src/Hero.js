import React, { useState } from 'react'
import truckImg from './images/trucks.jpg'
import './Hero.css'
import { IoCloseOutline } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import Logo from './images/logo.png'


function Hero() {

    const [isClicked, setIsClicked] = useState(false)

    const menuBtn = () => {
        setIsClicked(!isClicked)
    }

    const closeMenuBtn = () => {
        setIsClicked(false)
    }

    return (
            <div className='hero-page'>           
                <div className='heroImg'>
                    <img className='hero' src={truckImg} alt='' />
                    <div className='summary'>
                        <h1>TOBIES FREIGHT SERVICE</h1>
                        <h4>Leaders in transportation, logistics and freight services.</h4>
                        <h3>Contact us for the best freight services. We offer the best deals in transportation and moving services.</h3>
                </div>
                    <div className='navSection'>
                        {/* <div className='logo'>
                            <img src={Logo} alt='' className='img-logo' />
                            <h6>Logistics and Transportation</h6>
                        </div> */}
                        <div className='nav-toggle'>
                            <IoMenuSharp className={`${isClicked ? 'nav-links navBar' : 'menu-button'}`} onClick={menuBtn}/>    
                            <IoCloseOutline className='close-menu'/>
                        </div>
                        <div className='navBar'>
                            <nav className='show-nav'>
                                <ul className='nav-links'>
                                    <li>HOME</li>
                                    <li>ABOUT US</li>
                                    <li>SERVICE</li>
                                    <li>OUR BLOG</li>
                                    <li>CONTACT US</li>
                                    <li>SEARCH</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Hero
