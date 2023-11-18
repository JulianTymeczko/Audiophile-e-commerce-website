import Button from "../buttons/Button";
import "./featuredsection.css";
import { useNavigate } from "react-router-dom";
export default function FeaturedSection({
  features,
  inTheBox,
  topLeftPictureD,
  topLeftPictureT,
  topLeftPictureM,
  bottomLeftPictureD,
  bottomLeftPictureT,
  bottomLeftPictureM,
  bigRightPictureD,
  bigRightPictureT,
  bigRightPictureM,
  otherProductOne,
  otherProductTwo,
  otherProductThree,
  slugOne,
  slugTwo,
  slugThree,
}) {
  let navigate = useNavigate();
  return (
    <section className="featured-section-products">
      <div>
        <div className="Features">
          <h2>FEATURES</h2>

          <p className="pre">{features}</p>
        </div>
        <div className="in-the-box">
          <h2>IN THE BOX</h2>
          <ul className="in-the-box-list">
            {inTheBox.map((el) => (
              <li key={el.item}>
                <span>{el.quantity}x</span> {el.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="product-images">
        <div>
          <div>
            <img src={topLeftPictureD} alt="" className="desktop-image" />
            <img src={topLeftPictureT} alt="" className="tablet-image" />
            <img src={topLeftPictureM} alt="" className="mobile-image" />
          </div>
          <div>
            <img src={bottomLeftPictureD} alt="" className="desktop-image" />
            <img src={bottomLeftPictureT} alt="" className="tablet-image" />
            <img src={bottomLeftPictureM} alt="" className="mobile-image" />
          </div>
        </div>
        <div>
          <img src={bigRightPictureD} alt="" className="desktop-image" />
          <img src={bigRightPictureT} alt="" className="tablet-image" />
          <img src={bigRightPictureM} alt="" className="mobile-image" />
        </div>
      </div>
      <div className="you-may-like">
        <h4>YOU MAY ALSO LIKE</h4>
        <div>
          <div>
            <img
              src={otherProductOne.image.desktop}
              alt=""
              className="desktop-image"
            />
            <img
              src={otherProductOne.image.tablet}
              alt=""
              className="tablet-image"
            />
            <img
              src={otherProductOne.image.mobile}
              alt=""
              className="mobile-image"
            />
            <h4 style={{ textTransform: "uppercase" }}>
              {otherProductOne.name}
            </h4>
            <Button
              buttonNumber="one"
              buttonText="SEE PRODUCT"
              onClickFunc={() => {
                slugOne === "/yx1-earphones"
                  ? navigate("/0")
                  : slugOne === "/xx59-headphones"
                  ? navigate("/1")
                  : slugOne === "/xx99-mark-one-headphoness"
                  ? navigate("/2")
                  : slugOne === "/xx99-mark-two-headphones"
                  ? navigate("/3")
                  : slugOne === "/zx7-speaker"
                  ? navigate("/4")
                  : navigate("/5");
              }}
            ></Button>
          </div>
          <div>
            <img
              src={otherProductTwo.image.desktop}
              alt=""
              className="desktop-image"
            />
            <img
              src={otherProductTwo.image.tablet}
              alt=""
              className="tablet-image"
            />
            <img
              src={otherProductTwo.image.mobile}
              alt=""
              className="mobile-image"
            />
            <h4 style={{ textTransform: "uppercase" }}>
              {otherProductTwo.name}
            </h4>
            <Button
              buttonNumber="one"
              buttonText="SEE PRODUCT"
              onClickFunc={() => {
                slugTwo === "/yx1-earphones"
                  ? navigate("/0")
                  : slugTwo === "/xx59-headphones"
                  ? navigate("/1")
                  : slugTwo === "/xx99-mark-one-headphoness"
                  ? navigate("/2")
                  : slugTwo === "/xx99-mark-two-headphones"
                  ? navigate("/3")
                  : slugTwo === "/zx7-speaker"
                  ? navigate("/4")
                  : navigate("/5");
              }}
            ></Button>
          </div>
          <div>
            <img
              src={otherProductThree.image.desktop}
              alt=""
              className="desktop-image"
            />
            <img
              src={otherProductThree.image.tablet}
              alt=""
              className="tablet-image"
            />
            <img
              src={otherProductThree.image.mobile}
              alt=""
              className="mobile-image"
            />
            <h4 style={{ textTransform: "uppercase" }}>
              {otherProductThree.name}
            </h4>
            <Button
              buttonNumber="one"
              buttonText="SEE PRODUCT"
              onClickFunc={() => {
                slugThree === "/yx1-earphones"
                  ? navigate("/0")
                  : slugThree === "/xx59-headphones"
                  ? navigate("/1")
                  : slugThree === "/xx99-mark-one-headphoness"
                  ? navigate("/2")
                  : slugThree === "/xx99-mark-two-headphones"
                  ? navigate("/3")
                  : slugThree === "/zx7-speaker"
                  ? navigate("/4")
                  : navigate("/5");
              }}
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
