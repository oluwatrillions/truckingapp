import React from 'react';
import './OurServices.css'
import image from './images/cargo.jpg'
import { Container } from '@material-ui/core';

function OurServices({services}) {
        return <Container className='myServices' maxWidth='xl'>
                <div className='myServices'>
                {services.map((data) => {
                        const {id, serviceType, description } = data
                return <div className='service-info' key = {id}>
                        <img src={ image} alt=''/>
                        <h2 className='serviceh2'>{serviceType}</h2>
                        <h6 className='serviceh6'>{ description}</h6>
                        </div>
        })}
                        </div>
        </Container>
}

export default OurServices;
