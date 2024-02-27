import { useContext } from "react";
import Web3Context from "../../context/Web3Context";

const ConnextedNewNetwork = () => {
  const { chainId } = useContext(Web3Context);
  if (chainId === 11155111) {
    return <p>Connected to Sepolia</p>;
  } else {
    return <p>Connedted Netowrk not supported</p>;
  }
};

export default ConnextedNewNetwork;
