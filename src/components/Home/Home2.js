import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/code.svg";
import Tilt from "react-parallax-tilt";
import Techstack from "./Techstack";
import data from "../../Yourdata";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "black" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              {data.introPara1.light}
              <br />
              <i>
                <b className="purple">{data.introPara1.dark}</b>
              </i>
              <br />
              <br />
              {data.introPara2.light} &nbsp;
              <i>
                <b className="purple">{data.introPara2.dark} </b>{" "}
                {data.introPara3.light + " "}
                <b className="purple">{data.introPara3.dark}</b>
              </i>
              <br />
              <br />
              {data.introPara4}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
