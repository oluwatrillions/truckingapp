import React from 'react';
import './Testimonial.css'
import truckers from './images/truckers.jpeg'
import BlogPost from './BlogPost';
import data from './BlogNews'
import FunFactInfo from './FunFactInfo'
import info from './FunFactsMetrics';
import { Container } from '@material-ui/core';

function Testimonial() {
    return <Container maxWidth='xl'>
            <div className='testimonial'>
                <div className='funFacts'>
                    <div className='top-head'>
                        <h2>OUR <span>FUN FACTS</span></h2>
                        <h6>They say we are the best in the industsy</h6>
                    </div>
                    <div className='funInfo'>
                        <img src={truckers} alt='' />
                        <FunFactInfo info={info} />
                    </div>
                    <div className='testhy'>
                        <h6>Find the perfect Truck stock photos and editorial news pictures from Getty Images.</h6>
                    </div>
                </div>
                <div className='funFacts'>
                    <div className='top-head'>
                        <h2>OUR <span>TESTIMONIAL</span></h2>
                        <h6>They say we are the best in the</h6>
                    </div>
                    <div className='quotes'>
                        <h2>AJOSE <span>MICHAEL OLUWATOBI</span></h2>
                        <q>It is not hard to see why. Natural gas flowing through
                            a web of pipelines from Russia heats homes and power
                            factories across much of Europe. Russia is also one of
                            the continent’s key sources of oil.
                        </q>
                        <h4 className='quotesh4'>5 mins ago, <span>Twitter</span></h4>
                    </div>
                </div>
                <div className='funFacts'>
                    <div className='top-head'>
                        <h2>LOGISTIC <span>LATEST NEWS</span></h2>
                        <h6>They say we are the best in the industry</h6>
                </div>
                <div className='dateDiv'>
                    < BlogPost dataInfo={data} />
                </div>
                </div>
            </div>
        </Container>
}

export default Testimonial;
