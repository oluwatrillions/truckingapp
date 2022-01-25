import React from 'react';
import './OurServices.css'
import image from './images/cargo.jpg'

function OurServices({services}) {
    return <div className='myServices'>
        {services.map((data) => {
            const { id, images, serviceType, description } = data
            return <div key = {id}>
                <div className='serviceImg'>{image}</div>
                <h2 className='serviceh2'>{serviceType}</h2>
                <h6 className='serviceh6'>{ description}</h6>
            </div>
      })}
  </div>;
}

export default OurServices;
