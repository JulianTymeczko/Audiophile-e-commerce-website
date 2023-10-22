import "./button.css";
export default function Button({ buttonNumber, buttonText }) {
  return (
    <>
      <button type="button" className={`shared-button ${buttonNumber}`}>
        <h6>{buttonText}</h6>
        <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="" />
      </button>
    </>
  );
}
