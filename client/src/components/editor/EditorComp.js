import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {EditorState, convertToRaw} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./EditorComp.scss";
import {useDispatch, useSelector} from "react-redux";
import {finishUpdate} from "redux/finishUpdate/finishUpdateAction";

const EditorComp = ({newValue}) => {
  const dispatch = useDispatch();
  const isFinishUpdate = useSelector(state => state.finishUpdate.isFinishUpdate);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    dispatch(finishUpdate(false));
    setEditorState(editorState);
    newValue(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };
  useEffect(() => {
    if (isFinishUpdate) {
      setEditorState(EditorState.createEmpty());
    }
  }, [isFinishUpdate]);
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