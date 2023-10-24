import { useEffect, useState } from "react";
import "./form.css";
import formTests from "../../scripts/formTests";
export default function TextForm({ inputPlaceholder, labelText, typeOfTest }) {
  const [value, setValue] = useState("");
  const [textError, setTextError] = useState("");

  useEffect(() => {
    if (value !== "" && !formTests(typeOfTest, value)) {
      setTextError("text-error");
    } else if (value === "" || formTests(typeOfTest, value)) {
      setTextError("");
    }
  }, [value]);
  return (
    <form className={`text-form ${textError}`}>
      <label>{labelText}</label>
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
