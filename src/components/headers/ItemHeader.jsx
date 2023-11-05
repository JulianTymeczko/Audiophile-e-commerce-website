import "./ItemHeader.css";
export default function ItemHeader({ product }) {
  return (
    <div className="item-page-header">
      <h1>{product}</h1>
    </div>
  );
}
