import { useState } from "react";
import "./App.css";
import Wallet from "./components/Wallet/wallet";
import Navigation from "./components/Navigation/Navigation";
import DisplayPannel from "./components/DisplayPannel/DisplayPannel";

function App() {
  return (
    <>
      <Wallet>
        <Navigation></Navigation>
        <DisplayPannel />
      </Wallet>
    </>
  );
}

export default App;
