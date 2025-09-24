
import Navbar from "../Components/Navbar/Navbar";
import "./Facilities.css";
import Bathroom from "../assest/Bathroom.jpeg"
import Air from "../assest/Air.jpeg";
import Tv from "../assest/Tv.jpg";
import FreeWiFi from "../assest/FreeWiFi.jpg";
import MiniBar from "../assest/MiniBar.jpeg";
import Restaurant from "../assest/Restaurant.jpeg";
import Bar from "../assest/Bar.jpeg";
import Cafe from "../assest/Cafe.jpeg";
import Buffet from "../assest/Buffet.jpeg";
import SpecialDietMenus from "../assest/SpecialDietMenus.jpeg";
import SwimmingPoo from "../assest/SwimmingPoo.jpeg";
import Gym from "../assest/Gym.jpeg";
import SteamRoom from "../assest/SteamRoom.jpeg";
import BeautySalon from "../assest/BeautySalon.jpeg"
import Footer from "../Components/Footer/Footer";
import spa from '../assest/image11.jpg';


const Facilities = () => {
    return (
        <>
            <Navbar />
            <div className="facilities-title">
                <h2>Rooms Amenities</h2>
            </div>
            <div className="cards-container">
                <div className="card">
                    <img src={Bathroom} alt="Bathrooms" />
                    <p>Suitable Bathrooms</p>
                </div>



                <div className="card">
                    <img src={Air} alt="Air-conditioning" />
                    <p>Air-conditioning</p>
                </div>

                <div className="card">
                    <img src={Tv} alt="Tv" />
                    <p>Suitable Tv</p>
                </div>

                <div className="card">
                    <img src={FreeWiFi} alt="FreeWiFi" />
                    <p>Free WiFi</p>
                </div>

                <div className="card">
                    <img src={MiniBar} alt="Mini Bar" />
                    <p>Mini Bar</p>
                </div>

            </div>
            <div className="facilities-title">
                <h2>Food & Beverage</h2>
            </div>

            <div className="cards-container">
                <div className="card">
                    <img src={Restaurant} alt="Restaurant" />
                    <p>Restaurant</p>
                </div>

                <div className="card">
                    <img src={Bar} alt="Bar" />
                    <p>Bar</p>
                </div>

                <div className="card">
                    <img src={Cafe} alt="Cafe" />
                    <p>Cafe</p>
                </div>


                <div className="card">
                    <img src={Buffet} alt="Buffe" />
                    <p>Buffe</p>
                </div>



                <div className="card">
                    <img src={SpecialDietMenus} alt="SpecialDietMenus" />
                    <p>Special Diet Menus</p>
                </div>


            </div>

            <div className="facilities-title">
                <h2>Leisure & Wellness</h2>
            </div>

            <div className="cards-container">
                <div className="card">
                    <img src={SwimmingPoo} alt="SwimmingPoo" />
                    <p>SwimmingPoo</p>
                </div>

                <div className="card">
                    <img src={Gym} alt="Gym" />
                    <p>Gym</p>
                </div>
                <div className="card">
                    <img src={SteamRoom} alt="SteamRoom" />
                    <p>Steam Room</p>
                </div>
                <div className="card">
                    <img src={BeautySalon} alt="Beauty Salon" />
                    <p>Beauty Salon</p>
                </div>

                 <div className="card">
                    <img src={spa} alt="Spa Salon" />
                    <p>Spa Salon</p>
                </div>
                 
            </div>

            <Footer/>
            
        </>
    )
}
export default Facilities;