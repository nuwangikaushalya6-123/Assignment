import { Link } from "react-router-dom";
import style from "./Styles.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}> 
      <ul className={style.navItem}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/AboutUs'>About Us</Link></li>
        <li><Link to='/Rooms'>Rooms</Link></li>
        <li><Link to='/Facilities'>Facilities</Link></li>
        <li><Link to='/Gallery'>Gallery</Link></li>
        <li><Link to='/Contact'>Contact Us</Link></li>
        <li><Link to='/EventPage'>Events</Link></li>
        <li><Link to='/AuthForm'>Sign Up</Link></li>
        
      </ul>
    </nav>
  )
}

export default Navbar;
