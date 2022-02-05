import React, {useState} from "react";
import {Container} from "react-bootstrap";
import {EditorState, convertToRaw} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./EditorComp.scss";

const EditorComp = ({newValue}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    newValue(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };
  return (
    <Container className="editor-comp-container">
      <Editor
        editorState={editorState}
        wrapperClassName="editor-comp-wrapper"
        editorClassName="editor-comp-edit"
        onEditorStateChange={onEditorStateChange}
      />
    </Container>
  );
};

export default EditorComp;