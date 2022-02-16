import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {EditorState, convertToRaw, ContentState} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./EditorComp.scss";

const EditorComp = ({
                      newValue,
                      content
                    }) => {
  const blocksFromHtml = htmlToDraft(content);
  const {
    contentBlocks,
    entityMap
  } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
  const [editorState, setEditorState] = useState(EditorState.createWithContent(contentState));
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