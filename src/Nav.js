import React from 'react'
import './Nav.css'
import Logo from './images/logo.png'
import Container from '@material-ui/core/Container'


function Nav() {
    return (
        <Container className='navSection' maxWidth = 'xl'>
            <div className='navSection'>
                <div className='logo'>
                    <img src={Logo} alt='' />
                    <h6>Logistics and Transportation</h6>
                </div>
                <div className='navBar'>
                    <Container className='navBar'>
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
                    </Container>
                </div>
            </div>
        </Container>
    )
}

export default Nav
