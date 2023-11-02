import "./form.css";
export default function RadioForm({
  labelText,
  groupName,
  inputID,
  onClick,
  defaultChecked,
}) {
  return (
    <label htmlFor={inputID} className="radio-form" onClick={onClick}>
      <input
        type="radio"
        name={groupName}
        id={inputID}
        placeholder="s"
        defaultChecked={defaultChecked}
      />
      <span></span>
      {labelText}
    </label>
  );
}
