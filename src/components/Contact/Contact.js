import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Contact() {
    return (
      <Container fluid className="contact-section">
        <Particle />
        <Container style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <div className="contact-top-left">
                <h2>Contact</h2>
                <p>For any inquiries, please feel free to reach out via email.</p>
              </div>
              <div className="contact-bottom-right" style={{ marginTop: "20px" }}>
                <p>
                  <a href="mailto:hs85674@gmail.com" style={{ color: "black", textDecoration: "none", fontSize: "1.5em", fontWeight: "bold" }}>
                    hs85674@gmail.com
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
export default Contact;
