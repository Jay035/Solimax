import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import AboutProject from "../components/LaunchPad/PoolCardDetails/AboutProject";
import HeroSection from "../components/LaunchPad/PoolCardDetails/HeroSection";
import PoolInformation from "../components/LaunchPad/PoolCardDetails/PoolInformation";
import TokenInformation from "../components/LaunchPad/PoolCardDetails/TokenInformation";
import Navbar from "../components/Navbar/Navbar";
import { GlobalAuth } from "../context/GlobalContext";

export default function PoolCardDetails() {
  const { id } = useParams();
  const { poolsData } = GlobalAuth();
  const [pool, setPool] = useState("");

  const getPool = () => {
    const specificPool = poolsData?.filter((pool) => pool.id === Number(id));
    setPool(specificPool);
    
    // console.log(id);
    console.log(pool)
  };

  useEffect(() => {
      getPool();
  }, [poolsData]);

  return (
    <div className="pool-card-details">
      <Navbar />
      {pool && (
        <>
          <HeroSection pool={pool} />
          <section className="pool-token-information">
            <PoolInformation pool={pool} />
            <TokenInformation pool={pool} />
          </section>
          <AboutProject pool={pool} />
        </>
      )}
    </div>
  );
}
