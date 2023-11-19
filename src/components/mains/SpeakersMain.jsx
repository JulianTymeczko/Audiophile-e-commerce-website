import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import NormalProduct from "../products/NormalProduct";
import PersonSpeaker from "../home/PersonSpeaker";
export default function SpeakersMain() {
  return (
    <main className="home-main also-item">
      <div
        className="home-main-second-section item-too"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "100px",
          marginBottom: "50px",
        }}
      >
        {" "}
        <NormalProduct
          newProduct={true}
          productDescription="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker 
          system that offers truly wireless connectivity -- creating new possibilities for more 
          pleasing and practical audio setups."
          productTitle=" ZX9 SPEAKER"
          mobileSrc="./assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"
          desktopSrc="./assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
          tabletSrc="./assets/product-zx9-speaker/tablet/image-category-page-preview.jpg"
          seeProductLink="/5"
        ></NormalProduct>
        <NormalProduct
          newProduct={false}
          productDescription=" Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses 
          high-end audiophile components that represents the top of the line powered speakers for 
          home or studio use.
        "
          productTitle=" ZX7 SPEAKER"
          mobileSrc="./assets/product-zx7-speaker/mobile/image-category-page-preview.jpg"
          desktopSrc="./assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"
          tabletSrc="./assets/product-zx7-speaker/tablet/image-category-page-preview.jpg"
          imageLeft={true}
          seeProductLink="/4"
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
