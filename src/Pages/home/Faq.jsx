import { useState } from 'react';
import '../../style/faq.css'
import faq from "../../assets/faq.png";


function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Q1. What is your service about?",
      answer: "UTPC is a BEP-20 token designed to facilitate global travel payments, cross-border transactions, and real-time  currency conversions using block chain technology.",
    },
    {
      question: "Q2. How do I start a project?",
      answer: "Simply contact us through our form, and we’ll get back to you with the next steps.",
    },
    {
      question: "Q3. What is your service about?",
      answer: "We provide web development, blockchain development, and digital marketing services.",
    },
    {
      question: "Q4. How do I start a project?",
      answer: "Simply contact us through our form, and we’ll get back to you with the next steps.",
    },
  ];

 
   return (
     <>
       <div className="faq-section">
          <div className="head">
            <h2>Frequently Asked Questions (FAQ)</h2>
          </div>
          <div className="faq-container">
            <div className="faq-left">
              {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                  <div className="faq-question" onClick={() => toggleFAQ(index)}>
                    <div className="que">{faq.question}</div>
                    <span>{activeIndex === index ? "-" : "+"}</span>
                  </div>
                  {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
                </div>
              ))}
            </div>
            <div className="faq-right">
              <img
                src={faq}
                alt="FAQ section"
                className="faq-image"
              />
            </div>
          </div>
        </div>
     </>
   )
 }
 
 export default Faq;
 