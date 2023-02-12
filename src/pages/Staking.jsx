import Navbar from "../components/Navbar/Navbar";
import { StakingPoolClass } from "../web3";
import { useState,useEffect } from "react";
import { useSigner } from "wagmi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createClient, configureChains, } from 'wagmi'
import { useNetwork, useSwitchNetwork } from 'wagmi'
import  {ethers}  from "ethers";
import { convertEthersToWei } from "../web3/priceOracle";
export default function Staking() {
  const { data: signer, isError, isLoading } = useSigner()
  const { chains, error, pendingChainId, switchNetwork } =useSwitchNetwork()
  const [userAddress,setUserAddress]=useState('')
  const { chain } = useNetwork()
  const [amount,setAmount]=useState()
  const StakingPool=new StakingPoolClass("0x5EFbde98f336769E0Ff45A05f9E6dc7A75a25fbB","0x2Fd8894A7F280cE00C362ef1BB51d9B0F42c5931",signer,new ethers.providers.JsonRpcProvider(chain.rpcUrls.default.http[0]))
  
  async function Transact(){
    const valueInWei=convertEthersToWei(amount,18).toString()
    //check if amount is set
    if(amount){
      const valueInWei=convertEthersToWei(amount,18)
    //check allowance
    StakingPool.increaseAllowance("0x5EFbde98f336769E0Ff45A05f9E6dc7A75a25fbB",valueInWei.toString()).then(res=>{
      toast.success("approval Complete")
    StakingPool.stake(valueInWei.toString()).then(res=>
      toast.success("SUCESSFULLY STAKED"))
    }).catch(err=>{
      toast.error("STAKING ERROR OCCURRED")
    }).catch(err=>{
      toast.error("ALLOW ERROR OCCURED")
    })
  }else{
    toast.error("Stake amount is not Set")
  }
  }

  async function WithDraw(){
    await StakingPool.withDraw().then(res=>{
      console.log({res})
    }).catch(err=>{
      toast.error(err.error.data.message)
     // console.log((err.error.data.message))
    })
  }
  useEffect(() => {
    if(chain){  
      
     // console.log(allowanceAmount)
     if(chain.id!==4002){
       toast.error("THIS POOL EXIST ON ANOTHER CHAIN")
       switchNetwork?.(4002)
     }
    }
 }, [])

  //stake
  return (
    <div className="staking">
      <Navbar />
      <div className="hero-section">
      <ToastContainer />
        <div className="hero-container">
        <div>
          Staking Balance:{}
        </div>
          <input onChange={(e)=>{
             setAmount(e.target.value)
          }} type="number" placeholder="Input stake amount" />
          <button onClick={()=>{
             
            Transact()
          }} type="submit" className="hero-btn">
            <a href="#">Stake</a>
          </button>
          <button onClick={()=>{
            WithDraw()
          }} type="submit" className="hero-btn">
            <a href="#">WithDraw</a>
          </button>
        </div>
      </div>
    </div>
  );
}
