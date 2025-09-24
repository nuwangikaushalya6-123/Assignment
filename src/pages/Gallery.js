
import Navbar from "../Components/Navbar/Navbar";
import GalleryItem from "../Components/GalleryItem";

import weding1 from "../assest/wedin1.jpg";
import Buffet1 from "../assest/food.jpg";
import pool1 from "../assest/pool1.jpg";
import image7 from "../assest/image7.avif";
import image8 from "../assest/image8.avif";
import image3 from "../assest/image3.avif";
import image4 from "../assest/image4.avif";
import image5 from "../assest/image5.avif";
import image6 from "../assest/image6.avif";
import "./Gallery.css";
import Footer from "../Components/Footer/Footer";

const Gallery = () => {
  const photos = [

    { name: "weding ", image: weding1 },
    { name: "Buffet1", image: Buffet1 },
    { name: "pool1", image: pool1 },
    { name: "image7", image: image7 },
    { name: "image8", image: image8 },
    { name: "image3", image: image3 },
    { name: "image4", image: image4 },
    { name: "image5", image: image5 },
    { name: "image6", image: image6 }
  ];

  return (
    <>
      <Navbar />

      <div className="title">
        <h2>GALLERY </h2>
      </div>

      <div className="gallery-container">

        {photos.map((photo, index) => (
          <GalleryItem
            key={index}
            name={photo.name}

            image={photo.image}
          />
        ))}

      </div>

      <Footer />
    </>
  );
};

export default Gallery;
