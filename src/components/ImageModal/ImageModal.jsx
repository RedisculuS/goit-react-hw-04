import React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";
Modal.setAppElement("#root");

export const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      overlayClassName={css.modalOverlay}
      className={css.modalContent}
    >
      {image && (
        <div className={css.imageContainer}>
          <img
            src={image.urls.full}
            alt={image.description}
            className={css.imageModal}
          />
          <div className={css.imageInfo}>
            <p>
               {image.user.name}
            </p>
            <p>
              "{image.description || "No description available"}""
            </p>
            <p>
              Likes: {image.likes}
            </p>
          </div>
        </div>
      )}
    </Modal>
  );
};
