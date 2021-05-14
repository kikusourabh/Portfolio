import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import ReactPlayer from "react-player";

import data from "../../Yourdata";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {data.projects.map((value, index) => (
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={value.image_path}
                isBlog={false}
                title={value.name}
                description={value.description}
                link={value.link}
              />
            </Col>
          ))}
        </Row>
        <h1 className="project-heading">
          My Most <strong className="purple">viewed video</strong> on youtube
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          {data.youtube_videos.map((value, index) =>
            index <= 1 ? (
              <Col md={4} className="blog-card">
                <BlogCard
                  imgPath={value.thumbnail}
                  link={value.link}
                  title={value.title}
                  site={value.link}
                />
              </Col>
            ) : null
          )}
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <ReactPlayer url={data.youtube_videos[2].link} controls={true} />
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
