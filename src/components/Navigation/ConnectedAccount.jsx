import { useContext } from "react";
import Web3Context from "../../context/Web3Context";
import React from "react";

const ConnectedAccount = () => {
  const { selectedAccount } = useContext(Web3Context);
  return <p>connectedAccounts:{selectedAccount}</p>;
};

export default ConnectedAccount;
