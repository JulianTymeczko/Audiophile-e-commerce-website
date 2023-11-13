import "./Nav.css";
import Button from "./components/buttons/Button";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cart from "./components/cart/Cart";
import { useLocation } from "react-router-dom";
function Nav() {
  const [animate, setAnimate] = useState("");
  let navigate = useNavigate();
  const location = useLocation();

  const [mask, setMask] = useState("");
  const [showCart, setShowCart] = useState("");
  const [cartMask, setCartMask] = useState("");
  useEffect(() => {
    if (cartMask !== "" || mask !== "") {
      document.body.style.overflow = "hidden";
      document.body.style.height = "1000px";
      document.getElementById("root").style.height = "1000px";
      document.getElementById("root").style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.getElementById("root").style.overflow = "auto";
      document.body.style.height = "auto";
      document.getElementById("root").style.height = "auto";
    }
  }, [cartMask, mask]);

  return (
    <>
      {(location.pathname == "/checkout" ||
        location.pathname == "/0" ||
        location.pathname == "/1" ||
        location.pathname == "/2" ||
        location.pathname == "/3" ||
        location.pathname == "/4" ||
        location.pathname == "/5") && (
        <div id="GO-BACK">
          <Button
            buttonNumber="three"
            buttonText="Go Back"
            onClickFunc={() => {
              navigate(-1);
            }}
          ></Button>
        </div>
      )}

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
              <Link to="/headphones">
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
              <Link to="/speakers">
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
              <Link to="/earphones">
                {" "}
                <Button buttonText="SHOP" buttonNumber="three"></Button>
              </Link>
            </div>
          </div>
        </div>
        <Cart showCart={showCart}></Cart>
        <div className="grey-line"></div>
      </nav>
    </>
  );
}

export default Nav;
