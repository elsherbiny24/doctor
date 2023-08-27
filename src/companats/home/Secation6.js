import React from "react";
import "./section6.css";
import { Col, Container, Row } from "react-bootstrap";
import circle from "../../aswets/1.png33.png";
import doc1 from "../../aswets/1.png39.jpg";
import doc2 from "../../aswets/1.png34.jpg";
import doc3 from "../../aswets/1.png35.jpg";
import doc4 from "../../aswets/1.png36.jpg";
import doc5 from "../../aswets/1.png37.jpg";
import doc6 from "../../aswets/1.png38.jpg";

const Secation6 = () => {
  return (
    <>
      <section className="min-sec-6">
        <Container>
            <div className="head">
                <h5>Testimonial</h5>
                <h1>See What Are The Patients<br /> Saying About us</h1>
            </div>
          <Row>
            <Col lg={6} md={12} sm={12} className="circle">
              <div className="img-circle">
                <img src={circle} className="img-1" />
                <img src={doc1} className="img-doc img-doc1" alt=""/>
                <img src={doc2} className="img-doc img-doc2" alt=""/>
                <img src={doc3} className="img-doc img-doc3" alt=""/>
                <img src={doc4} className="img-doc img-doc4" alt=""/>
                <img src={doc5} className="img-doc img-doc5" alt=""/>
                <img src={doc6} className="img-doc img-doc6" alt=""/>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="lorem-p">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecena ssuspendisse ultrices gravida. Tarek Elsherbiny Patient</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Secation6;
