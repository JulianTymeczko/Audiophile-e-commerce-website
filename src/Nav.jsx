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
