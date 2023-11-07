import "./normalproduct.css";
import Button from "../buttons/Button";
import CounterForm from "../forms/CounterForm";
import { useLocation } from "react-router-dom";
export default function BuyProduct({
  tabletSrc,
  mobileSrc,
  desktopSrc,
  productDescription,
  productTitle,
  newProduct,
  price,
}) {
  let location = useLocation();
  return (
    <div className="person-speaker normal-product">
      <img src={tabletSrc} alt="" className="tablet-image" />
      <img src={mobileSrc} alt="" className="mobile-image" />
      <img src={desktopSrc} alt="" className="desktop-image" />
      <div>
        {newProduct && <h6>NEW PRODUCT</h6>}
        <h2
          className={location.pathname == "/0" ? "product-zero" : ""}
          style={{ textTransform: "uppercase" }}
        >
          {productTitle}
        </h2>
        <p>{productDescription}</p>
        <h4>{`$${price}`}</h4>
        <div className="amount-cart-div">
          <CounterForm></CounterForm>
          <Button buttonText="ADD TO CART" buttonNumber="one"></Button>
        </div>
      </div>
    </div>
  );
}
