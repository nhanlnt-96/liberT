import React from "react";
import {Container, Row} from "react-bootstrap";
import MainBanner from "components/mainBanner/MainBanner";
import MainInvestment from "components/mainInvestment/MainInvestment";
import MainHowItWorks from "components/mainHowItWork/MainHowItWorks";
import MainRoadmap from "components/mainRoadmap/MainRoadmap";

import "./Homepage.scss";

const Homepage = () => {
  return (
    <Container fluid className="homepage-container">
      <Row id="home">
        <MainBanner/>
      </Row>
      <Row id="investment">
        <MainInvestment/>
      </Row>
      <Row id="how-it-works">
        <MainHowItWorks/>
      </Row>
      <Row id="roadmap">
        <MainRoadmap/>
      </Row>
    </Container>
  );
};

export default Homepage;