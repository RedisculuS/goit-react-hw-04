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
        <img
          src={image.urls.full}
          alt={image.description}
          className={css.imageModal}
        />
      )}
    </Modal>
  );
};
