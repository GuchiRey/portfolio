import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="card-img-body">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="card-proyect-text" style={{ textAlign: "justify" }}>{props.description}</Card.Text>
        <div className="proyect-card-buttons">
          {props.ghLink && (
            <div>
              <Button variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp; GitHub
              </Button>
              {"\n"}
              {"\n"}
            </div>
          )}
          {props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank" style={{ marginLeft: "10px" }}>
              <CgWebsite /> &nbsp;
              {"Website"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
