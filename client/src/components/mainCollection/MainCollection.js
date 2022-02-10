import React from "react";
import {collectionData} from "configs/collectionData";
import {Container} from "react-bootstrap";

import "./MainCollection.scss";
import PrimaryTitle from "components/primaryTitle/PrimaryTitle";

const MainCollection = () => {
  return (
    <Container className="slideshow-comp" fluid>
      <div className="title-container">
        <PrimaryTitle title={"collection"}/>
      </div>
      <div className="slideshow-comp-slider">
        <div className="slideshow-comp-track">
          {
            collectionData.map((val, index) => (
              <div className="slideshow-comp-slide">
                <img key={index} src={val} alt="liberT"/>
              </div>
            ))
          }
          {
            collectionData.map((val, index) => (
              <div className="slideshow-comp-slide">
                <img key={index} src={val} alt="liberT"/>
              </div>
            ))
          }
        </div>
      </div>
    </Container>
  );
};

export default MainCollection;