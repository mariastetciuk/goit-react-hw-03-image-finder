import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ gallery, alt }) {
  return (
    <ul className="gallery">
      {gallery.map(item => {
        return (
          <li className="gallery-item" key={item.id}>
            <ImageGalleryItem url={item.webformatURL} description={alt} />
          </li>
        );
      })}
    </ul>
  );
}
