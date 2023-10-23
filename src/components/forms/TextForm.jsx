import "./form.css";
export default function TextForm({ inputPlaceholder, labelText }) {
  return (
    <form>
      <label>{labelText}</label>
      <input type="text" placeholder={inputPlaceholder} />
    </form>
  );
}
