import cardBorder from "../assets/icons/Strokes.svg";
import cardBorder1 from "../assets/icons/strokes1.svg";
import percentageBar from "../assets/icons/percentage-Bar.svg";
import PhaseBtns from "./PhaseBtns";
import { useState } from "react";

export default function PoolCard({ pool }) {
  const [phaseId, setPhaseId] = useState("1");
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
  percentage = percentage.toFixed(2)
  console.log(percentage);

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
              <img src={percentageBar} alt="percentage bar" />
              <div className="">
                <p className="percentage">{percentage}%</p>
                <p className="SLM-Amt">{pool[0]?.currentBalance}/{pool[0].targetBalance} SLM</p>
              </div>
            </div>

            <div className="dash"></div>

            <div className="allocation-group">
              <div className="total-raised">
                <p>Total Raised</p>
                <h3>{pool[0]?.totalRaised}</h3>
              </div>
              <div className="participants">
                <p>Participants</p>
                <h3>{pool[0]?.noOfParticipants}</h3>
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
                <h3>{pool[0]?.dateOfCompletion}</h3>
              </div>
            </div>
          </div>
        </div>

        {pool[0].tag === "active" && (
          <button className="buy-presale-btn">Buy Presale</button>
        )}
      </div>
    </div>
  );
}
