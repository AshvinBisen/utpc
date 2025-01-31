import "../../style/hero.css";
import UTPC from "../../assets/utpc.mp4";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <div className="hero-heading">
            <h2>
              Universal Travel Pay Coin: Your Gateway to <span>Global Travel</span> 
              
            </h2>
          </div>
          <div className="hero-paragraph">
            <p>
              Effortlessly manage your travel expenses and bookings across
              borders with blockchain technology, ensuring seamless
              transactions, real-time currency conversion, and secure payments.
              Enjoy the convenience of decentralized travel booking, rewards
              programs, and travel expense management, all in one platform.
            </p>
          </div>
          <div className="hero-button">
            <a
              href="https://universal-travel-pay-coin.gitbook.io/universal-travel-pay-coin"
              className="whitepaper-btn btn"
            >
              Whitepaper
            </a>
            <a className="buy-utpc-btn btn" href="/presale">Buy UTPC</a>
          </div>
        </div>
        <div className="hero-right">
          <video autoPlay loop muted>
            <source src={UTPC} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
export default Hero;
