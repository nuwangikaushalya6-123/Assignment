import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; 
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h4>Contact Us</h4>
          <p><i className="bi bi-telephone-fill"></i> +94 762701365</p>
          <p><i className="bi bi-envelope-fill"></i> info@vijaya.com</p>
          <p><i className="bi bi-geo-alt-fill"></i> 123 Main Street, Kiriella, Sri Lanka</p>

         
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.872531902509!2d80.27465701431747!3d6.749942622282018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2500fcd00461d%3A0xbaf2f7b8d8dd6806!2sKiriella!5e0!3m2!1sen!2slk!4v1695201912345!5m2!1sen!2slk"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "8px", marginTop: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kiriella Location"
            ></iframe>
          </div>
        </div>

        <div className="social-media">
          <h4>Follow Us</h4>
          <p>
            <i className="bi bi-facebook"></i> Facebook |{" "}
            <i className="bi bi-instagram"></i> Instagram |{" "}
            <i className="bi bi-twitter"></i> Twitter
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Vijaya Hotel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
