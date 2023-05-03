import { ImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { webformatURL, tags, largeImageURL },
  getItemOnClick,
}) => {
  return (
    <ImageItem className="gallery-item">
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => getItemOnClick(largeImageURL)}
      />
    </ImageItem>
  );
};

// export const ImageGalleryItem = ({
//   image: { webformatURL, tags, largeImageURL },
//   getItemOnClick,
// }) => {
//   return (
//     <ImageItem>
//       <img
//         src={webformatURL}
//         alt={tags}
//         onClick={() => getItemOnClick(largeImageURL)}
//       />
//     </ImageItem>
//   );
// };
