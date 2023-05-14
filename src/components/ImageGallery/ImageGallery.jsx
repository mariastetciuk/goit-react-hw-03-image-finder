import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
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
