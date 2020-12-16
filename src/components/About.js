import React from "react";
import { Container, Row } from "react-bootstrap";

function About() {
  return (
    <div >
      <Container className="bg-dark shadow-lg mt-5 mb-5 containersize ">
        <Row className="d-flex justify-content-center">
          <div classname="mt-5 w-75 ">
            <h1 className="mt-5  mb-5 text-primary">About</h1>
            <p className="text-muted text-center">mambojambo</p>
            <p className="text-muted text-center">mambojambo </p>
            <p className="text-muted text-center">mambojambo</p>
            <p className="text-muted text-center">mambojambo</p>
          </div>
        </Row>

        <Row className="d-flex justify-content-around mt-5 mb-5 ">
          <div className="text-center align-text-bottom">
            <h2 className="text-primary ">Contact the creators</h2>
            <p className="text-muted">guilherme.tretow@gmail.com</p>
            <p className="text-muted">fellype.ads@gmail.com</p>
            <p className="text-muted">vmvieira55@gmail.com</p>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default About;
