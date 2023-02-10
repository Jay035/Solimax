export default function PoolInformation({pool}) {
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
          <p className="value">{pool[0]?.minAllocation}</p>
        </div>
        <div className="">
          <h2 className="details-title">Maximum Allocation</h2>
          <p className="value">{pool[0]?.minAllocation}</p>
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
