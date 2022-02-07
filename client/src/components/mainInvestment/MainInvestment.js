import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import PrimaryTitle from "components/primaryTitle/PrimaryTitle";
import ScrollDownComp from "components/ScrollDownComp/ScrollDownComp";
import LeftSideImg from "assets/shapes/investmentLeftSide.png";
import RightSideImg from "assets/imgs/investment/rightSideImg.webp";

import "./MainInvestment.scss";

const MainInvestment = () => {
  return (
    <Container fluid className="main-investment">
      <PrimaryTitle title={"investment summary"}/>
      <img src={LeftSideImg} alt="liberT" className="left-side-img"/>
      <Container className="main-investment-container">
        <Row className="main-content-height main-investment-content">
          <Col lg={7} md={7} className="main-investment-left d-flex align-items-center">
            <div className="main-investment-description">
              Liber T Token Inc. is an expanding corporate enterprise with a visionary business model that provides an
              excellent proven ROI model to Liber T Token Inc. investors. This is based on it’s innovative strategy of
              unifying a global member network through it’s crypto-currency, proprietary phone app, and our
              Proof-of-Concept experienced design / marketing team and consensus engine. Along with a well structured
              token distribution network, the T Inc. offering is a reliable, visionary and unique crypto currency for
              end users who will enjoy the expansive nature of our growing infrastructure and ROI strategy
            </div>
          </Col>
          <Col lg={5} md={5} className="main-investment-right d-flex justify-content-center align-items-center">
            <img src={RightSideImg} alt="liberT-investment"/>
          </Col>
        </Row>
      </Container>
      <ScrollDownComp/>
    </Container>
  );
};

export default MainInvestment;