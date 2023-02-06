import { useState } from "react";

export default function ContractAddress() {
    const [successMessageState, setSuccessMessageState] = useState(false);
    const [errorMessageState, setErrorMessageState] = useState(false);

    function copyToClipboard() {
        let text = "0x39263A476aADF768BE43a99b24C4e461098524a4";
        navigator.clipboard.writeText(text).then(
          function () {
            console.log("Async: copying address was successful");
            // successMessage.classList.toggle("hidden");
            setTimeout(() => {
            //   successMessage.classList.toggle("hidden");
            }, 4000);
          },
          function (err) {
            console.error("Aync could not copy text:", err);
            // errorMessage.classList.toggle("hidden");
            setTimeout(() => {
            //   errorMessage.classList.toggle("hidden");
            }, 4000);
          }
        );
      }
  return (
    <section class="contract-address">
        <h1>0X39263A476aADF768BE43a99b24C4e461098524a4</h1>
        <button onclick={copyToClipboard}>
          Copy Contract Address
          <img src="./assets/icons/copy-icon.svg" alt="copy icon" />
        </button>
        <div class={`message success-message hidden`}>Copied to clipboard</div>
        <div class={`message error-message hidden`}>Error !</div>
      </section>
  )
}
