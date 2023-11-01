import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import OrangeSpeakers from "../home/OrangeSpeakers";
import BlackSpeaker from "../home/BlackSpeaker";
import PersonSpeaker from "../home/PersonSpeaker";
import "./HomeMain.css";
export default function HomeMain() {
  return (
    <main className="home-main">
      {" "}
      <div className="mobile-menu home-main-mobile-menu">
        <div>
          <div className="item-types">
            <img
              src="\assets\home\desktop\image-removebg-preview(41).svg"
              alt=""
              className="mobile-menu-img "
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
              src="\assets\home\desktop\image-removebg-preview(38).svg"
              alt=""
              className="mobile-menu-img "
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
              src="\assets\home\desktop\image-removebg-preview(42).svg"
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
      <div className="home-main-second-section">
        <OrangeSpeakers></OrangeSpeakers>
        <BlackSpeaker></BlackSpeaker>
        <PersonSpeaker></PersonSpeaker>
      </div>
    </main>
  );
}
