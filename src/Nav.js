import React from 'react'
import './Nav.css'
import Logo from './images/logo.png'

function Nav() {
    return (
        <div className='navSection'>
            <div className='logo'>
                <img src={Logo} alt='' />
                <h6>Logistics and Transportation</h6>
            </div>
            <div className='navBar'>
                <nav>
                    <ul>
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
    )
}

export default Nav
