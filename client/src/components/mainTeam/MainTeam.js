import React from "react";
import {Container, Row} from "react-bootstrap";
import PrimaryTitle from "components/primaryTitle/PrimaryTitle";
import BgShape from "assets/shapes/howShapeBg.png";

import "./MainTeam.scss";
import {teamData} from "configs/teamData";

const MainTeam = () => {
  return (
    <Container fluid className="main-container-height main-team">
      <PrimaryTitle title={"team"}/>
      <img src={BgShape} alt="" className="main-team-img"/>
      <Container className="main-team-container">
        <Row
          className="main-content-height main-team-content d-flex flex-column justify-content-center align-items-center">
          {
            teamData.map((val, index) => (
              <div key={index} className="item-container">
                <div className="member-info d-flex flex-column justify-content-center align-items-center">
                  <div className="member-ava d-flex justify-content-center align-items-center">
                    <img src={val.ava} alt={`${val.name}-ava`}/>
                  </div>
                  <div className="member-name">{val.name}</div>
                  <div className="member-position">{val.position}</div>
                </div>
              </div>
            ))
          }
        </Row>
      </Container>
    </Container>
  );
};

export default MainTeam;