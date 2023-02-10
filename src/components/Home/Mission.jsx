import missionBg from "../../components/assets/images/mission-bg.svg";
import missionAsset from "../../components/assets/images/asset2.png";

export default function Mission() {
  return (
    <section className="our-mission">
      <img className="mission-bg" src={missionBg} alt="mission background" />
      <div className="container">
        <h1 className="title">Our Mission</h1>
        <div className="">
          <p>
            “In a period where the web3 community is fearful, we at
            <span className="bold"> Solimax</span> want to give you a reason to
            be greedy.” Leveraging on yield farms on brands like Equalizer, we
            aim to compensate for your attention and participation.
          </p>
          <div className="">
            <span className="bold">Before;</span>
            <p>
              Community needed brands with new models to make money. Bless Defi!
            </p>
          </div>
          <div className="">
            <span className="bold">Now;</span>
            <p>
              Community don’t give a shit about brands, brands need the
              community.
            </p>
          </div>
          <div className="">
            <p className="">Like our Defi Analysts will say;</p>
            <p>
              “Since money follows innovation; SoliMax and the community will
              build innovation.”
            </p>
          </div>
          <img
            className="mission-asset"
            src={missionAsset}
            alt="our mission pics"
          />
        </div>
      </div>
    </section>
  );
}
