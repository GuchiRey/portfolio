import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import jobExperience from "./experienceData";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <h1 className="project-heading">
        My job <strong className="purple"> experience </strong>
      </h1>
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {jobExperience.map(job => (
            <Col className="job-card" key={job.id}>
              <ExperienceCard
                companyName={job.companyName}
                role={job.role}
                roleTime={job.roleTime}
                techStack={job.techStack}
                companyDescription={job.companyDescription}
                jobDescription={job.jobDescription}
              />
            </Col>
          ))}
        </Row>
      </Container>
      {/* <Footer />  */}
    </Container>
  );
}

export default Experience;
