import { useEffect, useState } from "react";
import "./form.css";
import formTests from "../../scripts/formTests";
export default function TextForm({ inputPlaceholder, labelText }) {
  const [value, setValue] = useState("");
  const [textError, setTextError] = useState("");

  useEffect(() => {
    if (value !== "" && !formTests(labelText, value)) {
      setTextError("text-error");
    } else if (value === "" || formTests(labelText, value)) {
      setTextError("");
    }
  }, [value]);
  return (
    <form className={`text-form ${textError}`}>
      <div>
        <label>{labelText}</label>
        <span>Wrong Format</span>
      </div>
      <input
        type="text"
        placeholder={inputPlaceholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
}
