import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import NormalProduct from "../products/NormalProduct";
import PersonSpeaker from "../home/PersonSpeaker";
export default function HeadphonesMain() {
  return (
    <main className="home-main">
      <div className="home-main-second-section">
        {" "}
        <NormalProduct
          newProduct={true}
          productDescription="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium 
  headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          productTitle=" XX99 Mark II
  Headphones"
          mobileSrc="\assets\product-xx99-mark-two-headphones\mobile\image-category-page-preview.jpg"
          desktopSrc="\assets\product-xx99-mark-two-headphones\desktop\image-category-page-preview.jpg"
          tabletSrc="\assets\product-xx99-mark-two-headphones\tablet\image-category-page-preview.jpg"
        ></NormalProduct>
        <NormalProduct
          newProduct={false}
          productDescription=" As the gold standard for headphones, the classic XX99 Mark I offers detailed
          and accurate audio reproduction for audiophiles, mixing engineers, and music
          aficionados alike in studios and on the go."
          productTitle=" XX99 Mark I Headphones"
          mobileSrc="\assets\product-xx99-mark-one-headphones\mobile\image-category-page-preview.jpg"
          desktopSrc="\assets\product-xx99-mark-one-headphones\desktop\image-category-page-preview.jpg"
          tabletSrc="\assets\product-xx99-mark-one-headphones\tablet\image-category-page-preview.jpg"
          imageLeft={true}
        ></NormalProduct>
        <NormalProduct
          newProduct={false}
          productDescription="Enjoy your audio almost anywhere and customize it to your
          specific tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move."
          productTitle=" XX59 Headphones"
          mobileSrc="\assets\product-xx59-headphones\mobile\image-category-page-preview.jpg"
          desktopSrc="\assets\product-xx59-headphones\desktop\image-category-page-preview.jpg"
          tabletSrc="\assets\product-xx59-headphones\tablet\image-category-page-preview.jpg"
        ></NormalProduct>
      </div>{" "}
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
      <PersonSpeaker></PersonSpeaker>
    </main>
  );
}
