import "./Nav.css";
import Button from "./components/buttons/Button";
import TextForm from "./components/forms/TextForm";
import RadioForm from "./components/forms/RadioForm";
import CounterForm from "./components/forms/CounterForm";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cart from "./components/cart/Cart";

function Nav() {
  const [animate, setAnimate] = useState("");
  const onClickFunc = () => {
    alert("hey there");
  };

  const [mask, setMask] = useState("");
  const [showCart, setShowCart] = useState("");
  const [cartMask, setCartMask] = useState("");
  useEffect(() => {
    if (cartMask !== "" || mask !== "") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [cartMask, mask]);
  return (
    <>
      <div className={`${mask}`}></div>
      <div className={`${cartMask}`}></div>
      <nav>
        <button
          type="button"
          className="hamburger-button"
          onClick={() => {
            setShowCart("");
            setCartMask("");
            if (animate == "") {
              setMask("black-mask-nav");
              setAnimate("animate-menu");
            } else if (animate != "") {
              setMask("");
              setAnimate("");
            }
          }}
        >
          <img src="/assets/shared/tablet/icon-hamburger.svg" alt="" />
        </button>
        <Link to="/" className="logo">
          <img src="/assets/shared/desktop/logo.svg" alt="" />
        </Link>

        <div className="nav-middle">
          <Link to="/">HOME</Link>
          <Link to="/headphones">HEADPHONES</Link>
          <Link to="/speakers">SPEAKERS</Link>
          <Link to="/earphones">EARPHONES</Link>
        </div>
        <button
          type="button"
          className="cart-button"
          onClick={() => {
            setAnimate("");
            setMask("");
            if (showCart == "") {
              setShowCart("show-cart");
              setCartMask("cart-mask");
            } else if (showCart != "") {
              setShowCart("");
              setCartMask("");
            }
          }}
        >
          <img src="/assets/shared/desktop/icon-cart.svg" alt="" />
        </button>
        <div className={`mobile-menu ${animate}`}>
          <div>
            <div className="item-types">
              <img
                src="\assets\shared\tablet\headp.svg"
                alt=""
                className="mobile-menu-img"
              />
              <div className="box-shadow"></div>
              <h6>HEADPHONES</h6>
              <Link>
                {" "}
                <Button buttonText="SHOP" buttonNumber="three"></Button>
              </Link>
            </div>
            <div className="item-types">
              <img
                src="\assets\shared\tablet\awfdawd.svg"
                alt=""
                className="mobile-menu-img"
              />
              <div className="box-shadow"></div>
              <h6>SPEAKERS</h6>
              <Link>
                {" "}
                <Button buttonText="SHOP" buttonNumber="three"></Button>
              </Link>
            </div>
            <div className="item-types">
              <img
                src="\assets\shared\tablet\image-removebg-preview(42).png"
                alt=""
                className="mobile-menu-img"
              />
              <div className="box-shadow"></div>
              <h6>EARPHONES</h6>
              <Link>
                {" "}
                <Button buttonText="SHOP" buttonNumber="three"></Button>
              </Link>
            </div>
          </div>
        </div>
        <Cart showCart={showCart}></Cart>
        <div className="grey-line"></div>
      </nav>

      {/* <Button
        buttonText="SEE PRODUCT"
        buttonNumber="one"
        onClickFunc={onClickFunc}
      ></Button>
      <Button buttonText="SEE PRODUCT" buttonNumber="two"></Button>
      <Button buttonText="SEE PRODUCT" buttonNumber="three"></Button>
      <CounterForm></CounterForm>

      <TextForm labelText="Name" inputPlaceholder="Insert your name"></TextForm>
      <TextForm
        labelText="Email Address"
        inputPlaceholder="Insert your name"
      ></TextForm>
      <TextForm
        labelText="ZIP Code"
        inputPlaceholder="Insert your name"
      ></TextForm>
      <TextForm
        labelText="Phone Number"
        inputPlaceholder="Insert your name"
      ></TextForm>

      <RadioForm labelText="see you there" groupName="my-group" inputID="one" /> */}
    </>
  );
}

export default Nav;
