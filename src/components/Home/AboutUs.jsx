import connectorLine1 from "../assets//images/Connector line.svg";
import connectorLine2 from "../assets//images/Connector line-1.svg";
import connectorLine3 from "../assets//images/Connector line-2.svg";

export default function AboutUs() {
  return (
    <section id="about-us" className="powering-the-future">
      <h1 className="title">Yield Farming Maximized with the Community</h1>
      {/* connector lines */}
      <img
        id="connector-line-1"
        className="connector-line"
        src={connectorLine1}
        alt="Connector line 1"
      />
      <img
        id="connector-line-2"
        className="connector-line"
        src={connectorLine2}
        alt="Connector line 2"
      />
      <img
        id="connector-line-3"
        className="connector-line"
        src={connectorLine3}
        alt="Connector line 3"
      />

      <div className="">
        <div className="card card-1">
          <div className="card-number">01</div>
          <div className="card-details">
            <h3>Community driven</h3>
            <p>
              Building a community of DeFi enthusiasts with a unique love for
              community growth and development
            </p>
          </div>
        </div>
        <div className="card card-2">
          <div className="card-number">02</div>
          <div className="card-details">
            <h3>Yield farming</h3>
            <p>
              Taking advantage of opportunities in Equalizer DEX, bribing and
              locking up equal sharing opportunities for community members
            </p>
          </div>
        </div>
        <div className="card card-3">
          <div className="card-number">03</div>
          <div className="card-details">
            <h3>Solidly model maximization</h3>
            <p>
              Providing analytical information for community members,
              positioning them for best opportunities available on equalizer and
              other solidly forks
            </p>
          </div>
        </div>
        <div className="card card-4">
          <div className="card-number">04</div>
          <div className="card-details">
            <h3>DeFi Education</h3>
            <p>
              Filling up knowledge gaps and consistently educating through our
              platforms; campaigns and twitter spaces with an aim to bridge this
              gap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
