

import deluxeRoom from "../assest/deluxeRoom.jpeg";
import familySuite from "../assest/familySuite.jpeg";
import presidentialSuite from "../assest/presidentialSuite.jpeg";
import Executive from "../assest/Executive.jpeg";
import Honeymoon from "../assest/Honeymoon.jpeg";
import "./Rooms.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Rooms = () => {
  return (
    <>
      <Navbar />


      <div className="title">
        <h2>ROOMS </h2>
      </div>

      <div className="rooms-container">

        <div className="room-card">
          <img src={deluxeRoom} alt="Deluxe Room" className="room-image" />
          <div className="room-info">
            <h3>Deluxe Room</h3>
            <p>
              Cozy room with king-size bed, private bathroom, air-conditioning, and garden view.
            </p>
            <span className="price">From $120/night</span>
          </div>
        </div>


        <div className="room-card">
          <img src={familySuite} alt="Family Suite" className="room-image" />
          <div className="room-info">
            <h3>Family Suite</h3>
            <p>
              Spacious suite with 2 bedrooms, living area, and balcony overlooking the pool.
            </p>
            <span className="price">From $200/night</span>
          </div>
        </div>


        <div className="room-card">
          <img src={presidentialSuite} alt="Presidential Suite" className="room-image" />
          <div className="room-info">
            <h3>Presidential Suite</h3>
            <p>
              Luxurious suite with separate living & dining areas, private balcony, and sea view.
            </p>
            <span className="price">From $350/night</span>
          </div>
        </div>

        <div className="room-card">
          <img src={Executive} alt="Executive Rooms" className="room-image" />
          <div className="room-info">
            <h3>Executive Suite</h3>
            <p>
              Modern Executive Room with queen-size bed, city view, ensuite bathroom, and workspace. Equipped with Wi-Fi, smart TV, minibar, and coffee maker, ideal for business travelers seeking comfort and convenience.
            </p>
            <span className="price">From $350/night</span>
          </div>

        </div>

        <div className="room-card">
          <img src={Honeymoon} alt="Honeymoon Suited" className="room-image" />
          <div className="room-info">
            <h3>Honeymoon Suite</h3>
            <p>
              Romantic Honeymoon Suite with king-size bed, private balcony, Jacuzzi, and scenic sea view. Equipped with Wi-Fi, minibar, premium toiletries, and room service, perfect for couples seeking a luxurious and intimate stay.
            </p>
            <span className="price">From $450/night</span>
          </div>
        </div>


      </div>

      <Footer />

    </>
  );
};

export default Rooms;
