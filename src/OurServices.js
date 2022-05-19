import React from 'react';
import './OurServices.css'

function OurServices({services}) {
        return <div className='myServices' maxWidth='xl'>
                <div className='myServices'>
                {services.map((data) => {
                        const {id, serviceType, image, description } = data
                return <div className='service-info' key = {id}>
                        <img src={ image} alt=''/>
                        <h2 className='serviceh2'>{serviceType}</h2>
                        <h6 className='serviceh6'>{ description}</h6>
                        </div>
        })}
                        </div>
        </div>
}

export default OurServices;
