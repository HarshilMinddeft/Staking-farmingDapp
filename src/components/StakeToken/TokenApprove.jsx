import { useState,useContext,useRef } from "react";
import {ethers} from 'ethers'
import Button from "../button";

const TokenApproval = () => {
    const approvedTokenRef = useRef();
    const approveToken =async(e)=>{
        e.preventDefault()
        const amount =  approvedTokenRef.current.value.trim();
        if(isNaN(amount) || amount<=0){
            console.error("please enter a valid no")
            return;
        }
        const amountToSend= ethers.parseUnits(amount,18).toString();
    }
  return <div>
        <form  onSubmit={approveToken}>
            <label>Token Approval:</label>
            <input type="text"></input>
            <Button onClick={approveToken} ref={approvedTokenRef} type="submit" label="Token Approve"/>
        </form>

  </div>;
};

export default TokenApproval;
