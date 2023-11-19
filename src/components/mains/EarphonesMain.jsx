import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import NormalProduct from "../products/NormalProduct";
import PersonSpeaker from "../home/PersonSpeaker";
import "./EarphonesMain.css";
import { useEffect } from "react";
export default function EarphonesMain() {
  useEffect(() => {
    const text = "YX1 WIRELESS <br> EARPHONES";

    const container = document.querySelector(".earphones-page h2");

    container.innerHTML = text;
  }, []);

  return (
    <main className="home-main also-item">
      <div
        className="home-main-second-section earphones-page item-too"
        style={{ marginBottom: "50px" }}
      >
        {" "}
        <NormalProduct
          newProduct={true}
          productDescription="Tailor your listening
          experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.
          Enjoy incredible high-fidelity sound even in noisy environments with its
          active noise cancellation feature."
          mobileSrc="./assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"
          desktopSrc="./assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
          tabletSrc="./assets/product-yx1-earphones/tablet/image-category-page-preview.jpg"
          seeProductLink="/0"
        ></NormalProduct>
      </div>{" "}
      <div className="mobile-menu home-main-mobile-menu">
        <div>
          <div className="item-types">
            <img
              src="./assets/home/desktop/image-removebg-preview(41).svg"
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
              src="./assets/home/desktop/image-removebg-preview(38).svg"
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
              src="./assets/home/desktop/image-removebg-preview(42).svg"
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
      <PersonSpeaker></PersonSpeaker>
    </main>
  );
}
