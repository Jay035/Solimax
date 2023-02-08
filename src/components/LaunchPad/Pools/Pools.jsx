import PoolCard from "./PoolCard";
import PoolsBtn from "./PoolsBtn";
import { PoolsData } from "./PoolsData";

export default function Pools() {
  return (
    <section className="pools">
      <PoolsBtn />
      <div className="container">
        {PoolsData.map(pool => (
        
        <PoolCard pool={pool} />
        ))}
      </div>
    </section>
  );
}
