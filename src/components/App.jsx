import * as FetchImages from './API/FetchImages';
import { Container } from './APP.styled';
import { BTNLoadMore } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { useState } from 'react';
import { useEffect } from 'react';

export function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchImages = async () => {
      setLoading({ loading: true });
      try {
        const { hits, totalHits } = await FetchImages.getImages(query, page);
        setImages(images => [...images, ...hits]);
        setTotalHits(totalHits);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const getLargeImage = largeImage => {
    setLargeImage(largeImage);
    setShowModal(true);
  };

  const toggleSpinner = spinnerStatus => {
    setLoading(spinnerStatus);
  };

  const onSubmit = value => {
    setQuery(value);
    setPage(1);
    setImages([]);
    setTotalHits(0);
    setError(null);
  };

  const heandleIncrementPage = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      <Searchbar onSubmit={onSubmit} />
      {showModal && <Modal image={largeImage} onClose={toggleModal} />}
      <ImageGallery
        images={images}
        onGetImages={getLargeImage}
        toggleSpinner={toggleSpinner}
      />

      {error && (
        <p textAlign="center">
          Sorry. Something went wrong!!! Please try again!
        </p>
      )}

      {loading && <Loader />}

      {page < Math.ceil(totalHits / 12) && (
        <BTNLoadMore onClick={heandleIncrementPage} />
      )}
    </Container>
  );
}
