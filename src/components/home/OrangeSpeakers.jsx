import "./orangespeakers.css";
import Button from "../buttons/Button";
export default function OrangeSpeakers() {
  return (
    <div className="orange-speaker">
      <div className="left-orange-div">
        <img
          src="\assets\home\desktop\image-speaker-zx9.png"
          alt="image of a speaker"
          className="desktop-image"
        />
        <img
          src="\assets\home\tablet\image-speaker-zx9.png"
          alt=""
          className="tablet-image"
        />
        <img
          src="\assets\home\mobile\image-speaker-zx9.png"
          alt=""
          className="mobile-image"
        />
        <div className="first-circle shared-circle"></div>
        <div className="second-circle shared-circle"></div>
        <div className="third-circle shared-circle"></div>
      </div>
      <div className="inner-div-orange">
        <h1>
          ZX9 <br /> SPEAKER
        </h1>
        <p>
          Upgrade to premium speakers that are <br /> phenomenally built to
          deliver truly remarkable <br /> sound.
        </p>
        <Button buttonText="SEE PRODUCT" buttonNumber="one"></Button>
      </div>
    </div>
  );
}
