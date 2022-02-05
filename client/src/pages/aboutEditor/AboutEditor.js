import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import EditorComp from "components/editor/EditorComp";
import UploadImg from "components/uploadImg/UploadImg";
import Homepage from "pages/homepage/Homepage";
import EditorTitle from "components/editorTitle/EditorTitle";

const AboutEditor = () => {
  return (
    <Container fluid className="editor-container">
      <Row className="editor-top-container">
        <Col className="editor-item">
          <EditorTitle title={"About's Content"}/>
          <EditorComp/>
        </Col>
        <Col className="editor-item">
          <EditorTitle title={"Image Upload"}/>
          <UploadImg/>
        </Col>
      </Row>
      <Row className="editor-update-button">
        <div className="update-button-container d-flex justify-content-center align-items-center">
          <Button className="update-btn">Update</Button>
        </div>
      </Row>
      <Row>
        <EditorTitle title={"Preview"}/>
        <Homepage/>
      </Row>
    </Container>
  );
};

export default AboutEditor;