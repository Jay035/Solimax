import { Link } from "react-router-dom";
import { GlobalAuth } from "../../../context/GlobalContext";

export default function PoolsBtn({item, active}) {
  const { setSelectedPool } = GlobalAuth();

//   const titles = [
//     {
//       id: "active",
//       title: "Active Pools",
//     },
//     {
//       id: "upcoming",
//       title: "Upcoming Pools",
//     },
//     {
//       id: "completed",
//       title: "Completed Pools",
//     },
//   ];
  return (
    <div className="pools-btns">
      {/* {titles.map((item) => ( */}
        <Link
          id={item.id}
          to=""
          className={active ? `active` : ``}
          onClick={() => setSelectedPool(item.id)}
        >
          {item.title}
        </Link>
      {/* ))} */}
      {/* <Link to="">Upcoming Pools</Link>
        <Link to="">Completed Pools</Link> */}
    </div>
  );
}
