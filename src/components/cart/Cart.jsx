import "./cart.css";
import Button from "../buttons/Button";
import CheckoutProductPicture from "../misc/CheckoutProductPicture";
import CounterForm from "../forms/CounterForm";
import { useContext, useEffect } from "react";
import { CartContext } from "../../App";
import { useNavigate } from "react-router-dom";
export default function Cart({ showCart }) {
  const { cart, setCart } = useContext(CartContext);
  let navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <div className={`div-cart ${showCart}`}>
      <div>
        <h4>{`CART (${cart.length})`}</h4>
        <Button
          buttonNumber="three"
          buttonText="Remove all"
          onClickFunc={() => {
            setCart([]);
          }}
        ></Button>
      </div>
      {cart.map((el) => (
        <>
          <div>
            <CheckoutProductPicture
              productImage={el.image}
              productName={el.name}
              productPrice={el.price}
            ></CheckoutProductPicture>
            <CounterForm></CounterForm>
          </div>
        </>
      ))}
      <div className="cart-total">
        <h6>TOTAL</h6>
        <h4>{`$12412`}</h4>
      </div>
      <Button
        buttonNumber="one"
        buttonText="CHECKOUT"
        onClickFunc={() => {
          navigate("/checkout");
        }}
      ></Button>
    </div>
  );
}
