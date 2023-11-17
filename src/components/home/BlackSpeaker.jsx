import { useNavigate } from "react-router-dom";
import Button from "../buttons/Button";
import "./blackspeaker.css";
export default function BlackSpeaker() {
  let navigate = useNavigate();
  return (
    <>
      <div className="top-black-speaker">
        <div>
          <h2>ZX7 SPEAKER</h2>
          <Button
            buttonText="SEE PRODUCT"
            buttonNumber="two"
            onClickFunc={() => {
              navigate("/4");
            }}
          ></Button>
        </div>
      </div>
      <div className="bottom-black-speaker">
        <img
          src="./assets/home/desktop/image-earphones-yx1.jpg"
          alt=""
          className="desktop-image"
        />
        <img
          src="./assets/home/tablet/image-earphones-yx1.jpg"
          alt=""
          className="tablet-image"
        />
        <img
          src="./assets/home/mobile/image-earphones-yx1.jpg"
          alt=""
          className="mobile-image"
        />
        <div>
          <h2>YX1 EARPHONES</h2>
          <Button
            buttonText="SEE PRODUCT"
            buttonNumber="two"
            onClickFunc={() => {
              navigate("/0");
            }}
          ></Button>
        </div>
      </div>
    </>
  );
}
