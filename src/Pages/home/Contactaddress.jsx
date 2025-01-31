import { useState } from 'react';
import '../../style/contactaddress.css';


function Contactaddress() {
    const [copied, setCopied] = useState(false);
  const address = "0x5d200fa31ca7fd38ebfeea60c3c2991fbddaf13c";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
  };
 
   return (
     <>
       <div className="contactaddress">
      <div className="conadd">
        <div className="s10one">
          <p className="s10head">
            <span className="uk-text-gradient">Contract Address</span>
          </p>
        </div>
        <div className="s10three">
          <p id="address" className="s10para new2">{address}</p>
          <button id="copyButton" className="s02button" onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy Address'}
          </button>
        </div>
      </div>
    </div>
     </>
   )
 }
 
 export default Contactaddress;