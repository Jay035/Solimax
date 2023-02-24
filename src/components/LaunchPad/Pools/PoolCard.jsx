import { Link } from "react-router-dom";
import dots from "../../assets/icons/launchpad-card-dots.svg";
import cardBorder from "../../assets/icons/Strokes.svg";
import cardBorder1 from "../../assets/icons/strokes1.svg";
import DAILogo from "../../assets/icons/dai-logo.png";
import percentageBar from "../../assets/icons/percentage-Bar.svg";
import { LaunchPoolClass } from "../../../web3";
import { useSigner } from "wagmi";
import { useState,useEffect } from "react";
import { Chain } from "wagmi";
import { ethers } from "ethers";
import { useNetwork, useSwitchNetwork } from "wagmi";
import { convertweiToEthers } from "../../../web3/priceOracle";


export default function PoolCard({ pool }) {
  const { chain } = useNetwork();
  const [cChain,setCChain] = useState(chain);
  const { chains, error, pendingChainId, switchNetwork } = useSwitchNetwork();
  const [tierDetails, setTierDetails] = useState({
    maxTierCap: 0,
    minUserCap: 0,
    maxUserCap: 0,
    amountRaised: 0,
    users: 0,
  });
  let progressValue = pool?.currentBalance / pool?.targetBalance;
  let percentage = progressValue * 100;
  percentage = percentage.toFixed(2) + "%";
  const { data: signer, isError, isLoading } = useSigner();
  
  // console.log(chain.id)
  const newLaunchPool = new LaunchPoolClass(
    "0x11E3a64e14fe06a146eEaDb040Adc7AAb005671C",
    "0x2Fd8894A7F280cE00C362ef1BB51d9B0F42c5931",
    1,
    signer,
    new ethers.providers.JsonRpcProvider("https://fantom-testnet.public.blastapi.io")
  );
  function poolChain(chains){
    // console.log(pool.chain)
     return  chains.filter(x=>x.id===pool[0].chain)
   }
//    const getBlockTime=async ()=>{
//     const RPC = chain.rpcUrls.default.http[0];
// const blockNumber = new ethers.providers.JsonRpcProvider(RPC).getBlockNumber(); // number of the block you want to get timestamp of
// const provider = new ethers.providers.JsonRpcProvider(RPC)
// const timestamp = (await provider.getBlock(blockNumber)).timestamp;
// console.log(timestamp)
//    }

  useEffect(() => {
  //getBlockTime()
    newLaunchPool.getTierDetails().then((res) => {
      console.log({tier:res});
      setTierDetails(res);
    });
  }, [])


  return (
    <div key={pool.id} className="pool-container">
      <div className="pool-box">
        <div className="box">
          {pool.tag !== "completed" && (
            <img
              className="box-img"
              src={cardBorder}
              alt="box border"
              width="100%"
            />
          )}
          {pool.tag === "completed" && (
            <img
              className="box-img completed-pool-box"
              src={cardBorder1}
              alt="box border"
              width="100%"
            />
          )}
          {/* <!--content inside the box--> */}
          <div
            className={`fContent ${pool.tag === "completed" && `completed`}`}
          >
            {/* <!--begin top contents--> */}
            <img src={dots} alt="dots" width="39.31px" />
            <div className="topContent">
              {/* <div className="logo">{pool?.logo}</div> */}
              <img className="logo" src={DAILogo} alt="logo" />
              <div className="buttons">
                {pool.tags?.map((tag, index) => (
                  <button key={index} className="btn">
                    {tag}
                  </button>
                ))}
                {/* <button class="btn1">1st phase</button>
                <button class="btn2">1st phase</button> */}
              </div>
            </div>
            <div className="midContent">
              {/* <!--end of top contents--> */}
              <h3>{pool?.projectTitle}</h3>

              <p>
                {pool?.projectDescription}{" "}
                {/* <Link to={`/launchpad/pool/${pool.id}`}> Read more</Link> */}
              </p>
            </div>
            <div className="allocation-group">
              {pool?.tag === "completed" && (
                <div className="total-rate">
                  <p>Total Rate</p>
                  <h3>{pool?.totalRate}</h3>
                </div>
              )}
              {pool?.tag !== "completed" && (
                <div className="min-allocation">
                  <p>Min Allocation</p>
                  <h3>{convertweiToEthers(tierDetails.minUserCap)}</h3>
                </div>
              )}

              <div className="max-allocation">
                <p>Max Allocation</p>
                <h3>{convertweiToEthers(tierDetails.maxUserCap)}</h3>
              </div>
              <div className="access">
                <p>Access</p>
                <h3>{pool?.access}</h3>
              </div>
            </div>
            {pool?.tag === "completed" && (
              <div className="percentage-bar">
                {/* <img src={percentageBar} alt="percentage bar" /> */}
                <div
                  className="w3-light-grey"
                  style={{ border: "2px solid #6B7280", borderRadius: "8px" }}
                >
                  <div
                    id="myBar"
                    className="bar"
                    style={{
                      width: percentage,
                      borderRadius: "4px",
                      backgroundColor: "#2166AE",
                      margin: "2px",
                    }}
                  ></div>
                </div>
                <div className="">
                  <p className="percentage">{percentage}</p>
                  <p className="SLM-Amt">{pool?.SLMAmount}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {pool.tag === "active" && (
          // <button
          // onClick={async () => {
          //   await newLaunchPool.increaseAllowance(
          //     "0xC53c56F17e4472f521e6BE1718653f5a9Dd37FeB",
          //     "10"
          //   );
          // }}

          // >
          <Link to={`/launchpad/pool/${pool.id}`} className="buy-presale-btn">
            View More
          </Link>
          // </button>
        )}
      </div>
    </div>
  );
}
