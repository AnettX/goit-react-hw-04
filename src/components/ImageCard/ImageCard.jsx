const ImageCard = ({ photo }) => {
  return <img width={250} src={photo.urls.small} alt={photo.alt_description} />;
};

export default ImageCard;
