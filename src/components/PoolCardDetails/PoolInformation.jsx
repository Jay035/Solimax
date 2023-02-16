import { Chain } from "wagmi";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { useSigner } from "wagmi";
import { LaunchPoolClass } from "../../web3";
import { useNetwork, useSwitchNetwork } from "wagmi";
import { convertweiToEthers } from "../../web3/priceOracle";

export default function PoolInformation({ pool }) {
  const { chain } = useNetwork();
  const [cChain,setCChain]=useState(chain)
  const [tierDetails, setTierDetails] = useState({
    maxTierCap: 0,
    minUserCap: 0,
    maxUserCap: 0,
    amountRaised: 0,
    users: 0,
  });
  const { chains, error, pendingChainId, switchNetwork } = useSwitchNetwork();
  const { data: signer, isError, isLoading } = useSigner();
   function poolChain(chains){
   // console.log(pool.chain)
    return  chains.filter(x=>x.id===pool[0].chain)
  }
  useEffect(() => {
    if(chains){
  const currentChain= poolChain(chains)
  setCChain(currentChain[0])
  console.log(currentChain[0])
    }
    newLaunchPool.getTierDetails().then((res) => {
      console.log({tier:res});
      setTierDetails(res);
    });
  }, [])
  
  const newLaunchPool = new LaunchPoolClass(
    "0x11E3a64e14fe06a146eEaDb040Adc7AAb005671C",
    "0x2Fd8894A7F280cE00C362ef1BB51d9B0F42c5931",
    1,
    signer,
    new ethers.providers.JsonRpcProvider("https://fantom-testnet.public.blastapi.io")
  );
  return (
    <div className="details pool-information">
      <h1>Pool Information</h1>
      <div className="group">
        <div className="">
          <h2 className="details-title">Token Distribution</h2>
          <p className="value">{pool[0]?.tokenDistribution}</p>
        </div>
        <div className="">
          <h2 className="details-title">Minimum Allocation</h2>
          <p className="value">{convertweiToEthers(tierDetails.minUserCap,18)}</p>
        </div>
        <div className="">
          <h2 className="details-title">Maximum Allocation</h2>
          <p className="value">{convertweiToEthers(tierDetails.maxUserCap,18)}</p>
        </div>
        <div className="">
          <h2 className="details-title">Token Price</h2>
          <p className="value">{pool[0]?.tokenPrice}</p>
        </div>
        <div className="access">
          <h2 className="details-title">Access</h2>
          <p className="value">{pool[0]?.access}</p>
        </div>
      </div>
    </div>
  );
}
