import { useContext } from "react";
import "./rightcheckout.css";
import { CartContext } from "../../App";
import CheckoutProductPicture from "../misc/CheckoutProductPicture";
import Button from "../buttons/Button";
export default function RightCheckout() {
  const { cart } = useContext(CartContext);
  return (
    <div className="right-checkout">
      <div>
        <h4>SUMMARY</h4>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {cart.map((el) => (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CheckoutProductPicture
                productImage={el.image}
                productName={el.name}
                productPrice={el.price}
              ></CheckoutProductPicture>
              <h5 style={{ opacity: "0.5", fontSize: "15px" }}>
                x{el.cartQuantity}
              </h5>
            </div>
          </>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div className="cart-total right-check">
          <h6>TOTAL</h6>
          <h4>{`$12412`}</h4>
        </div>
        <div className="cart-total right-check">
          <h6>SHIPPING</h6>
          <h4>{`$12412`}</h4>
        </div>
        <div className="cart-total right-check">
          <h6>VAT (INCLUDED)</h6>
          <h4>{`$12412`}</h4>
        </div>
      </div>
      <div className="cart-total right-check">
        <h6>GRAND TOTAL</h6>
        <h4 style={{ color: "rgb(216, 125, 74)" }}>{`$12412`}</h4>
      </div>

      <Button
        buttonNumber="one"
        buttonText="CONTINUE"
        onClickFunc={() => {}}
      ></Button>
    </div>
  );
}
