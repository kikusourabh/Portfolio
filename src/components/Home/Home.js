import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Profile from "../../Assets/user-profile.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import data from "../../Yourdata";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1
                style={{ paddingBottom: 15, color: "black" }}
                className="heading"
              >
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name" style={{ color: "black" }}>
                I'm
                <strong className="main-name">{" " + data.name}</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                <Button
                  size="lg"
                  variant="outline-dark"
                  href="https://www.upwork.com/freelancers/~01b4ca45ee1a991b88?viewMode=1"
                >
                  Hire me
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={Profile} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;