import "./homeheader.css";
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";
export default function HomeHeader() {
  let navigate = useNavigate();
  return (
    <>
      <header className="home-header">
        {/* <img
        src="\assets\home\tablet\image-header.jpg"
        alt=""
        className="tablet-image home-header-tablet-image"
      /> */}
        <div className="left-home-header">
          <h6>NEW PRODUCT</h6>
          <h1>
            XX99 MARK II <br />
            HEADPHONES
          </h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            buttonText="SEE PRODUCT"
            buttonNumber="one"
            onClickFunc={() => {
              navigate("/3");
            }}
          ></Button>
        </div>
        <div className="right-home-header ">
          <img
            src="./assets/home/desktop/header-headphones.svg"
            alt=""
            className="desktop-image"
          />
        </div>
      </header>
      <img
        src="./assets/home/tablet/image-header.jpg"
        alt=""
        className="tablet-image mask-header-img"
      />
      <img
        src="./assets/home/mobile/image-header.jpg"
        alt=""
        className="mobile-image mask-header-img"
      />
    </>
  );
}
