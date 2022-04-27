import React from 'react'
import './Contact.css'
import images from './images/logo.png'
import location from './images/location.png'
import phone from './images/phone.png'
import envelope from './images/envelope.png'


function Contact() {
  return (
      <div className='contactUs'>
          <div className='contact'>
              <div className='logo-Div'>
                  <img src={images} alt='' />
                  <h5>Logistics and Transportation</h5>
              </div>
                    <h6>The details about the air defenses and the transport plane, which have not previously been reported, underscore why, two months into the war, officials assess that intelligence from U.S.</h6>
              <div className='our-Info'>
                  <div className='reachUs'>
                      <img src={location} alt='' />
                      <h5>Adeniyi Jones, Ikeja Lagos, Nigeria 101289</h5>
                  </div>
                  <div className='reachUs'>
                      <img src={phone} alt='' />
                      <h5>Reach us here for General info: +234 802 221 7867</h5>
                  </div>
                  <div className='reachUs'>
                      <img src={envelope} alt='' />
                      <h5>ajosemichaeloluwatobi@yahoo.com</h5>
                   </div>
                </div>
          </div>
          <div className='widget'>
              <h2>TWITTER WIDGET</h2>
              <div className='socials'>
                  <h6>lorem18</h6>
                  <div>
                      <img src='' alt='' />
                      <h6>5 min ago</h6>
                  </div>
              </div>
              <div className='socials'>
                  <h6>lorem18</h6>
                  <div>
                      <img src='' alt='' />
                      <h6>5 min ago</h6>
                  </div>
              </div>
          </div>
          <div className='usefulLinks'>
              <ul>
                  <li>ABOUT US</li>
                  <li>FEATURES</li>
                  <li>PRIVATE POLICY</li>
                  <li>WAREHOUSE</li>
                  <li>SERVICE</li>
                  <li>Photo Gallery</li>
            </ul>
          </div>
          <div className='instagram'>
                <img src='' alt=''/>
                <img src='' alt=''/>
                <img src='' alt=''/>
                <img src='' alt=''/>
                <img src='' alt=''/>
                <img src='' alt=''/>
          </div>
        </div>
  )
}

export default Contact