import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chat from "../../Assets/Projects/chat.png";
import course from "../../Assets/Projects/course.png"
import nispand from "../../Assets/Projects/nispand.png"
import web from "../../Assets/Projects/web.png"
import ecomm from "../../Assets/Projects/ecom.png"
import nisbusiness from "../../Assets/Projects/nisbusiness.png"





function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nispand}
              isBlog={false}
              title="Nispand: Meditation and Sleep"
              description="Nispand is an exclusive yoga and meditation app created by The Yoga Institute. Nispand signifies balance. “Ni” means to stop and “Spand” means vibrations (thoughts). Our mind is continuously generating thoughts which prevent us from attaining balance."
              demoLink="https://play.google.com/store/apps/details?id=com.nispand.com&hl=en_IN&gl=US&pli=1"
              websiteLink="https://nispand.com" // Add the website link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={course}
              isBlog={false}
              title="The Yoga Learning Management System (LMS)"
              description="The Yoga Learning Management System (LMS) is an innovative platform designed to provide users with comprehensive access to yoga courses and resources. This system aims to enhance the learning experience for both students and instructors by offering a wide range of features tailored to the unique needs of the yoga community."
              websiteLink="https://theyogainstitute.org/courses"
              demoLink="https://theyogainstitute.org/user/sign-in/?location=one-month-ttc"              
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web}
              isBlog={false}
              title="Tender Scraper"
              description="The purpose of this project is to develop a web scraping application that can extract tender information from various government websites using a tech stack consisting of NodeJS, MongoDB, Python, OCR Recognition, Machine learning, and Amazon S3. The application will be designed to automatically identify and bypass Captcha verification using advanced machine learning algorithms and OCR Recognition techniques."
              websiteLink="https://theyogainstitute.org/courses"

            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomm}
              isBlog={false}
              title="TYI Ecommerce"
              description="The Yoga E-commerce Platform is a dedicated online marketplace for high-quality yoga products designed to support and inspire a holistic lifestyle. This platform combines a user-friendly shopping experience with a curated selection of yoga essentials to cater to practitioners of all levels, from beginners to advanced yogis."
              websiteLink="https://theyogainstitute.org/shop"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nisbusiness}
              isBlog={false}
              title="Nispand Business"
              description="The Nispand Business Admin Portal is a comprehensive management platform designed for administrators to oversee and manage all aspects of Nispand’s yoga and meditation offerings. This portal empowers admins with tools to organize courses, manage user accounts, track engagement, and optimize user experience.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              websiteLink="https://nispand.com/business"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Real Messenger"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/harmeet1999/Real-Messenger"
              demoLink="https://kind-hoover-8d8875.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
