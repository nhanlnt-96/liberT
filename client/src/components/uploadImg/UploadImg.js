import React, {useRef, useState} from "react";
import {Container, Spinner} from "react-bootstrap";
import styled from "styled-components";
import firebase from "firebase/compat";
import {getStorage, deleteObject, ref} from "firebase/storage";
import {AiOutlineDelete} from "react-icons/all";
import {generateFileName} from "helpers/generateFileName";

import "./UploadImg.scss";

export const ButtonUpload = styled.button`
  border: none;
  outline: none;
  padding: 12px;
  border-radius: 5px;
`;

export const UploadImg = ({
                            imgFolder,
                            imgInfo,
                            setImgInfo,
                            currentImgName,
                            currentImgUrl
                          }) => {
  const hiddenFileInput = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const onUploadBtnClick = (e) => {
    hiddenFileInput.current.click();
  };
  const onUploadHandler = (e) => {
    setIsLoading(true);
    const fileUploaded = e.target.files[0];
    const fileName = generateFileName(fileUploaded.name);
    const storageRef = firebase.storage().ref(`${imgFolder}/${fileName}`).put(fileUploaded);
    storageRef.on("state_changed", (snapshot) => {
    }, (error) => {
      console.log(error);
      setIsLoading(false);
    }, async () => {
      await storageRef.snapshot.ref.getDownloadURL().then((url) => {
        setImgInfo({
          imgName: fileName,
          imgUrl: url
        });
        setIsLoading(false);
      });
    });
  };
  const onRemoveImgUpload = (imgFolder, imgName) => {
    setIsLoading(true);
    const storage = getStorage();
    const desertRef = ref(storage, `${imgFolder}/${imgName}`);
    deleteObject(desertRef).then(() => {
      setIsLoading(false);
      if (!currentImgUrl) setImgInfo({
        imgName: "",
        imgUrl: ""
      });
    }).catch((error) => {
      setIsLoading(false);
      console.error(error);
    });
  };
  return (
    <Container fluid className="upload-comp d-flex flex-column justify-content-center align-items-center">
      {
        !imgInfo.imgUrl && (
          <div className="upload-btn">
            <input ref={hiddenFileInput} type="file" style={{display: "none"}} onChange={onUploadHandler}/>
            <ButtonUpload onClick={onUploadBtnClick}>Upload image</ButtonUpload>
          </div>
        )
      }
      {
        imgInfo.imgUrl ? (
          <div className="img-preview d-flex flex-column justify-content-center align-items-center">
            <button title="Remove image" className="remove-img"
                    onClick={() => onRemoveImgUpload(imgFolder, imgInfo.imgName)}>
              <AiOutlineDelete/>
            </button>
            <img src={imgInfo.imgUrl} alt="liberT-admin"/>
          </div>
        ) : isLoading ? (
          <div style={{marginTop: 24}}>
            <Spinner animation="grow" variant="primary"/>
          </div>
        ) : currentImgUrl && (
          <div className="img-preview d-flex flex-column justify-content-center align-items-center">
            <button title="Remove image" className="remove-img"
                    onClick={() => onRemoveImgUpload(imgFolder, currentImgName)}>
              <AiOutlineDelete/>
            </button>
            <img src={currentImgUrl} alt="liberT-admin"/>
          </div>
        )
      }
    </Container>
  );
};