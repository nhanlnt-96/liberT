import React from "react";
import {Container, Row} from "react-bootstrap";
import MainBanner from "components/mainBanner/MainBanner";
import MainInvestment from "components/mainInvestment/MainInvestment";

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
    </Container>
  );
};

export default Homepage;