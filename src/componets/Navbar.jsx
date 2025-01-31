import { useState } from 'react';
import '../style/navbar.css'
import logo from '../../public/logo/logo_hr.png'
import { Link } from 'react-router-dom';


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <>
      <header className="header">

        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : 'bold'}`}>
          <ul>
            <li className='active'> <Link to="/"><a href="">Home</a> </Link> </li>
            <li><a href="#About">About</a></li>
            <li><a href="#Usecase">Use Case</a></li>
            <li><a href="#Tokenomics">Tokenomics</a></li>
            <li><a href="#Roadmap">Roadmap</a></li>
          </ul>
        </nav>
        <Link to="/presale">
          <button className="buy-token-btn">Buy UTPC</button>
        </Link>
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className="hamburger-icon"></span>
        </div>
      </header>
    </>
  )
}

export default Navbar;
