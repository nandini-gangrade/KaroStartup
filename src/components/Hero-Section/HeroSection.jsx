import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
          <h2 className="mb-4 hero__title">
              Campus Ambassador Program for<br></br>Engineering Students
              </h2>
              <p className="mb-5">
                By being an Ambassador, you will  Empower and Enable your friends<br></br> to achieve their dream of  getting into a core job.<br></br>In this process discover yourself by building skills in <br></br>social media marketing and professional networking.
              </p>
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
