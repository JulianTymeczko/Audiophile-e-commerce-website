import { useContext, useEffect } from "react";
import "./rightcheckout.css";
import { BlankForm, CartContext, PayContext } from "../../App";
import CheckoutProductPicture from "../misc/CheckoutProductPicture";
import Button from "../buttons/Button";
export default function RightCheckout() {
  const { cart } = useContext(CartContext);
  const { pay } = useContext(PayContext);
  const { setBlankForm } = useContext(BlankForm);
  const VAT = () => {
    let Vat = parseInt(
      parseInt(
        document
          .getElementById("checkout-total-amount")
          .textContent.replace(/\$|,/g, ""),
      ) * 0.2,
    ).toLocaleString();

    return "$ " + Vat;
  };
  useEffect(() => {
    document.getElementById("checkout-total-amount").textContent =
      document.getElementById("cart-total-amount")?.textContent;

    document.getElementById("VAT").textContent = VAT();
    document.getElementById("grand-total-amount").textContent =
      "$ " +
      (
        parseInt(
          document
            .getElementById("checkout-total-amount")
            .textContent.replace(/\$|,/g, ""),
        ) +
        50 +
        parseInt(VAT().replace(/\$|,/g, ""))
      ).toLocaleString();
  }, [cart]);
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
          <h4 id="checkout-total-amount"></h4>
        </div>
        <div className="cart-total right-check">
          <h6>SHIPPING</h6>
          <h4>$ 50</h4>
        </div>
        <div className="cart-total right-check">
          <h6>VAT (INCLUDED)</h6>
          <h4 id="VAT"></h4>
        </div>
      </div>
      <div className="cart-total right-check">
        <h6>GRAND TOTAL</h6>
        <h4
          style={{ color: "rgb(216, 125, 74)" }}
          id="grand-total-amount"
        >{`$12412`}</h4>
      </div>

      <Button
        buttonNumber="one"
        buttonText="CONTINUE & PAY"
        onClickFunc={() => {
          if (pay) {
            setBlankForm("1");
            console.log("hey");
          }
        }}
      ></Button>
    </div>
  );
}
