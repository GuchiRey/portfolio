import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About me
            </h1>
            <p className="home-about-body">
              I am a developer with more than 3 years of experience and with the ability to build/update/optimize scalable web applications with the best frontend and backend industry technologies such as React.js, Vue.js, MongoDB, NodeJS, and Express.js. <br /> I have a proven track record of high-quality, scalable web applications, and I have the ability to work in a fast and agile environment, as well as the ability to communicate effectively in a team environment.<br /><br />
              <div className="w-100 d-flex justify-content-center">
                <Link to="/project" className="home-about-button home-about-button-see-project tech-icons px-4">
                  See projects
                </Link>
              </div>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/GuchiRey" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/agustin-rey-a6093a200/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
