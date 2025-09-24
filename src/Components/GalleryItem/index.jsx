

const GalleryItem = ({ image, title }) => {
  return (
    <div className="gallery-card">
      <img src={image} alt={title} />
      <p>{title}</p> 
    </div>
  );
};

export default GalleryItem;
