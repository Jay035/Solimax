export default function Roadmap() {
  return (
    <section id="roadmap">
      <h1 className="title">Our Roadmap</h1>
      <div className="">
        {/* Phase 1 */}
        <div className="card">
          <div className="phase-no">1</div>
          <div className="">
            <h3>Phase 1</h3>
            <ul>
              <li>Token creation</li>
              <li>Launch on equalizer DEX</li>
              <li>Digital identity creation</li>
              <li>White paper creation</li>
              <li>Community building</li>
              <li>Community sensitization</li>
            </ul>
          </div>
        </div>
        {/* Phase 2 */}
        <div className="card">
          <div className="phase-no">2</div>
          <div className="">
            <h3>Phase 2</h3>
            <ul>
              <li>Website creation</li>
              <li>Twitter spaces with prominent KOLs</li>
              <li>
                Partnerships with DeFi protocols and GameFi based projects
              </li>
              <li>Community education campaign for equalizer DEX</li>
              <li>Whitelisting for bribes and farming on Equalizer DEX</li>
            </ul>
            <p className="">*LP farming and staking on Equalizer Dex</p>
          </div>
        </div>
        {/* Phase 2 */}
        <div className="card">
          <div className="phase-no">3</div>
          <div className="">
            <h3>Phase 3</h3>
            <ul>
              <li>DAO creation</li>
              <li>Launch of governance mechanism</li>
              <li>Launchpad creation</li>
              <li>Incubation of solid GameFi/DeFi Projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
