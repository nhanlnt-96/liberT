import React from "react";
import {Alert, Col, Container, Row} from "react-bootstrap";
import BgLogin from "../../assets/imgs/bgLogin.svg";
import * as Yup from "yup";
import {ErrorMessage, Form, Formik, Field} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {login} from "redux/auth/authAction";

import "./LoginPage.scss";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const errorMsg = useSelector((state) => state.auth.errorMsg);
  const initialValues = {
    username: "",
    password: ""
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().min(5).required()
  });
  const onLoginBtnClick = async (data) => {
    dispatch(login(data, navigate));
  };
  return (
    <Container fluid className="login-page">
      <Row className="login-page-container">
        <Col lg={6} md={7} sm={12} className="login-form-container d-flex justify-content-center align-items-center">
          <div className="login-form-box">
            <div className="login-form-title">
              <h2 className="title">Login to Admin page</h2>
            </div>
            {
              errorMsg && (
                <Alert style={{}} variant="danger" dismissible>
                  <Alert.Heading>Login failed</Alert.Heading>
                  <p>{errorMsg}</p>
                </Alert>
              )
            }
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onLoginBtnClick}>
              <Form className="form-container">
                <div className="field-container">
                  <label>Username *</label>
                  <Field className="input-field" autoComplete="off" name="username" placeholder="Enter your username"/>
                  <ErrorMessage className="error-message" name="username" component="span"/>
                </div>
                
                <div className="field-container">
                  <label>Password *</label>
                  <Field className="input-field" type="password" autoComplete="off" name="password"
                         placeholder="Enter your password"/>
                  <ErrorMessage className="error-message" name="password" component="span"/>
                </div>
                
                <button disabled={isLoading} className="login-button"
                        type="submit">{isLoading ? "Logging..." : "Login"}</button>
              </Form>
            </Formik>
          </div>
        </Col>
        <Col lg={6} md={5} sm={12} className="login-page-bg d-flex justify-content-center align-items-center">
          <img src={BgLogin} alt="login-page"/>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;