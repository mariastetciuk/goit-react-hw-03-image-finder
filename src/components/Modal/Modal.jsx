import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handlePressESC);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePressESC);
  }

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  handlePressESC = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { largeURl, description } = this.props;
    return (
      <div className={css.overlay} onClick={this.handleOverlayClick}>
        <div className={css.modal}>
          <img src={largeURl} alt={description} />
        </div>
      </div>
    );
  }
}
