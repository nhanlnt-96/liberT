import React from "react";
import {Container} from "react-bootstrap";
import MainHeader from "components/mainHeader/MainHeader";

const Homepage = () => {
  return (
    <Container fluid style={{height: "100vh"}} className="bg-dark">
      <MainHeader/>
    </Container>
  );
};

export default Homepage;