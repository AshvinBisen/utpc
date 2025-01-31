import "../../style/about.css";
import aboutimg from '../../assets/about-img.png';

function About() {


    return (
        <>

            <div id="About" className="about">
                <div className="about-left">
                    <img src={aboutimg} alt="About UTPC" />
                </div>
                <div className="about-right">
                    <div className="about-heading">
                    <h2>About Us</h2>
                    </div>
                    <div className="about-paragraph">
                    <p>
                        Imagine a world where travel payments are effortless—no more dealing with fluctuating currency exchanges, high fees, or complicated payment processes. Universal Travel Pay Coin (UTPC) brings this vision to life. Built as a BEP-20 token on the Binance Smart Chain, UTPC revolutionizes global travel by making payments fast, secure, and seamless.
                    </p>
                    <p>
                        Whether you’re booking hotels, paying for flights, or managing corporate travel expenses, UTPC simplifies it all. Say goodbye to traditional hassles and experience a new era of travel convenience with a single, reliable cryptocurrency solution tailored for the modern traveler.
                    </p>
                    </div>
                </div>
            </div>
        </>
      )


}
export default About;