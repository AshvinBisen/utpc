// import { useState } from 'react';
import '../../style/howitwork.css';
import Howit from "../../assets/howitwork.png";


function Howitwork() {
 
   return (
     <>
       <div className="how-it-works">
            <h2>How it Works</h2>
            <div className="how-it-works-content">
                <div className="image-section">
                <img src={Howit} alt="How It Works" />
                </div>
                <div className="roadmap">
                <div className="roadmap-background"></div> 
                <div className="roadmap-line">
                    <div className="roadmap-item">
                        <div className="dot"></div>
                        <div className="card">
                        <h3>Create Your Wallet</h3>
                        <p>Download a BEP-20 compatible wallet like MetaMask or Trust Wallet.</p>
                        </div>
                    </div>
                    <div className="roadmap-item">
                        <div className="dot"></div>
                        <div className="card">
                        <h3>Fund Your Wallet</h3>
                        <p>Add BNB or other supported currencies to your wallet.</p>
                        </div>
                    </div>
                    <div className="roadmap-item">
                        <div className="dot"></div>
                        <div className="card">
                        <h3>Purchase UTPC</h3>
                        <p>Use a decentralized exchange (DEX) to trade BNB for UTPC tokens.</p>
                        </div>
                    </div>
                    <div className="roadmap-item">
                        <div className="dot"></div>
                        <div className="card">
                        <h3>Pay with UTPC</h3>
                        <p>Use your UTPC for travel-related payments, bookings, and more—anytime, anywhere.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
     </>
   )
 }
 
 export default Howitwork;