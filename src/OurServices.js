import React, {useState} from 'react';
import './OurServices.css'
import { IoIosArrowForward } from "react-icons/io";
import data from './serviceData'


function OurServices() {
    const [next, setNext] = useState(0)
    const [service, setService] = useState(data)

    const nextBtn = () => {
        const firstSlide = next === 0
        const lastSlide = next === data.length - 1
        const nextSlide = lastSlide ? 0 : next + 1
        setNext(nextSlide)
        console.log(nextSlide);
    }

        return <div className='myServices'>
            {service.map((data, index) => {
                const { id, image, serviceType, description } = data
                let position = 'nextSlide'
                if (index === next) {
                    position = 'activeSlide'
                }
                // if (index === next - 1 && index === service.length - 1){
                //     position = 'lastSlide'
                // }
                        return <div className='service-info' key={id}>
                            <div className={position}>
                                <img src={image} alt=''/>
                                <h2 className='serviceh2'>{serviceType}</h2>
                                <h6 className='serviceh6'>{description}</h6>
                            </div>  
                            <div className='img-container'>
                                <IoIosArrowForward onClick={nextBtn} alt='' className='next-Img' />
                            </div>
                        </div>
        })}
    </div>
}

export default OurServices;
