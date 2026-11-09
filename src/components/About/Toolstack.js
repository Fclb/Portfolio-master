import React from "react";
import { Col, Row } from "react-bootstrap";

import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import brave from "../../Assets/TechIcons/brave.svg";
import windows from "../../Assets/TechIcons/windows.svg";
import photoshop from "../../Assets/TechIcons/photoshop.svg";
import canva from "../../Assets/TechIcons/canva.svg";
import premiere from "../../Assets/TechIcons/premiere.svg"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={windows} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={brave} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Brave</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={photoshop} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Photoshop</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={canva} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Canva</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={premiere} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Premiere Pro</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
