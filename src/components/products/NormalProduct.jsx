import "./normalproduct.css";
import Button from "../buttons/Button";
export default function NormalProduct({
  tabletSrc,
  mobileSrc,
  desktopSrc,
  productDescription,
  productTitle,
  newProduct,
  imageLeft,
}) {
  return (
    <div className="person-speaker normal-product">
      <img src={tabletSrc} alt="" className="tablet-image" />
      <img src={mobileSrc} alt="" className="mobile-image" />
      {!imageLeft && <img src={desktopSrc} alt="" className="desktop-image" />}
      <div>
        {newProduct && <h6>NEW PRODUCT</h6>}
        <h2>{productTitle}</h2>
        <p>{productDescription}</p>
        <Button buttonText="SEE PRODUCT" buttonNumber="one"></Button>
      </div>
      {imageLeft && <img src={desktopSrc} alt="" className="desktop-image" />}
    </div>
  );
}
