import { Link } from "react-router-dom";

export default function PhaseBtns({phase, setPhaseId, active}) {

  return (
      <button
        id={phase?.id}
        className={active ? `active` : ``}
        onClick={() => {
          setPhaseId(phase?.id);
        }}
      >
        {phase?.title}
      </button>
  )
}
