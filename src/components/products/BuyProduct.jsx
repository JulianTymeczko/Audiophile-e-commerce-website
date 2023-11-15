import "./normalproduct.css";
import Button from "../buttons/Button";
import CounterForm from "../forms/CounterForm";
import "./buyproduct.css";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../App";

export default function BuyProduct({
  tabletSrc,
  mobileSrc,
  desktopSrc,
  productDescription,
  productTitle,
  newProduct,
  price,
  cartImage,
  cartName,
}) {
  let location = useLocation();
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const itemInCart = cart.find((theName) => theName.name === cartName);
    if (itemInCart) {
      return;
    } else {
      setCart([
        ...cart,
        {
          price: price,
          image: cartImage,
          name: cartName,
          cartQuantity: quantity,
        },
      ]);
    }
  };
  return (
    <div className="person-speaker normal-product buy-product">
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
          <CounterForm
            quantity={quantity}
            setQuantity={setQuantity}
          ></CounterForm>
          <Button
            buttonText="ADD TO CART"
            buttonNumber="one"
            onClickFunc={() => {
              addToCart();
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
}
