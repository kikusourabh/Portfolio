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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data.projects[4].image_path}
              isBlog={false}
              title={data.projects[4].name}
              description={data.projects[4].description}
              link={data.projects[4].link}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data.projects[3].image_path}
              isBlog={false}
              title={data.projects[3].name}
              description={data.projects[3].description}
              link={data.projects[3].link}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data.projects[2].image_path}
              isBlog={false}
              title={data.projects[2].name}
              description={data.projects[2].description}
              link={data.projects[2].link}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data.projects[1].image_path}
              isBlog={false}
              title={data.projects[1].name}
              description={data.projects[1].description}
              link={data.projects[1].link}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data.projects[0].image_path}
              isBlog={false}
              title={data.projects[0].name}
              description={data.projects[0].description}
              link={data.projects[0].link}
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Most <strong className="purple">viewed video</strong> on youtube
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={data.youtube_videos[0].thumbnail}
              link={data.youtube_videos[0].link}
              title={data.youtube_videos[0].title}
              site={data.youtube_videos[0].link}
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={data.youtube_videos[1].thumbnail}
              link={data.youtube_videos[1].link}
              title={data.youtube_videos[1].title}
              site={data.youtube_videos[1].link}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <ReactPlayer url={data.youtube_videos[2].link} controls={true} />
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
