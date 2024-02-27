import { useState, useEffect, useContext } from "react";
import Web3Context from "../../context/Web3Context";
import { ethers } from "ethers";

const RewardRate = () => {
  const { stakingContract, selectedAccount } = useContext(Web3Context);
  const [rewardRate, setRewardRate] = useState("0");

  useEffect(() => {
    const fetchRewardRate = async () => {
      try {
        const rewardRate = await stakingContract.REWARD_RATE();
        const amountStakedEth = ethers.formatUnits(rewardRate.toString(), 18);
        setRewardRate(amountStakedEth);
      } catch (error) {
        console.error("error fetching data", error.message);
      }
    };
    stakingContract && fetchRewardRate();
  }, [stakingContract, selectedAccount]);
  return <p>Reward rate:{rewardRate}/persecond</p>;
};

export default RewardRate;
