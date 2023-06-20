import { gsap } from 'gsap';
import { useEffect } from 'react';
import "../styles/style.css"

export default function Modal({ imageUrl, onClose }) {

  useEffect(() => {
    // Animate the modal or perform any other setup logic
    gsap.to('.modal', { opacity: 1, duration: 0.5 });
    return () => {
      // Clean up animations or perform any other teardown logic
      gsap.to('.modal', { opacity: 0, duration: 0.5 });
    };
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        <img className="modal-image" src={imageUrl} alt="Footnote Fullscreen" />
        <span className="modal-close" onClick={onClose}>Close</span>
      </div>
    </div>
  );

};
