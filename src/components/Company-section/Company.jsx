import React from "react";
import { Icon } from '@iconify/react';
import { Container, Row, Col } from "reactstrap";

const Company = () => {
  return (
    <section>
      <Container>
        <Row>
          
          <button className="btn">Apply for Campus Ambassador Program</button><br></br>

          <Col lg="3" md="6" sm="6" xs="6">
            <h2 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-share-forward-line"></i> Its Online
            </h2>
          </Col>
          <Col lg="3" md="6" sm="6" xs="6">
            <h2 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-share-forward-line"></i> Learn Skills
            </h2>
          </Col>
          <Col lg="3" md="6" sm="6" xs="6">
            <h2 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-share-forward-line"></i> Certification
            </h2>
          </Col>
          <Col lg="3" md="6" sm="6" xs="6">
            <h2 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-share-forward-line"></i> Earn
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Company;
