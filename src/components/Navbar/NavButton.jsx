import { Link } from "react-router-dom";

export default function NavButton({value}) {
  return (
    <Link to="/launchpad" className="nav-btn">{value}</Link>
  )
}
