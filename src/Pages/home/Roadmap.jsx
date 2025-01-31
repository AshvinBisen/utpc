import "../../style/roadmap.css";
import plain from "../../assets/plane.png"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Roadmap() {

  const plainref = useRef();
  const main_wraper = useRef();

  useGSAP(() => {
    gsap.to(".airrowplain", {
      top: "83%",  
      scrollTrigger: {
        trigger: ".airrowPlainTrack",  
        start: 'top 10%',  
        end: "bottom 20%",  
        scrub: 2,  
        // markers: true,  
      },
    });
  });

  const phases = [
    {
      heading: "Foundation & Token Launch",
      date: "Q1 2025",
      description: [
        "Market Analysis",
        "Token Launch",
        "Initial Exchange Listings",
      ],
      additionalData: []
    },
    {
      heading: "Platform Integration & Adoption",
      date: "Q2 2025",
      description: [
        "Global Travel Payments",
        "Cross-Border INR Transactions",
        "Rewards and Loyalty Programs",
      ],
      datee: "Q3 2025",
      additionalData: [
        "Booking Platforms",
        "Real-time Currency Conversion"
      ]
    },
    {
      heading: "Advanced Use Cases & Scaling",
      date: "Q4 2025",
      description: [
        "Travel Expense Management",
        "Decentralized Travel Booking",
        "Marketing & User Growth",
      ],
      datee: "Q1 2026",
      additionalData: [
        "Mobile App Launch",
        "Staking & Rewards"
      ]
    },
    {
      heading: "Expansion & Ecosystem Growth",
      date: "Q2 2026",
      description: [
        "Wider Adoption",
        "Global Rollout",
        "Real-time Currency Conversion Expansion",
      ],
      datee: "Q3 2026",
      additionalData: [
        "Enterprise Solutions",
        "Blockchain Innovation"
      ]
    },
  ];

  return (
    <section id="Roadmap" ref={main_wraper} className="roadmap-section">
      <h2 className="roadmap-heading">Roadmap</h2>
      <div className="roadmap-background"></div> 
      <div className="roadmap-line">

        <div className="airrowPlainTrack">
          <img ref={plainref}  src={plain} alt="" className="airrowplain" />
        </div>

        {phases.map((phase, index) => (
          <div
            key={index}
            className={`roadmap-card ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="roadmap-dot"></div>
            <div style={{maxWidth:"20rem"}} >
              <div className="phase-name">{index + 1}</div>
              <h3 className="phase-heading">{phase.heading}</h3>
              <div className="roadmap-content">
                <p className="phase-date">{phase.date}</p>
                <ul className="phase-description">
                  {phase.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>

              {/* Additional Data Box for phase2, phase3, phase4 */}
              {phase.additionalData.length > 0 && (
                <div className="additional-data-box">
                <p className="phase-date">{phase.datee}</p>
                  {/* <h4>Q3 2025</h4> */}
                  <ul>
                    {phase.additionalData.map((data, i) => (
                      <li key={i}>{data}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Roadmap;
