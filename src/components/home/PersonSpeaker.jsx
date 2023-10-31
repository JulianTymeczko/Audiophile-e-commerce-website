import "./PersonSpeaker.css";
export default function PersonSpeaker() {
  return (
    <div className="person-speaker">
      <img
        src="\assets\shared\tablet\image-best-gear.jpg"
        alt=""
        className="tablet-image"
      />
      <img
        src="\assets\shared\mobile\image-best-gear.jpg"
        alt=""
        className="mobile-image"
      />
      <div>
        <h2>
          BRINGING YOU THE <br /> <span>BEST</span> AUDIO GEAR
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img
        src="\assets\shared\desktop\image-best-gear.jpg"
        alt=""
        className="desktop-image"
      />
    </div>
  );
}
