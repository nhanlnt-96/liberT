import React from "react";
import {Container, Row} from "react-bootstrap";
import MainBanner from "components/mainBanner/MainBanner";

const Homepage = () => {
  return (
    <Container fluid className="homepage-container">
      <Row id="home">
        <MainBanner/>
      </Row>
    </Container>
  );
};

export default Homepage;