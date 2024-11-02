import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import leetcodeIcon from "../Assets/leetcode-svgrepo-com.svg"

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Harmeet Singh</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} HS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/harmeet1999/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/u/harmeet10/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
              {/* <img src={leetcodeIcon} alt="LeetCode" width="24" height="24" /> */}
              <img src={leetcodeIcon} alt="LeetCode" width="16" height="16" style={{ filter: "invert(100%)" }} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/harmeetss/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
