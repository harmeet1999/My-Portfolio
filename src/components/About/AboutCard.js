import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone! I’m <span className="purple">Harmeet Singh </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />
            Currently, I’m a software engineer with 3+ years in backend development and system architecture.
            <br />
            I build scalable, efficient systems that improve performance and user experience, 
              with experience enhancing eCommerce and OTT platforms using AWS, microservices, and REST APIs.
            <br />
            <br />
            When I’m not coding, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling to discover new places
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games and unwinding with friends
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building efficient systems isn’t just about the code; it’s about creating seamless experiences that make a difference"{" "}
          </p>
          <footer className="blockquote-footer">Harmeet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
