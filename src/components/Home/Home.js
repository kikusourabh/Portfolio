import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
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
                <div style={{ paddingTop: 50, textAlign: "left" }}>
                  <Button
                    size="lg"
                    variant="outline-dark"
                    href={data.hire_me_link}
                  >
                    Hire me
                  </Button>
                </div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={data.Profile_path}
                alt="home pic"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;
