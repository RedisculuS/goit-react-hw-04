import { ImageCard } from "../ImageCard/ImageCard";

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul>
        {images.map((image) => (
            <li key={image.id}>
                <ImageCard images={images} onImageClick={onImageClick} />
            </li>
        ))}
    </ul>
  );
};
