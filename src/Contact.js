import React from 'react'
import './Contact.css'
import images from './images/logo.png'
import location from './images/location.png'
import phone from './images/phone.png'
import envelope from './images/envelope.png'
import IG from './images/IG-1.jpg'
import IG1 from './images/IG-2.jpg'
import IG2 from './images/IG-3.jpg'
import IG3 from './images/IG-4.jpg'
import IG4 from './images/IG-5.jpg'
import IG5 from './images/IG-6.jpg'
import { Container } from '@material-ui/core'


function Contact() {
    return (
      <Container className='contactUs' maxwidth='xl'>
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
                  <h6>intelligence-sharing also paved the way for Ukraine to shoot down a Russian transport plane carrying hundreds of troops in the early days of the war, the officials say, helping repel a Russian assault on a key airport</h6>
                  <div className='feeds'>
                      <img src='' alt='' />
                      <h6>5 min ago</h6>
                  </div>
              </div>
              <div className='socials'>
                  <h6>intelligence-sharing also paved the way for Ukraine to shoot down a Russian transport plane carrying hundreds of troops in the early days of the war, the officials say, helping repel a Russian assau</h6>
                  <div className='feeds'>
                      <img src='' alt='' />
                      <h6>5 min ago</h6>
                  </div>
              </div>
          </div>
          <div className='usefulLinks'>
              <h2>USEFUL LINKS</h2>
              <ul className='links-ul'>
                  <li>ABOUT US</li>
                  <li>FEATURES</li>
                  <li>PRIVATE POLICY</li>
                  <li>WAREHOUSE</li>
                  <li>SERVICE</li>
                  <li>Photo Gallery</li>
            </ul>
          </div>

          <div className='IG'>
              <h3>INSTAGRAM</h3>
             <div className='instagram'>
                <img src={IG} alt=''/>
                <img src={IG1} alt=''/>
                <img src={IG2} alt=''/>
                <img src={IG3} alt=''/>
                <img src={IG4} alt=''/>
                <img src={IG5} alt=''/>
          </div>
          </div>
            </div>
            </Container>
  )
}

export default Contact