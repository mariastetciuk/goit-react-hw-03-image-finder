import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { url, largeURL, description } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <img
          className={css.img}
          src={url}
          alt={description}
          onClick={this.toggleModal}
        />
        {showModal && (
          <Modal
            largeURL={largeURL}
            description={description}
            closeModal={this.toggleModal}
          />
        )}
      </>
    );
  }
}
