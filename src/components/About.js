import React from "react";
import { Link } from "react-router-dom";
import { Container, CardDeck, Card } from "react-bootstrap";
import { ReactComponent as GitSvg } from "../assets/github-brands.svg";
import { ReactComponent as LinkedInSvg } from "../assets/linkedin2.svg";

function About() {
  return (
    <div>
      <Container>
        <h2 className="text-white my-2 text-center">Sobre Nós</h2>
        <hr className="border-success bg-dark my-4" />
        <CardDeck className="text-center my-3">
          <Card className="border-success bg-dark">
            <Card.Body>
              <Card.Title>
                <h4 className="text-white my-4 text-center">Fellype Queiroz</h4>
              </Card.Title>
              <Link
                to={{
                  pathname:
                    "https://www.linkedin.com/in/fellype-almeida-queiroz/",
                }}
                target="_blank"
              >
                <LinkedInSvg className="svg-css mx-2" />
              </Link>
              <Link
                to={{ pathname: "https://github.com/FellypeQ" }}
                target="_blank"
              >
                <GitSvg className="svg-css mx-2" />
              </Link>
            </Card.Body>
          </Card>
          <Card className="border-success bg-dark">
            <Card.Body>
              <Card.Title>
                <h4 className="text-white my-4 text-center">
                  Guilherme Tretow
                </h4>
              </Card.Title>
              <Link
                to={{
                  pathname: "https://www.linkedin.com/in/gtretow/",
                }}
                target="_blank"
              >
                <LinkedInSvg className="svg-css mx-2" />
              </Link>
              <Link
                to={{ pathname: "https://github.com/gtretow" }}
                target="_blank"
              >
                <GitSvg className="svg-css mx-2" />
              </Link>
            </Card.Body>
          </Card>
          <Card className="border-success bg-dark">
            <Card.Body>
              <Card.Title>
                <h4 className="text-white my-4 text-center">Vitor Vieira</h4>
              </Card.Title>
              <Link
                to={{
                  pathname: "https://www.linkedin.com/in/vitor-machado-vieira/",
                }}
                target="_blank"
              >
                <LinkedInSvg className="svg-css mx-2" />
              </Link>
              <Link
                to={{ pathname: "https://github.com/vmvieira" }}
                target="_blank"
              >
                <GitSvg className="svg-css mx-2" />
              </Link>
            </Card.Body>
          </Card>
        </CardDeck>
        <hr className="border-success bg-dark my-4" />
      </Container>
    </div>
  );
}

export default About;
