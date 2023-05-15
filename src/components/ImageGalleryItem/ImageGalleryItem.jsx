import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
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

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  largeURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
