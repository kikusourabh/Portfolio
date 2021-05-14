import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ color: "black" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", color: "black" }}>
          {props.description}
        </Card.Text>
        <Button
          size="lg"
          variant="outline-dark"
          href={props.link}
          target="_blank"
        >
          <BiLinkExternal /> &nbsp; View Project
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
