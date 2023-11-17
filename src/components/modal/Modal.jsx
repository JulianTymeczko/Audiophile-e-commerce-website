import { useContext, useEffect, useState } from "react";
import { BlankForm, CartContext, GrandTotal } from "../../App";
import Button from "../buttons/Button";
import "./modal.css";
import CheckoutProductPicture from "../misc/CheckoutProductPicture";
import { useLocation, useNavigate } from "react-router-dom";
export default function Modal() {
  const { cart } = useContext(CartContext);
  const { blankForm, setBlankForm } = useContext(BlankForm);
  const { grandTotal } = useContext(GrandTotal);
  const [items, setItems] = useState(false);
  let navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (blankForm !== "") {
      document.getElementById("thank-you-order").showModal();
    } else if (blankForm === "") {
      document.getElementById("thank-you-order").close();
    }
  }, [blankForm]);
  useEffect(() => {
    setBlankForm("");
  }, [location]);
  return (
    <dialog
      id="thank-you-order"
      style={{
        backgroundColor: "white",
        padding: "50px",
        color: "black",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        border: "none",
        outline: "none",
        borderRadius: "8px",
        display: blankForm !== "" ? "flex" : "none",
        flexDirection: "column",
        gap: "50px",
        width: "540px",
        minHeight: " 581px",
        maxHeight: "max-content",
      }}
    >
      <img
        src="./assets/checkout/icon-order-confirmation.svg"
        alt=""
        style={{ width: "64px", height: "64px" }}
      />
      <h4>
        THANK YOU <br /> FOR YOUR ORDER
      </h4>
      <p>You will receive an email confirmation shortly.</p>
      <div className="black-grey-div">
        <div
          className="grey-square"
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          {items ? (
            <>
              {cart?.map((el) => (
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
                      productImage={el?.image}
                      productName={el?.name}
                      productPrice={el?.price}
                    ></CheckoutProductPicture>
                    <h5 style={{ opacity: "0.5", fontSize: "15px" }}>
                      x{el?.cartQuantity}
                    </h5>
                  </div>
                </>
              ))}
              <Button
                buttonNumber="3"
                buttonText={`View less`}
                onClickFunc={() => {
                  setItems(false);
                }}
              ></Button>
            </>
          ) : (
            <>
              {[cart[0]]?.map((el) => (
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
                      productImage={el?.image}
                      productName={el?.name}
                      productPrice={el?.price}
                    ></CheckoutProductPicture>
                    <h5 style={{ opacity: "0.5", fontSize: "15px" }}>
                      x{el?.cartQuantity}
                    </h5>
                  </div>
                </>
              ))}
              <Button
                buttonNumber="3"
                buttonText={`and ${cart.length - 1} other item(s)`}
                onClickFunc={() => {
                  setItems(true);
                }}
              ></Button>
            </>
          )}
        </div>
        <div className="black-square">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <h5>GRAND TOTAL</h5>
            <h4>{`${grandTotal}`}</h4>
          </div>
        </div>
      </div>
      <Button
        buttonNumber="one"
        buttonText="BACK TO HOME"
        onClickFunc={() => {
          navigate("/");
        }}
      ></Button>
    </dialog>
  );
}
