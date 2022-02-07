import React from "react";
import {Container, Row} from "react-bootstrap";
import PrimaryTitle from "components/primaryTitle/PrimaryTitle";
import ScrollDownComp from "components/ScrollDownComp/ScrollDownComp";
import {faqData} from "configs/faqData";

import "./MainFaq.scss";

const MainFaq = () => {
  return (
    <Container fluid className="main-container-height main-faq">
      <PrimaryTitle title={"faq"}/>
      <Container className="main-faq-container">
        <Row className="main-content-height main-faq-content">
          {
            faqData.map((val, index) => (
              <div className="faq-item-container">
                <div className="question d-flex justify-content-start">
                  <div className="question-container">
                    <div className="question-desc">{val.question}</div>
                  </div>
                </div>
                <div className="answer d-flex justify-content-end">
                  <div className="answer-container">
                    <div className="answer-desc">{val.answer}</div>
                  </div>
                </div>
              </div>
            ))
          }
        </Row>
      </Container>
      <ScrollDownComp/>
    </Container>
  );
};

export default MainFaq;