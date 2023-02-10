import border from '../assets/icons/buy-btn-border.svg';

export default function BuyButtons() {
  return (
    <section className="buy-btns">
      <div className="">
        <img src={border} alt="border" />
        <a href="" className="buy-btn">Buy on Equaliser</a>
      </div>
      <div className="">
      <img src={border} alt="border" />
        <a href="" className="buy-btn">Buy on Firebird</a>
      </div>
    </section>
  );
}
