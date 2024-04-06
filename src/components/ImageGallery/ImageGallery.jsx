import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos }) => {
  return (
    <ul>
      {Array.isArray(photos) &&
        photos.map((photo) => {
          return (
            <li key={photo.id}>
              <ImageCard photo={photo} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
