import React from 'react';
import './section1.css';
import moslas from "../../aswets/1.png08.png";
import squre from "../../aswets/1.png09.png";
import plus from "../../aswets/1.png11.png";
import circle from "../../aswets/1.png10.png";
import home from "../../aswets/1.png07.png";
import { Col, Container, Row } from "react-bootstrap";


const Section1 = () => {
  return (
    <>
   <section className="min-sec-1">
        <img src={moslas} className="moslas" alt=''/>
        <Container>
          <Row className="d-flex align-items-center row-home">
            <Col lg={6} md={6} sm={12} className="home-text">
              <img src={circle} className="circle" alt=''/>
              <h4>We Provide All Health Care Solution</h4>
              <h2>Protect Your Health And Take Care To Of Your Health</h2>
              <a href="#">Read more</a>
              <img src={plus} className="plus" alt=''/>
            </Col>
            <Col lg={6} md={6} sm={12} className="img-home">
              <img src={home} className="min-img" alt=''/>
              <img src={squre} className="squre" alt=''/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Section1