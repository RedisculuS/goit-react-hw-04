import css from "./ImageCard.module.css";

export const ImageCard = ({ image, onImageClick }) => {
  return (
    <div >
      <img
        className={css.imageCard}
        src={image.urls.small}
        alt={image.description}
        onClick={() => onImageClick(image)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};
