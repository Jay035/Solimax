import { Link } from "react-router-dom";
import dots from "../../assets/icons/launchpad-card-dots.svg";
import cardBorder from "../../assets/icons/Strokes.svg";
import cardBorder1 from "../../assets/icons/strokes1.svg";
import DAILogo from "../../assets/icons/dai-logo.png";
import percentageBar from "../../assets/icons/percentage-Bar.svg";
import { LaunchPoolClass } from "../../../web3";
import { useSigner } from "wagmi";

export default function PoolCard({ pool }) {
  let progressValue = pool?.currentBalance / pool?.targetBalance;
  let percentage = progressValue * 100;
  percentage = percentage.toFixed(2) + "%";

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
                  <h3>{pool?.minAllocation}</h3>
                </div>
              )}

              <div className="max-allocation">
                <p>Max Allocation</p>
                <h3>{pool?.maxAllocation}</h3>
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
