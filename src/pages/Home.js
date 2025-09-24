import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "./Home.css";
import heroPhoto from "../assest/photo1.avif";


const amenities = [
    { name: "Free parking", icon: "bi bi-car-front-fill" },
    { name: "Free WiFi", icon: "bi bi-wifi" },
    { name: "Digital Key", icon: "bi bi-key-fill" },
    { name: "Concierge", icon: "bi bi-person-fill" },
    { name: "Hotel Residences", icon: "bi bi-building" },

    { name: "On-site restaurant", icon: "bi bi-cup-fill" },
    { name: "Outdoor pool", icon: "bi bi-water" },
    { name: "Fitness center", icon: "bi bi-heart-pulse" },

    { name: "Room service", icon: "bi bi-bell-fill" },
    { name: "Meeting rooms", icon: "bi bi-people-fill" },
    { name: "Tennis Court", icon: "bi bi-basket" },
    { name: "Spa & Sauna", icon: "bi bi-thermometer-half" },
    { name: "Laundry Service", icon: "bi bi-droplet" },
    { name: "Concierge 24/7", icon: "bi bi-clock" }
];

const Home = () => {
    return (
        <>
            <Navbar />


            <div className="Hero">
                <div className="hero-content">
                    <h1>VIJAYA HOTEL</h1>
                    <p>Experience Comfort & Luxury in the Heart of Epitawala</p>
                </div>
            </div>


            <section className="about">
                <h2>Steps from Sri Lankan culture and near the coast</h2>
                <p>
                   our hotel is less than a 30-minute walk from Kiriella city's local attractions. Local buses stop on our doorstep, making it easy to explore the city. We are within three kilometers of the main market and nearby cultural sites. Enjoy our sauna, fitness center, and outdoor pool during your stay.
                </p>
            </section>


            <section className="amenities">
                <h2>Our Amenities</h2>
                <div className="amenities-container">
                    {amenities.map((item, index) => (
                        <div key={index} className="amenity-card">
                            <i className={item.icon}></i>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="policies-section">
                <h2>Hotel Policies</h2>
                <div className="policies-container">
                    <div className="policy-card">
                        <i className="bi bi-car-front-fill"></i>
                        <p>Parking</p>
                    </div>

                    <div className="policy-card">
                        <i className="bi bi-slash-circle"></i>
                        <p>No Smoking</p>
                    </div>
                    <div className="policy-card">
                        <i className="bi bi-wifi"></i>
                        <p>Free WiFi</p>
                    </div>
                </div>
            </div>


            <div className="benefits-section">
                <h2>Membership Benefits</h2>
                <div className="benefits-container">
                    <div className="benefit-card">
                        <i className="bi bi-percent"></i>
                        <p>Discount Rate</p>
                    </div>
                    <div className="benefit-card">
                        <i className="bi bi-gift-fill"></i>
                        <p>Points toward free nights and more</p>
                    </div>
                    <div className="benefit-card">
                        <i className="bi bi-door-open-fill"></i>
                        <p>Choose Your Room</p>
                    </div>
                    <div className="benefit-card">
                        <i className="bi bi-phone-fill"></i>
                        <p>Digital Check-In</p>
                    </div>
                    <div className="benefit-card">
                        <i className="bi bi-star-fill"></i>
                        <p>Hilton Honors Experiences</p>
                    </div>
                    <div className="benefit-card">
                        <i className="bi bi-key-fill"></i>
                        <p>Digital Key</p>
                    </div>
                </div>
            </div>



            <Footer />
        </>
    );
};

export default Home;
