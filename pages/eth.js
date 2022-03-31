import React, { useEffect } from 'react'
import { useMoralis } from 'react-moralis';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../constants'

export default function Eth() {
    const { Moralis } = useMoralis();

    useEffect(() => {
        Moralis.enableWeb3();
    }, [])
    

    // use to add ETH TO SC
    const addEth = async () => {
        const sendOptions = {
            contractAddress: CONTRACT_ADDRESS,
            abi: CONTRACT_ABI,
            functionName: "addETH",
            msgValue: Moralis.Units.ETH("0.001"), // Chage this to your desired value
        };
        const transaction = await Moralis.executeFunction(sendOptions);
        await transaction.wait();
        console.log("ADDING ETH TO SC SUCCESSFUL");
    }
    
    // 
    const sendEthToCaller = async (amount) => {
        const sendOptions = {
            contractAddress: CONTRACT_ADDRESS,
            abi: CONTRACT_ABI,
            functionName: "getETH",
            params: {
                amount: amount,
            },
        };
        const transaction = await Moralis.executeFunction(sendOptions);
        await transaction.wait();
        console.log("SENDS ETHs SUCCESSFUL");
    }

    const getEthBalace = async () => {
        const sendOptions = {
            contractAddress: CONTRACT_ADDRESS,
            abi: CONTRACT_ABI,
            functionName: "getETHBalance",
        };
        const data = await Moralis.executeFunction(sendOptions);
        // await transaction.wait();
        console.log("Total ETH In sc is", parseInt(data));
    }





    return (
        <div>
            <button onClick={addEth}>ADD ETH</button>

            <br/>

            <button onClick={() => sendEthToCaller(10000)}>GET SOME ETH TO ME</button>

            <br />


            {/* This is used to check balance of SC */}
            <button onClick={getEthBalace}>GET ETH BALANCE</button>






        </div>
    )
}
