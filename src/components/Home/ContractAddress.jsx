import { useState } from "react";
import copyIcon from "../assets/icons/copy-icon.svg";

export default function ContractAddress() {
  const [successMessageState, setSuccessMessageState] = useState(false);
  const [errorMessageState, setErrorMessageState] = useState(false);

  function copyToClipboard() {
    let text = "0x39263A476aADF768BE43a99b24C4e461098524a4";
    navigator.clipboard.writeText(text).then(
      function () {
        console.log("Async: copying address was successful");
        setTimeout(() => {}, 4000);
      },
      function (err) {
        console.error("Aync could not copy text:", err);
      }
    );
  }
  return (
    <section className="contract-address">
      <h1>0X39263A476aADF768BE43a99b24C4e461098524a4</h1>
      <button onClick={copyToClipboard}>
        Copy Contract Address
        <img src={copyIcon} alt="copy icon" />
      </button>
      <div
        className={`message success-message ${
          successMessageState ? `` : `hidden`
        }`}
      >
        Copied to clipboard
      </div>
      <div
        className={`message error-message ${errorMessageState ? `` : `hidden`}`}
      >
        Error !
      </div>
    </section>
  );
}
