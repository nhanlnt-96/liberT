import React from "react";
import {Container, Row} from "react-bootstrap";
import TopImg from "../../assets/bg.jpg";
import {FaQuoteRight} from "react-icons/all";

import "./Introducing.scss";

const Introducing = () => {
  return (
    <Container fluid className="introducing-comp">
      <Row className="introducing-comp-top">
        <img src={TopImg} alt=""/>
      </Row>
      <Container className="introducing-comp-container">
        <div className="content-title">
          <h1 className="title">What is an NFT?</h1>
        </div>
        <div className="content-container">
          <p className="desc">An NFT is a digital asset that is very unique – that is, non-fungible. An NFT can
            represent a number of digital properties, including artwork, collectibles, video snippets, an item
            from a video game or even a music album, among others. The main thing is that.</p>
          <div className="content-quote">
            <div className="content-quote-container">
              <div className="center-quote d-flex justify-content-center align-items-center">
                <FaQuoteRight/>
              </div>
              <div className="content-quote-detail">
                <p className="content-detail">It can’t be traded with another one, like a dollar can be traded for
                  another
                  dollar.</p>
              </div>
            </div>
            <div className="content-quote-author d-flex flex-column justify-content-center align-items-center">
              <p className="author">- Dr. Richard Smith -</p>
              <p className="author-position">CEO of The Foundation for the Study of Cycles, explaining
                non-fungibility</p>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Introducing;