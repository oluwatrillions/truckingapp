import React, { useState } from 'react'
import OurServices from './OurServices'
import data from './serviceData'
import { IoIosArrowForward } from "react-icons/io";
import './Services.css'

function Services() {
    const [next, setNext] = useState(0)

    const nextBtn = () => {
        const firstSlide = next === 0
        const lastSlide = next === data.length - 1
        const nextSlide = lastSlide ? 0 : next + 1
        setNext(nextSlide)
        console.log(nextSlide);
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
                        <IoIosArrowForward onClick={nextBtn} alt='' className='next-Img' />
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
