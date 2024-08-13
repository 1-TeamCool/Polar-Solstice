import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3">
          <Container>
            <Row>
              <Col md={4}>
                <h5>Company Info</h5>
                <p>Polar Solstice</p>
                <p>PolarSolstice@gmail.com</p>
              </Col>
              <Col md={4}>
                <h5>Quick Links</h5>
                <Nav className="flex-column">
                  <Nav.Link href="#">Home</Nav.Link>
                  <Nav.Link href="#">About Us</Nav.Link>
                  <Nav.Link href="#">Contact</Nav.Link>
                </Nav>
              </Col>
              <Col md={4}>
                <h5>Social Media</h5>
                <Nav className="flex-column">
                  <Nav.Link href="#">Facebook</Nav.Link>
                  <Nav.Link href="#">Twitter</Nav.Link>
                  <Nav.Link href="#">Instagram</Nav.Link>
                </Nav>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="text-center">
                <p>Copyright &copy; Polar Solstice 2023</p>
              </Col>
            </Row>
          </Container>
        </footer>
)};

export default Footer;