import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/stud.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Let's Learn <br /> & get Knowledge  <br /> from <u>Tusome</u>
              </h2>
              <p className="mb-5">
                Let's gather here <br /> we share 
                KNOWLEDGE with <br /> TUSOME
                Education Panel
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
