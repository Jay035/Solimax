
export default function AboutUs() {
  return (
    <section id="about-us" class="powering-the-future">
        <h1 class="title">Yield Farming Maximized with the Community</h1>
        {/* connector lines */}
        <img
          id="connector-line-1"
          class="connector-line"
          src="./assets/images/Connector line.svg"
          alt="Connector line 1"
        />
        <img
          id="connector-line-2"
          class="connector-line"
          src="./assets/images/Connector line-1.svg"
          alt="Connector line 2"
        />
        <img
          id="connector-line-3"
          class="connector-line"
          src="./assets/images/Connector line-2.svg"
          alt="Connector line 3"
        />

        <div class="">
          <div class="card card-1">
            <div class="card-number">01</div>
            <div class="card-details">
              <h3>Community driven</h3>
              <p>
                Building a community of DeFi enthusiasts with a unique love for
                community growth and development
              </p>
            </div>
          </div>
          <div class="card card-2">
            <div class="card-number">02</div>
            <div class="card-details">
              <h3>Yield farming</h3>
              <p>
                Taking advantage of opportunities in Equalizer DEX, bribing and
                locking up equal sharing opportunities for community members
              </p>
            </div>
          </div>
          <div class="card card-3">
            <div class="card-number">03</div>
            <div class="card-details">
              <h3>Solidly model maximization</h3>
              <p>
                Providing analytical information for community members,
                positioning them for best opportunities available on equalizer
                and other solidly forks
              </p>
            </div>
          </div>
          <div class="card card-4">
            <div class="card-number">04</div>
            <div class="card-details">
              <h3>DeFi Education</h3>
              <p>
                Filling up knowledge gaps and consistently educating through our
                platforms; campaigns and twitter spaces with an aim to bridge
                this gap.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}
