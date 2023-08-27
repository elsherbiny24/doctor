import React from 'react';
import './footer.css';
import img1 from '../../aswets/1.png48.png';
import img2 from '../../aswets/1.png49.png';
import img3 from '../../aswets/1.png50.png';
import img4 from '../../aswets/1.png51.png';
import logo from '../../aswets/1.png03.png'
import { Link } from 'react-router-dom';
import { BsTelephoneFill } from 'react-icons/bs';

import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
    <footer>
        <Container>
            <Row className='foot'>
                <Col lg={3} md={6} sm={12} className='footer-div-1'>
                    <img src={logo} className='logo' alt=''/>
                    <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, 
                     dolore smod tempor incididunt ut labore et.</p>
                     <div className='contact'>
                        <h5>Contact Us</h5>
                        <p>+201027752397</p>
                        <BsTelephoneFill className='icon'/>
                        <span></span>
                     </div>

                </Col>
                <Col lg={3} md={6} sm={12} className='footer-div-2'>
                    <h3 className='Quick-Links'>Quick Links</h3>
                    <ul>
                        <li>home</li>
                        <li>Services</li>
                        <li>Booking</li>
                        <li>Faq's</li>
                        <li>Blogs</li>
                        <li>Our Team</li>
                    </ul>
                </Col>
                <Col lg={3} md={6} sm={12} className='footer-div-3'>
                <h3 className='Quick-Links'>Our Service</h3>
                    <ul>
                        <li className='li'>Dental Care</li>
                        <li className='li'>Cardiac Clinic</li>
                        <li className='li'>Massege Therapy</li>
                        <li className='li'>Cardiology</li>
                        <li className='li'>Precise Diagnosis</li>
                        <li className='li'>Ambulance Services</li>
                    </ul>
                </Col>
                <Col lg={3} md={6} sm={12} className='footer-div-4'>
                <h3 className='Quick-Links'>Subscribe</h3>
                <div className='inupts-boxs'>
                    <input type='email' placeholder='Entar your Email'/>
                    <button>Subscribe Now</button>
                </div>
                <a href='#'><img src={img1} alt=''/></a>
                <a href='#'><img src={img2} alt=''/></a>
                <a href='#'><img src={img3} alt=''/></a>
                <a href='#'><img src={img4} alt=''/></a>
                
                </Col>
            </Row>
            <div className="copyright border-t-2 py-8">
                <p className="sm:text-lg text-normal text-center">Copyright © 2022 Design & Developed by <span className="copyright-name">tarek / ziad</span></p>
            </div>
        </Container>
    </footer>
    </>
  )
}

export default Footer