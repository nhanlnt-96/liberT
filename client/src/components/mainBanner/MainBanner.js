import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import MainHeader from "components/mainHeader/MainHeader";
import RightImg from "assets/imgs/banner/rightImg.png";

import "./MainBanner.scss";
import ScrollDownComp from "components/ScrollDownComp/ScrollDownComp";

const MainBanner = () => {
  return (
    <Container fluid className="main-banner">
      <MainHeader/>
      <Row className="main-content-height main-banner-content">
        <Col lg={8} md={7} className="main-banner-left">
          <Container
            className="d-flex flex-column justify-content-center align-items-center main-banner-left__container">
            <div className="fw-bold text-center text-center main-banner-title">we are change</div>
            <div className="fw-bold text-center main-banner-subtitle">LIBER-T Token is all about freedom</div>
            <div className="text-center main-banner-description">Scroll down to learn more about our foundation,
              affiliates, and network.
            </div>
            <div className="main-banner-button">
              <button className="button-item">Learn more</button>
            </div>
          </Container>
        </Col>
        <Col lg={4} md={5} className="main-banner-right">
          <img src={RightImg} alt="liberT-img"/>
        </Col>
      </Row>
      <ScrollDownComp/>
    </Container>
  );
};

export default MainBanner;