import { useParams } from "react-router-dom";
import data from "../data.json";
import BuyProduct from "../components/products/BuyProduct";
import PersonSpeaker from "../components/home/PersonSpeaker";
import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";
import "./Product.css";
export default function Product() {
  let { id } = useParams();

  return (
    <main className="product-page">
      <BuyProduct
        price={data[id].price}
        newProduct={data[id].new}
        desktopSrc={data[id].image.desktop}
        tabletSrcSrc={data[id].image.tablet}
        mobileSrcSrc={data[id].image.mobile}
        productTitle={data[id].name}
        productDescription={data[id].description}
      ></BuyProduct>
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
