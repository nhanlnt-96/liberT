import React from "react";
import {Container, Row} from "react-bootstrap";
import PrimaryTitle from "components/primaryTitle/PrimaryTitle";
import ScrollDownComp from "components/ScrollDownComp/ScrollDownComp";
import {roadmapData} from "configs/roadmapData";

import "./MainRoadmap.scss";

const MainRoadmap = () => {
  return (
    <Container fluid className="main-container-height main-roadmap">
      <PrimaryTitle title={"roadmap"}/>
      <Container className="main-roadmap-container">
        <Row
          className="main-content-height main-roadmap-content d-flex flex-column justify-content-center align-items-center">
          {
            roadmapData.map((val, index) => (
              <div key={index} className="main-roadmap-item">
                <div className="item-title">{val.title}</div>
                <div className="item-desc">{val.desc}</div>
              </div>
            ))
          }
        </Row>
      </Container>
      <ScrollDownComp/>
    </Container>
  );
};

export default MainRoadmap;