import "./form.css";

export default function CounterForm({ quantity, setQuantity }) {
  return (
    <div className="counter-form">
      <button
        type="button"
        onClick={() => {
          if (quantity > 1) setQuantity(quantity - 1);
        }}
      >
        -
      </button>
      <input type="number" readOnly value={quantity} />
      <button
        type="button"
        onClick={() => {
          setQuantity(quantity + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
