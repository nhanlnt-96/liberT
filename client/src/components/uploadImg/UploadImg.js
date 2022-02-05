import React, {useRef, useState} from "react";
import {Container, Spinner} from "react-bootstrap";
import styled from "styled-components";
import firebase from "firebase/compat";
import {getStorage, deleteObject, ref} from "firebase/storage";
import {AiOutlineDelete} from "react-icons/all";
import {generateFileName} from "helpers/generateFileName";

const ButtonUpload = styled.button`
  border: none;
  outline: none;
  padding: 12px;
  border-radius: 5px;
`;

const UploadImg = ({
                     imgUrl,
                     setImgUrl,
                     imgName,
                     setImgName,
                     currentImg,
                     isMultiImg
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
    setImgName(fileName);
    const storageRef = firebase.storage().ref(`${fileName}`).put(fileUploaded);
    storageRef.on("state_changed", (snapshot) => {
    }, (error) => {
      console.log(error);
    }, async () => {
      await storageRef.snapshot.ref.getDownloadURL().then((url) => {
        setImgUrl(url);
        setIsLoading(false);
      });
    });
  };
  const onRemoveImgUpload = () => {
    const storage = getStorage();
    const desertRef = ref(storage, imgName);
    deleteObject(desertRef).then(() => {
      setImgUrl("");
    }).catch((error) => {
      console.error(error);
    });
  };
  return (
    <Container fluid className="upload-comp d-flex flex-column justify-content-center align-items-center">
      <input ref={hiddenFileInput} type="file" style={{display: "none"}} onChange={onUploadHandler}
             multiple={isMultiImg}/>
      <ButtonUpload onClick={onUploadBtnClick}>Upload image</ButtonUpload>
      {
        imgUrl ? (
          <div className="img-review d-flex justify-content-center align-items-center">
            <button className="remove-img" onClick={onRemoveImgUpload}><AiOutlineDelete/></button>
            <img src={imgUrl} alt="landz-admin"/>
          </div>
        ) : isLoading ? (
          <div style={{marginTop: 24}}>
            <Spinner animation="grow" variant="primary"/>
          </div>
        ) : (
          <div className="img-review d-flex justify-content-center align-items-center">
            <img src={currentImg} alt=""/>
          </div>
        )
      }
    </Container>
  );
};

export default UploadImg;