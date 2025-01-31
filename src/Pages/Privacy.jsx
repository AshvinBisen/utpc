import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import "../style/privacypolicy.css"

function Privacy() {

    return(
        <>
            <Navbar />
            <div className="privacy-container">
            <h1>Privacy Policy</h1>

            <section>
                <h2>1. Introduction</h2>
                <p>
                Universal Travel Pay Coin is committed to protecting your privacy. This Privacy Policy
                outlines the types of information we collect, how we use and protect it, and your rights
                regarding your data.
                </p>
            </section>

            <section>
                <h2>2. Information We Collect</h2>
                <ul>
                <li><strong>Personal Information:</strong> Includes your name, email address, wallet address, and other information you provide when registering or using our services.</li>
                <li><strong>Usage Data:</strong> Data on your interactions with the platform, such as IP address, browser type, pages visited, and transactions.</li>
                <li><strong>Cookies:</strong> Used to enhance your experience, including for account logins and performance monitoring.</li>
                </ul>
            </section>

            <section>
                <h2>3. How We Use Your Information</h2>
                <ul>
                <li>To provide and improve our services.</li>
                <li>To process transactions involving UTPCCoin.</li>
                <li>To communicate updates, promotions, and important notifications.</li>
                <li>To comply with KYC and AML regulations.</li>
                </ul>
            </section>

            <section>
                <h2>4. Data Sharing</h2>
                <p>We do not sell, trade, or transfer personal information except:</p>
                <ul>
                <li>When required by law or legal processes.</li>
                <li>To trusted third-party providers assisting in our operations, under confidentiality agreements.</li>
                </ul>
            </section>

            <section>
                <h2>5. Data Security</h2>
                <p>We implement robust security measures like encryption, firewalls, and secure servers to protect your information. However, complete internet security cannot be guaranteed.</p>
            </section>

            <section>
                <h2>6. Your Rights</h2>
                <ul>
                <li>Access and request a copy of your personal information.</li>
                <li>Correct or update inaccurate information.</li>
                <li>Request deletion of personal information, subject to legal requirements.</li>
                <li>Opt out of marketing communications.</li>
                </ul>
            </section>

            <section>
                <h2>7. Third-Party Links</h2>
                <p>Our website may link to third-party websites, which have separate privacy practices. We encourage reviewing their policies.</p>
            </section>

            <section>
                <h2>8. Cookies Policy</h2>
                <p>We use cookies to track usage and personalize your experience. Control cookies in your browser settings, noting some features may be disabled without them.</p>
            </section>

            <section>
                <h2>9. Changes to This Policy</h2>
                <p>We may update this policy periodically. Changes will be posted here, and continued website use implies acceptance of modifications.</p>
            </section>

            <section>
                <h2>10. Contact Us</h2>
                <p>If you have questions or concerns, please contact us at <a href="mailto:support@utpc.io">support@utpc.io</a>.</p>
            </section>
        </div>
            <Footer />

        </>
    )

}


export default Privacy;