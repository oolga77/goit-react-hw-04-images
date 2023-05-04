import { useEffect } from 'react';
import { ModalBackdrop, ModalContent } from './Modal.style';

export default function Modal({ onClose, image, tags }) {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [onClose]);

  const handleBackdropClisk = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalBackdrop onClick={handleBackdropClisk}>
      <ModalContent>
        <img src={image} alt={tags} />
      </ModalContent>
    </ModalBackdrop>
  );
}
