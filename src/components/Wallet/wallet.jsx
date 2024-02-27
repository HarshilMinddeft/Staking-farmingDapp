import { useState, useEffect, Children } from "react";
import { connectWallet } from "../../utils/connectWallet";
import React from "react";
import Web3Context from "../../context/Web3Context";
import Button from "../button";
import { handleAccChange } from "../../utils/handelaccountchange";
import { handlechainChange } from "../../utils/handleChainChange";
const Wallet = ({ children }) => {
  const [state, setState] = useState({
    provider: null,
    selectedAccount: null,
    stakingContract: null,
    stakingTokenContract: null,
    chainid: null,
  });

  const [isLoding, setIsLoading] = useState(false);

  useEffect(() => {
    window.ethereum.on("accountsChanged", () => handleAccChange(setState));
    window.ethereum.on("chainChanged", () => handlechainChange(setState));
  });

  const handleWallet = async () => {
    try {
      setIsLoading(true);
      const {
        provider,
        selectedAccount,
        stakingContract,
        stakingTokenContract,
        chainid,
      } = await connectWallet();
      console.log(
        provider,
        selectedAccount,
        stakingContract,
        stakingTokenContract,
        chainid
      );
      setState({
        provider,
        selectedAccount,
        stakingContract,
        stakingTokenContract,
        chainid,
      });
    } catch (error) {
      console.error("Error connectingg wallet", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Web3Context.Provider value={state}>{children}</Web3Context.Provider>
      {isLoding && <p>Loding..</p>}
      <Button onClick={handleWallet} label="connectWallet" />
    </div>
  );
};

export default Wallet;
