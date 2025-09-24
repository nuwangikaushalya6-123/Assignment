import React, { useState } from "react";
import "./BookingForm.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
  });

  const [errors, setErrors] = useState({});
  const [confirmation, setConfirmation] = useState("");

  const hotelNumber = "94762701365"; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "WhatsApp number is required";
    else {
      const phoneRegex = /^(\+94|0)\d{9}$/;
      if (!phoneRegex.test(formData.whatsapp)) newErrors.whatsapp = "Invalid phone number format";
    }
    if (!formData.checkIn) newErrors.checkIn = "Check-in date is required";
    if (!formData.checkOut) newErrors.checkOut = "Check-out date is required";
    if (!formData.roomType) newErrors.roomType = "Please select a room type";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `Booking Request:
Name: ${formData.name}
WhatsApp: ${formData.whatsapp}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Room Type: ${formData.roomType}`;

    const whatsappLink = `https://wa.me/${hotelNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");

    setConfirmation(`Booking submitted for ${formData.name} (WhatsApp: ${formData.whatsapp})`);

    setFormData({
      name: "",
      whatsapp: "",
      checkIn: "",
      checkOut: "",
      roomType: "",
    });
    setErrors({});
  };

  return (
    <>
      <Navbar />

      <div className="booking-title">
        <h2>Book Your Room</h2>
      </div>

      <div className="booking-form-container">
        <form onSubmit={handleSubmit} noValidate>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Kasun Madushan"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>

          <label>
            WhatsApp Number:
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="+94XXXXXXXXX"
            />
            {errors.whatsapp && <span className="error">{errors.whatsapp}</span>}
          </label>

          <label>
            Check-in Date:
            <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} />
            {errors.checkIn && <span className="error">{errors.checkIn}</span>}
          </label>

          <label>
            Check-out Date:
            <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} />
            {errors.checkOut && <span className="error">{errors.checkOut}</span>}
          </label>

          <label>
            Room Type:
            <select name="roomType" value={formData.roomType} onChange={handleChange}>
              <option value="">Select type</option>
              <option value="Deluxe">Deluxe Room</option>
              <option value="Family">Family Suite</option>
              <option value="Presidential">Presidential Suite</option>
              <option value="Executive">Executive Suite</option>
              <option value="Honeymoon">Honeymoon Suite</option>
            </select>
            {errors.roomType && <span className="error">{errors.roomType}</span>}
          </label>

          <button type="submit">Submit Booking</button>
        </form>

        {confirmation && <div className="booking-confirmation">{confirmation}</div>}
      </div>

      <Footer />
    </>
  );
};

export default BookingForm;
