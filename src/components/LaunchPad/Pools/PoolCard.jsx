import dots from "../../assets/icons/launchpad-card-dots.svg";
import cardBorder from '../../assets/icons/Strokes.svg';

export default function PoolCard({pool}) {
  return (
    <div className="pool-container">
      <div className="pool-box">
        <img className="card-border" src={cardBorder} alt="" />
        <div className="box">
          <img src={dots} alt="dots" />
          {/* <div className=""> */}
          <div className="logo-tag-component">
            <div className="logo">{pool.logo}</div>
            <div className="tags">
                {
                    pool.tags.map(tag => (
                        
                        <span>{tag}</span>
                    ))
                }
            </div>
          </div>
          <div className="project-details">
            <h1>Project 1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim <a href=""> Read more</a>
            </p>
          </div>
          <div className="allocation-group">
            <div className="min-allocation">
              <p>Min Allocation</p>
              <h1>$10</h1>
            </div>
            <div className="max-allocation">
              <p>Max Allocation</p>
              <h1>$200</h1>
            </div>
            <div className="access">
              <p>Access</p>
              <h1>Public</h1>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <button className="buy-presale-btn">Buy Presale</button>
    </div>
  );
}
