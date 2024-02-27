export const handlechainChange = async (setState) => {
  const accounts = await window.ethereum.request({
    method: "eth_chainId",
  });
  const selectedAccount = accounts[0];
  console.log(selectedAccount);
  setState((prevState) => ({ ...prevState, selectedAccount }));
};
