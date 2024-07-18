import { ImageCard } from "../ImageCard/ImageCard";

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul>
      <ImageCard images={images} onImageClick={onImageClick} />
    </ul>
  );
};
