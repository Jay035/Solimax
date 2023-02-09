import { Link } from "react-router-dom";
import dots from "../../assets/icons/launchpad-card-dots.svg";
import cardBorder from "../../assets/icons/Strokes.svg";
import percentageBar from "../../assets/icons/percentage-Bar.svg";

export default function PoolCard({ pool }) {
  return (
    <div key={pool.id} className="pool-container">
      <div className="pool-box">
        {/* <img className="card-border" src={cardBorder} alt="" /> */}
        <div className="box">
          <img src={dots} alt="dots" />
          {/* <div className=""> */}
          <div className="logo-tag-component">
            <div className="logo">{pool?.logo}</div>
            <div className="tags">
              {pool.tags?.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="project-details">
            <h1>{pool?.projectTitle}</h1>
            <p>
              {pool?.projectDescription}{" "}
              <Link to={`/launchpad/pool/${pool.id}`}> Read more</Link>
            </p>
          </div>
          <div className="allocation-group">
            {pool?.tag === "completed" && (
              <div className="total-rate">
                <p>Total Rate</p>
                <h1>{pool?.totalRate}</h1>
              </div>
            )}
            {pool?.tag !== "completed" && (
              <div className="min-allocation">
                <p>Min Allocation</p>
                <h1>{pool?.minAllocation}</h1>
              </div>
            )}

            <div className="max-allocation">
              <p>Max Allocation</p>
              <h1>{pool?.maxAllocation}</h1>
            </div>
            <div className="access">
              <p>Access</p>
              <h1>{pool?.access}</h1>
            </div>
          </div>
          {pool?.tag === "completed" && (
            <div className="percentage-bar">
              <img src={percentageBar} alt="percentage bar" />
              <div className="">
                <p className="percentage">{pool?.percentage}</p>
                <p className="SLM-Amt">{pool?.SLMAmount}</p>
              </div>
            </div>
          )}
          {/* </div> */}
        </div>
      </div>
      {pool.tag === "active" && (
        <button className="buy-presale-btn">Buy Presale</button>
      )}
    </div>
  );
}
