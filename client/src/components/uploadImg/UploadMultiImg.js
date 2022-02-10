import React, {useRef, useState} from "react";
import {AiOutlineDelete} from "react-icons/all";
import {Container, Spinner} from "react-bootstrap";
import {ButtonUpload} from "components/uploadImg/UploadImg";
import {generateFileName} from "helpers/generateFileName";
import firebase from "firebase/compat";
import {deleteObject, getStorage, ref} from "firebase/storage";
import api from "configs/axios";

export const UploadMultiImg = ({
                                 imgFolder,
                                 imgData,
                                 setImgData,
                                 currentImg
                               }) => {
  const hiddenFilesInput = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const onUploadBtnClick = (e) => {
    hiddenFilesInput.current.click();
  };
  const onUploadHandler = (e) => {
    setIsLoading(true);
    const imgToStore = [];
    const fileUploaded = e.target.files;
    for (let i = 0; i < fileUploaded.length; i++) {
      const fileName = generateFileName(fileUploaded[i].name);
      const storageRef = firebase.storage().ref(`${imgFolder}/${fileName}`).put(fileUploaded[i]);
      storageRef.on("state_changed", (snapshot) => {
      }, (error) => {
        console.log(error);
        setIsLoading(false);
      }, async () => {
        await storageRef.snapshot.ref.getDownloadURL().then((url) => {
          imgToStore.push({
            imgName: fileName,
            imgUrl: url
          });
        });
      });
    }
    setImgData(imgToStore);
    setIsLoading(false);
    console.log("done");
  };
  const onRemoveImgUpload = (imgFolder, imgName, imageId) => {
    setIsLoading(true);
    const storage = getStorage();
    const desertRef = ref(storage, `${imgFolder}/${imgName}`);
    deleteObject(desertRef).then(async () => {
      if (imageId) {
        await api.delete(`collections/${imageId}`).then(() => {
          setIsLoading(false);
        });
      }
      setIsLoading(false);
    }).catch((error) => {
      setIsLoading(false);
      console.error(error);
    });
  };
  return (
    <Container fluid
               className="upload-comp d-flex flex-column justify-content-center align-items-center overflow-scroll">
      <div className="upload-btn">
        <input ref={hiddenFilesInput} type="file" style={{display: "none"}} onChange={onUploadHandler}
               multiple={true}/>
        <ButtonUpload onClick={onUploadBtnClick}>Upload images</ButtonUpload>
      </div>
      {
        imgData.length > 0 ? (
          <div className="multi-img-preview d-flex justify-content-center align-items-center">
            {
              imgData.map((val, index) => (
                <div key={index} className="img-preview-container">
                  <button title="Remove image" className="remove-img"
                          onClick={() => onRemoveImgUpload(imgFolder, val.imgName)}>
                    <AiOutlineDelete/>
                  </button>
                  <img src={val.imgUrl} alt="liberT-admin"/>
                </div>
              ))
            }
          </div>
        ) : isLoading ? (
          <div style={{marginTop: 24}}>
            <Spinner animation="grow" variant="primary"/>
          </div>
        ) : currentImg.length > 0 && (
          <div className="multi-img-preview d-flex justify-content-center align-items-center overflow-scroll">
            {
              currentImg.map((val, index) => (
                <div key={index} className="img-preview-container">
                  <button title="Remove image" className="remove-img"
                          onClick={() => onRemoveImgUpload(imgFolder, val.imageName, val.id)}>
                    <AiOutlineDelete/>
                  </button>
                  <img src={val.imageUrl} alt="liberT-admin"/>
                </div>
              ))
            }
          </div>
        )
      }
    </Container>
  );
};