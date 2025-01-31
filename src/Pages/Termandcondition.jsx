import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import "../style/termandcondition.css"

function Termandcondition() {

    return(
        <>
            <Navbar />
            <div className="terms-container">
            <h1>Terms & Conditions</h1>

            <section>
                <h2>1. Introduction</h2>
                <p>
                    Welcome to Universal Travel Pay Coin. By using our website and services, you agree to comply
                    with and be bound by the following terms and conditions. Please review these terms carefully.
                    If you do not agree with these terms, you should not use this website.
                </p>
            </section>

            <section>
                <h2>2. Eligibility</h2>
                <p>
                    By accessing or using Universal Travel Pay Coin, you confirm that you are at least 18 years of
                    age or the legal age for gambling in your jurisdiction and have the legal capacity to enter
                    into these terms.
                </p>
            </section>

            <section>
                <h2>3. Account Registration</h2>
                <p>
                    You may be required to create an account to use certain features of Universal Travel Pay Coin.
                    You are responsible for maintaining the confidentiality of your account and password and agree
                    to notify us immediately if you detect any unauthorized use of your account.
                </p>
            </section>

            <section>
                <h2>4. Use of UTPC Tokens</h2>
                <p>
                    Universal Travel Pay Coin (UTPC) are the platform’s currency, used for gaming, staking, rewards,
                    and transactions. You acknowledge that all token purchases and transactions are non-refundable.
                </p>
            </section>

            <section>
                <h2>5. Prohibited Activities</h2>
                <p>
                    You agree not to:
                </p>
                <ul>
                    <li>Use the platform for any unlawful activity, including but not limited to money laundering, fraud, or gambling violations.</li>
                    <li>Engage in any behaviour that disrupts or damages the platform’s services or other users experience.</li>
                </ul>
            </section>

            <section>
                <h2>6. Intellectual Property</h2>
                <p>
                    All content on the Universal Travel Pay Coin website, including text, graphics, logos, and
                    software, is the property of Universal Travel Pay Coin or its licensors and is protected by
                    intellectual property laws. You may not use or reproduce any content without our prior written
                    consent.
                </p>
            </section>

            <section>
                <h2>7. Limitation of Liability</h2>
                <p>
                    Universal Travel Pay Coin will not be held liable for any direct, indirect, incidental, or
                    consequential damages arising out of your use of the website, including but not limited to the
                    loss of UTPCCoin or unauthorized access to your account.
                </p>
            </section>

            <section>
                <h2>8. Termination</h2>
                <p>
                    We reserve the right to suspend or terminate your account and access to our services at our
                    discretion if you violate these terms or engage in any unlawful activity.
                </p>
            </section>

            <section>
                <h2>9. Amendments</h2>
                <p>
                    Universal Travel Pay Coin reserves the right to modify or amend these terms at any time. Any
                    changes will be effective upon posting. Your continued use of the website indicates your
                    acceptance of the updated terms.
                </p>
            </section>

            <section>
                <h2>10. Governing Law</h2>
                <p>
                    These Terms & Conditions are governed by the laws of India. Any disputes arising from these
                    terms shall be subject to the exclusive jurisdiction of the courts in India.
                </p>
            </section>
            </div>
            <Footer />

        </>
    )

}


export default Termandcondition;