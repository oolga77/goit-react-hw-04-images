import { Component } from 'react';
import { ModalBackdrop, ModalContent } from './Modal.style';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClisk = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <ModalBackdrop onClick={this.handleBackdropClisk}>
        <ModalContent>
          <img src={this.props.image} alt={this.props.tags} />
        </ModalContent>
      </ModalBackdrop>
    );
  }
}
