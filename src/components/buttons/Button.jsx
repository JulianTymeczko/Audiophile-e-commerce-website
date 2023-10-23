import "./button.css";
export default function Button({ buttonNumber, buttonText, onClickFunc }) {
  return (
    <>
      <button
        type="button"
        className={`shared-button ${buttonNumber}`}
        onClick={onClickFunc}
      >
        <h6>{buttonText}</h6>
        <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="" />
      </button>
    </>
  );
}
