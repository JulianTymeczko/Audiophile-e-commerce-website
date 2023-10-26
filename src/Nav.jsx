import "./Nav.css";
import Button from "./components/buttons/Button";
import TextForm from "./components/forms/TextForm";
import RadioForm from "./components/forms/RadioForm";
import CounterForm from "./components/forms/CounterForm";
import { Link } from "react-router-dom";
function Nav() {
  const onClickFunc = () => {
    alert("hey there");
  };
  return (
    <>
      <nav>
        <button type="button" className="hamburger-button">
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
        <button type="button" className="cart-button">
          <img src="/assets/shared/desktop/icon-cart.svg" alt="" />
        </button>
      </nav>

      <Button
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

      <RadioForm labelText="see you there" groupName="my-group" inputID="one" />
    </>
  );
}

export default Nav;
