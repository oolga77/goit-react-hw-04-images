import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Container, Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, onGetImages }) => {
  return (
    <Container>
      <Gallery>
        {images.map(image => (
          <ImageGalleryItem
            // webformatURL={image.webformatURL}
            // tags={image.tags}
            key={image.id}
            image={image}
            getItemOnClick={onGetImages}
          />
        ))}
      </Gallery>
    </Container>
  );
};
