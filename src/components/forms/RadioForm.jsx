import "./form.css";
export default function RadioForm({ labelText }) {
  return (
    <form className="radio-form">
      <input type="radio" />
      <label>{labelText}</label>
    </form>
  );
}
