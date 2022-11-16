import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Agustin Rey</span>
            from <span className="purple"> Argentina.</span>
            <br />I am a full stack web developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight style={{ marginRight: "5px" }} /> Playing videogames
            </li>
            <li className="about-activity">
              <ImPointRight style={{ marginRight: "5px" }} /> Writting music
            </li>
            <li className="about-activity">
              <ImPointRight style={{ marginRight: "5px" }} /> Playing the guitar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"It's about how hard you can get hit and keep moving forward." </p>
          <footer className="blockquote-footer">Rocky Balboa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
