import React from 'react';
import './Testimonial.css'
import truckers from './images/truckers.jpeg'
import BlogPost from './BlogPost';
import data from './BlogNews'
import FunFactInfo from './FunFactInfo'
import info from './FunFactsMetrics';

function Testimonial() {
    return <div className='testimonial'>
        <div className='funFacts'>
            <div className='top-head'>
                <h2>OUR <span>FUN FACTS</span></h2>
                <h6>They say we are the best in the industsy</h6>
            </div>
            <img src={truckers} alt='' />
            <div>
                <FunFactInfo info={info} />
            </div>
            <div>
                <h6>Find the perfect Truck stock photos and editorial news pictures from Getty Images. <br />
                    Select from 435532 premium Truck of the highest quality</h6>
            </div>
        </div>
        <div className='testimonies'>
            <div className='top-head'>
                <h2>OUR <span>FUN FACTS</span></h2>
                <h6>They say we are the best in the</h6>
            </div>
            <div className='quotes'>
                <h2>AJOSE MCIHAEL OLUWATOBI</h2>
                <blockquote>It is not hard to see why. Natural gas flowing through <br />
                    a web of pipelines from Russia heats homes and power <br />
                    factories across much of Europe. Russia is also one of <br />
                    the continent’s key sources of oil.
                </blockquote>
                <h4>5 mins ago, <span>Twitter</span></h4>
            </div>
        </div>
        <div className='news'>
            <div className='top-head'>
                <h2>LOGISTIC <span>LATEST NEWS</span></h2>
                <h6>They say we are the best in the industry</h6>
            </div>
            < BlogPost dataInfo= { data} />
        </div>
  </div>;
}

export default Testimonial;
