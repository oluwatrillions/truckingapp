import React from 'react';
import './Experience.css'
import images from './images/truck.jpg'
import image from './images/trucking.jpg'
import packaging from './images/package.png'
import good from './images/goods.png'
import food from './images/food.png'
import retail from './images/retail.png'
import energy from './images/energy.png'
import { Container } from '@material-ui/core';

function Experience() {
    return <Container className='experience' maxWidth='xl'>
        <div className='experience' maxWidth='sm'>
            <Container className='shipping'>
                <div className='shipping'>
                    <h2>Shipping <span>Experience</span></h2>
                    <h4>TOBIES <span>FREIGHT SERVICE</span></h4>
                    <blockquote>"To meet new shipper and customer demands, <span> modern <br />
                        warehouse </span> design plans and for getting smarter targets, ad more <br />
                        flexible. Also intemediate cat madams and supply chaisn, efficiency and right <br />
                        in the future and right decisions".</blockquote>
                    
                    <h3 className='ship'>Search our databases of the <span>Top 100 providers</span> <br /> in
                    key segments of the supply chain industry.</h3>
                </div>
            </Container>
            <div>
                <img className='truck-image' src={images} alt='' />
            </div>
            <div>
                <img className='trucking-image' src={image} alt='' />
            </div>
            <Container className='services-icons'>
                <div className='services-icons'>
                    <h1>WHAT OUR ADVANTAGES</h1>
                    <h3>TRANSPORT AND LOGIZTICS</h3>
                    <h6>To meet new shipper and consumer demands, modern<br />
                        warehouse design plans are larger, smarter, and more<br />
                        flexible. This issue draws a blueprint for warehousing<br />
                        best practices that support supply chain optimization.</h6>
                    <Container className='services-icon' maxWidth='lg'>
                        <div className='services-icon'>
                            <div>
                                <img src={packaging} alt='' />
                                <h5>Consumer <span>Package Good</span></h5>
                            </div>
                            <div>
                                <img src={good} alt='' />
                                <h5>Chemical <span>Good</span></h5>
                            </div>
                            <div>
                                <img src={food} alt='' />
                                <h5>Food & <span>Beverage</span></h5>
                            </div>
                            <div>
                                <img src={retail} alt='' />
                                <h5>Retail <span>Package Good</span></h5>
                            </div>
                            <div>
                                <img src={energy} alt='' />
                                <h5>Energy <span>Oil & Gas</span></h5>
                            </div>
                        </div>
                    </Container>
                </div>
            </Container>
        </div>;
    </Container>
}

export default Experience;
