import React from "react";
import "./EventPage.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Event1 from '../assest/Event1.jpeg';
import Event2 from '../assest/Event2.jpg';
import Event3 from '../assest/Event3.jpg';
import Event4 from '../assest/Event4.jpg';

const events = [
  {

    
    description:
      "Experience a vibrant evening of traditional dances, live music, and authentic Sri Lankan cuisine.",
    image: Event1,
  },
  {
   
  
    description:
      "Join us for a fun-filled BBQ with live DJ, cocktails, and a relaxing poolside atmosphere.",
    image:Event2,
  },
  {
    
    description:
      "Celebrate Christmas Eve with a grand buffet, live carols, and festive decorations.",
    image: Event3,
  },
   {
    
    description:
      "Host your business conference in our elegant ballroom, featuring state-of-the-art AV facilities, comfortable seating, and professional catering for a productive and memorable event.",
    image: Event4,
  },
];

const EventPage = () => {
  return (
    <>
      <Navbar />

       <div className="title">
                <h2>Events</h2>
            </div>

      <div className="event-page">
        
        {events.map((event, index) => (
          <div
            key={index}
            className={`event-card ${index % 2 === 0 ? "normal" : "reverse"}`}
          >
            <div className="event-details">
            
              
              <p>{event.description}</p>
            </div>
            <div className="event-image">
              <img src={event.image} alt={event.title} />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default EventPage;
