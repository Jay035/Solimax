export default function HowToBuy() {
  return (
    <section id="how-to-buy">
      <h1 className="title">How to buy</h1>
      {/* grid */}
      <div className="grid">
        {/* STEP ONE */}
        <div className="card step-one">
          <h3 className="step-tag">STEP ONE</h3>
          <h1>Create Metamask wallet</h1>
          <p>
            Create a Metamask wallet with a desktop computer or an iOS/Android
            device to buy and receive $SLM
          </p>
        </div>

        {/* STEP TWO */}
        <div className="card step-two">
          <h3 className="step-tag">STEP TWO</h3>
          <h1>Send $FTM to your created wallet</h1>
          <p>
            You can buy $FTM directly on exchanges. When transferring, make sure
            to use the Fantom network.
          </p>
        </div>
        {/* STEP THREE */}
        <div className="card step-three">
          <h3 className="step-tag">STEP THREE</h3>
          <h1>Connect wallet to swap</h1>
          <p>
            By clicking ‘Connect to wallet’ on Equalizer or any Fantom swap,
            your wallet connects and is ready to transact
          </p>
        </div>
        {/* STEP FOUR */}
        <div className="card step-three">
          <h3 className="step-tag">STEP FOUR</h3>
          <h1>Swap FTM for $SLM</h1>
          <p>
            You can start swapping as soon as you have FTM available! Select a
            token and enter the token contract address and swap away!
          </p>
        </div>
      </div>
    </section>
  );
}
