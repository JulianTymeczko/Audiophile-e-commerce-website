import { useParams } from "react-router-dom";
import data from "../data.json";
import BuyProduct from "../components/products/BuyProduct";
import PersonSpeaker from "../components/home/PersonSpeaker";
import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";
import "./Product.css";
import FeaturedSection from "../components/products/FeaturedSection";
export default function Product() {
  let { id } = useParams();

  return (
    <main className="product-page">
      <BuyProduct
        price={data[id].price}
        newProduct={data[id].new}
        desktopSrc={data[id].image.desktop}
        tabletSrc={data[id].image.tablet}
        mobileSrc={data[id].image.mobile}
        productTitle={data[id].name}
        productDescription={data[id].description}
      ></BuyProduct>
      <FeaturedSection
        features={data[id].features}
        inTheBox={data[id].includes}
        topLeftPictureD={data[id].gallery.first.desktop}
        topLeftPictureT={data[id].gallery.first.tablet}
        topLeftPictureM={data[id].gallery.first.mobile}
        bottomLeftPictureD={data[id].gallery.second.desktop}
        bottomLeftPictureT={data[id].gallery.second.tablet}
        bottomLeftPictureM={data[id].gallery.second.mobile}
        bigRightPictureD={data[id].gallery.third.desktop}
        bigRightPictureT={data[id].gallery.third.tablet}
        bigRightPictureM={data[id].gallery.third.mobile}
        otherProductOne={data[id].others[0]}
        otherProductTwo={data[id].others[1]}
        otherProductThree={data[id].others[2]}
      ></FeaturedSection>
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
