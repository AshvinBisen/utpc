// import { useState } from 'react';
import '../../style/token.css';
import Tokonomics from "../../assets/token-main.webp";


function Token() {

  return (
    <>
      <div id="Tokenomics" className="tokenomic_section_container">
        <h1 className="tokenomic_heading">Tokenomics</h1>

        <div className="tokenomic_body">
          <div className="tokenomics_left">
            <div className="tokenomics" id="tokenomic">
              <div className="token">
                <div className="div1"><p>Token Name</p></div>
                <div className="div2"><p>Universal Travel Pay Coin</p></div>
              </div>
              <div className="token">
                <div className="div1"><p>Symbol</p></div>
                <div className="div2"><p>UTPC</p></div>
              </div>
              <div className="token">
                <div className="div1"><p>Network</p></div>
                <div className="div2"><p>BEP20</p></div>
              </div>
              <div className="token">
                <div className="div1"><p>Decimal</p></div>
                <div className="div2"><p>18</p></div>
              </div>
              <div className="token">
                <div className="div1"><p>Total Supply</p></div>
                <div className="div2"><p>250 B</p></div>
              </div>
            </div>
          </div>
          <div className="tokenomics_right">
            <img src={Tokonomics} alt="Tokenomics" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Token;