
import photo2 from "../assest/photo2.avif";
import photo3 from "../assest/photo3.avif";
import photo6 from "../assest/photo6.jpg";
import photo5 from "../assest/photo5.avif";

import "./AboutUs.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />


      <div className="title">
        <h2>ABOUT US </h2>
      </div>


      <div className="cards-container">
        <div className="card">
          <img src={photo2} alt="Luxurious Rooms" />
          <p>Swimming Pool</p>
        </div>
        <div className="card">
          <img src={photo3} alt="Spa & Wellness" />
          <p>Luxurious Room</p>
        </div>
        <div className="card">
          <img src={photo6} alt="Fine Dining" />
          <p>Fine Dining</p>
        </div>
        <div className="card">
          <img src={photo5} alt="Swimming Pool" />
          <p>Luxurious Apartment</p>
        </div>
        <div className="paragraph">
          <h3>
            Elegant Accommodations: Wijaya Holiday Resort in Kiriella offers family rooms with private bathrooms, garden or pool views, and modern amenities. Each room includes air-conditioning, a work desk, and free WiFi.
          </h3>
          <h3>
            Exceptional Facilities: Guests enjoy a swimming pool with a view, fitness center, sun terrace, water sports facilities, and a free airport shuttle service. Additional amenities include a restaurant, bar, and children's playground.
          </h3>
          <h3>
            Dining Experience: The family-friendly restaurant serves British, Indian, American, and Italian cuisines, offering brunch, lunch, dinner, and high tea. Breakfast options include continental, American, and full English/Irish.
          </h3>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
