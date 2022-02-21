import React from "react";
import {Container} from "react-bootstrap";
import NFTImg from "assets/nftImg.jpg";

import "./NFTHighDemand.scss";

const NftHighDemand = () => {
  return (
    <Container fluid className="nft-high-demand-comp d-flex justify-content-center align-items-center">
      <Container fluid className="nft-high-demand-comp__container">
        <div className="left-side">
          <img src={NFTImg} alt="liberT"/>
        </div>
        <div className="right-side d-flex flex-column justify-content-center align-items-center">
          <div className="top-content">
            <p className="desc">NFTs are built on the same kind of infrastructure – blockchain – that cryptocurrencies
              are. Because they use blockchain, the transfer of an interest in NFTs is recorded on the blockchain,
              putting ownership on a permanent record, making it impossible (or at least very hard) to falsify.</p>
          </div>
          <div className="bottom-content">
            <div className="content-item">
              <div className="question-container">
                <p className="question">But why are NFTs in such high demand?</p>
              </div>
              <div className="answer-container">
                <p className="answer">The majority of the NFTs you purchase is nothing but a digital certificate that
                  you can't touch, wear or use in your everyday life.</p>
              </div>
            </div>
            <div className="content-item">
              <div className="question-container">
                <p className="question">What if you could?</p>
                <p className="question">What if wearable, & interactable NFTs came into the picture?</p>
              </div>
              <div className="answer-container">
                <p className="answer">Interactable & Wearable NFTs is doing just that, we're hear to change the game in
                  more ways than you can imagine.</p>
                <p className="answer">Everything from custom clothing, jewelry, RC Models, gaming charactors and more is
                  what you will find at I & W NFTs
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default NftHighDemand;