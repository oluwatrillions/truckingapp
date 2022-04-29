import React from 'react';
import './Offers.css'
import warehouse from './images/warehouse.png'
import logistic from './images/logistic.png'
import contract from './images/contract.png'
import support from './images/support.png'
import destination from './images/destination.png'
import tracking from './images/tracking.png'
import { Button, Container } from '@material-ui/core';

function Offers() {
    return <Container className='offer' maxWidth='xl'>
        <div className='offer'>
            <Container maxWidth='xs'>
                <div className='offer-story'>
                    <h1>OUR<span> AWESOME OFFERS</span></h1>
                    <h6>Search our databases for the Top Providers in key segments of
                    the supply chain industry.</h6>
                </div>
            </Container>
            <Container maxWidth='xl' className='offers'>
                <div className='offers'>
                    <div className='offer-divs'>
                        <img src={warehouse} alt='' />
                        <div className='firstoffer'>
                            <h3>Largest <span>Warehouse</span></h3>
                            <h6>In publishing and graphic design, Lorem ipsum is a placeholder <br />
                                text commonly used to demonstrate the</h6>
                        </div>                
                    </div>
                    <div className='offer-divs'>
                            <img src={logistic} alt='' />
                            <div className='firstoffer'>
                                <h3>Logistic <span>Services</span></h3>
                                <h6>In publishing and graphic design, Lorem ipsum is a placeholder <br />
                                    text commonly used to demonstrate the</h6>
                            </div>                
                        </div>
                    <div className='offer-divs'>
                            <img src={contract} alt='' />
                            <div className='firstoffer'>
                                <h3>Contract <span>Logistic</span></h3>
                                <h6>In publishing and graphic design, Lorem ipsum is a placeholder <br />
                                    text commonly used to demonstrate the</h6>
                            </div>                
                        </div>
                    <div className='offer-divs'>
                            <img src={support} alt='' />
                            <div className='firstoffer'>
                                <h3>Customer <span>Support</span></h3>
                                <h6>In publishing and graphic design, Lorem ipsum is a placeholder <br />
                                    text commonly used to demonstrate the</h6>
                            </div>                
                        </div>
                    <div className='offer-divs'>
                            <img src={destination} alt='' />
                            <div className='firstoffer'>
                                <h3>Largest <span>Destinations</span></h3>
                                <h6>In publishing and graphic design, Lorem ipsum is a placeholder <br />
                                    text commonly used to demonstrate the</h6>
                            </div>                
                        </div>
                    <div className='offer-divs'>
                            <img src={tracking} alt='' />
                            <div className='firstoffer'>
                                <h3>Goods <span>Tracking</span></h3>
                                <h6>In publishing and graphic design, Lorem ipsum is a placeholder <br />
                                    text commonly used to demonstrate the</h6>
                            </div>                
                    </div>
                </div>
            </Container>
            <Button>
                <button>VIEW <span>ALL OFFER</span></button>
            </Button>
        </div>
        </Container>
}

export default Offers;
