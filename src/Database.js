import React, { useState } from 'react'
import './Database.css'

function Database() {
    const [name, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [destintion, setDestination] = useState('')
    const [transport, setTransport] = useState('')
    const [message, setMessage] = useState('')
  return (
      <div className='database'>
          <h3>
              Search our databases of the Top 100 providers in key segments of the supply chain industry.
          </h3>
          <div className='inputDiv'>
                <div className='searchDiv'>
                    <div className='inputSearch'>
                        <input type='text' placeholder='Search Name'></input>
                    </div>
                    <div className='inputSearch' >
                       <input type='text' placeholder='Cargo Type'></input>
                    </div>
                    <div className='inputSearch' >
                        <input type='text' placeholder='Choose Destination'></input>
                    </div>
                    <div className='inputSearch'>
                        <input type='text' placeholder='Transport Type'></input>
                    </div>
              </div>
              <div>
                    <div className='searchArea'>
                        <label for='transport type' placeholder='Your message'></label>
                        <textarea></textarea>
                    </div>
              </div>
              <button>Submit <span>Now</span></button>
          </div>
          
    </div>
  )
}

export default Database