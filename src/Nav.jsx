import "./Nav.css";
import Button from "./components/buttons/Button";
import TextForm from "./components/forms/TextForm";
import RadioForm from "./components/forms/RadioForm";
import CounterForm from "./components/forms/CounterForm";
function Nav() {
  const onClickFunc = () => {
    alert("hey there");
  };
  return (
    <>
      <Button
        buttonText="SEE PRODUCT"
        buttonNumber="one"
        onClickFunc={onClickFunc}
      ></Button>
      <Button buttonText="SEE PRODUCT" buttonNumber="two"></Button>
      <Button buttonText="SEE PRODUCT" buttonNumber="three"></Button>

      <RadioForm labelText="see you there"></RadioForm>
    </>
  );
}

export default Nav;
