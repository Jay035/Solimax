import cardBorder from "../assets/icons/Strokes.svg";
import cardBorder1 from "../assets/icons/strokes1.svg";
import percentageBar from "../assets/icons/percentage-Bar.svg";
import { ethers } from "ethers";
import PhaseBtns from "./PhaseBtns";
import { useState, useEffect } from "react";
import { useSigner } from "wagmi";
import { LaunchPoolClass } from "../../web3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createClient, configureChains } from "wagmi";
import { useNetwork, useSwitchNetwork } from "wagmi";
import { convertEthersToWei, convertweiToEthers } from "../../web3/priceOracle";
import {
  mainnet,
  optimism,
  fantomTestnet,
  optimismGoerli,
  fantom,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { provider } = configureChains(
  [fantom, fantomTestnet, optimism, optimismGoerli],
  [publicProvider()]
);

export default function PoolCard({ pool }) {
  const { chain } = useNetwork();
  const { chains, error, pendingChainId, switchNetwork } = useSwitchNetwork();
  const [phaseId, setPhaseId] = useState("1");
  const currentDate=Date.now()
  const [amountToBuy, setAmountToBuy] = useState(0);
  const [tierDetails, setTierDetails] = useState({
    maxTierCap: 0,
    minUserCap: 0,
    maxUserCap: 0,
    amountRaised: 0,
    users: 0,
  });
  const [saleEnd, setSaleEnd] = useState(0);
  const [saleStart, setSaleStart] = useState(0);
  const { data: signer, isError, isLoading } = useSigner();
  // console.log(chain.id)
  const newLaunchPool = new LaunchPoolClass(
    "0xC53c56F17e4472f521e6BE1718653f5a9Dd37FeB",
    "0x2Fd8894A7F280cE00C362ef1BB51d9B0F42c5931",
    1,
    signer,
    new ethers.providers.JsonRpcProvider(chain?.rpcUrls.default.http[0])
  );

  useEffect(() => {
    newLaunchPool.getTierDetails().then((res) => {
      //console.log({tier:res});
      setTierDetails(res);
    });
    newLaunchPool.getSaleEnd().then((res) => {
     //  console.log({date:parseInt(res.toString())})
      var myDate = new Date(parseInt(res.toString()));
      console.log(myDate.toLocaleString());
      setSaleEnd(myDate.toLocaleString());
    });
    newLaunchPool.getSaleStart().then((res) => {
       console.log({date:parseInt(res.toString())})
     var myDate = new Date(parseInt(res.toString()));
    // console.log(myDate.toLocaleString());
     setSaleStart(res.toString());
   });
   newLaunchPool.checkAllowance().then(res=>{
    console.log({res})
   })
    if (chain) {
      if (chain.id !== pool[0].chain) {
        toast.error("THIS POOL EXIST ON ANOTHER CHAIN");
        console.log(pool[0].chain,chain.id)
        switchNetwork?.(parseInt(pool[0].chain))
      }
    }
  }, []);

  async function BuyPresale() {
   
    if(parseInt(saleStart)<currentDate/1000){
    const value=convertEthersToWei(amountToBuy.toString(),18)
    toast.success("Allowance Success");
    newLaunchPool
      .increaseAllowance(value.toString())
      .then((res) => {
        toast.success("Allowance Success");
        toast.success("Buying Presale Token");
        newLaunchPool
          .buyTokens(value.toString())
          .then((res) => {
            toast.success("Presale Token Bought");
          })
          .catch((err) => {
            toast.error(err.error.data.message);
          });
      })
      .catch((err) => {
        console.log({err})
        toast.error(err.error.data.message);
      });
    }else{
      toast.error("Launch Has not Started Yet")
    }
  }

  const phases = [
    {
      id: "1",
      title: "Phase 1",
    },
    {
      id: "2",
      title: "Phase 2",
    },
  ];

  let progressValue = pool[0]?.currentBalance / pool[0]?.targetBalance;
  let percentage = progressValue * 100;
  percentage = percentage.toFixed(2) + "%";

  return (
    <div key={pool[0].id} className="pool-container">
      <div className="pool-box">
        <div className="box">
          <img
            className="box-img"
            src={cardBorder}
            alt="box border"
            width="100%"
          />
          {pool.tag === "completed" && (
            <img
              className="box-img"
              src={cardBorder1}
              alt="box border"
              width="100%"
            />
          )}
          {/* <!--content inside the box--> */}
          <div className="fContent">
            {/* <!--begin top contents--> */}
            {/* <img src={dots} alt="dots" width="39.31px" /> */}
            <div className="topContent">
              <div className="buttons">
                {phases?.map((phase) => (
                  <PhaseBtns
                    phase={phase}
                    active={phase.id === phaseId}
                    setPhaseId={setPhaseId}
                    pool={pool[0]}
                  />
                ))}
              </div>
            </div>

            <div className="percentage-bar">
              {/* <img src={percentageBar} alt="percentage bar" /> */}
              <div
                class="w3-light-grey"
                style={{ border: "2px solid #6B7280", borderRadius: "8px" }}
              >
                <div
                  id="myBar"
                  class="w3-container "
                  style={{
                    height: "24px",
                    width: percentage,
                    borderRadius: "4px",
                    backgroundColor: "#2166AE",
                    margin: "2px",
                  }}
                ></div>
              </div>
              <div className="">
                <p className="percentage">{percentage}</p>
                <p className="SLM-Amt">
                  {pool[0]?.currentBalance}/{pool[0].targetBalance} SLM
                </p>
              </div>
            </div>

            <div className="dash"></div>

            <div className="allocation-group">
              <div className="total-raised">
                <p>Total Raised</p>
                <h3>{convertweiToEthers(tierDetails?.amountRaised,18)}</h3>
              </div>
              <div className="participants">
                <p>Participants</p>
                <h3>{tierDetails.users}</h3>
              </div>
              <div className="participants">
                <p>Status</p>
                <h3
                  className={pool[0].status === "Active" ? `active-status` : ``}
                >
                  {pool[0]?.status}
                </h3>
              </div>
            </div>
            <div className="allocation-group">
              <div className="total-raised">
                <p>Date of Completion</p>
                <h3>{saleEnd === undefined || !saleEnd ? "0" : saleEnd}</h3>
              </div>
            </div>
          </div>
        </div>
        <input
          type="number"
          placeholder="Enter SLM Amount"
          // value={amountToBuy}
          onChange={(e) => {
            console.log(e.target.value);
            setAmountToBuy(e.target.value);
          }}
        />

        {pool[0].tag === "active" && (
          <>
            <button className="buy-presale-btn" onClick={BuyPresale}>Buy Presale</button>
          </>
        )}
      </div>
    </div>
  );
}
