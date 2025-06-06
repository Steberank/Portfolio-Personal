import { useState } from 'react';
import './ContactButton.css';
import externalLinkIconGreen from "../../assets/img/externalLinkGreen.png";
import externalLinkIconWhite from "../../assets/img/externalLinkWhite.png";

const BotonContacto = ({ logo, texto, link, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const contenido = (
    <>
      <img src={logo} alt="icono" className="icon" />
      {texto}
      {link && (
        <img
          src={isHovered ? externalLinkIconWhite : externalLinkIconGreen}
          alt="Nueva pestaña"
          className="external-icon"
        />
      )}
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        className="contact-button"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {contenido}
      </a>
    );
  }

  return (
    <button
      className="contact-button"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {contenido}
    </button>
  );
};

export default BotonContacto;
