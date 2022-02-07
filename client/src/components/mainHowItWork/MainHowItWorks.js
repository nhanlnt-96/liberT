import React from "react";
import {Container, Row} from "react-bootstrap";
import PrimaryTitle from "components/primaryTitle/PrimaryTitle";
import {Section1, Section2} from "components/mainHowItWork/components";

import "./MainHowItWorks.scss";
import ScrollDownComp from "components/ScrollDownComp/ScrollDownComp";

const MainHowItWorks = () => {
  return (
    <Container fluid className="main-container-height main-how">
      <PrimaryTitle title={"how it works"}/>
      <div className="main-how-subtitle">
        <PrimaryTitle title={"solidarity - movement - change"}/>
      </div>
      <Container>
        <div className="main-how-section__1">
          <Section1/>
        </div>
        <div className="scroll-down">
          <ScrollDownComp/>
        </div>
        <div className="main-how-section__2">
          <Section2/>
        </div>
        <div className="scroll-down" style={{marginBottom: 0}}>
          <ScrollDownComp/>
        </div>
      </Container>
    </Container>
  );
};

export default MainHowItWorks;