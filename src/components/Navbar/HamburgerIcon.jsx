import { GlobalAuth } from "../../context/GlobalContext";

export default function HamburgerIcon() {
    const { checkboxState, setCheckboxState, setMenuState } = GlobalAuth(); 
    
  return (
    <div class="hamburger">
        <input
          id="input"
          type="checkbox"
          checked={checkboxState ? `checked` : ``}
          onClick={() => {
            setMenuState((prevState) => !prevState);
            setCheckboxState((prevState) => !prevState);
          }}
        />
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
      </div>
  )
}
