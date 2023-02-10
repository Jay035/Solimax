export default function Tokenomics() {
  return (
    <section id="tokenomics">
      <h1 className="title">Tokenomics</h1>
      <div className="">
        {/* max supply stat */}
        <div className="card">
          <span>Max Supply</span>
          <span className="figure">1,000,000,000</span>
        </div>
        {/* Liquidity stat */}
        <div className="card">
          <span>Liquidity</span>
          <span className="figure">60%</span>
        </div>
        {/* Marketing stat */}
        <div className="card">
          <span>Marketing</span>
          <span className="figure">15%</span>
        </div>
        {/* bribes stat */}
        <div className="card">
          <span>Bribes</span>
          <span className="figure">15%</span>
        </div>
        {/* teams stat */}
        <div className="card">
          <span>Team</span>
          <span className="figure">10%</span>
        </div>
      </div>
    </section>
  );
}
