import React from 'react'
import OurServices from './OurServices'
import data from './serviceData'
import './Services.css'

function Services() {
    return (
        <div className='serviceless'>
            <div className='servicesInfo'>
                <div className='firstInfo'>
                    <h6>
                        To meet new shipper and consumer demanda, modern design <br/>
                        plans are larger, smarter, and more flexible. This issue draws a blueprint
                        for <br/> warehousing best practices that support supply chain optimization.
                    </h6>

                    <h5>
                        Also: Intermodal rail moves supply chain efficiency <br/> in the right direction.
                    </h5>
                </div>
                <div className='secondInfo'>
                    <h3>
                        WE ARE TOBIES <br/> <span>WORLDWIDE FREIGHT <br/> SERVICE</span>.
                    </h3>
                </div>
            </div>
            <div>
                < OurServices services={ data}/>
            </div>
        </div>
    )
}

export default Services
