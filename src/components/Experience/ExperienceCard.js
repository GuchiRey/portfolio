import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard(props) {
  return (
    <Card className="experience-card-view">
      <Card.Body className="p-5">
        <Card.Title>{props.companyName}</Card.Title>
        <Card.Text>{props.role}</Card.Text>
        <Card.Text className="text-muted">{props.roleTime}</Card.Text>
        <div className="tech-item-container">
          {props.techStack.map(tech => (
            <div className="tech-item">{tech}</div>
          ))}
        </div>
        <Card.Text className="company-description">{props.companyDescription}</Card.Text>
        <Card.Text className="job-description">{props.jobDescription}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
