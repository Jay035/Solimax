import { Link } from "react-router-dom";
import { GlobalAuth } from "../../context/GlobalContext";

export default function NavButton({ value }) {
  const { setCheckboxState, setMenuState } = GlobalAuth();

  return (
    <Link
      to="/launchpad"
      onClick={() => {
        setMenuState((prevState) => !prevState);
        setCheckboxState((prevState) => !prevState);
      }}
      className="nav-btn"
    >
      {value}
    </Link>
  );
}
