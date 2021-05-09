import React from "react";
import { Col, Container, Row } from "reactstrap";
import logo from "../images/my-wallet.png";

const Footer = () => {
  return (
    <footer className="mt-3 p-4 bg-white text-white">
      <Container>
        <Row>
          <Col>
            <img src={logo} alt="logo" style={{ height: 30 }} />
          </Col>
          <Col>
            <h4>info@mywallet.com</h4>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
