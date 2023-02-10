import { Link } from "react-router-dom";
import { GlobalAuth } from "../../../context/GlobalContext";

export default function PoolsBtn({ item, active }) {
  const { selectedPool, setSelectedPool } = GlobalAuth();

  return (
    <div key={item?.id} className="pools-btn">
      <Link
        id={item?.id}
        to=""
        className={active ? `active` : ``}
        onClick={() => {
          setSelectedPool(item?.id);
        }}
      >
        {item?.title}
      </Link>
    </div>
  );
}
