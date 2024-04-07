import css from "./ImageCard.module.css";

const ImageCard = ({ photo }) => {
  return (
    <img
      className={css.img}
      src={photo.urls.small}
      alt={photo.alt_description}
    />
  );
};

export default ImageCard;
