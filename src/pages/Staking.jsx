import Navbar from "../components/Navbar/Navbar";

export default function Staking() {
  return (
    <div className="staking">
      <Navbar />
      <div className="hero-section">
        <div className="hero-container">
          <input type="number" placeholder="Input stake amount" />
          <button type="submit" className="hero-btn">
            <a href="">Stake</a>
          </button>
        </div>
      </div>
    </div>
  );
}
