import './langBox.css';
import englishFlag from '../../assets/img/english.png';
import spanishFlag from '../../assets/img/spanish.png';
import { useState, useEffect } from 'react';
import i18n from '../../i18n/i18n.js';

function LangBox({ className = '' }) {
  const [idioma, setIdioma] = useState(() => {
    const actual = i18n.language;
    return actual === 'en' || actual === 'es' ? actual : 'es';
  });

  // Actualiza i18n y localStorage cuando se selecciona un nuevo idioma
  const cambiarIdioma = (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
    i18n.changeLanguage(nuevoIdioma);
    localStorage.setItem('idioma', nuevoIdioma);
  };

  // Sincroniza si el idioma cambia desde otro lado
  useEffect(() => {
    const handleLanguageChanged = (lng) => {
      setIdioma(lng);
    };
    i18n.on('languageChanged', handleLanguageChanged);
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  return (
    <div className={`lang-box ${className}`}>
      <div
        className={`lang-option ${idioma === 'es' ? 'selected' : 'non-selected'}`}
        onClick={() => cambiarIdioma('es')}
      >
        <img src={spanishFlag} alt="Español" />
        <span>Español</span>
      </div>

      <div
        className={`lang-option ${idioma === 'en' ? 'selected' : 'non-selected'}`}
        onClick={() => cambiarIdioma('en')}
      >
        <img src={englishFlag} alt="English" />
        <span>English</span>
      </div>
    </div>
  );
}

export default LangBox;
