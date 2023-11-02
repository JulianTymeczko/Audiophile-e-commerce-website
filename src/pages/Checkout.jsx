import "./checkout.css";
import Button from "../components/buttons/Button";
import RadioForm from "../components/forms/RadioForm";
import CounterForm from "../components/forms/CounterForm";
import TextForm from "../components/forms/TextForm";
import { useEffect, useState } from "react";
export default function Checkout() {
  const [paymentDetails, setPaymentDetails] = useState("");
  useEffect(() => {
    if (paymentDetails == "") {
      document
        .querySelector(".radio-form[for='one']")
        .setAttribute("style", "border-color: rgb(216, 125, 74)");
      document
        .querySelector(".radio-form[for='two']")
        .setAttribute("style", "border-color: #cfcfcf");
    } else if (paymentDetails !== "") {
      document
        .querySelector(".radio-form[for='two']")
        .setAttribute("style", "border-color: rgb(216, 125, 74)");
      document
        .querySelector(".radio-form[for='one']")
        .setAttribute("style", "border-color: #cfcfcf");
    }
  }, [paymentDetails]);
  return (
    <section className="checkout-page">
      <div className="left-checkout-page">
        <h1>CHECKOUT</h1>
        <div>
          <section className="billing-details">
            <h3>BILLING DETAILS</h3>
            <div>
              {" "}
              <TextForm
                labelText="Name"
                inputPlaceholder="Alexei Ward"
              ></TextForm>
              <TextForm
                labelText="Email Address"
                inputPlaceholder="alexei@mail.com"
              ></TextForm>
              <TextForm
                labelText="Phone Number"
                inputPlaceholder="202-555-0136"
              ></TextForm>
            </div>
          </section>
          <section className="shipping-info">
            <h3>SHIPPING INFO</h3>
            <div>
              {" "}
              <TextForm
                id="address"
                labelText="Address"
                inputPlaceholder="1137 Williams Avenue"
              ></TextForm>
              <TextForm
                labelText="ZIP Code"
                inputPlaceholder="10001"
              ></TextForm>
              <TextForm labelText="City" inputPlaceholder="New York"></TextForm>
              <TextForm
                labelText="Country"
                inputPlaceholder="United States"
              ></TextForm>
            </div>
          </section>
          <section className="payment-details">
            <h3>PAYMENT DETAILS</h3>
            <div>
              <div id="payment-method">
                <h6>Payment Method</h6>
                <div>
                  {" "}
                  <RadioForm
                    defaultChecked={true}
                    labelText="e-Money"
                    groupName="my-group"
                    inputID="one"
                    onClick={() => {
                      setPaymentDetails("");
                    }}
                  />
                  <RadioForm
                    labelText="Cash on Delivery"
                    groupName="my-group"
                    inputID="two"
                    onClick={() => {
                      setPaymentDetails("payment-details-off");
                    }}
                  />
                </div>
              </div>
              <TextForm
                paymentDetails={paymentDetails}
                labelText="e-Money Number"
                inputPlaceholder="238521993"
              ></TextForm>
              <TextForm
                paymentDetails={paymentDetails}
                labelText="e-Money PIN"
                inputPlaceholder="6891"
              ></TextForm>
            </div>
          </section>
        </div>
      </div>
      <div className="right-checkout-page">
        <h2>SUMMARY</h2>
        <ul className="items-summary"></ul>
        <div>TOTAL</div>
        <div>SHIPPING</div>
        <div>VAT (INCLUDED)</div>
        <div>GRAND TOTAL</div>
      </div>
    </section>
  );
}
