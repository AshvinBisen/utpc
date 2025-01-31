import "../../style/usecase.css";
import usecase1 from "../../assets/usecase1.png"
import usecase2 from "../../assets/usecase2.png"
import usecase3 from "../../assets/usecase3.png"
import usecase4 from "../../assets/usecase4.png"
import usecase5 from "../../assets/usecase5.png"
import usecase6 from "../../assets/usecase6.png"
import usecase7 from "../../assets/usecase7.png"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function Usecase() {


    return (
        <>
            <section id="Usecase" className="use-case-section">
                <div className="heading-section">
                    <h2 className="section-title">USECASE</h2>
                    <h6 className="sub-title">Empowering Travelers with Real-world Solutions </h6>
                    <p className="section-description">
                    UTPC is not just a cryptocurrency it is a solution for every traveler. Whether you are an individual adventurer, a  business traveler, or a travel agency, UTPC brings unmatched value to your travel experience.
                    </p>
                </div>

                <div className="use-case-container">


                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        loop={true}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                             
                            slideShadows:  false,
                        }}
                        navigation={true}
                        pagination={{ clickable: true }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            768: {
                                slidesPerView: 2, // 1 slide on screens <= 640px (mobile)
                            },
                            950: {
                                slidesPerView: 3, // 1 slide on screens <= 640px (mobile)
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="use-case-card">
                                <img src={usecase1} alt="" className="use-case-image" />
                                <h5 className="use-case-title">Global Travel Payments</h5>
                                <p className="use-case-description">UTPC enables travellers to make payments at various travel service providers worldwide, including airlines, hotels, restaurants, and transportation services. The blockchain-based system ensures that payments are secure, fast, and transparent. This eliminates the need for multiple currencies and reduces transaction fees, providing a hassle-free experience for international travellers.</p>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="use-case-card">
                                <img src={usecase2} alt="" className="use-case-image" />
                                <h5 className="use-case-title">Cross-Border INR Transactions</h5>
                                <p className="use-case-description">UTPC facilitates seamless cross-border transactions involving the Indian Rupee (INR), allowing travellers from India to easily make international payments. This is particularly beneficial for Indian travellers who often face challenges with currency exchange and high transaction fees. By providing an efficient cross-border payment solution, UTPC aims to make international travel more accessible and affordable for Indian users.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="use-case-card">
                                <img src={usecase3} alt="" className="use-case-image" />
                                <h5 className="use-case-title">Rewards and Loyalty Programs</h5>
                                <p className="use-case-description">UTPC introduces a rewards and loyalty system that incentivizes users for their travel-related spending. Users can earn UTPC tokens as rewards for booking flights, hotels, or other services through partnered platforms. These tokens can be used for future bookings or exchanged for other rewards, creating a cycle of value that encourages continued use of the platform.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="use-case-card">
                                <img src={usecase4} alt="" className="use-case-image" />
                                <h5 className="use-case-title">Booking Platforms</h5>
                                <p className="use-case-description">UTPC integrates with major travel booking platforms to offer a decentralized payment option.  travellers can use UTPC tokens to book flights, hotels, rental cars, and other services directly through these platforms. By partnering with leading booking websites, UTPC aims to provide a seamless experience where users can manage all their travel arrangements in one place using a single currency.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="use-case-card">
                                <img src={usecase5} alt="" className="use-case-image" />
                                <h5 className="use-case-title">Travel Expense Management</h5>
                                <p className="use-case-description">UTPC offers a solution for managing travel expenses, both for individual travellers and businesses. With the use of smart contracts, UTPC can automate expense tracking, reimbursements, and budget management. This feature is particularly useful for corporate travellers, allowing companies to streamline travel expense processes and reduce administrative overhead.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="use-case-card">
                                <img src={usecase6} alt="" className="use-case-image" />
                                <h5 className="use-case-title">Decentralized Travel Booking</h5>
                                <p className="use-case-description">UTPC aims to create a decentralized travel booking system that eliminates intermediaries, such as travel agencies, thereby reducing costs for travellers. By using blockchain technology, UTPC enables direct interaction between service providers and travellers, ensuring transparency and reducing the dependency on third-party platforms.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="use-case-card">
                                <img src={usecase7} alt="" className="use-case-image" />
                                <h5 className="use-case-title">Real-time Currency Conversion</h5>
                                <p className="use-case-description">UTPC provides real-time currency conversion, allowing travellers to easily convert their UTPC tokens into local currencies at the best possible rates. This feature is particularly valuable for international travellers who need to make payments in different currencies without dealing with fluctuating exchange rates and high conversion fees. The real-time conversion feature ensures that users always get the most value out of their tokens, making UTPC a practical solution for global travel.</p>
                            </div>
                        </SwiperSlide>
                         
                    </Swiper>

                    
                    
                    
                </div>
            </section>
            
        </>
      )


}
export default Usecase;