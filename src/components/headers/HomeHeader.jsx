import "./homeheader.css";
import Button from "../buttons/Button";
export default function HomeHeader() {
  return (
    <header className="home-header">
      <div className="left-home-header">
        <h6>NEW PRODUCT</h6>
        <h1>
          XX99 MARK II <br />
          HEADPHONES
        </h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button
          buttonText="SEE PRODUCT"
          buttonNumber="one"
          //   onClickFunc={onClickFunc}
        ></Button>
      </div>
      <div className="right-home-header">
        <img src="/assets/home/desktop/header-headphones.svg" alt="" />
      </div>
    </header>
  );
}
