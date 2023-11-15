import "./cart.css";
import Button from "../buttons/Button";
import CheckoutProductPicture from "../misc/CheckoutProductPicture";
import CounterForm from "../forms/CounterForm";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../App";
import { useNavigate } from "react-router-dom";
export default function Cart({ showCart }) {
  const { cart, setCart } = useContext(CartContext);

  function getSetCartQuantity(el) {
    return (num) => {
      el.cartQuantity = num;
      setCart([...cart]);
    };
  }
  function getTotal() {
    let sum = 0;
    cart.forEach((el) => {
      sum = parseInt(el.price.replace(/,/g, "")) * el.cartQuantity + sum;
    });
    return sum.toLocaleString();
  }
  let navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    document.getElementById("cart-total-amount").textContent =
      "$ " + getTotal();
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
            <CounterForm
              quantity={el.cartQuantity}
              setQuantity={getSetCartQuantity(el)}
            ></CounterForm>
          </div>
        </>
      ))}
      <div className="cart-total">
        <h6>TOTAL</h6>
        <h4 id="cart-total-amount"></h4>
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
