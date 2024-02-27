import { useState, useEffect, useContext } from "react";
import Web3Context from "../../context/Web3Context";
import { ethers } from "ethers";
const EarnedReward = () => {
  const { stakingContract, selectedAccount } = useContext(Web3Context);
  const [EarnedRate, setEarned] = useState("0");
  useEffect(() => {
    const fetchStakeRewardInfo = async () => {
      try {
        const EarnRewardvalWei = await stakingContract.earned(selectedAccount);
        const rewardValEth = ethers.formatUnits(
          EarnRewardvalWei.toString(),
          18
        );
        const roundedReward = parseFloat(rewardValEth).toFixed(2);
        setEarned(roundedReward);
      } catch (error) {
        console.error("error fetching data", error.message);
      }
    };
    stakingContract && fetchStakeRewardInfo();
  }, [stakingContract, selectedAccount]);
  return <p>Reward rate:{EarnedRate}/persecond</p>;
};

export default EarnedReward;
