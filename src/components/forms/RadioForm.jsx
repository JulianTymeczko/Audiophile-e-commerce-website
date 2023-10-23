import "./form.css";
export default function RadioForm({ labelText }) {
  return (
    <form>
      <input type="radio" />
      <label>{labelText}</label>
    </form>
  );
}
