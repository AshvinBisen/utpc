// import { useState } from 'react'
import Navbar from "../../componets/Navbar";
import Hero from "./Hero";
import Banner from "./banner";
import About from "./About";
import Usecase from "./usecase";
import Roadmap from "./Roadmap";
import Token from "./Token";
import Contactaddress from "./Contactaddress"
import Howitwork from "./Howitwork";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "../../componets/Footer";

 

function Home() {
    
  
    return (
      <>
        <Navbar />
        <Hero />
        <Banner />
        <About />
        <Usecase />
        <Roadmap />
        <Token />
        <Contactaddress />
        <Howitwork />
        <Faq />
        <Contact />
        <Footer />
      </>
    )
  }
  
  export default Home;
  