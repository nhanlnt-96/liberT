import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import EditorTitle from "components/editorTitle/EditorTitle";
import EditorComp from "components/editor/EditorComp";
import MainRoadmap from "components/mainRoadmap/MainRoadmap";
import {useDispatch, useSelector} from "react-redux";
import api from "configs/axios";
import {finishUpdate} from "redux/finishUpdate/finishUpdateAction";
import {getRoadmapContent} from "redux/roadmapContent/roadmapContentAction";
import MainFaq from "components/mainFaq/MainFaq";
import {getFaqContent} from "redux/faqContent/faqContentAction";
import LoadingComp from "components/loadingComp/LoadingComp";

const FaqEditor = () => {
  const dispatch = useDispatch();
  const faqContent = useSelector((state) => state.faqContent);
  const [isLoading, setIsLoading] = useState(false);
  const [faqSelected, setFaqSelected] = useState("");
  const [faqQuestion, setFaqQuestion] = useState("");
  const [faqAnswer, setFaqAnswer] = useState("");
  const onSelectPhaseHandler = (e) => {
    setFaqSelected(e.target.value);
  };
  const onUpdateBtnClick = async () => {
    setIsLoading(true);
    const response = await api.patch(`faq/update/${faqContent.faqData[faqSelected].id}`, {
      question: faqQuestion || faqContent.faqData[faqSelected].question,
      answer: faqAnswer || faqContent.faqData[faqSelected].answer
    });
    if (response.data.success) {
      setIsLoading(false);
      dispatch(finishUpdate(true));
      setFaqQuestion("");
      setFaqAnswer("");
      dispatch(getFaqContent());
    }
  };
  return (
    <Container fluid className="editor-container">
      {
        faqContent.faqData.length <= 0 ? (
          <LoadingComp/>
        ) : (
          <>
            <Row className="editor-top-container">
              <Col className="editor-item d-flex flex-column justify-content-center align-items-center">
                <EditorTitle title={"Select FAQ to edit"}/>
                <Form.Group onChange={onSelectPhaseHandler} className="how-work-select">
                  <Form.Select>
                    <option disabled selected>Select part</option>
                    {
                      faqContent.faqData.map((val, index) => (
                        <option key={index} value={index}>Question {index + 1}</option>
                      ))
                    }
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row className="editor-top-container">
              <Col className="editor-item">
                <EditorTitle title={"FAQ's Question"}/>
                <EditorComp newValue={setFaqQuestion} content={faqContent.faqData?.question || ""}/>
              </Col>
              <Col className="editor-item">
                <EditorTitle title={"FAQ's Answer"}/>
                <EditorComp newValue={setFaqAnswer} content={faqContent.faqData?.answer || ""}/>
              </Col>
            </Row>
            <Row className="editor-update-button">
              <div className="update-button-container d-flex justify-content-center align-items-center">
                <Button className="update-btn" onClick={onUpdateBtnClick}
                        disabled={isLoading || !faqSelected}>{isLoading ? "Updating" : "Update"}</Button>
              </div>
            </Row>
          </>
        )
      }
      <Row>
        <EditorTitle title={"Preview"}/>
        <MainFaq/>
      </Row>
    </Container>
  );
};

export default FaqEditor;