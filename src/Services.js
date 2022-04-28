import React from 'react'
import OurServices from './OurServices'
import data from './serviceData'
import './Services.css'
import { Container } from '@material-ui/core'

function Services() {
    return (
        <Container maxWidth='xl' className='serviceless'>
            <div className='serviceless'>
                <div className='servicesInfo'>
                    <Container className='firstInfo' maxWidth='lg'>
                        <div >
                            <h6>
                                To meet new shipper and consumer demanda, modern design <br/>
                                plans are larger, smarter, and more flexible. This issue draws a blueprint
                                for <br/> warehousing best practices that support supply chain optimization.
                            </h6>

                            <h5>
                                Also: Intermodal rail moves supply chain efficiency <br/> in the right direction.
                            </h5>
                        </div>
                    </Container>
                    <Container className='secondInfo'>
                        <div >
                            <h3>
                                WE ARE TOBIES <br/> <span>WORLDWIDE FREIGHT <br/> SERVICE</span>.
                            </h3>
                        </div>
                    </Container>
                </div>
                <div>
                    < OurServices services={ data}/>
                </div>
                <div className='serviceless-span'>
                    <h6>Need <span>shipping worldwide?</span> We are the best partner for you. <span>Let's ship Worldwide.</span></h6>
                    <button>Click for Services</button>
                </div>
            </div>
        </Container>    
    )
}

export default Services
