import { gsap } from 'gsap';
import { useEffect } from 'react';
import "../styles/style.css"

const Modal = ({ imageUrl, onClose }) => {
  useEffect(() => {
    // Animate the modal or perform any other setup logic
    gsap.to('.modal', { opacity: 1, duration: 0.5 });
    console.log("helllo");
    return () => {
      // Clean up animations or perform any other teardown logic
      gsap.to('.modal', { opacity: 0, duration: 0.5 });
    };
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        <img className="modal-image" src={imageUrl} alt="Footnote Fullscreen" />
        <button className="modal-close" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Modal;