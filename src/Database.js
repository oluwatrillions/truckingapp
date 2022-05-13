import { Container } from '@material-ui/core'
import React, { useState } from 'react'
import './Database.css'

function Database() {
    const [name, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [destination, setDestination] = useState('')
    const [transport, setTransport] = useState('')
    const [message, setMessage] = useState('')

    const enquiry = () => {
        console.log(name);
        console.log(cargo);
        console.log(destination);
        console.log(transport);
        console.log(message);
    }

    return (
        <Container  className='db-container' maxWidth='xl'>
            <div  className='db-container'>
                <div className='database'>
                    <h3>
                        Search our databases of the Top 100 providers in key segments of the supply chain industry.
                    </h3>
                    <div className='inputDiv'>
                            <div className='searchDiv'>
                                <div className='inputSearch'>
                                    <input type='text' placeholder='Search Name' onChange={(e)=>{setName(e.target.value)}}></input>
                                </div>
                                <div className='inputSearch' >
                                <input type='text' placeholder='Cargo Type' onChange={(e)=>{setCargo(e.target.value)}}></input>
                                </div>
                                <div className='inputSearch' >
                                    <input type='text' placeholder='Choose Destination' onChange={(e)=>{setDestination(e.target.value)}}></input>
                                </div>
                                <div className='inputSearch'>
                                    <input type='text' placeholder='Transport Type' onChange={(e)=>{setTransport(e.target.value)}}></input>
                                </div>
                        </div>
                        <div>
                                <div className='searchArea'>
                                    <label for='transport type' placeholder='Your message'></label>
                                    <textarea placeholder='Your Message' onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                                </div>
                        </div>
                        <button onClick={enquiry}>Submit <span>Now</span></button>
                    </div>
                </div>
            </div>
        </Container>
  )
}

export default Database