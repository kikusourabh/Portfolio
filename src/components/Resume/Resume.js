import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Soumyajit-Behera.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import data from "../../Yourdata";
import Yourdata from "../../Yourdata";
import ReactPlayer from "react-player";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}></Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            {data.resume.Experience.map((value, index) => (
              <Resumecontent
                isExprience={true}
                title={value.title}
                date={value.date}
                company={value.company}
                content={value.description}
              />
            ))}
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            {data.resume.Education.map((value, index) => (
              <Resumecontent
                isExprience={false}
                title={value.title}
                date={value.date}
                content={value.content}
              />
            ))}
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent title="" content={Yourdata.resume.Achivement} />
            <br />
            <ReactPlayer url={data.youtube_videos[3].link} controls={true} />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            size="lg"
            variant="outline-dark"
            href={Yourdata.resume.pdf_link}
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
