import { useEffect, useState, useContext } from "react";
import "./form.css";
import formTests from "../../scripts/formTests";
import { BlankForm, CartContext, CashDelivery, PayContext } from "../../App";
export default function TextForm({
  inputPlaceholder,
  labelText,
  id,
  paymentDetails,
}) {
  const { cart } = useContext(CartContext);
  const { cashDelivery } = useContext(CashDelivery);
  const { setPay } = useContext(PayContext);
  const { blankForm } = useContext(BlankForm);
  const [value, setValue] = useState("");
  const [textError, setTextError] = useState("");
  const checkForms = () => {
    let isBlank = true;
    let isBlankNotInclusive = true;
    let formNotErr = true;
    for (
      let i = 0;
      i <
      document.querySelectorAll(".left-checkout-page .text-form input").length;
      i++
    ) {
      if (
        document.querySelectorAll(".left-checkout-page .text-form input")[i]
          .value == ""
      ) {
        isBlank = false;
      }
    }
    for (
      let i = 0;
      i <
      document.querySelectorAll(".left-checkout-page .text-form input").length -
        2;
      i++
    ) {
      if (
        document.querySelectorAll(".left-checkout-page .text-form input")[i]
          .value == ""
      ) {
        isBlankNotInclusive = false;
      }
    }
    for (
      let i = 0;
      i <
      document.querySelectorAll(".left-checkout-page .text-form").length - 2;
      i++
    ) {
      if (
        document
          .querySelectorAll(".left-checkout-page .text-form")
          [i].classList.contains("text-error")
      ) {
        formNotErr = false;
      }
    }

    if (
      (document.querySelectorAll(".text-error").length < 1 &&
        isBlank &&
        cart.length >= 1) ||
      (cashDelivery === "cash-on-delivery-on" &&
        isBlankNotInclusive &&
        formNotErr &&
        cart.length >= 1)
    ) {
      setPay(true);
    } else {
      setPay(false);
    }
  };
  useEffect(() => {
    if (value !== "" && !formTests(labelText, value)) {
      setTextError("text-error");
    } else if (value === "" || formTests(labelText, value)) {
      setTextError("");
    }
  }, [value]);
  useEffect(() => {
    checkForms();
  }, [value, textError, cashDelivery]);
  useEffect(() => {
    if (blankForm !== "") {
      setValue("");
    }
  }, [blankForm]);
  return (
    <form className={`text-form ${textError} ${paymentDetails}`} id={id}>
      <div>
        <label>{labelText}</label>
        <span>Wrong Format</span>
      </div>
      <input
        type="text"
        placeholder={inputPlaceholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
}
