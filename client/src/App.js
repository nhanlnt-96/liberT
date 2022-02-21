import React from "react";
import Introducing from "components/introducing/Introducing";
import NFTHighDemand from "components/nftHighDemand/NFTHighDemand";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";

function App() {
  return (
    <div style={{backgroundColor: "rgb(241, 241, 241)"}}>
      <Introducing/>
      <NFTHighDemand/>
    </div>
  );
}

export default App;
