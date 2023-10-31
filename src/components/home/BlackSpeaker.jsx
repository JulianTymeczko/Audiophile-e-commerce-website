import Button from "../buttons/Button";
import "./blackspeaker.css";
export default function BlackSpeaker() {
  return (
    <>
      <div className="top-black-speaker">
        <div>
          <h2>ZX7 SPEAKER</h2>
          <Button buttonText="SEE PRODUCT" buttonNumber="two"></Button>
        </div>
      </div>
      <div className="bottom-black-speaker">
        <img
          src="\assets\home\desktop\image-earphones-yx1.jpg"
          alt=""
          className="desktop-image"
        />
        <img
          src="\assets\home\tablet\image-earphones-yx1.jpg"
          alt=""
          className="tablet-image"
        />
        <img
          src="\assets\home\mobile\image-earphones-yx1.jpg"
          alt=""
          className="mobile-image"
        />
        <div>
          <h2>YX1 EARPHONES</h2>
          <Button buttonText="SEE PRODUCT" buttonNumber="two"></Button>
        </div>
      </div>
    </>
  );
}
