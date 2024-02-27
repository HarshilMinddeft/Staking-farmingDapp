export const handleAccChange = async (setState) => {
  let chainidHex = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const chainId = parseInt(chainidHex, 16);
  console.log(chainId);
  setState((prevState) => ({ ...prevState, chainId }));
};
