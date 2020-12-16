import React from "react";
import "./footer.css";
import { Navbar } from "react-bootstrap";
function Footer() {
  return (
    <Navbar className="bg-dark mt-5 p-1  footer  fixed-bottom">
      <div className="col-lg-2 col-md-4 col-xs-6 d-flex flex-column justify-content-start ">
        <small className="text-muted ">Criado por </small>
        <img src="" alt="img" />
      </div>
      <div className="col-lg-2 col-md-4 col-xs-6">
        <img className="" src="" alt="img" />
      </div>
    </Navbar>
  );
}

export default Footer;
