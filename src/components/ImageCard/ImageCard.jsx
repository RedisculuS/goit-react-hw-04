import css from "./ImageCard.module.css";

export const ImageCard = ({ images, onImageClick }) => {
  return (
    <div className={css.imageCardBox}>
      {images.map((photo) => (
        <img
          className={css.imageCard}
          key={photo.id}
          src={photo.urls.small}
          alt={photo.description}
          onClick={() => onImageClick(photo)}
          style={{ cursor: "pointer" }}
        />
      ))}
    </div>
  );
};
