import Button from "../buttons/Button";
import "./featuredsection.css";
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
}) {
  return (
    <section className="featured-section-products">
      <div>
        <div className="Features">
          <h2>FEATURES</h2>

          <p className="pre">{features}</p>
        </div>
        <div className="in-the-box">
          <h2>IN THE BOX</h2>
          <ul>
            {inTheBox.map((el) => (
              <div key={el.item}>
                <span>{el.quantity}x</span>
                <li>{el.item}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="product-images">
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
        <div>
          <img src={bigRightPictureD} alt="" className="desktop-image" />
          <img src={bigRightPictureT} alt="" className="tablet-image" />
          <img src={bigRightPictureM} alt="" className="mobile-image" />
        </div>
      </div>
      <div className="you-may-like">
        <h4>YOU MAY ALSO LIKE</h4>
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
          <h4>{otherProductOne.name}</h4>
          <Button buttonNumber="one" buttonText="SEE PRODUCT"></Button>
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
          <h4>{otherProductTwo.name}</h4>
          <Button buttonNumber="one" buttonText="SEE PRODUCT"></Button>
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
          <h4>{otherProductThree.name}</h4>
          <Button buttonNumber="one" buttonText="SEE PRODUCT"></Button>
        </div>
      </div>
    </section>
  );
}
