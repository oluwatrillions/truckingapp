import React, { useState } from 'react'
import OurServices from './OurServices'
import data from './serviceData'
import nextInfo from './images/next.png'
import './Services.css'

function Services() {
    const [next, setNext] = useState(0)

    const nextBtn = () => {
        const nextSlide = data[next]
        console.log(nextSlide);
        setNext(next + 1)

        if (nextSlide >= (data.length)-1) {
            return nextSlide
        }
    }
    return (
            <div className='serviceless'>
                <div className='servicesInfo'>
                        <div className='firstInfo'>
                            <h6>
                                To meet new shipper and consumer demanda, modern design
                                plans are larger, smarter, and more flexible. This issue draws a blueprint
                                for warehousing best practices that support supply chain optimization.
                            </h6>

                            <h5>
                                Also: Intermodal rail moves supply chain efficiency in the right direction.
                            </h5>
                        </div>
                        <div className='secondInfo'>
                            <h3>
                                WE ARE TOBIES <span>WORLDWIDE FREIGHT SERVICE</span>.
                            </h3>
                        </div>
                </div>
                <div className='ourService'>
                    <div className='our-services'>
                        < OurServices services={data} />
                    <img onClick={nextBtn} src={nextInfo} alt='' className='next-Img' />
                    </div>
                    <div className='serviceless-span'>
                        <h6>Need <span>shipping worldwide?</span> We are the best partner for you. <span>Let's ship Worldwide.</span></h6>
                        <button>Click for Services</button>
                    </div>
                </div>
            </div>
    )
}

export default Services
