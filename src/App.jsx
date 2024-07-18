import "./App.css";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage.jsx";
import { ImageGallery } from "./components/ImageGallery/ImageGallery.jsx";
import { ImageModal } from "./components/ImageModal/ImageModal.jsx";
import { Loader } from "./components/Loader/Loader.jsx";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import { SearchBar } from "./components/SearchBar/SearchBar.jsx";
import { fetchImageWithSearch } from "./searchImages-api.jsx";

import { useEffect, useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (topic) => {
    setPage(1);
    setTopic(topic);
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchImageWithSearch(topic, 1);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    try {
      setLoading(true);
      const data = await fetchImageWithSearch(topic, nextPage);
      setImages((prevImages) => [...prevImages, ...data]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <h1>Let`s find some images!</h1>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {loading && <Loader />}
      {error && (
        <ErrorMessage message="Something went wrong. Try to reload the page" />
      )}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </>
  );
}

export default App;
