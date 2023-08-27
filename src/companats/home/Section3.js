import React from 'react';
import './section3.css';
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Section3 = () => {
  return (
    <>
     <section className="min-sec-3">
        <Container className="container">
          <div className="head-sec-3">
           
          <h5>Working Process</h5>            
          <h4>How we works?</h4>
            
          </div>
          <Row>
            <Col lg={4} md={6} sm={12} className="col-sec-3">
              <div className="side">
              <span></span>
                <h1>01</h1>
                <h2 className="h2">01</h2>
                <h3>Make Appointmnet</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of.
                  <Link className="link" to='/'>view more</Link>
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="col-sec-3">
            <div className="side side-2">
            <span></span>
                <h1>02</h1>
                <h2 className="h2">02</h2>
                <h3>Make Appointmnet</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of.
                  <Link className="link" to='/'>view more</Link>
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="col-sec-3">
            <div className="side">
               <span></span>
                <h1>03</h1>
                <h2 className="h2">03</h2>
                <h3>Make Appointmnet</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of.
                  <Link className="link" to='/'>view more</Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Section3