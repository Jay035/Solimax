import React from "react";

export default function TokenInformation() {
  return (
    <div className="details token-information">
      <h1>Token Information</h1>
      <div className="group">
        <div className="">
          <h2 className="details-title">Token Name</h2>
          <p className="value">SoliMax</p>
        </div>
        <div className="">
          <h2 className="details-title">Symbol</h2>
          <p className="value">SLM</p>
        </div>
        <div className="">
          <h2 className="details-title">Decimal</h2>
          <p className="value">18</p>
        </div>
        <div className="">
          <h2 className="details-title">Address</h2>
          <p className="value">0xb1957BDbA889686EbdE631DF970ecE6A7571A1B6</p>
        </div>
        <div className="">
          <h2 className="details-title">Total Supply</h2>
          <p className="value">Total Supply</p>
        </div>
      </div>
    </div>
  );
}
