import { Link } from "react-router-dom";

export default function PoolsBtn() {
  return (
    <div className="pools-btns">
        <Link to="" className="active">Active Pools</Link>
        <Link to="">Upcoming Pools</Link>
        <Link to="">Completed Pools</Link>
    </div>
  )
}
