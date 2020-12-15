import React from "react";
import { Container, Row } from "react-bootstrap";



function About() {
  return (
    <Container className="bg-dark shadow-lg mt-5 mb-5">
      <Row className="d-flex justify-content-center">
        <h1 className="mt-5 text-danger mb-5">about</h1>

        <div classname="mt-5 w-75">
          <p className="text-muted text-center">mambojambo</p>
          <p className="text-muted text-center">mambojambo </p>
          <p className="text-muted text-center">mambojambo</p>
          <p className="text-muted text-center">mambojambo</p>
        </div>
      </Row>

      <Row className="d-flex justify-content-around mt-5 mb-5">
        <div className="bottom contact text-center ">
          <h2 className="text-danger ">Contact the creators</h2>
          <p className="text-muted">guilherme.tretow@gmail.com</p>
          <p className="text-muted">fellype.ads@gmail.com</p>
          <p className="text-muted">vmvieira55@gmail.com</p>
        </div>
      </Row>
    </Container>
  );
}

export default About;
