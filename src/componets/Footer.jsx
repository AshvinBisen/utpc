import "../style/footer.css";
import logo from "../../public/logo/logo_hr.png";
import ig from "../assets/instagram.png"
import fb from "../assets/fb.png"
import twit from "../assets/twitter.png"
import { Link } from "react-router-dom";
function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="footer-column footer-logo">
                    <div className="logo">
                        <img src={logo} alt="UTPC_Logo" />
                    </div>
                    <p>
                        Universal Travel Pay Coin <br></br>(UTPC) makes travel payments<br></br> easy, eliminating
                        currency<br></br> exchange and fees. Fast, secure,<br></br> and seamless for all your global<br></br>
                        needs.
                    </p>
                </div>
                <div className="footer-column">
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="#About">About Us</a></li>
                        <li><a href="#Roadmap">Roadmap</a></li>
                        <li><a href="#Tokenomics">Tokenomics</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="https://universal-travel-pay-coin.gitbook.io/universal-travel-pay-coin">Whitepaper</a></li>
                        <li> <Link to="/Presale" ><a href="">Buy UTPC</a></Link> </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Privacy</h3>
                    <ul>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/Termandcondition">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Social</h3>
                    <ul className="social-media-links">
                        <li className=""><a href="" className="sm-links ">
                            <img src={ig} alt="" />
                            <span>Instagram</span>
                        </a></li>
                        <li className=""><a href="" className="sm-links ">
                            <img src={fb} alt="" />
                            <span>Facebook</span>
                        </a></li>
                        <li className=""><a href="" className="sm-links ">
                            <img src={twit} alt="" />
                            <span>X</span>
                        </a></li>
                        {/* <li> <img src={} alt="facebook" /> <a href="#facebook">Facebook</a></li>
                <li><img src={} alt="facebook" /><a href="#twitter">Twitter</a></li>
                <li><img src={} alt="facebook" /><a href="#instagram">Instagram</a></li> */}
                        {/* <li><FaFacebookF /><a href="#facebook">Facebook</a></li>
                <li><FaTwitter /><a href="#twitter">Twitter</a></li>
                <li><FaInstagram /><a href="#instagram">Instagram</a></li> */}
                    </ul>
                </div>

                <div className="footer-bottom">
                    <p>Copyright &copy; UTPC {new Date().getFullYear()}</p>
                </div>
            </footer>


        </>
    )

}

export default Footer;