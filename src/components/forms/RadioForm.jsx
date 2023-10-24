import "./form.css";
export default function RadioForm({ labelText, groupName, inputID }) {
  return (
    <label htmlFor={inputID} className="radio-form">
      <input type="radio" name={groupName} id={inputID} placeholder="s" />
      <span></span>
      {labelText}
    </label>
  );
}
