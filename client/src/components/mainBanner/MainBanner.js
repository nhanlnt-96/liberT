import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import MainHeader from "components/mainHeader/MainHeader";
import RightImg from "assets/imgs/banner/rightImg.png";
import ScrollDownComp from "components/ScrollDownComp/ScrollDownComp";
import {useDispatch, useSelector} from "react-redux";
import MintBoxComp from "components/mintBox/MintBoxComp";
import {connect} from "redux/blockchain/blockchainActions";
import {fetchData} from "redux/data/dataActions";

import "./MainBanner.scss";

const MainBanner = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  return (
    <Container fluid className="main-banner">
      <MainHeader/>
      <Row className="main-content-height main-banner-content">
        <Col lg={7} md={12} className="main-banner-left">
          <Container
            className="d-flex flex-column justify-content-center align-items-center main-banner-left__container">
            <div className="fw-bold text-center text-center main-banner-title">we are change</div>
            <div className="fw-bold text-center main-banner-subtitle">LIBER-T Token is all about freedom</div>
            <div className="text-center main-banner-description">Scroll down to learn more about our foundation,
              affiliates, and network.
            </div>
            <div className="main-banner-button">
              {
                !blockchain.account && <button onClick={(e) => {
                  e.preventDefault();
                  dispatch(connect());
                  getData();
                }} className="button-item">Learn more</button>
              }
            </div>
          </Container>
        </Col>
        <Col lg={5} md={12} className="main-banner-right" style={{display: `${blockchain.account && "flex"}`}}>
          {
            blockchain.account ? (
              <MintBoxComp/>
            ) : (
              <img src={RightImg} alt="liberT-img"/>
            )
          }
        </Col>
      </Row>
      <ScrollDownComp/>
    </Container>
  );
};

export default MainBanner;