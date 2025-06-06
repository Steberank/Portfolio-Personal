import { useState } from 'react';
import Button from './components/buttonUnderline';
import Navbar from './components/navbar';
import Logo from './components/logo';
import LangBox from './components/langBox';
import './App.css';
import './i18n/i18n.js';
import { useTranslation } from 'react-i18next';
import Perfil from './components/perfil/index.jsx';
import noimage from './assets/img/noimage.jpg'
import BotonContacto from './components/ContactButton';
import mailLogo from "./assets/img/mailLogo.png";
import githubLogo from "./assets/img/githubLogo.png";
import linkedinLogo from "./assets/img/linkedinLogo.png";
import Tarjeta from './components/TarjetaCarrusel/Tarjeta.jsx';

function App() {
  const [popupVisible, setPopupVisible] = useState(false);

const handleCopyEmail = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    const textArea = document.createElement("textarea");
    textArea.value = "scalzodan04@gmail.com";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      console.error("Error al copiar en móvil", err);
    }
    document.body.removeChild(textArea);
  } else {
    // Copia moderna + popup personalizado solo en escritorio
    navigator.clipboard.writeText("scalzodan04@gmail.com");
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 5000);
  }
};



  const { t } = useTranslation();

  const izquierda = [
    <Logo className='navbar-logo'/>,
    <Button href="#" className='navbar-button'>{t('btn1')}</Button>,
    <Button href="#seccion-proyectos" className='navbar-button'>{t('btn2')}</Button>,
    <Button href="#contactame" className='navbar-button'>{t('btn3')}</Button>
  ];

  const derecha = [
    <LangBox className="navbar-lang"/>,
  ];


  return (
    <>
     <header>
      <div className="top-strip"></div> 
     <Navbar izquierda={izquierda} derecha={derecha} />
     </header>

     <div className='sobre-mi' id="sobre-mi">
        <Perfil></Perfil>
        <div className='introduccion'>
        <span className='antesNombre'>{t('antesNombre')}&nbsp;</span>
        <span className='nombre'>{t('nombre')}</span>
        <span className='despuesNombre'>&nbsp;{t('despuesNombre')}</span>
        <span className='resaltado'>{t('resaltado')}</span> 
        </div>
     </div>

     <div className='div-proyectos' id="seccion-proyectos">
        <span className='tarjeta-titulo-contenedor'>{t('btn2')}</span>
        <div className='tarjetas'>
          <Tarjeta imagen={noimage} titulo={"Proximamente"} descripcion={"Proximamente"} link1={"#1"} link2={"#2"} />
          <Tarjeta imagen={noimage} titulo={"Proximamente"} descripcion={"Proximamente"} link1={"#1"} link2={"#2"} />
          <Tarjeta imagen={noimage} titulo={"Proximamente"} descripcion={"Proximamente"} link1={"#1"} link2={"#2"} />
        </div>
     </div>

      <div className="contact-section" id="contactame">
        <h2 className="contact-title">{t('contacto')}</h2>

        {popupVisible && <div className="popup">{t('popup')}</div>}

        <div className="contact-buttons">
          <BotonContacto
            logo={mailLogo}
            texto="scalzodan04@gmail.com"
            onClick={handleCopyEmail}
          />

          <BotonContacto
            logo={githubLogo}
            texto="Github: Steberank"
            link="https://github.com/Steberank"
          />

          <BotonContacto
            logo={linkedinLogo}
            texto="Linkedin: Dan Stephano Scalzo"
            link="https://www.linkedin.com/in/dan-stephano-scalzo-00365b279"
          />
        </div>

      </div>

      <footer className="footer">
        © 2025 Dan Stephano Scalzo.
      </footer>

    </>
  )
}

export default App;
