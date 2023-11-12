import "./checkoutproductpicture.css";
export default function CheckoutProductPicture({
  productPrice,
  productName,
  productImage,
}) {
  return (
    <div className="CheckoutProductPicture">
      <img src={productImage} alt="" />
      <div>
        <h4>{productName}</h4>
        <h6>{`$${productPrice}`}</h6>
      </div>
    </div>
  );
}
