
export default function TokenInformation({ pool }) {
  return (
    <div className="details token-information">
      <h1>Token Information</h1>
      <div className="group">
        <div className="">
          <h2 className="details-title">Token Name</h2>
          <p className="value">{pool[0]?.tokenName}</p>
        </div>
        <div className="">
          <h2 className="details-title">Symbol</h2>
          <p className="value">{pool[0]?.tokenSymbol}</p>
        </div>
        <div className="">
          <h2 className="details-title">Decimal</h2>
          <p className="value">{pool[0]?.tokenDecimal}</p>
        </div>
        <div className="token-address">
          <h2 className="details-title">Address</h2>
          <p className="value">{pool[0]?.tokenAddress}</p>
        </div>
        <div className="">
          <h2 className="details-title">Total Supply</h2>
          <p className="value">{pool[0]?.tokenTotalSupply}</p>
        </div>
      </div>
    </div>
  );
}
