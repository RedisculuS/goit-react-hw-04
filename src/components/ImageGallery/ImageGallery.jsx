import { ImageCard } from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.imageCardBox}>
      {images.map((image) => (
        <li key={image.id} >
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};