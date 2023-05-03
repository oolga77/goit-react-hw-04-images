import { Component } from 'react';
import * as FetchImages from './API/FetchImages';
import { Container } from './APP.styled';
import { BTNLoadMore } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    totalHits: 0,
    error: null,
    showModal: false,
    largeImage: '',
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages(query, page);
      this.setState({ loading: true });
    }
  }

  fetchImages = async (query, page) => {
    try {
      const { hits, totalHits } = await FetchImages.getImages(query, page);

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        ...hits,
        totalHits: totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  getLargeImage = largeImage => {
    this.setState({ largeImage, showModal: true });
  };

  toggleSpinner = spinnerStatus => {
    this.setState({
      loading: spinnerStatus,
    });
  };

  onSubmit = value => {
    this.setState({
      query: value,
      page: 1,
      images: [],
      totalHits: 0,
      error: null,
    });
  };

  heandleIncrementPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  imageClick = imageUrl => {
    this.setState({ largeImage: imageUrl, showModal: true });
  };

  render() {
    const { page, totalHits, showModal, largeImage } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />
        {showModal && <Modal image={largeImage} onClose={this.toggleModal} />}
        <ImageGallery
          images={this.state.images}
          onGetImages={this.getLargeImage}
          toggleSpinner={this.toggleSpinner}
        />

        {this.state.error && (
          <p textAlign="center">
            Sorry. Something went wrong!!! Please try again!
          </p>
        )}

        {this.state.loading && <Loader />}

        {page < Math.ceil(totalHits / 12) && (
          <BTNLoadMore onClick={this.heandleIncrementPage} />
        )}
      </Container>
    );
  }
}
