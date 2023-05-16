import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

export function ImageGallery({ gallery, alt }) {
  return (
    <ul className={css.list}>
      {gallery.map(item => {
        return (
          <li className={css.item} key={item.id}>
            <ImageGalleryItem
              url={item.webformatURL}
              description={alt}
              largeURL={item.largeImageURL}
            />
          </li>
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  alt: PropTypes.string.isRequired,
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
