import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Gbadejoko Muhammedfaadil</span>{" "}
            from <span className="purple">Lagos, Nigeria</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Freelance Software Developer</span>
            <span className="purple"></span>.
            <br />I hold an Integrated B.Sc. (B.Sc) in{" "}
            <span className="purple">Computing and Software development</span> from{" "}
            <span className="purple">Lead City</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing football ⚽
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Faadil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
