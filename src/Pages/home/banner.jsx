// import { useState } from 'react';
import '../../style/banner.css';
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import img4 from "../../assets/4.png"
import img5 from "../../assets/5.png"


function Banner() {
 
   return (
     <>
       <div className="section3 s3back">
            <div className="s3head">
            <h2>UTPC Available Soon</h2>
            </div>
            <div className="s3banner">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
            </div>
        </div>
     </>
   )
 }
 
 export default Banner;