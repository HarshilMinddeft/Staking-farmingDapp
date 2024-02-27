import { ethers, Contract } from "ethers";
import stakingabi from "../ABI/stakingAbi.json";
import stakeTokenAbi from "../ABI/stakeTokenAbi.json";

export const connectWallet = async () => {
  try {
    let [signer, provider, stakingContract, stakeTokenContract, chainid] = [
      null,
    ];

    if (window.ethereum == null) {
      throw new Error("metakask not installed");
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    let chainIdHex = await window.ethereum.request({
      method: "eth_chainId",
    });
    console.log("chainIdHex:", chainIdHex);
    chainid = parseInt(chainIdHex, 16);
    console.log("chainid:", chainid);

    let selectedAccount = accounts[0];
    if (!selectedAccount) {
      throw new Error("No ethereum account awailable");
    }

    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();

    const stakingContractAddress = "0xfaf223F7023877439D8C52fF2b0D0882631Ab366";
    const stakeTokenContractAddress =
      "0x70e3b7f65166c0a7b88e9c47d2faf6c05acd2872";

    stakingContract = new Contract(stakingContractAddress, stakingabi, signer);
    stakeTokenContract = new Contract(
      stakeTokenContractAddress,
      stakeTokenAbi,
      signer
    );
    return {
      provider,
      selectedAccount,
      stakeTokenContract,
      stakingContract,
      chainid,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
