import { Link } from "react-router-dom";
import { GlobalAuth } from "../../context/GlobalContext";

export default function NavButton({ value, link }) {
  const { setCheckboxState, setMenuState } = GlobalAuth();

  return (
    <Link
      to={link}
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
